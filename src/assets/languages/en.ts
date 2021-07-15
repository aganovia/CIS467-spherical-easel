import { LocaleMessages } from "vue-i18n";

export default {
  main: {
    ConstructionsTabToolTip: "Saved Constructions",
    ObjectsTabToolTip: "Objects",
    RedoLastAction: "Redo last action",
    SphericalEaselMainTitle: "Spherical Easel",
    ToolsTabToolTip: "Tools",
    UndoLastAction: "Undo last action"
  },

  toolGroups: {
    EditTools: "Edit Tools",
    DisplayTools: "Display Tools",
    BasicTools: "Basic Tools",
    ConicTools: "Conic Tools",
    ConstructionTools: "Construction Tools",
    AdvancedTools: "Advanced Tools",
    TransformationalTools: "Transformational Tools",
    MeasurementTools: "Measurement Tools",
    DeveloperOnlyTools: "Developer Only Tools"
  },
  buttons: {
    CurrentTool: "Current Tool",
    NoToolSelected: "No Tool Selected",

    CreateAngleDisplayedName: "Measure<br>Angle",
    CreateAngleToolTipMessage: "Calculate Angle",
    CreateAngleToolUseMessage:
      "Select two lines/segments or three points to calculate an angle.",

    CreateAntipodalPointDisplayedName: "Antipodal<br>Point",
    CreateAntipodalPointToolTipMessage: "Create Antipode",
    CreateAntipodalPointToolUseMessage:
      "Select a location to create a point (if necessary) and its antipode",

    CreatePolarDisplayedName: "Polar<br>&nbsp;",
    CreatePolarToolTipMessage: "Create polar line or polar points",
    CreatePolarToolUseMessage:
      "Select a location to create a point (if necessary) and its polar line or select a line segment or line to create both polar points",

    CreateCircleDisplayedName: "Create<br>Circle",
    CreateCircleToolTipMessage: "Insert circle",
    CreateCircleToolUseMessage:
      "Click to insert a circle with a given center point and through a second point.",

    CreateCoordinateDisplayedName: "Coordinates<br>&nbsp;",
    CreateCoordinateToolTipMessage: "Measure x,y,z coordinates",
    CreateCoordinateToolUseMessage:
      "Select a point to measure its x,y,z coordinates on the sphere",

    CreateEllipseDisplayedName: "Ellipse<br>&nbsp;",
    CreateEllipseToolTipMessage: "Insert ellipse",
    CreateEllipseToolUseMessage:
      "Select two distinct non-antipodal points and another point on the ellipse",

    CreateIntersectionDisplayedName: "Intersection<br>Point(s)",
    CreateIntersectionToolTipMessage: "Intersect two one-dimensional objects",
    CreateIntersectionToolUseMessage:
      "Select two one-dimensional objects to create their intersection point(s).",

    CreateLineSegmentDisplayedName: "Create Line<br>Segment",
    CreateLineSegmentToolTipMessage: "Insert line segment",
    CreateLineSegmentToolUseMessage:
      "Click to insert line segment defined by two points.",

    CreateLineDisplayedName: "Create<br>Line",
    CreateLineToolTipMessage: "Insert line",
    CreateLineToolUseMessage: "Click to insert a line defined by two points.",

    CreatePointDistanceDisplayedName: "Point<br>Distance",
    CreatePointDistanceToolTipMessage: "Distance of Two Points",
    CreatePointDistanceToolUseMessage:
      "Select two points to measure the distance between them",

    CreatePointOnOneDimDisplayedName: "Point On<br>Object",
    CreatePointOnOneDimToolTipMessage:
      "Select a one-dimensional object to place a point on",
    CreatePointOnOneDimToolUseMessage:
      "Select a one-dimensional object to add a point to.",

    CreatePointDisplayedName: "Create<br>Point",
    CreatePointToolTipMessage: "Insert point",
    CreatePointToolUseMessage: "Click to insert a free point.",

    CreateSegmentLengthDisplayedName: "Line Segment<br>Length",
    CreateSegmentLengthToolTipMessage: "Length of Line Segment",
    CreateSegmentLengthToolUseMessage:
      "Click this button to compute the length of Line Segment",

    CreateSliderDisplayedName: "Measurement<br>Slider",
    CreateSliderToolTipMessage: "User Controlled Value",
    CreateSliderToolUseMessage: "Click this button to create a value slider ",

    CreatePerpendicularDisplayedName: "Perpendicular<br>&nbsp;",
    CreatePerpendicularToolTipMessage: "Perpendicular Through Point",
    CreatePerpendicularToolUseMessage:
      "Create a perpendicular line to a selected one-dimensional object and selected location.",

    DeleteDisplayedName: "Delete<br>&nbsp;",
    DeleteToolTipMessage: "Delete Objects",
    DeleteToolUseMessage:
      "Select objects to delete. Hold the SHIFT key to select from the back of the sphere.",

    HideDisplayedName: "Hide<br>Objects",
    HideObjectToolTipMessage: "Hide objects",
    HideObjectToolUseMessage:
      "Select objects to hide. Hold the SHIFT key to select from the back of the sphere.",

    MoveDisplayedName: "Move<br>Objects",
    MoveObjectToolTipMessage: "Move object",
    MoveObjectToolUseMessage:
      "Click and drag an object to move it. Movable objects include labels, free points, and line segments with antipodal endpoints. Hold the SHIFT key to select from the back of the sphere.",

    PanZoomInDisplayedName: "Zoom In<br>Pan",
    PanZoomInToolTipMessage: "Pan or Zoom In",
    PanZoomInToolUseMessage:
      "Click to zoom in at the location of the mouse. Click and drag to pan the current view.",

    PanZoomOutDisplayedName: "Zoom Out<br>Pan",
    PanZoomOutToolTipMessage: "Pan or Zoom Out",
    PanZoomOutToolUseMessage:
      "Click to zoom out at the location of the mouse. Click and drag to pan the current view.",

    ZoomFitDisplayedName: "Zoom Fit<br>&nbsp;",
    ZoomFitToolTipMessage: "Zoom Fit",
    ZoomFitToolUseMessage: "Fits the sphere in the available space.",

    RotateDisplayedName: "Rotate<br>Sphere",
    RotateSphereToolTipMessage: "Rotate Sphere",
    RotateSphereToolUseMessage: "Click and drag to rotate the sphere.",

    SelectDisplayedName: "Select<br>Objects",
    SelectToolTipMessage: "Select Objects",
    SelectToolUseMessage:
      "Click on objects to select them, hold the Alt key to add to your selection.",

    ToggleLabelDisplayedName: "Toggle Label<br>Display",
    ToggleLabelToolTipMessage: "Toggle Display Of Labels",
    ToggleLabelToolUseMessage:
      "Click on objects to toggle the display of their labels.",

    CreateIconDisplayedName: "Create<br>Icon",
    CreateIconToolTipMessage: "Create Icon SVG Paths",
    CreateIconToolUseMessage:
      "Click to create an the SVG paths for an icon from current view."
  },
  settings: {
    title: "Preferences"
  },
  objects: {
    points: "Points | Point | point",
    lines: "Lines | Line | line",
    circles: "Circles | Circle| circle",
    segments: "Line Segments | Line Segment | line segment",
    measurements: "Measurements | Measurement | measurement",
    ellipses: "Ellipses | Ellipse |ellipse"
  },

  style: {
    labelStyle: "Label Style",
    foregroundStyle: "Foreground Style",
    backgroundStyle: "Background Style",
    advancedStyle: "Advanced Style",

    back: "Back",
    front: "Front",
    value: "Value",

    point: "1 Point | {count} Points",
    line: "1 Line | {count} Lines",
    segment: "1 Segment| {count} Segments",
    circle: "1 Circle | {count} Circles",
    label: "1 Label | {count} Labels",
    angleMarker: "1 Angle Marker | {count} Angle Markers",
    ellipse: "1 Ellipse | {count} Ellipses",

    showLabels: "Show Label(s)",
    showObjects: "Show Object(s)",

    noFill: "No Fill",
    noStroke: "No Stroke",

    noFillLabelTip:
      "If you want to make the labels only appear on the front of the sphere disable automatic back styling and check 'No Fill' on the Label Back Fill Color. Similarly, to make the labels only appear on the back of the sphere disable automatic back styling and check 'No Fill' on the Label Front Fill Color.",

    selectAnObject: "Select Object(s) To Style",
    closeOrSelect: "Close the styling panel or select object(s).",
    toSelectObjects: "To select objects:",
    selectionDirection1: "Click on glowing objects to select them.",
    selectionDirection2:
      "Hold the Alt/Option key to add or subtract from your selection.",
    selectionDirection3:
      "Press a number key to select an object at that depth.",
    selectionDirection4:
      "Press the p key and click in any empty location to add all points. Similar for lines (l), line segments (s), circles (c), ellipses (e), and angle markers (a).",
    closeStylingPanel: "Close Styling Panel",
    noSelectionToolTip:
      "No objects are currently selected. Either select objects with the selection tool or click this button to close the style panel.",

    labelNotVisible: "Label(s) not visible.",
    clickToMakeLabelsVisible:
      "Click the button below to make all labels visible and then to style them.",
    makeLabelsVisible: "Make Label(s) Visible",
    labelsNotShowingToolTip:
      "Not all labels in the current selection are visible. Click this button to make them visible and then they will be styleable.",

    objectNotVisible: "Object(s) not visible.",
    clickToMakeObjectsVisible:
      "Click the button below to make all objects visible and then to style them.",
    makeObjectsVisible: "Make Object(s) Visible",
    objectsNotShowingToolTip:
      "Not all objects in the current selection are visible. Click this button to make them visible and then they will be styleable.",

    backStyleDisagreement: "Back Styling Disagreement",
    styleDisagreement: "Common Style Disagreement",
    differentValues:
      "The selected objects have different values for at least one of these style options. Click the button and edit a style to make all selected objects have that style value in common.",
    enableCommonStyle: "Overide",
    differentValuesToolTip:
      "The selected objects have different values for at least one style option. Click the button and edit a style to make all selected objects have that style value in common.",

    dynamicBackStyleHeader: "Automatic Back Styling",
    disableDynamicBackStyle: "Disable",
    enableDynamicBackStyle: "Enable",
    disableDynamicBackStyleToolTip:
      "The styling of objects on the back of the sphere is handled automatically unless disabled. The automatic style depends on a Back Styling Contrast percent and the front styling. The contrast is a global variable and applies to all objects the have Dynamic Back Styling enabled. If the contrast is 100%, then there is no difference between the styling of objects on the front and the back of the sphere. If the contrast is 0%, then colors on back of sphere are almost transparent and size reduction is maximized for points and thicknesses. Dash pattern is not effected by the contrast. The Back Contrast percent may be set in the Background Style panel.",

    clearChanges: "Undo",
    clearChangesToolTip:
      "Revert the selected object(s) back to the style they had when they were *first* selected.",

    restoreDefaults: "Apply Defaults",
    restoreDefaultsToolTip:
      "Revert the selected object(s) back to their default(s).",

    showColorInputs: "Color Inputs",
    showColorInputsToolTip: "Click this to enter color code values directly.",

    disableBackStyleContrastSlider:
      "Click To Disable Dynamic Back Style For Selected Object(s)",
    disableBackStyleContrastSliderToolTip:
      "The selected objects have dynamic back style enabled. Click this button disable it for only the selected object(s). Then you can change the back style of the selected object(s) using the style options in this panel.",

    disableDashPatternSlider: "Set No Dash Pattern",
    disableDashPatternSliderToolTip:
      "Click this button to set no dash pattern on all selected object(s).",

    enableBackStyleContrastSlider:
      "Click To Enable Dynamic Back Style For Selected Object(s)",
    enableBackStyleContrastSliderToolTip:
      "The selected objects do not have dynamic back style enabled. Click this button enable it and adjust the Back Contrast Slider.",

    moreStyleOptions: "More",
    lessStyleOptions: "Less",
    toggleStyleOptionsToolTip: "More/Less label styling options.",

    convertSelectionToLabels:
      "A mix of label and non-label objects were selected when all label displays were changed. In order to do this the current selection was converted to all the labels of those objects.",

    dashPattern: "Enabled",
    dashPatternCheckBoxToolTip:
      "Enable or Disable a dash pattern for the selected objects.",

    fillColor: "Fill Color",
    labelFrontFillColor: "Label Front Fill Color",
    labelBackFillColor: "Label Back Fill Color",
    pointRadiusPercent: "Point Radius",
    angleMarkerRadiusPercent: "Angle Marker Radius",
    angleMarkerDecorations: "Angle Marker Decorations",
    angleMarkerDoubleArc: "Double Arc",
    angleMarkerTickMark: "Tick Mark",

    strokeColor: "Stroke Color",
    strokeWidthPercent: "Stroke Width",
    dynamicBackStyle: "Dynamic Back Style",
    backStyleContrast: "Global Back Style Contrast",
    backStyleContrastToolTip:
      "By default the back side display style of an object is determined by the front style of that object and the value of Back Style Contrast. A Back Style Contrast of 100% means there is no color or size difference between front and back styling. A Back Style Contrast of 0% means that the object is barely visible and its size reduction is maximized.",

    labelStyleOptions: "Label Text Options",
    labelStyleOptionsMultiple: "(Multiple)",
    labelText: "Label Text",
    labelCaption: "Label Caption",
    renameLabels: "Rename All",
    maxMinLabelDisplayTextLengthWarning:
      "Must be between 1 and {max} characters long.",
    maxMinLabelDisplayCaptionLengthWarning:
      "Must be at most {max} characters long.",
    labelTextScalePercent: "Label Scale",
    labelTextRotation: "Label Rotation",
    labelDisplayText: "Label Text",
    labelDisplayCaption: "Label Caption",
    labelTextStyle: "Label Text Style",
    labelTextFamily: "Label Text Family",
    genericSanSerif: "Sans-Serif Font",
    genericSerif: "Serif Font",
    monospace: "Monospace",
    cursive: "Cursive",
    fantasy: "Fantasy",
    normal: "Normal",
    italic: "Italic",
    bold: "Bold",
    none: "None",
    underline: "Underline",
    strikethrough: "Strikethrough",
    overline: "Overline",
    labelTextDecoration: "Label Text Decoration",
    labelDisplayMode: "Label Display Mode",
    labelDisplayModes: {
      nameOnly: "Name Only",
      captionOnly: "Caption Only",
      valueOnly: "Value Only",
      nameAndCaption: "Name and Caption",
      nameAndValue: "Name and Value"
    },
    labelObjectVisibility: "Label And Object Visibility",
    selectObjectsToShow: "Select Objects to Show",
    labelVisible: "Label Visible",
    objectVisible: "Object Visible"
  },
  handlers: {
    ellipseAntipodalSelected:
      "The foci of an ellipse are not allowed to be antipodal or identical. Select another location.",
    ellipseFocus2Selected:
      "All foci of the ellipse selected. Now select a point on the ellipse.",
    ellipseFocus1Selected:
      "One focus of the ellipse selected. Now select a second non-antipodal focus.",
    ellipseInitiallyToSmall:
      "To create an ellipse initially you must select a point on the ellipse that is further away from each focus. Select a different location further from the foci.",

    circleCenterSelected:
      "Center of circle selected. Now select a point on the circle.",
    duplicatePointMessage: "Duplicate point. Select another.",
    newMeasurementAdded: "New measurement {name} added.",
    selectAnotherPoint: "Select the next point.",
    newSegmentMeasurementAdded: "New measurement {name} added.",
    duplicateLineMessage: "Duplicate line. Select another.",
    duplicateSegmentMessage: "Duplicate segment. Select another.",
    segmentsWithOutCommonEndpoint:
      "The selected segment does not have a common endpoint with the previously selected one. Select another.",
    segmentWithOutEndpointOnLine:
      "The selected segment does not have a endpoint on the previously selected line. Select another.",
    lineDoesNotContainEndpointOfSegment:
      "The selected line does contain an endpoint on the previously selected segment. Select another.",
    antipodalPointMessage:
      "The selected point is antipodal or equal to the first selected point. Select another.",
    antipodalPointMessage2:
      "The selected point is antipodal or equal to the second selected point. Select another.",
    newAngleAdded: "New angle measure added.",
    newAngleAddedV2: "New angle measure {name} added.",
    selectMorePoints: "Select {needed} more point(s).",
    selectAnotherLineOrSegment: "Select 1 more line or segment.",
    newCoordinatePointMeasurementAdded: "New coordinate measurements added",
    intersectionOneDimensionalSelected:
      "One dimensional object {name} selected. Select another.",
    intersectionOneDimensionalDuplicate: "Duplicate object. Select another.",
    intersectionOneDimensionalNotIntersect:
      "Selected objects do not intersect.",
    intersectionOneDimensionalAlreadyExists:
      "Intersection point already exists.",
    intersectionOneDimensionalPointCreated:
      "One intersection point successfully created.",
    moveHandlerNothingSelected: "No object selected. Rotating Sphere.",
    moveHandlerObjectOnBackOfSphere:
      "Were you trying to move an object on the back of the sphere?  If so, press and hold the shift key to select objects on the back of the sphere.",
    panZoomHandlerZoomInLimitReached: "Zoom in limit reached.",
    panZoomHandlerZoomOutLimitReached: "Zoom out limit reached.",
    selectionUpdate:
      "Selection Update: {number} objects selected. Hold the Alt/Option key to add or subtract from the current selection.",
    selectionUpdateNothingSelected: "No objects selected.",
    pointCreationAttemptDuplicate: "There is already a point at this location.",
    perpendicularLineThruPointPointSelected:
      "Point selected. Now select a one dimensional object to determine the perpendicular.",
    perpendicularLineThruPointLineSelected:
      "Line {name} selected. Now select a location to create a new point or to create a point on an object.",
    perpendicularLineThruPointSegmentSelected:
      "Segment {name} selected. Now select a location to create a new point or to create a point on an object.",
    perpendicularLineThruPointCircleSelected:
      "Circle {name} selected. Now select a location to create a new point or to create a point on an object.",
    perpendicularLineThruPointEllipseSelected:
      "Ellipse {name} selected. Now select a location to create a new point or to create a point on an object.",
    antipodeDuplicate: "The antipode of this point has already been created.",
    polarLineDuplicate:
      "The polar line of this point has already been created.",
    polarPointDuplicate:
      "The polar points of this {object} has already been created."
  },

  objectTree: {
    expression: "Expression",
    parserError: "Reached end of input while parsing expression",
    cycleValueDisplayMode:
      "Click to cycle to the next value display mode including multiples of pi and degrees.",
    toggleDisplay: "Toggle the display of the corresponding object.",
    slider: "Slider",
    sliderValue: "{token} - Slider: {val}",
    noObjectsInDatabase: "No objects in database",
    result: "Result",
    calculationExpression: "Calculation Expression",
    min: "Min",
    max: "Max",
    step: "Step",
    create: "Create",
    anglePoints: "Angle formed by points {p1}, {p2}, and {p3}.",
    angleSegments: "Angle formed by lines {line1} and {line2}.",
    angleLines: "Angle formed by segments {seg1} and {seg2}.",
    angleSegmentLine: "Angle formed by segment {seg} and line {line}.",
    angleLineSegment: "Angle formed by line {line} and segment {seg}.",
    calculationDescription: "Calculation based on expression {str}",
    calculationValue: "{token} - Calculation: {val}",
    coordinateOf: "The {axisName} coordinate of point {pt}.",
    coordOf: "{token} - {axisName} Coord: {val}",
    x: "x",
    y: "y",
    z: "z",
    distanceBetweenPts: "Distance between points {pt1} and {pt2}.",
    distanceValue: "{token} - Distance: {val}",
    segmentLength: "Length of segment {seg}.",
    antipodeOf: "Antipode of point {pt}",
    aPolarPointOf: "Polar point of line {line} with index {index}.",
    circleThrough: "Circle with center {center} through point {through}",
    ellipseThrough:
      "Ellipse with foci {focus1} and {focus2} through point {through}",
    intersectionPoint:
      "Intersection of {typeParent1} {parent1} and {typeParent2} {parent2} with index {index}",
    lineThrough:
      "Line through points {pt1} and {pt2} with normal vector <{normalX},{normalY},{normalZ}>",
    polarLine:
      "Polar line to point {pt} with normal vector <{normalX},{normalY},{normalZ}>",
    segmentThrough:
      "Line segment with endpoints {pt1} and {pt2} and normal vector <{normalX},{normalY},{normalZ}>",
    pointOnOneDimensional: "Point on {typeParent} {parent}",
    freePoint: "Free point",
    perpendicularLineThru:
      "Perpendicular line to {oneDimensionalParentType} {oneDimensional} through point {pt} with index {index}"
  },

  constructions: {
    privateConstructions: "Private Constructions",
    publicConstructions: "Public Constructions",
    unsavedConstructionMsg:
      "You have unsaved work. Do you want to stay on this page and keep your work or switch to another page and discard your work.",
    unsavedObjectsMsg:
      "You have unsaved objects. Loading a new construction will remove all the current ones. Do you want to proceed or cancel?",
    firestoreConstructionLoaded: "Construction successfully loaded.",
    firestoreConstructionSaved: "Construction successfully saved.",
    firestoreConstructionDeleted: "Construction successfully deleted.",
    firestoreSaveError: "Construction was not saved."
  }
} as LocaleMessages;