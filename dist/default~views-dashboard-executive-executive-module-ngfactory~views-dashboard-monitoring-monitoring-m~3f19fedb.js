(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-dashboard-executive-executive-module-ngfactory~views-dashboard-monitoring-monitoring-m~3f19fedb"],{

/***/ "./node_modules/devextreme-angular/ui/chart.ngfactory.js":
/*!***************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/chart.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: DxChartModuleNgFactory, RenderType_DxChartComponent, View_DxChartComponent_0, View_DxChartComponent_Host_0, DxChartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxChartModuleNgFactory", function() { return DxChartModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DxChartComponent", function() { return RenderType_DxChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxChartComponent_0", function() { return View_DxChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxChartComponent_Host_0", function() { return View_DxChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxChartComponentNgFactory", function() { return DxChartComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./node_modules/devextreme-angular/ui/chart.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nested_adaptive_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested/adaptive-layout */ "./node_modules/devextreme-angular/ui/nested/adaptive-layout.js");
/* harmony import */ var _nested_adaptive_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nested_adaptive_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nested_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
/* harmony import */ var _nested_animation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nested_animation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nested_argument_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested/argument-axis */ "./node_modules/devextreme-angular/ui/nested/argument-axis.js");
/* harmony import */ var _nested_argument_axis__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nested_argument_axis__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nested_aggregation_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nested/aggregation-interval */ "./node_modules/devextreme-angular/ui/nested/aggregation-interval.js");
/* harmony import */ var _nested_aggregation_interval__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nested_aggregation_interval__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nested_break_dxi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nested/break-dxi */ "./node_modules/devextreme-angular/ui/nested/break-dxi.js");
/* harmony import */ var _nested_break_dxi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nested_break_dxi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nested_break_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nested/break-style */ "./node_modules/devextreme-angular/ui/nested/break-style.js");
/* harmony import */ var _nested_break_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nested_break_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nested_constant_line_dxi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nested/constant-line-dxi */ "./node_modules/devextreme-angular/ui/nested/constant-line-dxi.js");
/* harmony import */ var _nested_constant_line_dxi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nested_constant_line_dxi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nested_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nested/label */ "./node_modules/devextreme-angular/ui/nested/label.js");
/* harmony import */ var _nested_label__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nested_label__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nested_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nested/font */ "./node_modules/devextreme-angular/ui/nested/font.js");
/* harmony import */ var _nested_font__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nested_font__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nested_constant_line_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nested/constant-line-style */ "./node_modules/devextreme-angular/ui/nested/constant-line-style.js");
/* harmony import */ var _nested_constant_line_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_nested_constant_line_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nested_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nested/grid */ "./node_modules/devextreme-angular/ui/nested/grid.js");
/* harmony import */ var _nested_grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_nested_grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _nested_format__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nested/format */ "./node_modules/devextreme-angular/ui/nested/format.js");
/* harmony import */ var _nested_format__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nested_format__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _nested_minor_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nested/minor-grid */ "./node_modules/devextreme-angular/ui/nested/minor-grid.js");
/* harmony import */ var _nested_minor_grid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_nested_minor_grid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _nested_minor_tick__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nested/minor-tick */ "./node_modules/devextreme-angular/ui/nested/minor-tick.js");
/* harmony import */ var _nested_minor_tick__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_nested_minor_tick__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _nested_minor_tick_interval__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nested/minor-tick-interval */ "./node_modules/devextreme-angular/ui/nested/minor-tick-interval.js");
/* harmony import */ var _nested_minor_tick_interval__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_nested_minor_tick_interval__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _nested_strip_dxi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nested/strip-dxi */ "./node_modules/devextreme-angular/ui/nested/strip-dxi.js");
/* harmony import */ var _nested_strip_dxi__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_nested_strip_dxi__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _nested_strip_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nested/strip-style */ "./node_modules/devextreme-angular/ui/nested/strip-style.js");
/* harmony import */ var _nested_strip_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_nested_strip_style__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _nested_tick__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nested/tick */ "./node_modules/devextreme-angular/ui/nested/tick.js");
/* harmony import */ var _nested_tick__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_nested_tick__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _nested_tick_interval__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nested/tick-interval */ "./node_modules/devextreme-angular/ui/nested/tick-interval.js");
/* harmony import */ var _nested_tick_interval__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_nested_tick_interval__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _nested_title__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./nested/title */ "./node_modules/devextreme-angular/ui/nested/title.js");
/* harmony import */ var _nested_title__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_nested_title__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _nested_common_axis_settings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nested/common-axis-settings */ "./node_modules/devextreme-angular/ui/nested/common-axis-settings.js");
/* harmony import */ var _nested_common_axis_settings__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_nested_common_axis_settings__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _nested_common_pane_settings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nested/common-pane-settings */ "./node_modules/devextreme-angular/ui/nested/common-pane-settings.js");
/* harmony import */ var _nested_common_pane_settings__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_nested_common_pane_settings__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _nested_border__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nested/border */ "./node_modules/devextreme-angular/ui/nested/border.js");
/* harmony import */ var _nested_border__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_nested_border__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _nested_common_series_settings__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nested/common-series-settings */ "./node_modules/devextreme-angular/ui/nested/common-series-settings.js");
/* harmony import */ var _nested_common_series_settings__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_nested_common_series_settings__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _nested_aggregation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nested/aggregation */ "./node_modules/devextreme-angular/ui/nested/aggregation.js");
/* harmony import */ var _nested_aggregation__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_nested_aggregation__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _nested_area__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./nested/area */ "./node_modules/devextreme-angular/ui/nested/area.js");
/* harmony import */ var _nested_area__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_nested_area__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _nested_hover_style__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nested/hover-style */ "./node_modules/devextreme-angular/ui/nested/hover-style.js");
/* harmony import */ var _nested_hover_style__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_nested_hover_style__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _nested_hatching__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./nested/hatching */ "./node_modules/devextreme-angular/ui/nested/hatching.js");
/* harmony import */ var _nested_hatching__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_nested_hatching__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _nested_connector__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./nested/connector */ "./node_modules/devextreme-angular/ui/nested/connector.js");
/* harmony import */ var _nested_connector__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_nested_connector__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _nested_point__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./nested/point */ "./node_modules/devextreme-angular/ui/nested/point.js");
/* harmony import */ var _nested_point__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_nested_point__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _nested_image__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./nested/image */ "./node_modules/devextreme-angular/ui/nested/image.js");
/* harmony import */ var _nested_image__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_nested_image__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _nested_height__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./nested/height */ "./node_modules/devextreme-angular/ui/nested/height.js");
/* harmony import */ var _nested_height__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_nested_height__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _nested_url__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./nested/url */ "./node_modules/devextreme-angular/ui/nested/url.js");
/* harmony import */ var _nested_url__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_nested_url__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _nested_width__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./nested/width */ "./node_modules/devextreme-angular/ui/nested/width.js");
/* harmony import */ var _nested_width__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_nested_width__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _nested_selection_style__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./nested/selection-style */ "./node_modules/devextreme-angular/ui/nested/selection-style.js");
/* harmony import */ var _nested_selection_style__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_nested_selection_style__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _nested_reduction__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./nested/reduction */ "./node_modules/devextreme-angular/ui/nested/reduction.js");
/* harmony import */ var _nested_reduction__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_nested_reduction__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _nested_value_error_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./nested/value-error-bar */ "./node_modules/devextreme-angular/ui/nested/value-error-bar.js");
/* harmony import */ var _nested_value_error_bar__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_nested_value_error_bar__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _nested_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nested/bar */ "./node_modules/devextreme-angular/ui/nested/bar.js");
/* harmony import */ var _nested_bar__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_nested_bar__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _nested_bubble__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nested/bubble */ "./node_modules/devextreme-angular/ui/nested/bubble.js");
/* harmony import */ var _nested_bubble__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_nested_bubble__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _nested_candlestick__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./nested/candlestick */ "./node_modules/devextreme-angular/ui/nested/candlestick.js");
/* harmony import */ var _nested_candlestick__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_nested_candlestick__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _nested_fullstackedarea__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./nested/fullstackedarea */ "./node_modules/devextreme-angular/ui/nested/fullstackedarea.js");
/* harmony import */ var _nested_fullstackedarea__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_nested_fullstackedarea__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _nested_fullstackedbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./nested/fullstackedbar */ "./node_modules/devextreme-angular/ui/nested/fullstackedbar.js");
/* harmony import */ var _nested_fullstackedbar__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_nested_fullstackedbar__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _nested_fullstackedline__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./nested/fullstackedline */ "./node_modules/devextreme-angular/ui/nested/fullstackedline.js");
/* harmony import */ var _nested_fullstackedline__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_nested_fullstackedline__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _nested_fullstackedspline__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./nested/fullstackedspline */ "./node_modules/devextreme-angular/ui/nested/fullstackedspline.js");
/* harmony import */ var _nested_fullstackedspline__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_nested_fullstackedspline__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _nested_fullstackedsplinearea__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./nested/fullstackedsplinearea */ "./node_modules/devextreme-angular/ui/nested/fullstackedsplinearea.js");
/* harmony import */ var _nested_fullstackedsplinearea__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_nested_fullstackedsplinearea__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _nested_argument_format__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./nested/argument-format */ "./node_modules/devextreme-angular/ui/nested/argument-format.js");
/* harmony import */ var _nested_argument_format__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_nested_argument_format__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _nested_line__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./nested/line */ "./node_modules/devextreme-angular/ui/nested/line.js");
/* harmony import */ var _nested_line__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_nested_line__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _nested_rangearea__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./nested/rangearea */ "./node_modules/devextreme-angular/ui/nested/rangearea.js");
/* harmony import */ var _nested_rangearea__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_nested_rangearea__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _nested_rangebar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./nested/rangebar */ "./node_modules/devextreme-angular/ui/nested/rangebar.js");
/* harmony import */ var _nested_rangebar__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_nested_rangebar__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _nested_scatter__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./nested/scatter */ "./node_modules/devextreme-angular/ui/nested/scatter.js");
/* harmony import */ var _nested_scatter__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_nested_scatter__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _nested_spline__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./nested/spline */ "./node_modules/devextreme-angular/ui/nested/spline.js");
/* harmony import */ var _nested_spline__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_nested_spline__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _nested_splinearea__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./nested/splinearea */ "./node_modules/devextreme-angular/ui/nested/splinearea.js");
/* harmony import */ var _nested_splinearea__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_nested_splinearea__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _nested_stackedarea__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./nested/stackedarea */ "./node_modules/devextreme-angular/ui/nested/stackedarea.js");
/* harmony import */ var _nested_stackedarea__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_nested_stackedarea__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _nested_stackedbar__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./nested/stackedbar */ "./node_modules/devextreme-angular/ui/nested/stackedbar.js");
/* harmony import */ var _nested_stackedbar__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_nested_stackedbar__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _nested_stackedline__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./nested/stackedline */ "./node_modules/devextreme-angular/ui/nested/stackedline.js");
/* harmony import */ var _nested_stackedline__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_nested_stackedline__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _nested_stackedspline__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./nested/stackedspline */ "./node_modules/devextreme-angular/ui/nested/stackedspline.js");
/* harmony import */ var _nested_stackedspline__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_nested_stackedspline__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _nested_stackedsplinearea__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./nested/stackedsplinearea */ "./node_modules/devextreme-angular/ui/nested/stackedsplinearea.js");
/* harmony import */ var _nested_stackedsplinearea__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_nested_stackedsplinearea__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _nested_steparea__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./nested/steparea */ "./node_modules/devextreme-angular/ui/nested/steparea.js");
/* harmony import */ var _nested_steparea__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_nested_steparea__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _nested_stepline__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./nested/stepline */ "./node_modules/devextreme-angular/ui/nested/stepline.js");
/* harmony import */ var _nested_stepline__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_nested_stepline__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _nested_stock__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./nested/stock */ "./node_modules/devextreme-angular/ui/nested/stock.js");
/* harmony import */ var _nested_stock__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_nested_stock__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _nested_crosshair__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./nested/crosshair */ "./node_modules/devextreme-angular/ui/nested/crosshair.js");
/* harmony import */ var _nested_crosshair__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_nested_crosshair__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _nested_horizontal_line__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./nested/horizontal-line */ "./node_modules/devextreme-angular/ui/nested/horizontal-line.js");
/* harmony import */ var _nested_horizontal_line__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_nested_horizontal_line__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _nested_vertical_line__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./nested/vertical-line */ "./node_modules/devextreme-angular/ui/nested/vertical-line.js");
/* harmony import */ var _nested_vertical_line__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_nested_vertical_line__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _nested_data_prepare_settings__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./nested/data-prepare-settings */ "./node_modules/devextreme-angular/ui/nested/data-prepare-settings.js");
/* harmony import */ var _nested_data_prepare_settings__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_nested_data_prepare_settings__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _nested_export__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./nested/export */ "./node_modules/devextreme-angular/ui/nested/export.js");
/* harmony import */ var _nested_export__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_nested_export__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _nested_legend__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./nested/legend */ "./node_modules/devextreme-angular/ui/nested/legend.js");
/* harmony import */ var _nested_legend__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_nested_legend__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _nested_margin__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./nested/margin */ "./node_modules/devextreme-angular/ui/nested/margin.js");
/* harmony import */ var _nested_margin__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_nested_margin__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _nested_loading_indicator__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./nested/loading-indicator */ "./node_modules/devextreme-angular/ui/nested/loading-indicator.js");
/* harmony import */ var _nested_loading_indicator__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_nested_loading_indicator__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _nested_pane_dxi__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./nested/pane-dxi */ "./node_modules/devextreme-angular/ui/nested/pane-dxi.js");
/* harmony import */ var _nested_pane_dxi__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_nested_pane_dxi__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _nested_scroll_bar__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./nested/scroll-bar */ "./node_modules/devextreme-angular/ui/nested/scroll-bar.js");
/* harmony import */ var _nested_scroll_bar__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_nested_scroll_bar__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _nested_series_dxi__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./nested/series-dxi */ "./node_modules/devextreme-angular/ui/nested/series-dxi.js");
/* harmony import */ var _nested_series_dxi__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(_nested_series_dxi__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _nested_series_template__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./nested/series-template */ "./node_modules/devextreme-angular/ui/nested/series-template.js");
/* harmony import */ var _nested_series_template__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_nested_series_template__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var _nested_size__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./nested/size */ "./node_modules/devextreme-angular/ui/nested/size.js");
/* harmony import */ var _nested_size__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(_nested_size__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _nested_subtitle__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./nested/subtitle */ "./node_modules/devextreme-angular/ui/nested/subtitle.js");
/* harmony import */ var _nested_subtitle__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(_nested_subtitle__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _nested_tooltip__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./nested/tooltip */ "./node_modules/devextreme-angular/ui/nested/tooltip.js");
/* harmony import */ var _nested_tooltip__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(_nested_tooltip__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var _nested_shadow__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./nested/shadow */ "./node_modules/devextreme-angular/ui/nested/shadow.js");
/* harmony import */ var _nested_shadow__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(_nested_shadow__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var _nested_value_axis_dxi__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./nested/value-axis-dxi */ "./node_modules/devextreme-angular/ui/nested/value-axis-dxi.js");
/* harmony import */ var _nested_value_axis_dxi__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(_nested_value_axis_dxi__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _nested_zoom_and_pan__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./nested/zoom-and-pan */ "./node_modules/devextreme-angular/ui/nested/zoom-and-pan.js");
/* harmony import */ var _nested_zoom_and_pan__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(_nested_zoom_and_pan__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var _nested_drag_box_style__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./nested/drag-box-style */ "./node_modules/devextreme-angular/ui/nested/drag-box-style.js");
/* harmony import */ var _nested_drag_box_style__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(_nested_drag_box_style__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _core_integration__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
/* harmony import */ var _core_integration__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(_core_integration__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_template__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
/* harmony import */ var _core_template__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(_core_template__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(_core_template_host__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _core_watcher_helper__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/* harmony import */ var _core_watcher_helper__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(_core_watcher_helper__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
/* harmony import */ var _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(_core_nested_option__WEBPACK_IMPORTED_MODULE_89__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































































var DxChartModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_chart__WEBPACK_IMPORTED_MODULE_1__["DxChartModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_adaptive_layout__WEBPACK_IMPORTED_MODULE_4__["DxoAdaptiveLayoutModule"], _nested_adaptive_layout__WEBPACK_IMPORTED_MODULE_4__["DxoAdaptiveLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_animation__WEBPACK_IMPORTED_MODULE_5__["DxoAnimationModule"], _nested_animation__WEBPACK_IMPORTED_MODULE_5__["DxoAnimationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_argument_axis__WEBPACK_IMPORTED_MODULE_6__["DxoArgumentAxisModule"], _nested_argument_axis__WEBPACK_IMPORTED_MODULE_6__["DxoArgumentAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_aggregation_interval__WEBPACK_IMPORTED_MODULE_7__["DxoAggregationIntervalModule"], _nested_aggregation_interval__WEBPACK_IMPORTED_MODULE_7__["DxoAggregationIntervalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_break_dxi__WEBPACK_IMPORTED_MODULE_8__["DxiBreakModule"], _nested_break_dxi__WEBPACK_IMPORTED_MODULE_8__["DxiBreakModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_break_style__WEBPACK_IMPORTED_MODULE_9__["DxoBreakStyleModule"], _nested_break_style__WEBPACK_IMPORTED_MODULE_9__["DxoBreakStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_constant_line_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiConstantLineModule"], _nested_constant_line_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiConstantLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_label__WEBPACK_IMPORTED_MODULE_11__["DxoLabelModule"], _nested_label__WEBPACK_IMPORTED_MODULE_11__["DxoLabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_font__WEBPACK_IMPORTED_MODULE_12__["DxoFontModule"], _nested_font__WEBPACK_IMPORTED_MODULE_12__["DxoFontModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_constant_line_style__WEBPACK_IMPORTED_MODULE_13__["DxoConstantLineStyleModule"], _nested_constant_line_style__WEBPACK_IMPORTED_MODULE_13__["DxoConstantLineStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_grid__WEBPACK_IMPORTED_MODULE_14__["DxoGridModule"], _nested_grid__WEBPACK_IMPORTED_MODULE_14__["DxoGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_format__WEBPACK_IMPORTED_MODULE_15__["DxoFormatModule"], _nested_format__WEBPACK_IMPORTED_MODULE_15__["DxoFormatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_minor_grid__WEBPACK_IMPORTED_MODULE_16__["DxoMinorGridModule"], _nested_minor_grid__WEBPACK_IMPORTED_MODULE_16__["DxoMinorGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_minor_tick__WEBPACK_IMPORTED_MODULE_17__["DxoMinorTickModule"], _nested_minor_tick__WEBPACK_IMPORTED_MODULE_17__["DxoMinorTickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_minor_tick_interval__WEBPACK_IMPORTED_MODULE_18__["DxoMinorTickIntervalModule"], _nested_minor_tick_interval__WEBPACK_IMPORTED_MODULE_18__["DxoMinorTickIntervalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_strip_dxi__WEBPACK_IMPORTED_MODULE_19__["DxiStripModule"], _nested_strip_dxi__WEBPACK_IMPORTED_MODULE_19__["DxiStripModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_strip_style__WEBPACK_IMPORTED_MODULE_20__["DxoStripStyleModule"], _nested_strip_style__WEBPACK_IMPORTED_MODULE_20__["DxoStripStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_tick__WEBPACK_IMPORTED_MODULE_21__["DxoTickModule"], _nested_tick__WEBPACK_IMPORTED_MODULE_21__["DxoTickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_tick_interval__WEBPACK_IMPORTED_MODULE_22__["DxoTickIntervalModule"], _nested_tick_interval__WEBPACK_IMPORTED_MODULE_22__["DxoTickIntervalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_title__WEBPACK_IMPORTED_MODULE_23__["DxoTitleModule"], _nested_title__WEBPACK_IMPORTED_MODULE_23__["DxoTitleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_common_axis_settings__WEBPACK_IMPORTED_MODULE_24__["DxoCommonAxisSettingsModule"], _nested_common_axis_settings__WEBPACK_IMPORTED_MODULE_24__["DxoCommonAxisSettingsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_common_pane_settings__WEBPACK_IMPORTED_MODULE_25__["DxoCommonPaneSettingsModule"], _nested_common_pane_settings__WEBPACK_IMPORTED_MODULE_25__["DxoCommonPaneSettingsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_border__WEBPACK_IMPORTED_MODULE_26__["DxoBorderModule"], _nested_border__WEBPACK_IMPORTED_MODULE_26__["DxoBorderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_common_series_settings__WEBPACK_IMPORTED_MODULE_27__["DxoCommonSeriesSettingsModule"], _nested_common_series_settings__WEBPACK_IMPORTED_MODULE_27__["DxoCommonSeriesSettingsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_aggregation__WEBPACK_IMPORTED_MODULE_28__["DxoAggregationModule"], _nested_aggregation__WEBPACK_IMPORTED_MODULE_28__["DxoAggregationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_area__WEBPACK_IMPORTED_MODULE_29__["DxoAreaModule"], _nested_area__WEBPACK_IMPORTED_MODULE_29__["DxoAreaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_hover_style__WEBPACK_IMPORTED_MODULE_30__["DxoHoverStyleModule"], _nested_hover_style__WEBPACK_IMPORTED_MODULE_30__["DxoHoverStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_hatching__WEBPACK_IMPORTED_MODULE_31__["DxoHatchingModule"], _nested_hatching__WEBPACK_IMPORTED_MODULE_31__["DxoHatchingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_connector__WEBPACK_IMPORTED_MODULE_32__["DxoConnectorModule"], _nested_connector__WEBPACK_IMPORTED_MODULE_32__["DxoConnectorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_point__WEBPACK_IMPORTED_MODULE_33__["DxoPointModule"], _nested_point__WEBPACK_IMPORTED_MODULE_33__["DxoPointModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_image__WEBPACK_IMPORTED_MODULE_34__["DxoImageModule"], _nested_image__WEBPACK_IMPORTED_MODULE_34__["DxoImageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_height__WEBPACK_IMPORTED_MODULE_35__["DxoHeightModule"], _nested_height__WEBPACK_IMPORTED_MODULE_35__["DxoHeightModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_url__WEBPACK_IMPORTED_MODULE_36__["DxoUrlModule"], _nested_url__WEBPACK_IMPORTED_MODULE_36__["DxoUrlModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_width__WEBPACK_IMPORTED_MODULE_37__["DxoWidthModule"], _nested_width__WEBPACK_IMPORTED_MODULE_37__["DxoWidthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_selection_style__WEBPACK_IMPORTED_MODULE_38__["DxoSelectionStyleModule"], _nested_selection_style__WEBPACK_IMPORTED_MODULE_38__["DxoSelectionStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_reduction__WEBPACK_IMPORTED_MODULE_39__["DxoReductionModule"], _nested_reduction__WEBPACK_IMPORTED_MODULE_39__["DxoReductionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_value_error_bar__WEBPACK_IMPORTED_MODULE_40__["DxoValueErrorBarModule"], _nested_value_error_bar__WEBPACK_IMPORTED_MODULE_40__["DxoValueErrorBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_bar__WEBPACK_IMPORTED_MODULE_41__["DxoBarModule"], _nested_bar__WEBPACK_IMPORTED_MODULE_41__["DxoBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_bubble__WEBPACK_IMPORTED_MODULE_42__["DxoBubbleModule"], _nested_bubble__WEBPACK_IMPORTED_MODULE_42__["DxoBubbleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_candlestick__WEBPACK_IMPORTED_MODULE_43__["DxoCandlestickModule"], _nested_candlestick__WEBPACK_IMPORTED_MODULE_43__["DxoCandlestickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_fullstackedarea__WEBPACK_IMPORTED_MODULE_44__["DxoFullstackedareaModule"], _nested_fullstackedarea__WEBPACK_IMPORTED_MODULE_44__["DxoFullstackedareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_fullstackedbar__WEBPACK_IMPORTED_MODULE_45__["DxoFullstackedbarModule"], _nested_fullstackedbar__WEBPACK_IMPORTED_MODULE_45__["DxoFullstackedbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_fullstackedline__WEBPACK_IMPORTED_MODULE_46__["DxoFullstackedlineModule"], _nested_fullstackedline__WEBPACK_IMPORTED_MODULE_46__["DxoFullstackedlineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_fullstackedspline__WEBPACK_IMPORTED_MODULE_47__["DxoFullstackedsplineModule"], _nested_fullstackedspline__WEBPACK_IMPORTED_MODULE_47__["DxoFullstackedsplineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_fullstackedsplinearea__WEBPACK_IMPORTED_MODULE_48__["DxoFullstackedsplineareaModule"], _nested_fullstackedsplinearea__WEBPACK_IMPORTED_MODULE_48__["DxoFullstackedsplineareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_argument_format__WEBPACK_IMPORTED_MODULE_49__["DxoArgumentFormatModule"], _nested_argument_format__WEBPACK_IMPORTED_MODULE_49__["DxoArgumentFormatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_line__WEBPACK_IMPORTED_MODULE_50__["DxoLineModule"], _nested_line__WEBPACK_IMPORTED_MODULE_50__["DxoLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_rangearea__WEBPACK_IMPORTED_MODULE_51__["DxoRangeareaModule"], _nested_rangearea__WEBPACK_IMPORTED_MODULE_51__["DxoRangeareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_rangebar__WEBPACK_IMPORTED_MODULE_52__["DxoRangebarModule"], _nested_rangebar__WEBPACK_IMPORTED_MODULE_52__["DxoRangebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_scatter__WEBPACK_IMPORTED_MODULE_53__["DxoScatterModule"], _nested_scatter__WEBPACK_IMPORTED_MODULE_53__["DxoScatterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_spline__WEBPACK_IMPORTED_MODULE_54__["DxoSplineModule"], _nested_spline__WEBPACK_IMPORTED_MODULE_54__["DxoSplineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_splinearea__WEBPACK_IMPORTED_MODULE_55__["DxoSplineareaModule"], _nested_splinearea__WEBPACK_IMPORTED_MODULE_55__["DxoSplineareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stackedarea__WEBPACK_IMPORTED_MODULE_56__["DxoStackedareaModule"], _nested_stackedarea__WEBPACK_IMPORTED_MODULE_56__["DxoStackedareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stackedbar__WEBPACK_IMPORTED_MODULE_57__["DxoStackedbarModule"], _nested_stackedbar__WEBPACK_IMPORTED_MODULE_57__["DxoStackedbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stackedline__WEBPACK_IMPORTED_MODULE_58__["DxoStackedlineModule"], _nested_stackedline__WEBPACK_IMPORTED_MODULE_58__["DxoStackedlineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stackedspline__WEBPACK_IMPORTED_MODULE_59__["DxoStackedsplineModule"], _nested_stackedspline__WEBPACK_IMPORTED_MODULE_59__["DxoStackedsplineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stackedsplinearea__WEBPACK_IMPORTED_MODULE_60__["DxoStackedsplineareaModule"], _nested_stackedsplinearea__WEBPACK_IMPORTED_MODULE_60__["DxoStackedsplineareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_steparea__WEBPACK_IMPORTED_MODULE_61__["DxoStepareaModule"], _nested_steparea__WEBPACK_IMPORTED_MODULE_61__["DxoStepareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stepline__WEBPACK_IMPORTED_MODULE_62__["DxoSteplineModule"], _nested_stepline__WEBPACK_IMPORTED_MODULE_62__["DxoSteplineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_stock__WEBPACK_IMPORTED_MODULE_63__["DxoStockModule"], _nested_stock__WEBPACK_IMPORTED_MODULE_63__["DxoStockModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_crosshair__WEBPACK_IMPORTED_MODULE_64__["DxoCrosshairModule"], _nested_crosshair__WEBPACK_IMPORTED_MODULE_64__["DxoCrosshairModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_horizontal_line__WEBPACK_IMPORTED_MODULE_65__["DxoHorizontalLineModule"], _nested_horizontal_line__WEBPACK_IMPORTED_MODULE_65__["DxoHorizontalLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_vertical_line__WEBPACK_IMPORTED_MODULE_66__["DxoVerticalLineModule"], _nested_vertical_line__WEBPACK_IMPORTED_MODULE_66__["DxoVerticalLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_data_prepare_settings__WEBPACK_IMPORTED_MODULE_67__["DxoDataPrepareSettingsModule"], _nested_data_prepare_settings__WEBPACK_IMPORTED_MODULE_67__["DxoDataPrepareSettingsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_export__WEBPACK_IMPORTED_MODULE_68__["DxoExportModule"], _nested_export__WEBPACK_IMPORTED_MODULE_68__["DxoExportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_legend__WEBPACK_IMPORTED_MODULE_69__["DxoLegendModule"], _nested_legend__WEBPACK_IMPORTED_MODULE_69__["DxoLegendModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_margin__WEBPACK_IMPORTED_MODULE_70__["DxoMarginModule"], _nested_margin__WEBPACK_IMPORTED_MODULE_70__["DxoMarginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_loading_indicator__WEBPACK_IMPORTED_MODULE_71__["DxoLoadingIndicatorModule"], _nested_loading_indicator__WEBPACK_IMPORTED_MODULE_71__["DxoLoadingIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_pane_dxi__WEBPACK_IMPORTED_MODULE_72__["DxiPaneModule"], _nested_pane_dxi__WEBPACK_IMPORTED_MODULE_72__["DxiPaneModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_scroll_bar__WEBPACK_IMPORTED_MODULE_73__["DxoScrollBarModule"], _nested_scroll_bar__WEBPACK_IMPORTED_MODULE_73__["DxoScrollBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_series_dxi__WEBPACK_IMPORTED_MODULE_74__["DxiSeriesModule"], _nested_series_dxi__WEBPACK_IMPORTED_MODULE_74__["DxiSeriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_series_template__WEBPACK_IMPORTED_MODULE_75__["DxoSeriesTemplateModule"], _nested_series_template__WEBPACK_IMPORTED_MODULE_75__["DxoSeriesTemplateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_size__WEBPACK_IMPORTED_MODULE_76__["DxoSizeModule"], _nested_size__WEBPACK_IMPORTED_MODULE_76__["DxoSizeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_subtitle__WEBPACK_IMPORTED_MODULE_77__["DxoSubtitleModule"], _nested_subtitle__WEBPACK_IMPORTED_MODULE_77__["DxoSubtitleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_tooltip__WEBPACK_IMPORTED_MODULE_78__["DxoTooltipModule"], _nested_tooltip__WEBPACK_IMPORTED_MODULE_78__["DxoTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_shadow__WEBPACK_IMPORTED_MODULE_79__["DxoShadowModule"], _nested_shadow__WEBPACK_IMPORTED_MODULE_79__["DxoShadowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_value_axis_dxi__WEBPACK_IMPORTED_MODULE_80__["DxiValueAxisModule"], _nested_value_axis_dxi__WEBPACK_IMPORTED_MODULE_80__["DxiValueAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_zoom_and_pan__WEBPACK_IMPORTED_MODULE_81__["DxoZoomAndPanModule"], _nested_zoom_and_pan__WEBPACK_IMPORTED_MODULE_81__["DxoZoomAndPanModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_drag_box_style__WEBPACK_IMPORTED_MODULE_82__["DxoDragBoxStyleModule"], _nested_drag_box_style__WEBPACK_IMPORTED_MODULE_82__["DxoDragBoxStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_integration__WEBPACK_IMPORTED_MODULE_83__["DxIntegrationModule"], _core_integration__WEBPACK_IMPORTED_MODULE_83__["DxIntegrationModule"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_84__["XhrFactory"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_template__WEBPACK_IMPORTED_MODULE_85__["DxTemplateModule"], _core_template__WEBPACK_IMPORTED_MODULE_85__["DxTemplateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _chart__WEBPACK_IMPORTED_MODULE_1__["DxChartModule"], _chart__WEBPACK_IMPORTED_MODULE_1__["DxChartModule"], [])]); });

var styles_DxChartComponent = ["[_nghost-%COMP%] {  display: block; }"];
var RenderType_DxChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DxChartComponent, data: {} });

function View_DxChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_DxChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "dx-chart", [], null, null, null, View_DxChartComponent_0, RenderType_DxChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_template_host__WEBPACK_IMPORTED_MODULE_86__["DxTemplateHost"], _core_template_host__WEBPACK_IMPORTED_MODULE_86__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_watcher_helper__WEBPACK_IMPORTED_MODULE_87__["WatcherHelper"], _core_watcher_helper__WEBPACK_IMPORTED_MODULE_87__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88__["IterableDifferHelper"], _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88__["IterableDifferHelper"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_nested_option__WEBPACK_IMPORTED_MODULE_89__["NestedOptionHost"], _core_nested_option__WEBPACK_IMPORTED_MODULE_89__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 7323648, null, 3, _chart__WEBPACK_IMPORTED_MODULE_1__["DxChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _core_template_host__WEBPACK_IMPORTED_MODULE_86__["DxTemplateHost"], _core_watcher_helper__WEBPACK_IMPORTED_MODULE_87__["WatcherHelper"], _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_88__["IterableDifferHelper"], _core_nested_option__WEBPACK_IMPORTED_MODULE_89__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { panesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { seriesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { valueAxisChildren: 1 })], function (_ck, _v) { _ck(_v, 5, 0); }, null); }
var DxChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("dx-chart", _chart__WEBPACK_IMPORTED_MODULE_1__["DxChartComponent"], View_DxChartComponent_Host_0, { adaptiveLayout: "adaptiveLayout", adjustOnZoom: "adjustOnZoom", animation: "animation", argumentAxis: "argumentAxis", barGroupPadding: "barGroupPadding", barGroupWidth: "barGroupWidth", barWidth: "barWidth", commonAxisSettings: "commonAxisSettings", commonPaneSettings: "commonPaneSettings", commonSeriesSettings: "commonSeriesSettings", containerBackgroundColor: "containerBackgroundColor", crosshair: "crosshair", customizeLabel: "customizeLabel", customizePoint: "customizePoint", dataPrepareSettings: "dataPrepareSettings", dataSource: "dataSource", defaultPane: "defaultPane", disabled: "disabled", elementAttr: "elementAttr", equalBarWidth: "equalBarWidth", export: "export", legend: "legend", loadingIndicator: "loadingIndicator", margin: "margin", maxBubbleSize: "maxBubbleSize", minBubbleSize: "minBubbleSize", negativesAsZeroes: "negativesAsZeroes", palette: "palette", paletteExtensionMode: "paletteExtensionMode", panes: "panes", pathModified: "pathModified", pointSelectionMode: "pointSelectionMode", redrawOnResize: "redrawOnResize", resolveLabelOverlapping: "resolveLabelOverlapping", rotated: "rotated", rtlEnabled: "rtlEnabled", scrollBar: "scrollBar", scrollingMode: "scrollingMode", series: "series", seriesSelectionMode: "seriesSelectionMode", seriesTemplate: "seriesTemplate", size: "size", synchronizeMultiAxes: "synchronizeMultiAxes", theme: "theme", title: "title", tooltip: "tooltip", useAggregation: "useAggregation", valueAxis: "valueAxis", zoomAndPan: "zoomAndPan", zoomingMode: "zoomingMode" }, { onArgumentAxisClick: "onArgumentAxisClick", onDisposing: "onDisposing", onDone: "onDone", onDrawn: "onDrawn", onExported: "onExported", onExporting: "onExporting", onFileSaving: "onFileSaving", onIncidentOccurred: "onIncidentOccurred", onInitialized: "onInitialized", onLegendClick: "onLegendClick", onOptionChanged: "onOptionChanged", onPointClick: "onPointClick", onPointHoverChanged: "onPointHoverChanged", onPointSelectionChanged: "onPointSelectionChanged", onSeriesClick: "onSeriesClick", onSeriesHoverChanged: "onSeriesHoverChanged", onSeriesSelectionChanged: "onSeriesSelectionChanged", onTooltipHidden: "onTooltipHidden", onTooltipShown: "onTooltipShown", onZoomEnd: "onZoomEnd", onZoomStart: "onZoomStart", adaptiveLayoutChange: "adaptiveLayoutChange", adjustOnZoomChange: "adjustOnZoomChange", animationChange: "animationChange", argumentAxisChange: "argumentAxisChange", barGroupPaddingChange: "barGroupPaddingChange", barGroupWidthChange: "barGroupWidthChange", barWidthChange: "barWidthChange", commonAxisSettingsChange: "commonAxisSettingsChange", commonPaneSettingsChange: "commonPaneSettingsChange", commonSeriesSettingsChange: "commonSeriesSettingsChange", containerBackgroundColorChange: "containerBackgroundColorChange", crosshairChange: "crosshairChange", customizeLabelChange: "customizeLabelChange", customizePointChange: "customizePointChange", dataPrepareSettingsChange: "dataPrepareSettingsChange", dataSourceChange: "dataSourceChange", defaultPaneChange: "defaultPaneChange", disabledChange: "disabledChange", elementAttrChange: "elementAttrChange", equalBarWidthChange: "equalBarWidthChange", exportChange: "exportChange", legendChange: "legendChange", loadingIndicatorChange: "loadingIndicatorChange", marginChange: "marginChange", maxBubbleSizeChange: "maxBubbleSizeChange", minBubbleSizeChange: "minBubbleSizeChange", negativesAsZeroesChange: "negativesAsZeroesChange", paletteChange: "paletteChange", paletteExtensionModeChange: "paletteExtensionModeChange", panesChange: "panesChange", pathModifiedChange: "pathModifiedChange", pointSelectionModeChange: "pointSelectionModeChange", redrawOnResizeChange: "redrawOnResizeChange", resolveLabelOverlappingChange: "resolveLabelOverlappingChange", rotatedChange: "rotatedChange", rtlEnabledChange: "rtlEnabledChange", scrollBarChange: "scrollBarChange", scrollingModeChange: "scrollingModeChange", seriesChange: "seriesChange", seriesSelectionModeChange: "seriesSelectionModeChange", seriesTemplateChange: "seriesTemplateChange", sizeChange: "sizeChange", synchronizeMultiAxesChange: "synchronizeMultiAxesChange", themeChange: "themeChange", titleChange: "titleChange", tooltipChange: "tooltipChange", useAggregationChange: "useAggregationChange", valueAxisChange: "valueAxisChange", zoomAndPanChange: "zoomAndPanChange", zoomingModeChange: "zoomingModeChange" }, []);



/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/tooltip.ngfactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/tooltip.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: DxoTooltipModuleNgFactory, RenderType_DxoTooltipComponent, View_DxoTooltipComponent_0, View_DxoTooltipComponent_Host_0, DxoTooltipComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxoTooltipModuleNgFactory", function() { return DxoTooltipModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DxoTooltipComponent", function() { return RenderType_DxoTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxoTooltipComponent_0", function() { return View_DxoTooltipComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxoTooltipComponent_Host_0", function() { return View_DxoTooltipComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxoTooltipComponentNgFactory", function() { return DxoTooltipComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./node_modules/devextreme-angular/ui/nested/tooltip.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_nested_option__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var DxoTooltipModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_tooltip__WEBPACK_IMPORTED_MODULE_1__["DxoTooltipModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tooltip__WEBPACK_IMPORTED_MODULE_1__["DxoTooltipModule"], _tooltip__WEBPACK_IMPORTED_MODULE_1__["DxoTooltipModule"], [])]); });

var styles_DxoTooltipComponent = [""];
var RenderType_DxoTooltipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DxoTooltipComponent, data: {} });

function View_DxoTooltipComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_DxoTooltipComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "dxo-tooltip", [], null, null, null, View_DxoTooltipComponent_0, RenderType_DxoTooltipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _tooltip__WEBPACK_IMPORTED_MODULE_1__["DxoTooltipComponent"], [[1, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"]], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"]], null, null)], null, null); }
var DxoTooltipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("dxo-tooltip", _tooltip__WEBPACK_IMPORTED_MODULE_1__["DxoTooltipComponent"], View_DxoTooltipComponent_Host_0, { arrowLength: "arrowLength", border: "border", color: "color", container: "container", customizeTooltip: "customizeTooltip", enabled: "enabled", font: "font", format: "format", opacity: "opacity", paddingLeftRight: "paddingLeftRight", paddingTopBottom: "paddingTopBottom", shadow: "shadow", zIndex: "zIndex", argumentFormat: "argumentFormat", location: "location", shared: "shared", isShown: "isShown", text: "text", position: "position", showMode: "showMode", customizeLinkTooltip: "customizeLinkTooltip", customizeNodeTooltip: "customizeNodeTooltip" }, {}, []);



/***/ })

}]);
//# sourceMappingURL=default~views-dashboard-executive-executive-module-ngfactory~views-dashboard-monitoring-monitoring-m~3f19fedb.js.map