(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-devextreme-devextreme-module-ngfactory"],{

/***/ "./node_modules/devextreme-angular/ui/form.ngfactory.js":
/*!**************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/form.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: DxFormModuleNgFactory, RenderType_DxFormComponent, View_DxFormComponent_0, View_DxFormComponent_Host_0, DxFormComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxFormModuleNgFactory", function() { return DxFormModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DxFormComponent", function() { return RenderType_DxFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxFormComponent_0", function() { return View_DxFormComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxFormComponent_Host_0", function() { return View_DxFormComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxFormComponentNgFactory", function() { return DxFormComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./node_modules/devextreme-angular/ui/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested/col-count-by-screen */ "./node_modules/devextreme-angular/ui/nested/col-count-by-screen.js");
/* harmony import */ var _nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nested_item_dxi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/* harmony import */ var _nested_item_dxi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nested_item_dxi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nested_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested/label */ "./node_modules/devextreme-angular/ui/nested/label.js");
/* harmony import */ var _nested_label__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nested_label__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
/* harmony import */ var _nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nested/tab-panel-options */ "./node_modules/devextreme-angular/ui/nested/tab-panel-options.js");
/* harmony import */ var _nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nested_tab_dxi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nested/tab-dxi */ "./node_modules/devextreme-angular/ui/nested/tab-dxi.js");
/* harmony import */ var _nested_tab_dxi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nested_button_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nested/button-options */ "./node_modules/devextreme-angular/ui/nested/button-options.js");
/* harmony import */ var _nested_button_options__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nested_button_options__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_integration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
/* harmony import */ var _core_integration__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_core_integration__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_template__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
/* harmony import */ var _core_template__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_core_template__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_core_template_host__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _core_watcher_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/* harmony import */ var _core_watcher_helper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_core_watcher_helper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
/* harmony import */ var _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_core_nested_option__WEBPACK_IMPORTED_MODULE_17__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var DxFormModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_form__WEBPACK_IMPORTED_MODULE_1__["DxFormModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_4__["DxoColCountByScreenModule"], _nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_4__["DxoColCountByScreenModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_item_dxi__WEBPACK_IMPORTED_MODULE_5__["DxiItemModule"], _nested_item_dxi__WEBPACK_IMPORTED_MODULE_5__["DxiItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_label__WEBPACK_IMPORTED_MODULE_6__["DxoLabelModule"], _nested_label__WEBPACK_IMPORTED_MODULE_6__["DxoLabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_7__["DxiValidationRuleModule"], _nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_7__["DxiValidationRuleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_8__["DxoTabPanelOptionsModule"], _nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_8__["DxoTabPanelOptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_tab_dxi__WEBPACK_IMPORTED_MODULE_9__["DxiTabModule"], _nested_tab_dxi__WEBPACK_IMPORTED_MODULE_9__["DxiTabModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nested_button_options__WEBPACK_IMPORTED_MODULE_10__["DxoButtonOptionsModule"], _nested_button_options__WEBPACK_IMPORTED_MODULE_10__["DxoButtonOptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_integration__WEBPACK_IMPORTED_MODULE_11__["DxIntegrationModule"], _core_integration__WEBPACK_IMPORTED_MODULE_11__["DxIntegrationModule"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_template__WEBPACK_IMPORTED_MODULE_13__["DxTemplateModule"], _core_template__WEBPACK_IMPORTED_MODULE_13__["DxTemplateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _form__WEBPACK_IMPORTED_MODULE_1__["DxFormModule"], _form__WEBPACK_IMPORTED_MODULE_1__["DxFormModule"], [])]); });

var styles_DxFormComponent = [];
var RenderType_DxFormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DxFormComponent, data: {} });

function View_DxFormComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_DxFormComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "dx-form", [], null, null, null, View_DxFormComponent_0, RenderType_DxFormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_template_host__WEBPACK_IMPORTED_MODULE_14__["DxTemplateHost"], _core_template_host__WEBPACK_IMPORTED_MODULE_14__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_watcher_helper__WEBPACK_IMPORTED_MODULE_15__["WatcherHelper"], _core_watcher_helper__WEBPACK_IMPORTED_MODULE_15__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16__["IterableDifferHelper"], _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16__["IterableDifferHelper"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_nested_option__WEBPACK_IMPORTED_MODULE_17__["NestedOptionHost"], _core_nested_option__WEBPACK_IMPORTED_MODULE_17__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 7323648, null, 1, _form__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _core_template_host__WEBPACK_IMPORTED_MODULE_14__["DxTemplateHost"], _core_watcher_helper__WEBPACK_IMPORTED_MODULE_15__["WatcherHelper"], _core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_16__["IterableDifferHelper"], _core_nested_option__WEBPACK_IMPORTED_MODULE_17__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { itemsChildren: 1 })], function (_ck, _v) { _ck(_v, 5, 0); }, null); }
var DxFormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("dx-form", _form__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"], View_DxFormComponent_Host_0, { accessKey: "accessKey", activeStateEnabled: "activeStateEnabled", alignItemLabels: "alignItemLabels", alignItemLabelsInAllGroups: "alignItemLabelsInAllGroups", colCount: "colCount", colCountByScreen: "colCountByScreen", customizeItem: "customizeItem", disabled: "disabled", elementAttr: "elementAttr", focusStateEnabled: "focusStateEnabled", formData: "formData", height: "height", hint: "hint", hoverStateEnabled: "hoverStateEnabled", items: "items", labelLocation: "labelLocation", minColWidth: "minColWidth", optionalMark: "optionalMark", readOnly: "readOnly", requiredMark: "requiredMark", requiredMessage: "requiredMessage", rtlEnabled: "rtlEnabled", screenByWidth: "screenByWidth", scrollingEnabled: "scrollingEnabled", showColonAfterLabel: "showColonAfterLabel", showOptionalMark: "showOptionalMark", showRequiredMark: "showRequiredMark", showValidationSummary: "showValidationSummary", tabIndex: "tabIndex", validationGroup: "validationGroup", visible: "visible", width: "width" }, { onContentReady: "onContentReady", onDisposing: "onDisposing", onEditorEnterKey: "onEditorEnterKey", onFieldDataChanged: "onFieldDataChanged", onInitialized: "onInitialized", onOptionChanged: "onOptionChanged", accessKeyChange: "accessKeyChange", activeStateEnabledChange: "activeStateEnabledChange", alignItemLabelsChange: "alignItemLabelsChange", alignItemLabelsInAllGroupsChange: "alignItemLabelsInAllGroupsChange", colCountChange: "colCountChange", colCountByScreenChange: "colCountByScreenChange", customizeItemChange: "customizeItemChange", disabledChange: "disabledChange", elementAttrChange: "elementAttrChange", focusStateEnabledChange: "focusStateEnabledChange", formDataChange: "formDataChange", heightChange: "heightChange", hintChange: "hintChange", hoverStateEnabledChange: "hoverStateEnabledChange", itemsChange: "itemsChange", labelLocationChange: "labelLocationChange", minColWidthChange: "minColWidthChange", optionalMarkChange: "optionalMarkChange", readOnlyChange: "readOnlyChange", requiredMarkChange: "requiredMarkChange", requiredMessageChange: "requiredMessageChange", rtlEnabledChange: "rtlEnabledChange", screenByWidthChange: "screenByWidthChange", scrollingEnabledChange: "scrollingEnabledChange", showColonAfterLabelChange: "showColonAfterLabelChange", showOptionalMarkChange: "showOptionalMarkChange", showRequiredMarkChange: "showRequiredMarkChange", showValidationSummaryChange: "showValidationSummaryChange", tabIndexChange: "tabIndexChange", validationGroupChange: "validationGroupChange", visibleChange: "visibleChange", widthChange: "widthChange" }, []);



/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/item-dxi.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/item-dxi.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: DxiItemModuleNgFactory, RenderType_DxiItemComponent, View_DxiItemComponent_0, View_DxiItemComponent_Host_0, DxiItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxiItemModuleNgFactory", function() { return DxiItemModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DxiItemComponent", function() { return RenderType_DxiItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxiItemComponent_0", function() { return View_DxiItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxiItemComponent_Host_0", function() { return View_DxiItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxiItemComponentNgFactory", function() { return DxiItemComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_dxi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/* harmony import */ var _item_dxi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_dxi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_nested_option__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
/* harmony import */ var _core_template_host__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_template_host__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var DxiItemModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_item_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiItemModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _item_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiItemModule"], _item_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiItemModule"], [])]); });

var styles_DxiItemComponent = ["[_nghost-%COMP%] { display: block; }"];
var RenderType_DxiItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DxiItemComponent, data: {} });

function View_DxiItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_DxiItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "dxi-item", [], null, null, null, View_DxiItemComponent_0, RenderType_DxiItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4243456, [[1, 4]], 4, _item_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiItemComponent"], [[1, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"]], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { locationChildren: 1 })], null, null); }
var DxiItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("dxi-item", _item_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiItemComponent"], View_DxiItemComponent_Host_0, { disabled: "disabled", html: "html", icon: "icon", template: "template", text: "text", title: "title", visible: "visible", onClick: "onClick", type: "type", baseSize: "baseSize", box: "box", ratio: "ratio", shrink: "shrink", hint: "hint", beginGroup: "beginGroup", closeMenuOnClick: "closeMenuOnClick", items: "items", selectable: "selectable", selected: "selected", colSpan: "colSpan", cssClass: "cssClass", dataField: "dataField", editorOptions: "editorOptions", editorType: "editorType", helpText: "helpText", isRequired: "isRequired", itemType: "itemType", label: "label", name: "name", validationRules: "validationRules", visibleIndex: "visibleIndex", alignItemLabels: "alignItemLabels", caption: "caption", colCount: "colCount", colCountByScreen: "colCountByScreen", tabPanelOptions: "tabPanelOptions", tabs: "tabs", badge: "badge", tabTemplate: "tabTemplate", alignment: "alignment", buttonOptions: "buttonOptions", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", imageAlt: "imageAlt", imageSrc: "imageSrc", formatName: "formatName", formatValues: "formatValues", locateInMenu: "locateInMenu", location: "location", menuItemTemplate: "menuItemTemplate", options: "options", showText: "showText", widget: "widget", key: "key", showChevron: "showChevron", titleTemplate: "titleTemplate", menuTemplate: "menuTemplate", heightRatio: "heightRatio", widthRatio: "widthRatio", expanded: "expanded", hasItems: "hasItems", parentId: "parentId" }, {}, ["*"]);



/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: DxiValidationRuleModuleNgFactory, RenderType_DxiValidationRuleComponent, View_DxiValidationRuleComponent_0, View_DxiValidationRuleComponent_Host_0, DxiValidationRuleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxiValidationRuleModuleNgFactory", function() { return DxiValidationRuleModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DxiValidationRuleComponent", function() { return RenderType_DxiValidationRuleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxiValidationRuleComponent_0", function() { return View_DxiValidationRuleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DxiValidationRuleComponent_Host_0", function() { return View_DxiValidationRuleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxiValidationRuleComponentNgFactory", function() { return DxiValidationRuleComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
/* harmony import */ var _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var _core_nested_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_nested_option__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var DxiValidationRuleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiValidationRuleModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiValidationRuleModule"], _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiValidationRuleModule"], [])]); });

var styles_DxiValidationRuleComponent = [""];
var RenderType_DxiValidationRuleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DxiValidationRuleComponent, data: {} });

function View_DxiValidationRuleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_DxiValidationRuleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "dxi-validation-rule", [], null, null, null, View_DxiValidationRuleComponent_0, RenderType_DxiValidationRuleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiValidationRuleComponent"], [[1, _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"]], _core_nested_option__WEBPACK_IMPORTED_MODULE_2__["NestedOptionHost"]], null, null)], null, null); }
var DxiValidationRuleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("dxi-validation-rule", _validation_rule_dxi__WEBPACK_IMPORTED_MODULE_1__["DxiValidationRuleComponent"], View_DxiValidationRuleComponent_Host_0, { message: "message", trim: "trim", type: "type", max: "max", min: "min", reevaluate: "reevaluate", validationCallback: "validationCallback", comparisonTarget: "comparisonTarget", comparisonType: "comparisonType", pattern: "pattern" }, {}, []);



/***/ }),

/***/ "./src/app/views/devextreme/devextreme-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/devextreme/devextreme-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DevextremeRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevextremeRoutingModule", function() { return DevextremeRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/table.component */ "./src/app/views/devextreme/table/table.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/devextreme/form/form.component.ts");



var ɵ0 = {
    title: 'Devextreme'
}, ɵ1 = {
    title: 'Table'
}, ɵ2 = {
    title: 'Form'
};
var routes = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: 'table',
                component: _table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
                data: ɵ1
            },
            {
                path: 'form',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                data: ɵ2
            }
        ]
    }
];
var DevextremeRoutingModule = /** @class */ (function () {
    function DevextremeRoutingModule() {
    }
    return DevextremeRoutingModule;
}());




/***/ }),

/***/ "./src/app/views/devextreme/devextreme.module.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/views/devextreme/devextreme.module.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: DevextremeModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevextremeModuleNgFactory", function() { return DevextremeModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _devextreme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devextreme.module */ "./src/app/views/devextreme/devextreme.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _table_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component.ngfactory */ "./src/app/views/devextreme/table/table.component.ngfactory.js");
/* harmony import */ var _form_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component.ngfactory */ "./src/app/views/devextreme/form/form.component.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devextreme-routing.module */ "./src/app/views/devextreme/devextreme-routing.module.ts");
/* harmony import */ var devextreme_angular_core_integration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core/integration */ "./node_modules/devextreme-angular/core/integration.js");
/* harmony import */ var devextreme_angular_core_integration__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_integration__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var devextreme_angular_core_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular/core/template */ "./node_modules/devextreme-angular/core/template.js");
/* harmony import */ var devextreme_angular_core_template__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_template__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var devextreme_angular_ui_nested_column_chooser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/ui/nested/column-chooser */ "./node_modules/devextreme-angular/ui/nested/column-chooser.js");
/* harmony import */ var devextreme_angular_ui_nested_column_chooser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_column_chooser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var devextreme_angular_ui_nested_column_fixing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular/ui/nested/column-fixing */ "./node_modules/devextreme-angular/ui/nested/column-fixing.js");
/* harmony import */ var devextreme_angular_ui_nested_column_fixing__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_column_fixing__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var devextreme_angular_ui_nested_texts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular/ui/nested/texts */ "./node_modules/devextreme-angular/ui/nested/texts.js");
/* harmony import */ var devextreme_angular_ui_nested_texts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_texts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/ui/nested/column-dxi */ "./node_modules/devextreme-angular/ui/nested/column-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var devextreme_angular_ui_nested_button_dxi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular/ui/nested/button-dxi */ "./node_modules/devextreme-angular/ui/nested/button-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_button_dxi__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_button_dxi__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular/ui/nested/header-filter */ "./node_modules/devextreme-angular/ui/nested/header-filter.js");
/* harmony import */ var devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var devextreme_angular_ui_nested_lookup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular/ui/nested/lookup */ "./node_modules/devextreme-angular/ui/nested/lookup.js");
/* harmony import */ var devextreme_angular_ui_nested_lookup__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_lookup__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var devextreme_angular_ui_nested_format__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! devextreme-angular/ui/nested/format */ "./node_modules/devextreme-angular/ui/nested/format.js");
/* harmony import */ var devextreme_angular_ui_nested_format__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_format__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var devextreme_angular_ui_nested_form_item__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular/ui/nested/form-item */ "./node_modules/devextreme-angular/ui/nested/form-item.js");
/* harmony import */ var devextreme_angular_ui_nested_form_item__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_form_item__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var devextreme_angular_ui_nested_label__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! devextreme-angular/ui/nested/label */ "./node_modules/devextreme-angular/ui/nested/label.js");
/* harmony import */ var devextreme_angular_ui_nested_label__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_label__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! devextreme-angular/ui/nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var devextreme_angular_ui_nested_editing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! devextreme-angular/ui/nested/editing */ "./node_modules/devextreme-angular/ui/nested/editing.js");
/* harmony import */ var devextreme_angular_ui_nested_editing__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_editing__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var devextreme_angular_ui_nested_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! devextreme-angular/ui/nested/form */ "./node_modules/devextreme-angular/ui/nested/form.js");
/* harmony import */ var devextreme_angular_ui_nested_form__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_form__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var devextreme_angular_ui_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! devextreme-angular/ui/nested/col-count-by-screen */ "./node_modules/devextreme-angular/ui/nested/col-count-by-screen.js");
/* harmony import */ var devextreme_angular_ui_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! devextreme-angular/ui/nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var devextreme_angular_ui_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! devextreme-angular/ui/nested/tab-panel-options */ "./node_modules/devextreme-angular/ui/nested/tab-panel-options.js");
/* harmony import */ var devextreme_angular_ui_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var devextreme_angular_ui_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! devextreme-angular/ui/nested/tab-dxi */ "./node_modules/devextreme-angular/ui/nested/tab-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var devextreme_angular_ui_nested_button_options__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! devextreme-angular/ui/nested/button-options */ "./node_modules/devextreme-angular/ui/nested/button-options.js");
/* harmony import */ var devextreme_angular_ui_nested_button_options__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_button_options__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var devextreme_angular_ui_nested_popup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! devextreme-angular/ui/nested/popup */ "./node_modules/devextreme-angular/ui/nested/popup.js");
/* harmony import */ var devextreme_angular_ui_nested_popup__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_popup__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var devextreme_angular_ui_nested_animation__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! devextreme-angular/ui/nested/animation */ "./node_modules/devextreme-angular/ui/nested/animation.js");
/* harmony import */ var devextreme_angular_ui_nested_animation__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_animation__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var devextreme_angular_ui_nested_hide__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! devextreme-angular/ui/nested/hide */ "./node_modules/devextreme-angular/ui/nested/hide.js");
/* harmony import */ var devextreme_angular_ui_nested_hide__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_hide__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var devextreme_angular_ui_nested_show__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! devextreme-angular/ui/nested/show */ "./node_modules/devextreme-angular/ui/nested/show.js");
/* harmony import */ var devextreme_angular_ui_nested_show__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_show__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var devextreme_angular_ui_nested_position__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! devextreme-angular/ui/nested/position */ "./node_modules/devextreme-angular/ui/nested/position.js");
/* harmony import */ var devextreme_angular_ui_nested_position__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_position__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var devextreme_angular_ui_nested_at__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! devextreme-angular/ui/nested/at */ "./node_modules/devextreme-angular/ui/nested/at.js");
/* harmony import */ var devextreme_angular_ui_nested_at__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_at__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var devextreme_angular_ui_nested_boundary_offset__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! devextreme-angular/ui/nested/boundary-offset */ "./node_modules/devextreme-angular/ui/nested/boundary-offset.js");
/* harmony import */ var devextreme_angular_ui_nested_boundary_offset__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_boundary_offset__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var devextreme_angular_ui_nested_collision__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! devextreme-angular/ui/nested/collision */ "./node_modules/devextreme-angular/ui/nested/collision.js");
/* harmony import */ var devextreme_angular_ui_nested_collision__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_collision__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var devextreme_angular_ui_nested_my__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! devextreme-angular/ui/nested/my */ "./node_modules/devextreme-angular/ui/nested/my.js");
/* harmony import */ var devextreme_angular_ui_nested_my__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_my__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var devextreme_angular_ui_nested_offset__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! devextreme-angular/ui/nested/offset */ "./node_modules/devextreme-angular/ui/nested/offset.js");
/* harmony import */ var devextreme_angular_ui_nested_offset__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_offset__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var devextreme_angular_ui_nested_toolbar_item_dxi__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! devextreme-angular/ui/nested/toolbar-item-dxi */ "./node_modules/devextreme-angular/ui/nested/toolbar-item-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_toolbar_item_dxi__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_toolbar_item_dxi__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var devextreme_angular_ui_nested_export__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! devextreme-angular/ui/nested/export */ "./node_modules/devextreme-angular/ui/nested/export.js");
/* harmony import */ var devextreme_angular_ui_nested_export__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_export__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var devextreme_angular_ui_nested_filter_builder__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-builder */ "./node_modules/devextreme-angular/ui/nested/filter-builder.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_builder__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_builder__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var devextreme_angular_ui_nested_custom_operation_dxi__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! devextreme-angular/ui/nested/custom-operation-dxi */ "./node_modules/devextreme-angular/ui/nested/custom-operation-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_custom_operation_dxi__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_custom_operation_dxi__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var devextreme_angular_ui_nested_field_dxi__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! devextreme-angular/ui/nested/field-dxi */ "./node_modules/devextreme-angular/ui/nested/field-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_field_dxi__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_field_dxi__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var devextreme_angular_ui_nested_filter_operation_descriptions__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-operation-descriptions */ "./node_modules/devextreme-angular/ui/nested/filter-operation-descriptions.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_operation_descriptions__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_operation_descriptions__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var devextreme_angular_ui_nested_group_operation_descriptions__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! devextreme-angular/ui/nested/group-operation-descriptions */ "./node_modules/devextreme-angular/ui/nested/group-operation-descriptions.js");
/* harmony import */ var devextreme_angular_ui_nested_group_operation_descriptions__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_group_operation_descriptions__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var devextreme_angular_ui_nested_filter_builder_popup__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-builder-popup */ "./node_modules/devextreme-angular/ui/nested/filter-builder-popup.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_builder_popup__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_builder_popup__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var devextreme_angular_ui_nested_filter_panel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-panel */ "./node_modules/devextreme-angular/ui/nested/filter-panel.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_panel__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_panel__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-row */ "./node_modules/devextreme-angular/ui/nested/filter-row.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var devextreme_angular_ui_nested_operation_descriptions__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! devextreme-angular/ui/nested/operation-descriptions */ "./node_modules/devextreme-angular/ui/nested/operation-descriptions.js");
/* harmony import */ var devextreme_angular_ui_nested_operation_descriptions__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_operation_descriptions__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var devextreme_angular_ui_nested_grouping__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! devextreme-angular/ui/nested/grouping */ "./node_modules/devextreme-angular/ui/nested/grouping.js");
/* harmony import */ var devextreme_angular_ui_nested_grouping__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_grouping__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var devextreme_angular_ui_nested_group_panel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! devextreme-angular/ui/nested/group-panel */ "./node_modules/devextreme-angular/ui/nested/group-panel.js");
/* harmony import */ var devextreme_angular_ui_nested_group_panel__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_group_panel__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var devextreme_angular_ui_nested_load_panel__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! devextreme-angular/ui/nested/load-panel */ "./node_modules/devextreme-angular/ui/nested/load-panel.js");
/* harmony import */ var devextreme_angular_ui_nested_load_panel__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_load_panel__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var devextreme_angular_ui_nested_master_detail__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! devextreme-angular/ui/nested/master-detail */ "./node_modules/devextreme-angular/ui/nested/master-detail.js");
/* harmony import */ var devextreme_angular_ui_nested_master_detail__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_master_detail__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var devextreme_angular_ui_nested_pager__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! devextreme-angular/ui/nested/pager */ "./node_modules/devextreme-angular/ui/nested/pager.js");
/* harmony import */ var devextreme_angular_ui_nested_pager__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_pager__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var devextreme_angular_ui_nested_paging__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! devextreme-angular/ui/nested/paging */ "./node_modules/devextreme-angular/ui/nested/paging.js");
/* harmony import */ var devextreme_angular_ui_nested_paging__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_paging__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var devextreme_angular_ui_nested_remote_operations__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! devextreme-angular/ui/nested/remote-operations */ "./node_modules/devextreme-angular/ui/nested/remote-operations.js");
/* harmony import */ var devextreme_angular_ui_nested_remote_operations__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_remote_operations__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var devextreme_angular_ui_nested_scrolling__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! devextreme-angular/ui/nested/scrolling */ "./node_modules/devextreme-angular/ui/nested/scrolling.js");
/* harmony import */ var devextreme_angular_ui_nested_scrolling__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_scrolling__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! devextreme-angular/ui/nested/search-panel */ "./node_modules/devextreme-angular/ui/nested/search-panel.js");
/* harmony import */ var devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var devextreme_angular_ui_nested_selection__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! devextreme-angular/ui/nested/selection */ "./node_modules/devextreme-angular/ui/nested/selection.js");
/* harmony import */ var devextreme_angular_ui_nested_selection__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_selection__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var devextreme_angular_ui_nested_sort_by_group_summary_info_dxi__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! devextreme-angular/ui/nested/sort-by-group-summary-info-dxi */ "./node_modules/devextreme-angular/ui/nested/sort-by-group-summary-info-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_sort_by_group_summary_info_dxi__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_sort_by_group_summary_info_dxi__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var devextreme_angular_ui_nested_sorting__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! devextreme-angular/ui/nested/sorting */ "./node_modules/devextreme-angular/ui/nested/sorting.js");
/* harmony import */ var devextreme_angular_ui_nested_sorting__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_sorting__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var devextreme_angular_ui_nested_state_storing__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! devextreme-angular/ui/nested/state-storing */ "./node_modules/devextreme-angular/ui/nested/state-storing.js");
/* harmony import */ var devextreme_angular_ui_nested_state_storing__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_state_storing__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var devextreme_angular_ui_nested_summary__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! devextreme-angular/ui/nested/summary */ "./node_modules/devextreme-angular/ui/nested/summary.js");
/* harmony import */ var devextreme_angular_ui_nested_summary__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_summary__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var devextreme_angular_ui_nested_group_item_dxi__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! devextreme-angular/ui/nested/group-item-dxi */ "./node_modules/devextreme-angular/ui/nested/group-item-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_group_item_dxi__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_group_item_dxi__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var devextreme_angular_ui_nested_value_format__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! devextreme-angular/ui/nested/value-format */ "./node_modules/devextreme-angular/ui/nested/value-format.js");
/* harmony import */ var devextreme_angular_ui_nested_value_format__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_value_format__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var devextreme_angular_ui_nested_total_item_dxi__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! devextreme-angular/ui/nested/total-item-dxi */ "./node_modules/devextreme-angular/ui/nested/total-item-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_total_item_dxi__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_total_item_dxi__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! devextreme-angular/ui/data-grid */ "./node_modules/devextreme-angular/ui/data-grid.js");
/* harmony import */ var devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! devextreme-angular/ui/select-box */ "./node_modules/devextreme-angular/ui/select-box.js");
/* harmony import */ var devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "./node_modules/devextreme-angular/ui/check-box.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var devextreme_angular_ui_text_area__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! devextreme-angular/ui/text-area */ "./node_modules/devextreme-angular/ui/text-area.js");
/* harmony import */ var devextreme_angular_ui_text_area__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_text_area__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! devextreme-angular/ui/form */ "./node_modules/devextreme-angular/ui/form.js");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./table/table.component */ "./src/app/views/devextreme/table/table.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/devextreme/form/form.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































































var DevextremeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_devextreme_module__WEBPACK_IMPORTED_MODULE_1__["DevextremeModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _table_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TableComponentNgFactory"], _form_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FormComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__["DevextremeRoutingModule"], _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__["DevextremeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_core_integration__WEBPACK_IMPORTED_MODULE_9__["DxIntegrationModule"], devextreme_angular_core_integration__WEBPACK_IMPORTED_MODULE_9__["DxIntegrationModule"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_core_template__WEBPACK_IMPORTED_MODULE_11__["DxTemplateModule"], devextreme_angular_core_template__WEBPACK_IMPORTED_MODULE_11__["DxTemplateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_12__["DxButtonModule"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_12__["DxButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_column_chooser__WEBPACK_IMPORTED_MODULE_13__["DxoColumnChooserModule"], devextreme_angular_ui_nested_column_chooser__WEBPACK_IMPORTED_MODULE_13__["DxoColumnChooserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_column_fixing__WEBPACK_IMPORTED_MODULE_14__["DxoColumnFixingModule"], devextreme_angular_ui_nested_column_fixing__WEBPACK_IMPORTED_MODULE_14__["DxoColumnFixingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_texts__WEBPACK_IMPORTED_MODULE_15__["DxoTextsModule"], devextreme_angular_ui_nested_texts__WEBPACK_IMPORTED_MODULE_15__["DxoTextsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnModule"], devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_button_dxi__WEBPACK_IMPORTED_MODULE_17__["DxiButtonModule"], devextreme_angular_ui_nested_button_dxi__WEBPACK_IMPORTED_MODULE_17__["DxiButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_18__["DxoHeaderFilterModule"], devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_18__["DxoHeaderFilterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_lookup__WEBPACK_IMPORTED_MODULE_19__["DxoLookupModule"], devextreme_angular_ui_nested_lookup__WEBPACK_IMPORTED_MODULE_19__["DxoLookupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_format__WEBPACK_IMPORTED_MODULE_20__["DxoFormatModule"], devextreme_angular_ui_nested_format__WEBPACK_IMPORTED_MODULE_20__["DxoFormatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_form_item__WEBPACK_IMPORTED_MODULE_21__["DxoFormItemModule"], devextreme_angular_ui_nested_form_item__WEBPACK_IMPORTED_MODULE_21__["DxoFormItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_label__WEBPACK_IMPORTED_MODULE_22__["DxoLabelModule"], devextreme_angular_ui_nested_label__WEBPACK_IMPORTED_MODULE_22__["DxoLabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_23__["DxiValidationRuleModule"], devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_23__["DxiValidationRuleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_editing__WEBPACK_IMPORTED_MODULE_24__["DxoEditingModule"], devextreme_angular_ui_nested_editing__WEBPACK_IMPORTED_MODULE_24__["DxoEditingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_form__WEBPACK_IMPORTED_MODULE_25__["DxoFormModule"], devextreme_angular_ui_nested_form__WEBPACK_IMPORTED_MODULE_25__["DxoFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_26__["DxoColCountByScreenModule"], devextreme_angular_ui_nested_col_count_by_screen__WEBPACK_IMPORTED_MODULE_26__["DxoColCountByScreenModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_27__["DxiItemModule"], devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_27__["DxiItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_28__["DxoTabPanelOptionsModule"], devextreme_angular_ui_nested_tab_panel_options__WEBPACK_IMPORTED_MODULE_28__["DxoTabPanelOptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_29__["DxiTabModule"], devextreme_angular_ui_nested_tab_dxi__WEBPACK_IMPORTED_MODULE_29__["DxiTabModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_button_options__WEBPACK_IMPORTED_MODULE_30__["DxoButtonOptionsModule"], devextreme_angular_ui_nested_button_options__WEBPACK_IMPORTED_MODULE_30__["DxoButtonOptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_popup__WEBPACK_IMPORTED_MODULE_31__["DxoPopupModule"], devextreme_angular_ui_nested_popup__WEBPACK_IMPORTED_MODULE_31__["DxoPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_animation__WEBPACK_IMPORTED_MODULE_32__["DxoAnimationModule"], devextreme_angular_ui_nested_animation__WEBPACK_IMPORTED_MODULE_32__["DxoAnimationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_hide__WEBPACK_IMPORTED_MODULE_33__["DxoHideModule"], devextreme_angular_ui_nested_hide__WEBPACK_IMPORTED_MODULE_33__["DxoHideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_show__WEBPACK_IMPORTED_MODULE_34__["DxoShowModule"], devextreme_angular_ui_nested_show__WEBPACK_IMPORTED_MODULE_34__["DxoShowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_position__WEBPACK_IMPORTED_MODULE_35__["DxoPositionModule"], devextreme_angular_ui_nested_position__WEBPACK_IMPORTED_MODULE_35__["DxoPositionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_at__WEBPACK_IMPORTED_MODULE_36__["DxoAtModule"], devextreme_angular_ui_nested_at__WEBPACK_IMPORTED_MODULE_36__["DxoAtModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_boundary_offset__WEBPACK_IMPORTED_MODULE_37__["DxoBoundaryOffsetModule"], devextreme_angular_ui_nested_boundary_offset__WEBPACK_IMPORTED_MODULE_37__["DxoBoundaryOffsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_collision__WEBPACK_IMPORTED_MODULE_38__["DxoCollisionModule"], devextreme_angular_ui_nested_collision__WEBPACK_IMPORTED_MODULE_38__["DxoCollisionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_my__WEBPACK_IMPORTED_MODULE_39__["DxoMyModule"], devextreme_angular_ui_nested_my__WEBPACK_IMPORTED_MODULE_39__["DxoMyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_offset__WEBPACK_IMPORTED_MODULE_40__["DxoOffsetModule"], devextreme_angular_ui_nested_offset__WEBPACK_IMPORTED_MODULE_40__["DxoOffsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_toolbar_item_dxi__WEBPACK_IMPORTED_MODULE_41__["DxiToolbarItemModule"], devextreme_angular_ui_nested_toolbar_item_dxi__WEBPACK_IMPORTED_MODULE_41__["DxiToolbarItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_export__WEBPACK_IMPORTED_MODULE_42__["DxoExportModule"], devextreme_angular_ui_nested_export__WEBPACK_IMPORTED_MODULE_42__["DxoExportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_filter_builder__WEBPACK_IMPORTED_MODULE_43__["DxoFilterBuilderModule"], devextreme_angular_ui_nested_filter_builder__WEBPACK_IMPORTED_MODULE_43__["DxoFilterBuilderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_custom_operation_dxi__WEBPACK_IMPORTED_MODULE_44__["DxiCustomOperationModule"], devextreme_angular_ui_nested_custom_operation_dxi__WEBPACK_IMPORTED_MODULE_44__["DxiCustomOperationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_field_dxi__WEBPACK_IMPORTED_MODULE_45__["DxiFieldModule"], devextreme_angular_ui_nested_field_dxi__WEBPACK_IMPORTED_MODULE_45__["DxiFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_filter_operation_descriptions__WEBPACK_IMPORTED_MODULE_46__["DxoFilterOperationDescriptionsModule"], devextreme_angular_ui_nested_filter_operation_descriptions__WEBPACK_IMPORTED_MODULE_46__["DxoFilterOperationDescriptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_group_operation_descriptions__WEBPACK_IMPORTED_MODULE_47__["DxoGroupOperationDescriptionsModule"], devextreme_angular_ui_nested_group_operation_descriptions__WEBPACK_IMPORTED_MODULE_47__["DxoGroupOperationDescriptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_filter_builder_popup__WEBPACK_IMPORTED_MODULE_48__["DxoFilterBuilderPopupModule"], devextreme_angular_ui_nested_filter_builder_popup__WEBPACK_IMPORTED_MODULE_48__["DxoFilterBuilderPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_filter_panel__WEBPACK_IMPORTED_MODULE_49__["DxoFilterPanelModule"], devextreme_angular_ui_nested_filter_panel__WEBPACK_IMPORTED_MODULE_49__["DxoFilterPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_50__["DxoFilterRowModule"], devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_50__["DxoFilterRowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_operation_descriptions__WEBPACK_IMPORTED_MODULE_51__["DxoOperationDescriptionsModule"], devextreme_angular_ui_nested_operation_descriptions__WEBPACK_IMPORTED_MODULE_51__["DxoOperationDescriptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_grouping__WEBPACK_IMPORTED_MODULE_52__["DxoGroupingModule"], devextreme_angular_ui_nested_grouping__WEBPACK_IMPORTED_MODULE_52__["DxoGroupingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_group_panel__WEBPACK_IMPORTED_MODULE_53__["DxoGroupPanelModule"], devextreme_angular_ui_nested_group_panel__WEBPACK_IMPORTED_MODULE_53__["DxoGroupPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_load_panel__WEBPACK_IMPORTED_MODULE_54__["DxoLoadPanelModule"], devextreme_angular_ui_nested_load_panel__WEBPACK_IMPORTED_MODULE_54__["DxoLoadPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_master_detail__WEBPACK_IMPORTED_MODULE_55__["DxoMasterDetailModule"], devextreme_angular_ui_nested_master_detail__WEBPACK_IMPORTED_MODULE_55__["DxoMasterDetailModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_pager__WEBPACK_IMPORTED_MODULE_56__["DxoPagerModule"], devextreme_angular_ui_nested_pager__WEBPACK_IMPORTED_MODULE_56__["DxoPagerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_paging__WEBPACK_IMPORTED_MODULE_57__["DxoPagingModule"], devextreme_angular_ui_nested_paging__WEBPACK_IMPORTED_MODULE_57__["DxoPagingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_remote_operations__WEBPACK_IMPORTED_MODULE_58__["DxoRemoteOperationsModule"], devextreme_angular_ui_nested_remote_operations__WEBPACK_IMPORTED_MODULE_58__["DxoRemoteOperationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_scrolling__WEBPACK_IMPORTED_MODULE_59__["DxoScrollingModule"], devextreme_angular_ui_nested_scrolling__WEBPACK_IMPORTED_MODULE_59__["DxoScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_60__["DxoSearchPanelModule"], devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_60__["DxoSearchPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_selection__WEBPACK_IMPORTED_MODULE_61__["DxoSelectionModule"], devextreme_angular_ui_nested_selection__WEBPACK_IMPORTED_MODULE_61__["DxoSelectionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_sort_by_group_summary_info_dxi__WEBPACK_IMPORTED_MODULE_62__["DxiSortByGroupSummaryInfoModule"], devextreme_angular_ui_nested_sort_by_group_summary_info_dxi__WEBPACK_IMPORTED_MODULE_62__["DxiSortByGroupSummaryInfoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_sorting__WEBPACK_IMPORTED_MODULE_63__["DxoSortingModule"], devextreme_angular_ui_nested_sorting__WEBPACK_IMPORTED_MODULE_63__["DxoSortingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_state_storing__WEBPACK_IMPORTED_MODULE_64__["DxoStateStoringModule"], devextreme_angular_ui_nested_state_storing__WEBPACK_IMPORTED_MODULE_64__["DxoStateStoringModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_summary__WEBPACK_IMPORTED_MODULE_65__["DxoSummaryModule"], devextreme_angular_ui_nested_summary__WEBPACK_IMPORTED_MODULE_65__["DxoSummaryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_group_item_dxi__WEBPACK_IMPORTED_MODULE_66__["DxiGroupItemModule"], devextreme_angular_ui_nested_group_item_dxi__WEBPACK_IMPORTED_MODULE_66__["DxiGroupItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_value_format__WEBPACK_IMPORTED_MODULE_67__["DxoValueFormatModule"], devextreme_angular_ui_nested_value_format__WEBPACK_IMPORTED_MODULE_67__["DxoValueFormatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_nested_total_item_dxi__WEBPACK_IMPORTED_MODULE_68__["DxiTotalItemModule"], devextreme_angular_ui_nested_total_item_dxi__WEBPACK_IMPORTED_MODULE_68__["DxiTotalItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_69__["DxDataGridModule"], devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_69__["DxDataGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_70__["DxSelectBoxModule"], devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_70__["DxSelectBoxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_71__["DxCheckBoxModule"], devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_71__["DxCheckBoxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_text_area__WEBPACK_IMPORTED_MODULE_72__["DxTextAreaModule"], devextreme_angular_ui_text_area__WEBPACK_IMPORTED_MODULE_72__["DxTextAreaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_73__["DxFormModule"], devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_73__["DxFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _devextreme_module__WEBPACK_IMPORTED_MODULE_1__["DevextremeModule"], _devextreme_module__WEBPACK_IMPORTED_MODULE_1__["DevextremeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () { return [[{ path: "", data: _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"], children: [{ path: "table", component: _table_table_component__WEBPACK_IMPORTED_MODULE_74__["TableComponent"], data: _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ1"] }, { path: "form", component: _form_form_component__WEBPACK_IMPORTED_MODULE_75__["FormComponent"], data: _devextreme_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ2"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/devextreme/devextreme.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/devextreme/devextreme.module.ts ***!
  \*******************************************************/
/*! exports provided: DevextremeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevextremeModule", function() { return DevextremeModule; });
var DevextremeModule = /** @class */ (function () {
    function DevextremeModule() {
    }
    return DevextremeModule;
}());



/***/ }),

/***/ "./src/app/views/devextreme/form/_form.ts":
/*!************************************************!*\
  !*** ./src/app/views/devextreme/form/_form.ts ***!
  \************************************************/
/*! exports provided: Employee, FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());

var employee = {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990.'
        + ' He has led DevAv as its CEO since 2003.\r\n\r\nWhen not'
        + ' working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St., Los Angeles, CA',
    Phone: '360-684-1334'
};
var positions = [
    'HR Manager',
    'IT Manager',
    'CEO',
    'Controller',
    'Sales Manager',
    'Support Manager',
    'Shipping Manager'
];
var FormService = /** @class */ (function () {
    function FormService() {
    }
    FormService.prototype.getEmployee = function () {
        return employee;
    };
    FormService.prototype.getPositions = function () {
        return positions;
    };
    return FormService;
}());



/***/ }),

/***/ "./src/app/views/devextreme/form/form.component.css.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/views/devextreme/form/form.component.css.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#form-container[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n#button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 20px;\r\n}\r\n\r\n.long-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;\r\n    font-weight: 200;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGV2ZXh0cmVtZS9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksNkdBQTZHO0lBQzdHLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RldmV4dHJlbWUvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9ybS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb25nLXRpdGxlIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUgTGlnaHQnLCAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhIE5ldWUnLCAnVHJlYnVjaGV0IE1TJywgVmVyZGFuYTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */"];



/***/ }),

/***/ "./src/app/views/devextreme/form/form.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/views/devextreme/form/form.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_FormComponent, View_FormComponent_0, View_FormComponent_Host_0, FormComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormComponent", function() { return RenderType_FormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormComponent_0", function() { return View_FormComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormComponent_Host_0", function() { return View_FormComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentNgFactory", function() { return FormComponentNgFactory; });
/* harmony import */ var _form_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.css.shim.ngstyle */ "./src/app/views/devextreme/form/form.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_devextreme_angular_ui_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/form.ngfactory */ "./node_modules/devextreme-angular/ui/form.ngfactory.js");
/* harmony import */ var devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
/* harmony import */ var devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/* harmony import */ var devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
/* harmony import */ var devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/form */ "./node_modules/devextreme-angular/ui/form.js");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/item-dxi.ngfactory */ "./node_modules/devextreme-angular/ui/nested/item-dxi.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/nested/item-dxi */ "./node_modules/devextreme-angular/ui/nested/item-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_validation_rule_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/validation-rule-dxi.ngfactory */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/ui/nested/validation-rule-dxi */ "./node_modules/devextreme-angular/ui/nested/validation-rule-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_form */ "./src/app/views/devextreme/form/_form.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form.component */ "./src/app/views/devextreme/form/form.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_FormComponent = [_form_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FormComponent, data: {} });

function View_FormComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { myform: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 97, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 96, "div", [["class", "card"], ["id", "new47"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "long-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Employee Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 92, "div", [["id", "form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 91, "dx-form", [["id", "form"]], null, null, null, _node_modules_devextreme_angular_ui_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DxFormComponent_0"], _node_modules_devextreme_angular_ui_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DxFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 7323648, [[1, 4]], 1, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { colCount: [0, "colCount"], formData: [1, "formData"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { itemsChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "dxi-item", [["dataField", "ID"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4243456, [[3, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { locationChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "dxi-item", [["dataField", "FirstName"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4243456, [[7, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](30, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 8, "dxi-item", [["dataField", "LastName"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4243456, [[11, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](39, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 11, "dxi-item", [["dataField", "Position"], ["editorType", "dxSelectBox"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 4243456, [[15, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"], editorType: [2, "editorType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](48, { items: 0, value: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 2, "dxi-validation-rule", [["message", "Position is required"], ["type", "required"]], null, null, null, _node_modules_devextreme_angular_ui_nested_validation_rule_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_DxiValidationRuleComponent_0"], _node_modules_devextreme_angular_ui_nested_validation_rule_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_DxiValidationRuleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 49152, [[16, 4]], 0, devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_13__["DxiValidationRuleComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { message: [0, "message"], type: [1, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 8, "dxi-item", [["dataField", "BirthDate"], ["editorType", "dxDateBox"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 4243456, [[19, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"], editorType: [2, "editorType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](60, { disabled: 0, width: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 11, "dxi-item", [["dataField", "HireDate"], ["editorType", "dxDateBox"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 4243456, [[23, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"], editorType: [2, "editorType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](69, { value: 0, width: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, 0, 2, "dxi-validation-rule", [["message", "Hire date is required"], ["type", "required"]], null, null, null, _node_modules_devextreme_angular_ui_nested_validation_rule_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_DxiValidationRuleComponent_0"], _node_modules_devextreme_angular_ui_nested_validation_rule_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_DxiValidationRuleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 49152, [[24, 4]], 0, devextreme_angular_ui_nested_validation_rule_dxi__WEBPACK_IMPORTED_MODULE_13__["DxiValidationRuleComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { message: [0, "message"], type: [1, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 8, "dxi-item", [["dataField", "Notes"], ["editorType", "dxTextArea"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 4243456, [[27, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { colSpan: [0, "colSpan"], dataField: [1, "dataField"], editorOptions: [2, "editorOptions"], editorType: [3, "editorType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](81, { height: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 7, "dxi-item", [["dataField", "Address"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 4243456, [[31, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { locationChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 8, "dxi-item", [["dataField", "Phone"]], null, null, null, _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxiItemComponent_0"], _node_modules_devextreme_angular_ui_nested_item_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxiItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 4243456, [[35, 4], [2, 4]], 4, devextreme_angular_ui_nested_item_dxi__WEBPACK_IMPORTED_MODULE_10__["DxiItemComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dataField: [0, "dataField"], editorOptions: [1, "editorOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, { itemsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, { validationRulesChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, { tabsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, { locationChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](98, { mask: 0, maskRules: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = 2; var currVal_1 = _co.employee; _ck(_v, 12, 0, currVal_0, currVal_1); var currVal_2 = "ID"; _ck(_v, 17, 0, currVal_2); var currVal_3 = "FirstName"; var currVal_4 = _ck(_v, 30, 0, true); _ck(_v, 25, 0, currVal_3, currVal_4); var currVal_5 = "LastName"; var currVal_6 = _ck(_v, 39, 0, true); _ck(_v, 34, 0, currVal_5, currVal_6); var currVal_7 = "Position"; var currVal_8 = _ck(_v, 48, 0, _co.positions, ""); var currVal_9 = "dxSelectBox"; _ck(_v, 43, 0, currVal_7, currVal_8, currVal_9); var currVal_10 = "Position is required"; var currVal_11 = "required"; _ck(_v, 51, 0, currVal_10, currVal_11); var currVal_12 = "BirthDate"; var currVal_13 = _ck(_v, 60, 0, true, "100%"); var currVal_14 = "dxDateBox"; _ck(_v, 55, 0, currVal_12, currVal_13, currVal_14); var currVal_15 = "HireDate"; var currVal_16 = _ck(_v, 69, 0, null, "100%"); var currVal_17 = "dxDateBox"; _ck(_v, 64, 0, currVal_15, currVal_16, currVal_17); var currVal_18 = "Hire date is required"; var currVal_19 = "required"; _ck(_v, 72, 0, currVal_18, currVal_19); var currVal_20 = 2; var currVal_21 = "Notes"; var currVal_22 = _ck(_v, 81, 0, 90); var currVal_23 = "dxTextArea"; _ck(_v, 76, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = "Address"; _ck(_v, 85, 0, currVal_24); var currVal_25 = "Phone"; var currVal_26 = _ck(_v, 98, 0, "+1 (X00) 000-0000", _co.rules); _ck(_v, 93, 0, currVal_25, currVal_26); }, null); }
function View_FormComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-form", [], null, null, null, View_FormComponent_0, RenderType_FormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _form__WEBPACK_IMPORTED_MODULE_14__["FormService"], _form__WEBPACK_IMPORTED_MODULE_14__["FormService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, null, 0, _form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"], [_form__WEBPACK_IMPORTED_MODULE_14__["FormService"]], null, null)], null, null); }
var FormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-form", _form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"], View_FormComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/devextreme/form/form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/devextreme/form/form.component.ts ***!
  \*********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_form */ "./src/app/views/devextreme/form/_form.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);



var FormComponent = /** @class */ (function () {
    function FormComponent(service) {
        this.employee = service.getEmployee();
        this.positions = service.getPositions();
        this.rules = { 'X': /[02-9]/ };
    }
    FormComponent.prototype.ngAfterViewInit = function () {
        this.myform.instance.validate();
    };
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/views/devextreme/table/_table.ts":
/*!**************************************************!*\
  !*** ./src/app/views/devextreme/table/_table.ts ***!
  \**************************************************/
/*! exports provided: Order, TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());

var orders = [{
        'ID': 1,
        'OrderNumber': 35703,
        'OrderDate': '2017/04/10',
        'DeliveryDate': '2017/04/13 9:00',
        'SaleAmount': 11800,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Los Angeles, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 4,
        'OrderNumber': 35711,
        'OrderDate': '2017/01/12',
        'DeliveryDate': '2017/01/13 9:00',
        'SaleAmount': 16050,
        'Terms': '15 Days',
        'CustomerStoreCity': 'San Jose, CA',
        'Employee': 'Jim Packard'
    }, {
        'ID': 5,
        'OrderNumber': 35714,
        'OrderDate': '2017/01/22',
        'DeliveryDate': '2017/01/27 9:00',
        'SaleAmount': 14750,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 7,
        'OrderNumber': 35983,
        'OrderDate': '2017/02/07',
        'DeliveryDate': '2017/02/10 13:00',
        'SaleAmount': 3725,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Denver, CO',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 11,
        'OrderNumber': 38466,
        'OrderDate': '2017/03/01',
        'DeliveryDate': '2017/03/03 17:45',
        'SaleAmount': 7800,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Los Angeles, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 14,
        'OrderNumber': 39420,
        'OrderDate': '2017/02/15',
        'DeliveryDate': '2017/02/17 11:45',
        'SaleAmount': 20500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'San Jose, CA',
        'Employee': 'Jim Packard'
    }, {
        'ID': 15,
        'OrderNumber': 39874,
        'OrderDate': '2017/02/04',
        'DeliveryDate': '2017/02/10 15:00',
        'SaleAmount': 9050,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 18,
        'OrderNumber': 42847,
        'OrderDate': '2017/02/15',
        'DeliveryDate': '2017/02/17 8:30',
        'SaleAmount': 20400,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Casper, WY',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 30,
        'OrderNumber': 57429,
        'OrderDate': '2017/05/16',
        'DeliveryDate': '2017/05/19 11:45',
        'SaleAmount': 11050,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Phoenix, AZ',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 32,
        'OrderNumber': 58292,
        'OrderDate': '2017/05/13',
        'DeliveryDate': '2017/05/19 14:30',
        'SaleAmount': 13500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Los Angeles, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 36,
        'OrderNumber': 62427,
        'OrderDate': '2017/01/27',
        'DeliveryDate': '2017/02/03 18:00',
        'SaleAmount': 23500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 39,
        'OrderNumber': 65977,
        'OrderDate': '2017/02/05',
        'DeliveryDate': '2017/02/10 13:15',
        'SaleAmount': 2550,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Casper, WY',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 42,
        'OrderNumber': 68428,
        'OrderDate': '2017/04/10',
        'DeliveryDate': '2017/04/14 11:30',
        'SaleAmount': 10500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Los Angeles, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 43,
        'OrderNumber': 69477,
        'OrderDate': '2017/03/09',
        'DeliveryDate': '2017/03/10 12:00',
        'SaleAmount': 14200,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Anaheim, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 46,
        'OrderNumber': 72947,
        'OrderDate': '2017/01/14',
        'DeliveryDate': '2017/01/20 9:00',
        'SaleAmount': 13350,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 47,
        'OrderNumber': 73088,
        'OrderDate': '2017/03/25',
        'DeliveryDate': '2017/03/31 17:15',
        'SaleAmount': 8600,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Reno, NV',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 51,
        'OrderNumber': 77297,
        'OrderDate': '2017/04/30',
        'DeliveryDate': '2017/05/05 18:00',
        'SaleAmount': 10850,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Phoenix, AZ',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 56,
        'OrderNumber': 84744,
        'OrderDate': '2017/02/10',
        'DeliveryDate': '2017/02/17 14:00',
        'SaleAmount': 4650,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 57,
        'OrderNumber': 85028,
        'OrderDate': '2017/05/17',
        'DeliveryDate': '2017/05/19 12:00',
        'SaleAmount': 2575,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Reno, NV',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 59,
        'OrderNumber': 87297,
        'OrderDate': '2017/04/21',
        'DeliveryDate': '2017/04/28 9:00',
        'SaleAmount': 14200,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Casper, WY',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 65,
        'OrderNumber': 94726,
        'OrderDate': '2017/05/22',
        'DeliveryDate': '2017/05/26 13:30',
        'SaleAmount': 20500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'San Jose, CA',
        'Employee': 'Jim Packard'
    }, {
        'ID': 66,
        'OrderNumber': 95266,
        'OrderDate': '2017/03/10',
        'DeliveryDate': '2017/03/17 11:45',
        'SaleAmount': 9050,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 69,
        'OrderNumber': 98477,
        'OrderDate': '2017/01/01',
        'DeliveryDate': '2017/01/06 9:00',
        'SaleAmount': 23500,
        'Terms': '15 Days',
        'CustomerStoreCity': 'Casper, WY',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 78,
        'OrderNumber': 174884,
        'OrderDate': '2017/04/10',
        'DeliveryDate': '2017/04/14 8:30',
        'SaleAmount': 7200,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Denver, CO',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 81,
        'OrderNumber': 188877,
        'OrderDate': '2017/02/11',
        'DeliveryDate': '2017/02/17 16:00',
        'SaleAmount': 8750,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Phoenix, AZ',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 82,
        'OrderNumber': 191883,
        'OrderDate': '2017/02/05',
        'DeliveryDate': '2017/02/10 18:30',
        'SaleAmount': 9900,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Los Angeles, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 83,
        'OrderNumber': 192474,
        'OrderDate': '2017/01/21',
        'DeliveryDate': '2017/01/27 12:45',
        'SaleAmount': 12800,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Anaheim, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 84,
        'OrderNumber': 193847,
        'OrderDate': '2017/03/21',
        'DeliveryDate': '2017/03/24 9:00',
        'SaleAmount': 14100,
        'Terms': '30 Days',
        'CustomerStoreCity': 'San Diego, CA',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 85,
        'OrderNumber': 194877,
        'OrderDate': '2017/03/06',
        'DeliveryDate': '2017/03/10 18:15',
        'SaleAmount': 4750,
        'Terms': '30 Days',
        'CustomerStoreCity': 'San Jose, CA',
        'Employee': 'Jim Packard'
    }, {
        'ID': 86,
        'OrderNumber': 195746,
        'OrderDate': '2017/05/26',
        'DeliveryDate': '2017/06/02 17:00',
        'SaleAmount': 9050,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Las Vegas, NV',
        'Employee': 'Harv Mudd'
    }, {
        'ID': 87,
        'OrderNumber': 197474,
        'OrderDate': '2017/03/02',
        'DeliveryDate': '2017/03/03 11:00',
        'SaleAmount': 6400,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Reno, NV',
        'Employee': 'Clark Morgan'
    }, {
        'ID': 88,
        'OrderNumber': 198746,
        'OrderDate': '2017/05/09',
        'DeliveryDate': '2017/05/12 15:45',
        'SaleAmount': 15700,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Denver, CO',
        'Employee': 'Todd Hoffman'
    }, {
        'ID': 91,
        'OrderNumber': 214222,
        'OrderDate': '2017/02/08',
        'DeliveryDate': '2017/02/10 9:45',
        'SaleAmount': 11050,
        'Terms': '30 Days',
        'CustomerStoreCity': 'Phoenix, AZ',
        'Employee': 'Clark Morgan'
    }];
var TableService = /** @class */ (function () {
    function TableService() {
    }
    TableService.prototype.getOrders = function () {
        return orders;
    };
    return TableService;
}());



/***/ }),

/***/ "./src/app/views/devextreme/table/table.component.css.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/views/devextreme/table/table.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#gridContainer[_ngcontent-%COMP%] {\r\n    height: 440px;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n    background-color: rgba(191, 191, 191, 0.15);\r\n}\r\n.caption[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n.option[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n.option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n.option[_ngcontent-%COMP%]    > .dx-selectbox[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGV2ZXh0cmVtZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0Q0FBNEM7Q0FDL0M7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGV2ZXh0cmVtZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyaWRDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxufVxyXG4ub3B0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4xNSk7XHJcbn1cclxuLmNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ub3B0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm9wdGlvbiA+IHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5vcHRpb24gPiAuZHgtc2VsZWN0Ym94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/devextreme/table/table.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/views/devextreme/table/table.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_TableComponent, View_TableComponent_0, View_TableComponent_Host_0, TableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TableComponent", function() { return RenderType_TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TableComponent_0", function() { return View_TableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TableComponent_Host_0", function() { return View_TableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponentNgFactory", function() { return TableComponentNgFactory; });
/* harmony import */ var _table_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.component.css.shim.ngstyle */ "./src/app/views/devextreme/table/table.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_devextreme_angular_ui_data_grid_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/data-grid.ngfactory */ "./node_modules/devextreme-angular/ui/data-grid.ngfactory.js");
/* harmony import */ var devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
/* harmony import */ var devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
/* harmony import */ var devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
/* harmony import */ var devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
/* harmony import */ var devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/data-grid */ "./node_modules/devextreme-angular/ui/data-grid.js");
/* harmony import */ var devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_filter_row_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/filter-row.ngfactory */ "./node_modules/devextreme-angular/ui/nested/filter-row.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/nested/filter-row */ "./node_modules/devextreme-angular/ui/nested/filter-row.js");
/* harmony import */ var devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/header-filter.ngfactory */ "./node_modules/devextreme-angular/ui/nested/header-filter.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular/ui/nested/header-filter */ "./node_modules/devextreme-angular/ui/nested/header-filter.js");
/* harmony import */ var devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_search_panel_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/search-panel.ngfactory */ "./node_modules/devextreme-angular/ui/nested/search-panel.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular/ui/nested/search-panel */ "./node_modules/devextreme-angular/ui/nested/search-panel.js");
/* harmony import */ var devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/nested/column-dxi.ngfactory */ "./node_modules/devextreme-angular/ui/nested/column-dxi.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/ui/nested/column-dxi */ "./node_modules/devextreme-angular/ui/nested/column-dxi.js");
/* harmony import */ var devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _node_modules_devextreme_angular_ui_select_box_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/select-box.ngfactory */ "./node_modules/devextreme-angular/ui/select-box.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular/ui/select-box */ "./node_modules/devextreme-angular/ui/select-box.js");
/* harmony import */ var devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _node_modules_devextreme_angular_ui_check_box_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../node_modules/devextreme-angular/ui/check-box.ngfactory */ "./node_modules/devextreme-angular/ui/check-box.ngfactory.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "./node_modules/devextreme-angular/ui/check-box.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_table */ "./src/app/views/devextreme/table/_table.ts");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./table.component */ "./src/app/views/devextreme/table/table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var styles_TableComponent = [_table_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TableComponent, data: {} });

function View_TableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { dataGrid: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 108, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 107, "div", [["class", "card"], ["id", "new47"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Devextreme Table"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "card-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "a", [["class", "btn-setting"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "icon-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["aria-controls", "collapseExample"], ["aria-expanded", "false"], ["class", "btn-minimize"], ["data-target", ""], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fa fa-floppy-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["class", "btn-close"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["class", "icon-trash"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 96, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 64, "dx-data-grid", [["id", "gridContainer"]], null, null, null, _node_modules_devextreme_angular_ui_data_grid_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DxDataGridComponent_0"], _node_modules_devextreme_angular_ui_data_grid_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DxDataGridComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 7323648, [[1, 4]], 2, devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { dataSource: [0, "dataSource"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { sortByGroupSummaryInfoChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "dxo-filter-row", [], null, null, null, _node_modules_devextreme_angular_ui_nested_filter_row_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DxoFilterRowComponent_0"], _node_modules_devextreme_angular_ui_nested_filter_row_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DxoFilterRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, devextreme_angular_ui_nested_filter_row__WEBPACK_IMPORTED_MODULE_10__["DxoFilterRowComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { applyFilter: [0, "applyFilter"], visible: [1, "visible"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "dxo-header-filter", [], null, null, null, _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DxoHeaderFilterComponent_0"], _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DxoHeaderFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__["DxoHeaderFilterComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { visible: [0, "visible"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "dxo-search-panel", [["placeholder", "Search..."]], null, null, null, _node_modules_devextreme_angular_ui_nested_search_panel_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DxoSearchPanelComponent_0"], _node_modules_devextreme_angular_ui_nested_search_panel_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DxoSearchPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 49152, null, 0, devextreme_angular_ui_nested_search_panel__WEBPACK_IMPORTED_MODULE_14__["DxoSearchPanelComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { placeholder: [0, "placeholder"], visible: [1, "visible"], width: [2, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 8, "dxi-column", [["caption", "Invoice Number"], ["dataField", "OrderNumber"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, [[5, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { caption: [0, "caption"], dataField: [1, "dataField"], width: [2, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "dxo-header-filter", [], null, null, null, _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DxoHeaderFilterComponent_0"], _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DxoHeaderFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, null, 0, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__["DxoHeaderFilterComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { groupInterval: [0, "groupInterval"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 8, "dxi-column", [["alignment", "right"], ["dataField", "OrderDate"], ["dataType", "date"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, [[8, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { alignment: [0, "alignment"], calculateFilterExpression: [1, "calculateFilterExpression"], dataField: [2, "dataField"], dataType: [3, "dataType"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "dxo-header-filter", [], null, null, null, _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DxoHeaderFilterComponent_0"], _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DxoHeaderFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 49152, null, 0, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__["DxoHeaderFilterComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { dataSource: [0, "dataSource"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "dxi-column", [["alignment", "right"], ["dataField", "DeliveryDate"], ["dataType", "datetime"], ["format", "M/d/yyyy, HH:mm"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 49152, [[11, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { alignment: [0, "alignment"], dataField: [1, "dataField"], dataType: [2, "dataType"], format: [3, "format"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 8, "dxi-column", [["alignment", "right"], ["dataField", "SaleAmount"], ["format", "currency"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 49152, [[14, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { alignment: [0, "alignment"], dataField: [1, "dataField"], format: [2, "format"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "dxo-header-filter", [], null, null, null, _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DxoHeaderFilterComponent_0"], _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DxoHeaderFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 49152, null, 0, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__["DxoHeaderFilterComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { dataSource: [0, "dataSource"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 5, "dxi-column", [["dataField", "Employee"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, [[17, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { dataField: [0, "dataField"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 8, "dxi-column", [["caption", "City"], ["dataField", "CustomerStoreCity"]], null, null, null, _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DxiColumnComponent_0"], _node_modules_devextreme_angular_ui_nested_column_dxi_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DxiColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 49152, [[20, 4], [2, 4]], 3, devextreme_angular_ui_nested_column_dxi__WEBPACK_IMPORTED_MODULE_16__["DxiColumnComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { caption: [0, "caption"], dataField: [1, "dataField"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { buttonsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { columnsChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { validationRulesChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "dxo-header-filter", [], null, null, null, _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DxoHeaderFilterComponent_0"], _node_modules_devextreme_angular_ui_nested_header_filter_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DxoHeaderFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 0, devextreme_angular_ui_nested_header_filter__WEBPACK_IMPORTED_MODULE_12__["DxoHeaderFilterComponent"], [[1, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"]], { allowSearch: [0, "allowSearch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 30, "div", [["class", "options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "div", [["class", "caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Options"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 11, "div", [["class", "option"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply Filter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 8, "dx-select-box", [["displayExpr", "name"], ["id", "useFilterApplyButton"], ["valueExpr", "key"]], null, [[null, "valueChange"], [null, "onBlur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).change($event) !== false);
        ad = (pd_0 && ad);
    } if (("onBlur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).touched($event) !== false);
        ad = (pd_1 && ad);
    } if (("valueChange" === en)) {
        var pd_2 = ((_co.currentFilter = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_devextreme_angular_ui_select_box_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_DxSelectBoxComponent_0"], _node_modules_devextreme_angular_ui_select_box_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_DxSelectBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_19__["DxSelectBoxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 7323648, null, 2, devextreme_angular_ui_select_box__WEBPACK_IMPORTED_MODULE_19__["DxSelectBoxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_iterable_differ_helper__WEBPACK_IMPORTED_MODULE_5__["IterableDifferHelper"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { disabled: [0, "disabled"], displayExpr: [1, "displayExpr"], items: [2, "items"], value: [3, "value"], valueExpr: [4, "valueExpr"] }, { valueChange: "valueChange", onBlur: "onBlur" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { validator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { itemsChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 7, "div", [["class", "option"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 6, "dx-check-box", [["text", "Filter Row"]], null, [[null, "valueChange"], [null, "onValueChanged"], [null, "onBlur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).change($event) !== false);
        ad = (pd_0 && ad);
    } if (("onBlur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).touched($event) !== false);
        ad = (pd_1 && ad);
    } if (("valueChange" === en)) {
        var pd_2 = ((_co.showFilterRow = $event) !== false);
        ad = (pd_2 && ad);
    } if (("onValueChanged" === en)) {
        var pd_3 = (_co.clearFilter() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_devextreme_angular_ui_check_box_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_DxCheckBoxComponent_0"], _node_modules_devextreme_angular_ui_check_box_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_DxCheckBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__["DxCheckBoxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 7323648, null, 1, devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__["DxCheckBoxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { text: [0, "text"], value: [1, "value"] }, { onValueChanged: "onValueChanged", valueChange: "valueChange", onBlur: "onBlur" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, { validator: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 7, "div", [["class", "option"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 6, "dx-check-box", [["text", "Header Filter"]], null, [[null, "valueChange"], [null, "onValueChanged"], [null, "onBlur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).change($event) !== false);
        ad = (pd_0 && ad);
    } if (("onBlur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).touched($event) !== false);
        ad = (pd_1 && ad);
    } if (("valueChange" === en)) {
        var pd_2 = ((_co.showHeaderFilter = $event) !== false);
        ad = (pd_2 && ad);
    } if (("onValueChanged" === en)) {
        var pd_3 = (_co.clearFilter() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_devextreme_angular_ui_check_box_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_DxCheckBoxComponent_0"], _node_modules_devextreme_angular_ui_check_box_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_DxCheckBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__["DxCheckBoxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 7323648, null, 1, devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_21__["DxCheckBoxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], devextreme_angular_core_template_host__WEBPACK_IMPORTED_MODULE_3__["DxTemplateHost"], devextreme_angular_core_watcher_helper__WEBPACK_IMPORTED_MODULE_4__["WatcherHelper"], devextreme_angular_core_nested_option__WEBPACK_IMPORTED_MODULE_6__["NestedOptionHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { text: [0, "text"], value: [1, "value"] }, { onValueChanged: "onValueChanged", valueChange: "valueChange", onBlur: "onBlur" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { validator: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.orders; _ck(_v, 19, 0, currVal_0); var currVal_1 = _co.currentFilter; var currVal_2 = _co.showFilterRow; _ck(_v, 24, 0, currVal_1, currVal_2); var currVal_3 = _co.showHeaderFilter; _ck(_v, 27, 0, currVal_3); var currVal_4 = "Search..."; var currVal_5 = true; var currVal_6 = 240; _ck(_v, 30, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = "Invoice Number"; var currVal_8 = "OrderNumber"; var currVal_9 = 130; _ck(_v, 33, 0, currVal_7, currVal_8, currVal_9); var currVal_10 = 10000; _ck(_v, 39, 0, currVal_10); var currVal_11 = "right"; var currVal_12 = _co.calculateFilterExpression; var currVal_13 = "OrderDate"; var currVal_14 = "date"; var currVal_15 = 150; _ck(_v, 42, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.orderHeaderFilter; _ck(_v, 48, 0, currVal_16); var currVal_17 = "right"; var currVal_18 = "DeliveryDate"; var currVal_19 = "datetime"; var currVal_20 = "M/d/yyyy, HH:mm"; var currVal_21 = 180; _ck(_v, 51, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = "right"; var currVal_23 = "SaleAmount"; var currVal_24 = "currency"; _ck(_v, 57, 0, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.saleAmountHeaderFilter; _ck(_v, 63, 0, currVal_25); var currVal_26 = "Employee"; _ck(_v, 66, 0, currVal_26); var currVal_27 = "City"; var currVal_28 = "CustomerStoreCity"; _ck(_v, 72, 0, currVal_27, currVal_28); var currVal_29 = true; _ck(_v, 78, 0, currVal_29); var currVal_30 = !_co.showFilterRow; var currVal_31 = "name"; var currVal_32 = _co.applyFilterTypes; var currVal_33 = _co.currentFilter; var currVal_34 = "key"; _ck(_v, 91, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = "Filter Row"; var currVal_36 = _co.showFilterRow; _ck(_v, 100, 0, currVal_35, currVal_36); var currVal_37 = "Header Filter"; var currVal_38 = _co.showHeaderFilter; _ck(_v, 108, 0, currVal_37, currVal_38); }, null); }
function View_TableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-table", [], null, null, null, View_TableComponent_0, RenderType_TableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _table__WEBPACK_IMPORTED_MODULE_22__["TableService"], _table__WEBPACK_IMPORTED_MODULE_22__["TableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _table_component__WEBPACK_IMPORTED_MODULE_23__["TableComponent"], [_table__WEBPACK_IMPORTED_MODULE_22__["TableService"]], null, null)], null, null); }
var TableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-table", _table_component__WEBPACK_IMPORTED_MODULE_23__["TableComponent"], View_TableComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/devextreme/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/devextreme/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_table */ "./src/app/views/devextreme/table/_table.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);


var TableComponent = /** @class */ (function () {
    function TableComponent(service) {
        this.orders = service.getOrders();
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.applyFilterTypes = [{
                key: 'auto',
                name: 'Immediately'
            }, {
                key: 'onClick',
                name: 'On Button Click'
            }];
        this.saleAmountHeaderFilter = [{
                text: 'Less than $3000',
                value: ['SaleAmount', '<', 3000]
            }, {
                text: '$3000 - $5000',
                value: [
                    ['SaleAmount', '>=', 3000],
                    ['SaleAmount', '<', 5000]
                ]
            }, {
                text: '$5000 - $10000',
                value: [
                    ['SaleAmount', '>=', 5000],
                    ['SaleAmount', '<', 10000]
                ]
            }, {
                text: '$10000 - $20000',
                value: [
                    ['SaleAmount', '>=', 10000],
                    ['SaleAmount', '<', 20000]
                ]
            }, {
                text: 'Greater than $20000',
                value: ['SaleAmount', '>=', 20000]
            }];
        this.currentFilter = this.applyFilterTypes[0].key;
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }
    TableComponent.getOrderDay = function (rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    };
    TableComponent.prototype.calculateFilterExpression = function (value, selectedFilterOperations, target) {
        var column = this;
        if (target === 'headerFilter' && value === 'weekends') {
            return [[TableComponent.getOrderDay, '=', 0], 'or', [TableComponent.getOrderDay, '=', 6]];
        }
        return column.defaultCalculateFilterExpression.apply(this, arguments);
    };
    TableComponent.prototype.orderHeaderFilter = function (data) {
        data.dataSource.postProcess = function (results) {
            results.push({
                text: 'Weekends',
                value: 'weekends'
            });
            return results;
        };
    };
    TableComponent.prototype.clearFilter = function () {
        this.dataGrid.instance.clearFilter();
    };
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-devextreme-devextreme-module-ngfactory.js.map