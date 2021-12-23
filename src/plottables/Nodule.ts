import Two from "two.js";
import { Stylable } from "./Styleable";
import { Resizeable } from "./Resizeable";
import SETTINGS from "@/global-settings";
import { StyleOptions, StyleEditPanels } from "@/types/Styles";
import {
  hslaColorType,
  plottableProperties,
  ProjectedEllipseData,
  EllipsePosition
} from "@/types";
import { PositionalAudio, Vector3 } from "three";

export enum DisplayStyle {
  ApplyTemporaryVariables,
  ApplyCurrentVariables
}

const tmpVector = new Vector3();

/**
 * A Nodule consists of one or more TwoJS(SVG) elements
 */
export default abstract class Nodule implements Stylable, Resizeable {
  /**
   * The number that control the styling of certain colors and opacities and size if dynamicBackStyling is true
   */
  static globalBackStyleContrast = SETTINGS.style.backStyleContrast;

  /**
   * A map that lets use look up the properties of a plottable object
   * using only the TwoJS id. Useful in the creation of icons when processing the SVG
   * in IconFactory
   */
  public static idPlottableDescriptionMap = new Map<
    string,
    plottableProperties
  >();

  protected styleOptions: Map<StyleEditPanels, StyleOptions> = new Map();
  /**
   * Is this needed when we reset the sphere canvas? I'm not sure yet, so I commented out the calls to it
   * when resetting/loading.
   */
  static resetIdPlottableDescriptionMap(): void {
    Nodule.idPlottableDescriptionMap.clear();
  }

  /**
   * @param unitNormal The unitNormal to the circle in the current view
   * @param radius The radius of the circle 0<radius<pi
   * @returns The data to create the projected ellipse
   */
  static projectedEllipseData(
    unitNormal: Vector3,
    radius: number
  ): ProjectedEllipseData {
    let centerX: number;
    let centerY: number;
    let tiltAngle: number;
    let minorAxis: number; //half the minor diameter
    let majorAxis: number; //half the major diameter
    let position: EllipsePosition; // contained entirely in front/back or split
    let positiveZStartAngle: number;
    let positiveZEndAngle: number;
    // First check to see if the unit normal is pointing directly at or away from the user, if so then the projection is a circle
    if (
      Math.abs(unitNormal.z - 1) < SETTINGS.tolerance ||
      Math.abs(unitNormal.z + 1) < SETTINGS.tolerance
    ) {
      // All ellipse data is zero except the axes which are the radius of the projected circle.
      minorAxis = Math.sin(radius);
      majorAxis = minorAxis;
      centerX = 0;
      centerY = 0;
      tiltAngle = 0;
      // the projected ellipse is closed and contained entirely on either the front or the back
      positiveZStartAngle = 0;
      positiveZEndAngle = 0;
      position =
        unitNormal.z > 0
          ? EllipsePosition.ContainedEntirelyOnFront
          : EllipsePosition.ContainedEntirelyOnBack;
    } else {
      // both unitNormal.x and unitNormal.y can't be zero
      centerX = unitNormal.x * Math.cos(radius);
      centerY = unitNormal.y * Math.cos(radius);
      majorAxis = Math.sin(radius);
      // alpha is the angle between the unitNormal and z axis
      const alpha = Math.acos(unitNormal.z);
      minorAxis = Math.sin(radius) * Math.sin(Math.abs(Math.PI / 2 - alpha)); // Math.abs(Math.PI / 2 - alpha)) is the angle between the unit normal and the plane z=0
      tiltAngle =
        Math.abs(unitNormal.y) < SETTINGS.tolerance
          ? Math.PI / 2
          : Math.atan(-unitNormal.x / unitNormal.y);
      // Now figure out if the circle intersects the plane z=0
      if (
        (radius < Math.PI / 2 &&
          (alpha + radius < Math.PI / 2 || alpha - radius > Math.PI / 2)) ||
        (radius > Math.PI / 2 &&
          (radius - alpha > Math.PI / 2 ||
            2 * Math.PI - alpha - radius < Math.PI / 2))
      ) {
        // there is no intersection with z=0, to signal this set both the positiveZStart/EndAngle to zero
        // the projected ellipse is closed and contained entirely on either the front or the back
        position =
          unitNormal.z > 0
            ? EllipsePosition.ContainedEntirelyOnFront
            : EllipsePosition.ContainedEntirelyOnBack;
        positiveZStartAngle = 0;
        positiveZEndAngle = 0;
      } else {
        // there is an intersection with z=0
        position = EllipsePosition.SplitBetweenFrontAndBack;

        // the intersection points are the those between the line x*unitNormal.x+y*unitNormal.y=cos(radius) and x^2 + y^2 =1
        if (Math.abs(unitNormal.y) < SETTINGS.tolerance) {
          //unitNormal.y is zero, but unitNormal.x is not zero (because unitNormal.z is not 1)
          // the intersection points are (X,+/-Y)
          const X = Math.cos(radius) / unitNormal.x;
          const Y = Math.sqrt(1 - X * X);
          if (unitNormal.z > 0) {
            positiveZStartAngle = Math.atan2(
              centerY-Y,
              centerX-X
            ).modTwoPi();
            positiveZEndAngle = Math.atan2(
              centerY+Y,
              centerX-X
            ).modTwoPi();
          } else {
            positiveZStartAngle = Math.atan2(
              centerY+Y,
              centerX-X
            ).modTwoPi();
            positiveZEndAngle = Math.atan2( centerY-Y,
              centerX-X).modTwoPi();
          }
        } else {
          //unitNormal.y is not zero the intersection points are those between y=mx+b (m =-unitNormal.x/unitNormal.y, b = cos(radius)/unitNormal.y ) and x^2 + y^2 =1
          // (X1,Y1) and (X2,Y2)
          const m = unitNormal.x / unitNormal.y;
          const b = Math.cos(radius) / unitNormal.y;
          const X1 = (-m * b + Math.sqrt(m * m - b * b + 1)) / (1 + m * m);
          const X2 = (-m * b - Math.sqrt(m * m - b * b + 1)) / (1 + m * m);
          const Y1 = m * X1 + b;
          const Y2 = m * X2 + b;
          if (unitNormal.z > 0) {
            positiveZStartAngle = Math.atan2(
              centerY-Y1,
              centerX-X1
            ).modTwoPi();
            positiveZEndAngle = Math.atan2(
              centerY-Y2,
              centerX-X2
            ).modTwoPi();
          } else {
            positiveZStartAngle = Math.atan2(
              centerY-Y2,
              centerX-X2
            ).modTwoPi();
            positiveZEndAngle = Math.atan2(
              centerY-Y1,
              centerX-X1
            ).modTwoPi();
          }
        }
      }
    }

    return {
      centerX: centerX,
      centerY: centerY,
      tiltAngle: tiltAngle,
      minorAxis: minorAxis,
      majorAxis: majorAxis,
      position: position,
      positiveZStartAngle: positiveZStartAngle,
      positiveZEndAngle: positiveZEndAngle
    };
  }
  /**
   * Add various TwoJS (SVG) elements of this nodule to appropriate layers
   * @param {Two.Group[]} layers
   */
  abstract addToLayers(layers: Two.Group[]): void;

  /**
   * This operation reverses the action performed by addToLayers()
   */
  abstract removeFromLayers(layers?: Two.Group[]): void;

  /**This operation constraint the visual properties (linewidth, circle size, etc) when the view is zoomed in/out */
  abstract adjustSize(): void;

  /** Update visual style(s) */
  abstract normalDisplay(): void;
  abstract glowingDisplay(): void;
  /** set the glowing visual style differently depending on if selected or not */
  abstract setSelectedColoring(flag: boolean): void;

  /** Get the default style state of the Nodule */
  abstract defaultStyleState(mode: StyleEditPanels): StyleOptions;

  /** Set the temporary/glowing/default/updated style*/
  abstract stylize(flag: DisplayStyle): void;

  /** Hide the object if flag = false, set normalDisplay() if flag = true  */
  abstract setVisible(flag: boolean): void;

  /**
   * Update the display of the object called after all the necessary variables have been set so
   * an updated object will be rendered correctly
   */
  abstract updateDisplay(): void;

  static setBackStyleContrast(contrast: number): void {
    this.globalBackStyleContrast = contrast;
  }

  static getBackStyleContrast(): number {
    return this.globalBackStyleContrast;
  }

  /**
   * Get the back contrasting style using the value of globalBackStyleContrast
   * Principle:
   * Contrast = 1 => no difference between front and back
   * Contrast = 0 => Nothing appears on back of sphere for colors and size reduction is maximized
   */
  static contrastFillColor(frontColor: string | undefined): string {
    if (
      Nodule.hlsaIsNoFillOrNoStroke(frontColor) ||
      Nodule.globalBackStyleContrast === 0
    ) {
      return "hsla(0,0%,0%,0)";
    }

    const hslaColor = Nodule.convertStringToHSLAObject(frontColor);
    hslaColor.l = 1 - (1 - hslaColor.l) * Nodule.globalBackStyleContrast;
    return Nodule.convertHSLAObjectToString(hslaColor);
  }

  static contrastStrokeColor(frontColor: string | undefined): string {
    if (
      Nodule.hlsaIsNoFillOrNoStroke(frontColor) ||
      Nodule.globalBackStyleContrast === 0
    ) {
      return "hsla(0,0%,0%,0)";
    }
    const hslaColor = Nodule.convertStringToHSLAObject(frontColor);
    hslaColor.l = 1 - (1 - hslaColor.l) * Nodule.globalBackStyleContrast;
    return Nodule.convertHSLAObjectToString(hslaColor);
  }

  // The back linewidth can be up to 20% smaller than their front counterparts.
  static contrastStrokeWidthPercent(frontPercent: number): number {
    return frontPercent - 20 * Nodule.globalBackStyleContrast;
  }
  // The back points can be up to 20% smaller in radius than their front counterparts.
  static contrastPointRadiusPercent(frontPercent: number): number {
    return frontPercent - 20 * (1 - Nodule.globalBackStyleContrast);
  }
  static contrastTextScalePercent(frontPercent: number): number {
    return frontPercent - 20 * (1 - Nodule.globalBackStyleContrast);
  }
  static convertStringToHSLAObject(
    colorStringOld: string | undefined
  ): hslaColorType {
    if (colorStringOld) {
      //remove the first 5 and last character of the string
      const colorString = colorStringOld.slice(5, -1);
      const numberArray = colorString
        .split(",")
        .map(x => x.replace("%", "").trim()); //remove the percent symbols and the padding spaces
      if (Number(numberArray[3]) <= 0) {
        // If the alpha/opacity value is zero the color picker slider for alpha/opacity disappears and can't be returned
        numberArray[3] = "0";
      }
      return {
        h: Number(numberArray[0]),
        s: Number(numberArray[1]) / 100,
        l: Number(numberArray[2]) / 100,
        a: Number(numberArray[3])
      };
    } else {
      // This should never happen
      throw new Error(`Color string is undefined`);
    }
  }
  static hlsaIsNoFillOrNoStroke(colorStringOld: string | undefined): boolean {
    if (colorStringOld) {
      const hsla = Nodule.convertStringToHSLAObject(colorStringOld);
      return Math.max(hsla.h, hsla.s, hsla.l, hsla.a) < SETTINGS.tolerance;
    } else {
      throw new Error(`Color string is undefined`);
    }
  }
  static convertHSLAObjectToString(colorObject: hslaColorType): string {
    // if (colorObject.a == undefined || colorObject.a == 0) {
    //   // If the alpha/opacity value is zero the color picker slider for alpha/opacity disappears and can't be returned
    //   colorObject.a = 0.001;
    //   //this.displayOpacityZeroMessage = true;
    // }
    return (
      "hsla(" +
      colorObject.h +
      ", " +
      colorObject.s * 100 +
      "%, " +
      colorObject.l * 100 +
      "%, " +
      colorObject.a +
      ")"
    );
  }

  /** Get the current style state of the Nodule */
  currentStyleState(mode: StyleEditPanels): StyleOptions {
    return this.styleOptions.get(mode) ?? {};
  }
  /**
   * Copies the style options set by the Style Panel into the style variables and then updates the
   * Two.js objects (with adjustSize and stylize(ApplyVariables))
   * @param options The style options
   */
  updateStyle(mode: StyleEditPanels, options: StyleOptions): void {
    // console.debug("Update style of plottable", this, "using", options);
    const currentOptions = this.styleOptions.get(mode);
    // console.log(
    //   "mode",
    //   mode,
    //   "options",
    //   options,
    //   "current options",
    //   currentOptions
    // );
    this.styleOptions.set(mode, { ...currentOptions, ...options });
    // console.log("style options", this.styleOptions);
    // Now apply the style and size
    this.stylize(DisplayStyle.ApplyCurrentVariables);
    this.adjustSize();
  }
}
