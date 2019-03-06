(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~5bc09b5d"],{

/***/ "./node_modules/devextreme-angular/ui/switch.js":
/*!******************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/switch.js ***!
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
var switch_1 = __webpack_require__(/*! devextreme/ui/switch */ "./node_modules/devextreme/ui/switch.js");
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
    useExisting: core_1.forwardRef(function () { return DxSwitchComponent; }),
    multi: true
};
/**
 * The Switch is a widget that can be in two states: "On" and "Off".
 */
var DxSwitchComponent = (function (_super) {
    __extends(DxSwitchComponent, _super);
    function DxSwitchComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
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
            { emit: 'offTextChange' },
            { emit: 'onTextChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'switchedOffTextChange' },
            { emit: 'switchedOnTextChange' },
            { emit: 'tabIndexChange' },
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
    Object.defineProperty(DxSwitchComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "disabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "height", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "hint", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "isValid", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "name", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "offText", {
        get: /**
             * Use the switchedOffText option instead.
             */
        function () {
            return this._getOption('offText');
        },
        set: function (value) {
            this._setOption('offText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "onText", {
        get: /**
             * Use the switchedOnText option instead.
             */
        function () {
            return this._getOption('onText');
        },
        set: function (value) {
            this._setOption('onText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "switchedOffText", {
        get: /**
             * Specifies the text displayed when the widget is switched off.
             */
        function () {
            return this._getOption('switchedOffText');
        },
        set: function (value) {
            this._setOption('switchedOffText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "switchedOnText", {
        get: /**
             * Specifies the text displayed when the widget is switched on.
             */
        function () {
            return this._getOption('switchedOnText');
        },
        set: function (value) {
            this._setOption('switchedOnText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSwitchComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "validationError", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "value", {
        get: /**
             * A Boolean value specifying whether the current switch state is "On" or "Off".
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
    Object.defineProperty(DxSwitchComponent.prototype, "visible", {
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
    Object.defineProperty(DxSwitchComponent.prototype, "width", {
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
    DxSwitchComponent.prototype.change = function (_) { };
    DxSwitchComponent.prototype._createInstance = function (element, options) {
        return new switch_1.default(element, options);
    };
    DxSwitchComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxSwitchComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxSwitchComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxSwitchComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxSwitchComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSwitchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxSwitchComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxSwitchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-switch',
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
    DxSwitchComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxSwitchComponent.propDecorators = {
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
        "offText": [{ type: core_1.Input },],
        "onText": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "switchedOffText": [{ type: core_1.Input },],
        "switchedOnText": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
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
        "offTextChange": [{ type: core_1.Output },],
        "onTextChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "switchedOffTextChange": [{ type: core_1.Output },],
        "switchedOnTextChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "validationErrorChange": [{ type: core_1.Output },],
        "validationMessageModeChange": [{ type: core_1.Output },],
        "valueChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "onBlur": [{ type: core_1.Output },],
        "change": [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        "touched": [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxSwitchComponent;
}(component_1.DxComponent));
exports.DxSwitchComponent = DxSwitchComponent;
var DxSwitchModule = (function () {
    function DxSwitchModule() {
    }
    DxSwitchModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxSwitchComponent
                    ],
                    exports: [
                        DxSwitchComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxSwitchModule;
}());
exports.DxSwitchModule = DxSwitchModule;
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/devextreme/ui/switch.js":
/*!**********************************************!*\
  !*** ./node_modules/devextreme/ui/switch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/switch.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    devices = __webpack_require__(/*! ../core/devices */ "./node_modules/devextreme/core/devices.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inkRipple = __webpack_require__(/*! ./widget/utils.ink_ripple */ "./node_modules/devextreme/ui/widget/utils.ink_ripple.js"),
    registerComponent = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    Editor = __webpack_require__(/*! ./editor/editor */ "./node_modules/devextreme/ui/editor/editor.js"),
    eventUtils = __webpack_require__(/*! ../events/utils */ "./node_modules/devextreme/events/utils.js"),
    feedbackEvents = __webpack_require__(/*! ../events/core/emitter.feedback */ "./node_modules/devextreme/events/core/emitter.feedback.js"),
    themes = __webpack_require__(/*! ./themes */ "./node_modules/devextreme/ui/themes.js"),
    fx = __webpack_require__(/*! ../animation/fx */ "./node_modules/devextreme/animation/fx.js"),
    messageLocalization = __webpack_require__(/*! ../localization/message */ "./node_modules/devextreme/localization/message.js"),
    clickEvent = __webpack_require__(/*! ../events/click */ "./node_modules/devextreme/events/click.js"),
    Swipeable = __webpack_require__(/*! ../events/gesture/swipeable */ "./node_modules/devextreme/events/gesture/swipeable.js"),
    Deferred = __webpack_require__(/*! ../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js").Deferred;
var SWITCH_CLASS = "dx-switch",
    SWITCH_WRAPPER_CLASS = SWITCH_CLASS + "-wrapper",
    SWITCH_CONTAINER_CLASS = SWITCH_CLASS + "-container",
    SWITCH_INNER_CLASS = SWITCH_CLASS + "-inner",
    SWITCH_HANDLE_CLASS = SWITCH_CLASS + "-handle",
    SWITCH_ON_VALUE_CLASS = SWITCH_CLASS + "-on-value",
    SWITCH_ON_CLASS = SWITCH_CLASS + "-on",
    SWITCH_OFF_CLASS = SWITCH_CLASS + "-off",
    SWITCH_ANIMATION_DURATION = 100;
var Switch = Editor.inherit({
    _supportedKeys: function() {
        var isRTL = this.option("rtlEnabled");
        var click = function(e) {
                e.preventDefault();
                this._clickAction({
                    event: e
                })
            },
            move = function(value, e) {
                e.preventDefault();
                e.stopPropagation();
                this._animateValue(value)
            };
        return extend(this.callBase(), {
            space: click,
            enter: click,
            leftArrow: move.bind(this, isRTL ? true : false),
            rightArrow: move.bind(this, isRTL ? false : true)
        })
    },
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            hoverStateEnabled: true,
            activeStateEnabled: true,
            switchedOnText: this._getLocalizationMessage("On"),
            switchedOffText: this._getLocalizationMessage("Off"),
            value: false,
            useInkRipple: false,
            _animateHandle: true
        })
    },
    _defaultOptionsRules: function() {
        var themeName = themes.current();
        return this.callBase().concat([{
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
            device: function(_device) {
                return themes.isIos7(themeName)
            },
            options: {
                _animateHandle: false
            }
        }])
    },
    _setDeprecatedOptions: function() {
        this.callBase();
        extend(this._deprecatedOptions, {
            onText: {
                since: "18.2",
                alias: "switchedOnText"
            },
            offText: {
                since: "18.2",
                alias: "switchedOffText"
            }
        })
    },
    _getLocalizationMessage: function(state) {
        var newMessage = messageLocalization.format("dxSwitch-switched" + state + "Text"),
            oldMessage = messageLocalization.format("dxSwitch-" + state.toLowerCase() + "Text");
        return newMessage || oldMessage
    },
    _feedbackHideTimeout: 0,
    _animating: false,
    _initMarkup: function() {
        this._renderContainers();
        this.option("useInkRipple") && this._renderInkRipple();
        this.$element().addClass(SWITCH_CLASS).append(this._$switchWrapper);
        this._renderSubmitElement();
        this._renderClick();
        this.setAria("role", "button");
        this._renderSwipeable();
        this.callBase();
        this._renderSwitchInner();
        this._renderLabels();
        this._renderValue()
    },
    _getInnerOffset: function(value, offset) {
        var ratio = (offset - this._offsetDirection() * Number(!value)) / 2;
        return 100 * ratio + "%"
    },
    _getHandleOffset: function(value, offset) {
        if (this.option("rtlEnabled")) {
            value = !value
        }
        if (value) {
            var calcValue = -100 + 100 * -offset;
            return calcValue + "%"
        } else {
            return 100 * -offset + "%"
        }
    },
    _renderSwitchInner: function() {
        this._$switchInner = $("<div>").addClass(SWITCH_INNER_CLASS).appendTo(this._$switchContainer);
        this._$handle = $("<div>").addClass(SWITCH_HANDLE_CLASS).appendTo(this._$switchInner)
    },
    _renderLabels: function() {
        this._$labelOn = $("<div>").addClass(SWITCH_ON_CLASS).prependTo(this._$switchInner);
        this._$labelOff = $("<div>").addClass(SWITCH_OFF_CLASS).appendTo(this._$switchInner);
        this._setLabelsText()
    },
    _renderContainers: function() {
        this._$switchContainer = $("<div>").addClass(SWITCH_CONTAINER_CLASS);
        this._$switchWrapper = $("<div>").addClass(SWITCH_WRAPPER_CLASS).append(this._$switchContainer)
    },
    _renderSwipeable: function() {
        this._createComponent(this.$element(), Swipeable, {
            elastic: false,
            immediate: true,
            onStart: this._swipeStartHandler.bind(this),
            onUpdated: this._swipeUpdateHandler.bind(this),
            onEnd: this._swipeEndHandler.bind(this),
            itemSizeFunc: this._getItemSizeFunc.bind(this)
        })
    },
    _getItemSizeFunc: function() {
        return this._$switchContainer.outerWidth(true) - this._$handle.get(0).getBoundingClientRect().width
    },
    _renderSubmitElement: function() {
        this._$submitElement = $("<input>").attr("type", "hidden").appendTo(this.$element())
    },
    _getSubmitElement: function() {
        return this._$submitElement
    },
    _renderInkRipple: function() {
        this._inkRipple = inkRipple.render({
            waveSizeCoefficient: 1.7,
            isCentered: true,
            useHoldAnimation: false,
            wavesNumber: 2
        })
    },
    _renderInkWave: function(element, dxEvent, doRender, waveIndex) {
        if (!this._inkRipple) {
            return
        }
        var config = {
            element: element,
            event: dxEvent,
            wave: waveIndex
        };
        if (doRender) {
            this._inkRipple.showWave(config)
        } else {
            this._inkRipple.hideWave(config)
        }
    },
    _updateFocusState: function(e, value) {
        this.callBase.apply(this, arguments);
        this._renderInkWave(this._$handle, e, value, 0)
    },
    _toggleActiveState: function($element, value, e) {
        this.callBase.apply(this, arguments);
        this._renderInkWave(this._$handle, e, value, 1)
    },
    _offsetDirection: function() {
        return this.option("rtlEnabled") ? -1 : 1
    },
    _renderPosition: function(state, swipeOffset) {
        var innerOffset = this._getInnerOffset(state, swipeOffset),
            handleOffset = this._getHandleOffset(state, swipeOffset);
        if (this.option("_animateHandle")) {
            this._$switchInner.css("transform", " translateX(" + innerOffset + ")");
            this._$handle.css("transform", " translateX(" + handleOffset + ")")
        }
    },
    _validateValue: function() {
        var check = this.option("value");
        if ("boolean" !== typeof check) {
            this._options.value = !!check
        }
    },
    _renderClick: function() {
        var eventName = eventUtils.addNamespace(clickEvent.name, this.NAME);
        var $element = this.$element();
        this._clickAction = this._createAction(this._clickHandler.bind(this));
        eventsEngine.off($element, eventName);
        eventsEngine.on($element, eventName, function(e) {
            this._clickAction({
                event: e
            })
        }.bind(this))
    },
    _clickHandler: function(args) {
        var e = args.event;
        this._saveValueChangeEvent(e);
        if (this._animating || this._swiping) {
            return
        }
        this._animateValue(!this.option("value"))
    },
    _animateValue: function(value) {
        var startValue = this.option("value"),
            endValue = value;
        if (startValue === endValue) {
            return
        }
        this._animating = true;
        var fromInnerOffset = this._getInnerOffset(startValue, 0),
            toInnerOffset = this._getInnerOffset(endValue, 0),
            fromHandleOffset = this._getHandleOffset(startValue, 0),
            toHandleOffset = this._getHandleOffset(endValue, 0);
        var that = this,
            fromInnerConfig = {},
            toInnerConfig = {},
            fromHandleConfig = {},
            toHandlerConfig = {};
        fromInnerConfig.transform = " translateX(" + fromInnerOffset + ")";
        toInnerConfig.transform = " translateX(" + toInnerOffset + ")";
        fromHandleConfig.transform = " translateX(" + fromHandleOffset + ")";
        toHandlerConfig.transform = " translateX(" + toHandleOffset + ")";
        this.$element().toggleClass(SWITCH_ON_VALUE_CLASS, endValue);
        fx.animate(this._$handle, {
            from: fromHandleConfig,
            to: toHandlerConfig,
            duration: SWITCH_ANIMATION_DURATION
        });
        fx.animate(this._$switchInner, {
            from: fromInnerConfig,
            to: toInnerConfig,
            duration: SWITCH_ANIMATION_DURATION,
            complete: function() {
                that._animating = false;
                that.option("value", endValue)
            }
        })
    },
    _swipeStartHandler: function(e) {
        var state = this.option("value"),
            rtlEnabled = this.option("rtlEnabled"),
            maxOffOffset = rtlEnabled ? 0 : 1,
            maxOnOffset = rtlEnabled ? 1 : 0;
        e.event.maxLeftOffset = state ? maxOffOffset : maxOnOffset;
        e.event.maxRightOffset = state ? maxOnOffset : maxOffOffset;
        this._swiping = true;
        this._feedbackDeferred = new Deferred;
        feedbackEvents.lock(this._feedbackDeferred);
        this._toggleActiveState(this.$element(), this.option("activeStateEnabled"))
    },
    _swipeUpdateHandler: function(e) {
        this._renderPosition(this.option("value"), e.event.offset)
    },
    _swipeEndHandler: function(e) {
        var that = this,
            offsetDirection = this._offsetDirection(),
            toInnerConfig = {},
            toHandleConfig = {};
        var innerOffset = this._getInnerOffset(that.option("value"), e.event.targetOffset),
            handleOffset = this._getHandleOffset(that.option("value"), e.event.targetOffset);
        toInnerConfig.transform = " translateX(" + innerOffset + ")";
        toHandleConfig.transform = " translateX(" + handleOffset + ")";
        fx.animate(this._$handle, {
            to: toHandleConfig,
            duration: SWITCH_ANIMATION_DURATION
        });
        fx.animate(this._$switchInner, {
            to: toInnerConfig,
            duration: SWITCH_ANIMATION_DURATION,
            complete: function() {
                that._swiping = false;
                var pos = that.option("value") + offsetDirection * e.event.targetOffset;
                that.option("value", Boolean(pos));
                that._feedbackDeferred.resolve();
                that._toggleActiveState(that.$element(), false)
            }
        })
    },
    _renderValue: function() {
        this._validateValue();
        var val = this.option("value");
        this._renderPosition(val, 0);
        this.$element().toggleClass(SWITCH_ON_VALUE_CLASS, val);
        this._$submitElement.val(val);
        this.setAria({
            pressed: val,
            label: val ? this.option("switchedOnText") : this.option("switchedOffText")
        })
    },
    _setLabelsText: function() {
        this._$labelOn && this._$labelOn.text(this.option("switchedOnText"));
        this._$labelOff && this._$labelOff.text(this.option("switchedOffText"))
    },
    _visibilityChanged: function(visible) {
        if (visible) {
            this.repaint()
        }
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "useInkRipple":
                this._invalidate();
                break;
            case "width":
                delete this._marginBound;
                this._refresh();
                break;
            case "switchedOnText":
            case "switchedOffText":
                this._setLabelsText();
                break;
            case "value":
                this._renderValue();
                this.callBase(args);
                break;
            case "_animateHandle":
                break;
            default:
                this.callBase(args)
        }
    },
    _clean: function() {
        delete this._inkRipple;
        this.callBase()
    }
});
registerComponent("dxSwitch", Switch);
module.exports = Switch;
module.exports.default = module.exports;


/***/ })

}]);
//# sourceMappingURL=default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~5bc09b5d.js.map