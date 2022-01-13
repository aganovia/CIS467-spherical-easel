import { ToolButtonGroup } from "@/types";

export const toolGroups: Array <ToolButtonGroup> =[
  /* Note: the group names below must match the identifier of
     toolgroups.XXXXXX defined in the I18N translation files */
  {
    group: "EditTools",
    children: [
      {
        id: 0,
        actionModeValue: "select",
        displayedName: "SelectDisplayedName",
        icon: "$vuetify.icons.value.select",
        toolTipMessage: "SelectToolTipMessage",
        toolUseMessage: "SelectToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 5,
        actionModeValue: "delete",
        displayedName: "DeleteDisplayedName",
        icon: "$vuetify.icons.value.delete",
        toolTipMessage: "DeleteToolTipMessage",
        toolUseMessage: "DeleteToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 25,
        actionModeValue: "zoomIn",
        displayedName: "PanZoomInDisplayedName",
        icon: "$vuetify.icons.value.zoomIn",
        toolTipMessage: "PanZoomInToolTipMessage",
        toolUseMessage: "PanZoomInToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 30,
        actionModeValue: "zoomOut",
        displayedName: "PanZoomOutDisplayedName",
        icon: "$vuetify.icons.value.zoomOut",
        toolTipMessage: "PanZoomOutToolTipMessage",
        toolUseMessage: "PanZoomOutToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 35,
        actionModeValue: "zoomFit",
        displayedName: "ZoomFitDisplayedName",
        icon: "$vuetify.icons.value.zoomFit",
        toolTipMessage: "ZoomFitToolTipMessage",
        toolUseMessage: "ZoomFitToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "DisplayTools",
    children: [
      {
        id: 0,
        actionModeValue: "hide",
        displayedName: "HideDisplayedName",
        icon: "$vuetify.icons.value.hide",
        toolTipMessage: "HideObjectToolTipMessage",
        toolUseMessage: "HideObjectToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 5,
        actionModeValue: "toggleLabelDisplay",
        displayedName: "ToggleLabelDisplayedName",
        icon: "$vuetify.icons.value.toggleLabelDisplay",
        toolTipMessage: "ToggleLabelToolTipMessage",
        toolUseMessage: "ToggleLabelToolUseMessage",
        displayToolUseMessage: false,
      },

      {
        id: 15,
        actionModeValue: "move",
        displayedName: "MoveDisplayedName",
        icon: "$vuetify.icons.value.move",
        toolTipMessage: "MoveObjectToolTipMessage",
        toolUseMessage: "MoveObjectToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 20,
        actionModeValue: "rotate",
        displayedName: "RotateDisplayedName",
        icon: "$vuetify.icons.value.rotate",
        toolTipMessage: "RotateSphereToolTipMessage",
        toolUseMessage: "RotateSphereToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "BasicTools",
    children: [
      {
        id: 0,
        actionModeValue: "point",
        displayedName: "CreatePointDisplayedName",
        icon: "$vuetify.icons.value.point",
        toolTipMessage: "CreatePointToolTipMessage",
        toolUseMessage: "CreatePointToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 5,
        actionModeValue: "line",
        displayedName: "CreateLineDisplayedName",
        icon: "$vuetify.icons.value.line",
        toolTipMessage: "CreateLineToolTipMessage",
        toolUseMessage: "CreateLineToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 10,
        actionModeValue: "segment",
        displayedName: "CreateLineSegmentDisplayedName",
        icon: "$vuetify.icons.value.segment",
        toolTipMessage: "CreateLineSegmentToolTipMessage",
        toolUseMessage: "CreateLineSegmentToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 20,
        actionModeValue: "circle",
        displayedName: "CreateCircleDisplayedName",
        icon: "$vuetify.icons.value.circle",
        toolTipMessage: "CreateCircleToolTipMessage",
        toolUseMessage: "CreateCircleToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "ConstructionTools",
    children: [
      {
        id: 0,
        actionModeValue: "midpoint",
        displayedName: "CreateMidpointDisplayedName",
        icon: "$vuetify.icons.value.midpoint",
        toolTipMessage: "CreateMidpointToolTipMessage",
        toolUseMessage: "CreateMidpointToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 5,
        actionModeValue: "angleBisector",
        displayedName: "CreateAngleBisectorDisplayedName",
        icon: "$vuetify.icons.value.angleBisector",
        toolTipMessage: "CreateAngleBisectorToolTipMessage",
        toolUseMessage: "CreateAngleBisectorToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 15,
        actionModeValue: "antipodalPoint",
        displayedName: "CreateAntipodalPointDisplayedName",
        icon: "$vuetify.icons.value.antipodalPoint",
        toolTipMessage: "CreateAntipodalPointToolTipMessage",
        toolUseMessage: "CreateAntipodalPointToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 20,
        actionModeValue: "polar",
        displayedName: "CreatePolarDisplayedName",
        icon: "$vuetify.icons.value.polar",
        toolTipMessage: "CreatePolarToolTipMessage",
        toolUseMessage: "CreatePolarToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 25,
        actionModeValue: "tangent",
        displayedName: "CreateTangentDisplayedName",
        icon: "$vuetify.icons.value.tangent",
        toolTipMessage: "CreateTangentToolTipMessage",
        toolUseMessage: "CreateTangentToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 30,
        actionModeValue: "perpendicular",
        displayedName: "CreatePerpendicularDisplayedName",
        icon: "$vuetify.icons.value.perpendicular",
        toolTipMessage: "CreatePerpendicularToolTipMessage",
        toolUseMessage: "CreatePerpendicularToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 50,
        actionModeValue: "intersect",
        displayedName: "CreateIntersectionDisplayedName",
        icon: "$vuetify.icons.value.intersect",
        toolTipMessage: "CreateIntersectionToolTipMessage",
        toolUseMessage: "CreateIntersectionToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 45,
        actionModeValue: "pointOnObject",
        displayedName: "CreatePointOnOneDimDisplayedName",
        icon: "$vuetify.icons.value.pointOnObject",
        toolTipMessage: "CreatePointOnOneDimToolTipMessage",
        toolUseMessage: "CreatePointOnOneDimToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "MeasurementTools",
    children: [
      {
        id: 0,
        actionModeValue: "segmentLength",
        displayedName: "CreateSegmentLengthDisplayedName",
        icon: "$vuetify.icons.value.segmentLength",
        toolTipMessage: "CreateSegmentLengthToolTipMessage",
        toolUseMessage: "CreateSegmentLengthToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 5,
        actionModeValue: "pointDistance",
        displayedName: "CreatePointDistanceDisplayedName",
        icon: "$vuetify.icons.value.pointDistance",
        toolTipMessage: "CreatePointDistanceToolTipMessage",
        toolUseMessage: "CreatePointDistanceToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 10,
        actionModeValue: "angle",
        displayedName: "CreateAngleDisplayedName",
        icon: "$vuetify.icons.value.angle",
        toolTipMessage: "CreateAngleToolTipMessage",
        toolUseMessage: "CreateAngleToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 15,
        actionModeValue: "coordinate",
        displayedName: "CreateCoordinateDisplayedName",
        icon: "$vuetify.icons.value.coordinate",
        toolTipMessage: "CreateCoordinateToolTipMessage",
        toolUseMessage: "CreateCoordinateToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 20,
        actionModeValue: "measureTriangle",
        displayedName: "MeasureTriangleDisplayedName",
        icon: "$vuetify.icons.value.measureTriangle",
        toolTipMessage: "MeasureTriangleToolTipMessage",
        toolUseMessage: "MeasureTriangleToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 25,
        actionModeValue: "measurePolygon",
        displayedName: "MeasurePolygonDisplayedName",
        icon: "$vuetify.icons.value.measurePolygon",
        toolTipMessage: "MeasurePolygonToolTipMessage",
        toolUseMessage: "MeasurePolygonToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "AdvancedTools",
    children: [
      {
        id: 10,
        actionModeValue: "nSectPoint",
        displayedName: "CreateNSectSegmentDisplayedName",
        icon: "$vuetify.icons.value.nSectPoint",
        toolTipMessage: "CreateNSectSegmentToolTipMessage",
        toolUseMessage: "CreateNSectSegmentToolUseMessage",
        displayToolUseMessage: false,
      },
      {
        id: 15,
        actionModeValue: "nSectLine",
        displayedName: "CreateNSectAngleDisplayedName",
        icon: "$vuetify.icons.value.nSectLine",
        toolTipMessage: "CreateNSectAngleToolTipMessage",
        toolUseMessage: "CreateNSectAngleToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  },
  {
    group: "ConicTools",
    children: [
      {
        id: 0,
        actionModeValue: "ellipse",
        displayedName: "CreateEllipseDisplayedName",
        icon: "$vuetify.icons.value.ellipse",
        toolTipMessage: "CreateEllipseToolTipMessage",
        toolUseMessage: "CreateEllipseToolUseMessage",
        displayToolUseMessage: false,
      }
    ]
  }
];