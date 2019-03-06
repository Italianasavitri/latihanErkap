(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~247d65f7"],{

/***/ "./node_modules/devextreme-angular/ui/nested/small-values-grouping.js":
/*!****************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/small-values-grouping.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 18.2.3
 * Build date: Thu Nov 08 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var nested_option_1 = __webpack_require__(/*! ../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var nested_option_2 = __webpack_require__(/*! ../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var DxoSmallValuesGroupingComponent = (function (_super) {
    __extends(DxoSmallValuesGroupingComponent, _super);
    function DxoSmallValuesGroupingComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "groupName", {
        get: function () {
            return this._getOption('groupName');
        },
        set: function (value) {
            this._setOption('groupName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "threshold", {
        get: function () {
            return this._getOption('threshold');
        },
        set: function (value) {
            this._setOption('threshold', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "topCount", {
        get: function () {
            return this._getOption('topCount');
        },
        set: function (value) {
            this._setOption('topCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSmallValuesGroupingComponent.prototype, "_optionPath", {
        get: function () {
            return 'smallValuesGrouping';
        },
        enumerable: true,
        configurable: true
    });
    DxoSmallValuesGroupingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-small-values-grouping',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoSmallValuesGroupingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSmallValuesGroupingComponent.propDecorators = {
        "groupName": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
        "threshold": [{ type: core_1.Input },],
        "topCount": [{ type: core_1.Input },],
    };
    return DxoSmallValuesGroupingComponent;
}(nested_option_2.NestedOption));
exports.DxoSmallValuesGroupingComponent = DxoSmallValuesGroupingComponent;
var DxoSmallValuesGroupingModule = (function () {
    function DxoSmallValuesGroupingModule() {
    }
    DxoSmallValuesGroupingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSmallValuesGroupingComponent
                    ],
                    exports: [
                        DxoSmallValuesGroupingComponent
                    ],
                },] },
    ];
    return DxoSmallValuesGroupingModule;
}());
exports.DxoSmallValuesGroupingModule = DxoSmallValuesGroupingModule;
//# sourceMappingURL=small-values-grouping.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/pie-chart.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/pie-chart.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * devextreme-angular
 * Version: 18.2.3
 * Build date: Thu Nov 08 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var pie_chart_1 = __webpack_require__(/*! devextreme/viz/pie_chart */ "./node_modules/devextreme/viz/pie_chart.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var adaptive_layout_1 = __webpack_require__(/*! ./nested/adaptive-layout */ "./node_modules/devextreme-angular/ui/nested/adaptive-layout.js");
var animation_1 = __webpack_require__(/*! ./nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
var common_series_settings_1 = __webpack_require__(/*! ./nested/common-series-settings */ "./node_modules/devextreme-angular/ui/nested/common-series-settings.js");
var border_1 = __webpack_require__(/*! ./nested/border */ "./node_modules/devextreme-angular/ui/nested/border.js");
var hover_style_1 = __webpack_require__(/*! ./nested/hover-style */ "./node_modules/devextreme-angular/ui/nested/hover-style.js");
var hatching_1 = __webpack_require__(/*! ./nested/hatching */ "./node_modules/devextreme-angular/ui/nested/hatching.js");
var label_1 = __webpack_require__(/*! ./nested/label */ "./node_modules/devextreme-angular/ui/nested/label.js");
var argument_format_1 = __webpack_require__(/*! ./nested/argument-format */ "./node_modules/devextreme-angular/ui/nested/argument-format.js");
var connector_1 = __webpack_require__(/*! ./nested/connector */ "./node_modules/devextreme-angular/ui/nested/connector.js");
var font_1 = __webpack_require__(/*! ./nested/font */ "./node_modules/devextreme-angular/ui/nested/font.js");
var format_1 = __webpack_require__(/*! ./nested/format */ "./node_modules/devextreme-angular/ui/nested/format.js");
var selection_style_1 = __webpack_require__(/*! ./nested/selection-style */ "./node_modules/devextreme-angular/ui/nested/selection-style.js");
var small_values_grouping_1 = __webpack_require__(/*! ./nested/small-values-grouping */ "./node_modules/devextreme-angular/ui/nested/small-values-grouping.js");
var export_1 = __webpack_require__(/*! ./nested/export */ "./node_modules/devextreme-angular/ui/nested/export.js");
var legend_1 = __webpack_require__(/*! ./nested/legend */ "./node_modules/devextreme-angular/ui/nested/legend.js");
var margin_1 = __webpack_require__(/*! ./nested/margin */ "./node_modules/devextreme-angular/ui/nested/margin.js");
var loading_indicator_1 = __webpack_require__(/*! ./nested/loading-indicator */ "./node_modules/devextreme-angular/ui/nested/loading-indicator.js");
var series_dxi_1 = __webpack_require__(/*! ./nested/series-dxi */ "./node_modules/devextreme-angular/ui/nested/series-dxi.js");
var series_template_1 = __webpack_require__(/*! ./nested/series-template */ "./node_modules/devextreme-angular/ui/nested/series-template.js");
var size_1 = __webpack_require__(/*! ./nested/size */ "./node_modules/devextreme-angular/ui/nested/size.js");
var title_1 = __webpack_require__(/*! ./nested/title */ "./node_modules/devextreme-angular/ui/nested/title.js");
var subtitle_1 = __webpack_require__(/*! ./nested/subtitle */ "./node_modules/devextreme-angular/ui/nested/subtitle.js");
var tooltip_1 = __webpack_require__(/*! ./nested/tooltip */ "./node_modules/devextreme-angular/ui/nested/tooltip.js");
var shadow_1 = __webpack_require__(/*! ./nested/shadow */ "./node_modules/devextreme-angular/ui/nested/shadow.js");
var series_dxi_2 = __webpack_require__(/*! ./nested/series-dxi */ "./node_modules/devextreme-angular/ui/nested/series-dxi.js");
/**
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
var DxPieChartComponent = (function (_super) {
    __extends(DxPieChartComponent, _super);
    function DxPieChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'diameterChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'minDiameterChange' },
            { emit: 'paletteChange' },
            { emit: 'paletteExtensionModeChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'sizeGroupChange' },
            { emit: 'startAngleChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPieChartComponent.prototype, "adaptiveLayout", {
        get: /**
             * Specifies adaptive layout options.
             */
        function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
        get: /**
             * Specifies animation options.
             */
        function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        get: /**
             * An object defining the configuration options that are common for all series of the PieChart widget.
             */
        function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
        get: /**
             * Customizes the appearance of an individual point label.
             */
        function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
        get: /**
             * Customizes the appearance of an individual series point.
             */
        function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
        get: /**
             * Specifies the widget's data origin.
             */
        function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        get: /**
             * Specifies the diameter of the pie.
             */
        function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to the user interaction.
             */
        function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "elementAttr", {
        get: /**
             * Specifies the attributes to be attached to the widget's root element.
             */
        function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
        get: /**
             * Configures the exporting and printing features.
             */
        function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        get: /**
             * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
             */
        function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        get: /**
             * Specifies PieChart legend options.
             */
        function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
        get: /**
             * Configures the loading indicator.
             */
        function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
        get: /**
             * Generates space around the widget.
             */
        function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "minDiameter", {
        get: /**
             * Specifies the minimum diameter of the pie.
             */
        function () {
            return this._getOption('minDiameter');
        },
        set: function (value) {
            this._setOption('minDiameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
        get: /**
             * Sets the palette to be used to colorize series and their elements.
             */
        function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "paletteExtensionMode", {
        get: /**
             * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart widget) or points in a series (in the PieChart widget).
             */
        function () {
            return this._getOption('paletteExtensionMode');
        },
        set: function (value) {
            this._setOption('paletteExtensionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
        get: /**
             * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
             */
        function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
        get: /**
             * Specifies whether a single point or multiple points can be selected in the chart.
             */
        function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
        get: /**
             * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
             */
        function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        get: /**
             * Specifies how a chart must behave when point labels overlap.
             */
        function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
        get: /**
             * Switches the widget to a right-to-left representation.
             */
        function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        get: /**
             * Specifies the direction that the pie chart segments will occupy.
             */
        function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        get: /**
             * Specifies options for the series of the PieChart widget.
             */
        function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "seriesTemplate", {
        get: /**
             * Defines options for the series template.
             */
        function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
        get: /**
             * Specifies the widget's size in pixels.
             */
        function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "sizeGroup", {
        get: /**
             * Allows you to display several adjoining pies in the same size.
             */
        function () {
            return this._getOption('sizeGroup');
        },
        set: function (value) {
            this._setOption('sizeGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        get: /**
             * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
             */
        function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
        get: /**
             * Sets the name of the theme the widget uses.
             */
        function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
        get: /**
             * Configures the widget's title.
             */
        function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
        get: /**
             * Configures tooltips.
             */
        function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        get: /**
             * Specifies the type of the pie chart series.
             */
        function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPieChartComponent.prototype._createInstance = function (element, options) {
        return new pie_chart_1.default(element, options);
    };
    DxPieChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPieChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    };
    DxPieChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPieChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPieChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPieChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-pie-chart',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxPieChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxPieChartComponent.propDecorators = {
        "adaptiveLayout": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "commonSeriesSettings": [{ type: core_1.Input },],
        "customizeLabel": [{ type: core_1.Input },],
        "customizePoint": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "diameter": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "innerRadius": [{ type: core_1.Input },],
        "legend": [{ type: core_1.Input },],
        "loadingIndicator": [{ type: core_1.Input },],
        "margin": [{ type: core_1.Input },],
        "minDiameter": [{ type: core_1.Input },],
        "palette": [{ type: core_1.Input },],
        "paletteExtensionMode": [{ type: core_1.Input },],
        "pathModified": [{ type: core_1.Input },],
        "pointSelectionMode": [{ type: core_1.Input },],
        "redrawOnResize": [{ type: core_1.Input },],
        "resolveLabelOverlapping": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "segmentsDirection": [{ type: core_1.Input },],
        "series": [{ type: core_1.Input },],
        "seriesTemplate": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "sizeGroup": [{ type: core_1.Input },],
        "startAngle": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "tooltip": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onDone": [{ type: core_1.Output },],
        "onDrawn": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onIncidentOccurred": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onLegendClick": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPointClick": [{ type: core_1.Output },],
        "onPointHoverChanged": [{ type: core_1.Output },],
        "onPointSelectionChanged": [{ type: core_1.Output },],
        "onTooltipHidden": [{ type: core_1.Output },],
        "onTooltipShown": [{ type: core_1.Output },],
        "adaptiveLayoutChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "commonSeriesSettingsChange": [{ type: core_1.Output },],
        "customizeLabelChange": [{ type: core_1.Output },],
        "customizePointChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "diameterChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "innerRadiusChange": [{ type: core_1.Output },],
        "legendChange": [{ type: core_1.Output },],
        "loadingIndicatorChange": [{ type: core_1.Output },],
        "marginChange": [{ type: core_1.Output },],
        "minDiameterChange": [{ type: core_1.Output },],
        "paletteChange": [{ type: core_1.Output },],
        "paletteExtensionModeChange": [{ type: core_1.Output },],
        "pathModifiedChange": [{ type: core_1.Output },],
        "pointSelectionModeChange": [{ type: core_1.Output },],
        "redrawOnResizeChange": [{ type: core_1.Output },],
        "resolveLabelOverlappingChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "segmentsDirectionChange": [{ type: core_1.Output },],
        "seriesChange": [{ type: core_1.Output },],
        "seriesTemplateChange": [{ type: core_1.Output },],
        "sizeChange": [{ type: core_1.Output },],
        "sizeGroupChange": [{ type: core_1.Output },],
        "startAngleChange": [{ type: core_1.Output },],
        "themeChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "tooltipChange": [{ type: core_1.Output },],
        "typeChange": [{ type: core_1.Output },],
        "seriesChildren": [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
    };
    return DxPieChartComponent;
}(component_1.DxComponent));
exports.DxPieChartComponent = DxPieChartComponent;
var DxPieChartModule = (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxPieChartComponent
                    ],
                    exports: [
                        DxPieChartComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxPieChartModule;
}());
exports.DxPieChartModule = DxPieChartModule;
//# sourceMappingURL=pie-chart.js.map

/***/ }),

/***/ "./node_modules/devextreme/viz/pie_chart.js":
/*!**************************************************!*\
  !*** ./node_modules/devextreme/viz/pie_chart.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (viz/pie_chart.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var seriesConsts = __webpack_require__(/*! ./components/consts */ "./node_modules/devextreme/viz/components/consts.js"),
    vizUtils = __webpack_require__(/*! ./core/utils */ "./node_modules/devextreme/viz/core/utils.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    isNumeric = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isNumeric,
    each = __webpack_require__(/*! ../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    rangeModule = __webpack_require__(/*! ./translators/range */ "./node_modules/devextreme/viz/translators/range.js"),
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    baseChartModule = __webpack_require__(/*! ./chart_components/base_chart */ "./node_modules/devextreme/viz/chart_components/base_chart.js"),
    BaseChart = baseChartModule.BaseChart,
    overlapping = baseChartModule.overlapping,
    seriesSpacing = seriesConsts.pieSeriesSpacing,
    translator1DModule = __webpack_require__(/*! ./translators/translator1d */ "./node_modules/devextreme/viz/translators/translator1d.js"),
    OPTIONS_FOR_REFRESH_SERIES = ["startAngle", "innerRadius", "segmentsDirection", "type"],
    _extend = extend,
    _each = each,
    _noop = __webpack_require__(/*! ../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    _getVerticallyShiftedAngularCoords = __webpack_require__(/*! ./core/utils */ "./node_modules/devextreme/viz/core/utils.js").getVerticallyShiftedAngularCoords,
    states = seriesConsts.states,
    NORMAL_STATE = states.normalMark,
    LEGEND_ACTIONS = [states.resetItem, states.applyHover, states.applySelected, states.applySelected];

function getLegendItemAction(points) {
    var state = NORMAL_STATE;
    points.forEach(function(point) {
        state |= point.fullState
    });
    return LEGEND_ACTIONS[state]
}

function correctPercentValue(value) {
    if (isNumeric(value)) {
        if (value > 1) {
            value = 1
        } else {
            if (value < 0) {
                value = 0
            }
        }
    } else {
        value = void 0
    }
    return value
}
var dxPieChart = BaseChart.inherit({
    _chartType: "pie",
    _layoutManagerOptions: function() {
        return _extend(true, {}, this.callBase(), {
            piePercentage: correctPercentValue(this._themeManager.getOptions("diameter")),
            minPiePercentage: correctPercentValue(this._themeManager.getOptions("minDiameter"))
        })
    },
    _optionChangesMap: {
        diameter: "REINIT",
        minDiameter: "REINIT",
        sizeGroup: "REINIT"
    },
    _disposeCore: function() {
        pieSizeEqualizer.remove(this);
        this.callBase()
    },
    _groupSeries: function() {
        var series = this.series;
        this._groupsData = {
            groups: [{
                series: series,
                valueOptions: {
                    valueType: "numeric"
                }
            }],
            argumentOptions: series[0] && series[0].getOptions()
        }
    },
    getArgumentAxis: function() {
        return null
    },
    _getValueAxis: function() {
        var translator = (new translator1DModule.Translator1D).setCodomain(360, 0);
        return {
            getTranslator: function() {
                return translator
            },
            setBusinessRange: function(range) {
                translator.setDomain(range.min, range.max)
            }
        }
    },
    _populateBusinessRange: function() {
        this.series.map(function(series) {
            var range = new rangeModule.Range;
            range.addRange(series.getRangeData().val);
            if (!range.isDefined()) {
                range.setStubData()
            }
            series.getValueAxis().setBusinessRange(range);
            return range
        })
    },
    _specialProcessSeries: function() {
        _each(this.series, function(_, singleSeries) {
            singleSeries.arrangePoints()
        })
    },
    _checkPaneName: function() {
        return true
    },
    _processSingleSeries: function(singleSeries) {
        this.callBase(singleSeries);
        singleSeries.arrangePoints()
    },
    _handleSeriesDataUpdated: function() {
        var maxPointCount = 0;
        this.series.forEach(function(s) {
            maxPointCount = Math.max(s.getPointsCount(), maxPointCount)
        });
        this.series.forEach(function(s) {
            s.setMaxPointsCount(maxPointCount)
        });
        this.callBase()
    },
    _getLegendTargets: function() {
        var that = this,
            itemsByArgument = {},
            items = [];
        that.series.forEach(function(series) {
            series.getPoints().forEach(function(point) {
                var argument = point.argument.valueOf();
                var index = series.getPointsByArg(argument).indexOf(point);
                var key = argument.valueOf().toString() + index;
                itemsByArgument[key] = itemsByArgument[key] || [];
                var argumentCount = itemsByArgument[key].push(point);
                point.index = itemsByArgument[key][argumentCount - 2] ? itemsByArgument[key][argumentCount - 2].index : Object.keys(itemsByArgument).length - 1;
                point.argumentIndex = index
            })
        });
        _each(itemsByArgument, function(_, points) {
            points.forEach(function(point, index) {
                if (0 === index) {
                    items.push(that._getLegendOptions(point))
                } else {
                    if (!items[items.length - 1].visible) {
                        items[items.length - 1].visible = point.isVisible()
                    }
                }
            })
        });
        return items
    },
    _getLayoutTargets: function() {
        return [{
            canvas: this._canvas
        }]
    },
    _getLayoutSeries: function(series, drawOptions) {
        var layout, that = this,
            canvas = that._canvas,
            drawnLabels = false;
        layout = that.layoutManager.applyPieChartSeriesLayout(canvas, series, true);
        series.forEach(function(singleSeries) {
            singleSeries.correctPosition(layout, canvas);
            drawnLabels = singleSeries.drawLabelsWOPoints() || drawnLabels
        });
        if (drawnLabels) {
            layout = that.layoutManager.applyPieChartSeriesLayout(canvas, series, drawOptions.hideLayoutLabels)
        }
        series.forEach(function(singleSeries) {
            singleSeries.hideLabels()
        });
        that._sizeGroupLayout = {
            x: layout.centerX,
            y: layout.centerY,
            radius: layout.radiusOuter,
            drawOptions: drawOptions
        };
        return layout
    },
    _getLayoutSeriesForEqualPies: function(series, sizeGroupLayout) {
        var canvas = this._canvas,
            layout = this.layoutManager.applyEqualPieChartLayout(series, sizeGroupLayout);
        series.forEach(function(s) {
            s.correctPosition(layout, canvas);
            s.drawLabelsWOPoints()
        });
        this.layoutManager.correctPieLabelRadius(series, layout, canvas);
        return layout
    },
    _updateSeriesDimensions: function(drawOptions) {
        var innerRad, delta, layout, that = this,
            visibleSeries = that._getVisibleSeries(),
            lengthVisibleSeries = visibleSeries.length,
            sizeGroupLayout = drawOptions.sizeGroupLayout;
        if (lengthVisibleSeries) {
            layout = sizeGroupLayout ? that._getLayoutSeriesForEqualPies(visibleSeries, sizeGroupLayout) : that._getLayoutSeries(visibleSeries, drawOptions);
            delta = (layout.radiusOuter - layout.radiusInner - seriesSpacing * (lengthVisibleSeries - 1)) / lengthVisibleSeries;
            innerRad = layout.radiusInner;
            that._setCenter({
                x: layout.centerX,
                y: layout.centerY
            });
            visibleSeries.forEach(function(singleSeries) {
                singleSeries.correctRadius({
                    radiusInner: innerRad,
                    radiusOuter: innerRad + delta
                });
                innerRad += delta + seriesSpacing
            })
        }
    },
    _renderSeries: function(drawOptions, isRotated, isLegendInside) {
        this._calculateSeriesLayout(drawOptions, isRotated);
        if (!drawOptions.sizeGroupLayout && this.getSizeGroup()) {
            pieSizeEqualizer.queue(this);
            this._clearCanvas();
            return
        }
        this._renderSeriesElements(drawOptions, isRotated, isLegendInside)
    },
    _getLegendCallBack: function() {
        var that = this,
            legend = this._legend,
            items = this._getLegendTargets().map(function(i) {
                return i.legendData
            });
        return function(target) {
            items.forEach(function(data) {
                var points = [],
                    callback = legend.getActionCallback({
                        index: data.id
                    });
                that.series.forEach(function(series) {
                    var seriesPoints = series.getPointsByKeys(data.argument, data.argumentIndex);
                    points.push.apply(points, seriesPoints)
                });
                if (target && target.argument === data.argument && target.argumentIndex === data.argumentIndex) {
                    points.push(target)
                }
                callback(getLegendItemAction(points))
            })
        }
    },
    _adjustSeriesLabels: function(moveLabelsFromCenter) {
        this.series.forEach(function(series) {
            series.adjustLabels(moveLabelsFromCenter)
        })
    },
    _prepareStackPoints: _noop,
    _resetStackPoints: _noop,
    _applyExtraSettings: _noop,
    _resolveLabelOverlappingShift: function() {
        var that = this,
            inverseDirection = "anticlockwise" === that.option("segmentsDirection"),
            seriesByPosition = that.series.reduce(function(r, s) {
                (r[s.getOptions().label.position] || r.outside).push(s);
                return r
            }, {
                inside: [],
                columns: [],
                outside: []
            });
        if (seriesByPosition.inside.length > 0) {
            resolve(seriesByPosition.inside.reduce(function(r, singleSeries) {
                return singleSeries.getVisiblePoints().reduce(function(r, point) {
                    r.left.push(point);
                    return r
                }, r)
            }, {
                left: [],
                right: []
            }), shiftInColumnFunction)
        }
        seriesByPosition.columns.forEach(function(singleSeries) {
            resolve(dividePoints(singleSeries), shiftInColumnFunction)
        });
        if (seriesByPosition.outside.length > 0) {
            resolve(seriesByPosition.outside.reduce(function(r, singleSeries) {
                return dividePoints(singleSeries, r)
            }, null), shiftFunction);
            that._adjustSeriesLabels(true)
        }

        function dividePoints(series, points) {
            return series.getVisiblePoints().reduce(function(r, point) {
                var angle = vizUtils.normalizeAngle(point.middleAngle);
                (angle <= 90 || angle >= 270 ? r.right : r.left).push(point);
                return r
            }, points || {
                left: [],
                right: []
            })
        }

        function resolve(points, shiftCallback) {
            if (inverseDirection) {
                points.left.reverse();
                points.right.reverse()
            }
            overlapping.resolveLabelOverlappingInOneDirection(points.left, that._canvas, false, shiftCallback);
            overlapping.resolveLabelOverlappingInOneDirection(points.right, that._canvas, false, shiftCallback)
        }

        function shiftFunction(box, length) {
            return _getVerticallyShiftedAngularCoords(box, -length, that._center)
        }

        function shiftInColumnFunction(box, length) {
            return {
                x: box.x,
                y: box.y - length
            }
        }
    },
    _setCenter: function(center) {
        this._center = center
    },
    _disposeSeries: function(seriesIndex) {
        this.callBase.apply(this, arguments);
        this._abstractSeries = null
    },
    _legendDataField: "point",
    _legendItemTextField: "argument",
    _updateLegendPosition: _noop,
    _renderTrackers: _noop,
    _trackerType: "PieTracker",
    _createScrollBar: _noop,
    _updateAxesLayout: _noop,
    _applyClipRects: _noop,
    _appendAdditionalSeriesGroups: _noop,
    _prepareToRender: _noop,
    _isLegendInside: _noop,
    _renderAxes: _noop,
    _shrinkAxes: _noop,
    _isRotated: _noop,
    _seriesPopulatedHandlerCore: _noop,
    _reinitAxes: _noop,
    _correctAxes: _noop,
    _getExtraOptions: function() {
        var that = this;
        return {
            startAngle: that.option("startAngle"),
            innerRadius: that.option("innerRadius"),
            segmentsDirection: that.option("segmentsDirection"),
            type: that.option("type")
        }
    },
    getSizeGroup: function() {
        return this._themeManager.getOptions("sizeGroup")
    },
    getSizeGroupLayout: function() {
        return this._sizeGroupLayout || {}
    }
});
_each(OPTIONS_FOR_REFRESH_SERIES, function(_, name) {
    dxPieChart.prototype._optionChangesMap[name] = "REFRESH_SERIES_DATA_INIT"
});
registerComponent("dxPieChart", dxPieChart);
module.exports = dxPieChart;
var pieSizeEqualizer = function() {
    function equalize(group, allPies) {
        var pies = allPies.filter(function(p) {
                return p.getSizeGroup() === group
            }),
            minRadius = Math.min.apply(null, pies.map(function(p) {
                return p.getSizeGroupLayout().radius
            })),
            minPie = pies.filter(function(p) {
                return p.getSizeGroupLayout().radius === minRadius
            });
        pies.forEach(function(p) {
            p.render({
                force: true,
                sizeGroupLayout: minPie.length ? minPie[0].getSizeGroupLayout() : {}
            })
        })
    }

    function removeFromList(list, item) {
        return list.filter(function(li) {
            return li !== item
        })
    }

    function addToList(list, item) {
        return removeFromList(list, item).concat(item)
    }
    var pies = [],
        timers = {};
    return {
        queue: function(pie) {
            var group = pie.getSizeGroup();
            pies = addToList(pies, pie);
            clearTimeout(timers[group]);
            timers[group] = setTimeout(function() {
                equalize(group, pies)
            })
        },
        remove: function(pie) {
            pies = removeFromList(pies, pie);
            if (!pies.length) {
                timers = {}
            }
        }
    }
}();
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/viz/translators/translator1d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/devextreme/viz/translators/translator1d.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (viz/translators/translator1d.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _Number = Number;

function Translator1D() {
    this.setDomain(arguments[0], arguments[1]).setCodomain(arguments[2], arguments[3])
}
Translator1D.prototype = {
    constructor: Translator1D,
    setDomain: function(domain1, domain2) {
        var that = this;
        that._domain1 = _Number(domain1);
        that._domain2 = _Number(domain2);
        that._domainDelta = that._domain2 - that._domain1;
        return that
    },
    setCodomain: function(codomain1, codomain2) {
        var that = this;
        that._codomain1 = _Number(codomain1);
        that._codomain2 = _Number(codomain2);
        that._codomainDelta = that._codomain2 - that._codomain1;
        return that
    },
    getDomain: function() {
        return [this._domain1, this._domain2]
    },
    getCodomain: function() {
        return [this._codomain1, this._codomain2]
    },
    getDomainStart: function() {
        return this._domain1
    },
    getDomainEnd: function() {
        return this._domain2
    },
    getCodomainStart: function() {
        return this._codomain1
    },
    getCodomainEnd: function() {
        return this._codomain2
    },
    getDomainRange: function() {
        return this._domainDelta
    },
    getCodomainRange: function() {
        return this._codomainDelta
    },
    translate: function(value) {
        var ratio = (_Number(value) - this._domain1) / this._domainDelta;
        return 0 <= ratio && ratio <= 1 ? this._codomain1 + ratio * this._codomainDelta : NaN
    },
    adjust: function(value) {
        var ratio = (_Number(value) - this._domain1) / this._domainDelta,
            result = NaN;
        if (ratio < 0) {
            result = this._domain1
        } else {
            if (ratio > 1) {
                result = this._domain2
            } else {
                if (0 <= ratio && ratio <= 1) {
                    result = _Number(value)
                }
            }
        }
        return result
    }
};
exports.Translator1D = Translator1D;


/***/ })

}]);
//# sourceMappingURL=default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~247d65f7.js.map