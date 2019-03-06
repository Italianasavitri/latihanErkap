(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~3758f1a8"],{

/***/ "./node_modules/devextreme-angular/ui/accordion.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/accordion.js ***!
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
var accordion_1 = __webpack_require__(/*! devextreme/ui/accordion */ "./node_modules/devextreme/ui/accordion.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/**
 * The Accordion widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
 */
var DxAccordionComponent = (function (_super) {
    __extends(DxAccordionComponent, _super);
    function DxAccordionComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemTitleClick', emit: 'onItemTitleClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationDurationChange' },
            { emit: 'collapsibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'multipleChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemKeysChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxAccordionComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "animationDuration", {
        get: /**
             * A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel.
             */
        function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "collapsible", {
        get: /**
             * Specifies whether all items can be collapsed or whether at least one item must always be expanded.
             */
        function () {
            return this._getOption('collapsible');
        },
        set: function (value) {
            this._setOption('collapsible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data to be displayed by the widget.
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
    Object.defineProperty(DxAccordionComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the panel's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxAccordionComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxAccordionComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemHoldTimeout", {
        get: /**
             * The time period in milliseconds before the onItemHold event is raised.
             */
        function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemTitleTemplate", {
        get: /**
             * Specifies a custom template for item titles.
             */
        function () {
            return this._getOption('itemTitleTemplate');
        },
        set: function (value) {
            this._setOption('itemTitleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "keyExpr", {
        get: /**
             * Specifies which data field provides keys for widget items.
             */
        function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "multiple", {
        get: /**
             * Specifies whether the widget can expand several items or only a single item at once.
             */
        function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "repaintChangesOnly", {
        get: /**
             * Specifies whether to repaint only those elements whose data changed.
             */
        function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxAccordionComponent.prototype, "selectedIndex", {
        get: /**
             * The index number of the currently selected item.
             */
        function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItem", {
        get: /**
             * The selected item object.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItemKeys", {
        get: /**
             * Specifies an array of currently selected item keys.
             */
        function () {
            return this._getOption('selectedItemKeys');
        },
        set: function (value) {
            this._setOption('selectedItemKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "selectedItems", {
        get: /**
             * An array of currently selected item objects.
             */
        function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAccordionComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAccordionComponent.prototype._createInstance = function (element, options) {
        return new accordion_1.default(element, options);
    };
    DxAccordionComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxAccordionComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('selectedItemKeys', changes);
        this.setupChanges('selectedItems', changes);
    };
    DxAccordionComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxAccordionComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('selectedItemKeys');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxAccordionComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxAccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-accordion',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxAccordionComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxAccordionComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "animationDuration": [{ type: core_1.Input },],
        "collapsible": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "itemHoldTimeout": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "itemTitleTemplate": [{ type: core_1.Input },],
        "keyExpr": [{ type: core_1.Input },],
        "multiple": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "repaintChangesOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "selectedIndex": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "selectedItemKeys": [{ type: core_1.Input },],
        "selectedItems": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onItemContextMenu": [{ type: core_1.Output },],
        "onItemHold": [{ type: core_1.Output },],
        "onItemRendered": [{ type: core_1.Output },],
        "onItemTitleClick": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "animationDurationChange": [{ type: core_1.Output },],
        "collapsibleChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemHoldTimeoutChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "itemTitleTemplateChange": [{ type: core_1.Output },],
        "keyExprChange": [{ type: core_1.Output },],
        "multipleChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "repaintChangesOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "selectedIndexChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "selectedItemKeysChange": [{ type: core_1.Output },],
        "selectedItemsChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxAccordionComponent;
}(component_1.DxComponent));
exports.DxAccordionComponent = DxAccordionComponent;
var DxAccordionModule = (function () {
    function DxAccordionModule() {
    }
    DxAccordionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxAccordionComponent
                    ],
                    exports: [
                        DxAccordionComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxAccordionModule;
}());
exports.DxAccordionModule = DxAccordionModule;
//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/autocomplete.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/autocomplete.js ***!
  \************************************************************/
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
var autocomplete_1 = __webpack_require__(/*! devextreme/ui/autocomplete */ "./node_modules/devextreme/ui/autocomplete.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxAutocompleteComponent; }),
    multi: true
};
/**
 * The Autocomplete widget is a textbox that provides suggestions while a user types into it.
 */
var DxAutocompleteComponent = (function (_super) {
    __extends(DxAutocompleteComponent, _super);
    function DxAutocompleteComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayValueChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'maxItemCountChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxAutocompleteComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data the widget should display.
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayValue", {
        get: /**
             * Returns the value currently displayed by the widget.
             */
        function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "dropDownButtonTemplate", {
        get: /**
             * Specifies a custom template for the drop-down button.
             */
        function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "grouped", {
        get: /**
             * Specifies whether data items should be grouped.
             */
        function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "groupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxItemCount", {
        get: /**
             * Specifies the maximum count of items displayed by the widget.
             */
        function () {
            return this._getOption('maxItemCount');
        },
        set: function (value) {
            this._setOption('maxItemCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "minSearchLength", {
        get: /**
             * The minimum number of characters that must be entered into the text box to begin a search.
             */
        function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "openOnFieldClick", {
        get: /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
        function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "placeholder", {
        get: /**
             * The text displayed by the widget when the widget value is empty.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchExpr", {
        get: /**
             * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
             */
        function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchMode", {
        get: /**
             * Specifies a comparison operation used to search widget items.
             */
        function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchTimeout", {
        get: /**
             * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
             */
        function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "selectedItem", {
        get: /**
             * Gets the currently selected item.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether to display the Clear button in the widget.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "showDropDownButton", {
        get: /**
             * Specifies whether the drop-down button is visible.
             */
        function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "value", {
        get: /**
             * Specifies the current value displayed by the widget.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueExpr", {
        get: /**
             * Specifies which data field provides the widget's value. When this option is not set, the value is the entire data object.
             */
        function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAutocompleteComponent.prototype.change = function (_) { };
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAutocompleteComponent.prototype._createInstance = function (element, options) {
        return new autocomplete_1.default(element, options);
    };
    DxAutocompleteComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxAutocompleteComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxAutocompleteComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxAutocompleteComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxAutocompleteComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxAutocompleteComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxAutocompleteComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxAutocompleteComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxAutocompleteComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxAutocompleteComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxAutocompleteComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxAutocompleteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-autocomplete',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxAutocompleteComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxAutocompleteComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "displayValue": [{ type: core_1.Input },],
        "dropDownButtonTemplate": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "grouped": [{ type: core_1.Input },],
        "groupTemplate": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "maxItemCount": [{ type: core_1.Input },],
        "maxLength": [{ type: core_1.Input },],
        "minSearchLength": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "openOnFieldClick": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "searchExpr": [{ type: core_1.Input },],
        "searchMode": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "showClearButton": [{ type: core_1.Input },],
        "showDropDownButton": [{ type: core_1.Input },],
        "spellcheck": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueChangeEvent": [{ type: core_1.Input },],
        "valueExpr": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onClosed": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onCopy": [{ type: core_1.Output },],
        "onCut": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEnterKey": [{ type: core_1.Output },],
        "onFocusIn": [{ type: core_1.Output },],
        "onFocusOut": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onInput": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onKeyDown": [{ type: core_1.Output },],
        "onKeyPress": [{ type: core_1.Output },],
        "onKeyUp": [{ type: core_1.Output },],
        "onOpened": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPaste": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "displayValueChange": [{ type: core_1.Output },],
        "dropDownButtonTemplateChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "groupedChange": [{ type: core_1.Output },],
        "groupTemplateChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "maxItemCountChange": [{ type: core_1.Output },],
        "maxLengthChange": [{ type: core_1.Output },],
        "minSearchLengthChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "openOnFieldClickChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "searchExprChange": [{ type: core_1.Output },],
        "searchModeChange": [{ type: core_1.Output },],
        "searchTimeoutChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "showClearButtonChange": [{ type: core_1.Output },],
        "showDropDownButtonChange": [{ type: core_1.Output },],
        "spellcheckChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueChangeEventChange": [{ type: core_1.Output },],
        "valueExprChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxAutocompleteComponent;
}(component_1.DxComponent));
exports.DxAutocompleteComponent = DxAutocompleteComponent;
var DxAutocompleteModule = (function () {
    function DxAutocompleteModule() {
    }
    DxAutocompleteModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxAutocompleteComponent
                    ],
                    exports: [
                        DxAutocompleteComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxAutocompleteModule;
}());
exports.DxAutocompleteModule = DxAutocompleteModule;
//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/button.js":
/*!******************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/button.js ***!
  \******************************************************/
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
var button_1 = __webpack_require__(/*! devextreme/ui/button */ "./node_modules/devextreme/ui/button.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/**
 * The Button widget is a simple button that performs specified commands when a user clicks it.
 */
var DxButtonComponent = (function (_super) {
    __extends(DxButtonComponent, _super);
    function DxButtonComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxButtonComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "activeStateEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxButtonComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxButtonComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "icon", {
        get: /**
             * Specifies the icon to be displayed on the button.
             */
        function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the button is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "template", {
        get: /**
             * Specifies a custom template for the Button widget.
             */
        function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "text", {
        get: /**
             * The text displayed on the button.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "type", {
        get: /**
             * Specifies the button type.
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
    Object.defineProperty(DxButtonComponent.prototype, "useSubmitBehavior", {
        get: /**
             * Specifies whether or not the button must submit an HTML form.
             */
        function () {
            return this._getOption('useSubmitBehavior');
        },
        set: function (value) {
            this._setOption('useSubmitBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "validationGroup", {
        get: /**
             * Specifies the name of the validation group to be accessed in the click event handler.
             */
        function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxButtonComponent.prototype._createInstance = function (element, options) {
        return new button_1.default(element, options);
    };
    DxButtonComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-button',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxButtonComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxButtonComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "icon": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "useSubmitBehavior": [{ type: core_1.Input },],
        "validationGroup": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "iconChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "templateChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "typeChange": [{ type: core_1.Output },],
        "useSubmitBehaviorChange": [{ type: core_1.Output },],
        "validationGroupChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
    };
    return DxButtonComponent;
}(component_1.DxComponent));
exports.DxButtonComponent = DxButtonComponent;
var DxButtonModule = (function () {
    function DxButtonModule() {
    }
    DxButtonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxButtonComponent
                    ],
                    exports: [
                        DxButtonComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxButtonModule;
}());
exports.DxButtonModule = DxButtonModule;
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/check-box.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/check-box.js ***!
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
var check_box_1 = __webpack_require__(/*! devextreme/ui/check_box */ "./node_modules/devextreme/ui/check_box.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxCheckBoxComponent; }),
    multi: true
};
/**
 * The CheckBox is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.
 */
var DxCheckBoxComponent = (function (_super) {
    __extends(DxCheckBoxComponent, _super);
    function DxCheckBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxCheckBoxComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxCheckBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxCheckBoxComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxCheckBoxComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "text", {
        get: /**
             * Specifies the text displayed by the check box.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "value", {
        get: /**
             * Specifies the widget state.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCheckBoxComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxCheckBoxComponent.prototype.change = function (_) { };
    DxCheckBoxComponent.prototype._createInstance = function (element, options) {
        return new check_box_1.default(element, options);
    };
    DxCheckBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxCheckBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxCheckBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxCheckBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxCheckBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxCheckBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxCheckBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxCheckBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxCheckBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-check-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxCheckBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxCheckBoxComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxCheckBoxComponent;
}(component_1.DxComponent));
exports.DxCheckBoxComponent = DxCheckBoxComponent;
var DxCheckBoxModule = (function () {
    function DxCheckBoxModule() {
    }
    DxCheckBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxCheckBoxComponent
                    ],
                    exports: [
                        DxCheckBoxComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxCheckBoxModule;
}());
exports.DxCheckBoxModule = DxCheckBoxModule;
//# sourceMappingURL=check-box.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/context-menu.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/context-menu.js ***!
  \************************************************************/
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

var context_menu_1 = __webpack_require__(/*! devextreme/ui/context_menu */ "./node_modules/devextreme/ui/context_menu.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var animation_1 = __webpack_require__(/*! ./nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
var hide_1 = __webpack_require__(/*! ./nested/hide */ "./node_modules/devextreme-angular/ui/nested/hide.js");
var show_1 = __webpack_require__(/*! ./nested/show */ "./node_modules/devextreme-angular/ui/nested/show.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var position_1 = __webpack_require__(/*! ./nested/position */ "./node_modules/devextreme-angular/ui/nested/position.js");
var at_1 = __webpack_require__(/*! ./nested/at */ "./node_modules/devextreme-angular/ui/nested/at.js");
var boundary_offset_1 = __webpack_require__(/*! ./nested/boundary-offset */ "./node_modules/devextreme-angular/ui/nested/boundary-offset.js");
var collision_1 = __webpack_require__(/*! ./nested/collision */ "./node_modules/devextreme-angular/ui/nested/collision.js");
var my_1 = __webpack_require__(/*! ./nested/my */ "./node_modules/devextreme-angular/ui/nested/my.js");
var offset_1 = __webpack_require__(/*! ./nested/offset */ "./node_modules/devextreme-angular/ui/nested/offset.js");
var show_event_1 = __webpack_require__(/*! ./nested/show-event */ "./node_modules/devextreme-angular/ui/nested/show-event.js");
var show_submenu_mode_1 = __webpack_require__(/*! ./nested/show-submenu-mode */ "./node_modules/devextreme-angular/ui/nested/show-submenu-mode.js");
var delay_1 = __webpack_require__(/*! ./nested/delay */ "./node_modules/devextreme-angular/ui/nested/delay.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/**
 * The ContextMenu widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
 */
var DxContextMenuComponent = (function (_super) {
    __extends(DxContextMenuComponent, _super);
    function DxContextMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showEventChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'tabIndexChange' },
            { emit: 'targetChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxContextMenuComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "activeStateEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the ContextMenu if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "cssClass", {
        get: /**
             * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
             */
        function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data to be displayed by the widget.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxContextMenuComponent.prototype, "disabledExpr", {
        get: /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
             */
        function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the name of the data source item field whose value is displayed by the widget.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "items", {
        get: /**
             * Holds an array of menu items.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsExpr", {
        get: /**
             * Specifies which data field contains nested items.
             */
        function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "position", {
        get: /**
             * An object defining widget positioning options.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxContextMenuComponent.prototype, "selectByClick", {
        get: /**
             * Specifies whether or not an item becomes selected if a user clicks it.
             */
        function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedExpr", {
        get: /**
             * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
             */
        function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItem", {
        get: /**
             * The selected item object.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionMode", {
        get: /**
             * Specifies the selection mode supported by the menu.
             */
        function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showEvent", {
        get: /**
             * Specifies options for displaying the widget.
             */
        function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showSubmenuMode", {
        get: /**
             * Specifies options of submenu showing and hiding.
             */
        function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "submenuDirection", {
        get: /**
             * Specifies the direction at which submenus are displayed.
             */
        function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "target", {
        get: /**
             * The target element associated with the context menu.
             */
        function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "visible", {
        get: /**
             * A Boolean value specifying whether or not the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxContextMenuComponent.prototype._createInstance = function (element, options) {
        return new context_menu_1.default(element, options);
    };
    DxContextMenuComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxContextMenuComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxContextMenuComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxContextMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxContextMenuComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxContextMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-context-menu',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxContextMenuComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxContextMenuComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "closeOnOutsideClick": [{ type: core_1.Input },],
        "cssClass": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "disabledExpr": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemsExpr": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "selectByClick": [{ type: core_1.Input },],
        "selectedExpr": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "selectionMode": [{ type: core_1.Input },],
        "showEvent": [{ type: core_1.Input },],
        "showSubmenuMode": [{ type: core_1.Input },],
        "submenuDirection": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "target": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onHidden": [{ type: core_1.Output },],
        "onHiding": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onItemContextMenu": [{ type: core_1.Output },],
        "onItemRendered": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPositioning": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onShowing": [{ type: core_1.Output },],
        "onShown": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "closeOnOutsideClickChange": [{ type: core_1.Output },],
        "cssClassChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "disabledExprChange": [{ type: core_1.Output },],
        "displayExprChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemsExprChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "selectByClickChange": [{ type: core_1.Output },],
        "selectedExprChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "selectionModeChange": [{ type: core_1.Output },],
        "showEventChange": [{ type: core_1.Output },],
        "showSubmenuModeChange": [{ type: core_1.Output },],
        "submenuDirectionChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "targetChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxContextMenuComponent;
}(component_1.DxComponent));
exports.DxContextMenuComponent = DxContextMenuComponent;
var DxContextMenuModule = (function () {
    function DxContextMenuModule() {
    }
    DxContextMenuModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        show_event_1.DxoShowEventModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxContextMenuComponent
                    ],
                    exports: [
                        DxContextMenuComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        show_event_1.DxoShowEventModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxContextMenuModule;
}());
exports.DxContextMenuModule = DxContextMenuModule;
//# sourceMappingURL=context-menu.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/date-box.js":
/*!********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/date-box.js ***!
  \********************************************************/
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

var date_box_1 = __webpack_require__(/*! devextreme/ui/date_box */ "./node_modules/devextreme/ui/date_box.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var calendar_options_1 = __webpack_require__(/*! ./nested/calendar-options */ "./node_modules/devextreme-angular/ui/nested/calendar-options.js");
var display_format_1 = __webpack_require__(/*! ./nested/display-format */ "./node_modules/devextreme-angular/ui/nested/display-format.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxDateBoxComponent; }),
    multi: true
};
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
var DxDateBoxComponent = (function (_super) {
    __extends(DxDateBoxComponent, _super);
    function DxDateBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'calendarOptionsChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'displayFormatChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'maxLengthChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showAnalogClockChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useMaskBehaviorChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDateBoxComponent.prototype, "acceptCustomValue", {
        get: /**
             * Specifies whether or not the widget allows an end-user to enter a custom value.
             */
        function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
        get: /**
             * Specifies whether or not adaptive widget rendering is enabled on a small screen.
             */
        function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
        get: /**
             * The text displayed on the Apply button.
             */
        function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
        get: /**
             * Specifies the way an end-user applies the selected value.
             */
        function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "calendarOptions", {
        get: /**
             * Configures the calendar's value picker. Applies only if the pickerType is "calendar".
             */
        function () {
            return this._getOption('calendarOptions');
        },
        set: function (value) {
            this._setOption('calendarOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
        get: /**
             * The text displayed on the Cancel button.
             */
        function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
        get: /**
             * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
             */
        function () {
            return this._getOption('dateOutOfRangeMessage');
        },
        set: function (value) {
            this._setOption('dateOutOfRangeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateSerializationFormat", {
        get: /**
             * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
             */
        function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "disabledDates", {
        get: /**
             * Specifies dates to be disabled. Applies only if pickerType is "calendar".
             */
        function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
        get: /**
             * Specifies the date display format. Ignored if the pickerType option is "native"
             */
        function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dropDownButtonTemplate", {
        get: /**
             * Specifies a custom template for the drop-down button.
             */
        function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
        get: /**
             * Specifies the interval between neighboring values in the popup list in minutes.
             */
        function () {
            return this._getOption('interval');
        },
        set: function (value) {
            this._setOption('interval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
        get: /**
             * Specifies the message displayed if the typed value is not a valid date or time.
             */
        function () {
            return this._getOption('invalidDateMessage');
        },
        set: function (value) {
            this._setOption('invalidDateMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "max", {
        get: /**
             * The last date that can be selected within the widget.
             */
        function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
        get: /**
             * Use the calendarOptions option instead.
             */
        function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "min", {
        get: /**
             * The minimum date that can be selected within the widget.
             */
        function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
        get: /**
             * Use the calendarOptions option instead.
             */
        function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "openOnFieldClick", {
        get: /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
        function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
        get: /**
             * Specifies the type of the date/time picker.
             */
        function () {
            return this._getOption('pickerType');
        },
        set: function (value) {
            this._setOption('pickerType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
        get: /**
             * Specifies a placeholder for the input field.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "showAnalogClock", {
        get: /**
             * Specifies whether to show the analog clock in the value picker. Applies only if type is "datetime" and pickerType is "calendar".
             */
        function () {
            return this._getOption('showAnalogClock');
        },
        set: function (value) {
            this._setOption('showAnalogClock', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether to display the Clear button in the widget.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showDropDownButton", {
        get: /**
             * Specifies whether the drop-down button is visible.
             */
        function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "type", {
        get: /**
             * A format used to display date/time information.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "useMaskBehavior", {
        get: /**
             * Specifies whether to control user input using a mask created based on the displayFormat.
             */
        function () {
            return this._getOption('useMaskBehavior');
        },
        set: function (value) {
            this._setOption('useMaskBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "value", {
        get: /**
             * An object or a value specifying the date and time currently selected using the date box.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDateBoxComponent.prototype.change = function (_) { };
    DxDateBoxComponent.prototype._createInstance = function (element, options) {
        return new date_box_1.default(element, options);
    };
    DxDateBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxDateBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxDateBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxDateBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxDateBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxDateBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDateBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('disabledDates', changes);
    };
    DxDateBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDateBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxDateBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDateBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxDateBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxDateBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-date-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxDateBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxDateBoxComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "acceptCustomValue": [{ type: core_1.Input },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "adaptivityEnabled": [{ type: core_1.Input },],
        "applyButtonText": [{ type: core_1.Input },],
        "applyValueMode": [{ type: core_1.Input },],
        "calendarOptions": [{ type: core_1.Input },],
        "cancelButtonText": [{ type: core_1.Input },],
        "dateOutOfRangeMessage": [{ type: core_1.Input },],
        "dateSerializationFormat": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "disabledDates": [{ type: core_1.Input },],
        "displayFormat": [{ type: core_1.Input },],
        "dropDownButtonTemplate": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "interval": [{ type: core_1.Input },],
        "invalidDateMessage": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "maxLength": [{ type: core_1.Input },],
        "maxZoomLevel": [{ type: core_1.Input },],
        "min": [{ type: core_1.Input },],
        "minZoomLevel": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "openOnFieldClick": [{ type: core_1.Input },],
        "pickerType": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "showAnalogClock": [{ type: core_1.Input },],
        "showClearButton": [{ type: core_1.Input },],
        "showDropDownButton": [{ type: core_1.Input },],
        "spellcheck": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "useMaskBehavior": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueChangeEvent": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onClosed": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onCopy": [{ type: core_1.Output },],
        "onCut": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEnterKey": [{ type: core_1.Output },],
        "onFocusIn": [{ type: core_1.Output },],
        "onFocusOut": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onInput": [{ type: core_1.Output },],
        "onKeyDown": [{ type: core_1.Output },],
        "onKeyPress": [{ type: core_1.Output },],
        "onKeyUp": [{ type: core_1.Output },],
        "onOpened": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPaste": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "acceptCustomValueChange": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "adaptivityEnabledChange": [{ type: core_1.Output },],
        "applyButtonTextChange": [{ type: core_1.Output },],
        "applyValueModeChange": [{ type: core_1.Output },],
        "calendarOptionsChange": [{ type: core_1.Output },],
        "cancelButtonTextChange": [{ type: core_1.Output },],
        "dateOutOfRangeMessageChange": [{ type: core_1.Output },],
        "dateSerializationFormatChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "disabledDatesChange": [{ type: core_1.Output },],
        "displayFormatChange": [{ type: core_1.Output },],
        "dropDownButtonTemplateChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "intervalChange": [{ type: core_1.Output },],
        "invalidDateMessageChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "maxChange": [{ type: core_1.Output },],
        "maxLengthChange": [{ type: core_1.Output },],
        "maxZoomLevelChange": [{ type: core_1.Output },],
        "minChange": [{ type: core_1.Output },],
        "minZoomLevelChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "openOnFieldClickChange": [{ type: core_1.Output },],
        "pickerTypeChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "showAnalogClockChange": [{ type: core_1.Output },],
        "showClearButtonChange": [{ type: core_1.Output },],
        "showDropDownButtonChange": [{ type: core_1.Output },],
        "spellcheckChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "typeChange": [{ type: core_1.Output },],
        "useMaskBehaviorChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueChangeEventChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxDateBoxComponent;
}(component_1.DxComponent));
exports.DxDateBoxComponent = DxDateBoxComponent;
var DxDateBoxModule = (function () {
    function DxDateBoxModule() {
    }
    DxDateBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        calendar_options_1.DxoCalendarOptionsModule,
                        display_format_1.DxoDisplayFormatModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxDateBoxComponent
                    ],
                    exports: [
                        DxDateBoxComponent,
                        calendar_options_1.DxoCalendarOptionsModule,
                        display_format_1.DxoDisplayFormatModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxDateBoxModule;
}());
exports.DxDateBoxModule = DxDateBoxModule;
//# sourceMappingURL=date-box.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/form.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/form.js ***!
  \****************************************************/
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
var form_1 = __webpack_require__(/*! devextreme/ui/form */ "./node_modules/devextreme/ui/form.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var col_count_by_screen_1 = __webpack_require__(/*! ./nested/col-count-by-screen */ "./node_modules/devextreme-angular/ui/nested/col-count-by-screen.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var label_1 = __webpack_require__(/*! ./nested/label */ "./node_modules/devextreme-angular/ui/nested/label.js");
var validation_rule_dxi_1 = __webpack_require__(/*! ./nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
var tab_panel_options_1 = __webpack_require__(/*! ./nested/tab-panel-options */ "./node_modules/devextreme-angular/ui/nested/tab-panel-options.js");
var tab_dxi_1 = __webpack_require__(/*! ./nested/tab-dxi */ "./node_modules/devextreme-angular/ui/nested/tab-dxi.js");
var button_options_1 = __webpack_require__(/*! ./nested/button-options */ "./node_modules/devextreme-angular/ui/nested/button-options.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/**
 * The Form widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
 */
var DxFormComponent = (function (_super) {
    __extends(DxFormComponent, _super);
    function DxFormComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
            { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'alignItemLabelsChange' },
            { emit: 'alignItemLabelsInAllGroupsChange' },
            { emit: 'colCountChange' },
            { emit: 'colCountByScreenChange' },
            { emit: 'customizeItemChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'formDataChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'labelLocationChange' },
            { emit: 'minColWidthChange' },
            { emit: 'optionalMarkChange' },
            { emit: 'readOnlyChange' },
            { emit: 'requiredMarkChange' },
            { emit: 'requiredMessageChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showColonAfterLabelChange' },
            { emit: 'showOptionalMarkChange' },
            { emit: 'showRequiredMarkChange' },
            { emit: 'showValidationSummaryChange' },
            { emit: 'tabIndexChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFormComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabels", {
        get: /**
             * Specifies whether or not all root item labels are aligned.
             */
        function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabelsInAllGroups", {
        get: /**
             * Specifies whether or not item labels in all groups are aligned.
             */
        function () {
            return this._getOption('alignItemLabelsInAllGroups');
        },
        set: function (value) {
            this._setOption('alignItemLabelsInAllGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCount", {
        get: /**
             * The count of columns in the form layout.
             */
        function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCountByScreen", {
        get: /**
             * Specifies dependency between the screen factor and the count of columns in the form layout.
             */
        function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "customizeItem", {
        get: /**
             * Specifies a function that customizes a form item after it has been created.
             */
        function () {
            return this._getOption('customizeItem');
        },
        set: function (value) {
            this._setOption('customizeItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxFormComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFormComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "formData", {
        get: /**
             * Provides the Form's data. Gets updated every time form fields change.
             */
        function () {
            return this._getOption('formData');
        },
        set: function (value) {
            this._setOption('formData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "items", {
        get: /**
             * Holds an array of form items.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "labelLocation", {
        get: /**
             * Specifies the location of a label against the editor.
             */
        function () {
            return this._getOption('labelLocation');
        },
        set: function (value) {
            this._setOption('labelLocation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "minColWidth", {
        get: /**
             * The minimum column width used for calculating column count in the form layout.
             */
        function () {
            return this._getOption('minColWidth');
        },
        set: function (value) {
            this._setOption('minColWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "optionalMark", {
        get: /**
             * The text displayed for optional fields.
             */
        function () {
            return this._getOption('optionalMark');
        },
        set: function (value) {
            this._setOption('optionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "readOnly", {
        get: /**
             * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMark", {
        get: /**
             * The text displayed for required fields.
             */
        function () {
            return this._getOption('requiredMark');
        },
        set: function (value) {
            this._setOption('requiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMessage", {
        get: /**
             * Specifies the message that is shown for end-users if a required field value is not specified.
             */
        function () {
            return this._getOption('requiredMessage');
        },
        set: function (value) {
            this._setOption('requiredMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFormComponent.prototype, "screenByWidth", {
        get: /**
             * Specifies the function returning the screen factor depending on the screen width.
             */
        function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "scrollingEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable form scrolling.
             */
        function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showColonAfterLabel", {
        get: /**
             * Specifies whether or not a colon is displayed at the end of form labels.
             */
        function () {
            return this._getOption('showColonAfterLabel');
        },
        set: function (value) {
            this._setOption('showColonAfterLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showOptionalMark", {
        get: /**
             * Specifies whether or not the optional mark is displayed for optional fields.
             */
        function () {
            return this._getOption('showOptionalMark');
        },
        set: function (value) {
            this._setOption('showOptionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showRequiredMark", {
        get: /**
             * Specifies whether or not the required mark is displayed for required fields.
             */
        function () {
            return this._getOption('showRequiredMark');
        },
        set: function (value) {
            this._setOption('showRequiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showValidationSummary", {
        get: /**
             * Specifies whether or not the total validation summary is displayed on the form.
             */
        function () {
            return this._getOption('showValidationSummary');
        },
        set: function (value) {
            this._setOption('showValidationSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "validationGroup", {
        get: /**
             * Gives a name to the internal validation group.
             */
        function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFormComponent.prototype._createInstance = function (element, options) {
        return new form_1.default(element, options);
    };
    DxFormComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFormComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('items', changes);
    };
    DxFormComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFormComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxFormComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-form',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxFormComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxFormComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "alignItemLabels": [{ type: core_1.Input },],
        "alignItemLabelsInAllGroups": [{ type: core_1.Input },],
        "colCount": [{ type: core_1.Input },],
        "colCountByScreen": [{ type: core_1.Input },],
        "customizeItem": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "formData": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "labelLocation": [{ type: core_1.Input },],
        "minColWidth": [{ type: core_1.Input },],
        "optionalMark": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "requiredMark": [{ type: core_1.Input },],
        "requiredMessage": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "screenByWidth": [{ type: core_1.Input },],
        "scrollingEnabled": [{ type: core_1.Input },],
        "showColonAfterLabel": [{ type: core_1.Input },],
        "showOptionalMark": [{ type: core_1.Input },],
        "showRequiredMark": [{ type: core_1.Input },],
        "showValidationSummary": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "validationGroup": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEditorEnterKey": [{ type: core_1.Output },],
        "onFieldDataChanged": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "alignItemLabelsChange": [{ type: core_1.Output },],
        "alignItemLabelsInAllGroupsChange": [{ type: core_1.Output },],
        "colCountChange": [{ type: core_1.Output },],
        "colCountByScreenChange": [{ type: core_1.Output },],
        "customizeItemChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "formDataChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "labelLocationChange": [{ type: core_1.Output },],
        "minColWidthChange": [{ type: core_1.Output },],
        "optionalMarkChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "requiredMarkChange": [{ type: core_1.Output },],
        "requiredMessageChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "screenByWidthChange": [{ type: core_1.Output },],
        "scrollingEnabledChange": [{ type: core_1.Output },],
        "showColonAfterLabelChange": [{ type: core_1.Output },],
        "showOptionalMarkChange": [{ type: core_1.Output },],
        "showRequiredMarkChange": [{ type: core_1.Output },],
        "showValidationSummaryChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "validationGroupChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxFormComponent;
}(component_1.DxComponent));
exports.DxFormComponent = DxFormComponent;
var DxFormModule = (function () {
    function DxFormModule() {
    }
    DxFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        button_options_1.DxoButtonOptionsModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxFormComponent
                    ],
                    exports: [
                        DxFormComponent,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        button_options_1.DxoButtonOptionsModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxFormModule;
}());
exports.DxFormModule = DxFormModule;
//# sourceMappingURL=form.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/lookup.js":
/*!******************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/lookup.js ***!
  \******************************************************/
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

var lookup_1 = __webpack_require__(/*! devextreme/ui/lookup */ "./node_modules/devextreme/ui/lookup.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var animation_1 = __webpack_require__(/*! ./nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
var hide_1 = __webpack_require__(/*! ./nested/hide */ "./node_modules/devextreme-angular/ui/nested/hide.js");
var show_1 = __webpack_require__(/*! ./nested/show */ "./node_modules/devextreme-angular/ui/nested/show.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var position_1 = __webpack_require__(/*! ./nested/position */ "./node_modules/devextreme-angular/ui/nested/position.js");
var at_1 = __webpack_require__(/*! ./nested/at */ "./node_modules/devextreme-angular/ui/nested/at.js");
var boundary_offset_1 = __webpack_require__(/*! ./nested/boundary-offset */ "./node_modules/devextreme-angular/ui/nested/boundary-offset.js");
var collision_1 = __webpack_require__(/*! ./nested/collision */ "./node_modules/devextreme-angular/ui/nested/collision.js");
var my_1 = __webpack_require__(/*! ./nested/my */ "./node_modules/devextreme-angular/ui/nested/my.js");
var offset_1 = __webpack_require__(/*! ./nested/offset */ "./node_modules/devextreme-angular/ui/nested/offset.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxLookupComponent; }),
    multi: true
};
/**
 * The Lookup is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.
 */
var DxLookupComponent = (function (_super) {
    __extends(DxLookupComponent, _super);
    function DxLookupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'cleanSearchOnOpeningChange' },
            { emit: 'clearButtonTextChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'displayValueChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'fullScreenChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'placeholderChange' },
            { emit: 'popupHeightChange' },
            { emit: 'popupWidthChange' },
            { emit: 'positionChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchPlaceholderChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'shadingChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showPopupTitleChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'usePopoverChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLookupComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
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
    Object.defineProperty(DxLookupComponent.prototype, "applyButtonText", {
        get: /**
             * The text displayed on the Apply button.
             */
        function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyValueMode", {
        get: /**
             * Specifies the way an end-user applies the selected value.
             */
        function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cancelButtonText", {
        get: /**
             * The text displayed on the Cancel button.
             */
        function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cleanSearchOnOpening", {
        get: /**
             * Specifies whether or not the widget cleans the search box when the popup window is displayed.
             */
        function () {
            return this._getOption('cleanSearchOnOpening');
        },
        set: function (value) {
            this._setOption('cleanSearchOnOpening', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "clearButtonText", {
        get: /**
             * The text displayed on the Clear button.
             */
        function () {
            return this._getOption('clearButtonText');
        },
        set: function (value) {
            this._setOption('clearButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the drop-down menu if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data the widget should display.
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
    Object.defineProperty(DxLookupComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxLookupComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the name of the data source item field whose value is displayed by the widget.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayValue", {
        get: /**
             * Returns the value currently displayed by the widget.
             */
        function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLookupComponent.prototype, "fieldTemplate", {
        get: /**
             * Specifies a custom template for the input field.
             */
        function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fullScreen", {
        get: /**
             * A Boolean value specifying whether or not to display the lookup in full-screen mode.
             */
        function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "grouped", {
        get: /**
             * A Boolean value specifying whether or not to group widget items.
             */
        function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "groupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "minSearchLength", {
        get: /**
             * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
             */
        function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "nextButtonText", {
        get: /**
             * The text displayed on the button used to load the next page from the data source.
             */
        function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadingText", {
        get: /**
             * Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom.
             */
        function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadMode", {
        get: /**
             * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
             */
        function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "placeholder", {
        get: /**
             * The text displayed by the widget when nothing is selected.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupHeight", {
        get: /**
             * Specifies the popup element's height. Applies only if fullScreen is false.
             */
        function () {
            return this._getOption('popupHeight');
        },
        set: function (value) {
            this._setOption('popupHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupWidth", {
        get: /**
             * Specifies the popup element's width. Applies only if fullScreen is false.
             */
        function () {
            return this._getOption('popupWidth');
        },
        set: function (value) {
            this._setOption('popupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "position", {
        get: /**
             * An object defining widget positioning options.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pulledDownText", {
        get: /**
             * Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold.
             */
        function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullingDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
             */
        function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullRefreshEnabled", {
        get: /**
             * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
             */
        function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "refreshingText", {
        get: /**
             * Specifies the text displayed in the pullDown panel while the widget is being refreshed.
             */
        function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLookupComponent.prototype, "searchEnabled", {
        get: /**
             * Specifies whether the search box is visible.
             */
        function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchExpr", {
        get: /**
             * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
             */
        function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchMode", {
        get: /**
             * Specifies a comparison operation used to search widget items.
             */
        function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchPlaceholder", {
        get: /**
             * The text that is provided as a hint in the lookup's search bar.
             */
        function () {
            return this._getOption('searchPlaceholder');
        },
        set: function (value) {
            this._setOption('searchPlaceholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchTimeout", {
        get: /**
             * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
             */
        function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "selectedItem", {
        get: /**
             * Gets the currently selected item.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "shading", {
        get: /**
             * A Boolean value specifying whether or not the main screen is inactive while the lookup is active.
             */
        function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showCancelButton", {
        get: /**
             * Specifies whether to display the Cancel button in the lookup window.
             */
        function () {
            return this._getOption('showCancelButton');
        },
        set: function (value) {
            this._setOption('showCancelButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether or not to display the Clear button in the lookup window.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showDataBeforeSearch", {
        get: /**
             * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
             */
        function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showPopupTitle", {
        get: /**
             * A Boolean value specifying whether or not to display the title in the popup window.
             */
        function () {
            return this._getOption('showPopupTitle');
        },
        set: function (value) {
            this._setOption('showPopupTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "title", {
        get: /**
             * The title of the lookup window.
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
    Object.defineProperty(DxLookupComponent.prototype, "titleTemplate", {
        get: /**
             * Specifies a custom template for the title.
             */
        function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "useNativeScrolling", {
        get: /**
             * Specifies whether or not the widget uses native scrolling.
             */
        function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "usePopover", {
        get: /**
             * Specifies whether or not to show lookup contents in a Popover widget.
             */
        function () {
            return this._getOption('usePopover');
        },
        set: function (value) {
            this._setOption('usePopover', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "value", {
        get: /**
             * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueExpr", {
        get: /**
             * Specifies which data field provides the widget's value. When this option is not set, the value is the entire data object.
             */
        function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLookupComponent.prototype.change = function (_) { };
    Object.defineProperty(DxLookupComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLookupComponent.prototype._createInstance = function (element, options) {
        return new lookup_1.default(element, options);
    };
    DxLookupComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxLookupComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxLookupComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxLookupComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxLookupComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxLookupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLookupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxLookupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxLookupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxLookupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxLookupComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxLookupComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxLookupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-lookup',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxLookupComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxLookupComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "applyButtonText": [{ type: core_1.Input },],
        "applyValueMode": [{ type: core_1.Input },],
        "cancelButtonText": [{ type: core_1.Input },],
        "cleanSearchOnOpening": [{ type: core_1.Input },],
        "clearButtonText": [{ type: core_1.Input },],
        "closeOnOutsideClick": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "displayValue": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "fieldTemplate": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "fullScreen": [{ type: core_1.Input },],
        "grouped": [{ type: core_1.Input },],
        "groupTemplate": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "minSearchLength": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "nextButtonText": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "pageLoadingText": [{ type: core_1.Input },],
        "pageLoadMode": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "popupHeight": [{ type: core_1.Input },],
        "popupWidth": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "pulledDownText": [{ type: core_1.Input },],
        "pullingDownText": [{ type: core_1.Input },],
        "pullRefreshEnabled": [{ type: core_1.Input },],
        "refreshingText": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "searchEnabled": [{ type: core_1.Input },],
        "searchExpr": [{ type: core_1.Input },],
        "searchMode": [{ type: core_1.Input },],
        "searchPlaceholder": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "shading": [{ type: core_1.Input },],
        "showCancelButton": [{ type: core_1.Input },],
        "showClearButton": [{ type: core_1.Input },],
        "showDataBeforeSearch": [{ type: core_1.Input },],
        "showPopupTitle": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "titleTemplate": [{ type: core_1.Input },],
        "useNativeScrolling": [{ type: core_1.Input },],
        "usePopover": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueChangeEvent": [{ type: core_1.Input },],
        "valueExpr": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onClosed": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onOpened": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPageLoading": [{ type: core_1.Output },],
        "onPullRefresh": [{ type: core_1.Output },],
        "onScroll": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onTitleRendered": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "applyButtonTextChange": [{ type: core_1.Output },],
        "applyValueModeChange": [{ type: core_1.Output },],
        "cancelButtonTextChange": [{ type: core_1.Output },],
        "cleanSearchOnOpeningChange": [{ type: core_1.Output },],
        "clearButtonTextChange": [{ type: core_1.Output },],
        "closeOnOutsideClickChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "displayExprChange": [{ type: core_1.Output },],
        "displayValueChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "fieldTemplateChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "fullScreenChange": [{ type: core_1.Output },],
        "groupedChange": [{ type: core_1.Output },],
        "groupTemplateChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "minSearchLengthChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "nextButtonTextChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "pageLoadingTextChange": [{ type: core_1.Output },],
        "pageLoadModeChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "popupHeightChange": [{ type: core_1.Output },],
        "popupWidthChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "pulledDownTextChange": [{ type: core_1.Output },],
        "pullingDownTextChange": [{ type: core_1.Output },],
        "pullRefreshEnabledChange": [{ type: core_1.Output },],
        "refreshingTextChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "searchEnabledChange": [{ type: core_1.Output },],
        "searchExprChange": [{ type: core_1.Output },],
        "searchModeChange": [{ type: core_1.Output },],
        "searchPlaceholderChange": [{ type: core_1.Output },],
        "searchTimeoutChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "shadingChange": [{ type: core_1.Output },],
        "showCancelButtonChange": [{ type: core_1.Output },],
        "showClearButtonChange": [{ type: core_1.Output },],
        "showDataBeforeSearchChange": [{ type: core_1.Output },],
        "showPopupTitleChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "titleTemplateChange": [{ type: core_1.Output },],
        "useNativeScrollingChange": [{ type: core_1.Output },],
        "usePopoverChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueChangeEventChange": [{ type: core_1.Output },],
        "valueExprChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxLookupComponent;
}(component_1.DxComponent));
exports.DxLookupComponent = DxLookupComponent;
var DxLookupModule = (function () {
    function DxLookupModule() {
    }
    DxLookupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxLookupComponent
                    ],
                    exports: [
                        DxLookupComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxLookupModule;
}());
exports.DxLookupModule = DxLookupModule;
//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/adapter.js":
/*!**************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/adapter.js ***!
  \**************************************************************/
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
var DxoAdapterComponent = (function (_super) {
    __extends(DxoAdapterComponent, _super);
    function DxoAdapterComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAdapterComponent.prototype, "applyValidationResults", {
        get: function () {
            return this._getOption('applyValidationResults');
        },
        set: function (value) {
            this._setOption('applyValidationResults', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "bypass", {
        get: function () {
            return this._getOption('bypass');
        },
        set: function (value) {
            this._setOption('bypass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "focus", {
        get: function () {
            return this._getOption('focus');
        },
        set: function (value) {
            this._setOption('focus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "getValue", {
        get: function () {
            return this._getOption('getValue');
        },
        set: function (value) {
            this._setOption('getValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "reset", {
        get: function () {
            return this._getOption('reset');
        },
        set: function (value) {
            this._setOption('reset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "validationRequestsCallbacks", {
        get: function () {
            return this._getOption('validationRequestsCallbacks');
        },
        set: function (value) {
            this._setOption('validationRequestsCallbacks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdapterComponent.prototype, "_optionPath", {
        get: function () {
            return 'adapter';
        },
        enumerable: true,
        configurable: true
    });
    DxoAdapterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-adapter',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoAdapterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAdapterComponent.propDecorators = {
        "applyValidationResults": [{ type: core_1.Input },],
        "bypass": [{ type: core_1.Input },],
        "focus": [{ type: core_1.Input },],
        "getValue": [{ type: core_1.Input },],
        "reset": [{ type: core_1.Input },],
        "validationRequestsCallbacks": [{ type: core_1.Input },],
    };
    return DxoAdapterComponent;
}(nested_option_2.NestedOption));
exports.DxoAdapterComponent = DxoAdapterComponent;
var DxoAdapterModule = (function () {
    function DxoAdapterModule() {
    }
    DxoAdapterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAdapterComponent
                    ],
                    exports: [
                        DxoAdapterComponent
                    ],
                },] },
    ];
    return DxoAdapterModule;
}());
exports.DxoAdapterModule = DxoAdapterModule;
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/base/calendar-options.js":
/*!****************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/base/calendar-options.js ***!
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
var nested_option_1 = __webpack_require__(/*! ../../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var DxoCalendarOptions = (function (_super) {
    __extends(DxoCalendarOptions, _super);
    function DxoCalendarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoCalendarOptions.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "cellTemplate", {
        get: function () {
            return this._getOption('cellTemplate');
        },
        set: function (value) {
            this._setOption('cellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "dateSerializationFormat", {
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "disabledDates", {
        get: function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "firstDayOfWeek", {
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "maxZoomLevel", {
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "minZoomLevel", {
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "onDisposing", {
        get: function () {
            return this._getOption('onDisposing');
        },
        set: function (value) {
            this._setOption('onDisposing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "onInitialized", {
        get: function () {
            return this._getOption('onInitialized');
        },
        set: function (value) {
            this._setOption('onInitialized', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "onOptionChanged", {
        get: function () {
            return this._getOption('onOptionChanged');
        },
        set: function (value) {
            this._setOption('onOptionChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "onValueChanged", {
        get: function () {
            return this._getOption('onValueChanged');
        },
        set: function (value) {
            this._setOption('onValueChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "showTodayButton", {
        get: function () {
            return this._getOption('showTodayButton');
        },
        set: function (value) {
            this._setOption('showTodayButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCalendarOptions.prototype, "zoomLevel", {
        get: function () {
            return this._getOption('zoomLevel');
        },
        set: function (value) {
            this._setOption('zoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoCalendarOptions;
}(nested_option_1.NestedOption));
exports.DxoCalendarOptions = DxoCalendarOptions;
//# sourceMappingURL=calendar-options.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/calendar-options.js":
/*!***********************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/calendar-options.js ***!
  \***********************************************************************/
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
var calendar_options_1 = __webpack_require__(/*! ./base/calendar-options */ "./node_modules/devextreme-angular/ui/nested/base/calendar-options.js");
var DxoCalendarOptionsComponent = (function (_super) {
    __extends(DxoCalendarOptionsComponent, _super);
    function DxoCalendarOptionsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        _this._createEventEmitters([
            { emit: 'valueChange' },
            { emit: 'zoomLevelChange' }
        ]);
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoCalendarOptionsComponent.prototype, "_optionPath", {
        get: function () {
            return 'calendarOptions';
        },
        enumerable: true,
        configurable: true
    });
    DxoCalendarOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-calendar-options',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'activeStateEnabled',
                        'cellTemplate',
                        'dateSerializationFormat',
                        'disabled',
                        'disabledDates',
                        'elementAttr',
                        'firstDayOfWeek',
                        'focusStateEnabled',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'isValid',
                        'max',
                        'maxZoomLevel',
                        'min',
                        'minZoomLevel',
                        'name',
                        'onDisposing',
                        'onInitialized',
                        'onOptionChanged',
                        'onValueChanged',
                        'readOnly',
                        'rtlEnabled',
                        'showTodayButton',
                        'tabIndex',
                        'validationError',
                        'validationMessageMode',
                        'value',
                        'visible',
                        'width',
                        'zoomLevel'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoCalendarOptionsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoCalendarOptionsComponent.propDecorators = {
        "valueChange": [{ type: core_1.Output },],
        "zoomLevelChange": [{ type: core_1.Output },],
    };
    return DxoCalendarOptionsComponent;
}(calendar_options_1.DxoCalendarOptions));
exports.DxoCalendarOptionsComponent = DxoCalendarOptionsComponent;
var DxoCalendarOptionsModule = (function () {
    function DxoCalendarOptionsModule() {
    }
    DxoCalendarOptionsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoCalendarOptionsComponent
                    ],
                    exports: [
                        DxoCalendarOptionsComponent
                    ],
                },] },
    ];
    return DxoCalendarOptionsModule;
}());
exports.DxoCalendarOptionsModule = DxoCalendarOptionsModule;
//# sourceMappingURL=calendar-options.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/delay.js ***!
  \************************************************************/
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
var DxoDelayComponent = (function (_super) {
    __extends(DxoDelayComponent, _super);
    function DxoDelayComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDelayComponent.prototype, "hide", {
        get: function () {
            return this._getOption('hide');
        },
        set: function (value) {
            this._setOption('hide', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "_optionPath", {
        get: function () {
            return 'delay';
        },
        enumerable: true,
        configurable: true
    });
    DxoDelayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-delay',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoDelayComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDelayComponent.propDecorators = {
        "hide": [{ type: core_1.Input },],
        "show": [{ type: core_1.Input },],
    };
    return DxoDelayComponent;
}(nested_option_2.NestedOption));
exports.DxoDelayComponent = DxoDelayComponent;
var DxoDelayModule = (function () {
    function DxoDelayModule() {
    }
    DxoDelayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDelayComponent
                    ],
                    exports: [
                        DxoDelayComponent
                    ],
                },] },
    ];
    return DxoDelayModule;
}());
exports.DxoDelayModule = DxoDelayModule;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/display-format.js":
/*!*********************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/display-format.js ***!
  \*********************************************************************/
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
var format_1 = __webpack_require__(/*! ./base/format */ "./node_modules/devextreme-angular/ui/nested/base/format.js");
var DxoDisplayFormatComponent = (function (_super) {
    __extends(DxoDisplayFormatComponent, _super);
    function DxoDisplayFormatComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoDisplayFormatComponent.prototype, "_optionPath", {
        get: function () {
            return 'displayFormat';
        },
        enumerable: true,
        configurable: true
    });
    DxoDisplayFormatComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-display-format',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'currency',
                        'formatter',
                        'parser',
                        'precision',
                        'type'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDisplayFormatComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoDisplayFormatComponent;
}(format_1.DxoFormat));
exports.DxoDisplayFormatComponent = DxoDisplayFormatComponent;
var DxoDisplayFormatModule = (function () {
    function DxoDisplayFormatModule() {
    }
    DxoDisplayFormatModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDisplayFormatComponent
                    ],
                    exports: [
                        DxoDisplayFormatComponent
                    ],
                },] },
    ];
    return DxoDisplayFormatModule;
}());
exports.DxoDisplayFormatModule = DxoDisplayFormatModule;
//# sourceMappingURL=display-format.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/show-event.js":
/*!*****************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/show-event.js ***!
  \*****************************************************************/
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
var DxoShowEventComponent = (function (_super) {
    __extends(DxoShowEventComponent, _super);
    function DxoShowEventComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoShowEventComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowEventComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowEventComponent.prototype, "_optionPath", {
        get: function () {
            return 'showEvent';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowEventComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-show-event',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoShowEventComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShowEventComponent.propDecorators = {
        "delay": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
    };
    return DxoShowEventComponent;
}(nested_option_2.NestedOption));
exports.DxoShowEventComponent = DxoShowEventComponent;
var DxoShowEventModule = (function () {
    function DxoShowEventModule() {
    }
    DxoShowEventModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShowEventComponent
                    ],
                    exports: [
                        DxoShowEventComponent
                    ],
                },] },
    ];
    return DxoShowEventModule;
}());
exports.DxoShowEventModule = DxoShowEventModule;
//# sourceMappingURL=show-event.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/show-submenu-mode.js":
/*!************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/show-submenu-mode.js ***!
  \************************************************************************/
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
var DxoShowSubmenuModeComponent = (function (_super) {
    __extends(DxoShowSubmenuModeComponent, _super);
    function DxoShowSubmenuModeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "_optionPath", {
        get: function () {
            return 'showSubmenuMode';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowSubmenuModeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-show-submenu-mode',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoShowSubmenuModeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShowSubmenuModeComponent.propDecorators = {
        "delay": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
    };
    return DxoShowSubmenuModeComponent;
}(nested_option_2.NestedOption));
exports.DxoShowSubmenuModeComponent = DxoShowSubmenuModeComponent;
var DxoShowSubmenuModeModule = (function () {
    function DxoShowSubmenuModeModule() {
    }
    DxoShowSubmenuModeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShowSubmenuModeComponent
                    ],
                    exports: [
                        DxoShowSubmenuModeComponent
                    ],
                },] },
    ];
    return DxoShowSubmenuModeModule;
}());
exports.DxoShowSubmenuModeModule = DxoShowSubmenuModeModule;
//# sourceMappingURL=show-submenu-mode.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/popup.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/popup.js ***!
  \*****************************************************/
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
var popup_1 = __webpack_require__(/*! devextreme/ui/popup */ "./node_modules/devextreme/ui/popup.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var animation_1 = __webpack_require__(/*! ./nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
var hide_1 = __webpack_require__(/*! ./nested/hide */ "./node_modules/devextreme-angular/ui/nested/hide.js");
var show_1 = __webpack_require__(/*! ./nested/show */ "./node_modules/devextreme-angular/ui/nested/show.js");
var position_1 = __webpack_require__(/*! ./nested/position */ "./node_modules/devextreme-angular/ui/nested/position.js");
var at_1 = __webpack_require__(/*! ./nested/at */ "./node_modules/devextreme-angular/ui/nested/at.js");
var boundary_offset_1 = __webpack_require__(/*! ./nested/boundary-offset */ "./node_modules/devextreme-angular/ui/nested/boundary-offset.js");
var collision_1 = __webpack_require__(/*! ./nested/collision */ "./node_modules/devextreme-angular/ui/nested/collision.js");
var my_1 = __webpack_require__(/*! ./nested/my */ "./node_modules/devextreme-angular/ui/nested/my.js");
var offset_1 = __webpack_require__(/*! ./nested/offset */ "./node_modules/devextreme-angular/ui/nested/offset.js");
var toolbar_item_dxi_1 = __webpack_require__(/*! ./nested/toolbar-item-dxi */ "./node_modules/devextreme-angular/ui/nested/toolbar-item-dxi.js");
var toolbar_item_dxi_2 = __webpack_require__(/*! ./nested/toolbar-item-dxi */ "./node_modules/devextreme-angular/ui/nested/toolbar-item-dxi.js");
/**
 * The Popup widget is a pop-up window overlaying the current view.
 */
var DxPopupComponent = (function (_super) {
    __extends(DxPopupComponent, _super);
    function DxPopupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'accessKeyChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'containerChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'dragEnabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'fullScreenChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'resizeEnabledChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'tabIndexChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPopupComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "animation", {
        get: /**
             * Configures widget visibility animations. This object contains two fields: show and hide.
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
    Object.defineProperty(DxPopupComponent.prototype, "closeOnBackButton", {
        get: /**
             * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
             */
        function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnOutsideClick", {
        get: /**
             * Specifies whether to close the widget if a user clicks outside it.
             */
        function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "container", {
        get: /**
             * Specifies the container in which to place the widget.
             */
        function () {
            return this._getOption('container');
        },
        set: function (value) {
            this._setOption('container', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "contentTemplate", {
        get: /**
             * Specifies a custom template for the widget content.
             */
        function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the widget's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxPopupComponent.prototype, "dragEnabled", {
        get: /**
             * Specifies whether or not to allow a user to drag the popup window.
             */
        function () {
            return this._getOption('dragEnabled');
        },
        set: function (value) {
            this._setOption('dragEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPopupComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "fullScreen", {
        get: /**
             * A Boolean value specifying whether or not to display the widget in full-screen mode.
             */
        function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height in pixels.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxHeight", {
        get: /**
             * Specifies the maximum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxWidth", {
        get: /**
             * Specifies the maximum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minHeight", {
        get: /**
             * Specifies the minimum height the widget can reach while resizing.
             */
        function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minWidth", {
        get: /**
             * Specifies the minimum width the widget can reach while resizing.
             */
        function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "position", {
        get: /**
             * Positions the widget.
             */
        function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "resizeEnabled", {
        get: /**
             * Specifies whether or not an end user can resize the widget.
             */
        function () {
            return this._getOption('resizeEnabled');
        },
        set: function (value) {
            this._setOption('resizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPopupComponent.prototype, "shading", {
        get: /**
             * A Boolean value specifying whether or not the main screen is inactive while the widget is active.
             */
        function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "shadingColor", {
        get: /**
             * Specifies the shading color.
             */
        function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showCloseButton", {
        get: /**
             * Specifies whether or not the widget displays the Close button.
             */
        function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showTitle", {
        get: /**
             * A Boolean value specifying whether or not to display the title in the popup window.
             */
        function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "title", {
        get: /**
             * The title in the overlay window.
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
    Object.defineProperty(DxPopupComponent.prototype, "titleTemplate", {
        get: /**
             * Specifies a custom template for the widget title. Does not apply if the title is defined.
             */
        function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItems", {
        get: /**
             * Specifies items displayed on the top or bottom toolbar of the popup window.
             */
        function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "visible", {
        get: /**
             * A Boolean value specifying whether or not the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width in pixels.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopupComponent.prototype._createInstance = function (element, options) {
        return new popup_1.default(element, options);
    };
    DxPopupComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPopupComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('toolbarItems', changes);
    };
    DxPopupComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPopupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPopupComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPopupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-popup',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxPopupComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxPopupComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "closeOnBackButton": [{ type: core_1.Input },],
        "closeOnOutsideClick": [{ type: core_1.Input },],
        "container": [{ type: core_1.Input },],
        "contentTemplate": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "dragEnabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "fullScreen": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "maxHeight": [{ type: core_1.Input },],
        "maxWidth": [{ type: core_1.Input },],
        "minHeight": [{ type: core_1.Input },],
        "minWidth": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "resizeEnabled": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "shading": [{ type: core_1.Input },],
        "shadingColor": [{ type: core_1.Input },],
        "showCloseButton": [{ type: core_1.Input },],
        "showTitle": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "titleTemplate": [{ type: core_1.Input },],
        "toolbarItems": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onHidden": [{ type: core_1.Output },],
        "onHiding": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onResize": [{ type: core_1.Output },],
        "onResizeEnd": [{ type: core_1.Output },],
        "onResizeStart": [{ type: core_1.Output },],
        "onShowing": [{ type: core_1.Output },],
        "onShown": [{ type: core_1.Output },],
        "onTitleRendered": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "animationChange": [{ type: core_1.Output },],
        "closeOnBackButtonChange": [{ type: core_1.Output },],
        "closeOnOutsideClickChange": [{ type: core_1.Output },],
        "containerChange": [{ type: core_1.Output },],
        "contentTemplateChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "dragEnabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "fullScreenChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "maxHeightChange": [{ type: core_1.Output },],
        "maxWidthChange": [{ type: core_1.Output },],
        "minHeightChange": [{ type: core_1.Output },],
        "minWidthChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "resizeEnabledChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "shadingChange": [{ type: core_1.Output },],
        "shadingColorChange": [{ type: core_1.Output },],
        "showCloseButtonChange": [{ type: core_1.Output },],
        "showTitleChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "titleChange": [{ type: core_1.Output },],
        "titleTemplateChange": [{ type: core_1.Output },],
        "toolbarItemsChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "toolbarItemsChildren": [{ type: core_1.ContentChildren, args: [toolbar_item_dxi_2.DxiToolbarItemComponent,] },],
    };
    return DxPopupComponent;
}(component_1.DxComponent));
exports.DxPopupComponent = DxPopupComponent;
var DxPopupModule = (function () {
    function DxPopupModule() {
    }
    DxPopupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxPopupComponent
                    ],
                    exports: [
                        DxPopupComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxPopupModule;
}());
exports.DxPopupModule = DxPopupModule;
//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/progress-bar.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/progress-bar.js ***!
  \************************************************************/
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
var progress_bar_1 = __webpack_require__(/*! devextreme/ui/progress_bar */ "./node_modules/devextreme/ui/progress_bar.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxProgressBarComponent; }),
    multi: true
};
/**
 * The ProgressBar is a widget that shows current progress.
 */
var DxProgressBarComponent = (function (_super) {
    __extends(DxProgressBarComponent, _super);
    function DxProgressBarComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'complete', emit: 'onComplete' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showStatusChange' },
            { emit: 'statusFormatChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxProgressBarComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxProgressBarComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "max", {
        get: /**
             * The maximum value the widget can accept.
             */
        function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "min", {
        get: /**
             * The minimum value the widget can accept.
             */
        function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxProgressBarComponent.prototype, "showStatus", {
        get: /**
             * Specifies whether or not the widget displays a progress status.
             */
        function () {
            return this._getOption('showStatus');
        },
        set: function (value) {
            this._setOption('showStatus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "statusFormat", {
        get: /**
             * Specifies a format for the progress status.
             */
        function () {
            return this._getOption('statusFormat');
        },
        set: function (value) {
            this._setOption('statusFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "value", {
        get: /**
             * The current widget value.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxProgressBarComponent.prototype.change = function (_) { };
    DxProgressBarComponent.prototype._createInstance = function (element, options) {
        return new progress_bar_1.default(element, options);
    };
    DxProgressBarComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxProgressBarComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxProgressBarComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxProgressBarComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxProgressBarComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxProgressBarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxProgressBarComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxProgressBarComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxProgressBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-progress-bar',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxProgressBarComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxProgressBarComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "min": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "showStatus": [{ type: core_1.Input },],
        "statusFormat": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onComplete": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "maxChange": [{ type: core_1.Output },],
        "minChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "showStatusChange": [{ type: core_1.Output },],
        "statusFormatChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxProgressBarComponent;
}(component_1.DxComponent));
exports.DxProgressBarComponent = DxProgressBarComponent;
var DxProgressBarModule = (function () {
    function DxProgressBarModule() {
    }
    DxProgressBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxProgressBarComponent
                    ],
                    exports: [
                        DxProgressBarComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxProgressBarModule;
}());
exports.DxProgressBarModule = DxProgressBarModule;
//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/scroll-view.js":
/*!***********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/scroll-view.js ***!
  \***********************************************************/
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
var scroll_view_1 = __webpack_require__(/*! devextreme/ui/scroll_view */ "./node_modules/devextreme/ui/scroll_view.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
var DxScrollViewComponent = (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        get: /**
             * A Boolean value specifying whether to enable or disable the bounce-back effect.
             */
        function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        get: /**
             * A string value specifying the available scrolling directions.
             */
        function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        get: /**
             * A Boolean value specifying whether or not the widget can respond to user interaction.
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
    Object.defineProperty(DxScrollViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
             */
        function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        get: /**
             * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
             */
        function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        get: /**
             * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
             */
        function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        get: /**
             * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
             */
        function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        get: /**
             * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
             */
        function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        get: /**
             * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
             */
        function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        get: /**
             * Specifies when the widget shows the scrollbar.
             */
        function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        get: /**
             * Indicates whether to use native or simulated scrolling.
             */
        function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new scroll_view_1.default(element, options);
    };
    DxScrollViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxScrollViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-scroll-view',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxScrollViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxScrollViewComponent.propDecorators = {
        "bounceEnabled": [{ type: core_1.Input },],
        "direction": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "pulledDownText": [{ type: core_1.Input },],
        "pullingDownText": [{ type: core_1.Input },],
        "reachBottomText": [{ type: core_1.Input },],
        "refreshingText": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrollByContent": [{ type: core_1.Input },],
        "scrollByThumb": [{ type: core_1.Input },],
        "showScrollbar": [{ type: core_1.Input },],
        "useNative": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPullDown": [{ type: core_1.Output },],
        "onReachBottom": [{ type: core_1.Output },],
        "onScroll": [{ type: core_1.Output },],
        "onUpdated": [{ type: core_1.Output },],
        "bounceEnabledChange": [{ type: core_1.Output },],
        "directionChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "pulledDownTextChange": [{ type: core_1.Output },],
        "pullingDownTextChange": [{ type: core_1.Output },],
        "reachBottomTextChange": [{ type: core_1.Output },],
        "refreshingTextChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollByContentChange": [{ type: core_1.Output },],
        "scrollByThumbChange": [{ type: core_1.Output },],
        "showScrollbarChange": [{ type: core_1.Output },],
        "useNativeChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
    };
    return DxScrollViewComponent;
}(component_1.DxComponent));
exports.DxScrollViewComponent = DxScrollViewComponent;
var DxScrollViewModule = (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxScrollViewComponent
                    ],
                    exports: [
                        DxScrollViewComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxScrollViewModule;
}());
exports.DxScrollViewModule = DxScrollViewModule;
//# sourceMappingURL=scroll-view.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/select-box.js":
/*!**********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/select-box.js ***!
  \**********************************************************/
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
var select_box_1 = __webpack_require__(/*! devextreme/ui/select_box */ "./node_modules/devextreme/ui/select_box.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxSelectBoxComponent; }),
    multi: true
};
/**
 * The SelectBox widget is an editor that allows an end user to select an item from a drop-down list.
 */
var DxSelectBoxComponent = (function (_super) {
    __extends(DxSelectBoxComponent, _super);
    function DxSelectBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'displayValueChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'nameChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'valueExprChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxSelectBoxComponent.prototype, "acceptCustomValue", {
        get: /**
             * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
             */
        function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data the widget should display.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayExpr", {
        get: /**
             * Specifies the name of the data source item field whose value is displayed by the widget.
             */
        function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayValue", {
        get: /**
             * Returns the value currently displayed by the widget.
             */
        function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "dropDownButtonTemplate", {
        get: /**
             * Specifies a custom template for the drop-down button.
             */
        function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "fieldTemplate", {
        get: /**
             * Specifies a custom template for the text field. Must contain the TextBox widget.
             */
        function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "grouped", {
        get: /**
             * Specifies whether data items should be grouped.
             */
        function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "groupTemplate", {
        get: /**
             * Specifies a custom template for group captions.
             */
        function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "minSearchLength", {
        get: /**
             * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
             */
        function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "opened", {
        get: /**
             * Specifies whether or not the drop-down editor is displayed.
             */
        function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "openOnFieldClick", {
        get: /**
             * Specifies whether a user can open the drop-down list by clicking a text field.
             */
        function () {
            return this._getOption('openOnFieldClick');
        },
        set: function (value) {
            this._setOption('openOnFieldClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "placeholder", {
        get: /**
             * The text that is provided as a hint in the select box editor.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchEnabled", {
        get: /**
             * Specifies whether to allow searching.
             */
        function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchExpr", {
        get: /**
             * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
             */
        function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchMode", {
        get: /**
             * Specifies a comparison operation used to search widget items.
             */
        function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchTimeout", {
        get: /**
             * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
             */
        function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "selectedItem", {
        get: /**
             * Gets the currently selected item.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showClearButton", {
        get: /**
             * Specifies whether to display the Clear button in the widget.
             */
        function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showDataBeforeSearch", {
        get: /**
             * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
             */
        function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showDropDownButton", {
        get: /**
             * Specifies whether the drop-down button is visible.
             */
        function () {
            return this._getOption('showDropDownButton');
        },
        set: function (value) {
            this._setOption('showDropDownButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showSelectionControls", {
        get: /**
             * Specifies whether or not to display selection controls.
             */
        function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "value", {
        get: /**
             * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated. Applies only if acceptCustomValue is set to true.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueExpr", {
        get: /**
             * Specifies which data field provides the widget's value. When this option is not set, the value is the entire data object.
             */
        function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSelectBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxSelectBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSelectBoxComponent.prototype._createInstance = function (element, options) {
        return new select_box_1.default(element, options);
    };
    DxSelectBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxSelectBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxSelectBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxSelectBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxSelectBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxSelectBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSelectBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxSelectBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxSelectBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxSelectBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxSelectBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxSelectBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxSelectBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-select-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxSelectBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxSelectBoxComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "acceptCustomValue": [{ type: core_1.Input },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "displayExpr": [{ type: core_1.Input },],
        "displayValue": [{ type: core_1.Input },],
        "dropDownButtonTemplate": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "fieldTemplate": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "grouped": [{ type: core_1.Input },],
        "groupTemplate": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "maxLength": [{ type: core_1.Input },],
        "minSearchLength": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "openOnFieldClick": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "searchEnabled": [{ type: core_1.Input },],
        "searchExpr": [{ type: core_1.Input },],
        "searchMode": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "showClearButton": [{ type: core_1.Input },],
        "showDataBeforeSearch": [{ type: core_1.Input },],
        "showDropDownButton": [{ type: core_1.Input },],
        "showSelectionControls": [{ type: core_1.Input },],
        "spellcheck": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueChangeEvent": [{ type: core_1.Input },],
        "valueExpr": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onClosed": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onCopy": [{ type: core_1.Output },],
        "onCustomItemCreating": [{ type: core_1.Output },],
        "onCut": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEnterKey": [{ type: core_1.Output },],
        "onFocusIn": [{ type: core_1.Output },],
        "onFocusOut": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onInput": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onKeyDown": [{ type: core_1.Output },],
        "onKeyPress": [{ type: core_1.Output },],
        "onKeyUp": [{ type: core_1.Output },],
        "onOpened": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPaste": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "acceptCustomValueChange": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "displayExprChange": [{ type: core_1.Output },],
        "displayValueChange": [{ type: core_1.Output },],
        "dropDownButtonTemplateChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "fieldTemplateChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "groupedChange": [{ type: core_1.Output },],
        "groupTemplateChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "maxLengthChange": [{ type: core_1.Output },],
        "minSearchLengthChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "openOnFieldClickChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "searchEnabledChange": [{ type: core_1.Output },],
        "searchExprChange": [{ type: core_1.Output },],
        "searchModeChange": [{ type: core_1.Output },],
        "searchTimeoutChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "showClearButtonChange": [{ type: core_1.Output },],
        "showDataBeforeSearchChange": [{ type: core_1.Output },],
        "showDropDownButtonChange": [{ type: core_1.Output },],
        "showSelectionControlsChange": [{ type: core_1.Output },],
        "spellcheckChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueChangeEventChange": [{ type: core_1.Output },],
        "valueExprChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxSelectBoxComponent;
}(component_1.DxComponent));
exports.DxSelectBoxComponent = DxSelectBoxComponent;
var DxSelectBoxModule = (function () {
    function DxSelectBoxModule() {
    }
    DxSelectBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSelectBoxComponent
                    ],
                    exports: [
                        DxSelectBoxComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxSelectBoxModule;
}());
exports.DxSelectBoxModule = DxSelectBoxModule;
//# sourceMappingURL=select-box.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/tab-panel.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/tab-panel.js ***!
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
var tab_panel_1 = __webpack_require__(/*! devextreme/ui/tab_panel */ "./node_modules/devextreme/ui/tab_panel.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var item_dxi_1 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
var item_dxi_2 = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/**
 * The TabPanel is a widget consisting of the Tabs and MultiView widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
 */
var DxTabPanelComponent = (function (_super) {
    __extends(DxTabPanelComponent, _super);
    function DxTabPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'titleClick', emit: 'onTitleClick' },
            { subscribe: 'titleHold', emit: 'onTitleHold' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'noDataTextChange' },
            { emit: 'repaintChangesOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTabPanelComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "animationEnabled", {
        get: /**
             * Specifies whether or not to animate the displayed item change.
             */
        function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "dataSource", {
        get: /**
             * A data source used to fetch data to be displayed by the widget.
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
    Object.defineProperty(DxTabPanelComponent.prototype, "deferRendering", {
        get: /**
             * Specifies whether to render the view's content when it is displayed. If false, the content is rendered immediately.
             */
        function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxTabPanelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemHoldTimeout", {
        get: /**
             * The time period in milliseconds before the onItemHold event is raised.
             */
        function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "items", {
        get: /**
             * An array of items displayed by the widget.
             */
        function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTemplate", {
        get: /**
             * Specifies a custom template for items.
             */
        function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTitleTemplate", {
        get: /**
             * Specifies a custom template for item titles.
             */
        function () {
            return this._getOption('itemTitleTemplate');
        },
        set: function (value) {
            this._setOption('itemTitleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "loop", {
        get: /**
             * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
             */
        function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "noDataText", {
        get: /**
             * The text or HTML markup displayed by the widget if the item collection is empty.
             */
        function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "repaintChangesOnly", {
        get: /**
             * Specifies whether to repaint only those elements whose data changed.
             */
        function () {
            return this._getOption('repaintChangesOnly');
        },
        set: function (value) {
            this._setOption('repaintChangesOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollByContent", {
        get: /**
             * A Boolean value specifying if tabs in the title are scrolled by content.
             */
        function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollingEnabled", {
        get: /**
             * A Boolean indicating whether or not to add scrolling support for tabs in the title.
             */
        function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedIndex", {
        get: /**
             * The index of the currently displayed item.
             */
        function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedItem", {
        get: /**
             * The selected item object.
             */
        function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "showNavButtons", {
        get: /**
             * A Boolean value that specifies the availability of navigation buttons.
             */
        function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "swipeEnabled", {
        get: /**
             * A Boolean value specifying whether or not to allow users to change the selected index by swiping.
             */
        function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTabPanelComponent.prototype._createInstance = function (element, options) {
        return new tab_panel_1.default(element, options);
    };
    DxTabPanelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTabPanelComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxTabPanelComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTabPanelComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxTabPanelComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTabPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tab-panel',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTabPanelComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxTabPanelComponent.propDecorators = {
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "animationEnabled": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "deferRendering": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "itemHoldTimeout": [{ type: core_1.Input },],
        "items": [{ type: core_1.Input },],
        "itemTemplate": [{ type: core_1.Input },],
        "itemTitleTemplate": [{ type: core_1.Input },],
        "loop": [{ type: core_1.Input },],
        "noDataText": [{ type: core_1.Input },],
        "repaintChangesOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrollByContent": [{ type: core_1.Input },],
        "scrollingEnabled": [{ type: core_1.Input },],
        "selectedIndex": [{ type: core_1.Input },],
        "selectedItem": [{ type: core_1.Input },],
        "showNavButtons": [{ type: core_1.Input },],
        "swipeEnabled": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onContentReady": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onItemClick": [{ type: core_1.Output },],
        "onItemContextMenu": [{ type: core_1.Output },],
        "onItemHold": [{ type: core_1.Output },],
        "onItemRendered": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onSelectionChanged": [{ type: core_1.Output },],
        "onTitleClick": [{ type: core_1.Output },],
        "onTitleHold": [{ type: core_1.Output },],
        "onTitleRendered": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "animationEnabledChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "deferRenderingChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "itemHoldTimeoutChange": [{ type: core_1.Output },],
        "itemsChange": [{ type: core_1.Output },],
        "itemTemplateChange": [{ type: core_1.Output },],
        "itemTitleTemplateChange": [{ type: core_1.Output },],
        "loopChange": [{ type: core_1.Output },],
        "noDataTextChange": [{ type: core_1.Output },],
        "repaintChangesOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollByContentChange": [{ type: core_1.Output },],
        "scrollingEnabledChange": [{ type: core_1.Output },],
        "selectedIndexChange": [{ type: core_1.Output },],
        "selectedItemChange": [{ type: core_1.Output },],
        "showNavButtonsChange": [{ type: core_1.Output },],
        "swipeEnabledChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "itemsChildren": [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxTabPanelComponent;
}(component_1.DxComponent));
exports.DxTabPanelComponent = DxTabPanelComponent;
var DxTabPanelModule = (function () {
    function DxTabPanelModule() {
    }
    DxTabPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxTabPanelComponent
                    ],
                    exports: [
                        DxTabPanelComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxTabPanelModule;
}());
exports.DxTabPanelModule = DxTabPanelModule;
//# sourceMappingURL=tab-panel.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/text-area.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/text-area.js ***!
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
var text_area_1 = __webpack_require__(/*! devextreme/ui/text_area */ "./node_modules/devextreme/ui/text_area.js");
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/devextreme-angular/ui/validator.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxTextAreaComponent; }),
    multi: true
};
/**
 * The TextArea is a widget that enables a user to enter and edit a multi-line text.
 */
var DxTextAreaComponent = (function (_super) {
    __extends(DxTextAreaComponent, _super);
    function DxTextAreaComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this.touched = function (_) { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'autoResizeEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minHeightChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTextAreaComponent.prototype, "accessKey", {
        get: /**
             * Specifies the shortcut key that sets focus on the widget.
             */
        function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "activeStateEnabled", {
        get: /**
             * Specifies whether or not the widget changes its state when interacting with a user.
             */
        function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "autoResizeEnabled", {
        get: /**
             * A Boolean value specifying whether or not the auto resizing mode is enabled.
             */
        function () {
            return this._getOption('autoResizeEnabled');
        },
        set: function (value) {
            this._setOption('autoResizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "disabled", {
        get: /**
             * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxTextAreaComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "focusStateEnabled", {
        get: /**
             * Specifies whether the widget can be focused using keyboard navigation.
             */
        function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "hint", {
        get: /**
             * Specifies text for a hint that appears when a user pauses on the widget.
             */
        function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "hoverStateEnabled", {
        get: /**
             * Specifies whether the widget changes its state when a user pauses on it.
             */
        function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "inputAttr", {
        get: /**
             * Specifies the attributes to be passed on to the underlying HTML element.
             */
        function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "isValid", {
        get: /**
             * Specifies whether the editor's value is valid.
             */
        function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "maxHeight", {
        get: /**
             * Specifies the maximum height of the widget.
             */
        function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "maxLength", {
        get: /**
             * Specifies the maximum number of characters you can enter into the textbox.
             */
        function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "minHeight", {
        get: /**
             * Specifies the minimum height of the widget.
             */
        function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "name", {
        get: /**
             * The value to be assigned to the `name` attribute of the underlying HTML element.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "placeholder", {
        get: /**
             * The text displayed by the widget when the widget value is empty.
             */
        function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "readOnly", {
        get: /**
             * A Boolean value specifying whether or not the widget is read-only.
             */
        function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextAreaComponent.prototype, "spellcheck", {
        get: /**
             * Specifies whether or not the widget checks the inner text for spelling mistakes.
             */
        function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "stylingMode", {
        get: /**
             * Specifies how the widget's text field is styled.
             */
        function () {
            return this._getOption('stylingMode');
        },
        set: function (value) {
            this._setOption('stylingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "tabIndex", {
        get: /**
             * Specifies the number of the element when the Tab key is used for navigating.
             */
        function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "text", {
        get: /**
             * The read-only option that holds the text displayed by the widget input element.
             */
        function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "validationError", {
        get: /**
             * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
             */
        function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "validationMessageMode", {
        get: /**
             * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
             */
        function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "value", {
        get: /**
             * Specifies a value the widget displays.
             */
        function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "valueChangeEvent", {
        get: /**
             * Specifies the DOM events after which the widget's value should be updated.
             */
        function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "visible", {
        get: /**
             * Specifies whether the widget is visible.
             */
        function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextAreaComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTextAreaComponent.prototype.change = function (_) { };
    DxTextAreaComponent.prototype._createInstance = function (element, options) {
        return new text_area_1.default(element, options);
    };
    DxTextAreaComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxTextAreaComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTextAreaComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTextAreaComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTextAreaComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTextAreaComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTextAreaComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxTextAreaComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxTextAreaComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-text-area',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTextAreaComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxTextAreaComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "autoResizeEnabled": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "maxHeight": [{ type: core_1.Input },],
        "maxLength": [{ type: core_1.Input },],
        "minHeight": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "spellcheck": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "validationError": [{ type: core_1.Input },],
        "validationMessageMode": [{ type: core_1.Input },],
        "value": [{ type: core_1.Input },],
        "valueChangeEvent": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onCopy": [{ type: core_1.Output },],
        "onCut": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onEnterKey": [{ type: core_1.Output },],
        "onFocusIn": [{ type: core_1.Output },],
        "onFocusOut": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onInput": [{ type: core_1.Output },],
        "onKeyDown": [{ type: core_1.Output },],
        "onKeyPress": [{ type: core_1.Output },],
        "onKeyUp": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onPaste": [{ type: core_1.Output },],
        "onValueChanged": [{ type: core_1.Output },],
        "accessKeyChange": [{ type: core_1.Output },],
        "activeStateEnabledChange": [{ type: core_1.Output },],
        "autoResizeEnabledChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "maxHeightChange": [{ type: core_1.Output },],
        "maxLengthChange": [{ type: core_1.Output },],
        "minHeightChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "spellcheckChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "valueChangeEventChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxTextAreaComponent;
}(component_1.DxComponent));
exports.DxTextAreaComponent = DxTextAreaComponent;
var DxTextAreaModule = (function () {
    function DxTextAreaModule() {
    }
    DxTextAreaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxTextAreaComponent
                    ],
                    exports: [
                        DxTextAreaComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxTextAreaModule;
}());
exports.DxTextAreaModule = DxTextAreaModule;
//# sourceMappingURL=text-area.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/validator.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/validator.js ***!
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
var validator_1 = __webpack_require__(/*! devextreme/ui/validator */ "./node_modules/devextreme/ui/validator.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var adapter_1 = __webpack_require__(/*! ./nested/adapter */ "./node_modules/devextreme-angular/ui/nested/adapter.js");
var validation_rule_dxi_1 = __webpack_require__(/*! ./nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
var validation_rule_dxi_2 = __webpack_require__(/*! ./nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
/**
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
var DxValidatorComponent = (function (_super) {
    __extends(DxValidatorComponent, _super);
    function DxValidatorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'adapterChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxValidatorComponent.prototype, "adapter", {
        get: /**
             * An object that specifies what and when to validate, and how to apply the validation result.
             */
        function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
        get: /**
             * Specifies the widget's height.
             */
        function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        get: /**
             * Specifies the editor name to be used in the validation default messages.
             */
        function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        get: /**
             * Specifies the validation group the editor will be related to.
             */
        function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        get: /**
             * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
             */
        function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
        get: /**
             * Specifies the widget's width.
             */
        function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidatorComponent.prototype._createInstance = function (element, options) {
        return new validator_1.default(element, options);
    };
    DxValidatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidatorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('validationRules', changes);
    };
    DxValidatorComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxValidatorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxValidatorComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxValidatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-validator',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxValidatorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxValidatorComponent.propDecorators = {
        "adapter": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "validationGroup": [{ type: core_1.Input },],
        "validationRules": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "onDisposing": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "onValidated": [{ type: core_1.Output },],
        "adapterChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "validationGroupChange": [{ type: core_1.Output },],
        "validationRulesChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "validationRulesChildren": [{ type: core_1.ContentChildren, args: [validation_rule_dxi_2.DxiValidationRuleComponent,] },],
    };
    return DxValidatorComponent;
}(component_1.DxComponentExtension));
exports.DxValidatorComponent = DxValidatorComponent;
var DxValidatorModule = (function () {
    function DxValidatorModule() {
    }
    DxValidatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxValidatorComponent
                    ],
                    exports: [
                        DxValidatorComponent,
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxValidatorModule;
}());
exports.DxValidatorModule = DxValidatorModule;
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/devextreme/ui/accordion.js":
/*!*************************************************!*\
  !*** ./node_modules/devextreme/ui/accordion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/accordion.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    fx = __webpack_require__(/*! ../animation/fx */ "./node_modules/devextreme/animation/fx.js"),
    clickEvent = __webpack_require__(/*! ../events/click */ "./node_modules/devextreme/events/click.js"),
    devices = __webpack_require__(/*! ../core/devices */ "./node_modules/devextreme/core/devices.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    getPublicElement = __webpack_require__(/*! ../core/utils/dom */ "./node_modules/devextreme/core/utils/dom.js").getPublicElement,
    iteratorUtils = __webpack_require__(/*! ../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    isPlainObject = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isPlainObject,
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    eventUtils = __webpack_require__(/*! ../events/utils */ "./node_modules/devextreme/events/utils.js"),
    CollectionWidget = __webpack_require__(/*! ./collection/ui.collection_widget.live_update */ "./node_modules/devextreme/ui/collection/ui.collection_widget.live_update.js").default,
    deferredUtils = __webpack_require__(/*! ../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    BindableTemplate = __webpack_require__(/*! ./widget/bindable_template */ "./node_modules/devextreme/ui/widget/bindable_template.js"),
    iconUtils = __webpack_require__(/*! ../core/utils/icon */ "./node_modules/devextreme/core/utils/icon.js"),
    isDefined = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    themes = __webpack_require__(/*! ./themes */ "./node_modules/devextreme/ui/themes.js");
var ACCORDION_CLASS = "dx-accordion",
    ACCORDION_WRAPPER_CLASS = "dx-accordion-wrapper",
    ACCORDION_ITEM_CLASS = "dx-accordion-item",
    ACCORDION_ITEM_OPENED_CLASS = "dx-accordion-item-opened",
    ACCORDION_ITEM_CLOSED_CLASS = "dx-accordion-item-closed",
    ACCORDION_ITEM_TITLE_CLASS = "dx-accordion-item-title",
    ACCORDION_ITEM_BODY_CLASS = "dx-accordion-item-body",
    ACCORDION_ITEM_TITLE_CAPTION_CLASS = "dx-accordion-item-title-caption",
    ACCORDION_ITEM_DATA_KEY = "dxAccordionItemData";
var Accordion = CollectionWidget.inherit({
    _activeStateUnit: "." + ACCORDION_ITEM_CLASS,
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            hoverStateEnabled: true,
            height: void 0,
            itemTitleTemplate: "title",
            onItemTitleClick: null,
            selectedIndex: 0,
            collapsible: false,
            multiple: false,
            animationDuration: 300,
            deferRendering: true,
            selectionByClick: true,
            activeStateEnabled: true,
            _itemAttributes: {
                role: "tab"
            },
            _animationEasing: "ease"
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function() {
                return "desktop" === devices.real().deviceType && !devices.isSimulator()
            },
            options: {
                focusStateEnabled: true
            }
        }, {
            device: function() {
                return themes.isMaterial()
            },
            options: {
                animationDuration: 200,
                _animationEasing: "cubic-bezier(0.4, 0, 0.2, 1)"
            }
        }])
    },
    _itemElements: function() {
        return this._itemContainer().children(this._itemSelector())
    },
    _init: function() {
        this.callBase();
        this.option("selectionRequired", !this.option("collapsible"));
        this.option("selectionMode", this.option("multiple") ? "multiple" : "single");
        var $element = this.$element();
        $element.addClass(ACCORDION_CLASS);
        this._$container = $("<div>").addClass(ACCORDION_WRAPPER_CLASS);
        $element.append(this._$container)
    },
    _initTemplates: function() {
        this.callBase();
        this._defaultTemplates.title = new BindableTemplate(function($container, data) {
            var $templateContainer = $("<div>").addClass(ACCORDION_ITEM_TITLE_CAPTION_CLASS).appendTo($container);
            if (isPlainObject(data)) {
                if (data.title) {
                    $templateContainer.text(data.title)
                }
                $templateContainer.append(iconUtils.getImageContainer(data.icon))
            } else {
                $templateContainer.text(String(data))
            }
        }, ["title", "icon"], this.option("integrationOptions.watchMethod"))
    },
    _initMarkup: function() {
        this._deferredItems = [];
        this.callBase();
        this.setAria({
            role: "tablist",
            multiselectable: this.option("multiple")
        })
    },
    _render: function() {
        this.callBase();
        this._updateItemHeightsWrapper(true);
        this._attachItemTitleClickAction()
    },
    _itemDataKey: function() {
        return ACCORDION_ITEM_DATA_KEY
    },
    _itemClass: function() {
        return ACCORDION_ITEM_CLASS
    },
    _itemContainer: function() {
        return this._$container
    },
    _itemTitles: function() {
        return this._itemElements().find("." + ACCORDION_ITEM_TITLE_CLASS)
    },
    _itemContents: function() {
        return this._itemElements().find("." + ACCORDION_ITEM_BODY_CLASS)
    },
    _getItemData: function(target) {
        return $(target).parent().data(this._itemDataKey()) || this.callBase.apply(this, arguments)
    },
    _executeItemRenderAction: function(itemData) {
        if (itemData.type) {
            return
        }
        this.callBase.apply(this, arguments)
    },
    _itemSelectHandler: function(e) {
        if ($(e.target).closest(this._itemContents()).length) {
            return
        }
        this.callBase.apply(this, arguments)
    },
    _afterItemElementDeleted: function($item, deletedActionArgs) {
        this._deferredItems.splice(deletedActionArgs.itemIndex, 1);
        this.callBase.apply(this, arguments)
    },
    _renderItemContent: function(args) {
        var itemTitle = this.callBase(extend({}, args, {
            contentClass: ACCORDION_ITEM_TITLE_CLASS,
            templateProperty: "titleTemplate",
            defaultTemplateName: this.option("itemTitleTemplate")
        }));
        var deferred = new Deferred;
        if (isDefined(this._deferredItems[args.index])) {
            this._deferredItems[args.index] = deferred
        } else {
            this._deferredItems.push(deferred)
        }
        if (!this.option("deferRendering") || this._getSelectedItemIndices().indexOf(args.index) >= 0) {
            deferred.resolve()
        }
        deferred.done(this.callBase.bind(this, extend({}, args, {
            contentClass: ACCORDION_ITEM_BODY_CLASS,
            container: getPublicElement($("<div>").appendTo($(itemTitle).parent()))
        })))
    },
    _attachItemTitleClickAction: function() {
        var eventName = eventUtils.addNamespace(clickEvent.name, this.NAME),
            titleContainers = this._itemContainer().find(" > ." + ACCORDION_ITEM_CLASS + " > ." + ACCORDION_ITEM_TITLE_CLASS);
        eventsEngine.off(titleContainers, eventName);
        eventsEngine.on(titleContainers, eventName, this._itemTitleClickHandler.bind(this))
    },
    _itemTitleClickHandler: function(e) {
        this._itemDXEventHandler(e, "onItemTitleClick")
    },
    _renderSelection: function(addedSelection, removedSelection) {
        this._itemElements().addClass(ACCORDION_ITEM_CLOSED_CLASS);
        this.setAria("hidden", true, this._itemContents());
        this._updateItems(addedSelection, removedSelection)
    },
    _updateSelection: function(addedSelection, removedSelection) {
        this._updateItems(addedSelection, removedSelection);
        this._updateItemHeightsWrapper(false)
    },
    _updateItems: function(addedSelection, removedSelection) {
        var $items = this._itemElements(),
            that = this;
        iteratorUtils.each(addedSelection, function(_, index) {
            that._deferredItems[index].resolve();
            var $item = $items.eq(index).addClass(ACCORDION_ITEM_OPENED_CLASS).removeClass(ACCORDION_ITEM_CLOSED_CLASS);
            that.setAria("hidden", false, $item.find("." + ACCORDION_ITEM_BODY_CLASS))
        });
        iteratorUtils.each(removedSelection, function(_, index) {
            var $item = $items.eq(index).removeClass(ACCORDION_ITEM_OPENED_CLASS);
            that.setAria("hidden", true, $item.find("." + ACCORDION_ITEM_BODY_CLASS))
        })
    },
    _updateItemHeightsWrapper: function(skipAnimation) {
        if (this.option("templatesRenderAsynchronously")) {
            this._animationTimer = setTimeout(function() {
                this._updateItemHeights(skipAnimation)
            }.bind(this))
        } else {
            this._updateItemHeights(skipAnimation)
        }
    },
    _updateItemHeights: function(skipAnimation) {
        var that = this,
            deferredAnimate = that._deferredAnimate,
            itemHeight = this._splitFreeSpace(this._calculateFreeSpace());
        clearTimeout(this._animationTimer);
        return when.apply($, [].slice.call(this._itemElements()).map(function(item) {
            return that._updateItemHeight($(item), itemHeight, skipAnimation)
        })).done(function() {
            if (deferredAnimate) {
                deferredAnimate.resolveWith(that)
            }
        })
    },
    _updateItemHeight: function($item, itemHeight, skipAnimation) {
        var $title = $item.children("." + ACCORDION_ITEM_TITLE_CLASS);
        if (fx.isAnimating($item)) {
            fx.stop($item)
        }
        var startItemHeight = $item.outerHeight(),
            finalItemHeight = $item.hasClass(ACCORDION_ITEM_OPENED_CLASS) ? itemHeight + $title.outerHeight() || $item.height("auto").outerHeight() : $title.outerHeight();
        return this._animateItem($item, startItemHeight, finalItemHeight, skipAnimation, !!itemHeight)
    },
    _animateItem: function($element, startHeight, endHeight, skipAnimation, fixedHeight) {
        var d;
        if (skipAnimation || startHeight === endHeight) {
            $element.css("height", endHeight);
            d = (new Deferred).resolve()
        } else {
            d = fx.animate($element, {
                type: "custom",
                from: {
                    height: startHeight
                },
                to: {
                    height: endHeight
                },
                duration: this.option("animationDuration"),
                easing: this.option("_animationEasing")
            })
        }
        return d.done(function() {
            if ($element.hasClass(ACCORDION_ITEM_OPENED_CLASS) && !fixedHeight) {
                $element.css("height", "")
            }
            $element.not("." + ACCORDION_ITEM_OPENED_CLASS).addClass(ACCORDION_ITEM_CLOSED_CLASS)
        })
    },
    _splitFreeSpace: function(freeSpace) {
        if (!freeSpace) {
            return freeSpace
        }
        return freeSpace / this.option("selectedItems").length
    },
    _calculateFreeSpace: function() {
        var height = this.option("height");
        if (void 0 === height || "auto" === height) {
            return
        }
        var $titles = this._itemTitles(),
            itemsHeight = 0;
        iteratorUtils.each($titles, function(_, title) {
            itemsHeight += $(title).outerHeight()
        });
        return this.$element().height() - itemsHeight
    },
    _visibilityChanged: function(visible) {
        if (visible) {
            this._dimensionChanged()
        }
    },
    _dimensionChanged: function() {
        this._updateItemHeights(true)
    },
    _clean: function() {
        clearTimeout(this._animationTimer);
        this.callBase()
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "animationDuration":
            case "onItemTitleClick":
            case "_animationEasing":
                break;
            case "collapsible":
                this.option("selectionRequired", !this.option("collapsible"));
                break;
            case "itemTitleTemplate":
            case "height":
            case "deferRendering":
                this._invalidate();
                break;
            case "multiple":
                this.option("selectionMode", args.value ? "multiple" : "single");
                break;
            default:
                this.callBase(args)
        }
    },
    expandItem: function(index) {
        this._deferredAnimate = new Deferred;
        this.selectItem(index);
        return this._deferredAnimate.promise()
    },
    collapseItem: function(index) {
        this._deferredAnimate = new Deferred;
        this.unselectItem(index);
        return this._deferredAnimate.promise()
    },
    updateDimensions: function() {
        return this._updateItemHeights(false)
    }
});
registerComponent("dxAccordion", Accordion);
module.exports = Accordion;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/autocomplete.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme/ui/autocomplete.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/autocomplete.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    noop = __webpack_require__(/*! ../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    DropDownList = __webpack_require__(/*! ./drop_down_editor/ui.drop_down_list */ "./node_modules/devextreme/ui/drop_down_editor/ui.drop_down_list.js"),
    themes = __webpack_require__(/*! ./themes */ "./node_modules/devextreme/ui/themes.js"),
    Deferred = __webpack_require__(/*! ../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js").Deferred;
var AUTOCOMPLETE_CLASS = "dx-autocomplete",
    AUTOCOMPLETE_POPUP_WRAPPER_CLASS = "dx-autocomplete-popup-wrapper";
var Autocomplete = DropDownList.inherit({
    _supportedKeys: function() {
        var item = this._list ? this._list.option("focusedElement") : null,
            parent = this.callBase();
        item = item && $(item);
        return extend({}, parent, {
            upArrow: function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (item && !item.prev().length) {
                    this._clearFocusedItem();
                    return false
                }
                return true
            },
            downArrow: function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (item && !item.next().length) {
                    this._clearFocusedItem();
                    return false
                }
                return true
            },
            enter: function() {
                if (!item) {
                    this.close()
                }
                parent.enter.apply(this, arguments);
                return this.option("opened")
            }
        })
    },
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            minSearchLength: 1,
            maxItemCount: 10,
            noDataText: "",
            showDropDownButton: false,
            searchEnabled: true
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function() {
                return themes.isAndroid5()
            },
            options: {
                popupPosition: {
                    offset: {
                        h: -16,
                        v: -8
                    }
                }
            }
        }])
    },
    _initMarkup: function() {
        this.callBase();
        this.$element().addClass(AUTOCOMPLETE_CLASS);
        this.setAria("autocomplete", "inline")
    },
    _loadValue: function() {
        return (new Deferred).resolve(this.option("value"))
    },
    _displayGetterExpr: function() {
        return this.option("valueExpr")
    },
    _setSelectedItem: function(item) {
        this.callBase(item);
        this.option("displayValue", this.option("value"))
    },
    _popupConfig: function() {
        return extend(this.callBase(), {
            closeOnOutsideClick: function(e) {
                return !$(e.target).closest(this.$element()).length
            }.bind(this)
        })
    },
    _renderDimensions: function() {
        this.callBase();
        this._setPopupOption("width")
    },
    _popupWrapperClass: function() {
        return this.callBase() + " " + AUTOCOMPLETE_POPUP_WRAPPER_CLASS
    },
    _listConfig: function() {
        return extend(this.callBase(), {
            pageLoadMode: "none",
            indicateLoading: false
        })
    },
    _listItemClickHandler: function(e) {
        var value = this._displayGetter(e.itemData);
        this.option("value", value);
        this.close()
    },
    _setListDataSource: function() {
        if (!this._list) {
            return
        }
        this._list.option("selectedItems", []);
        this.callBase()
    },
    _refreshSelected: noop,
    _searchCanceled: function() {
        this.callBase();
        this.close()
    },
    _dataSourceOptions: function() {
        return {
            paginate: true
        }
    },
    _searchDataSource: function() {
        this._dataSource.pageSize(this.option("maxItemCount"));
        this.callBase();
        this._clearFocusedItem()
    },
    _clearFocusedItem: function() {
        if (this._list) {
            this._list.option("focusedElement", null);
            this._list.option("selectedIndex", -1)
        }
    },
    _renderValueEventName: function() {
        return "input keyup"
    },
    _valueChangeEventHandler: function(e) {
        var value = this._input().val() || null;
        return this.callBase(e, value)
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "maxItemCount":
                this._searchDataSource();
                break;
            case "valueExpr":
                this._compileDisplayGetter();
                this.callBase(args);
                break;
            default:
                this.callBase(args)
        }
    },
    reset: function() {
        this.callBase();
        this.close()
    }
});
registerComponent("dxAutocomplete", Autocomplete);
module.exports = Autocomplete;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/lookup.js":
/*!**********************************************!*\
  !*** ./node_modules/devextreme/ui/lookup.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/lookup.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    window = __webpack_require__(/*! ../core/utils/window */ "./node_modules/devextreme/core/utils/window.js").getWindow(),
    support = __webpack_require__(/*! ../core/utils/support */ "./node_modules/devextreme/core/utils/support.js"),
    commonUtils = __webpack_require__(/*! ../core/utils/common */ "./node_modules/devextreme/core/utils/common.js"),
    domUtils = __webpack_require__(/*! ../core/utils/dom */ "./node_modules/devextreme/core/utils/dom.js"),
    each = __webpack_require__(/*! ../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inkRipple = __webpack_require__(/*! ./widget/utils.ink_ripple */ "./node_modules/devextreme/ui/widget/utils.ink_ripple.js"),
    messageLocalization = __webpack_require__(/*! ../localization/message */ "./node_modules/devextreme/localization/message.js"),
    devices = __webpack_require__(/*! ../core/devices */ "./node_modules/devextreme/core/devices.js"),
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    eventUtils = __webpack_require__(/*! ../events/utils */ "./node_modules/devextreme/events/utils.js"),
    DropDownList = __webpack_require__(/*! ./drop_down_editor/ui.drop_down_list */ "./node_modules/devextreme/ui/drop_down_editor/ui.drop_down_list.js"),
    themes = __webpack_require__(/*! ./themes */ "./node_modules/devextreme/ui/themes.js"),
    clickEvent = __webpack_require__(/*! ../events/click */ "./node_modules/devextreme/events/click.js"),
    Popover = __webpack_require__(/*! ./popover */ "./node_modules/devextreme/ui/popover.js"),
    TextBox = __webpack_require__(/*! ./text_box */ "./node_modules/devextreme/ui/text_box.js"),
    ChildDefaultTemplate = __webpack_require__(/*! ./widget/child_default_template */ "./node_modules/devextreme/ui/widget/child_default_template.js"),
    translator = __webpack_require__(/*! ../animation/translator */ "./node_modules/devextreme/animation/translator.js");
var LOOKUP_CLASS = "dx-lookup",
    LOOKUP_SEARCH_CLASS = "dx-lookup-search",
    LOOKUP_SEARCH_WRAPPER_CLASS = "dx-lookup-search-wrapper",
    LOOKUP_FIELD_CLASS = "dx-lookup-field",
    LOOKUP_ARROW_CLASS = "dx-lookup-arrow",
    LOOKUP_FIELD_WRAPPER_CLASS = "dx-lookup-field-wrapper",
    LOOKUP_POPUP_CLASS = "dx-lookup-popup",
    LOOKUP_POPUP_WRAPPER_CLASS = "dx-lookup-popup-wrapper",
    LOOKUP_POPUP_SEARCH_CLASS = "dx-lookup-popup-search",
    LOOKUP_POPOVER_MODE = "dx-lookup-popover-mode",
    LOOKUP_EMPTY_CLASS = "dx-lookup-empty",
    LOOKUP_POPUP_VALIDATION_MESSAGE = "dx-lookup-validation-message",
    LOOKUP_POPUP_INVALID_CLASS = "dx-lookup-invalid";
var POPUP_OPTION_MAP = {
    popupWidth: "width",
    popupHeight: "height"
};
var LIST_ITEM_SELECTED_CLASS = "dx-list-item-selected";
var MATERIAL_LOOKUP_LIST_ITEMS_COUNT = 4;
var MATERIAL_LOOKUP_LIST_PADDING = 8;
var Lookup = DropDownList.inherit({
    _supportedKeys: function() {
        return extend(this.callBase(), {
            space: function(e) {
                e.preventDefault();
                this._validatedOpening()
            },
            enter: function() {
                this._validatedOpening()
            }
        })
    },
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            title: "",
            titleTemplate: "title",
            onTitleRendered: null,
            placeholder: messageLocalization.format("Select"),
            searchPlaceholder: messageLocalization.format("Search"),
            searchEnabled: true,
            cleanSearchOnOpening: true,
            fullScreen: false,
            showCancelButton: true,
            showClearButton: false,
            clearButtonText: messageLocalization.format("Clear"),
            applyButtonText: messageLocalization.format("Done"),
            popupWidth: function() {
                return .8 * $(window).width()
            },
            popupHeight: function() {
                return .8 * $(window).height()
            },
            shading: true,
            closeOnOutsideClick: false,
            position: void 0,
            animation: {},
            pullRefreshEnabled: false,
            useNativeScrolling: true,
            pullingDownText: messageLocalization.format("dxList-pullingDownText"),
            pulledDownText: messageLocalization.format("dxList-pulledDownText"),
            refreshingText: messageLocalization.format("dxList-refreshingText"),
            pageLoadingText: messageLocalization.format("dxList-pageLoadingText"),
            onScroll: null,
            onPullRefresh: null,
            onPageLoading: null,
            pageLoadMode: "scrollBottom",
            nextButtonText: messageLocalization.format("dxList-nextButtonText"),
            grouped: false,
            groupTemplate: "group",
            usePopover: false,
            showDropDownButton: false,
            showPopupTitle: true,
            focusStateEnabled: false,
            _scrollToSelectedItemEnabled: false
        })
    },
    _defaultOptionsRules: function() {
        var themeName = themes.current();
        return this.callBase().concat([{
            device: function() {
                return !support.nativeScrolling
            },
            options: {
                useNativeScrolling: false
            }
        }, {
            device: function(_device) {
                return !devices.isSimulator() && "generic" === devices.real().platform && "generic" === _device.platform
            },
            options: {
                usePopover: true,
                popupHeight: "auto"
            }
        }, {
            device: function(_device2) {
                return "win" === _device2.platform && _device2.phone && _device2.version && 8 === _device2.version[0]
            },
            options: {
                showCancelButton: false,
                fullScreen: true
            }
        }, {
            device: function(_device3) {
                return "win" === _device3.platform && !_device3.phone && _device3.version && 8 === _device3.version[0]
            },
            options: {
                popupWidth: function() {
                    return $(window).width()
                }
            }
        }, {
            device: {
                platform: "ios",
                phone: true
            },
            options: {
                fullScreen: true
            }
        }, {
            device: {
                platform: "ios",
                tablet: true
            },
            options: {
                popupWidth: function() {
                    return .4 * Math.min($(window).width(), $(window).height())
                },
                popupHeight: "auto",
                usePopover: true,
                useInkRipple: false
            }
        }, {
            device: function() {
                return "desktop" === devices.real().deviceType && !devices.isSimulator()
            },
            options: {
                focusStateEnabled: true
            }
        }, {
            device: function() {
                return themes.isAndroid5(themeName)
            },
            options: {
                useInkRipple: true
            }
        }, {
            device: function() {
                return themes.isMaterial(themeName)
            },
            options: {
                usePopover: false,
                closeOnOutsideClick: true,
                popupWidth: function() {
                    return $(this.element()).outerWidth()
                }.bind(this),
                popupHeight: function() {
                    return this._getPopupHeight(MATERIAL_LOOKUP_LIST_ITEMS_COUNT)
                }.bind(this),
                searchEnabled: false,
                showCancelButton: false,
                showPopupTitle: false,
                position: {
                    my: "left top",
                    at: "left top",
                    of: this.element()
                },
                _scrollToSelectedItemEnabled: true
            }
        }])
    },
    _initTemplates: function() {
        this.callBase();
        this._defaultTemplates.group = new ChildDefaultTemplate("group", this);
        this._defaultTemplates.title = new ChildDefaultTemplate("title", this)
    },
    _initMarkup: function() {
        this.$element().addClass(LOOKUP_CLASS).toggleClass(LOOKUP_POPOVER_MODE, this.option("usePopover"));
        this._renderSubmitElement();
        this.callBase()
    },
    _inputWrapper: function() {
        return this.$element().find("." + LOOKUP_FIELD_WRAPPER_CLASS)
    },
    _renderSubmitElement: function() {
        this._$submitElement = $("<input>").attr("type", "hidden").appendTo(this.$element())
    },
    _dataSourceOptions: function() {
        return extend(this.callBase(), {
            paginate: true
        })
    },
    _getSubmitElement: function() {
        return this._$submitElement
    },
    _fireContentReadyAction: commonUtils.noop,
    _popupWrapperClass: function() {
        return ""
    },
    _renderInput: function() {
        var fieldClickAction = this._createAction(function() {
            this._toggleOpenState()
        }.bind(this));
        this._$field = $("<div>").addClass(LOOKUP_FIELD_CLASS);
        eventsEngine.on(this._$field, eventUtils.addNamespace(clickEvent.name, this.NAME), function(e) {
            fieldClickAction({
                event: e
            })
        });
        var $arrow = $("<div>").addClass(LOOKUP_ARROW_CLASS);
        this._$fieldWrapper = $("<div>").addClass(LOOKUP_FIELD_WRAPPER_CLASS).append(this._$field).append($arrow).appendTo(this.$element());
        this.option("useInkRipple") && this._renderInkRipple()
    },
    _renderInkRipple: function() {
        this._inkRipple = inkRipple.render()
    },
    _toggleOpenState: function() {
        this.callBase();
        if (!this.option("fullScreen") && this.option("_scrollToSelectedItemEnabled")) {
            this._setPopupPosition()
        }
    },
    _toggleActiveState: function($element, value, e) {
        this.callBase.apply(this, arguments);
        if (!this._inkRipple) {
            return
        }
        var config = {
            element: this._inputWrapper(),
            event: e
        };
        if (value) {
            this._inkRipple.showWave(config)
        } else {
            this._inkRipple.hideWave(config)
        }
    },
    _renderField: function() {
        var fieldTemplate = this._getTemplateByOption("fieldTemplate");
        if (fieldTemplate && this.option("fieldTemplate")) {
            this._renderFieldTemplate(fieldTemplate);
            return
        }
        this._$field.text(this.option("displayValue") || this.option("placeholder"));
        this.$element().toggleClass(LOOKUP_EMPTY_CLASS, !this.option("selectedItem"))
    },
    _renderFieldTemplate: function(template) {
        this._$field.empty();
        var data = this._fieldRenderData();
        template.render({
            model: data,
            container: domUtils.getPublicElement(this._$field)
        })
    },
    _fieldRenderData: function() {
        return this.option("selectedItem")
    },
    _popupShowingHandler: function() {
        var validationError;
        if (this._$popupValidationMessage) {
            validationError = this.option("validationError");
            if (validationError && validationError.message) {
                this._$popupValidationMessage.text(validationError.message);
                this._popup.$content().addClass(LOOKUP_POPUP_INVALID_CLASS)
            } else {
                this._popup.$content().removeClass(LOOKUP_POPUP_INVALID_CLASS)
            }
        }
        this.callBase.apply(this, arguments);
        if (this.option("cleanSearchOnOpening")) {
            if (this.option("searchEnabled") && this._searchBox.option("value")) {
                this._searchBox.option("value", "");
                this._searchCanceled()
            }
            this._list && this._list.option("focusedElement", null)
        }
        if (this.option("fullScreen") && this.option("_scrollToSelectedItemEnabled")) {
            this._popup.option("position").of = $(window)
        }
    },
    _scrollToSelectedItem: function() {
        var selectedIndex = this._list.option("selectedIndex"),
            listItems = this._list.option("items"),
            itemsCount = listItems.length;
        if (0 !== itemsCount) {
            if (this._list.option("grouped")) {
                this._list.scrollToItem({
                    group: itemsCount - 1,
                    item: listItems[itemsCount - 1].items.length - 1
                })
            } else {
                this._list.scrollToItem(itemsCount - 1)
            }
            this._list.scrollToItem(selectedIndex)
        }
    },
    _setPopupPosition: function() {
        var selectedIndex = this._list.option("selectedIndex");
        if (selectedIndex === -1) {
            return
        }
        var selectedListItem = $(this._list.element()).find("." + LIST_ITEM_SELECTED_CLASS),
            differenceOfHeights = (selectedListItem.height() - $(this.element()).height()) / 2,
            popupContentParent = $(this._popup.content()).parent(),
            differenceOfOffsets = selectedListItem.offset().top - popupContentParent.offset().top,
            lookupTop = $(this.element()).offset().top,
            popupOffsetY = differenceOfHeights;
        if (lookupTop > differenceOfOffsets) {
            popupOffsetY += differenceOfOffsets
        } else {
            this._scrollToSelectedItem()
        }
        var position = translator.locate(popupContentParent);
        translator.move(popupContentParent, {
            left: 0,
            top: position.top - popupOffsetY
        })
    },
    _getPopupHeight: function(listItemsCount) {
        return this._list && this._list.itemElements() ? this._list.itemElements().height() * listItemsCount + 2 * MATERIAL_LOOKUP_LIST_PADDING : "auto"
    },
    _renderPopup: function() {
        if (this.option("usePopover") && !this.option("fullScreen")) {
            this._renderPopover()
        } else {
            this.callBase()
        }
        this._$popup.addClass(LOOKUP_POPUP_CLASS);
        this._popup._wrapper().addClass(LOOKUP_POPUP_WRAPPER_CLASS)
    },
    _popupOptionMap: function(optionName) {
        return POPUP_OPTION_MAP[optionName] || optionName
    },
    _renderPopover: function() {
        this._popup = this._createComponent(this._$popup, Popover, extend(this._popupConfig(), {
            showEvent: null,
            hideEvent: null,
            target: this.$element(),
            fullScreen: false,
            shading: false,
            closeOnTargetScroll: true,
            width: this._isInitialOptionValue("popupWidth") ? function() {
                return this.$element().outerWidth()
            }.bind(this) : this._popupConfig().width
        }));
        this._popup.on({
            showing: this._popupShowingHandler.bind(this),
            shown: this._popupShownHandler.bind(this),
            hiding: this._popupHidingHandler.bind(this),
            hidden: this._popupHiddenHandler.bind(this)
        });
        this._popup.option("onContentReady", this._contentReadyHandler.bind(this));
        this._contentReadyHandler()
    },
    _popupHidingHandler: function() {
        this.callBase();
        this.option("focusStateEnabled") && this.focus()
    },
    _popupHiddenHandler: function() {
        this.callBase();
        if (this.option("_scrollToSelectedItemEnabled")) {
            translator.resetPosition($(this._popup.content()).parent())
        }
    },
    _preventFocusOnPopup: commonUtils.noop,
    _popupConfig: function() {
        var result = extend(this.callBase(), {
            showTitle: this.option("showPopupTitle"),
            title: this.option("title"),
            titleTemplate: this._getTemplateByOption("titleTemplate"),
            onTitleRendered: this.option("onTitleRendered"),
            toolbarItems: this._getPopupToolbarItems(),
            fullScreen: this.option("fullScreen"),
            shading: this.option("shading"),
            closeOnTargetScroll: false,
            closeOnOutsideClick: this.option("closeOnOutsideClick"),
            onPositioned: null
        });
        delete result.animation;
        delete result.position;
        result.maxHeight = function() {
            return $(window).height()
        };
        each(["position", "animation", "popupWidth", "popupHeight"], function(_, optionName) {
            if (void 0 !== this.option(optionName)) {
                result[this._popupOptionMap(optionName)] = this.option(optionName)
            }
        }.bind(this));
        return result
    },
    _getPopupToolbarItems: function() {
        var buttonsConfig = "useButtons" === this.option("applyValueMode") ? this._popupToolbarItemsConfig() : [];
        var cancelButton = this._getCancelButtonConfig();
        if (cancelButton) {
            buttonsConfig.push(cancelButton)
        }
        var clearButton = this._getClearButtonConfig();
        if (clearButton) {
            buttonsConfig.push(clearButton)
        }
        return this._applyButtonsLocation(buttonsConfig)
    },
    _popupToolbarItemsConfig: function() {
        return [{
            shortcut: "done",
            options: {
                onClick: this._applyButtonHandler.bind(this),
                text: this.option("applyButtonText")
            }
        }]
    },
    _getCancelButtonConfig: function() {
        return this.option("showCancelButton") ? {
            shortcut: "cancel",
            onClick: this._cancelButtonHandler.bind(this),
            options: {
                text: this.option("cancelButtonText")
            }
        } : null
    },
    _getClearButtonConfig: function() {
        return this.option("showClearButton") ? {
            shortcut: "clear",
            onClick: this._resetValue.bind(this),
            options: {
                text: this.option("clearButtonText")
            }
        } : null
    },
    _applyButtonHandler: function() {
        this.option("value", this._valueGetter(this._currentSelectedItem()));
        this.callBase()
    },
    _cancelButtonHandler: function() {
        this._refreshSelected();
        this.callBase()
    },
    _refreshPopupVisibility: function() {
        if (this.option("opened")) {
            this._updatePopupHeight()
        }
    },
    _dimensionChanged: function() {
        if (this.option("usePopover") && !this.option("popupWidth")) {
            this.option("popupWidth", this.$element().width())
        }
        this.callBase()
    },
    _updatePopupDimensions: function() {
        this._updatePopupHeight()
    },
    _input: function() {
        return this._$searchBox || this.callBase()
    },
    _renderPopupContent: function() {
        if ("dxPopup" === this._popup.NAME) {
            this._$popupValidationMessage = $("<div>").addClass(LOOKUP_POPUP_VALIDATION_MESSAGE).appendTo(this._popup.$content())
        }
        this.callBase();
        this._renderSearch();
        this._attachSearchChildProcessor()
    },
    _attachSearchChildProcessor: function() {
        if (this.option("searchEnabled") && this._searchBox) {
            this._listKeyboardProcessor = this._searchBox._keyboardProcessor.attachChildProcessor();
            this._setListOption("_keyboardProcessor", this._listKeyboardProcessor)
        } else {
            this._setListOption("_keyboardProcessor", void 0)
        }
    },
    _renderSearch: function() {
        this._$searchWrapper && this._$searchWrapper.remove();
        delete this._$searchWrapper;
        this._$searchBox && this._$searchBox.remove();
        delete this._$searchBox;
        delete this._searchBox;
        if (this.option("searchEnabled")) {
            var $searchWrapper = this._$searchWrapper = $("<div>").addClass(LOOKUP_SEARCH_WRAPPER_CLASS);
            var $searchBox = this._$searchBox = $("<div>").addClass(LOOKUP_SEARCH_CLASS).appendTo($searchWrapper);
            var currentDevice = devices.current(),
                searchMode = currentDevice.android && currentDevice.version[0] >= 5 ? "text" : "search";
            this._searchBox = this._createComponent($searchBox, TextBox, {
                mode: searchMode,
                showClearButton: true,
                valueChangeEvent: this.option("valueChangeEvent"),
                onValueChanged: this._searchHandler.bind(this)
            });
            this._registerSearchKeyHandlers();
            $searchWrapper.insertBefore(this._$list)
        }
        this._renderSearchVisibility();
        this._setSearchPlaceholder()
    },
    _selectListItemHandler: function(e) {
        var $itemElement = $(this._list.option("focusedElement"));
        if (!$itemElement.length) {
            return
        }
        e.preventDefault();
        this._selectListItem(e.itemData, $itemElement)
    },
    _registerSearchKeyHandlers: function() {
        this._searchBox.registerKeyHandler("escape", this.close.bind(this));
        this._searchBox.registerKeyHandler("enter", this._selectListItemHandler.bind(this));
        this._searchBox.registerKeyHandler("space", this._selectListItemHandler.bind(this));
        this._searchBox.registerKeyHandler("end", commonUtils.noop);
        this._searchBox.registerKeyHandler("home", commonUtils.noop)
    },
    _renderSearchVisibility: function() {
        if (this._popup) {
            this._popup._wrapper().toggleClass(LOOKUP_POPUP_SEARCH_CLASS, this.option("searchEnabled"))
        }
    },
    _setSearchPlaceholder: function() {
        if (!this._$searchBox) {
            return
        }
        var minSearchLength = this.option("minSearchLength");
        var placeholder = this.option("searchPlaceholder");
        if (minSearchLength && placeholder === messageLocalization.format("Search")) {
            placeholder = messageLocalization.getFormatter("dxLookup-searchPlaceholder")(minSearchLength)
        }
        this._searchBox.option("placeholder", placeholder)
    },
    _setAriaTargetForList: commonUtils.noop,
    _renderList: function() {
        this.callBase();
        this._list.registerKeyHandler("escape", function() {
            this.close()
        }.bind(this))
    },
    _listConfig: function() {
        return extend(this.callBase(), {
            tabIndex: 0,
            grouped: this.option("grouped"),
            groupTemplate: this._getTemplateByOption("groupTemplate"),
            pullRefreshEnabled: this.option("pullRefreshEnabled"),
            useNativeScrolling: this.option("useNativeScrolling"),
            pullingDownText: this.option("pullingDownText"),
            pulledDownText: this.option("pulledDownText"),
            refreshingText: this.option("refreshingText"),
            pageLoadingText: this.option("pageLoadingText"),
            onScroll: this.option("onScroll"),
            onPullRefresh: this.option("onPullRefresh"),
            onPageLoading: this.option("onPageLoading"),
            pageLoadMode: this.option("pageLoadMode"),
            nextButtonText: this.option("nextButtonText"),
            _keyboardProcessor: this._listKeyboardProcessor,
            onFocusIn: this._onFocusInHandler.bind(this),
            onSelectionChanged: this._getSelectionChangedHandler()
        })
    },
    _getSelectionChangedHandler: function() {
        return this.option("showSelectionControls") ? this._selectionChangeHandler.bind(this) : commonUtils.noop
    },
    _onFocusInHandler: function() {
        this._setListOption("_keyboardProcessor", void 0)
    },
    _listContentReadyHandler: function() {
        this.callBase.apply(this, arguments);
        this._refreshSelected()
    },
    _setFocusPolicy: function() {
        if (!this.option("focusStateEnabled")) {
            return
        }
        if (this.option("searchEnabled")) {
            this._searchBox.focus()
        } else {
            eventsEngine.trigger(this._$list, "focus")
        }
    },
    _attachChildKeyboardEvents: commonUtils.noop,
    _focusTarget: function() {
        return this._$field
    },
    _keyboardEventBindingTarget: function() {
        return this._$field
    },
    _listItemClickHandler: function(e) {
        this._selectListItem(e.itemData, e.event.currentTarget)
    },
    _selectListItem: function(itemData, target) {
        this._list.selectItem(target);
        if ("instantly" === this.option("applyValueMode")) {
            this._applyButtonHandler()
        }
    },
    _currentSelectedItem: function() {
        return this.option("grouped") ? this._list.option("selectedItems[0]").items[0] : this._list.option("selectedItems[0]")
    },
    _resetValue: function(e) {
        this._saveValueChangeEvent(e.event);
        this.option("value", null);
        this.option("opened", false)
    },
    _searchValue: function() {
        return this.option("searchEnabled") && this._searchBox ? this._searchBox.option("value") : ""
    },
    _renderInputValue: function() {
        return this.callBase().always(function() {
            this._renderField();
            this._refreshSelected();
            this._setSubmitValue()
        }.bind(this))
    },
    _setSubmitValue: function() {
        var value = this.option("value"),
            submitValue = "this" === this.option("valueExpr") ? this._displayGetter(value) : value;
        this._$submitElement.val(submitValue)
    },
    _renderPlaceholder: function() {
        if (0 === this.$element().find("input").length) {
            return
        }
        this.callBase()
    },
    _clean: function() {
        this._$fieldWrapper.remove();
        this._$searchBox = null;
        delete this._inkRipple;
        this.callBase()
    },
    _optionChanged: function(args) {
        var name = args.name;
        var value = args.value;
        switch (name) {
            case "searchEnabled":
                this._popup && this._renderSearch();
                this._attachSearchChildProcessor();
                break;
            case "searchPlaceholder":
                this._setSearchPlaceholder();
                break;
            case "minSearchLength":
                this._setSearchPlaceholder();
                this.callBase.apply(this, arguments);
                break;
            case "title":
            case "titleTemplate":
            case "onTitleRendered":
            case "shading":
            case "animation":
            case "position":
            case "closeOnOutsideClick":
                this._setPopupOption(name);
                break;
            case "fullScreen":
            case "usePopover":
            case "placeholder":
                this._invalidate();
                break;
            case "clearButtonText":
            case "showClearButton":
            case "showCancelButton":
                this._setPopupOption("toolbarItems", this._getPopupToolbarItems());
                break;
            case "applyValueMode":
                this.callBase.apply(this, arguments);
                break;
            case "popupWidth":
                this._setPopupOption("popupWidth", "auto" === value ? this.initialOption("popupWidth") : value);
                break;
            case "popupHeight":
                this._setPopupOption("popupHeight", "auto" === value ? this.initialOption("popupHeight") : value);
                break;
            case "pullRefreshEnabled":
            case "useNativeScrolling":
            case "pullingDownText":
            case "pulledDownText":
            case "refreshingText":
            case "pageLoadingText":
            case "onScroll":
            case "onPullRefresh":
            case "onPageLoading":
            case "nextButtonText":
            case "grouped":
            case "groupTemplate":
                this._setListOption(name);
                break;
            case "pageLoadMode":
                this._setListOption("pageLoadMode", this.option("pageLoadMode"));
                break;
            case "cleanSearchOnOpening":
            case "_scrollToSelectedItemEnabled":
                break;
            default:
                this.callBase.apply(this, arguments)
        }
    },
    focus: function() {
        this.option("opened") ? this._setFocusPolicy() : eventsEngine.trigger(this._focusTarget(), "focus")
    },
    field: function() {
        return this._$field
    }
});
registerComponent("dxLookup", Lookup);
module.exports = Lookup;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/progress_bar.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme/ui/progress_bar.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/progress_bar.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    TrackBar = __webpack_require__(/*! ./track_bar */ "./node_modules/devextreme/ui/track_bar.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    isFunction = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isFunction,
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js");
var PROGRESSBAR_CLASS = "dx-progressbar",
    PROGRESSBAR_CONTAINER_CLASS = "dx-progressbar-container",
    PROGRESSBAR_RANGE_CONTAINER_CLASS = "dx-progressbar-range-container",
    PROGRESSBAR_RANGE_CLASS = "dx-progressbar-range",
    PROGRESSBAR_WRAPPER_CLASS = "dx-progressbar-wrapper",
    PROGRESSBAR_STATUS_CLASS = "dx-progressbar-status",
    PROGRESSBAR_INDETERMINATE_SEGMENT_CONTAINER = "dx-progressbar-animating-container",
    PROGRESSBAR_INDETERMINATE_SEGMENT = "dx-progressbar-animating-segment";
var ProgressBar = TrackBar.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            value: 0,
            statusFormat: function(ratio) {
                return "Progress: " + Math.round(100 * ratio) + "%"
            },
            showStatus: true,
            onComplete: null,
            activeStateEnabled: false,
            statusPosition: "bottom left",
            _animatingSegmentCount: 0
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: {
                platform: "win"
            },
            options: {
                _animatingSegmentCount: 5
            }
        }, {
            device: function(_device) {
                return "android" === _device.platform
            },
            options: {
                _animatingSegmentCount: 2
            }
        }])
    },
    _initMarkup: function() {
        this._renderStatus();
        this._createCompleteAction();
        this.callBase();
        this.$element().addClass(PROGRESSBAR_CLASS);
        this._$wrapper.addClass(PROGRESSBAR_WRAPPER_CLASS);
        this._$bar.addClass(PROGRESSBAR_CONTAINER_CLASS);
        this.setAria("role", "progressbar");
        $("<div>").addClass(PROGRESSBAR_RANGE_CONTAINER_CLASS).appendTo(this._$wrapper).append(this._$bar);
        this._$range.addClass(PROGRESSBAR_RANGE_CLASS);
        this._toggleStatus(this.option("showStatus"))
    },
    _createCompleteAction: function() {
        this._completeAction = this._createActionByOption("onComplete")
    },
    _renderStatus: function() {
        this._$status = $("<div>").addClass(PROGRESSBAR_STATUS_CLASS)
    },
    _renderIndeterminateState: function() {
        this._$segmentContainer = $("<div>").addClass(PROGRESSBAR_INDETERMINATE_SEGMENT_CONTAINER);
        var segments = this.option("_animatingSegmentCount");
        for (var i = 0; i < segments; i++) {
            $("<div>").addClass(PROGRESSBAR_INDETERMINATE_SEGMENT).addClass(PROGRESSBAR_INDETERMINATE_SEGMENT + "-" + (i + 1)).appendTo(this._$segmentContainer)
        }
        this._$segmentContainer.appendTo(this._$wrapper)
    },
    _toggleStatus: function(value) {
        var splitPosition = this.option("statusPosition").split(" ");
        if (value) {
            if ("top" === splitPosition[0] || "left" === splitPosition[0]) {
                this._$status.prependTo(this._$wrapper)
            } else {
                this._$status.appendTo(this._$wrapper)
            }
        } else {
            this._$status.detach()
        }
        this._togglePositionClass()
    },
    _togglePositionClass: function() {
        var position = this.option("statusPosition"),
            splitPosition = position.split(" ");
        this._$wrapper.removeClass("dx-position-top-left dx-position-top-right dx-position-bottom-left dx-position-bottom-right dx-position-left dx-position-right");
        var positionClass = "dx-position-" + splitPosition[0];
        if (splitPosition[1]) {
            positionClass += "-" + splitPosition[1]
        }
        this._$wrapper.addClass(positionClass)
    },
    _toggleIndeterminateState: function(value) {
        if (value) {
            this._renderIndeterminateState();
            this._$bar.toggle(false)
        } else {
            this._$bar.toggle(true);
            this._$segmentContainer.remove();
            delete this._$segmentContainer
        }
    },
    _renderValue: function() {
        var val = this.option("value"),
            max = this.option("max");
        if (!val && 0 !== val) {
            this._toggleIndeterminateState(true);
            return
        }
        if (this._$segmentContainer) {
            this._toggleIndeterminateState(false)
        }
        if (val === max) {
            this._completeAction()
        }
        this.callBase();
        this._setStatus()
    },
    _setStatus: function() {
        var format = this.option("statusFormat");
        if (isFunction(format)) {
            format = format.bind(this)
        } else {
            format = function(value) {
                return value
            }
        }
        var statusText = format(this._currentRatio, this.option("value"));
        this._$status.text(statusText)
    },
    _dispose: function() {
        this._$status.remove();
        this.callBase()
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "statusFormat":
                this._setStatus();
                break;
            case "showStatus":
                this._toggleStatus(args.value);
                break;
            case "statusPosition":
                this._toggleStatus(this.option("showStatus"));
                break;
            case "onComplete":
                this._createCompleteAction();
                break;
            case "_animatingSegmentCount":
                break;
            default:
                this.callBase(args)
        }
    }
});
registerComponent("dxProgressBar", ProgressBar);
module.exports = ProgressBar;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/text_area.js":
/*!*************************************************!*\
  !*** ./node_modules/devextreme/ui/text_area.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/text_area.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    noop = __webpack_require__(/*! ../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    eventUtils = __webpack_require__(/*! ../events/utils */ "./node_modules/devextreme/events/utils.js"),
    pointerEvents = __webpack_require__(/*! ../events/pointer */ "./node_modules/devextreme/events/pointer.js"),
    TextBox = __webpack_require__(/*! ./text_box */ "./node_modules/devextreme/ui/text_box.js");
var TEXTAREA_CLASS = "dx-textarea",
    TEXTEDITOR_INPUT_CLASS = "dx-texteditor-input";
var TextArea = TextBox.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            spellcheck: true,
            minHeight: void 0,
            maxHeight: void 0,
            autoResizeEnabled: false
        })
    },
    _initMarkup: function() {
        this.$element().addClass(TEXTAREA_CLASS);
        this.callBase();
        this.setAria("multiline", "true")
    },
    _renderContentImpl: function() {
        this._updateInputHeight();
        this.callBase()
    },
    _renderInput: function() {
        this.callBase();
        this._renderScrollHandler()
    },
    _createInput: function() {
        var $input = $("<textarea>");
        this._applyInputAttributes($input, this.option("inputAttr"));
        return $input
    },
    _applyInputAttributes: function($input, customAttributes) {
        $input.attr(customAttributes).addClass(TEXTEDITOR_INPUT_CLASS)
    },
    _renderScrollHandler: function() {
        var $input = this._input(),
            eventY = 0;
        eventsEngine.on($input, eventUtils.addNamespace(pointerEvents.down, this.NAME), function(e) {
            eventY = eventUtils.eventData(e).y
        });
        eventsEngine.on($input, eventUtils.addNamespace(pointerEvents.move, this.NAME), function(e) {
            var scrollTopPos = $input.scrollTop(),
                scrollBottomPos = $input.prop("scrollHeight") - $input.prop("clientHeight") - scrollTopPos;
            if (0 === scrollTopPos && 0 === scrollBottomPos) {
                return
            }
            var currentEventY = eventUtils.eventData(e).y;
            var isScrollFromTop = 0 === scrollTopPos && eventY >= currentEventY,
                isScrollFromBottom = 0 === scrollBottomPos && eventY <= currentEventY,
                isScrollFromMiddle = scrollTopPos > 0 && scrollBottomPos > 0;
            if (isScrollFromTop || isScrollFromBottom || isScrollFromMiddle) {
                e.isScrollingEvent = true;
                e.stopPropagation()
            }
            eventY = currentEventY
        })
    },
    _renderDimensions: function() {
        var $element = this.$element();
        var element = $element.get(0);
        var width = this._getOptionValue("width", element);
        var height = this._getOptionValue("height", element);
        var minHeight = this.option("minHeight");
        var maxHeight = this.option("maxHeight");
        $element.css({
            minHeight: void 0 !== minHeight ? minHeight : "",
            maxHeight: void 0 !== maxHeight ? maxHeight : "",
            width: width,
            height: height
        })
    },
    _resetDimensions: function() {
        this.$element().css({
            height: "",
            minHeight: "",
            maxHeight: ""
        })
    },
    _renderEvents: function() {
        if (this.option("autoResizeEnabled")) {
            eventsEngine.on(this._input(), eventUtils.addNamespace("input paste", this.NAME), this._updateInputHeight.bind(this))
        }
        this.callBase()
    },
    _refreshEvents: function() {
        eventsEngine.off(this._input(), eventUtils.addNamespace("input paste", this.NAME));
        this.callBase()
    },
    _updateInputHeight: function() {
        var $input = this._input();
        if (!this.option("autoResizeEnabled") || void 0 !== this.option("height")) {
            $input.css("height", "");
            return
        }
        this._resetDimensions();
        $input.css("height", 0);
        var heightDifference = this._$element.outerHeight() - $input.outerHeight();
        this._renderDimensions();
        var minHeight = this.option("minHeight"),
            maxHeight = this.option("maxHeight"),
            inputHeight = $input[0].scrollHeight;
        if (void 0 !== minHeight) {
            inputHeight = Math.max(inputHeight, minHeight - heightDifference)
        }
        if (void 0 !== maxHeight) {
            inputHeight = Math.min(inputHeight, maxHeight - heightDifference)
        }
        $input.css("height", inputHeight)
    },
    _renderInputType: noop,
    _visibilityChanged: function(visible) {
        if (visible) {
            this._updateInputHeight()
        }
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "autoResizeEnabled":
                this._refreshEvents();
                this._updateInputHeight();
                break;
            case "value":
            case "height":
                this.callBase(args);
                this._updateInputHeight();
                break;
            case "minHeight":
            case "maxHeight":
                this._renderDimensions();
                this._updateInputHeight();
                break;
            case "visible":
                this.callBase(args);
                args.value && this._updateInputHeight();
                break;
            default:
                this.callBase(args)
        }
    }
});
registerComponent("dxTextArea", TextArea);
module.exports = TextArea;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/track_bar.js":
/*!*************************************************!*\
  !*** ./node_modules/devextreme/ui/track_bar.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/track_bar.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    Editor = __webpack_require__(/*! ./editor/editor */ "./node_modules/devextreme/ui/editor/editor.js"),
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    windowUtils = __webpack_require__(/*! ../core/utils/window */ "./node_modules/devextreme/core/utils/window.js"),
    fx = __webpack_require__(/*! ../animation/fx */ "./node_modules/devextreme/animation/fx.js");
var TRACKBAR_CLASS = "dx-trackbar",
    TRACKBAR_CONTAINER_CLASS = "dx-trackbar-container",
    TRACKBAR_RANGE_CLASS = "dx-trackbar-range",
    TRACKBAR_WRAPPER_CLASS = "dx-trackbar-wrapper";
var TrackBar = Editor.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            min: 0,
            max: 100,
            value: 0
        })
    },
    _initMarkup: function() {
        this.$element().addClass(TRACKBAR_CLASS);
        this._renderWrapper();
        this._renderContainer();
        this._renderRange();
        this._renderValue();
        this._setRangeStyles();
        this.callBase()
    },
    _render: function() {
        this.callBase();
        this._setRangeStyles(this._rangeStylesConfig())
    },
    _renderWrapper: function() {
        this._$wrapper = $("<div>").addClass(TRACKBAR_WRAPPER_CLASS).appendTo(this.$element())
    },
    _renderContainer: function() {
        this._$bar = $("<div>").addClass(TRACKBAR_CONTAINER_CLASS).appendTo(this._$wrapper)
    },
    _renderRange: function() {
        this._$range = $("<div>").addClass(TRACKBAR_RANGE_CLASS).appendTo(this._$bar)
    },
    _renderValue: function() {
        var val = this.option("value"),
            min = this.option("min"),
            max = this.option("max");
        if (min > max) {
            return
        }
        if (val < min) {
            this.option("value", min);
            this._currentRatio = 0;
            return
        }
        if (val > max) {
            this.option("value", max);
            this._currentRatio = 1;
            return
        }
        var ratio = min === max ? 0 : (val - min) / (max - min);
        !this._needPreventAnimation && this._setRangeStyles({
            width: 100 * ratio + "%"
        });
        this.setAria({
            valuemin: this.option("min"),
            valuemax: max,
            valuenow: val
        });
        this._currentRatio = ratio
    },
    _rangeStylesConfig: function() {
        return {
            width: 100 * this._currentRatio + "%"
        }
    },
    _setRangeStyles: function(options) {
        fx.stop(this._$range);
        if (!options) {
            this._$range.css({
                width: 0
            });
            return
        }
        if (this._needPreventAnimation || !windowUtils.hasWindow()) {
            return
        }
        fx.animate(this._$range, {
            type: "custom",
            duration: 100,
            to: options
        })
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "value":
                this._renderValue();
                this.callBase(args);
                break;
            case "max":
            case "min":
                this._renderValue();
                break;
            default:
                this.callBase(args)
        }
    },
    _dispose: function() {
        fx.stop(this._$range);
        this.callBase()
    }
});
registerComponent("dxTrackBar", TrackBar);
module.exports = TrackBar;


/***/ })

}]);
//# sourceMappingURL=default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~3758f1a8.js.map