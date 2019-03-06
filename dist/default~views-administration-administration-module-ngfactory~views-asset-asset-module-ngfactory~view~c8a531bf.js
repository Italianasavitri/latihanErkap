(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~c8a531bf"],{

/***/ "./node_modules/devextreme-angular/ui/nested/base/pivot-grid-data-source.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/base/pivot-grid-data-source.js ***!
  \**********************************************************************************/
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
var DxoPivotGridDataSource = (function (_super) {
    __extends(DxoPivotGridDataSource, _super);
    function DxoPivotGridDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoPivotGridDataSource.prototype, "fields", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "filter", {
        get: function () {
            return this._getOption('filter');
        },
        set: function (value) {
            this._setOption('filter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onChanged", {
        get: function () {
            return this._getOption('onChanged');
        },
        set: function (value) {
            this._setOption('onChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onFieldsPrepared", {
        get: function () {
            return this._getOption('onFieldsPrepared');
        },
        set: function (value) {
            this._setOption('onFieldsPrepared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadError", {
        get: function () {
            return this._getOption('onLoadError');
        },
        set: function (value) {
            this._setOption('onLoadError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadingChanged", {
        get: function () {
            return this._getOption('onLoadingChanged');
        },
        set: function (value) {
            this._setOption('onLoadingChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "remoteOperations", {
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "retrieveFields", {
        get: function () {
            return this._getOption('retrieveFields');
        },
        set: function (value) {
            this._setOption('retrieveFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "store", {
        get: function () {
            return this._getOption('store');
        },
        set: function (value) {
            this._setOption('store', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoPivotGridDataSource;
}(nested_option_1.NestedOption));
exports.DxoPivotGridDataSource = DxoPivotGridDataSource;
//# sourceMappingURL=pivot-grid-data-source.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/data-source.js":
/*!******************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/data-source.js ***!
  \******************************************************************/
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
var pivot_grid_data_source_1 = __webpack_require__(/*! ./base/pivot-grid-data-source */ "./node_modules/devextreme-angular/ui/nested/base/pivot-grid-data-source.js");
var field_dxi_1 = __webpack_require__(/*! ./field-dxi */ "./node_modules/devextreme-angular/ui/nested/field-dxi.js");
var DxoDataSourceComponent = (function (_super) {
    __extends(DxoDataSourceComponent, _super);
    function DxoDataSourceComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        if ((console) && (console.warn)) {
            console.warn('The nested \'dxo-data-source\' component is deprecated in 17.2. ' +
                'Use the \'dataSource\' option instead. ' +
                'See:\nhttps://github.com/DevExpress/devextreme-angular/blob/master/CHANGELOG.md#17.2.3');
        }
        return _this;
    }
    Object.defineProperty(DxoDataSourceComponent.prototype, "_optionPath", {
        get: function () {
            return 'dataSource';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDataSourceComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoDataSourceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-data-source',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'fields',
                        'filter',
                        'onChanged',
                        'onFieldsPrepared',
                        'onLoadError',
                        'onLoadingChanged',
                        'remoteOperations',
                        'retrieveFields',
                        'store'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoDataSourceComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDataSourceComponent.propDecorators = {
        "fieldsChildren": [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return field_dxi_1.DxiFieldComponent; }),] },],
    };
    return DxoDataSourceComponent;
}(pivot_grid_data_source_1.DxoPivotGridDataSource));
exports.DxoDataSourceComponent = DxoDataSourceComponent;
var DxoDataSourceModule = (function () {
    function DxoDataSourceModule() {
    }
    DxoDataSourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDataSourceComponent
                    ],
                    exports: [
                        DxoDataSourceComponent
                    ],
                },] },
    ];
    return DxoDataSourceModule;
}());
exports.DxoDataSourceModule = DxoDataSourceModule;
//# sourceMappingURL=data-source.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/field-chooser.js":
/*!********************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/field-chooser.js ***!
  \********************************************************************/
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
var DxoFieldChooserComponent = (function (_super) {
    __extends(DxoFieldChooserComponent, _super);
    function DxoFieldChooserComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFieldChooserComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "applyChangesMode", {
        get: function () {
            return this._getOption('applyChangesMode');
        },
        set: function (value) {
            this._setOption('applyChangesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "layout", {
        get: function () {
            return this._getOption('layout');
        },
        set: function (value) {
            this._setOption('layout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "_optionPath", {
        get: function () {
            return 'fieldChooser';
        },
        enumerable: true,
        configurable: true
    });
    DxoFieldChooserComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-field-chooser',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFieldChooserComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFieldChooserComponent.propDecorators = {
        "allowSearch": [{ type: core_1.Input },],
        "applyChangesMode": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "layout": [{ type: core_1.Input },],
        "searchTimeout": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
    };
    return DxoFieldChooserComponent;
}(nested_option_2.NestedOption));
exports.DxoFieldChooserComponent = DxoFieldChooserComponent;
var DxoFieldChooserModule = (function () {
    function DxoFieldChooserModule() {
    }
    DxoFieldChooserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFieldChooserComponent
                    ],
                    exports: [
                        DxoFieldChooserComponent
                    ],
                },] },
    ];
    return DxoFieldChooserModule;
}());
exports.DxoFieldChooserModule = DxoFieldChooserModule;
//# sourceMappingURL=field-chooser.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/field-panel.js":
/*!******************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/field-panel.js ***!
  \******************************************************************/
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
var DxoFieldPanelComponent = (function (_super) {
    __extends(DxoFieldPanelComponent, _super);
    function DxoFieldPanelComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFieldPanelComponent.prototype, "allowFieldDragging", {
        get: function () {
            return this._getOption('allowFieldDragging');
        },
        set: function (value) {
            this._setOption('allowFieldDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showColumnFields", {
        get: function () {
            return this._getOption('showColumnFields');
        },
        set: function (value) {
            this._setOption('showColumnFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showDataFields", {
        get: function () {
            return this._getOption('showDataFields');
        },
        set: function (value) {
            this._setOption('showDataFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showFilterFields", {
        get: function () {
            return this._getOption('showFilterFields');
        },
        set: function (value) {
            this._setOption('showFilterFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "showRowFields", {
        get: function () {
            return this._getOption('showRowFields');
        },
        set: function (value) {
            this._setOption('showRowFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'fieldPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoFieldPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-field-panel',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFieldPanelComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFieldPanelComponent.propDecorators = {
        "allowFieldDragging": [{ type: core_1.Input },],
        "showColumnFields": [{ type: core_1.Input },],
        "showDataFields": [{ type: core_1.Input },],
        "showFilterFields": [{ type: core_1.Input },],
        "showRowFields": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
    };
    return DxoFieldPanelComponent;
}(nested_option_2.NestedOption));
exports.DxoFieldPanelComponent = DxoFieldPanelComponent;
var DxoFieldPanelModule = (function () {
    function DxoFieldPanelModule() {
    }
    DxoFieldPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFieldPanelComponent
                    ],
                    exports: [
                        DxoFieldPanelComponent
                    ],
                },] },
    ];
    return DxoFieldPanelModule;
}());
exports.DxoFieldPanelModule = DxoFieldPanelModule;
//# sourceMappingURL=field-panel.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/nested/store.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/nested/store.js ***!
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
var DxoStoreComponent = (function (_super) {
    __extends(DxoStoreComponent, _super);
    function DxoStoreComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStoreComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStoreComponent.prototype, "_optionPath", {
        get: function () {
            return 'store';
        },
        enumerable: true,
        configurable: true
    });
    DxoStoreComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-store',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoStoreComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoStoreComponent.propDecorators = {
        "type": [{ type: core_1.Input },],
    };
    return DxoStoreComponent;
}(nested_option_2.NestedOption));
exports.DxoStoreComponent = DxoStoreComponent;
var DxoStoreModule = (function () {
    function DxoStoreModule() {
    }
    DxoStoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoStoreComponent
                    ],
                    exports: [
                        DxoStoreComponent
                    ],
                },] },
    ];
    return DxoStoreModule;
}());
exports.DxoStoreModule = DxoStoreModule;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/pivot-grid.js":
/*!**********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/pivot-grid.js ***!
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
var pivot_grid_1 = __webpack_require__(/*! devextreme/ui/pivot_grid */ "./node_modules/devextreme/ui/pivot_grid.js");
var component_1 = __webpack_require__(/*! ../core/component */ "./node_modules/devextreme-angular/core/component.js");
var template_host_1 = __webpack_require__(/*! ../core/template-host */ "./node_modules/devextreme-angular/core/template-host.js");
var integration_1 = __webpack_require__(/*! ../core/integration */ "./node_modules/devextreme-angular/core/integration.js");
var template_1 = __webpack_require__(/*! ../core/template */ "./node_modules/devextreme-angular/core/template.js");
var nested_option_1 = __webpack_require__(/*! ../core/nested-option */ "./node_modules/devextreme-angular/core/nested-option.js");
var watcher_helper_1 = __webpack_require__(/*! ../core/watcher-helper */ "./node_modules/devextreme-angular/core/watcher-helper.js");
var iterable_differ_helper_1 = __webpack_require__(/*! ../core/iterable-differ-helper */ "./node_modules/devextreme-angular/core/iterable-differ-helper.js");
var data_source_1 = __webpack_require__(/*! ./nested/data-source */ "./node_modules/devextreme-angular/ui/nested/data-source.js");
var field_dxi_1 = __webpack_require__(/*! ./nested/field-dxi */ "./node_modules/devextreme-angular/ui/nested/field-dxi.js");
var format_1 = __webpack_require__(/*! ./nested/format */ "./node_modules/devextreme-angular/ui/nested/format.js");
var header_filter_1 = __webpack_require__(/*! ./nested/header-filter */ "./node_modules/devextreme-angular/ui/nested/header-filter.js");
var store_1 = __webpack_require__(/*! ./nested/store */ "./node_modules/devextreme-angular/ui/nested/store.js");
var export_1 = __webpack_require__(/*! ./nested/export */ "./node_modules/devextreme-angular/ui/nested/export.js");
var field_chooser_1 = __webpack_require__(/*! ./nested/field-chooser */ "./node_modules/devextreme-angular/ui/nested/field-chooser.js");
var texts_1 = __webpack_require__(/*! ./nested/texts */ "./node_modules/devextreme-angular/ui/nested/texts.js");
var field_panel_1 = __webpack_require__(/*! ./nested/field-panel */ "./node_modules/devextreme-angular/ui/nested/field-panel.js");
var load_panel_1 = __webpack_require__(/*! ./nested/load-panel */ "./node_modules/devextreme-angular/ui/nested/load-panel.js");
var scrolling_1 = __webpack_require__(/*! ./nested/scrolling */ "./node_modules/devextreme-angular/ui/nested/scrolling.js");
var state_storing_1 = __webpack_require__(/*! ./nested/state-storing */ "./node_modules/devextreme-angular/ui/nested/state-storing.js");
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
var DxPivotGridComponent = (function (_super) {
    __extends(DxPivotGridComponent, _super);
    function DxPivotGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, platformId) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'allowExpandAllChange' },
            { emit: 'allowFilteringChange' },
            { emit: 'allowSortingChange' },
            { emit: 'allowSortingBySummaryChange' },
            { emit: 'dataFieldAreaChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'fieldChooserChange' },
            { emit: 'fieldPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hideEmptySummaryCellsChange' },
            { emit: 'hintChange' },
            { emit: 'loadPanelChange' },
            { emit: 'rowHeaderLayoutChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnGrandTotalsChange' },
            { emit: 'showColumnTotalsChange' },
            { emit: 'showRowGrandTotalsChange' },
            { emit: 'showRowTotalsChange' },
            { emit: 'showTotalsPriorChange' },
            { emit: 'stateStoringChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPivotGridComponent.prototype, "allowExpandAll", {
        get: /**
             * Allows an end-user to expand/collapse all header items within a header level.
             */
        function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
        get: /**
             * Allows a user to filter fields by selecting or deselecting values in the popup menu.
             */
        function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
        get: /**
             * Allows an end-user to change sorting options.
             */
        function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
        get: /**
             * Allows an end-user to sort columns by summary values.
             */
        function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
        get: /**
             * Specifies the area to which data field headers must belong.
             */
        function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
        get: /**
             * Specifies a data source for the pivot grid.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "export", {
        get: /**
             * Configures client-side exporting.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
        get: /**
             * The Field Chooser configuration options.
             */
        function () {
            return this._getOption('fieldChooser');
        },
        set: function (value) {
            this._setOption('fieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
        get: /**
             * Configures the field panel.
             */
        function () {
            return this._getOption('fieldPanel');
        },
        set: function (value) {
            this._setOption('fieldPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "headerFilter", {
        get: /**
             * Configures the header filter feature.
             */
        function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "height", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
        get: /**
             * Specifies whether or not to hide rows and columns with no data.
             */
        function () {
            return this._getOption('hideEmptySummaryCells');
        },
        set: function (value) {
            this._setOption('hideEmptySummaryCells', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
        get: /**
             * Specifies options configuring the load panel.
             */
        function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
        get: /**
             * Specifies the layout of items in the row header.
             */
        function () {
            return this._getOption('rowHeaderLayout');
        },
        set: function (value) {
            this._setOption('rowHeaderLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
        get: /**
             * A configuration object specifying scrolling options.
             */
        function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
        get: /**
             * Specifies whether the outer borders of the grid are visible or not.
             */
        function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
        get: /**
             * Specifies whether to display the Grand Total column.
             */
        function () {
            return this._getOption('showColumnGrandTotals');
        },
        set: function (value) {
            this._setOption('showColumnGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
        get: /**
             * Specifies whether to display the Total columns.
             */
        function () {
            return this._getOption('showColumnTotals');
        },
        set: function (value) {
            this._setOption('showColumnTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
        get: /**
             * Specifies whether to display the Grand Total row.
             */
        function () {
            return this._getOption('showRowGrandTotals');
        },
        set: function (value) {
            this._setOption('showRowGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
        get: /**
             * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
             */
        function () {
            return this._getOption('showRowTotals');
        },
        set: function (value) {
            this._setOption('showRowTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
        get: /**
             * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
             */
        function () {
            return this._getOption('showTotalsPrior');
        },
        set: function (value) {
            this._setOption('showTotalsPrior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
        get: /**
             * A configuration object specifying options related to state storing.
             */
        function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
        get: /**
             * Strings that can be changed or localized in the PivotGrid widget.
             */
        function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "width", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
        get: /**
             * Specifies whether long text in header items should be wrapped.
             */
        function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPivotGridComponent.prototype._createInstance = function (element, options) {
        return new pivot_grid_1.default(element, options);
    };
    DxPivotGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPivotGridComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxPivotGridComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPivotGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
        _super.prototype.clearChangedOptions.call(this);
    };
    DxPivotGridComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPivotGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-pivot-grid',
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
    DxPivotGridComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxPivotGridComponent.propDecorators = {
        "allowExpandAll": [{ type: core_1.Input },],
        "allowFiltering": [{ type: core_1.Input },],
        "allowSorting": [{ type: core_1.Input },],
        "allowSortingBySummary": [{ type: core_1.Input },],
        "dataFieldArea": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "export": [{ type: core_1.Input },],
        "fieldChooser": [{ type: core_1.Input },],
        "fieldPanel": [{ type: core_1.Input },],
        "headerFilter": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hideEmptySummaryCells": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "loadPanel": [{ type: core_1.Input },],
        "rowHeaderLayout": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "scrolling": [{ type: core_1.Input },],
        "showBorders": [{ type: core_1.Input },],
        "showColumnGrandTotals": [{ type: core_1.Input },],
        "showColumnTotals": [{ type: core_1.Input },],
        "showRowGrandTotals": [{ type: core_1.Input },],
        "showRowTotals": [{ type: core_1.Input },],
        "showTotalsPrior": [{ type: core_1.Input },],
        "stateStoring": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "texts": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "wordWrapEnabled": [{ type: core_1.Input },],
        "onCellClick": [{ type: core_1.Output },],
        "onCellPrepared": [{ type: core_1.Output },],
        "onContentReady": [{ type: core_1.Output },],
        "onContextMenuPreparing": [{ type: core_1.Output },],
        "onDisposing": [{ type: core_1.Output },],
        "onExported": [{ type: core_1.Output },],
        "onExporting": [{ type: core_1.Output },],
        "onFileSaving": [{ type: core_1.Output },],
        "onInitialized": [{ type: core_1.Output },],
        "onOptionChanged": [{ type: core_1.Output },],
        "allowExpandAllChange": [{ type: core_1.Output },],
        "allowFilteringChange": [{ type: core_1.Output },],
        "allowSortingChange": [{ type: core_1.Output },],
        "allowSortingBySummaryChange": [{ type: core_1.Output },],
        "dataFieldAreaChange": [{ type: core_1.Output },],
        "dataSourceChange": [{ type: core_1.Output },],
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "exportChange": [{ type: core_1.Output },],
        "fieldChooserChange": [{ type: core_1.Output },],
        "fieldPanelChange": [{ type: core_1.Output },],
        "headerFilterChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hideEmptySummaryCellsChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "loadPanelChange": [{ type: core_1.Output },],
        "rowHeaderLayoutChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "scrollingChange": [{ type: core_1.Output },],
        "showBordersChange": [{ type: core_1.Output },],
        "showColumnGrandTotalsChange": [{ type: core_1.Output },],
        "showColumnTotalsChange": [{ type: core_1.Output },],
        "showRowGrandTotalsChange": [{ type: core_1.Output },],
        "showRowTotalsChange": [{ type: core_1.Output },],
        "showTotalsPriorChange": [{ type: core_1.Output },],
        "stateStoringChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textsChange": [{ type: core_1.Output },],
        "visibleChange": [{ type: core_1.Output },],
        "widthChange": [{ type: core_1.Output },],
        "wordWrapEnabledChange": [{ type: core_1.Output },],
    };
    return DxPivotGridComponent;
}(component_1.DxComponent));
exports.DxPivotGridComponent = DxPivotGridComponent;
var DxPivotGridModule = (function () {
    function DxPivotGridModule() {
    }
    DxPivotGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        data_source_1.DxoDataSourceModule,
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        header_filter_1.DxoHeaderFilterModule,
                        store_1.DxoStoreModule,
                        export_1.DxoExportModule,
                        field_chooser_1.DxoFieldChooserModule,
                        texts_1.DxoTextsModule,
                        field_panel_1.DxoFieldPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        scrolling_1.DxoScrollingModule,
                        state_storing_1.DxoStateStoringModule,
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxPivotGridComponent
                    ],
                    exports: [
                        DxPivotGridComponent,
                        data_source_1.DxoDataSourceModule,
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        header_filter_1.DxoHeaderFilterModule,
                        store_1.DxoStoreModule,
                        export_1.DxoExportModule,
                        field_chooser_1.DxoFieldChooserModule,
                        texts_1.DxoTextsModule,
                        field_panel_1.DxoFieldPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        scrolling_1.DxoScrollingModule,
                        state_storing_1.DxoStateStoringModule,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxPivotGridModule;
}());
exports.DxPivotGridModule = DxPivotGridModule;
//# sourceMappingURL=pivot-grid.js.map

/***/ }),

/***/ "./node_modules/devextreme-angular/ui/text-box.js":
/*!********************************************************!*\
  !*** ./node_modules/devextreme-angular/ui/text-box.js ***!
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
var text_box_1 = __webpack_require__(/*! devextreme/ui/text_box */ "./node_modules/devextreme/ui/text_box.js");
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
    useExisting: core_1.forwardRef(function () { return DxTextBoxComponent; }),
    multi: true
};
/**
 * The TextBox is a widget that enables a user to enter and edit a single line of text.
 */
var DxTextBoxComponent = (function (_super) {
    __extends(DxTextBoxComponent, _super);
    function DxTextBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
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
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'maskChange' },
            { emit: 'maskCharChange' },
            { emit: 'maskInvalidMessageChange' },
            { emit: 'maskRulesChange' },
            { emit: 'maxLengthChange' },
            { emit: 'modeChange' },
            { emit: 'nameChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showMaskModeChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'useMaskedValueChange' },
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
    Object.defineProperty(DxTextBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "mask", {
        get: /**
             * The editor mask that specifies the format of the entered string.
             */
        function () {
            return this._getOption('mask');
        },
        set: function (value) {
            this._setOption('mask', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskChar", {
        get: /**
             * Specifies a mask placeholder character.
             */
        function () {
            return this._getOption('maskChar');
        },
        set: function (value) {
            this._setOption('maskChar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskInvalidMessage", {
        get: /**
             * A message displayed when the entered text does not match the specified pattern.
             */
        function () {
            return this._getOption('maskInvalidMessage');
        },
        set: function (value) {
            this._setOption('maskInvalidMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskRules", {
        get: /**
             * Specifies custom mask rules.
             */
        function () {
            return this._getOption('maskRules');
        },
        set: function (value) {
            this._setOption('maskRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maxLength", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "mode", {
        get: /**
             * The "mode" attribute value of the actual HTML input element representing the text box.
             */
        function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "placeholder", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "showMaskMode", {
        get: /**
             * Specifies when the widget shows the mask. Applies only if useMaskedValue is true.
             */
        function () {
            return this._getOption('showMaskMode');
        },
        set: function (value) {
            this._setOption('showMaskMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "spellcheck", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "stylingMode", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "useMaskedValue", {
        get: /**
             * Specifies whether the value should contain mask characters or not.
             */
        function () {
            return this._getOption('useMaskedValue');
        },
        set: function (value) {
            this._setOption('useMaskedValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "value", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "valueChangeEvent", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxTextBoxComponent.prototype, "width", {
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
    DxTextBoxComponent.prototype.change = function (_) { };
    DxTextBoxComponent.prototype._createInstance = function (element, options) {
        return new text_box_1.default(element, options);
    };
    DxTextBoxComponent.prototype.writeValue = function (value) {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    };
    DxTextBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTextBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTextBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTextBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTextBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTextBoxComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.validator) {
            this.validator.createInstanceOnInit = false;
        }
    };
    DxTextBoxComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        if (this.validator) {
            this.validator.createInstance(this.element.nativeElement);
        }
    };
    DxTextBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-text-box',
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
    DxTextBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
        { type: platform_browser_2.TransferState, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    DxTextBoxComponent.propDecorators = {
        "validator": [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        "accessKey": [{ type: core_1.Input },],
        "activeStateEnabled": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input },],
        "elementAttr": [{ type: core_1.Input },],
        "focusStateEnabled": [{ type: core_1.Input },],
        "height": [{ type: core_1.Input },],
        "hint": [{ type: core_1.Input },],
        "hoverStateEnabled": [{ type: core_1.Input },],
        "inputAttr": [{ type: core_1.Input },],
        "isValid": [{ type: core_1.Input },],
        "mask": [{ type: core_1.Input },],
        "maskChar": [{ type: core_1.Input },],
        "maskInvalidMessage": [{ type: core_1.Input },],
        "maskRules": [{ type: core_1.Input },],
        "maxLength": [{ type: core_1.Input },],
        "mode": [{ type: core_1.Input },],
        "name": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "readOnly": [{ type: core_1.Input },],
        "rtlEnabled": [{ type: core_1.Input },],
        "showClearButton": [{ type: core_1.Input },],
        "showMaskMode": [{ type: core_1.Input },],
        "spellcheck": [{ type: core_1.Input },],
        "stylingMode": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
        "useMaskedValue": [{ type: core_1.Input },],
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
        "disabledChange": [{ type: core_1.Output },],
        "elementAttrChange": [{ type: core_1.Output },],
        "focusStateEnabledChange": [{ type: core_1.Output },],
        "heightChange": [{ type: core_1.Output },],
        "hintChange": [{ type: core_1.Output },],
        "hoverStateEnabledChange": [{ type: core_1.Output },],
        "inputAttrChange": [{ type: core_1.Output },],
        "isValidChange": [{ type: core_1.Output },],
        "maskChange": [{ type: core_1.Output },],
        "maskCharChange": [{ type: core_1.Output },],
        "maskInvalidMessageChange": [{ type: core_1.Output },],
        "maskRulesChange": [{ type: core_1.Output },],
        "maxLengthChange": [{ type: core_1.Output },],
        "modeChange": [{ type: core_1.Output },],
        "nameChange": [{ type: core_1.Output },],
        "placeholderChange": [{ type: core_1.Output },],
        "readOnlyChange": [{ type: core_1.Output },],
        "rtlEnabledChange": [{ type: core_1.Output },],
        "showClearButtonChange": [{ type: core_1.Output },],
        "showMaskModeChange": [{ type: core_1.Output },],
        "spellcheckChange": [{ type: core_1.Output },],
        "stylingModeChange": [{ type: core_1.Output },],
        "tabIndexChange": [{ type: core_1.Output },],
        "textChange": [{ type: core_1.Output },],
        "useMaskedValueChange": [{ type: core_1.Output },],
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
    return DxTextBoxComponent;
}(component_1.DxComponent));
exports.DxTextBoxComponent = DxTextBoxComponent;
var DxTextBoxModule = (function () {
    function DxTextBoxModule() {
    }
    DxTextBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        integration_1.DxIntegrationModule,
                        template_1.DxTemplateModule,
                        platform_browser_1.BrowserTransferStateModule
                    ],
                    declarations: [
                        DxTextBoxComponent
                    ],
                    exports: [
                        DxTextBoxComponent,
                        template_1.DxTemplateModule
                    ]
                },] },
    ];
    return DxTextBoxModule;
}());
exports.DxTextBoxModule = DxTextBoxModule;
//# sourceMappingURL=text-box.js.map

/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid.js":
/*!**************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = __webpack_require__(/*! ./pivot_grid/ui.pivot_grid */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.js");
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/data_source.js":
/*!**************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/data_source.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/data_source.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var DataSourceModule = __webpack_require__(/*! ../../data/data_source/data_source */ "./node_modules/devextreme/data/data_source/data_source.js"),
    Store = __webpack_require__(/*! ../../data/abstract_store */ "./node_modules/devextreme/data/abstract_store.js"),
    commonUtils = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js"),
    typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    isDefined = typeUtils.isDefined,
    each = iteratorUtils.each,
    deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js"),
    EventsMixin = __webpack_require__(/*! ../../core/events_mixin */ "./node_modules/devextreme/core/events_mixin.js"),
    inflector = __webpack_require__(/*! ../../core/utils/inflector */ "./node_modules/devextreme/core/utils/inflector.js"),
    normalizeIndexes = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").normalizeIndexes,
    localStore = __webpack_require__(/*! ./local_store */ "./node_modules/devextreme/ui/pivot_grid/local_store.js"),
    RemoteStore = __webpack_require__(/*! ./remote_store */ "./node_modules/devextreme/ui/pivot_grid/remote_store.js"),
    xmlaStore = __webpack_require__(/*! ./xmla_store/xmla_store */ "./node_modules/devextreme/ui/pivot_grid/xmla_store/xmla_store.js"),
    summaryDisplayModes = __webpack_require__(/*! ./ui.pivot_grid.summary_display_modes */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.summary_display_modes.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    foreachTree = pivotGridUtils.foreachTree,
    foreachTreeAsync = pivotGridUtils.foreachTreeAsync,
    findField = pivotGridUtils.findField,
    formatValue = pivotGridUtils.formatValue,
    getCompareFunction = pivotGridUtils.getCompareFunction,
    createPath = pivotGridUtils.createPath,
    foreachDataLevel = pivotGridUtils.foreachDataLevel,
    setFieldProperty = pivotGridUtils.setFieldProperty,
    DESCRIPTION_NAME_BY_AREA = {
        row: "rows",
        column: "columns",
        data: "values",
        filter: "filters"
    },
    STATE_PROPERTIES = ["area", "areaIndex", "sortOrder", "filterType", "filterValues", "sortBy", "sortBySummaryField", "sortBySummaryPath", "expanded", "summaryType", "summaryDisplayMode"],
    CALCULATED_PROPERTIES = ["format", "selector", "customizeText", "caption"],
    ALL_CALCULATED_PROPERTIES = CALCULATED_PROPERTIES.concat(["allowSorting", "allowSortingBySummary", "allowFiltering", "allowExpandAll"]);

function createCaption(field) {
    var caption = field.dataField || field.groupName || "",
        summaryType = (field.summaryType || "").toLowerCase();
    if (typeUtils.isString(field.groupInterval)) {
        caption += "_" + field.groupInterval
    }
    if (summaryType && "custom" !== summaryType) {
        summaryType = summaryType.replace(/^./, summaryType[0].toUpperCase());
        if (caption.length) {
            summaryType = " (" + summaryType + ")"
        }
    } else {
        summaryType = ""
    }
    return inflector.titleize(caption) + summaryType
}

function resetFieldState(field, properties) {
    var initialProperties = field._initProperties || {};
    iteratorUtils.each(properties, function(_, prop) {
        if (initialProperties.hasOwnProperty(prop)) {
            field[prop] = initialProperties[prop]
        }
    })
}

function updateCalculatedFieldProperties(field, calculatedProperties) {
    resetFieldState(field, calculatedProperties);
    if (!isDefined(field.caption)) {
        setFieldProperty(field, "caption", createCaption(field))
    }
}

function areExpressionsUsed(dataFields) {
    return dataFields.some(function(field) {
        return field.summaryDisplayMode || field.calculateSummaryValue
    })
}

function isRunningTotalUsed(dataFields) {
    return dataFields.some(function(field) {
        return !!field.runningTotal
    })
}
module.exports = Class.inherit(function() {
    var findHeaderItem = function(headerItems, path) {
        if (headerItems._cacheByPath) {
            return headerItems._cacheByPath[path.join(".")] || null
        }
    };
    var getHeaderItemsLastIndex = function getHeaderItemsLastIndex(headerItems, grandTotalIndex) {
        var i, headerItem, lastIndex = -1;
        if (headerItems) {
            for (i = 0; i < headerItems.length; i++) {
                headerItem = headerItems[i];
                lastIndex = Math.max(lastIndex, headerItem.index);
                if (headerItem.children) {
                    lastIndex = Math.max(lastIndex, getHeaderItemsLastIndex(headerItem.children))
                } else {
                    if (headerItem.collapsedChildren) {
                        lastIndex = Math.max(lastIndex, getHeaderItemsLastIndex(headerItem.collapsedChildren))
                    }
                }
            }
        }
        if (isDefined(grandTotalIndex)) {
            lastIndex = Math.max(lastIndex, grandTotalIndex)
        }
        return lastIndex
    };
    var updateHeaderItemChildren = function(headerItems, headerItem, children, grandTotalIndex) {
        var index, applyingHeaderItemsCount = getHeaderItemsLastIndex(children) + 1,
            emptyIndex = getHeaderItemsLastIndex(headerItems, grandTotalIndex) + 1,
            applyingItemIndexesToCurrent = [],
            d = new Deferred;
        for (index = 0; index < applyingHeaderItemsCount; index++) {
            applyingItemIndexesToCurrent[index] = emptyIndex++
        }
        headerItem.children = children;
        when(foreachTreeAsync(headerItem.children, function(items) {
            items[0].index = applyingItemIndexesToCurrent[items[0].index]
        })).done(function() {
            d.resolve(applyingItemIndexesToCurrent)
        });
        return d
    };
    var updateHeaderItems = function(headerItems, newHeaderItems) {
        var d = new Deferred;
        var applyingItemIndexesToCurrent = [];
        when(foreachTreeAsync(headerItems, function(items) {
            delete items[0].collapsedChildren
        })).done(function() {
            when(foreachTreeAsync(newHeaderItems, function(items) {
                var headerItem = findHeaderItem(headerItems, createPath(items));
                if (headerItem) {
                    applyingItemIndexesToCurrent[items[0].index] = headerItem.index
                }
            })).done(function() {
                d.resolve(applyingItemIndexesToCurrent)
            })
        });
        return d
    };
    var updateDataSourceCells = function(dataSource, newDataSourceCells, newRowItemIndexesToCurrent, newColumnItemIndexesToCurrent) {
        var newRowIndex, newColumnIndex, newRowCells, newCell, rowIndex, columnIndex, dataSourceCells = dataSource.values;
        if (newDataSourceCells) {
            for (newRowIndex = 0; newRowIndex <= newDataSourceCells.length; newRowIndex++) {
                newRowCells = newDataSourceCells[newRowIndex];
                rowIndex = newRowItemIndexesToCurrent[newRowIndex];
                if (!isDefined(rowIndex)) {
                    rowIndex = dataSource.grandTotalRowIndex
                }
                if (newRowCells && isDefined(rowIndex)) {
                    if (!dataSourceCells[rowIndex]) {
                        dataSourceCells[rowIndex] = []
                    }
                    for (newColumnIndex = 0; newColumnIndex <= newRowCells.length; newColumnIndex++) {
                        newCell = newRowCells[newColumnIndex];
                        columnIndex = newColumnItemIndexesToCurrent[newColumnIndex];
                        if (!isDefined(columnIndex)) {
                            columnIndex = dataSource.grandTotalColumnIndex
                        }
                        if (isDefined(newCell) && isDefined(columnIndex)) {
                            dataSourceCells[rowIndex][columnIndex] = newCell
                        }
                    }
                }
            }
        }
    };

    function createLocalOrRemoteStore(dataSourceOptions, notifyProgress) {
        var StoreConstructor = dataSourceOptions.remoteOperations ? RemoteStore : localStore.LocalStore;
        return new StoreConstructor(extend(DataSourceModule.normalizeDataSourceOptions(dataSourceOptions), {
            onChanged: null,
            onLoadingChanged: null,
            onProgressChanged: notifyProgress
        }))
    }

    function createStore(dataSourceOptions, notifyProgress) {
        var store, storeOptions;
        if (typeUtils.isPlainObject(dataSourceOptions) && dataSourceOptions.load) {
            store = createLocalOrRemoteStore(dataSourceOptions, notifyProgress)
        } else {
            if (dataSourceOptions && !dataSourceOptions.store) {
                dataSourceOptions = {
                    store: dataSourceOptions
                }
            }
            storeOptions = dataSourceOptions.store;
            if ("xmla" === storeOptions.type) {
                store = new xmlaStore.XmlaStore(storeOptions)
            } else {
                if (typeUtils.isPlainObject(storeOptions) && storeOptions.type || storeOptions instanceof Store || Array.isArray(storeOptions)) {
                    store = createLocalOrRemoteStore(dataSourceOptions, notifyProgress)
                } else {
                    if (storeOptions instanceof Class) {
                        store = storeOptions
                    }
                }
            }
        }
        return store
    }

    function equalFields(fields, prevFields, count) {
        for (var i = 0; i < count; i++) {
            if (!fields[i] || !prevFields[i] || fields[i].index !== prevFields[i].index) {
                return false
            }
        }
        return true
    }

    function getExpandedPaths(dataSource, loadOptions, dimensionName, prevLoadOptions) {
        var result = [],
            fields = loadOptions && loadOptions[dimensionName] || [],
            prevFields = prevLoadOptions && prevLoadOptions[dimensionName] || [];
        foreachTree(dataSource[dimensionName], function(items) {
            var item = items[0],
                path = createPath(items);
            if (item.children && fields[path.length - 1] && !fields[path.length - 1].expanded) {
                if (path.length < fields.length && (!prevLoadOptions || equalFields(fields, prevFields, path.length))) {
                    result.push(path.slice())
                }
            }
        }, true);
        return result
    }

    function setFieldProperties(field, srcField, skipInitPropertySave, properties) {
        if (srcField) {
            each(properties, function(_, name) {
                if (skipInitPropertySave) {
                    field[name] = srcField[name]
                } else {
                    if (("summaryType" === name || "summaryDisplayMode" === name) && void 0 === srcField[name]) {
                        return
                    }
                    setFieldProperty(field, name, srcField[name])
                }
            })
        } else {
            resetFieldState(field, properties)
        }
        return field
    }

    function getFieldsState(fields, properties) {
        var result = [];
        each(fields, function(_, field) {
            result.push(setFieldProperties({
                dataField: field.dataField,
                name: field.name
            }, field, true, properties))
        });
        return result
    }

    function getFieldStateId(field) {
        if (field.name) {
            return field.name
        }
        return field.dataField + ""
    }

    function getFieldsById(fields, id) {
        var result = [];
        each(fields || [], function(_, field) {
            if (getFieldStateId(field) === id) {
                result.push(field)
            }
        });
        return result
    }

    function setFieldsStateCore(stateFields, fields) {
        stateFields = stateFields || [];
        each(fields, function(index, field) {
            setFieldProperties(field, stateFields[index], false, STATE_PROPERTIES);
            updateCalculatedFieldProperties(field, CALCULATED_PROPERTIES)
        });
        return fields
    }

    function setFieldsState(stateFields, fields) {
        stateFields = stateFields || [];
        var id, fieldsById = {};
        each(fields, function(_, field) {
            id = getFieldStateId(field);
            if (!fieldsById[id]) {
                fieldsById[id] = getFieldsById(fields, getFieldStateId(field))
            }
        });
        each(fieldsById, function(id, fields) {
            setFieldsStateCore(getFieldsById(stateFields, id), fields)
        });
        return fields
    }

    function getFieldsByGroup(fields, groupingField) {
        return fields.filter(function(field) {
            return field.groupName === groupingField.groupName && typeUtils.isNumeric(field.groupIndex) && false !== field.visible
        }).map(function(field) {
            return extend(field, {
                areaIndex: groupingField.areaIndex,
                area: groupingField.area,
                expanded: isDefined(field.expanded) ? field.expanded : groupingField.expanded,
                dataField: field.dataField || groupingField.dataField,
                dataType: field.dataType || groupingField.dataType,
                sortBy: field.sortBy || groupingField.sortBy,
                sortOrder: field.sortOrder || groupingField.sortOrder,
                sortBySummaryField: field.sortBySummaryField || groupingField.sortBySummaryField,
                sortBySummaryPath: field.sortBySummaryPath || groupingField.sortBySummaryPath,
                visible: field.visible || groupingField.visible,
                showTotals: isDefined(field.showTotals) ? field.showTotals : groupingField.showTotals,
                showGrandTotals: isDefined(field.showGrandTotals) ? field.showGrandTotals : groupingField.showGrandTotals
            })
        }).sort(function(a, b) {
            return a.groupIndex - b.groupIndex
        })
    }

    function sortFieldsByAreaIndex(fields) {
        fields.sort(function(field1, field2) {
            return field1.areaIndex - field2.areaIndex || field1.groupIndex - field2.groupIndex
        })
    }

    function isAreaField(field, area) {
        var canAddFieldInArea = "data" === area || false !== field.visible;
        return field.area === area && !isDefined(field.groupIndex) && canAddFieldInArea
    }

    function getFieldId(field, retrieveFieldsOptionValue) {
        var groupName = field.groupName || "";
        return (field.dataField || groupName) + (field.groupInterval ? groupName + field.groupInterval : "NOGROUP") + (retrieveFieldsOptionValue ? "" : groupName)
    }

    function mergeFields(fields, storeFields, retrieveFieldsOptionValue) {
        var result = [],
            fieldsDictionary = {},
            removedFields = {},
            mergedGroups = [],
            dataTypes = pivotGridUtils.getFieldsDataType(fields);
        if (storeFields) {
            each(storeFields, function(_, field) {
                fieldsDictionary[getFieldId(field, retrieveFieldsOptionValue)] = field
            });
            each(fields, function(_, field) {
                var mergedField, fieldKey = getFieldId(field, retrieveFieldsOptionValue),
                    storeField = fieldsDictionary[fieldKey] || removedFields[fieldKey];
                if (storeField) {
                    if (storeField._initProperties) {
                        resetFieldState(storeField, ALL_CALCULATED_PROPERTIES)
                    }
                    mergedField = extend({}, storeField, field, {
                        _initProperties: null
                    })
                } else {
                    fieldsDictionary[fieldKey] = mergedField = field
                }
                extend(mergedField, {
                    dataType: dataTypes[field.dataField]
                });
                delete fieldsDictionary[fieldKey];
                removedFields[fieldKey] = storeField;
                result.push(mergedField)
            });
            if (retrieveFieldsOptionValue) {
                each(fieldsDictionary, function(_, field) {
                    result.push(field)
                })
            }
        } else {
            result = fields
        }
        result.push.apply(result, mergedGroups);
        return result
    }

    function getFields(that) {
        var mergedFields, result = new Deferred,
            store = that._store,
            storeFields = store && store.getFields(that._fields);
        when(storeFields).done(function(storeFields) {
            that._storeFields = storeFields;
            mergedFields = mergeFields(that._fields, storeFields, that._retrieveFields);
            result.resolve(mergedFields)
        }).fail(result.reject);
        return result
    }

    function getSliceIndex(items, path) {
        var index = null,
            pathValue = (path || []).join(".");
        if (pathValue.length) {
            foreachTree(items, function(items) {
                var item = items[0],
                    itemPath = createPath(items).join("."),
                    textPath = iteratorUtils.map(items, function(item) {
                        return item.text
                    }).reverse().join(".");
                if (pathValue === itemPath || item.key && textPath === pathValue) {
                    index = items[0].index;
                    return false
                }
            })
        }
        return index
    }

    function getFieldSummaryValueSelector(field, dataSource, loadOptions, dimensionName) {
        var values = dataSource.values,
            sortBySummaryFieldIndex = findField(loadOptions.values, field.sortBySummaryField),
            areRows = "rows" === dimensionName,
            sortByDimension = areRows ? dataSource.columns : dataSource.rows,
            grandTotalIndex = areRows ? dataSource.grandTotalRowIndex : dataSource.grandTotalColumnIndex,
            sortBySummaryPath = field.sortBySummaryPath || [],
            sliceIndex = sortBySummaryPath.length ? getSliceIndex(sortByDimension, sortBySummaryPath) : grandTotalIndex;
        if (values && values.length && sortBySummaryFieldIndex >= 0 && isDefined(sliceIndex)) {
            return function(field) {
                var rowIndex = areRows ? field.index : sliceIndex,
                    columnIndex = areRows ? sliceIndex : field.index,
                    value = ((values[rowIndex] || [
                        []
                    ])[columnIndex] || [])[sortBySummaryFieldIndex];
                return isDefined(value) ? value : null
            }
        }
    }

    function getMemberForSortBy(sortBy, getAscOrder) {
        var member = "text";
        if ("none" === sortBy) {
            member = "index"
        } else {
            if (getAscOrder || "displayText" !== sortBy) {
                member = "value"
            }
        }
        return member
    }

    function getSortingMethod(field, dataSource, loadOptions, dimensionName, getAscOrder) {
        var sortOrder = getAscOrder ? "asc" : field.sortOrder,
            sortBy = getMemberForSortBy(field.sortBy, getAscOrder),
            defaultCompare = field.sortingMethod ? function(a, b) {
                return field.sortingMethod(a, b)
            } : getCompareFunction(function(item) {
                return item[sortBy]
            }),
            summaryValueSelector = !getAscOrder && getFieldSummaryValueSelector(field, dataSource, loadOptions, dimensionName),
            summaryCompare = summaryValueSelector && getCompareFunction(summaryValueSelector),
            sortingMethod = function(a, b) {
                var result = summaryCompare && summaryCompare(a, b) || defaultCompare(a, b);
                return "desc" === sortOrder ? -result : result
            };
        return sortingMethod
    }

    function sortDimension(dataSource, loadOptions, dimensionName, getAscOrder) {
        var fields = loadOptions[dimensionName] || [],
            baseIndex = loadOptions.headerName === dimensionName ? loadOptions.path.length : 0,
            sortingMethodByLevel = [];
        foreachDataLevel(dataSource[dimensionName], function(item, index) {
            var field = fields[index] || {},
                sortingMethod = sortingMethodByLevel[index] = sortingMethodByLevel[index] || getSortingMethod(field, dataSource, loadOptions, dimensionName, getAscOrder);
            item.sort(sortingMethod)
        }, baseIndex)
    }

    function sort(loadOptions, dataSource, getAscOrder) {
        sortDimension(dataSource, loadOptions, "rows", getAscOrder);
        sortDimension(dataSource, loadOptions, "columns", getAscOrder)
    }

    function formatHeaderItems(data, loadOptions, headerName) {
        return foreachTreeAsync(data[headerName], function(items) {
            var item = items[0];
            item.text = item.text || formatValue(item.value, loadOptions[headerName][createPath(items).length - 1])
        })
    }

    function formatHeaders(loadOptions, data) {
        return when(formatHeaderItems(data, loadOptions, "columns"), formatHeaderItems(data, loadOptions, "rows"))
    }

    function updateCache(headerItems) {
        var d = new Deferred;
        var cacheByPath = {};
        when(foreachTreeAsync(headerItems, function(items) {
            var path = createPath(items).join(".");
            cacheByPath[path] = items[0]
        })).done(d.resolve);
        headerItems._cacheByPath = cacheByPath;
        return d
    }

    function _getAreaFields(fields, area) {
        var areaFields = [];
        each(fields, function() {
            if (isAreaField(this, area)) {
                areaFields.push(this)
            }
        });
        return areaFields
    }
    return {
        ctor: function(options) {
            options = options || {};
            var that = this,
                store = createStore(options, function(progress) {
                    that.fireEvent("progressChanged", [progress])
                });
            that._store = store;
            that._data = {
                rows: [],
                columns: [],
                values: []
            };
            that._loadingCount = 0;
            each(["changed", "loadError", "loadingChanged", "progressChanged", "fieldsPrepared", "expandValueChanging"], function(_, eventName) {
                var optionName = "on" + eventName[0].toUpperCase() + eventName.slice(1);
                if (options.hasOwnProperty(optionName)) {
                    this.on(eventName, options[optionName])
                }
            }.bind(this));
            that._retrieveFields = isDefined(options.retrieveFields) ? options.retrieveFields : true;
            that._fields = options.fields || [];
            that._descriptions = options.descriptions ? extend(that._createDescriptions(), options.descriptions) : void 0;
            if (!store) {
                extend(true, that._data, options.store || options)
            }
        },
        getData: function() {
            return this._data
        },
        getAreaFields: function(area, collectGroups) {
            var descriptions, areaFields = [];
            if (collectGroups || "data" === area) {
                areaFields = _getAreaFields(this._fields, area);
                sortFieldsByAreaIndex(areaFields)
            } else {
                descriptions = this._descriptions || {};
                areaFields = descriptions[DESCRIPTION_NAME_BY_AREA[area]] || []
            }
            return areaFields
        },
        fields: function(_fields) {
            var that = this;
            if (_fields) {
                that._fields = mergeFields(_fields, that._storeFields, that._retrieveFields);
                that._fieldsPrepared(that._fields)
            }
            return that._fields
        },
        field: function field(id, options) {
            var levels, that = this,
                fields = that._fields,
                field = fields && fields[typeUtils.isNumeric(id) ? id : findField(fields, id)];
            if (field && options) {
                each(options, function(optionName, optionValue) {
                    var isInitialization = inArray(optionName, STATE_PROPERTIES) < 0;
                    setFieldProperty(field, optionName, optionValue, isInitialization);
                    if ("sortOrder" === optionName) {
                        levels = field.levels || [];
                        for (var i = 0; i < levels.length; i++) {
                            levels[i][optionName] = optionValue
                        }
                    }
                });
                updateCalculatedFieldProperties(field, CALCULATED_PROPERTIES);
                that._descriptions = that._createDescriptions(field)
            }
            return field
        },
        getFieldValues: function(index) {
            var that = this,
                field = this._fields && this._fields[index],
                store = this.store(),
                loadFields = [],
                loadOptions = {
                    columns: loadFields,
                    rows: [],
                    values: this.getAreaFields("data"),
                    filters: [],
                    skipValues: true
                },
                d = new Deferred;
            if (field && store) {
                each(field.levels || [field], function() {
                    loadFields.push(extend({}, this, {
                        expanded: true,
                        filterValues: null,
                        sortOrder: "asc",
                        sortBySummaryField: null
                    }))
                });
                store.load(loadOptions).done(function(data) {
                    formatHeaders(loadOptions, data);
                    that._sort(loadOptions, data);
                    d.resolve(data.columns)
                }).fail(d)
            } else {
                d.reject()
            }
            return d
        },
        reload: function() {
            return this.load({
                reload: true
            })
        },
        filter: function() {
            var store = this._store;
            return store.filter.apply(store, arguments)
        },
        load: function(options) {
            var that = this,
                d = new Deferred;
            options = options || {};
            that.beginLoading();
            d.fail(function(e) {
                that.fireEvent("loadError", [e])
            }).always(function() {
                that.endLoading()
            });

            function loadTask() {
                that._delayedLoadTask = void 0;
                if (!that._descriptions) {
                    when(getFields(that)).done(function(fields) {
                        that._fieldsPrepared(fields);
                        that._loadCore(options, d)
                    }).fail(d.reject).fail(that._loadErrorHandler)
                } else {
                    that._loadCore(options, d)
                }
            }
            if (that.store()) {
                that._delayedLoadTask = commonUtils.executeAsync(loadTask)
            } else {
                loadTask()
            }
            return d
        },
        createDrillDownDataSource: function(params) {
            return this._store.createDrillDownDataSource(this._descriptions, params)
        },
        _createDescriptions: function(currentField) {
            var that = this,
                fields = that.fields(),
                descriptions = {
                    rows: [],
                    columns: [],
                    values: [],
                    filters: []
                };
            each(["row", "column", "data", "filter"], function(_, areaName) {
                normalizeIndexes(_getAreaFields(fields, areaName), "areaIndex", currentField)
            });
            each(fields || [], function(_, field) {
                var descriptionName = DESCRIPTION_NAME_BY_AREA[field.area],
                    dimension = descriptions[descriptionName],
                    groupName = field.groupName;
                if (groupName && !typeUtils.isNumeric(field.groupIndex)) {
                    field.levels = getFieldsByGroup(fields, field)
                }
                if (!dimension || groupName && typeUtils.isNumeric(field.groupIndex) || false === field.visible && "data" !== field.area && "filter" !== field.area) {
                    return
                }
                if (field.levels && dimension !== descriptions.filters && dimension !== descriptions.values) {
                    dimension.push.apply(dimension, field.levels);
                    if (field.filterValues && field.filterValues.length) {
                        descriptions.filters.push(field)
                    }
                } else {
                    dimension.push(field)
                }
            });
            each(descriptions, function(_, fields) {
                sortFieldsByAreaIndex(fields)
            });
            var indices = {};
            each(descriptions.values, function(_, field) {
                var expression = field.calculateSummaryValue;
                if (typeUtils.isFunction(expression)) {
                    var summaryCell = summaryDisplayModes.createMockSummaryCell(descriptions, fields, indices);
                    expression(summaryCell)
                }
            });
            return descriptions
        },
        _fieldsPrepared: function(fields) {
            var that = this;
            that._fields = fields;
            each(fields, function(index, field) {
                field.index = index;
                updateCalculatedFieldProperties(field, ALL_CALCULATED_PROPERTIES)
            });
            var currentFieldState = getFieldsState(fields, ["caption"]);
            that.fireEvent("fieldsPrepared", [fields]);
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].caption !== currentFieldState[i].caption) {
                    setFieldProperty(fields[i], "caption", fields[i].caption, true)
                }
            }
            that._descriptions = that._createDescriptions()
        },
        isLoading: function() {
            return this._loadingCount > 0
        },
        state: function(_state, skipLoading) {
            var that = this;
            if (arguments.length) {
                _state = extend({
                    rowExpandedPaths: [],
                    columnExpandedPaths: []
                }, _state);
                if (!that._descriptions) {
                    that.beginLoading();
                    when(getFields(that)).done(function(fields) {
                        that._fields = setFieldsState(_state.fields, fields);
                        that._fieldsPrepared(fields);
                        !skipLoading && that.load(_state)
                    }).always(function() {
                        that.endLoading()
                    })
                } else {
                    that._fields = setFieldsState(_state.fields, that._fields);
                    that._descriptions = that._createDescriptions();
                    !skipLoading && that.load(_state)
                }
            } else {
                return {
                    fields: getFieldsState(that._fields, STATE_PROPERTIES),
                    columnExpandedPaths: getExpandedPaths(that._data, that._descriptions, "columns"),
                    rowExpandedPaths: getExpandedPaths(that._data, that._descriptions, "rows")
                }
            }
        },
        beginLoading: function() {
            this._changeLoadingCount(1)
        },
        endLoading: function() {
            this._changeLoadingCount(-1)
        },
        _changeLoadingCount: function(increment) {
            var newLoading, oldLoading = this.isLoading();
            this._loadingCount += increment;
            newLoading = this.isLoading();
            if (oldLoading ^ newLoading) {
                this.fireEvent("loadingChanged", [newLoading])
            }
        },
        _loadCore: function(options, deferred) {
            var that = this,
                store = this._store,
                descriptions = this._descriptions,
                headerName = DESCRIPTION_NAME_BY_AREA[options.area];
            options = options || {};
            if (store) {
                extend(options, descriptions);
                options.columnExpandedPaths = options.columnExpandedPaths || getExpandedPaths(this._data, options, "columns", that._lastLoadOptions);
                options.rowExpandedPaths = options.rowExpandedPaths || getExpandedPaths(this._data, options, "rows", that._lastLoadOptions);
                if (headerName) {
                    options.headerName = headerName
                }
                that.beginLoading();
                deferred.always(function() {
                    that.endLoading()
                });
                when(store.load(options)).done(function(data) {
                    if (options.path) {
                        that.applyPartialDataSource(options.area, options.path, data, deferred)
                    } else {
                        extend(that._data, data);
                        that._lastLoadOptions = options;
                        that._update(deferred)
                    }
                }).fail(deferred.reject)
            } else {
                that._update(deferred)
            }
        },
        _sort: function(descriptions, data, getAscOrder) {
            var store = this._store;
            if (store) {
                sort(descriptions, data, getAscOrder)
            }
        },
        isEmpty: function() {
            var dataFields = this.getAreaFields("data"),
                data = this.getData();
            return !dataFields.length || !data.values.length
        },
        _update: function(deferred) {
            var that = this,
                descriptions = that._descriptions,
                loadedData = that._data,
                dataFields = descriptions.values,
                expressionsUsed = areExpressionsUsed(dataFields);
            when(formatHeaders(descriptions, loadedData), updateCache(loadedData.rows), updateCache(loadedData.columns)).done(function() {
                if (expressionsUsed) {
                    that._sort(descriptions, loadedData, expressionsUsed);
                    !that.isEmpty() && summaryDisplayModes.applyDisplaySummaryMode(descriptions, loadedData)
                }
                that._sort(descriptions, loadedData);
                !that.isEmpty() && isRunningTotalUsed(dataFields) && summaryDisplayModes.applyRunningTotal(descriptions, loadedData);
                that._data = loadedData;
                when(deferred).done(function() {
                    that.fireEvent("changed");
                    if (isDefined(that._data.grandTotalRowIndex)) {
                        loadedData.grandTotalRowIndex = that._data.grandTotalRowIndex
                    }
                    if (isDefined(that._data.grandTotalColumnIndex)) {
                        loadedData.grandTotalColumnIndex = that._data.grandTotalColumnIndex
                    }
                });
                deferred && deferred.resolve(that._data)
            });
            return deferred
        },
        store: function() {
            return this._store
        },
        collapseHeaderItem: function(area, path) {
            var that = this,
                headerItems = "column" === area ? that._data.columns : that._data.rows,
                headerItem = findHeaderItem(headerItems, path),
                field = that.getAreaFields(area)[path.length - 1];
            if (headerItem && headerItem.children) {
                that.fireEvent("expandValueChanging", [{
                    area: area,
                    path: path,
                    expanded: false
                }]);
                if (field) {
                    field.expanded = false
                }
                headerItem.collapsedChildren = headerItem.children;
                delete headerItem.children;
                that._update();
                return true
            }
            return false
        },
        collapseAll: function(id) {
            var dataChanged = false,
                field = this.field(id) || {},
                areaOffset = inArray(field, this.getAreaFields(field.area));
            field.expanded = false;
            foreachTree(this._data[field.area + "s"], function(items) {
                var item = items[0],
                    path = createPath(items);
                if (item && item.children && areaOffset === path.length - 1) {
                    item.collapsedChildren = item.children;
                    delete item.children;
                    dataChanged = true
                }
            }, true);
            dataChanged && this._update()
        },
        expandAll: function(id) {
            var field = this.field(id);
            if (field && field.area) {
                field.expanded = true;
                this.load()
            }
        },
        expandHeaderItem: function(area, path) {
            var hasCache, options, that = this,
                headerItems = "column" === area ? that._data.columns : that._data.rows,
                headerItem = findHeaderItem(headerItems, path);
            if (headerItem && !headerItem.children) {
                hasCache = !!headerItem.collapsedChildren;
                options = {
                    area: area,
                    path: path,
                    expanded: true,
                    needExpandData: !hasCache
                };
                that.fireEvent("expandValueChanging", [options]);
                if (hasCache) {
                    headerItem.children = headerItem.collapsedChildren;
                    delete headerItem.collapsedChildren;
                    that._update()
                } else {
                    that.load(options)
                }
                return hasCache
            }
            return false
        },
        applyPartialDataSource: function(area, path, dataSource, deferred) {
            var headerItem, newRowItemIndexesToCurrent, newColumnItemIndexesToCurrent, that = this,
                loadedData = that._data,
                headerItems = "column" === area ? loadedData.columns : loadedData.rows;
            if (dataSource && dataSource.values) {
                dataSource.rows = dataSource.rows || [];
                dataSource.columns = dataSource.columns || [];
                headerItem = findHeaderItem(headerItems, path);
                if (headerItem) {
                    if ("column" === area) {
                        newColumnItemIndexesToCurrent = updateHeaderItemChildren(headerItems, headerItem, dataSource.columns, loadedData.grandTotalColumnIndex);
                        newRowItemIndexesToCurrent = updateHeaderItems(loadedData.rows, dataSource.rows)
                    } else {
                        newRowItemIndexesToCurrent = updateHeaderItemChildren(headerItems, headerItem, dataSource.rows, loadedData.grandTotalRowIndex);
                        newColumnItemIndexesToCurrent = updateHeaderItems(loadedData.columns, dataSource.columns)
                    }
                    when(newRowItemIndexesToCurrent, newColumnItemIndexesToCurrent).done(function(newRowItemIndexesToCurrent, newColumnItemIndexesToCurrent) {
                        if ("row" === area && newRowItemIndexesToCurrent.length || "column" === area && newColumnItemIndexesToCurrent.length) {
                            updateDataSourceCells(loadedData, dataSource.values, newRowItemIndexesToCurrent, newColumnItemIndexesToCurrent)
                        }
                        that._update(deferred)
                    })
                }
            }
        },
        dispose: function() {
            var that = this,
                delayedLoadTask = that._delayedLoadTask;
            this._disposeEvents();
            if (delayedLoadTask) {
                delayedLoadTask.abort()
            }
            this._isDisposed = true
        },
        isDisposed: function() {
            return !!this._isDisposed
        }
    }
}()).include(EventsMixin);
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/local_store.js":
/*!**************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/local_store.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/local_store.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    dataUtils = __webpack_require__(/*! ../../data/utils */ "./node_modules/devextreme/data/utils.js"),
    dataQuery = __webpack_require__(/*! ../../data/query */ "./node_modules/devextreme/data/query.js"),
    dateSerialization = __webpack_require__(/*! ../../core/utils/date_serialization */ "./node_modules/devextreme/core/utils/date_serialization.js"),
    DataSourceModule = __webpack_require__(/*! ../../data/data_source/data_source */ "./node_modules/devextreme/data/data_source/data_source.js"),
    CustomStore = __webpack_require__(/*! ../../data/custom_store */ "./node_modules/devextreme/data/custom_store.js"),
    dataCoreUtils = __webpack_require__(/*! ../../core/utils/data */ "./node_modules/devextreme/core/utils/data.js"),
    Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js"),
    commonUtils = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js"),
    typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    getFiltersByPath = pivotGridUtils.getFiltersByPath,
    setFieldProperty = pivotGridUtils.setFieldProperty,
    ArrayStore = __webpack_require__(/*! ../../data/array_store */ "./node_modules/devextreme/data/array_store.js");
exports.LocalStore = Class.inherit(function() {
    var DATE_INTERVAL_SELECTORS = {
        year: function(date) {
            return date && date.getFullYear()
        },
        quarter: function(date) {
            return date && Math.floor(date.getMonth() / 3) + 1
        },
        month: function(date) {
            return date && date.getMonth() + 1
        },
        day: function(date) {
            return date && date.getDate()
        },
        dayOfWeek: function(date) {
            return date && date.getDay()
        }
    };

    function getDataSelector(dataField) {
        return dataField.indexOf(".") !== -1 ? dataCoreUtils.compileGetter(dataField) : function(data) {
            return data[dataField]
        }
    }

    function getDateValue(dataSelector) {
        return function(data) {
            var value = dataSelector(data);
            if (value && !(value instanceof Date)) {
                value = dateSerialization.deserializeDate(value)
            }
            return value
        }
    }

    function prepareFields(fields) {
        each(fields || [], function(_, field) {
            var fieldSelector, intervalSelector, groupInterval, dataSelector, dataField = field.dataField,
                levels = field.levels;
            if (!field.selector) {
                if (!dataField) {
                    dataSelector = function(data) {
                        return data
                    }
                } else {
                    dataSelector = getDataSelector(dataField)
                }
                if (levels) {
                    prepareFields(levels)
                }
                if ("date" === field.dataType) {
                    intervalSelector = DATE_INTERVAL_SELECTORS[field.groupInterval];
                    var valueSelector = getDateValue(dataSelector);
                    fieldSelector = function(data) {
                        var value = valueSelector(data);
                        return intervalSelector ? intervalSelector(value) : value
                    }
                } else {
                    if ("number" === field.dataType) {
                        groupInterval = typeUtils.isNumeric(field.groupInterval) && field.groupInterval > 0 && field.groupInterval;
                        fieldSelector = function(data) {
                            var value = dataSelector(data);
                            if (typeUtils.isString(value)) {
                                value = Number(value)
                            }
                            return groupInterval ? Math.floor(value / groupInterval) * groupInterval : value
                        }
                    } else {
                        fieldSelector = dataSelector
                    }
                }
                pivotGridUtils.setDefaultFieldValueFormatting(field);
                setFieldProperty(field, "selector", fieldSelector)
            }
        })
    }
    var addHierarchyItem = function(value, hierarchyItems, pathHash, childrenHash) {
        var hierarchyItem = childrenHash[pathHash];
        if (!hierarchyItem) {
            hierarchyItem = {
                value: value,
                index: childrenHash.length++
            };
            childrenHash[pathHash] = hierarchyItem;
            hierarchyItems.push(hierarchyItem)
        }
        return hierarchyItem
    };

    function fillHierarchyItemIndexesCore(indexes, options, children, expandIndex, pathHash) {
        var dimensionValue, hierarchyItem, dimension = options.dimensions[expandIndex],
            expandedPathsHash = options.expandedPathsHash;
        if (dimension) {
            dimensionValue = dimension.selector(options.data);
            pathHash = void 0 !== pathHash ? pathHash + "." + dimensionValue : dimensionValue + "";
            hierarchyItem = addHierarchyItem(dimensionValue, children, pathHash, options.childrenHash);
            indexes.push(hierarchyItem.index);
            if (expandedPathsHash && expandedPathsHash[pathHash] || dimension.expanded) {
                if (!hierarchyItem.children) {
                    hierarchyItem.children = []
                }
                fillHierarchyItemIndexesCore(indexes, options, hierarchyItem.children, expandIndex + 1, pathHash)
            }
        }
    }

    function generateHierarchyItems(data, loadOptions, headers, headerName) {
        var result = [0],
            expandIndex = loadOptions.headerName === headerName ? loadOptions.path.length : 0,
            expandedPaths = "rows" === headerName ? loadOptions.rowExpandedPaths : loadOptions.columnExpandedPaths,
            options = {
                data: data,
                childrenHash: headers[headerName + "Hash"],
                dimensions: loadOptions[headerName],
                expandedPathsHash: loadOptions.headerName !== headerName && expandedPaths && expandedPaths.hash
            };
        fillHierarchyItemIndexesCore(result, options, headers[headerName], expandIndex);
        return result
    }

    function generateAggregationCells(data, cells, headers, options) {
        var x, y, rowIndex, columnIndex, cellSet = [];
        var rowIndexes = generateHierarchyItems(data, options, headers, "rows");
        var columnIndexes = generateHierarchyItems(data, options, headers, "columns");
        for (y = 0; y < rowIndexes.length; y++) {
            rowIndex = rowIndexes[y];
            cells[rowIndex] = cells[rowIndex] || [];
            for (x = 0; x < columnIndexes.length; x++) {
                columnIndex = columnIndexes[x];
                cellSet.push(cells[rowIndex][columnIndex] = cells[rowIndex][columnIndex] || [])
            }
        }
        return cellSet
    }

    function fillHashExpandedPath(expandedPaths) {
        if (expandedPaths) {
            var hash = expandedPaths.hash = {};
            expandedPaths.forEach(function(path) {
                var pathValue = path.map(function(value) {
                    return value + ""
                }).join(".");
                hash[pathValue] = true
            })
        }
    }

    function prepareLoadOption(options) {
        options.rows = options.rows || [];
        options.columns = options.columns || [];
        options.filters = options.filters || [];
        fillHashExpandedPath(options.columnExpandedPaths);
        fillHashExpandedPath(options.rowExpandedPaths);
        prepareFields(options.columns);
        prepareFields(options.rows);
        prepareFields(options.values);
        prepareFields(options.filters)
    }

    function getAggregator(field) {
        if ("custom" === field.summaryType) {
            field.calculateCustomSummary = field.calculateCustomSummary || commonUtils.noop;
            return {
                seed: function() {
                    var options = {
                        summaryProcess: "start",
                        totalValue: void 0
                    };
                    field.calculateCustomSummary(options);
                    return options
                },
                step: function(options, value) {
                    options.summaryProcess = "calculate";
                    options.value = value;
                    field.calculateCustomSummary(options);
                    return options
                },
                finalize: function(options) {
                    options.summaryProcess = "finalize";
                    delete options.value;
                    field.calculateCustomSummary(options);
                    return options.totalValue
                }
            }
        }
        return dataUtils.aggregators[field.summaryType] || dataUtils.aggregators.count
    }

    function aggregationStep(measures, aggregationCells, data) {
        for (var aggregatorIndex = 0; aggregatorIndex < measures.length; aggregatorIndex++) {
            var cellField = measures[aggregatorIndex];
            var cellValue = cellField.selector(data);
            var aggregator = getAggregator(cellField),
                isAggregatorSeedFunction = "function" === typeof aggregator.seed;
            for (var cellSetIndex = 0; cellSetIndex < aggregationCells.length; cellSetIndex++) {
                var cell = aggregationCells[cellSetIndex];
                if (cell.length <= aggregatorIndex) {
                    cell[aggregatorIndex] = isAggregatorSeedFunction ? aggregator.seed() : aggregator.seed
                }
                if (void 0 === cell[aggregatorIndex]) {
                    cell[aggregatorIndex] = cellValue
                } else {
                    if (typeUtils.isDefined(cellValue)) {
                        cell[aggregatorIndex] = aggregator.step(cell[aggregatorIndex], cellValue)
                    }
                }
            }
        }
    }

    function aggregationFinalize(measures, cells) {
        each(measures, function(aggregatorIndex, cellField) {
            var aggregator = getAggregator(cellField);
            if (aggregator.finalize) {
                each(cells, function(_, row) {
                    each(row, function(_, cell) {
                        if (cell && void 0 !== cell[aggregatorIndex]) {
                            cell[aggregatorIndex] = aggregator.finalize(cell[aggregatorIndex])
                        }
                    })
                })
            }
        })
    }

    function areValuesEqual(filterValue, fieldValue) {
        var valueOfFilter = filterValue && filterValue.valueOf(),
            valueOfField = fieldValue && fieldValue.valueOf();
        if (Array.isArray(filterValue)) {
            fieldValue = fieldValue || [];
            for (var i = 0; i < filterValue.length; i++) {
                valueOfFilter = filterValue[i] && filterValue[i].valueOf();
                valueOfField = fieldValue[i] && fieldValue[i].valueOf();
                if (valueOfFilter !== valueOfField) {
                    return false
                }
            }
            return true
        } else {
            return valueOfFilter === valueOfField
        }
    }

    function getGroupValue(levels, data) {
        var value = [];
        each(levels, function(_, field) {
            value.push(field.selector(data))
        });
        return value
    }

    function createDimensionFilters(dimension) {
        var filters = [];
        each(dimension, function(_, field) {
            var filter, filterValues = field.filterValues || [],
                groupName = field.groupName;
            if (groupName && typeUtils.isNumeric(field.groupIndex)) {
                return
            }
            filter = function(dataItem) {
                var value = field.levels ? getGroupValue(field.levels, dataItem) : field.selector(dataItem),
                    result = false;
                for (var i = 0; i < filterValues.length; i++) {
                    if (areValuesEqual(filterValues[i], value)) {
                        result = true;
                        break
                    }
                }
                return "exclude" === field.filterType ? !result : result
            };
            filterValues.length && filters.push(filter)
        });
        return filters
    }

    function createFilter(options) {
        var filters = createDimensionFilters(options.rows).concat(createDimensionFilters(options.columns)).concat(createDimensionFilters(options.filters)),
            expandedDimensions = options[options.headerName],
            path = options.path;
        if (expandedDimensions) {
            filters.push(function(dataItem) {
                var expandValue;
                for (var i = 0; i < path.length; i++) {
                    expandValue = expandedDimensions[i].selector(dataItem);
                    if (dataCoreUtils.toComparable(expandValue, true) !== dataCoreUtils.toComparable(path[i], true)) {
                        return false
                    }
                }
                return true
            })
        }
        return function(dataItem) {
            for (var i = 0; i < filters.length; i++) {
                if (!filters[i](dataItem)) {
                    return false
                }
            }
            return true
        }
    }

    function loadCore(items, options, notifyProgress) {
        var aggregationCells, filter, data, headers = {
                columns: [],
                rows: [],
                columnsHash: {
                    length: 1
                },
                rowsHash: {
                    length: 1
                }
            },
            values = [],
            d = new Deferred,
            i = 0;
        filter = createFilter(options);

        function processData() {
            var t = new Date,
                startIndex = i;
            for (; i < items.length; i++) {
                if (i > startIndex && i % 1e4 === 0) {
                    if (new Date - t >= 300) {
                        notifyProgress(i / items.length);
                        setTimeout(processData, 0);
                        return
                    }
                }
                data = items[i];
                if (filter(data)) {
                    aggregationCells = generateAggregationCells(data, values, headers, options);
                    aggregationStep(options.values, aggregationCells, data)
                }
            }
            aggregationFinalize(options.values, values);
            notifyProgress(1);
            d.resolve({
                rows: headers.rows,
                columns: headers.columns,
                values: values,
                grandTotalRowIndex: 0,
                grandTotalColumnIndex: 0
            })
        }
        processData();
        return d
    }

    function filterDataSource(dataSource, fieldSelectors) {
        var filter = dataSource.filter();
        if (dataSource.store() instanceof CustomStore && filter) {
            filter = processFilter(filter, fieldSelectors);
            return dataQuery(dataSource.items()).filter(filter).toArray()
        }
        return dataSource.items()
    }

    function loadDataSource(dataSource, fieldSelectors, reload) {
        var d = new Deferred;
        var customizeStoreLoadOptionsHandler = function(options) {
            if (dataSource.store() instanceof ArrayStore) {
                options.storeLoadOptions.filter = processFilter(options.storeLoadOptions.filter, fieldSelectors)
            }
        };
        dataSource.on("customizeStoreLoadOptions", customizeStoreLoadOptionsHandler);
        if (!dataSource.isLoaded() || reload) {
            var loadDeferred = reload ? dataSource.load() : dataSource.reload();
            when(loadDeferred).done(function() {
                loadDataSource(dataSource, fieldSelectors).done(function() {
                    d.resolve(filterDataSource(dataSource, fieldSelectors))
                }).fail(d.reject)
            }).fail(d.reject)
        } else {
            d.resolve(filterDataSource(dataSource, fieldSelectors))
        }
        return d.always(function() {
            dataSource.off("customizeStoreLoadOptions", customizeStoreLoadOptionsHandler)
        })
    }

    function fillSelectorsByFields(selectors, fields) {
        fields.forEach(function(field) {
            if (field.dataField && "date" === field.dataType) {
                var valueSelector = getDateValue(getDataSelector(field.dataField));
                selectors[field.dataField] = function(data) {
                    return valueSelector(data)
                }
            }
        })
    }

    function getFieldSelectors(options) {
        var selectors = {};
        if (Array.isArray(options)) {
            fillSelectorsByFields(selectors, options)
        } else {
            if (options) {
                ["rows", "columns", "filters"].forEach(function(area) {
                    options[area] && fillSelectorsByFields(selectors, options[area])
                })
            }
        }
        return selectors
    }

    function processFilter(filter, fieldSelectors) {
        if (!Array.isArray(filter)) {
            return filter
        }
        filter = filter.slice(0);
        if (typeUtils.isString(filter[0]) && (filter[1] instanceof Date || filter[2] instanceof Date)) {
            filter[0] = fieldSelectors[filter[0]]
        }
        for (var i = 0; i < filter.length; i++) {
            filter[i] = processFilter(filter[i], fieldSelectors)
        }
        return filter
    }
    return {
        ctor: function(options) {
            this._progressChanged = options.onProgressChanged || commonUtils.noop;
            this._dataSource = new DataSourceModule.DataSource(options);
            this._dataSource.paginate(false)
        },
        getFields: function(fields) {
            var that = this,
                dataSource = that._dataSource,
                d = new Deferred;
            loadDataSource(dataSource, getFieldSelectors(fields)).done(function(data) {
                d.resolve(pivotGridUtils.discoverObjectFields(data, fields))
            }).fail(d.reject);
            return d
        },
        key: function() {
            return this._dataSource.key()
        },
        load: function(options) {
            var that = this,
                dataSource = that._dataSource,
                d = new Deferred;
            prepareLoadOption(options);
            loadDataSource(dataSource, getFieldSelectors(options), options.reload).done(function(data) {
                when(loadCore(data, options, that._progressChanged)).done(d.resolve)
            }).fail(d.reject);
            return d
        },
        filter: function() {
            var dataSource = this._dataSource;
            return dataSource.filter.apply(dataSource, arguments)
        },
        supportSorting: function() {
            return false
        },
        getDrillDownItems: function(loadOptions, params) {
            loadOptions = loadOptions || {};
            params = params || {};
            prepareLoadOption(loadOptions);
            var item, drillDownItems = [],
                items = this._dataSource.items(),
                maxRowCount = params.maxRowCount,
                customColumns = params.customColumns,
                filter = createFilter(loadOptions),
                pathFilter = createFilter({
                    rows: getFiltersByPath(loadOptions.rows, params.rowPath),
                    columns: getFiltersByPath(loadOptions.columns, params.columnPath),
                    filters: []
                });
            for (var i = 0; i < items.length; i++) {
                if (pathFilter(items[i]) && filter(items[i])) {
                    if (customColumns) {
                        item = {};
                        for (var j = 0; j < customColumns.length; j++) {
                            item[customColumns[j]] = items[i][customColumns[j]]
                        }
                    } else {
                        item = items[i]
                    }
                    drillDownItems.push(item)
                }
                if (maxRowCount > 0 && drillDownItems.length === maxRowCount) {
                    break
                }
            }
            return drillDownItems
        }
    }
}()).include(pivotGridUtils.storeDrillDownMixin);


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/remote_store.js":
/*!***************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/remote_store.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/remote_store.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _type = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js");
var _class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js");
var _class2 = _interopRequireDefault(_class);
var _extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js");
var _iterator = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js");
var _data_source = __webpack_require__(/*! ../../data/data_source/data_source */ "./node_modules/devextreme/data/data_source/data_source.js");
var _data_source2 = _interopRequireDefault(_data_source);
var _deferred = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js");
var _uiPivot_grid = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js");
var _uiPivot_grid2 = _interopRequireDefault(_uiPivot_grid);
var _date_serialization = __webpack_require__(/*! ../../core/utils/date_serialization */ "./node_modules/devextreme/core/utils/date_serialization.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function createGroupingOptions(dimensionOptions) {
    var groupingOptions = [];
    (0, _iterator.each)(dimensionOptions, function(index, dimensionOption) {
        groupingOptions.push({
            selector: dimensionOption.dataField,
            groupInterval: dimensionOption.groupInterval,
            isExpanded: index < dimensionOptions.length - 1
        })
    });
    return groupingOptions
}

function getFieldFilterSelector(field) {
    var selector = field.dataField,
        groupInterval = field.groupInterval;
    if ("date" === field.dataType && "string" === typeof groupInterval) {
        if ("quarter" === groupInterval.toLowerCase()) {
            groupInterval = "Month"
        }
        selector = selector + "." + _uiPivot_grid2.default.capitalizeFirstLetter(groupInterval)
    }
    return selector
}

function getIntervalFilterExpression(selector, numericInterval, numericValue, isExcludedFilterType) {
    var startFilterValue = [selector, isExcludedFilterType ? "<" : ">=", numericValue],
        endFilterValue = [selector, isExcludedFilterType ? ">=" : "<", numericValue + numericInterval];
    return [startFilterValue, isExcludedFilterType ? "or" : "and", endFilterValue]
}

function getFilterExpressionForFilterValue(field, filterValue) {
    var selector = getFieldFilterSelector(field),
        isExcludedFilterType = "exclude" === field.filterType,
        expression = [selector, isExcludedFilterType ? "<>" : "=", filterValue];
    if ((0, _type.isDefined)(field.groupInterval)) {
        if ("string" === typeof field.groupInterval && "quarter" === field.groupInterval.toLowerCase()) {
            expression = getIntervalFilterExpression(selector, 3, 3 * (filterValue - 1) + 1, isExcludedFilterType)
        } else {
            if ("number" === typeof field.groupInterval && "date" !== field.dataType) {
                expression = getIntervalFilterExpression(selector, field.groupInterval, filterValue, isExcludedFilterType)
            }
        }
    }
    return expression
}

function createFieldFilterExpressions(field, operation) {
    var fieldFilterExpressions = [];
    if ("exclude" === field.filterType) {
        operation = operation || "and"
    } else {
        operation = operation || "or"
    }(0, _iterator.each)(field.filterValues, function(index, filterValue) {
        var currentExpression = [],
            currentField = field.levels ? field.levels[index] : field;
        if (Array.isArray(filterValue)) {
            var parseLevelsRecursive = field.levels && field.levels.length;
            if (parseLevelsRecursive) {
                currentExpression = createFieldFilterExpressions({
                    filterValues: filterValue,
                    filterType: currentField.filterType,
                    levels: field.levels
                }, "and")
            }
        } else {
            currentExpression = getFilterExpressionForFilterValue(currentField, filterValue)
        }
        if (!currentExpression.length) {
            return
        }
        if (fieldFilterExpressions.length) {
            fieldFilterExpressions.push(operation)
        }
        fieldFilterExpressions.push(currentExpression)
    });
    return fieldFilterExpressions
}

function createFilterExpressions(fields) {
    var filterExpressions = [];
    (0, _iterator.each)(fields, function(_, field) {
        var fieldExpressions = createFieldFilterExpressions(field);
        if (!fieldExpressions.length) {
            return []
        }
        if (filterExpressions.length) {
            filterExpressions.push("and")
        }
        filterExpressions.push(fieldExpressions)
    });
    if (1 === filterExpressions.length) {
        filterExpressions = filterExpressions[0]
    }
    return filterExpressions
}

function mergeFilters(filter1, filter2) {
    var mergedFilter, notEmpty = function(filter) {
        return filter && filter.length
    };
    if (notEmpty(filter1) && notEmpty(filter2)) {
        mergedFilter = [filter1, "and", filter2]
    } else {
        mergedFilter = notEmpty(filter1) ? filter1 : filter2
    }
    return mergedFilter
}

function createLoadOptions(options, externalFilterExpr) {
    var filterExpressions = createFilterExpressions(options.filters),
        groupingOptions = createGroupingOptions(options.rows).concat(createGroupingOptions(options.columns)),
        loadOptions = {
            groupSummary: [],
            totalSummary: [],
            group: groupingOptions.length ? groupingOptions : void 0,
            take: groupingOptions.length ? void 0 : 1
        };
    if (externalFilterExpr) {
        filterExpressions = mergeFilters(filterExpressions, externalFilterExpr)
    }
    if (filterExpressions.length) {
        loadOptions.filter = filterExpressions
    }(0, _iterator.each)(options.values, function(_, value) {
        var summaryOption = {
            selector: value.dataField,
            summaryType: value.summaryType || "count"
        };
        loadOptions.groupSummary.push(summaryOption);
        options.includeTotalSummary && loadOptions.totalSummary.push(summaryOption)
    });
    return loadOptions
}

function forEachGroup(data, callback, level) {
    data = data || [];
    level = level || 0;
    (0, _iterator.each)(data, function(_, group) {
        callback(group, level);
        if (group.items && group.items.length) {
            forEachGroup(group.items, callback, level + 1)
        }
    })
}

function setValue(valuesArray, value, rowIndex, columnIndex, dataIndex) {
    valuesArray[rowIndex] = valuesArray[rowIndex] || [];
    valuesArray[rowIndex][columnIndex] = valuesArray[rowIndex][columnIndex] || [];
    if (!(0, _type.isDefined)(valuesArray[rowIndex][columnIndex][dataIndex])) {
        valuesArray[rowIndex][columnIndex][dataIndex] = value
    }
}

function parseValue(value, field) {
    if (field && "number" === field.dataType && (0, _type.isString)(value)) {
        return Number(value)
    }
    if (field && "date" === field.dataType && !field.groupInterval && !(value instanceof Date)) {
        return (0, _date_serialization.deserializeDate)(value)
    }
    return value
}

function parseResult(data, total, descriptions, result) {
    var rowPath = [],
        columnPath = [],
        rowHash = result.rowHash,
        columnHash = result.columnHash;
    if (total && total.summary) {
        (0, _iterator.each)(total.summary, function(index, summary) {
            setValue(result.values, summary, result.grandTotalRowIndex, result.grandTotalColumnIndex, index)
        })
    }

    function getItem(dataItem, dimensionName, path, level, field) {
        var parentItem, parentItemChildren, item, parentPathValue, dimensionHash = result[dimensionName + "Hash"],
            pathValue = path.slice(0, level + 1).join("/");
        if (void 0 !== dimensionHash[pathValue]) {
            item = dimensionHash[pathValue]
        } else {
            item = {
                value: parseValue(dataItem.key, field),
                index: result[dimensionName + "Index"]++
            };
            parentPathValue = path.slice(0, level).join("/");
            if (level > 0 && void 0 !== dimensionHash[parentPathValue]) {
                parentItem = dimensionHash[parentPathValue];
                parentItemChildren = parentItem.children = parentItem.children || []
            } else {
                parentItemChildren = result[dimensionName + "s"]
            }
            parentItemChildren.push(item);
            dimensionHash[pathValue] = item
        }
        return item
    }
    forEachGroup(data, function(item, level) {
        var columnItem, rowItem, rowLevel = level >= descriptions.rows.length ? descriptions.rows.length : level,
            columnLevel = level >= descriptions.rows.length ? level - descriptions.rows.length : 0;
        if (level >= descriptions.rows.length && columnLevel >= descriptions.columns.length) {
            return
        }
        if (level < descriptions.rows.length) {
            columnPath = []
        }
        if (level >= descriptions.rows.length) {
            columnPath[columnLevel] = item.key + "";
            columnItem = getItem(item, "column", columnPath, columnLevel, descriptions.columns[columnPath.length - 1]);
            rowItem = rowHash[rowPath.slice(0, rowLevel + 1).join("/")]
        } else {
            rowPath[rowLevel] = item.key + "";
            rowItem = getItem(item, "row", rowPath, rowLevel);
            columnItem = columnHash[columnPath.slice(0, columnLevel + 1).join("/")]
        }
        var currentRowIndex = rowItem && rowItem.index || result.grandTotalRowIndex,
            currentColumnIndex = columnItem && columnItem.index || result.grandTotalColumnIndex;
        (0, _iterator.each)(item.summary || [], function(i, summary) {
            setValue(result.values, summary, currentRowIndex, currentColumnIndex, i)
        })
    });
    return result
}

function getFiltersForDimension(fields) {
    return (fields || []).filter(function(f) {
        return f.filterValues && f.filterValues.length
    })
}

function getExpandedIndex(options, axis) {
    if (axis === options.headerName) {
        return options.path.length
    }
    return 0
}

function getFiltersForExpandedDimension(options) {
    return (0, _uiPivot_grid.getFiltersByPath)(options[options.headerName], options.path)
}

function getExpandedPathSliceFilter(options, dimensionName, level, firstCollapsedFieldIndex) {
    var result = [],
        startSliceIndex = level > firstCollapsedFieldIndex ? 0 : firstCollapsedFieldIndex,
        fields = options.headerName !== dimensionName ? options[dimensionName].slice(startSliceIndex, level) : [],
        paths = "rows" === dimensionName ? options.rowExpandedPaths : options.columnExpandedPaths;
    (0, _iterator.each)(fields, function(index, field) {
        var filterValues = [];
        (0, _iterator.each)(paths, function(_, path) {
            path = path.slice(startSliceIndex, level);
            if (index < path.length) {
                filterValues.push(path[index])
            }
        });
        if (filterValues.length) {
            result.push((0, _extend.extend)({}, field, {
                filterType: "include",
                filterValues: filterValues
            }))
        }
    });
    return result
}

function getGrandTotalRequest(options, dimensionName, expandedIndex, expandedLevel, commonFilters, firstCollapsedFieldIndex) {
    var newOptions, expandedPaths = ("columns" === dimensionName ? options.columnExpandedPaths : options.rowExpandedPaths) || [],
        oppositeDimensionName = "columns" === dimensionName ? "rows" : "columns",
        fields = options[dimensionName],
        result = [];
    if (expandedPaths.length) {
        for (var i = expandedIndex; i < expandedLevel + 1; i++) {
            newOptions = {
                filters: commonFilters.concat(getExpandedPathSliceFilter(options, dimensionName, i, firstCollapsedFieldIndex))
            };
            newOptions[dimensionName] = fields.slice(expandedIndex, i + 1);
            newOptions[oppositeDimensionName] = [];
            if (i === expandedLevel) {
                newOptions.includeTotalSummary = true
            }
            result.push((0, _extend.extend)({}, options, newOptions))
        }
    } else {
        newOptions = {
            filters: commonFilters,
            includeTotalSummary: true
        };
        newOptions[dimensionName] = fields.slice(expandedIndex, expandedLevel + 1);
        newOptions[oppositeDimensionName] = [];
        result.push((0, _extend.extend)({}, options, newOptions))
    }
    return result
}

function getFirstCollapsedIndex(fields) {
    var firstCollapsedIndex = 0;
    (0, _iterator.each)(fields, function(index, field) {
        if (!field.expanded) {
            firstCollapsedIndex = index;
            return false
        }
    });
    return firstCollapsedIndex
}

function getRequestsData(options) {
    var columnTotalsOptions, rowExpandedLevel = _uiPivot_grid2.default.getExpandedLevel(options, "rows"),
        columnExpandedLevel = _uiPivot_grid2.default.getExpandedLevel(options, "columns"),
        filters = options.filters || [],
        columnExpandedIndex = getExpandedIndex(options, "columns"),
        firstCollapsedColumnIndex = getFirstCollapsedIndex(options.columns),
        firstCollapsedRowIndex = getFirstCollapsedIndex(options.rows),
        rowExpandedIndex = getExpandedIndex(options, "rows"),
        data = [];
    filters = filters.concat(getFiltersForDimension(options.rows)).concat(getFiltersForDimension(options.columns)).concat(getFiltersForExpandedDimension(options));
    columnTotalsOptions = getGrandTotalRequest(options, "columns", columnExpandedIndex, columnExpandedLevel, filters, firstCollapsedColumnIndex);
    if (options.rows.length && options.columns.length) {
        data = data.concat(columnTotalsOptions);
        for (var i = rowExpandedIndex; i < rowExpandedLevel + 1; i++) {
            var rows = options.rows.slice(rowExpandedIndex, i + 1),
                rowFilterByExpandedPaths = getExpandedPathSliceFilter(options, "rows", i, firstCollapsedRowIndex);
            for (var j = columnExpandedIndex; j < columnExpandedLevel + 1; j++) {
                var preparedOptions = (0, _extend.extend)({}, options, {
                    columns: options.columns.slice(columnExpandedIndex, j + 1),
                    rows: rows,
                    filters: filters.concat(getExpandedPathSliceFilter(options, "columns", j, firstCollapsedColumnIndex)).concat(rowFilterByExpandedPaths)
                });
                data.push(preparedOptions)
            }
        }
    } else {
        data = options.columns.length ? columnTotalsOptions : getGrandTotalRequest(options, "rows", rowExpandedIndex, rowExpandedLevel, filters, firstCollapsedRowIndex)
    }
    return data
}

function prepareFields(fields) {
    (0, _iterator.each)(fields || [], function(_, field) {
        var levels = field.levels;
        if (levels) {
            prepareFields(levels)
        }
        _uiPivot_grid2.default.setDefaultFieldValueFormatting(field)
    })
}
module.exports = _class2.default.inherit(function() {
    return {
        ctor: function(options) {
            this._dataSource = new _data_source2.default.DataSource(options);
            this._store = this._dataSource.store()
        },
        getFields: function(fields) {
            var d = new _deferred.Deferred;
            this._store.load({
                skip: 0,
                take: 20
            }).done(function(data) {
                d.resolve(_uiPivot_grid2.default.discoverObjectFields(data, fields))
            }).fail(d.reject);
            return d
        },
        key: function() {
            return this._store.key()
        },
        load: function(options) {
            var that = this,
                d = new _deferred.Deferred,
                result = {
                    rows: [],
                    columns: [],
                    values: [
                        [
                            []
                        ]
                    ],
                    grandTotalRowIndex: 0,
                    grandTotalColumnIndex: 0,
                    rowHash: {},
                    columnHash: {},
                    rowIndex: 1,
                    columnIndex: 1
                },
                requestsData = getRequestsData(options),
                deferreds = [];
            prepareFields(options.rows);
            prepareFields(options.columns);
            prepareFields(options.filters);
            (0, _iterator.each)(requestsData, function(_, dataItem) {
                deferreds.push(that._store.load(createLoadOptions(dataItem, that.filter())))
            });
            _deferred.when.apply(null, deferreds).done(function() {
                var args = deferreds.length > 1 ? arguments : [arguments];
                (0, _iterator.each)(args, function(index, argument) {
                    parseResult(argument[0], argument[1], requestsData[index], result)
                });
                d.resolve({
                    rows: result.rows,
                    columns: result.columns,
                    values: result.values,
                    grandTotalRowIndex: result.grandTotalRowIndex,
                    grandTotalColumnIndex: result.grandTotalColumnIndex
                })
            }).fail(d.reject);
            return d
        },
        filter: function() {
            return this._dataSource.filter.apply(this._dataSource, arguments)
        },
        supportSorting: function() {
            return false
        },
        createDrillDownDataSource: function(loadOptions, params) {
            loadOptions = loadOptions || {};
            params = params || {};
            var store = this._store,
                filters = (0, _uiPivot_grid.getFiltersByPath)(loadOptions.rows, params.rowPath).concat((0, _uiPivot_grid.getFiltersByPath)(loadOptions.columns, params.columnPath)).concat(getFiltersForDimension(loadOptions.rows)).concat(loadOptions.filters || []).concat(getFiltersForDimension(loadOptions.columns)),
                filterExp = createFilterExpressions(filters);
            return new _data_source2.default.DataSource({
                load: function(loadOptions) {
                    return store.load((0, _extend.extend)({}, loadOptions, {
                        filter: mergeFilters(filterExp, loadOptions.filter),
                        select: params.customColumns
                    }))
                }
            })
        }
    }
}());


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.area_item.js":
/*!**************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.area_item.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.area_item.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js"),
    getPublicElement = __webpack_require__(/*! ../../core/utils/dom */ "./node_modules/devextreme/core/utils/dom.js").getPublicElement,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined;
var PIVOTGRID_EXPAND_CLASS = "dx-expand";
var getRealElementWidth = function(element) {
    var clientRect, width = 0;
    if (element.getBoundingClientRect) {
        clientRect = element.getBoundingClientRect();
        width = clientRect.width;
        if (!width) {
            width = clientRect.right - clientRect.left
        }
    }
    if (width > 0) {
        return width
    } else {
        return element.offsetWidth
    }
};

function getFakeTableOffset(scrollPos, elementOffset, tableSize, viewPortSize) {
    var offset = 0,
        halfTableCount = 0,
        halfTableSize = tableSize / 2;
    if (scrollPos + viewPortSize - (elementOffset + tableSize) > 1) {
        if (scrollPos >= elementOffset + tableSize + halfTableSize) {
            halfTableCount = parseInt((scrollPos - (elementOffset + tableSize)) / halfTableSize, 10)
        }
        offset = elementOffset + tableSize + halfTableSize * halfTableCount
    } else {
        if (scrollPos < elementOffset) {
            if (scrollPos <= elementOffset - halfTableSize) {
                halfTableCount = parseInt((scrollPos - (elementOffset - halfTableSize)) / halfTableSize, 10)
            }
            offset = elementOffset - (tableSize - halfTableSize * halfTableCount)
        } else {
            offset = elementOffset
        }
    }
    return offset
}
exports.AreaItem = Class.inherit({
    _getRowElement: function(index) {
        var that = this;
        if (that._tableElement && that._tableElement.length > 0) {
            return that._tableElement[0].rows[index]
        }
        return null
    },
    _createGroupElement: function() {
        return $("<div>")
    },
    _createTableElement: function() {
        return $("<table>")
    },
    _getCellText: function(cell, encodeHtml) {
        var cellText = cell.isWhiteSpace ? "&nbsp" : cell.text || "&nbsp";
        if (encodeHtml && (cellText.indexOf("<") !== -1 || cellText.indexOf(">") !== -1)) {
            cellText = $("<div>").text(cellText).html()
        }
        return cellText
    },
    _getRowClassNames: function() {},
    _applyCustomStyles: function(options) {
        if (options.cell.width) {
            options.cssArray.push("min-width:" + options.cell.width + "px")
        }
        if (options.cell.sorted) {
            options.classArray.push("dx-pivotgrid-sorted")
        }
    },
    _getMainElementMarkup: function() {
        return "<tbody>"
    },
    _getCloseMainElementMarkup: function() {
        return "</tbody>"
    },
    _renderTableContent: function(tableElement, data) {
        var row, cell, i, j, rowElement, cellElement, cellText, rowClassNames, that = this,
            rowsCount = data.length,
            rtlEnabled = that.option("rtlEnabled"),
            markupArray = [],
            encodeHtml = that.option("encodeHtml"),
            colspan = "colspan='",
            rowspan = "rowspan='";
        tableElement.data("area", that._getAreaName());
        tableElement.data("data", data);
        tableElement.css("width", "");
        markupArray.push(that._getMainElementMarkup());
        for (i = 0; i < rowsCount; i++) {
            row = data[i];
            var columnMarkupArray = [];
            rowClassNames = [];
            markupArray.push("<tr ");
            for (j = 0; j < row.length; j++) {
                cell = row[j];
                this._getRowClassNames(i, cell, rowClassNames);
                columnMarkupArray.push("<td ");
                if (cell) {
                    cell.rowspan && columnMarkupArray.push(rowspan + (cell.rowspan || 1) + "'");
                    cell.colspan && columnMarkupArray.push(colspan + (cell.colspan || 1) + "'");
                    var styleOptions = {
                        cellElement: cellElement,
                        cell: cell,
                        cellsCount: row.length,
                        cellIndex: j,
                        rowElement: rowElement,
                        rowIndex: i,
                        rowsCount: rowsCount,
                        rtlEnabled: rtlEnabled,
                        classArray: [],
                        cssArray: []
                    };
                    that._applyCustomStyles(styleOptions);
                    if (styleOptions.cssArray.length) {
                        columnMarkupArray.push("style='");
                        columnMarkupArray.push(styleOptions.cssArray.join(";"));
                        columnMarkupArray.push("'")
                    }
                    if (styleOptions.classArray.length) {
                        columnMarkupArray.push("class='");
                        columnMarkupArray.push(styleOptions.classArray.join(" "));
                        columnMarkupArray.push("'")
                    }
                    columnMarkupArray.push(">");
                    if (isDefined(cell.expanded)) {
                        columnMarkupArray.push("<div class='dx-expand-icon-container'><span class='" + PIVOTGRID_EXPAND_CLASS + "'></span></div>")
                    }
                    cellText = this._getCellText(cell, encodeHtml)
                } else {
                    cellText = ""
                }
                columnMarkupArray.push("<span ");
                if (isDefined(cell.wordWrapEnabled)) {
                    columnMarkupArray.push("style='white-space:", cell.wordWrapEnabled ? "normal" : "nowrap", ";'")
                }
                columnMarkupArray.push(">" + cellText + "</span>");
                if (cell.sorted) {
                    columnMarkupArray.push("<span class='dx-icon-sorted'></span>")
                }
                columnMarkupArray.push("</td>")
            }
            if (rowClassNames.length) {
                markupArray.push("class='");
                markupArray.push(rowClassNames.join(" "));
                markupArray.push("'")
            }
            markupArray.push(">");
            markupArray.push(columnMarkupArray.join(""));
            markupArray.push("</tr>")
        }
        markupArray.push(this._getCloseMainElementMarkup());
        tableElement.append(markupArray.join(""));
        this._triggerOnCellPrepared(tableElement, data)
    },
    _triggerOnCellPrepared: function(tableElement, data) {
        var rowElement, $cellElement, onCellPreparedArgs, row, cell, rowIndex, columnIndex, that = this,
            rowElements = tableElement.find("tr"),
            areaName = that._getAreaName(),
            onCellPrepared = that.option("onCellPrepared"),
            hasEvent = that.component.hasEvent("cellPrepared"),
            defaultActionArgs = this.component._defaultActionArgs();
        if (onCellPrepared || hasEvent) {
            for (rowIndex = 0; rowIndex < data.length; rowIndex++) {
                row = data[rowIndex];
                rowElement = rowElements.eq(rowIndex);
                for (columnIndex = 0; columnIndex < row.length; columnIndex++) {
                    cell = row[columnIndex];
                    $cellElement = rowElement.children().eq(columnIndex);
                    onCellPreparedArgs = {
                        area: areaName,
                        rowIndex: rowIndex,
                        columnIndex: columnIndex,
                        cellElement: getPublicElement($cellElement),
                        cell: cell
                    };
                    if (hasEvent) {
                        that.component._trigger("onCellPrepared", onCellPreparedArgs)
                    } else {
                        onCellPrepared(extend(onCellPreparedArgs, defaultActionArgs))
                    }
                }
            }
        }
    },
    _getRowHeight: function(index) {
        var clientRect, row = this._getRowElement(index),
            height = 0;
        if (row && row.lastChild) {
            if (row.getBoundingClientRect) {
                clientRect = row.getBoundingClientRect();
                height = clientRect.height
            }
            if (height > 0) {
                return height
            } else {
                return row.offsetHeight
            }
        }
        return 0
    },
    _setRowHeight: function(index, value) {
        var row = this._getRowElement(index);
        if (row) {
            row.style.height = value + "px"
        }
    },
    ctor: function(component) {
        this.component = component
    },
    option: function() {
        return this.component.option.apply(this.component, arguments)
    },
    getRowsLength: function() {
        var that = this;
        if (that._tableElement && that._tableElement.length > 0) {
            return that._tableElement[0].rows.length
        }
        return 0
    },
    getRowsHeight: function() {
        var i, that = this,
            result = [],
            rowsLength = that.getRowsLength();
        for (i = 0; i < rowsLength; i++) {
            result.push(that._getRowHeight(i))
        }
        return result
    },
    setRowsHeight: function(values) {
        var i, that = this,
            totalHeight = 0,
            valuesLength = values.length;
        for (i = 0; i < valuesLength; i++) {
            totalHeight += values[i];
            that._setRowHeight(i, values[i])
        }
        this._tableHeight = totalHeight;
        this._tableElement[0].style.height = totalHeight + "px"
    },
    getColumnsWidth: function() {
        var rowIndex, row, i, columnIndex, rowsLength = this.getRowsLength(),
            processedCells = [],
            result = [],
            fillCells = function(cells, rowIndex, columnIndex, rowSpan, colSpan) {
                var rowOffset, columnOffset;
                for (rowOffset = 0; rowOffset < rowSpan; rowOffset++) {
                    for (columnOffset = 0; columnOffset < colSpan; columnOffset++) {
                        cells[rowIndex + rowOffset] = cells[rowIndex + rowOffset] || [];
                        cells[rowIndex + rowOffset][columnIndex + columnOffset] = true
                    }
                }
            };
        if (rowsLength) {
            for (rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
                processedCells[rowIndex] = processedCells[rowIndex] || [];
                row = this._getRowElement(rowIndex);
                for (i = 0; i < row.cells.length; i++) {
                    for (columnIndex = 0; processedCells[rowIndex][columnIndex]; columnIndex++) {}
                    fillCells(processedCells, rowIndex, columnIndex, row.cells[i].rowSpan, row.cells[i].colSpan);
                    if (1 === row.cells[i].colSpan) {
                        result[columnIndex] = result[columnIndex] || getRealElementWidth(row.cells[i])
                    }
                }
            }
        }
        return result
    },
    setColumnsWidth: function(values) {
        var i, totalWidth = 0,
            tableElement = this._tableElement[0],
            colgroupElementHTML = "",
            columnsCount = this.getColumnsCount(),
            columnWidth = [];
        for (i = 0; i < columnsCount; i++) {
            columnWidth.push(values[i] || 0)
        }
        for (i = columnsCount; i < values.length && values; i++) {
            columnWidth[columnsCount - 1] += values[i]
        }
        for (i = 0; i < columnsCount; i++) {
            totalWidth += columnWidth[i];
            colgroupElementHTML += '<col style="width: ' + columnWidth[i] + 'px">'
        }
        this._colgroupElement.html(colgroupElementHTML);
        this._tableWidth = totalWidth;
        tableElement.style.width = totalWidth + "px";
        tableElement.style.tableLayout = "fixed"
    },
    resetColumnsWidth: function() {
        this._colgroupElement.find("col").width("auto");
        this._tableElement.css({
            width: "",
            tableLayout: ""
        })
    },
    groupWidth: function(value) {
        if (void 0 === value) {
            return this._groupElement.width()
        } else {
            if (value >= 0) {
                this._groupWidth = value;
                return this._groupElement[0].style.width = value + "px"
            } else {
                return this._groupElement[0].style.width = value
            }
        }
    },
    groupHeight: function(value) {
        if (void 0 === value) {
            return this._groupElement.height()
        }
        this._groupHeight = null;
        if (value >= 0) {
            this._groupHeight = value;
            this._groupElement[0].style.height = value + "px"
        } else {
            this._groupElement[0].style.height = value
        }
    },
    groupElement: function() {
        return this._groupElement
    },
    tableElement: function() {
        return this._tableElement
    },
    element: function() {
        return this._rootElement
    },
    headElement: function() {
        return this._tableElement.find("thead")
    },
    _setTableCss: function(styles) {
        if (this.option("rtlEnabled")) {
            styles.right = styles.left;
            delete styles.left
        }
        this.tableElement().css(styles)
    },
    setVirtualContentParams: function(params) {
        this._virtualContent.css({
            width: params.width,
            height: params.height
        });
        this.groupElement().addClass("dx-virtual-mode")
    },
    disableVirtualMode: function() {
        this.groupElement().removeClass("dx-virtual-mode")
    },
    _renderVirtualContent: function() {
        var that = this;
        if (!that._virtualContent && "virtual" === that.option("scrolling.mode")) {
            that._virtualContent = $("<div>").addClass("dx-virtual-content").insertBefore(that._tableElement)
        }
    },
    reset: function() {
        var that = this,
            tableElement = that._tableElement[0];
        that._fakeTable && that._fakeTable.detach();
        that._fakeTable = null;
        that.disableVirtualMode();
        that.groupWidth("100%");
        that.groupHeight("auto");
        that.resetColumnsWidth();
        if (tableElement) {
            for (var i = 0; i < tableElement.rows.length; i++) {
                tableElement.rows[i].style.height = ""
            }
            tableElement.style.height = "";
            tableElement.style.width = "100%"
        }
    },
    _updateFakeTableVisibility: function() {
        var that = this,
            tableElement = that.tableElement()[0],
            horizontalOffsetName = that.option("rtlEnabled") ? "right" : "left",
            fakeTableElement = that._fakeTable[0];
        if (tableElement.style.top === fakeTableElement.style.top && fakeTableElement.style[horizontalOffsetName] === tableElement.style[horizontalOffsetName]) {
            that._fakeTable.addClass("dx-hidden")
        } else {
            that._fakeTable.removeClass("dx-hidden")
        }
    },
    _moveFakeTableHorizontally: function(scrollPos) {
        var that = this,
            rtlEnabled = that.option("rtlEnabled"),
            offsetStyleName = rtlEnabled ? "right" : "left",
            tableElementOffset = parseFloat(that.tableElement()[0].style[offsetStyleName]),
            offset = getFakeTableOffset(scrollPos, tableElementOffset, that._tableWidth, that._groupWidth);
        if (parseFloat(that._fakeTable[0].style[offsetStyleName]) !== offset) {
            that._fakeTable[0].style[offsetStyleName] = offset + "px"
        }
    },
    _moveFakeTableTop: function(scrollPos) {
        var that = this,
            tableElementOffsetTop = parseFloat(that.tableElement()[0].style.top),
            offsetTop = getFakeTableOffset(scrollPos, tableElementOffsetTop, that._tableHeight, that._groupHeight);
        if (parseFloat(that._fakeTable[0].style.top) !== offsetTop) {
            that._fakeTable[0].style.top = offsetTop + "px"
        }
    },
    _moveFakeTable: function() {
        this._updateFakeTableVisibility()
    },
    _createFakeTable: function() {
        var that = this;
        if (!that._fakeTable) {
            that._fakeTable = that.tableElement().clone().addClass("dx-pivot-grid-fake-table").appendTo(that._virtualContent)
        }
    },
    render: function(rootElement, data) {
        var that = this;
        if (that._tableElement) {
            try {
                that._tableElement[0].innerHTML = ""
            } catch (e) {
                that._tableElement.empty()
            }
            that._tableElement.attr("style", "")
        } else {
            that._groupElement = that._createGroupElement();
            that._tableElement = that._createTableElement();
            that._tableElement.appendTo(that._groupElement);
            that._groupElement.appendTo(rootElement);
            that._rootElement = rootElement
        }
        that._colgroupElement = $("<colgroup>").appendTo(that._tableElement);
        that._renderTableContent(that._tableElement, data);
        that._renderVirtualContent()
    },
    _getScrollable: function() {
        return this.groupElement().data("dxScrollable")
    },
    on: function(eventName, handler) {
        var that = this,
            scrollable = that._getScrollable();
        if (scrollable) {
            scrollable.on(eventName, function(e) {
                if (that.option("rtlEnabled") && isDefined(e.scrollOffset.left)) {
                    e.scrollOffset.left = scrollable.$content().width() - scrollable._container().width() - e.scrollOffset.left
                }
                handler(e)
            })
        }
        return this
    },
    off: function(eventName) {
        var scrollable = this._getScrollable();
        if (scrollable) {
            scrollable.off(eventName)
        }
        return this
    },
    scrollTo: function(pos) {
        var scrollable = this._getScrollable(),
            scrollablePos = pos;
        if (scrollable) {
            if (this.option("rtlEnabled")) {
                if ("column" === this._getAreaName()) {
                    scrollablePos = scrollable.$content().width() - scrollable._container().width() - pos
                } else {
                    if ("data" === this._getAreaName()) {
                        scrollablePos = {
                            x: scrollable.$content().width() - scrollable._container().width() - pos.x,
                            y: pos.y
                        }
                    }
                }
            }
            scrollable.scrollTo(scrollablePos);
            if (this._virtualContent) {
                this._createFakeTable();
                this._moveFakeTable(pos)
            }
        }
    },
    updateScrollable: function() {
        var scrollable = this._getScrollable();
        if (scrollable) {
            return scrollable.update()
        }
    },
    getColumnsCount: function() {
        var cells, columnCount = 0,
            row = this._getRowElement(0);
        if (row) {
            cells = row.cells;
            for (var i = 0, len = cells.length; i < len; ++i) {
                columnCount += cells[i].colSpan
            }
        }
        return columnCount
    },
    getData: function() {
        var tableElement = this._tableElement;
        return tableElement ? tableElement.data("data") : []
    }
});


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.chart_integration.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.chart_integration.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.chart_integration.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    pivotUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    foreachTree = pivotUtils.foreachTree,
    FORMAT_DICTIONARY = {
        number: "numeric",
        date: "datetime"
    },
    UNBIND_KEY = "dxPivotGridUnbinding";

function getFormattedValue(path, fields) {
    var value = [],
        lastFieldIndex = fields.length - 1;
    each(path, function(i, item) {
        value.push(item.text || pivotUtils.formatValue(item.value, fields[lastFieldIndex - i]))
    });
    return value.reverse()
}

function getExpandedLevel(node) {
    var level = 0;
    foreachTree(node, function(members) {
        level = Math.max(level, members.length - 1)
    });
    return level
}

function processDataCell(processCellArgs, processCell) {
    var chartDataItem = processCellArgs.chartDataItem,
        processedCell = processCell && processCell(processCellArgs);
    if (processedCell) {
        chartDataItem = extend({}, chartDataItem, processedCell.chartDataItem);
        processedCell = extend({}, processCellArgs, processedCell, {
            chartDataItem: chartDataItem
        });
        return processedCell
    }
    return processCellArgs
}

function createChartDataSource(pivotGridDataSource, mapOptions, axisDictionary) {
    var measureIndex, dataField, rowMemberIndex, rowVisibility, rowPathFormatted, rowPath, columnMemberIndex, columnVisibility, columnPath, columnPathFormatted, data = pivotGridDataSource.getData(),
        dataSource = [],
        dataFields = pivotGridDataSource.getAreaFields("data"),
        rowFields = pivotGridDataSource.getAreaFields("row"),
        columnFields = pivotGridDataSource.getAreaFields("column"),
        columnElements = [{
            index: data.grandTotalColumnIndex,
            children: data.columns
        }],
        rowElements = [{
            index: data.grandTotalRowIndex,
            children: data.rows
        }],
        rowLevel = getExpandedLevel(rowElements),
        columnLevel = getExpandedLevel(columnElements);

    function createDataItem() {
        var axis, dataCell = (data.values[rowMemberIndex] || [])[columnMemberIndex] || [],
            value = dataCell[measureIndex],
            processCellArgs = {
                rowPath: rowPath,
                maxRowLevel: rowLevel,
                rowPathFormatted: rowPathFormatted,
                rowFields: rowFields,
                columnPathFormatted: columnPathFormatted,
                maxColumnLevel: columnLevel,
                columnPath: columnPath,
                columnFields: columnFields,
                dataFields: dataFields,
                dataIndex: measureIndex,
                dataValues: dataCell,
                visible: columnVisibility && rowVisibility
            },
            seriesName = (mapOptions.inverted ? columnPathFormatted : rowPathFormatted).join(" - "),
            argument = (mapOptions.inverted ? rowPathFormatted : columnPathFormatted).join("/");
        if (dataFields.length > 1) {
            if ("args" === mapOptions.putDataFieldsInto || "both" === mapOptions.putDataFieldsInto) {
                argument += " | " + dataField.caption
            }
            if ("args" !== mapOptions.putDataFieldsInto) {
                seriesName += " | " + dataField.caption;
                if ("singleAxis" !== mapOptions.dataFieldsDisplayMode) {
                    axis = dataField.caption
                }
            }
        }
        processCellArgs.chartDataItem = {
            val: void 0 === value ? null : value,
            series: seriesName,
            arg: argument
        };
        processCellArgs = processDataCell(processCellArgs, mapOptions.processCell);
        if (processCellArgs.visible) {
            axisDictionary[processCellArgs.chartDataItem.series] = axisDictionary[processCellArgs.chartDataItem.series] || axis;
            dataSource.push(processCellArgs.chartDataItem)
        }
    }

    function foreachRowColumn(callBack) {
        foreachTree(rowElements, function(rowMembers) {
            rowMemberIndex = rowMembers[0].index;
            rowMembers = rowMembers.slice(0, rowMembers.length - 1);
            rowVisibility = rowLevel === rowMembers.length;
            rowPath = pivotUtils.createPath(rowMembers);
            rowPathFormatted = getFormattedValue(rowMembers, rowFields);
            if (0 === rowPath.length) {
                rowPathFormatted = [mapOptions.grandTotalText]
            }
            foreachTree(columnElements, function(columnMembers) {
                columnMemberIndex = columnMembers[0].index;
                columnMembers = columnMembers.slice(0, columnMembers.length - 1);
                columnVisibility = columnLevel === columnMembers.length;
                columnPath = pivotUtils.createPath(columnMembers);
                columnPathFormatted = getFormattedValue(columnMembers, columnFields);
                if (0 === columnPath.length) {
                    columnPathFormatted = [mapOptions.grandTotalText]
                }
                callBack()
            })
        })
    }

    function foreachDataField(callback) {
        each(dataFields, function(index, field) {
            dataField = field;
            measureIndex = index;
            callback()
        })
    }
    if (false === mapOptions.alternateDataFields) {
        foreachDataField(function() {
            foreachRowColumn(createDataItem)
        })
    } else {
        foreachRowColumn(function() {
            foreachDataField(createDataItem)
        })
    }
    return dataSource
}

function createValueAxisOptions(dataSource, options) {
    var dataFields = dataSource.getAreaFields("data");
    if ("args" !== options.putDataFieldsInto && "singleAxis" !== options.dataFieldsDisplayMode || 1 === dataFields.length) {
        var valueAxisSettings = [];
        each(dataFields, function(_, dataField) {
            var valueAxisOptions = {
                name: dataField.caption,
                title: dataField.caption,
                valueType: FORMAT_DICTIONARY[dataField.dataType] || dataField.dataType,
                label: {
                    format: dataField.format
                }
            };
            if (dataField.customizeText) {
                valueAxisOptions.label.customizeText = function(formatObject) {
                    return dataField.customizeText.call(dataField, formatObject)
                }
            }
            if ("splitPanes" === options.dataFieldsDisplayMode) {
                valueAxisOptions.pane = dataField.caption
            }
            valueAxisSettings.push(valueAxisOptions)
        });
        return valueAxisSettings
    }
    return [{}]
}

function createPanesOptions(dataSource, options) {
    var panes = [];
    var dataFields = dataSource.getAreaFields("data");
    if (dataFields.length > 1 && "splitPanes" === options.dataFieldsDisplayMode && "args" !== options.putDataFieldsInto) {
        each(dataFields, function(_, dataField) {
            panes.push({
                name: dataField.caption
            })
        })
    }
    if (!panes.length) {
        panes.push({})
    }
    return panes
}

function createChartOptions(dataSource, options) {
    var _customizeSeries = options.customizeSeries,
        customizeChart = options.customizeChart,
        chartOptions = {
            valueAxis: createValueAxisOptions(dataSource, options),
            panes: createPanesOptions(dataSource, options)
        },
        axisDictionary = {};
    if (customizeChart) {
        chartOptions = extend(true, {}, chartOptions, customizeChart(chartOptions))
    }
    chartOptions.dataSource = createChartDataSource(dataSource, options, axisDictionary);
    chartOptions.seriesTemplate = {
        nameField: "series",
        customizeSeries: function(seriesName) {
            var seriesOptions = {};
            if ("splitPanes" === options.dataFieldsDisplayMode) {
                seriesOptions.pane = axisDictionary[seriesName]
            } else {
                if ("singleAxis" !== options.dataFieldsDisplayMode) {
                    seriesOptions.axis = axisDictionary[seriesName]
                }
            }
            if (_customizeSeries) {
                seriesOptions = extend(seriesOptions, _customizeSeries(seriesName, seriesOptions))
            }
            return seriesOptions
        }
    };
    return chartOptions
}

function getChartInstance(chartElement) {
    if (!chartElement) {
        return false
    }
    if (chartElement.NAME) {
        return "dxChart" === chartElement.NAME && chartElement
    }
    var element = $(chartElement);
    return element.data("dxChart") && element.dxChart("instance")
}

function removeBinding(chart) {
    var unbind = chart.$element().data(UNBIND_KEY);
    unbind && unbind()
}
module.exports = {
    bindChart: function(chart, integrationOptions) {
        integrationOptions = extend({}, integrationOptions);
        var disposeBinding, that = this,
            updateChart = function() {
                integrationOptions.grandTotalText = that.option("texts.grandTotal");
                var chartOptions = createChartOptions(that.getDataSource(), integrationOptions);
                chart.option(chartOptions)
            };
        chart = getChartInstance(chart);
        if (!chart) {
            return null
        }
        removeBinding(chart);
        that.on("changed", updateChart);
        updateChart();
        disposeBinding = function() {
            chart.$element().removeData(UNBIND_KEY);
            that.off("changed", updateChart)
        };
        chart.on("disposing", disposeBinding);
        this.on("disposing", disposeBinding);
        chart.$element().data(UNBIND_KEY, disposeBinding);
        return disposeBinding
    }
};


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_area.js":
/*!**************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_area.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.data_area.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    areaItem = __webpack_require__(/*! ./ui.pivot_grid.area_item */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.area_item.js");
var PIVOTGRID_AREA_CLASS = "dx-pivotgrid-area",
    PIVOTGRID_AREA_DATA_CLASS = "dx-pivotgrid-area-data",
    PIVOTGRID_TOTAL_CLASS = "dx-total",
    PIVOTGRID_GRAND_TOTAL_CLASS = "dx-grandtotal",
    PIVOTGRID_ROW_TOTAL_CLASS = "dx-row-total";
exports.DataArea = areaItem.AreaItem.inherit({
    _getAreaName: function() {
        return "data"
    },
    _createGroupElement: function() {
        return $("<div>").addClass(PIVOTGRID_AREA_CLASS).addClass(PIVOTGRID_AREA_DATA_CLASS)
    },
    _applyCustomStyles: function(options) {
        var cell = options.cell,
            classArray = options.classArray;
        if ("T" === cell.rowType || "T" === cell.columnType) {
            classArray.push(PIVOTGRID_TOTAL_CLASS)
        }
        if ("GT" === cell.rowType || "GT" === cell.columnType) {
            classArray.push(PIVOTGRID_GRAND_TOTAL_CLASS)
        }
        if ("T" === cell.rowType || "GT" === cell.rowType) {
            classArray.push(PIVOTGRID_ROW_TOTAL_CLASS)
        }
        if (options.rowIndex === options.rowsCount - 1) {
            options.cssArray.push("border-bottom: 0px")
        }
        this.callBase(options)
    },
    _moveFakeTable: function(scrollPos) {
        this._moveFakeTableHorizontally(scrollPos.x);
        this._moveFakeTableTop(scrollPos.y);
        this.callBase()
    },
    processScroll: function(useNativeScrolling, horizontalScroll, verticalScroll) {
        var direction = "both";
        if (horizontalScroll && !verticalScroll) {
            direction = "horizontal"
        } else {
            if (!horizontalScroll && verticalScroll) {
                direction = "vertical"
            }
        }
        this._groupElement.css("borderTopWidth", 0).dxScrollable({
            useNative: !!useNativeScrolling,
            useSimulatedScrollbar: !useNativeScrolling,
            direction: direction,
            bounceEnabled: false,
            updateManually: true
        })
    },
    reset: function() {
        this.callBase();
        if (this._virtualContent) {
            this._virtualContent.parent().css("height", "auto")
        }
    },
    setVirtualContentParams: function(params) {
        this.callBase(params);
        this._virtualContent.parent().css("height", params.height);
        this._setTableCss({
            top: params.top,
            left: params.left
        })
    }
});


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_controller.js":
/*!********************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_controller.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.data_controller.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var Callbacks = __webpack_require__(/*! ../../core/utils/callbacks */ "./node_modules/devextreme/core/utils/callbacks.js"),
    deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js"),
    stringUtils = __webpack_require__(/*! ../../core/utils/string */ "./node_modules/devextreme/core/utils/string.js"),
    commonUtils = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js"),
    typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    virtualScrolling = __webpack_require__(/*! ../grid_core/ui.grid_core.virtual_scrolling_core */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.virtual_scrolling_core.js"),
    virtualColumnsCore = __webpack_require__(/*! ../grid_core/ui.grid_core.virtual_columns_core */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.virtual_columns_core.js"),
    stateStoring = __webpack_require__(/*! ../grid_core/ui.grid_core.state_storing_core */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.state_storing_core.js"),
    PivotGridDataSource = __webpack_require__(/*! ./data_source */ "./node_modules/devextreme/ui/pivot_grid/data_source.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    foreachTree = pivotGridUtils.foreachTree,
    foreachTreeAsync = pivotGridUtils.foreachTreeAsync,
    createPath = pivotGridUtils.createPath,
    formatValue = pivotGridUtils.formatValue,
    math = Math,
    GRAND_TOTAL_TYPE = "GT",
    TOTAL_TYPE = "T",
    DATA_TYPE = "D",
    NOT_AVAILABLE = "#N/A";
var proxyMethod = function(instance, methodName, defaultResult) {
    if (!instance[methodName]) {
        instance[methodName] = function() {
            var dataSource = this._dataSource;
            return dataSource ? dataSource[methodName].apply(dataSource, arguments) : defaultResult
        }
    }
};
exports.DataController = Class.inherit(function() {
    function getHeaderItemText(item, description, options) {
        var text = item.text;
        if (typeUtils.isDefined(item.displayText)) {
            text = item.displayText
        } else {
            if (typeUtils.isDefined(item.caption)) {
                text = item.caption
            } else {
                if (item.type === GRAND_TOTAL_TYPE) {
                    text = options.texts.grandTotal
                }
            }
        }
        if (item.isAdditionalTotal) {
            text = stringUtils.format(options.texts.total || "", text)
        }
        return text
    }

    function formatCellValue(value, dataField, errorText) {
        return value === NOT_AVAILABLE ? errorText : formatValue(value, dataField)
    }
    var createHeaderInfo = function() {
        var getHeaderItemsDepth = function(headerItems) {
            var depth = 0;
            foreachTree(headerItems, function(items) {
                depth = math.max(depth, items.length)
            });
            return depth
        };
        var createInfoItem = function(headerItem, breadth, isHorizontal, isTree) {
            var infoItem = {
                type: headerItem.type,
                text: headerItem.text
            };
            if (headerItem.path) {
                infoItem.path = headerItem.path
            }
            if (headerItem.width) {
                infoItem.width = headerItem.width
            }
            if (typeUtils.isDefined(headerItem.wordWrapEnabled)) {
                infoItem.wordWrapEnabled = headerItem.wordWrapEnabled
            }
            if (headerItem.isLast) {
                infoItem.isLast = true
            }
            if (headerItem.sorted) {
                infoItem.sorted = true
            }
            if (headerItem.isMetric) {
                infoItem.dataIndex = headerItem.dataIndex
            }
            if (typeUtils.isDefined(headerItem.expanded)) {
                infoItem.expanded = headerItem.expanded
            }
            if (breadth > 1) {
                infoItem[isHorizontal ? "colspan" : "rowspan"] = breadth
            }
            if (headerItem.depthSize && headerItem.depthSize > 1) {
                infoItem[isHorizontal ? "rowspan" : "colspan"] = headerItem.depthSize
            }
            if (headerItem.index >= 0) {
                infoItem.dataSourceIndex = headerItem.index
            }
            if (isTree && headerItem.children && headerItem.children.length && !headerItem.children[0].isMetric) {
                infoItem.width = null;
                infoItem.isWhiteSpace = true
            }
            return infoItem
        };
        var addInfoItem = function(info, options) {
            var itemInfo, breadth = options.lastIndex - options.index || 1,
                addInfoItemCore = function(info, infoItem, itemIndex, depthIndex, isHorizontal) {
                    var index = isHorizontal ? depthIndex : itemIndex;
                    while (!info[index]) {
                        info.push([])
                    }
                    if (isHorizontal) {
                        info[index].push(infoItem)
                    } else {
                        info[index].unshift(infoItem)
                    }
                };
            itemInfo = createInfoItem(options.headerItem, breadth, options.isHorizontal, options.isTree);
            addInfoItemCore(info, itemInfo, options.index, options.depth, options.isHorizontal);
            if (!options.headerItem.children || 0 === options.headerItem.children.length) {
                return options.lastIndex + 1
            }
            return options.lastIndex
        };
        var isItemSorted = function(items, sortBySummaryPath) {
            var path, item = items[0],
                stringValuesUsed = typeUtils.isString(sortBySummaryPath[0]),
                headerItem = item.dataIndex >= 0 ? items[1] : item;
            if (stringValuesUsed && sortBySummaryPath[0].indexOf("&[") !== -1 && headerItem.key || !headerItem.key) {
                path = createPath(items)
            } else {
                path = iteratorUtils.map(items, function(item) {
                    return item.dataIndex >= 0 ? item.value : item.text
                }).reverse()
            }
            if (item.type === GRAND_TOTAL_TYPE) {
                path = path.slice(1)
            }
            return path.join("/") === sortBySummaryPath.join("/")
        };
        var getViewHeaderItems = function(headerItems, headerDescriptions, cellDescriptions, depthSize, options) {
            var cellDescriptionsCount = cellDescriptions.length,
                viewHeaderItems = createViewHeaderItems(headerItems, headerDescriptions),
                dataFields = options.dataFields,
                d = new Deferred;
            when(viewHeaderItems).done(function(viewHeaderItems) {
                options.notifyProgress(.5);
                if (options.showGrandTotals || 0 === headerDescriptions.length) {
                    viewHeaderItems[!options.showTotalsPrior ? "push" : "unshift"]({
                        type: GRAND_TOTAL_TYPE,
                        isEmpty: options.isEmptyGrandTotal
                    })
                }
                var hideTotals = false === options.showTotals || dataFields.length > 0 && dataFields.length === options.hiddenTotals.length,
                    hideData = dataFields.length > 0 && options.hiddenValues.length === dataFields.length;
                if (hideData && hideTotals) {
                    depthSize = 1
                }
                if (!hideTotals || "tree" === options.layout) {
                    addAdditionalTotalHeaderItems(viewHeaderItems, headerDescriptions, options.showTotalsPrior, "tree" === options.layout)
                }
                when(foreachTreeAsync(viewHeaderItems, function(items) {
                    var item = items[0];
                    if (!item.children || 0 === item.children.length) {
                        item.depthSize = depthSize - items.length + 1
                    }
                })).done(function() {
                    if (cellDescriptionsCount > 1) {
                        addMetricHeaderItems(viewHeaderItems, cellDescriptions, options)
                    }!options.showEmpty && removeHiddenItems(viewHeaderItems);
                    options.notifyProgress(.75);
                    when(foreachTreeAsync(viewHeaderItems, function(items) {
                        var item = items[0],
                            isMetric = item.isMetric,
                            field = headerDescriptions[items.length - 1] || {};
                        if (item.type === DATA_TYPE && !isMetric) {
                            item.width = field.width
                        }
                        if (true === hideData && item.type === DATA_TYPE) {
                            var parentChildren = (items[1] ? items[1].children : viewHeaderItems) || [];
                            parentChildren.splice(inArray(item, parentChildren), 1);
                            return
                        }
                        if (isMetric) {
                            item.wordWrapEnabled = cellDescriptions[item.dataIndex].wordWrapEnabled
                        } else {
                            item.wordWrapEnabled = field.wordWrapEnabled
                        }
                        item.isLast = !item.children || !item.children.length;
                        if (item.isLast) {
                            iteratorUtils.each(options.sortBySummaryPaths, function(index, sortBySummaryPath) {
                                if (!typeUtils.isDefined(item.dataIndex)) {
                                    sortBySummaryPath = sortBySummaryPath.slice(0);
                                    sortBySummaryPath.pop()
                                }
                                if (isItemSorted(items, sortBySummaryPath)) {
                                    item.sorted = true;
                                    return false
                                }
                            })
                        }
                        item.text = getHeaderItemText(item, field, options)
                    })).done(function() {
                        if (!viewHeaderItems.length) {
                            viewHeaderItems.push({})
                        }
                        options.notifyProgress(1);
                        d.resolve(viewHeaderItems)
                    })
                })
            });
            return d
        };

        function createHeaderItem(childrenStack, depth, index) {
            var parent = childrenStack[depth] = childrenStack[depth] || [],
                node = parent[index] = {};
            if (childrenStack[depth + 1]) {
                node.children = childrenStack[depth + 1];
                for (var i = depth + 1; i < childrenStack.length; i++) {
                    childrenStack[i] = void 0
                }
                childrenStack.length = depth + 1
            }
            return node
        }

        function createViewHeaderItems(headerItems, headerDescriptions) {
            var headerItem, headerDescriptionsCount = headerDescriptions && headerDescriptions.length || 0,
                childrenStack = [],
                d = new Deferred;
            when(foreachTreeAsync(headerItems, function(items, index) {
                var item = items[0],
                    path = createPath(items);
                headerItem = createHeaderItem(childrenStack, path.length, index);
                headerItem.type = DATA_TYPE;
                headerItem.value = item.value;
                headerItem.path = path;
                headerItem.text = item.text;
                headerItem.index = item.index;
                headerItem.displayText = item.displayText;
                headerItem.key = item.key;
                headerItem.isEmpty = item.isEmpty;
                if (path.length < headerDescriptionsCount && (!item.children || 0 !== item.children.length)) {
                    headerItem.expanded = !!item.children
                }
            })).done(function() {
                d.resolve(createHeaderItem(childrenStack, 0, 0).children || [])
            });
            return d
        }
        var addMetricHeaderItems = function(headerItems, cellDescriptions, options) {
            foreachTree(headerItems, function(items) {
                var i, item = items[0];
                if (!item.children || 0 === item.children.length) {
                    item.children = [];
                    for (i = 0; i < cellDescriptions.length; i++) {
                        var isGrandTotal = item.type === GRAND_TOTAL_TYPE,
                            isTotal = item.type === TOTAL_TYPE,
                            isValue = item.type === DATA_TYPE,
                            columnIsHidden = false === cellDescriptions[i].visible || isGrandTotal && inArray(i, options.hiddenGrandTotals) !== -1 || isTotal && inArray(i, options.hiddenTotals) !== -1 || isValue && inArray(i, options.hiddenValues) !== -1;
                        if (columnIsHidden) {
                            continue
                        }
                        item.children.push({
                            caption: cellDescriptions[i].caption,
                            path: item.path,
                            type: item.type,
                            value: i,
                            index: item.index,
                            dataIndex: i,
                            isMetric: true,
                            isEmpty: item.isEmpty && item.isEmpty[i]
                        })
                    }
                }
            })
        };
        var addAdditionalTotalHeaderItems = function(headerItems, headerDescriptions, showTotalsPrior, isTree) {
            showTotalsPrior = showTotalsPrior || isTree;
            foreachTree(headerItems, function(items, index) {
                var item = items[0],
                    parentChildren = (items[1] ? items[1].children : headerItems) || [],
                    dataField = headerDescriptions[items.length - 1];
                if (item.type === DATA_TYPE && item.expanded && (false !== dataField.showTotals || isTree)) {
                    index !== -1 && parentChildren.splice(showTotalsPrior ? index : index + 1, 0, extend({}, item, {
                        children: null,
                        type: TOTAL_TYPE,
                        expanded: showTotalsPrior ? true : null,
                        isAdditionalTotal: true
                    }));
                    if (showTotalsPrior) {
                        item.expanded = null
                    }
                }
            })
        };
        var removeEmptyParent = function removeEmptyParent(items, index) {
            var parent = items[index + 1];
            if (!items[index].children.length && parent && parent.children) {
                parent.children.splice(inArray(items[index], parent.children), 1);
                removeEmptyParent(items, index + 1)
            }
        };
        var removeHiddenItems = function(headerItems) {
            foreachTree([{
                children: headerItems
            }], function(items, index) {
                var item = items[0],
                    parentChildren = (items[1] ? items[1].children : headerItems) || [],
                    isEmpty = item.isEmpty;
                if (isEmpty && isEmpty.length) {
                    isEmpty = item.isEmpty.filter(function(isEmpty) {
                        return isEmpty
                    }).length === isEmpty.length
                }
                if (item && !item.children && isEmpty) {
                    parentChildren.splice(index, 1);
                    removeEmptyParent(items, 1)
                }
            })
        };
        var fillHeaderInfo = function(info, viewHeaderItems, depthSize, isHorizontal, isTree) {
            var index, depth, lastIndex = 0,
                indexesByDepth = [0];
            foreachTree(viewHeaderItems, function(items) {
                var headerItem = items[0];
                depth = headerItem.isMetric ? depthSize : items.length - 1;
                while (indexesByDepth.length - 1 < depth) {
                    indexesByDepth.push(indexesByDepth[indexesByDepth.length - 1])
                }
                index = indexesByDepth[depth] || 0;
                lastIndex = addInfoItem(info, {
                    headerItem: headerItem,
                    index: index,
                    lastIndex: lastIndex,
                    depth: depth,
                    isHorizontal: isHorizontal,
                    isTree: isTree
                });
                indexesByDepth.length = depth;
                indexesByDepth.push(lastIndex)
            })
        };
        return function(headerItems, headerDescriptions, cellDescriptions, isHorizontal, options) {
            var info = [],
                depthSize = getHeaderItemsDepth(headerItems) || 1,
                d = new Deferred;
            getViewHeaderItems(headerItems, headerDescriptions, cellDescriptions, depthSize, options).done(function(viewHeaderItems) {
                fillHeaderInfo(info, viewHeaderItems, depthSize, isHorizontal, "tree" === options.layout);
                options.notifyProgress(1);
                d.resolve(info)
            });
            return d
        }
    }();

    function createSortPaths(headerFields, dataFields) {
        var sortBySummaryPaths = [];
        iteratorUtils.each(headerFields, function(index, headerField) {
            var fieldIndex = pivotGridUtils.findField(dataFields, headerField.sortBySummaryField);
            if (fieldIndex >= 0) {
                sortBySummaryPaths.push((headerField.sortBySummaryPath || []).concat([fieldIndex]))
            }
        });
        return sortBySummaryPaths
    }

    function foreachRowInfo(rowsInfo, callback) {
        var columnOffset = 0,
            columnOffsetResetIndexes = [];
        for (var i = 0; i < rowsInfo.length; i++) {
            for (var j = 0; j < rowsInfo[i].length; j++) {
                var rowSpanOffset = (rowsInfo[i][j].rowspan || 1) - 1,
                    visibleIndex = i + rowSpanOffset;
                if (columnOffsetResetIndexes[i]) {
                    columnOffset -= columnOffsetResetIndexes[i];
                    columnOffsetResetIndexes[i] = 0
                }
                if (false === callback(rowsInfo[i][j], visibleIndex, i, j, columnOffset)) {
                    break
                }
                columnOffsetResetIndexes[i + (rowsInfo[i][j].rowspan || 1)] = (columnOffsetResetIndexes[i + (rowsInfo[i][j].rowspan || 1)] || 0) + 1;
                columnOffset++
            }
        }
    }

    function createCellsInfo(rowsInfo, columnsInfo, data, dataFields, dataFieldArea, errorText) {
        var info = [],
            dataFieldAreaInRows = "row" === dataFieldArea,
            dataSourceCells = data.values;
        dataSourceCells.length && foreachRowInfo(rowsInfo, function(rowInfo, rowIndex) {
            var row = info[rowIndex] = [],
                dataRow = dataSourceCells[rowInfo.dataSourceIndex >= 0 ? rowInfo.dataSourceIndex : data.grandTotalRowIndex] || [];
            rowInfo.isLast && virtualColumnsCore.foreachColumnInfo(columnsInfo, function(columnInfo, columnIndex) {
                var dataIndex = (dataFieldAreaInRows ? rowInfo.dataIndex : columnInfo.dataIndex) || 0,
                    dataField = dataFields[dataIndex];
                if (columnInfo.isLast && dataField) {
                    var cellValue, cell = dataRow[columnInfo.dataSourceIndex >= 0 ? columnInfo.dataSourceIndex : data.grandTotalColumnIndex];
                    if (!Array.isArray(cell)) {
                        cell = [cell]
                    }
                    cellValue = cell[dataIndex];
                    row[columnIndex] = {
                        text: formatCellValue(cellValue, dataField, errorText),
                        value: cellValue,
                        format: dataField.format,
                        dataType: dataField.dataType,
                        columnType: columnInfo.type,
                        rowType: rowInfo.type,
                        rowPath: rowInfo.path || [],
                        columnPath: columnInfo.path || [],
                        dataIndex: dataIndex
                    };
                    if (dataField.width) {
                        row[columnIndex].width = dataField.width
                    }
                }
            })
        });
        return info
    }

    function getHeaderIndexedItems(headerItems, options) {
        var visibleIndex = 0,
            indexedItems = [];
        foreachTree(headerItems, function(items) {
            var headerItem = items[0],
                path = createPath(items);
            if (headerItem.children && false === options.showTotals) {
                return
            }
            var indexedItem = extend(true, {}, headerItem, {
                visibleIndex: visibleIndex++,
                path: path
            });
            if (typeUtils.isDefined(indexedItem.index)) {
                indexedItems[indexedItem.index] = indexedItem
            } else {
                indexedItems.push(indexedItem)
            }
        });
        return indexedItems
    }

    function createScrollController(dataController, component, dataAdapter) {
        if (component && "virtual" === component.option("scrolling.mode")) {
            return new virtualScrolling.VirtualScrollController(component, extend({
                hasKnownLastPage: function() {
                    return true
                },
                pageCount: function() {
                    return math.ceil(this.totalItemsCount() / this.pageSize())
                },
                updateLoading: function() {},
                itemsCount: function() {
                    if (this.pageIndex() < this.pageCount() - 1) {
                        return this.pageSize()
                    } else {
                        return this.totalItemsCount() % this.pageSize()
                    }
                },
                items: function() {
                    return []
                },
                viewportItems: function() {
                    return []
                },
                onChanged: function() {},
                isLoading: function() {
                    return dataController.isLoading()
                },
                changingDuration: function() {
                    return dataController._changingDuration || 0
                }
            }, dataAdapter))
        }
    }

    function getHiddenTotals(dataFields) {
        var result = [];
        iteratorUtils.each(dataFields, function(index, field) {
            if (false === field.showTotals) {
                result.push(index)
            }
        });
        return result
    }

    function getHiddenValues(dataFields) {
        var result = [];
        dataFields.forEach(function(field, index) {
            if (void 0 === field.showValues && false === field.showTotals || false === field.showValues) {
                result.push(index)
            }
        });
        return result
    }

    function getHiddenGrandTotalsTotals(dataFields, columnFields) {
        var result = [];
        iteratorUtils.each(dataFields, function(index, field) {
            if (false === field.showGrandTotals) {
                result.push(index)
            }
        });
        if (0 === columnFields.length && result.length === dataFields.length) {
            result = []
        }
        return result
    }
    var members = {
        ctor: function(options) {
            var that = this,
                virtualScrollControllerChanged = that._fireChanged.bind(that);
            options = that._options = options || {};
            that.dataSourceChanged = Callbacks();
            that._dataSource = that._createDataSource(options);
            that._rowsScrollController = createScrollController(that, options.component, {
                totalItemsCount: function() {
                    return that.totalRowCount()
                },
                pageIndex: function(index) {
                    return that.rowPageIndex(index)
                },
                pageSize: function() {
                    return that.rowPageSize()
                },
                load: function() {
                    if (that._rowsScrollController.pageIndex() >= this.pageCount()) {
                        that._rowsScrollController.pageIndex(this.pageCount() - 1)
                    }
                    return that._rowsScrollController.handleDataChanged(virtualScrollControllerChanged)
                }
            });
            that._columnsScrollController = createScrollController(that, options.component, {
                totalItemsCount: function() {
                    return that.totalColumnCount()
                },
                pageIndex: function(index) {
                    return that.columnPageIndex(index)
                },
                pageSize: function() {
                    return that.columnPageSize()
                },
                load: function() {
                    if (that._columnsScrollController.pageIndex() >= this.pageCount()) {
                        that._columnsScrollController.pageIndex(this.pageCount() - 1)
                    }
                    return that._columnsScrollController.handleDataChanged(virtualScrollControllerChanged)
                }
            });
            that._stateStoringController = new stateStoring.StateStoringController(options.component).init();
            that._columnsInfo = [];
            that._rowsInfo = [];
            that._cellsInfo = [];
            that.expandValueChanging = Callbacks();
            that.loadingChanged = Callbacks();
            that.progressChanged = Callbacks();
            that.scrollChanged = Callbacks();
            that.load();
            that._update();
            that.changed = Callbacks()
        },
        _fireChanged: function() {
            var that = this,
                startChanging = new Date;
            that.changed && !that._lockChanged && that.changed.fire();
            that._changingDuration = new Date - startChanging
        },
        load: function() {
            var that = this,
                stateStoringController = this._stateStoringController;
            if (stateStoringController.isEnabled() && !stateStoringController.isLoaded()) {
                stateStoringController.load().always(function(state) {
                    if (state) {
                        that._dataSource.state(state)
                    } else {
                        that._dataSource.load()
                    }
                })
            } else {
                that._dataSource.load()
            }
        },
        calculateVirtualContentParams: function(contentParams) {
            var oldColumnViewportItemSize, oldRowViewportItemSize, newLeftPosition, newTopPosition, that = this,
                rowsScrollController = that._rowsScrollController,
                columnsScrollController = that._columnsScrollController,
                rowViewportItemSize = contentParams.contentHeight / contentParams.rowCount,
                columnViewportItemSize = contentParams.contentWidth / contentParams.columnCount;
            if (rowsScrollController && columnsScrollController) {
                oldColumnViewportItemSize = columnsScrollController.viewportItemSize();
                oldRowViewportItemSize = rowsScrollController.viewportItemSize();
                rowsScrollController.viewportItemSize(rowViewportItemSize);
                columnsScrollController.viewportItemSize(columnViewportItemSize);
                rowsScrollController.viewportSize(contentParams.viewportHeight / rowsScrollController.viewportItemSize());
                rowsScrollController.setContentSize(contentParams.contentHeight);
                columnsScrollController.viewportSize(contentParams.viewportWidth / columnsScrollController.viewportItemSize());
                columnsScrollController.setContentSize(contentParams.contentWidth);
                commonUtils.deferUpdate(function() {
                    columnsScrollController.loadIfNeed();
                    rowsScrollController.loadIfNeed()
                });
                newLeftPosition = columnsScrollController.getViewportPosition() * columnViewportItemSize / oldColumnViewportItemSize;
                newTopPosition = rowsScrollController.getViewportPosition() * rowViewportItemSize / oldRowViewportItemSize;
                that.setViewportPosition(newLeftPosition, newTopPosition);
                that.scrollChanged.fire({
                    left: newLeftPosition,
                    top: newTopPosition
                });
                return {
                    contentTop: rowsScrollController.getContentOffset(),
                    contentLeft: columnsScrollController.getContentOffset(),
                    width: columnsScrollController.getVirtualContentSize(),
                    height: rowsScrollController.getVirtualContentSize()
                }
            }
        },
        setViewportPosition: function(left, top) {
            this._rowsScrollController.setViewportPosition(top || 0);
            this._columnsScrollController.setViewportPosition(left || 0)
        },
        subscribeToWindowScrollEvents: function($element) {
            this._rowsScrollController && this._rowsScrollController.subscribeToWindowScrollEvents($element)
        },
        updateWindowScrollPosition: function(position) {
            this._rowsScrollController && this._rowsScrollController.scrollTo(position)
        },
        updateViewOptions: function(options) {
            extend(this._options, options);
            this._update()
        },
        _handleExpandValueChanging: function(e) {
            this.expandValueChanging.fire(e)
        },
        _handleLoadingChanged: function(isLoading) {
            this.loadingChanged.fire(isLoading)
        },
        _handleProgressChanged: function(progress) {
            this.progressChanged.fire(progress)
        },
        _handleFieldsPrepared: function(e) {
            this._options.onFieldsPrepared && this._options.onFieldsPrepared(e)
        },
        _createDataSource: function(options) {
            var dataSource, that = this,
                dataSourceOptions = options.dataSource;
            that._isSharedDataSource = dataSourceOptions instanceof PivotGridDataSource;
            if (that._isSharedDataSource) {
                dataSource = dataSourceOptions
            } else {
                dataSource = new PivotGridDataSource(dataSourceOptions)
            }
            that._expandValueChangingHandler = that._handleExpandValueChanging.bind(that);
            that._loadingChangedHandler = that._handleLoadingChanged.bind(that);
            that._progressChangedHandler = function(progress) {
                that._handleProgressChanged(.8 * progress)
            };
            that._fieldsPreparedHandler = that._handleFieldsPrepared.bind(that);
            that._changedHandler = function() {
                that._update();
                that.dataSourceChanged.fire()
            };
            dataSource.on("changed", that._changedHandler);
            dataSource.on("expandValueChanging", that._expandValueChangingHandler);
            dataSource.on("loadingChanged", that._loadingChangedHandler);
            dataSource.on("progressChanged", that._progressChangedHandler);
            dataSource.on("fieldsPrepared", that._fieldsPreparedHandler);
            return dataSource
        },
        getDataSource: function() {
            return this._dataSource
        },
        isLoading: function() {
            return this._dataSource.isLoading()
        },
        beginLoading: function() {
            this._dataSource.beginLoading()
        },
        endLoading: function() {
            this._dataSource.endLoading()
        },
        _update: function() {
            var that = this,
                dataSource = that._dataSource,
                options = that._options,
                columnFields = dataSource.getAreaFields("column"),
                rowFields = dataSource.getAreaFields("row"),
                dataFields = dataSource.getAreaFields("data"),
                dataFieldsForRows = "row" === options.dataFieldArea ? dataFields : [],
                dataFieldsForColumns = "row" !== options.dataFieldArea ? dataFields : [],
                data = dataSource.getData(),
                hiddenTotals = getHiddenTotals(dataFields),
                hiddenValues = getHiddenValues(dataFields),
                hiddenGrandTotals = getHiddenGrandTotalsTotals(dataFields, columnFields),
                grandTotalsAreHiddenForNotAllDataFields = dataFields.length > 0 ? hiddenGrandTotals.length !== dataFields.length : true,
                notifyProgress = function(progress) {
                    this.progress = progress;
                    that._handleProgressChanged(.8 + .1 * rowOptions.progress + .1 * columnOptions.progress)
                },
                rowOptions = {
                    isEmptyGrandTotal: data.isEmptyGrandTotalRow,
                    texts: options.texts || {},
                    hiddenTotals: hiddenTotals,
                    hiddenValues: hiddenValues,
                    hiddenGrandTotals: [],
                    showTotals: options.showRowTotals,
                    showGrandTotals: false !== options.showRowGrandTotals && grandTotalsAreHiddenForNotAllDataFields,
                    sortBySummaryPaths: createSortPaths(columnFields, dataFields),
                    showTotalsPrior: "rows" === options.showTotalsPrior || "both" === options.showTotalsPrior,
                    showEmpty: !options.hideEmptySummaryCells,
                    layout: options.rowHeaderLayout,
                    fields: rowFields,
                    dataFields: dataFields,
                    progress: 0,
                    notifyProgress: notifyProgress
                },
                columnOptions = {
                    isEmptyGrandTotal: data.isEmptyGrandTotalColumn,
                    texts: options.texts || {},
                    hiddenTotals: hiddenTotals,
                    hiddenValues: hiddenValues,
                    hiddenGrandTotals: hiddenGrandTotals,
                    showTotals: options.showColumnTotals,
                    showTotalsPrior: "columns" === options.showTotalsPrior || "both" === options.showTotalsPrior,
                    showGrandTotals: false !== options.showColumnGrandTotals && grandTotalsAreHiddenForNotAllDataFields,
                    sortBySummaryPaths: createSortPaths(rowFields, dataFields),
                    showEmpty: !options.hideEmptySummaryCells,
                    fields: columnFields,
                    dataFields: dataFields,
                    progress: 0,
                    notifyProgress: notifyProgress
                };
            if (!typeUtils.isDefined(data.grandTotalRowIndex)) {
                data.grandTotalRowIndex = getHeaderIndexedItems(data.rows, rowOptions).length
            }
            if (!typeUtils.isDefined(data.grandTotalColumnIndex)) {
                data.grandTotalColumnIndex = getHeaderIndexedItems(data.columns, columnOptions).length
            }
            dataSource._changeLoadingCount(1);
            when(createHeaderInfo(data.columns, columnFields, dataFieldsForColumns, true, columnOptions), createHeaderInfo(data.rows, rowFields, dataFieldsForRows, false, rowOptions)).always(function() {
                dataSource._changeLoadingCount(-1)
            }).done(function(columnsInfo, rowsInfo) {
                that._columnsInfo = columnsInfo;
                that._rowsInfo = rowsInfo;
                if (that._rowsScrollController && that._columnsScrollController && that.changed) {
                    that._rowsScrollController.reset();
                    that._columnsScrollController.reset();
                    that._lockChanged = true;
                    that._rowsScrollController.load();
                    that._columnsScrollController.load();
                    that._lockChanged = false
                }
            }).done(function() {
                that._fireChanged();
                if (that._stateStoringController.isEnabled() && !that._dataSource.isLoading()) {
                    that._stateStoringController.state(that._dataSource.state());
                    that._stateStoringController.save()
                }
            })
        },
        getRowsInfo: function(getAllData) {
            var rowspan, i, that = this,
                rowsInfo = that._rowsInfo,
                scrollController = that._rowsScrollController;
            if (scrollController && !getAllData) {
                var startIndex = scrollController.beginPageIndex() * that.rowPageSize(),
                    endIndex = scrollController.endPageIndex() * that.rowPageSize() + that.rowPageSize(),
                    newRowsInfo = [],
                    maxDepth = 1;
                foreachRowInfo(rowsInfo, function(rowInfo, visibleIndex, rowIndex, _, columnIndex) {
                    var isVisible = visibleIndex >= startIndex && rowIndex < endIndex,
                        index = rowIndex < startIndex ? 0 : rowIndex - startIndex,
                        cell = rowInfo;
                    if (isVisible) {
                        newRowsInfo[index] = newRowsInfo[index] || [];
                        rowspan = rowIndex < startIndex ? rowInfo.rowspan - (startIndex - rowIndex) || 1 : rowInfo.rowspan;
                        if (startIndex + index + rowspan > endIndex) {
                            rowspan = endIndex - (index + startIndex) || 1
                        }
                        if (rowspan !== rowInfo.rowspan) {
                            cell = extend({}, cell, {
                                rowspan: rowspan
                            })
                        }
                        newRowsInfo[index].push(cell);
                        maxDepth = math.max(maxDepth, columnIndex + 1)
                    } else {
                        if (i > endIndex) {
                            return false
                        }
                    }
                });
                foreachRowInfo(newRowsInfo, function(rowInfo, visibleIndex, rowIndex, columnIndex, realColumnIndex) {
                    var colspan = rowInfo.colspan || 1;
                    if (realColumnIndex + colspan > maxDepth) {
                        newRowsInfo[rowIndex][columnIndex] = extend({}, rowInfo, {
                            colspan: maxDepth - realColumnIndex || 1
                        })
                    }
                });
                return newRowsInfo
            }
            return rowsInfo
        },
        getColumnsInfo: function(getAllData) {
            var that = this,
                info = that._columnsInfo,
                scrollController = that._columnsScrollController;
            if (scrollController && !getAllData) {
                var startIndex = scrollController.beginPageIndex() * that.columnPageSize(),
                    endIndex = scrollController.endPageIndex() * that.columnPageSize() + that.columnPageSize();
                info = virtualColumnsCore.createColumnsInfo(info, startIndex, endIndex)
            }
            return info
        },
        totalRowCount: function() {
            return this._rowsInfo.length
        },
        rowPageIndex: function(index) {
            if (void 0 !== index) {
                this._rowPageIndex = index
            }
            return this._rowPageIndex || 0
        },
        totalColumnCount: function() {
            var count = 0;
            if (this._columnsInfo && this._columnsInfo.length) {
                for (var i = 0; i < this._columnsInfo[0].length; i++) {
                    count += this._columnsInfo[0][i].colspan || 1
                }
            }
            return count
        },
        rowPageSize: function(size) {
            if (void 0 !== size) {
                this._rowPageSize = size
            }
            return this._rowPageSize || 20
        },
        columnPageSize: function(size) {
            if (void 0 !== size) {
                this._columnPageSize = size
            }
            return this._columnPageSize || 20
        },
        columnPageIndex: function(index) {
            if (void 0 !== index) {
                this._columnPageIndex = index
            }
            return this._columnPageIndex || 0
        },
        getCellsInfo: function(getAllData) {
            var rowsInfo = this.getRowsInfo(getAllData),
                columnsInfo = this.getColumnsInfo(getAllData),
                data = this._dataSource.getData(),
                texts = this._options.texts || {};
            return createCellsInfo(rowsInfo, columnsInfo, data, this._dataSource.getAreaFields("data"), this._options.dataFieldArea, texts.dataNotAvailable)
        },
        dispose: function() {
            var that = this;
            if (that._isSharedDataSource) {
                that._dataSource.off("changed", that._changedHandler);
                that._dataSource.off("expandValueChanging", that._expandValueChangingHandler);
                that._dataSource.off("loadingChanged", that._loadingChangedHandler);
                that._dataSource.off("progressChanged", that._progressChangedHandler)
            } else {
                that._dataSource.dispose()
            }
            that._columnsScrollController && that._columnsScrollController.dispose();
            that._rowsScrollController && that._rowsScrollController.dispose();
            that._stateStoringController.dispose();
            that.expandValueChanging.empty();
            that.changed.empty();
            that.loadingChanged.empty();
            that.progressChanged.empty();
            that.scrollChanged.empty();
            that.dataSourceChanged.empty()
        }
    };
    proxyMethod(members, "applyPartialDataSource");
    proxyMethod(members, "collapseHeaderItem");
    proxyMethod(members, "expandHeaderItem");
    proxyMethod(members, "getData");
    proxyMethod(members, "isEmpty");
    return members
}());


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.export.js":
/*!***********************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.export.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.export.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var Class = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/core/class.js"),
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    formatHelper = __webpack_require__(/*! ../../format_helper */ "./node_modules/devextreme/format_helper.js"),
    numberLocalization = __webpack_require__(/*! ../../localization/number */ "./node_modules/devextreme/localization/number.js"),
    clientExporter = __webpack_require__(/*! ../../exporter */ "./node_modules/devextreme/exporter.js"),
    excelExporter = clientExporter.excel,
    DEFAULT_DATA_TYPE = "string",
    exportMixin = __webpack_require__(/*! ../grid_core/ui.grid_core.export_mixin */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.export_mixin.js"),
    deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    COLUMN_HEADER_STYLE_ID = 0,
    ROW_HEADER_STYLE_ID = 1,
    DATA_STYLE_OFFSET = 2,
    DEFAUL_COLUMN_WIDTH = 100;
exports.ExportMixin = extend({}, exportMixin, {
    exportToExcel: function() {
        var that = this;
        clientExporter.export(that.getDataProvider(), {
            fileName: that.option("export.fileName"),
            proxyUrl: that.option("export.proxyUrl"),
            format: "EXCEL",
            rtlEnabled: that.option("rtlEnabled"),
            ignoreErrors: that.option("export.ignoreExcelErrors"),
            exportingAction: that._actions.onExporting,
            exportedAction: that._actions.onExported,
            fileSavingAction: that._actions.onFileSaving
        }, excelExporter.getData)
    },
    _getLength: function(items) {
        var i, itemCount = items[0].length,
            cellCount = 0;
        for (i = 0; i < itemCount; i++) {
            cellCount += items[0][i].colspan || 1
        }
        return cellCount
    },
    _getAllItems: function(columnsInfo, rowsInfoItems, cellsInfo) {
        var cellIndex, rowIndex, sourceItems = columnsInfo.concat(cellsInfo),
            rowsLength = this._getLength(rowsInfoItems),
            headerRowsCount = columnsInfo.length;
        for (rowIndex = 0; rowIndex < rowsInfoItems.length; rowIndex++) {
            for (cellIndex = rowsInfoItems[rowIndex].length - 1; cellIndex >= 0; cellIndex--) {
                if (!isDefined(sourceItems[rowIndex + headerRowsCount])) {
                    sourceItems[rowIndex + headerRowsCount] = []
                }
                sourceItems[rowIndex + headerRowsCount].splice(0, 0, extend({}, rowsInfoItems[rowIndex][cellIndex]))
            }
        }
        sourceItems[0].splice(0, 0, extend({}, this._getEmptyCell(), {
            alignment: this._options.rtlEnabled ? "right" : "left",
            colspan: rowsLength,
            rowspan: headerRowsCount
        }));
        return this._prepareItems(sourceItems)
    },
    getDataProvider: function() {
        var that = this,
            dataController = this._dataController,
            items = new Deferred;
        dataController.beginLoading();
        setTimeout(function() {
            var columnsInfo = extend(true, [], dataController.getColumnsInfo(true)),
                rowsInfoItems = extend(true, [], dataController.getRowsInfo(true)),
                cellsInfo = dataController.getCellsInfo(true);
            items.resolve(that._getAllItems(columnsInfo, rowsInfoItems, cellsInfo));
            dataController.endLoading()
        });
        return new exports.DataProvider({
            items: items,
            rtlEnabled: this.option("rtlEnabled"),
            dataFields: this.getDataSource().getAreaFields("data"),
            customizeExcelCell: this.option("export.customizeExcelCell")
        })
    }
});

function getCellDataType(field) {
    if (field && field.customizeText) {
        return "string"
    }
    if (field.dataType) {
        return field.dataType
    }
    if (field.format) {
        if (1 === numberLocalization.parse(formatHelper.format(1, field.format))) {
            return "number"
        }
        if (formatHelper.format(new Date, field.format)) {
            return "date"
        }
    }
    return DEFAULT_DATA_TYPE
}
exports.DataProvider = Class.inherit({
    ctor: function(options) {
        this._options = options;
        this._styles = []
    },
    ready: function() {
        var that = this,
            options = that._options,
            dataFields = options.dataFields;
        return when(options.items).done(function(items) {
            var headerSize = items[0][0].rowspan,
                columns = items[headerSize - 1],
                dataItemStyle = {
                    alignment: options.rtlEnabled ? "left" : "right"
                };
            that._styles = [{
                alignment: "center",
                dataType: "string"
            }, {
                alignment: options.rtlEnabled ? "right" : "left",
                dataType: "string"
            }];
            if (dataFields.length) {
                dataFields.forEach(function(dataField) {
                    that._styles.push(extend({}, dataItemStyle, {
                        format: dataField.format,
                        dataType: getCellDataType(dataField)
                    }))
                })
            } else {
                that._styles.push(dataItemStyle)
            }
            each(columns, function(columnIndex, column) {
                column.width = DEFAUL_COLUMN_WIDTH
            });
            options.columns = columns;
            options.items = items
        })
    },
    getColumns: function() {
        return this._options.columns
    },
    getRowsCount: function() {
        return this._options.items.length
    },
    getGroupLevel: function() {
        return 0
    },
    getCellMerging: function(rowIndex, cellIndex) {
        var items = this._options.items,
            item = items[rowIndex] && items[rowIndex][cellIndex];
        return item ? {
            colspan: item.colspan - 1,
            rowspan: item.rowspan - 1
        } : {
            colspan: 0,
            rowspan: 0
        }
    },
    getFrozenArea: function() {
        var items = this._options.items;
        return {
            x: items[0][0].colspan,
            y: items[0][0].rowspan
        }
    },
    getCellType: function(rowIndex, cellIndex) {
        var style = this._styles[this.getStyleId(rowIndex, cellIndex)];
        return style && style.dataType || "string"
    },
    getCellData: function(rowIndex, cellIndex) {
        var result = {};
        var items = this._options.items,
            item = items[rowIndex] && items[rowIndex][cellIndex] || {};
        if ("string" === this.getCellType(rowIndex, cellIndex)) {
            result.value = item.text
        } else {
            result.value = item.value
        }
        return result
    },
    getStyles: function() {
        return this._styles
    },
    getStyleId: function(rowIndex, cellIndex) {
        var items = this._options.items,
            columnHeaderSize = items[0][0].rowspan,
            rowHeaderSize = items[0][0].colspan,
            item = items[rowIndex] && items[rowIndex][cellIndex] || {};
        if (0 === cellIndex && 0 === rowIndex) {
            return COLUMN_HEADER_STYLE_ID
        } else {
            if (cellIndex >= rowHeaderSize && rowIndex < columnHeaderSize) {
                return COLUMN_HEADER_STYLE_ID
            } else {
                if (rowIndex >= columnHeaderSize && cellIndex < rowHeaderSize) {
                    return ROW_HEADER_STYLE_ID
                }
            }
        }
        return DATA_STYLE_OFFSET + (item.dataIndex || 0)
    },
    hasCustomizeExcelCell: function() {
        return isDefined(this._options.customizeExcelCell)
    },
    customizeExcelCell: function(e) {
        if (this._options.customizeExcelCell) {
            this._options.customizeExcelCell(e)
        }
    }
});


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.field_chooser.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    iconUtils = __webpack_require__(/*! ../../core/utils/icon */ "./node_modules/devextreme/core/utils/icon.js"),
    hasWindow = __webpack_require__(/*! ../../core/utils/window */ "./node_modules/devextreme/core/utils/window.js").hasWindow(),
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    messageLocalization = __webpack_require__(/*! ../../localization/message */ "./node_modules/devextreme/localization/message.js"),
    registerComponent = __webpack_require__(/*! ../../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    TreeView = __webpack_require__(/*! ../tree_view */ "./node_modules/devextreme/ui/tree_view.js"),
    ContextMenu = __webpack_require__(/*! ../context_menu */ "./node_modules/devextreme/ui/context_menu.js"),
    BaseFieldChooser = __webpack_require__(/*! ./ui.pivot_grid.field_chooser_base */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser_base.js"),
    inArray = inArray,
    each = iteratorUtils.each,
    DIV = "<div>";
__webpack_require__(/*! ./data_source */ "./node_modules/devextreme/ui/pivot_grid/data_source.js");
var FIELDCHOOSER_CLASS = "dx-pivotgridfieldchooser",
    FIELDCHOOSER_CONTAINER_CLASS = "dx-pivotgridfieldchooser-container",
    FIELDS_CONTAINER_CLASS = "dx-pivotgrid-fields-container",
    AREA_DRAG_CLASS = "dx-pivotgrid-drag-action";

function getDimensionFields(item, fields) {
    var result = [];
    if (item.items) {
        for (var i = 0; i < item.items.length; i++) {
            result.push.apply(result, getDimensionFields(item.items[i], fields))
        }
    } else {
        if (isDefined(item.index)) {
            result.push(fields[item.index])
        }
    }
    return result
}

function getFirstItem(item, condition) {
    if (item.items) {
        for (var i = 0; i < item.items.length; i++) {
            var childrenItem = getFirstItem(item.items[i], condition);
            if (childrenItem) {
                return childrenItem
            }
        }
    }
    if (condition(item)) {
        return item
    }
}
var compareOrder = [function(a, b) {
    var aValue = -!!a.isMeasure,
        bValue = +!!b.isMeasure;
    return aValue + bValue
}, function(a, b) {
    var aValue = -!!(a.items && a.items.length),
        bValue = +!!(b.items && b.items.length);
    return aValue + bValue
}, function(a, b) {
    var aValue = +!!(a.field && a.field.levels && a.field.levels.length),
        bValue = -!!(b.field && b.field.levels && b.field.levels.length);
    return aValue + bValue
}, pivotGridUtils.getCompareFunction(function(item) {
    return item.text
})];

function compareItems(a, b) {
    var result = 0,
        i = 0;
    while (!result && compareOrder[i]) {
        result = compareOrder[i++](a, b)
    }
    return result
}

function getScrollable(container) {
    return container.find(".dx-scrollable").dxScrollable("instance")
}
var FieldChooser = BaseFieldChooser.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            height: 400,
            layout: 0,
            dataSource: null,
            onContextMenuPreparing: null,
            allowSearch: false,
            searchTimeout: 500,
            texts: {
                columnFields: messageLocalization.format("dxPivotGrid-columnFields"),
                rowFields: messageLocalization.format("dxPivotGrid-rowFields"),
                dataFields: messageLocalization.format("dxPivotGrid-dataFields"),
                filterFields: messageLocalization.format("dxPivotGrid-filterFields"),
                allFields: messageLocalization.format("dxPivotGrid-allFields")
            }
        })
    },
    _refreshDataSource: function() {
        var that = this;
        that._expandedPaths = [];
        that._changedHandler = that._changedHandler || function() {
            each(that._dataChangedHandlers, function(_, func) {
                func()
            });
            that._fireContentReadyAction();
            that._skipStateChange = true;
            that.option("state", that._dataSource.state());
            that._skipStateChange = false
        };
        if (that._dataSource) {
            that._dataSource.off("changed", that._changedHandler);
            that._dataSource = void 0
        }
        that.callBase();
        that._dataSource && that._dataSource.on("changed", that._changedHandler)
    },
    _init: function() {
        this.callBase();
        this._refreshDataSource();
        this._dataChangedHandlers = [];
        this._initActions()
    },
    _initActions: function() {
        this._actions = {
            onContextMenuPreparing: this._createActionByOption("onContextMenuPreparing")
        }
    },
    _trigger: function(eventName, eventArg) {
        this._actions[eventName](eventArg)
    },
    _setOptionsByReference: function() {
        this.callBase();
        extend(this._optionsByReference, {
            dataSource: true
        })
    },
    _optionChanged: function(args) {
        var that = this;
        switch (args.name) {
            case "dataSource":
                that._refreshDataSource();
                that._invalidate();
                break;
            case "layout":
            case "texts":
            case "allowSearch":
            case "searchTimeout":
                that._invalidate();
                break;
            case "onContextMenuPreparing":
                that._actions[args.name] = that._createActionByOption(args.name);
                break;
            default:
                that.callBase(args)
        }
    },
    _clean: function(skipStateSetting) {
        !skipStateSetting && this._dataSource && this.option("state", this._dataSource.state());
        this.$element().children("." + FIELDCHOOSER_CONTAINER_CLASS).remove()
    },
    _renderLayout0: function($container) {
        var $col1, $col2, $col3, $col4, $row1, $row2, that = this;
        $container.addClass("dx-layout-0");
        $row1 = $(DIV).addClass("dx-row").appendTo($container);
        $row2 = $(DIV).addClass("dx-row").appendTo($container);
        $col1 = $(DIV).addClass("dx-col").appendTo($row1);
        $col2 = $(DIV).addClass("dx-col").appendTo($row1);
        $col3 = $(DIV).addClass("dx-col").appendTo($row2);
        $col4 = $(DIV).addClass("dx-col").appendTo($row2);
        that._renderArea($col1, "all");
        that._renderArea($col2, "row");
        that._renderArea($col2, "column");
        that._renderArea($col3, "filter");
        that._renderArea($col4, "data")
    },
    _renderLayout1: function($container) {
        var $col1, $col2, that = this;
        $col1 = $(DIV).addClass("dx-col").appendTo($container);
        $col2 = $(DIV).addClass("dx-col").appendTo($container);
        that._renderArea($col1, "all");
        that._renderArea($col2, "filter");
        that._renderArea($col2, "row");
        that._renderArea($col2, "column");
        that._renderArea($col2, "data")
    },
    _renderLayout2: function($container) {
        var $col1, $col2, $row1, $row2, that = this;
        $container.addClass("dx-layout-2");
        $row1 = $(DIV).addClass("dx-row").appendTo($container);
        that._renderArea($row1, "all");
        $row2 = $(DIV).addClass("dx-row").appendTo($container);
        $col1 = $(DIV).addClass("dx-col").appendTo($row2);
        $col2 = $(DIV).addClass("dx-col").appendTo($row2);
        that._renderArea($col1, "filter");
        that._renderArea($col1, "row");
        that._renderArea($col2, "column");
        that._renderArea($col2, "data")
    },
    _initMarkup: function() {
        var that = this,
            $element = this.$element(),
            $container = $(DIV).addClass(FIELDCHOOSER_CONTAINER_CLASS).appendTo($element),
            layout = that.option("layout");
        that.callBase();
        $element.addClass(FIELDCHOOSER_CLASS).addClass(FIELDS_CONTAINER_CLASS);
        that._dataChangedHandlers = [];
        if (0 === layout) {
            that._renderLayout0($container)
        } else {
            if (1 === layout) {
                that._renderLayout1($container)
            } else {
                that._renderLayout2($container)
            }
        }
    },
    _renderContentImpl: function() {
        this.callBase();
        this.renderSortable();
        this._renderContextMenu();
        this.updateDimensions()
    },
    _fireContentReadyAction: function() {
        if (!this._dataSource || !this._dataSource.isLoading()) {
            this.callBase()
        }
    },
    _getContextMenuArgs: function(dxEvent) {
        var field, area, targetFieldElement = $(dxEvent.target).closest(".dx-area-field"),
            targetGroupElement = $(dxEvent.target).closest(".dx-area-fields");
        if (targetFieldElement.length) {
            field = targetFieldElement.data("field")
        }
        if (targetGroupElement.length) {
            area = targetGroupElement.attr("group")
        }
        return {
            event: dxEvent,
            field: field,
            area: area,
            items: []
        }
    },
    _renderContextMenu: function() {
        var that = this,
            $container = that.$element();
        if (that._contextMenu) {
            that._contextMenu.$element().remove()
        }
        that._contextMenu = that._createComponent($(DIV).appendTo($container), ContextMenu, {
            onPositioning: function(actionArgs) {
                var args, event = actionArgs.event;
                if (!event) {
                    return
                }
                args = that._getContextMenuArgs(event);
                that._trigger("onContextMenuPreparing", args);
                if (args.items && args.items.length) {
                    actionArgs.component.option("items", args.items)
                } else {
                    actionArgs.cancel = true
                }
            },
            target: $container,
            onItemClick: function(params) {
                params.itemData.onItemClick && params.itemData.onItemClick(params)
            },
            cssClass: "dx-pivotgridfieldchooser-context-menu"
        })
    },
    _createTreeItems: function(fields, groupFieldNames, path) {
        var isMeasure, that = this,
            resultItems = [],
            groupedItems = [],
            groupFieldName = groupFieldNames[0],
            fieldsByGroup = {};
        if (!groupFieldName) {
            each(fields, function(index, field) {
                var icon;
                if (true === field.isMeasure) {
                    icon = "measure"
                }
                if (false === field.isMeasure) {
                    icon = field.groupName ? "hierarchy" : "dimension"
                }
                resultItems.push({
                    index: field.index,
                    field: field,
                    key: field.dataField,
                    selected: isDefined(field.area),
                    text: field.caption || field.dataField,
                    icon: icon,
                    isMeasure: field.isMeasure,
                    isDefault: field.isDefault
                })
            })
        } else {
            each(fields, function(index, field) {
                var groupName = field[groupFieldName] || "";
                fieldsByGroup[groupName] = fieldsByGroup[groupName] || [];
                fieldsByGroup[groupName].push(field);
                if (void 0 === isMeasure) {
                    isMeasure = true
                }
                isMeasure = isMeasure && true === field.isMeasure
            });
            each(fieldsByGroup, function(groupName, fields) {
                var currentPath = path ? path + "." + groupName : groupName;
                var items = that._createTreeItems(fields, groupFieldNames.slice(1), currentPath);
                if (groupName) {
                    groupedItems.push({
                        key: groupName,
                        text: groupName,
                        path: currentPath,
                        isMeasure: items.isMeasure,
                        expanded: inArray(currentPath, that._expandedPaths) >= 0,
                        items: items
                    })
                } else {
                    resultItems = items
                }
            });
            resultItems = groupedItems.concat(resultItems);
            resultItems.isMeasure = isMeasure
        }
        return resultItems
    },
    _createFieldsDataSource: function(dataSource) {
        var treeItems, fields = dataSource && dataSource.fields() || [];
        fields = fields.filter(function(field) {
            return false !== field.visible && !isDefined(field.groupIndex)
        });
        treeItems = this._createTreeItems(fields, ["dimension", "displayFolder"]);
        pivotGridUtils.foreachDataLevel(treeItems, function(items) {
            items.sort(compareItems)
        }, 0, "items");
        return treeItems
    },
    _renderFieldsTreeView: function(container) {
        var that = this,
            dataSource = that._dataSource,
            treeView = that._createComponent(container, TreeView, {
                dataSource: that._createFieldsDataSource(dataSource),
                showCheckBoxesMode: "normal",
                searchEnabled: that.option("allowSearch"),
                searchTimeout: that.option("searchTimeout"),
                itemTemplate: function(itemData, itemIndex, itemElement) {
                    if (itemData.icon) {
                        iconUtils.getImageContainer(itemData.icon).appendTo(itemElement)
                    }
                    $("<span>").toggleClass("dx-area-field", !itemData.items).data("field", itemData.field).text(itemData.text).appendTo(itemElement)
                },
                onItemCollapsed: function(e) {
                    var index = inArray(e.itemData.path, that._expandedPaths);
                    if (index >= 0) {
                        that._expandedPaths.splice(index, 1)
                    }
                },
                onItemExpanded: function(e) {
                    var index = inArray(e.itemData.path, that._expandedPaths);
                    if (index < 0) {
                        that._expandedPaths.push(e.itemData.path)
                    }
                },
                onItemSelectionChanged: function(e) {
                    var field, fields, area, data = e.itemData,
                        needSelectDefaultItem = true;
                    if (data.items) {
                        if (data.selected) {
                            treeView.unselectItem(data);
                            return
                        }
                        that._processDemandState(function() {
                            fields = getDimensionFields(data, dataSource.fields());
                            for (var i = 0; i < fields.length; i++) {
                                if (fields[i].area) {
                                    needSelectDefaultItem = false;
                                    break
                                }
                            }
                        });
                        if (needSelectDefaultItem) {
                            var item = getFirstItem(data, function(item) {
                                return item.isDefault
                            }) || getFirstItem(data, function(item) {
                                return isDefined(item.index)
                            });
                            item && treeView.selectItem(item);
                            return
                        }
                    } else {
                        field = dataSource.fields()[data.index];
                        if (data.selected) {
                            area = field.isMeasure ? "data" : "column"
                        }
                        if (field) {
                            fields = [field]
                        }
                    }
                    that._applyChanges(fields, {
                        area: area,
                        areaIndex: void 0
                    })
                }
            }),
            dataChanged = function() {
                var scrollable = getScrollable(container),
                    scrollTop = scrollable ? scrollable.scrollTop() : 0;
                treeView.option({
                    dataSource: that._createFieldsDataSource(dataSource)
                });
                scrollable = getScrollable(container);
                if (scrollable) {
                    scrollable.scrollTo({
                        y: scrollTop
                    });
                    scrollable.update()
                }
            };
        that._dataChangedHandlers.push(dataChanged)
    },
    _renderAreaFields: function($container, area) {
        var that = this,
            dataSource = that._dataSource,
            fields = dataSource ? extend(true, [], dataSource.getAreaFields(area, true)) : [];
        $container.empty();
        each(fields, function(_, field) {
            if (false !== field.visible) {
                that.renderField(field, true).appendTo($container)
            }
        })
    },
    _renderArea: function(container, area) {
        var $fieldsContainer, $fieldsContent, render, that = this,
            $areaContainer = $(DIV).addClass("dx-area").appendTo(container),
            $fieldsHeaderContainer = $(DIV).addClass("dx-area-fields-header").appendTo($areaContainer),
            caption = that.option("texts." + area + "Fields");
        $("<span>").addClass("dx-area-icon").addClass("dx-area-icon-" + area).appendTo($fieldsHeaderContainer);
        $("<span>").html("&nbsp;").appendTo($fieldsHeaderContainer);
        $("<span>").addClass("dx-area-caption").text(caption).appendTo($fieldsHeaderContainer);
        $fieldsContainer = $(DIV).addClass("dx-area-fields").addClass(AREA_DRAG_CLASS).appendTo($areaContainer);
        if ("all" !== area) {
            $fieldsContainer.attr("group", area).attr("allow-scrolling", true);
            $fieldsContent = $(DIV).addClass("dx-area-field-container").appendTo($fieldsContainer);
            render = function() {
                that._renderAreaFields($fieldsContent, area)
            };
            that._dataChangedHandlers.push(render);
            render();
            $fieldsContainer.dxScrollable()
        } else {
            $areaContainer.addClass("dx-all-fields");
            $fieldsContainer.addClass("dx-treeview-border-visible");
            that._renderFieldsTreeView($fieldsContainer)
        }
    },
    _getSortableOptions: function() {
        return {}
    },
    _adjustSortableOnChangedArgs: function() {},
    resetTreeView: function() {
        var treeView = this.$element().find(".dx-treeview").dxTreeView("instance");
        if (treeView) {
            treeView.option("searchValue", "");
            treeView.collapseAll()
        }
    },
    applyChanges: function() {
        var state = this.option("state");
        if (isDefined(state)) {
            this._dataSource.state(state)
        }
    },
    cancelChanges: function() {
        this.option("state", this._dataSource.state())
    },
    getDataSource: function() {
        return this._dataSource
    },
    updateDimensions: function() {
        var $scrollableElements = this.$element().find(".dx-area .dx-scrollable");
        $scrollableElements.dxScrollable("update")
    },
    _visibilityChanged: function(visible) {
        if (visible && hasWindow) {
            this.updateDimensions()
        }
    }
});
registerComponent("dxPivotGridFieldChooser", FieldChooser);
module.exports = FieldChooser;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser_base.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser_base.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.field_chooser_base.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    ArrayStore = __webpack_require__(/*! ../../data/array_store */ "./node_modules/devextreme/data/array_store.js"),
    clickEvent = __webpack_require__(/*! ../../events/click */ "./node_modules/devextreme/events/click.js"),
    noop = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    messageLocalization = __webpack_require__(/*! ../../localization/message */ "./node_modules/devextreme/localization/message.js"),
    registerComponent = __webpack_require__(/*! ../../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    Widget = __webpack_require__(/*! ../widget/ui.widget */ "./node_modules/devextreme/ui/widget/ui.widget.js"),
    headerFilter = __webpack_require__(/*! ../grid_core/ui.grid_core.header_filter_core */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.header_filter_core.js"),
    columnStateMixin = __webpack_require__(/*! ../grid_core/ui.grid_core.column_state_mixin */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.column_state_mixin.js"),
    sortingMixin = __webpack_require__(/*! ../grid_core/ui.grid_core.sorting_mixin */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.sorting_mixin.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    Sortable = __webpack_require__(/*! ./ui.sortable */ "./node_modules/devextreme/ui/pivot_grid/ui.sortable.js"),
    Deferred = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js").Deferred,
    inArray = inArray,
    each = iteratorUtils.each,
    IE_FIELD_WIDTH_CORRECTION = 1,
    DIV = "<div>";
var HeaderFilterView = headerFilter.HeaderFilterView.inherit({
    _getSearchExpr: function(options) {
        options.useDefaultSearchExpr = true;
        return this.callBase(options)
    }
});
var processItems = function(groupItems, field) {
    var filterValues = [],
        isTree = !!field.groupName,
        isExcludeFilterType = "exclude" === field.filterType;
    if (field.filterValues) {
        each(field.filterValues, function(_, filterValue) {
            filterValues.push(Array.isArray(filterValue) ? filterValue.join("/") : filterValue && filterValue.valueOf())
        })
    }
    pivotGridUtils.foreachTree(groupItems, function(items) {
        var preparedFilterValue, item = items[0],
            path = pivotGridUtils.createPath(items),
            preparedFilterValueByText = isTree ? iteratorUtils.map(items, function(item) {
                return item.text
            }).reverse().join("/") : item.text;
        item.value = isTree ? path.slice(0) : item.key || item.value;
        preparedFilterValue = isTree ? path.join("/") : item.value && item.value.valueOf();
        if (item.children) {
            item.items = item.children;
            item.children = null
        }
        headerFilter.updateHeaderFilterItemSelectionState(item, item.key && inArray(preparedFilterValueByText, filterValues) > -1 || inArray(preparedFilterValue, filterValues) > -1, isExcludeFilterType)
    })
};

function getMainGroupField(dataSource, sourceField) {
    var field = sourceField;
    if (isDefined(sourceField.groupIndex)) {
        field = dataSource.getAreaFields(sourceField.area, true)[sourceField.areaIndex]
    }
    return field
}

function getStringState(state) {
    return JSON.stringify([state.fields, state.columnExpandedPaths, state.rowExpandedPaths])
}
var FieldChooserBase = Widget.inherit(columnStateMixin).inherit(sortingMixin).inherit(headerFilter.headerFilterMixin).inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            allowFieldDragging: true,
            applyChangesMode: "instantly",
            state: null,
            headerFilter: {
                width: 252,
                height: 325,
                searchTimeout: 500,
                texts: {
                    emptyValue: messageLocalization.format("dxDataGrid-headerFilterEmptyValue"),
                    ok: messageLocalization.format("dxDataGrid-headerFilterOK"),
                    cancel: messageLocalization.format("dxDataGrid-headerFilterCancel")
                }
            }
        })
    },
    _init: function() {
        this.callBase();
        this._headerFilterView = new HeaderFilterView(this);
        this._refreshDataSource();
        this.subscribeToEvents()
    },
    _refreshDataSource: function() {
        var dataSource = this.option("dataSource");
        if (dataSource && dataSource.fields && dataSource.load) {
            this._dataSource = dataSource
        }
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "dataSource":
                this._refreshDataSource();
                break;
            case "applyChangesMode":
                break;
            case "state":
                if (this._skipStateChange || !this._dataSource) {
                    break
                }
                if (getStringState(this._dataSource.state()) === getStringState(args.value)) {
                    this._clean(true);
                    this._renderComponent()
                } else {
                    this._dataSource.state(args.value)
                }
                break;
            case "headerFilter":
            case "allowFieldDragging":
                this._invalidate();
                break;
            default:
                this.callBase(args)
        }
    },
    renderField: function(field, showColumnLines) {
        var that = this,
            $fieldContent = $(DIV).addClass("dx-area-field-content").text(field.caption || field.dataField),
            $fieldElement = $(DIV).addClass("dx-area-field").addClass("dx-area-box").data("field", field).append($fieldContent),
            mainGroupField = getMainGroupField(that._dataSource, field);
        if ("data" !== field.area) {
            if (field.allowSorting) {
                that._applyColumnState({
                    name: "sort",
                    rootElement: $fieldElement,
                    column: {
                        alignment: that.option("rtlEnabled") ? "right" : "left",
                        sortOrder: "desc" === field.sortOrder ? "desc" : "asc"
                    },
                    showColumnLines: showColumnLines
                })
            }
            that._applyColumnState({
                name: "headerFilter",
                rootElement: $fieldElement,
                column: {
                    alignment: that.option("rtlEnabled") ? "right" : "left",
                    filterValues: mainGroupField.filterValues,
                    allowFiltering: mainGroupField.allowFiltering && !field.groupIndex
                },
                showColumnLines: showColumnLines
            })
        }
        if (field.groupName) {
            $fieldElement.attr("item-group", field.groupName)
        }
        return $fieldElement
    },
    _clean: function() {},
    _render: function() {
        this.callBase();
        this._headerFilterView.render(this.$element())
    },
    renderSortable: function() {
        var that = this;
        that._createComponent(that.$element(), Sortable, extend({
            allowDragging: that.option("allowFieldDragging"),
            itemSelector: ".dx-area-field",
            itemContainerSelector: ".dx-area-field-container",
            groupSelector: ".dx-area-fields",
            groupFilter: function() {
                var dataSource = that._dataSource,
                    $sortable = $(this).closest(".dx-sortable"),
                    pivotGrid = $sortable.data("dxPivotGrid"),
                    pivotGridFieldChooser = $sortable.data("dxPivotGridFieldChooser");
                if (pivotGrid) {
                    return pivotGrid.getDataSource() === dataSource
                }
                if (pivotGridFieldChooser) {
                    return pivotGridFieldChooser.option("dataSource") === dataSource
                }
                return false
            },
            itemRender: function($sourceItem, target) {
                var $item;
                if ($sourceItem.hasClass("dx-area-box")) {
                    $item = $sourceItem.clone();
                    if ("drag" === target) {
                        each($sourceItem, function(index, sourceItem) {
                            $item.eq(index).css("width", parseInt($(sourceItem).outerWidth(), 10) + IE_FIELD_WIDTH_CORRECTION)
                        })
                    }
                } else {
                    $item = $(DIV).addClass("dx-area-field").addClass("dx-area-box").text($sourceItem.text())
                }
                if ("drag" === target) {
                    var wrapperContainer = $(DIV);
                    each($item, function(_, item) {
                        var wrapper = $("<div>").addClass("dx-pivotgrid-fields-container").addClass("dx-widget").append($(item));
                        wrapperContainer.append(wrapper)
                    });
                    return wrapperContainer.children()
                }
                return $item
            },
            onDragging: function(e) {
                var field = e.sourceElement.data("field"),
                    targetGroup = e.targetGroup;
                e.cancel = false;
                if (true === field.isMeasure) {
                    if ("column" === targetGroup || "row" === targetGroup || "filter" === targetGroup) {
                        e.cancel = true
                    }
                } else {
                    if (false === field.isMeasure && "data" === targetGroup) {
                        e.cancel = true
                    }
                }
            },
            useIndicator: true,
            onChanged: function(e) {
                var dataSource = that._dataSource,
                    field = e.sourceElement.data("field");
                e.removeSourceElement = !!e.sourceGroup;
                that._adjustSortableOnChangedArgs(e);
                if (field) {
                    that._applyChanges([getMainGroupField(dataSource, field)], {
                        area: e.targetGroup,
                        areaIndex: e.targetIndex
                    })
                }
            }
        }, that._getSortableOptions()))
    },
    _processDemandState: function(func) {
        var that = this,
            isInstantlyMode = "instantly" === that.option("applyChangesMode"),
            dataSource = that._dataSource;
        if (isInstantlyMode) {
            func(dataSource, isInstantlyMode)
        } else {
            var currentState = dataSource.state();
            dataSource.state(that.option("state"), true);
            func(dataSource, isInstantlyMode);
            dataSource.state(currentState, true)
        }
    },
    _applyChanges: function(fields, props) {
        var that = this;
        that._processDemandState(function(dataSource, isInstantlyMode) {
            fields.forEach(function(_ref) {
                var index = _ref.index;
                dataSource.field(index, props)
            });
            if (isInstantlyMode) {
                dataSource.load()
            } else {
                that._changedHandler()
            }
        })
    },
    _adjustSortableOnChangedArgs: function(e) {
        e.removeSourceElement = false;
        e.removeTargetElement = true;
        e.removeSourceClass = false
    },
    _getSortableOptions: function() {
        return {
            direction: "auto"
        }
    },
    subscribeToEvents: function(element) {
        var that = this,
            func = function(e) {
                var field = $(e.currentTarget).data("field"),
                    mainGroupField = extend(true, {}, getMainGroupField(that._dataSource, field)),
                    isHeaderFilter = $(e.target).hasClass("dx-header-filter"),
                    dataSource = that._dataSource;
                if (isHeaderFilter) {
                    that._headerFilterView.showHeaderFilterMenu($(e.currentTarget), extend(mainGroupField, {
                        type: mainGroupField.groupName ? "tree" : "list",
                        encodeHtml: that.option("encodeHtml"),
                        dataSource: {
                            useDefaultSearch: true,
                            load: function(options) {
                                var userData = options.userData;
                                if (userData.store) {
                                    return userData.store.load(options)
                                } else {
                                    var d = new Deferred;
                                    dataSource.getFieldValues(mainGroupField.index).done(function(data) {
                                        userData.store = new ArrayStore(data);
                                        userData.store.load(options).done(d.resolve).fail(d.reject)
                                    }).fail(d.reject);
                                    return d
                                }
                            },
                            postProcess: function(data) {
                                processItems(data, mainGroupField);
                                return data
                            }
                        },
                        apply: function() {
                            that._applyChanges([mainGroupField], {
                                filterValues: this.filterValues,
                                filterType: this.filterType
                            })
                        }
                    }))
                } else {
                    if (field.allowSorting && "data" !== field.area) {
                        that._applyChanges([field], {
                            sortOrder: "desc" === field.sortOrder ? "asc" : "desc"
                        })
                    }
                }
            };
        if (element) {
            eventsEngine.on(element, clickEvent.name, ".dx-area-field.dx-area-box", func);
            return
        }
        eventsEngine.on(that.$element(), clickEvent.name, ".dx-area-field.dx-area-box", func)
    },
    _initTemplates: noop,
    addWidgetPrefix: function(className) {
        return "dx-pivotgrid-" + className
    }
});
registerComponent("dxPivotGridFieldChooserBase", FieldChooserBase);
module.exports = FieldChooserBase;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.fields_area.js":
/*!****************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.fields_area.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.fields_area.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    noop = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    areaItem = __webpack_require__(/*! ./ui.pivot_grid.area_item */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.area_item.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    Popup = __webpack_require__(/*! ../popup */ "./node_modules/devextreme/ui/popup.js"),
    Button = __webpack_require__(/*! ../button */ "./node_modules/devextreme/ui/button.js"),
    DIV = "<div>";
__webpack_require__(/*! ./ui.pivot_grid.field_chooser_base */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser_base.js");
var AREA_DRAG_CLASS = "dx-pivotgrid-drag-action";

function renderGroupConnector(field, nextField, prevField, $container) {
    if (prevField && prevField.groupName && prevField.groupName === field.groupName) {
        $(DIV).addClass("dx-group-connector").addClass("dx-group-connector-prev").appendTo($container)
    }
    if (nextField && nextField.groupName && nextField.groupName === field.groupName) {
        $(DIV).addClass("dx-group-connector").addClass("dx-group-connector-next").appendTo($container)
    }
}
exports.FieldsArea = areaItem.AreaItem.inherit({
    ctor: function(component, area) {
        this.callBase(component);
        this._area = area
    },
    _getAreaName: function() {
        return "fields"
    },
    _createGroupElement: function() {
        return $(DIV).addClass("dx-pivotgrid-fields-area").addClass("dx-area-fields").addClass(AREA_DRAG_CLASS).attr("group", this._area)
    },
    isVisible: function() {
        return !!this.option("fieldPanel.visible") && this.option("fieldPanel.show" + pivotGridUtils.capitalizeFirstLetter(this._area) + "Fields")
    },
    _renderButton: function(element) {
        var that = this,
            container = $("<td>").appendTo($("<tr>").appendTo(element)),
            button = that.component._createComponent($(DIV).appendTo(container), Button, {
                text: "Fields",
                icon: "menu",
                width: "auto",
                onClick: function() {
                    var popup = that.tableElement().find(".dx-fields-area-popup").dxPopup("instance");
                    if (!popup.option("visible")) {
                        popup.show()
                    }
                }
            });
        button.$element().addClass("dx-pivotgrid-fields-area-hamburger")
    },
    _getPopupOptions: function(row, button) {
        return {
            contentTemplate: function() {
                return $("<table>").addClass("dx-area-field-container").append($("<thead>").addClass("dx-pivotgrid-fields-area-head").append(row))
            },
            height: "auto",
            width: "auto",
            position: {
                at: "left",
                my: "left",
                of: button
            },
            dragEnabled: false,
            animation: {
                show: {
                    type: "pop",
                    duration: 200
                }
            },
            shading: false,
            showTitle: false,
            closeOnOutsideClick: true,
            container: button.parent()
        }
    },
    _renderPopup: function(tableElement, row) {
        var that = this,
            button = tableElement.find(".dx-button"),
            popupOptions = that._getPopupOptions(row, button),
            FieldChooserBase = that.component.$element().dxPivotGridFieldChooserBase("instance");
        if (that._rowPopup) {
            that._rowPopup.$element().remove()
        }
        that._rowPopup = that.component._createComponent($(DIV).appendTo(tableElement), Popup, popupOptions);
        that._rowPopup.$element().addClass("dx-fields-area-popup");
        that._rowPopup.content().addClass("dx-pivotgrid-fields-container");
        that._rowPopup.content().parent().attr("group", "row");
        FieldChooserBase.subscribeToEvents(that._rowPopup.content());
        FieldChooserBase.renderSortable(that._rowPopup.content())
    },
    _shouldCreateButton: function() {
        return false
    },
    _renderTableContent: function(tableElement, data) {
        var that = this,
            groupElement = this.groupElement(),
            isVisible = this.isVisible(),
            fieldChooserBase = that.component.$element().dxPivotGridFieldChooserBase("instance"),
            head = $("<thead>").addClass("dx-pivotgrid-fields-area-head").appendTo(tableElement),
            area = that._area,
            row = $("<tr>");
        groupElement.toggleClass("dx-hidden", !isVisible);
        tableElement.addClass("dx-area-field-container");
        if (!isVisible) {
            return
        }
        each(data, function(index, field) {
            if (field.area === area && false !== field.visible) {
                var td = $("<td>").append(fieldChooserBase.renderField(field, "row" === field.area)),
                    indicators = td.find(".dx-column-indicators");
                if (indicators.length && that._shouldCreateButton()) {
                    indicators.insertAfter(indicators.next())
                }
                td.appendTo(row);
                renderGroupConnector(field, data[index + 1], data[index - 1], td)
            }
        });
        if (!row.children().length) {
            $("<td>").append($(DIV).addClass("dx-empty-area-text").text(this.option("fieldPanel.texts." + area + "FieldArea"))).appendTo(row)
        }
        if (that._shouldCreateButton()) {
            that._renderButton(head);
            that._renderPopup(tableElement, row)
        } else {
            head.append(row)
        }
    },
    reset: function() {
        this.callBase();
        this.groupElement().css("marginTop", 0)
    },
    _renderVirtualContent: noop
});


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.headers_area.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.headers_area.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.headers_area.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    areaItem = __webpack_require__(/*! ./ui.pivot_grid.area_item */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.area_item.js");
var PIVOTGRID_AREA_CLASS = "dx-pivotgrid-area",
    PIVOTGRID_AREA_COLUMN_CLASS = "dx-pivotgrid-horizontal-headers",
    PIVOTGRID_AREA_ROW_CLASS = "dx-pivotgrid-vertical-headers",
    PIVOTGRID_TOTAL_CLASS = "dx-total",
    PIVOTGRID_GRAND_TOTAL_CLASS = "dx-grandtotal",
    PIVOTGRID_ROW_TOTAL_CLASS = "dx-row-total",
    PIVOTGRID_EXPANDED_CLASS = "dx-pivotgrid-expanded",
    PIVOTGRID_COLLAPSED_CLASS = "dx-pivotgrid-collapsed",
    PIVOTGRID_LAST_CELL_CLASS = "dx-last-cell",
    PIVOTGRID_VERTICAL_SCROLL_CLASS = "dx-vertical-scroll",
    PIVOTGRID_EXPAND_BORDER = "dx-expand-border";

function getCellPath(tableElement, cell) {
    if (cell) {
        var data = tableElement.data().data,
            rowIndex = cell.parentNode.rowIndex,
            cellIndex = cell.cellIndex;
        return data[rowIndex] && data[rowIndex][cellIndex] && data[rowIndex][cellIndex].path
    }
}
exports.HorizontalHeadersArea = areaItem.AreaItem.inherit({
    _getAreaName: function() {
        return "column"
    },
    _getAreaClassName: function() {
        return PIVOTGRID_AREA_COLUMN_CLASS
    },
    _createGroupElement: function() {
        return $("<div>").addClass(this._getAreaClassName()).addClass(PIVOTGRID_AREA_CLASS)
    },
    _applyCustomStyles: function(options) {
        var cssArray = options.cssArray,
            cell = options.cell,
            rowsCount = options.rowsCount,
            classArray = options.classArray;
        if (options.cellIndex === options.cellsCount - 1) {
            cssArray.push((options.rtlEnabled ? "border-left:" : "border-right:") + "0px")
        }
        if (cell.rowspan === rowsCount - options.rowIndex || options.rowIndex + 1 === rowsCount) {
            cssArray.push("border-bottom-width:0px")
        }
        if ("T" === cell.type || "GT" === cell.type) {
            classArray.push(PIVOTGRID_ROW_TOTAL_CLASS)
        }
        if ("T" === options.cell.type) {
            classArray.push(PIVOTGRID_TOTAL_CLASS)
        }
        if ("GT" === options.cell.type) {
            classArray.push(PIVOTGRID_GRAND_TOTAL_CLASS)
        }
        if (isDefined(cell.expanded)) {
            classArray.push(cell.expanded ? PIVOTGRID_EXPANDED_CLASS : PIVOTGRID_COLLAPSED_CLASS)
        }
        this.callBase(options)
    },
    _getMainElementMarkup: function() {
        return "<thead class='" + this._getAreaClassName() + "'>"
    },
    _getCloseMainElementMarkup: function() {
        return "</thead>"
    },
    setVirtualContentParams: function(params) {
        this.callBase(params);
        this._setTableCss({
            left: params.left,
            top: 0
        });
        this._virtualContentWidth = params.width
    },
    hasScroll: function() {
        var tableWidth = this._virtualContent ? this._virtualContentWidth : this._tableWidth;
        if (this._groupWidth && tableWidth) {
            return tableWidth - this._groupWidth >= 1
        }
        return false
    },
    processScroll: function() {
        if (!this._getScrollable()) {
            this._groupElement.dxScrollable({
                useNative: false,
                useSimulatedScrollbar: false,
                showScrollbar: false,
                bounceEnabled: false,
                direction: "horizontal",
                updateManually: true
            })
        }
    },
    processScrollBarSpacing: function(scrollBarWidth) {
        var that = this,
            groupAlignment = that.option("rtlEnabled") ? "right" : "left";
        if (that._groupWidth) {
            that.groupWidth(that._groupWidth - scrollBarWidth)
        }
        if (that._scrollBarWidth) {
            that._groupElement.next().remove()
        }
        that._groupElement.toggleClass(PIVOTGRID_VERTICAL_SCROLL_CLASS, scrollBarWidth > 0);
        that._groupElement.css("float", groupAlignment).width(that._groupHeight);
        that._scrollBarWidth = scrollBarWidth
    },
    ctor: function(component) {
        this.callBase(component);
        this._scrollBarWidth = 0
    },
    getScrollPath: function(offset) {
        var cell, tableElement = this.tableElement();
        offset -= parseInt(tableElement[0].style.left, 10) || 0;
        each(tableElement.find("td"), function(_, td) {
            if (1 === td.colSpan && td.offsetLeft <= offset && td.offsetWidth + td.offsetLeft > offset) {
                cell = td;
                return false
            }
        });
        return getCellPath(tableElement, cell)
    },
    _moveFakeTable: function(scrollPos) {
        this._moveFakeTableHorizontally(scrollPos);
        this.callBase()
    }
});
exports.VerticalHeadersArea = exports.HorizontalHeadersArea.inherit({
    _getAreaClassName: function() {
        return PIVOTGRID_AREA_ROW_CLASS
    },
    _applyCustomStyles: function(options) {
        this.callBase(options);
        if (options.cellIndex === options.cellsCount - 1) {
            options.classArray.push(PIVOTGRID_LAST_CELL_CLASS)
        }
        if (options.rowIndex === options.rowsCount - 1) {
            options.cssArray.push("border-bottom: 0px")
        }
        if (options.cell.isWhiteSpace) {
            options.classArray.push("dx-white-space-column")
        }
    },
    _getAreaName: function() {
        return "row"
    },
    setVirtualContentParams: function(params) {
        this.callBase(params);
        this._setTableCss({
            top: params.top,
            left: 0
        });
        this._virtualContentHeight = params.height
    },
    hasScroll: function() {
        var tableHeight = this._virtualContent ? this._virtualContentHeight : this._tableHeight;
        if (this._groupHeight && tableHeight) {
            return tableHeight - this._groupHeight >= 1
        }
        return false
    },
    processScroll: function() {
        if (!this._getScrollable()) {
            this._groupElement.dxScrollable({
                useNative: false,
                useSimulatedScrollbar: false,
                showScrollbar: false,
                bounceEnabled: false,
                direction: "vertical",
                updateManually: true
            })
        }
    },
    processScrollBarSpacing: function(scrollBarWidth) {
        var that = this;
        if (that._groupHeight) {
            that.groupHeight(that._groupHeight - scrollBarWidth)
        }
        if (that._scrollBarWidth) {
            that._groupElement.next().remove()
        }
        if (scrollBarWidth) {
            that._groupElement.after($("<div>").width("100%").height(scrollBarWidth - 1))
        }
        that._scrollBarWidth = scrollBarWidth
    },
    getScrollPath: function(offset) {
        var cell, tableElement = this.tableElement();
        offset -= parseInt(tableElement[0].style.top, 10) || 0;
        each(tableElement.find("tr"), function(_, tr) {
            var td = tr.childNodes[tr.childNodes.length - 1];
            if (td && 1 === td.rowSpan && td.offsetTop <= offset && td.offsetHeight + td.offsetTop > offset) {
                cell = td;
                return false
            }
        });
        return getCellPath(tableElement, cell)
    },
    _moveFakeTable: function(scrollPos) {
        this._moveFakeTableTop(scrollPos);
        this.callBase()
    },
    _getRowClassNames: function(rowIndex, cell, rowClassNames) {
        if (0 !== rowIndex & cell.expanded && inArray(PIVOTGRID_EXPAND_BORDER, rowClassNames) === -1) {
            rowClassNames.push(PIVOTGRID_EXPAND_BORDER)
        }
    },
    _getMainElementMarkup: function() {
        return "<tbody class='" + this._getAreaClassName() + "'>"
    },
    _getCloseMainElementMarkup: function() {
        return "</tbody>"
    },
    updateColspans: function(columnCount) {
        var diff, i, j, rows = this.tableElement()[0].rows,
            columnOffset = 0,
            columnOffsetResetIndexes = [];
        if (this.getColumnsCount() - columnCount > 0) {
            return
        }
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < rows[i].cells.length; j++) {
                var cell = rows[i].cells[j],
                    rowSpan = cell.rowSpan;
                if (columnOffsetResetIndexes[i]) {
                    columnOffset -= columnOffsetResetIndexes[i];
                    columnOffsetResetIndexes[i] = 0
                }
                diff = columnCount - (columnOffset + cell.colSpan);
                if (j === rows[i].cells.length - 1 && diff > 0) {
                    cell.colSpan = cell.colSpan + diff
                }
                columnOffsetResetIndexes[i + rowSpan] = (columnOffsetResetIndexes[i + rowSpan] || 0) + cell.colSpan;
                columnOffset += cell.colSpan
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.js":
/*!****************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    windowUtils = __webpack_require__(/*! ../../core/utils/window */ "./node_modules/devextreme/core/utils/window.js"),
    window = windowUtils.getWindow(),
    browser = __webpack_require__(/*! ../../core/utils/browser */ "./node_modules/devextreme/core/utils/browser.js"),
    eventsEngine = __webpack_require__(/*! ../../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    registerComponent = __webpack_require__(/*! ../../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    getPublicElement = __webpack_require__(/*! ../../core/utils/dom */ "./node_modules/devextreme/core/utils/dom.js").getPublicElement,
    stringUtils = __webpack_require__(/*! ../../core/utils/string */ "./node_modules/devextreme/core/utils/string.js"),
    commonUtils = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js"),
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    clickEvent = __webpack_require__(/*! ../../events/click */ "./node_modules/devextreme/events/click.js"),
    messageLocalization = __webpack_require__(/*! ../../localization/message */ "./node_modules/devextreme/localization/message.js"),
    Widget = __webpack_require__(/*! ../widget/ui.widget */ "./node_modules/devextreme/ui/widget/ui.widget.js"),
    eventUtils = __webpack_require__(/*! ../../events/utils */ "./node_modules/devextreme/events/utils.js"),
    gridCoreUtils = __webpack_require__(/*! ../grid_core/ui.grid_core.utils */ "./node_modules/devextreme/ui/grid_core/ui.grid_core.utils.js"),
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    pivotGridDataController = __webpack_require__(/*! ./ui.pivot_grid.data_controller */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_controller.js"),
    PivotGridDataSource = __webpack_require__(/*! ./data_source */ "./node_modules/devextreme/ui/pivot_grid/data_source.js"),
    dataAreaNamespace = __webpack_require__(/*! ./ui.pivot_grid.data_area */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.data_area.js"),
    headersArea = __webpack_require__(/*! ./ui.pivot_grid.headers_area */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.headers_area.js"),
    fieldsArea = __webpack_require__(/*! ./ui.pivot_grid.fields_area */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.fields_area.js"),
    PivotGridFieldChooser = __webpack_require__(/*! ./ui.pivot_grid.field_chooser */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser.js"),
    PivotGridFieldChooserBase = __webpack_require__(/*! ./ui.pivot_grid.field_chooser_base */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.field_chooser_base.js"),
    ExportMixin = __webpack_require__(/*! ./ui.pivot_grid.export */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.export.js").ExportMixin,
    chartIntegrationMixin = __webpack_require__(/*! ./ui.pivot_grid.chart_integration */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.chart_integration.js"),
    Popup = __webpack_require__(/*! ../popup */ "./node_modules/devextreme/ui/popup.js"),
    ContextMenu = __webpack_require__(/*! ../context_menu */ "./node_modules/devextreme/ui/context_menu.js"),
    deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    DATA_AREA_CELL_CLASS = "dx-area-data-cell",
    ROW_AREA_CELL_CLASS = "dx-area-row-cell",
    COLUMN_AREA_CELL_CLASS = "dx-area-column-cell",
    DESCRIPTION_AREA_CELL_CLASS = "dx-area-description-cell",
    BORDERS_CLASS = "dx-pivotgrid-border",
    PIVOTGRID_CLASS = "dx-pivotgrid",
    ROW_LINES_CLASS = "dx-row-lines",
    BOTTOM_ROW_CLASS = "dx-bottom-row",
    BOTTOM_BORDER_CLASS = "dx-bottom-border",
    FIELDS_CONTAINER_CLASS = "dx-pivotgrid-fields-container",
    FIELDS_CLASS = "dx-area-fields",
    FIELD_CHOOSER_POPUP_CLASS = "dx-fieldchooser-popup",
    INCOMPRESSIBLE_FIELDS_CLASS = "dx-incompressible-fields",
    OVERFLOW_HIDDEN_CLASS = "dx-overflow-hidden",
    TR = "<tr>",
    TD = "<td>",
    DIV = "<div>",
    TEST_HEIGHT = 66666;

function getArraySum(array) {
    var sum = 0;
    each(array, function(_, value) {
        sum += value || 0
    });
    return sum
}

function adjustSizeArray(sizeArray, space) {
    var delta = space / sizeArray.length;
    for (var i = 0; i < sizeArray.length; i++) {
        sizeArray[i] -= delta
    }
}

function unsubscribeScrollEvents(area) {
    area.off("scroll").off("stop")
}

function subscribeToScrollEvent(area, handler) {
    unsubscribeScrollEvents(area);
    area.on("scroll", handler).on("stop", handler)
}
var scrollBarInfoCache = {};

function getScrollBarInfo(useNativeScrolling) {
    if (scrollBarInfoCache[useNativeScrolling]) {
        return scrollBarInfoCache[useNativeScrolling]
    }
    var scrollBarUseNative, scrollBarWidth = 0,
        options = {};
    var container = $(DIV).css({
        position: "absolute",
        visibility: "hidden",
        top: -1e3,
        left: -1e3,
        width: 100,
        height: 100
    }).appendTo("body");
    var content = $("<p>").css({
        width: "100%",
        height: 200
    }).appendTo(container);
    if ("auto" !== useNativeScrolling) {
        options.useNative = !!useNativeScrolling;
        options.useSimulatedScrollbar = !useNativeScrolling
    }
    container.dxScrollable(options);
    scrollBarUseNative = container.dxScrollable("instance").option("useNative");
    scrollBarWidth = scrollBarUseNative ? container.width() - content.width() : 0;
    container.remove();
    scrollBarInfoCache[useNativeScrolling] = {
        scrollBarWidth: scrollBarWidth,
        scrollBarUseNative: scrollBarUseNative
    };
    return scrollBarInfoCache[useNativeScrolling]
}

function getCommonBorderWidth(elements, direction) {
    var borderStyleNames = "width" === direction ? ["borderLeftWidth", "borderRightWidth"] : ["borderTopWidth", "borderBottomWidth"],
        width = 0;
    each(elements, function(_, elem) {
        var computedStyle = window.getComputedStyle(elem.get(0));
        borderStyleNames.forEach(function(borderStyleName) {
            width += parseFloat(computedStyle[borderStyleName]) || 0
        })
    });
    return width
}

function clickedOnFieldsArea($targetElement) {
    return $targetElement.closest("." + FIELDS_CLASS).length || $targetElement.find("." + FIELDS_CLASS).length
}
var PivotGrid = Widget.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            scrolling: {
                timeout: 300,
                renderingThreshold: 150,
                minTimeout: 10,
                mode: "standard",
                useNative: "auto",
                removeInvisiblePages: true
            },
            encodeHtml: true,
            dataSource: null,
            activeStateEnabled: false,
            fieldChooser: {
                minWidth: 250,
                minHeight: 250,
                enabled: true,
                allowSearch: false,
                searchTimeout: 500,
                layout: 0,
                title: messageLocalization.format("dxPivotGrid-fieldChooserTitle"),
                width: 600,
                height: 600,
                applyChangesMode: "instantly"
            },
            onContextMenuPreparing: null,
            allowSorting: false,
            allowSortingBySummary: false,
            allowFiltering: false,
            allowExpandAll: false,
            wordWrapEnabled: true,
            fieldPanel: {
                showColumnFields: true,
                showFilterFields: true,
                showDataFields: true,
                showRowFields: true,
                allowFieldDragging: true,
                visible: false,
                texts: {
                    columnFieldArea: messageLocalization.format("dxPivotGrid-columnFieldArea"),
                    rowFieldArea: messageLocalization.format("dxPivotGrid-rowFieldArea"),
                    filterFieldArea: messageLocalization.format("dxPivotGrid-filterFieldArea"),
                    dataFieldArea: messageLocalization.format("dxPivotGrid-dataFieldArea")
                }
            },
            dataFieldArea: "column",
            "export": {
                enabled: false,
                fileName: "PivotGrid",
                proxyUrl: void 0,
                ignoreExcelErrors: true
            },
            showRowTotals: true,
            showRowGrandTotals: true,
            showColumnTotals: true,
            showColumnGrandTotals: true,
            hideEmptySummaryCells: true,
            showTotalsPrior: "none",
            rowHeaderLayout: "standard",
            loadPanel: {
                enabled: true,
                text: messageLocalization.format("Loading"),
                width: 200,
                height: 70,
                showIndicator: true,
                indicatorSrc: "",
                showPane: true
            },
            texts: {
                grandTotal: messageLocalization.format("dxPivotGrid-grandTotal"),
                total: messageLocalization.getFormatter("dxPivotGrid-total"),
                noData: messageLocalization.format("dxDataGrid-noDataText"),
                showFieldChooser: messageLocalization.format("dxPivotGrid-showFieldChooser"),
                expandAll: messageLocalization.format("dxPivotGrid-expandAll"),
                collapseAll: messageLocalization.format("dxPivotGrid-collapseAll"),
                sortColumnBySummary: messageLocalization.getFormatter("dxPivotGrid-sortColumnBySummary"),
                sortRowBySummary: messageLocalization.getFormatter("dxPivotGrid-sortRowBySummary"),
                removeAllSorting: messageLocalization.format("dxPivotGrid-removeAllSorting"),
                exportToExcel: messageLocalization.format("dxDataGrid-exportToExcel"),
                dataNotAvailable: messageLocalization.format("dxPivotGrid-dataNotAvailable")
            },
            onCellClick: null,
            onCellPrepared: null,
            showBorders: false,
            stateStoring: {
                enabled: false,
                storageKey: null,
                type: "localStorage",
                customLoad: null,
                customSave: null,
                savingTimeout: 2e3
            },
            onExpandValueChanging: null,
            renderCellCountLimit: 2e4,
            onExporting: null,
            onExported: null,
            onFileSaving: null,
            headerFilter: {
                width: 252,
                height: 325,
                allowSearch: false,
                searchTimeout: 500,
                texts: {
                    emptyValue: messageLocalization.format("dxDataGrid-headerFilterEmptyValue"),
                    ok: messageLocalization.format("dxDataGrid-headerFilterOK"),
                    cancel: messageLocalization.format("dxDataGrid-headerFilterCancel")
                }
            }
        })
    },
    _getDataControllerOptions: function() {
        var that = this;
        return {
            component: that,
            dataSource: that.option("dataSource"),
            texts: that.option("texts"),
            showRowTotals: that.option("showRowTotals"),
            showRowGrandTotals: that.option("showRowGrandTotals"),
            showColumnTotals: that.option("showColumnTotals"),
            showTotalsPrior: that.option("showTotalsPrior"),
            showColumnGrandTotals: that.option("showColumnGrandTotals"),
            dataFieldArea: that.option("dataFieldArea"),
            rowHeaderLayout: that.option("rowHeaderLayout"),
            hideEmptySummaryCells: that.option("hideEmptySummaryCells"),
            onFieldsPrepared: function(fields) {
                each(fields, function(index, field) {
                    each(["allowSorting", "allowSortingBySummary", "allowFiltering", "allowExpandAll"], function(_, optionName) {
                        if (void 0 === field[optionName]) {
                            pivotGridUtils.setFieldProperty(field, optionName, that.option(optionName))
                        }
                    })
                })
            }
        }
    },
    _initDataController: function() {
        var that = this;
        that._dataController && that._dataController.dispose();
        that._dataController = new pivotGridDataController.DataController(that._getDataControllerOptions());
        if (windowUtils.hasWindow()) {
            that._dataController.changed.add(function() {
                that._render()
            })
        }
        that._dataController.scrollChanged.add(function(options) {
            that._scrollLeft = options.left;
            that._scrollTop = options.top
        });
        that._dataController.loadingChanged.add(function(isLoading) {
            that._updateLoading()
        });
        that._dataController.progressChanged.add(that._updateLoading.bind(that));
        that._dataController.dataSourceChanged.add(function() {
            that._trigger("onChanged")
        });
        var expandValueChanging = that.option("onExpandValueChanging");
        if (expandValueChanging) {
            that._dataController.expandValueChanging.add(function(e) {
                expandValueChanging(e)
            })
        }
    },
    _init: function() {
        var that = this;
        that.callBase();
        that._initDataController();
        that._scrollLeft = that._scrollTop = null;
        that._initActions()
    },
    _initActions: function() {
        var that = this;
        that._actions = {
            onChanged: that._createActionByOption("onChanged"),
            onContextMenuPreparing: that._createActionByOption("onContextMenuPreparing"),
            onCellClick: that._createActionByOption("onCellClick"),
            onExporting: that._createActionByOption("onExporting"),
            onExported: that._createActionByOption("onExported"),
            onFileSaving: that._createActionByOption("onFileSaving"),
            onCellPrepared: that._createActionByOption("onCellPrepared")
        }
    },
    _trigger: function(eventName, eventArg) {
        this._actions[eventName](eventArg)
    },
    _optionValuesEqual: function(name, oldValue, newValue) {
        if ("dataSource" === name && newValue instanceof PivotGridDataSource && oldValue instanceof PivotGridDataSource) {
            return newValue === oldValue
        }
        return this.callBase.apply(this, arguments)
    },
    _optionChanged: function(args) {
        var that = this;
        switch (args.name) {
            case "dataSource":
            case "allowSorting":
            case "allowFiltering":
            case "allowExpandAll":
            case "allowSortingBySummary":
            case "scrolling":
            case "stateStoring":
                that._initDataController();
                that._fieldChooserPopup.hide();
                that._renderFieldChooser();
                that._invalidate();
                break;
            case "texts":
            case "showTotalsPrior":
            case "showRowTotals":
            case "showRowGrandTotals":
            case "showColumnTotals":
            case "showColumnGrandTotals":
            case "hideEmptySummaryCells":
            case "dataFieldArea":
                that._dataController.updateViewOptions(that._getDataControllerOptions());
                break;
            case "useNativeScrolling":
            case "encodeHtml":
            case "renderCellCountLimit":
                break;
            case "rtlEnabled":
                that.callBase(args);
                that._renderFieldChooser();
                that._renderContextMenu();
                windowUtils.hasWindow() && that._renderLoadPanel(that._dataArea.groupElement(), that.$element());
                that._invalidate();
                break;
            case "export":
                that._renderDescriptionArea();
                break;
            case "onExpandValueChanging":
                break;
            case "onCellClick":
            case "onContextMenuPreparing":
            case "onExporting":
            case "onExported":
            case "onFileSaving":
            case "onCellPrepared":
                that._actions[args.name] = that._createActionByOption(args.name);
                break;
            case "fieldChooser":
                that._renderFieldChooser();
                that._renderDescriptionArea();
                break;
            case "loadPanel":
                if (windowUtils.hasWindow()) {
                    that._renderLoadPanel(that._dataArea.groupElement(), that.$element());
                    that._invalidate()
                }
                break;
            case "fieldPanel":
                that._renderDescriptionArea();
                that._invalidate();
                break;
            case "headerFilter":
                that._renderFieldChooser();
                that._invalidate();
                break;
            case "showBorders":
                that._tableElement().toggleClass(BORDERS_CLASS, !!args.value);
                that.updateDimensions();
                break;
            case "wordWrapEnabled":
                that._tableElement().toggleClass("dx-word-wrap", !!args.value);
                that.updateDimensions();
                break;
            case "rowHeaderLayout":
                that._tableElement().find("." + ROW_AREA_CELL_CLASS).toggleClass("dx-area-tree-view", "tree" === args.value);
                that._dataController.updateViewOptions(that._getDataControllerOptions());
                break;
            case "height":
            case "width":
                that._hasHeight = null;
                that.callBase(args);
                that.resize();
                break;
            default:
                that.callBase(args)
        }
    },
    _updateScrollPosition: function(columnsArea, rowsArea, dataArea) {
        var scrollTop, scrollLeft, that = this,
            scrolled = that._scrollTop || that._scrollLeft;
        if (that._scrollUpdating) {
            return
        }
        that._scrollUpdating = true;
        if (rowsArea && !rowsArea.hasScroll() && that._hasHeight) {
            that._scrollTop = null
        }
        if (columnsArea && !columnsArea.hasScroll()) {
            that._scrollLeft = null
        }
        if (null !== that._scrollTop || null !== that._scrollLeft || scrolled || that.option("rtlEnabled")) {
            scrollTop = that._scrollTop || 0;
            scrollLeft = that._scrollLeft || 0;
            dataArea.scrollTo({
                x: scrollLeft,
                y: scrollTop
            });
            columnsArea.scrollTo(scrollLeft);
            rowsArea.scrollTo(scrollTop);
            that._dataController.updateWindowScrollPosition(that._scrollTop)
        }
        that._scrollUpdating = false
    },
    _subscribeToEvents: function(columnsArea, rowsArea, dataArea) {
        var that = this,
            scrollHandler = function(e) {
                var scrollOffset = e.scrollOffset,
                    leftOffset = isDefined(scrollOffset.left) ? scrollOffset.left : that._scrollLeft,
                    topOffset = isDefined(scrollOffset.top) && that._hasHeight ? scrollOffset.top : that._scrollTop;
                if ((that._scrollLeft || 0) !== (leftOffset || 0) || (that._scrollTop || 0) !== (topOffset || 0)) {
                    that._scrollLeft = leftOffset;
                    that._scrollTop = topOffset;
                    that._updateScrollPosition(columnsArea, rowsArea, dataArea);
                    if ("virtual" === that.option("scrolling.mode")) {
                        that._dataController.setViewportPosition(that._scrollLeft, that._scrollTop)
                    }
                }
            };
        each([columnsArea, rowsArea, dataArea], function(_, area) {
            subscribeToScrollEvent(area, scrollHandler)
        });
        !that._hasHeight && that._dataController.subscribeToWindowScrollEvents(dataArea.groupElement())
    },
    _clean: commonUtils.noop,
    _needDelayResizing: function(cellsInfo) {
        var cellsCount = cellsInfo.length * (cellsInfo.length ? cellsInfo[0].length : 0);
        return cellsCount > this.option("renderCellCountLimit")
    },
    _renderFieldChooser: function() {
        var that = this,
            container = that._pivotGridContainer,
            fieldChooserOptions = that.option("fieldChooser") || {},
            toolbarItems = "onDemand" === fieldChooserOptions.applyChangesMode ? [{
                toolbar: "bottom",
                location: "after",
                widget: "dxButton",
                options: {
                    text: messageLocalization.format("OK"),
                    onClick: function(e) {
                        that._fieldChooserPopup.$content().dxPivotGridFieldChooser("applyChanges");
                        that._fieldChooserPopup.hide()
                    }
                }
            }, {
                toolbar: "bottom",
                location: "after",
                widget: "dxButton",
                options: {
                    text: messageLocalization.format("Cancel"),
                    onClick: function(e) {
                        that._fieldChooserPopup.hide()
                    }
                }
            }] : [],
            fieldChooserComponentOptions = {
                layout: fieldChooserOptions.layout,
                texts: fieldChooserOptions.texts || {},
                dataSource: that.getDataSource(),
                allowSearch: fieldChooserOptions.allowSearch,
                searchTimeout: fieldChooserOptions.searchTimeout,
                width: void 0,
                height: void 0,
                headerFilter: that.option("headerFilter"),
                encodeHtml: that.option("encodeHtml"),
                applyChangesMode: fieldChooserOptions.applyChangesMode
            },
            popupOptions = {
                shading: false,
                title: fieldChooserOptions.title,
                width: fieldChooserOptions.width,
                height: fieldChooserOptions.height,
                showCloseButton: true,
                resizeEnabled: true,
                minWidth: fieldChooserOptions.minWidth,
                minHeight: fieldChooserOptions.minHeight,
                toolbarItems: toolbarItems,
                onResize: function(e) {
                    e.component.$content().dxPivotGridFieldChooser("updateDimensions")
                },
                onShown: function(e) {
                    that._createComponent(e.component.content(), PivotGridFieldChooser, fieldChooserComponentOptions)
                },
                onHidden: function(e) {
                    var fieldChooser = e.component.$content().dxPivotGridFieldChooser("instance");
                    fieldChooser.resetTreeView();
                    fieldChooser.cancelChanges()
                }
            };
        if (that._fieldChooserPopup) {
            that._fieldChooserPopup.option(popupOptions);
            that._fieldChooserPopup.$content().dxPivotGridFieldChooser(fieldChooserComponentOptions)
        } else {
            that._fieldChooserPopup = that._createComponent($(DIV).addClass(FIELD_CHOOSER_POPUP_CLASS).appendTo(container), Popup, popupOptions)
        }
    },
    _renderContextMenu: function() {
        var that = this,
            $container = that._pivotGridContainer;
        if (that._contextMenu) {
            that._contextMenu.$element().remove()
        }
        that._contextMenu = that._createComponent($(DIV).appendTo($container), ContextMenu, {
            onPositioning: function(actionArgs) {
                var targetElement, args, items, event = actionArgs.event;
                actionArgs.cancel = true;
                if (!event) {
                    return
                }
                targetElement = event.target.cellIndex >= 0 ? event.target : $(event.target).closest("td").get(0);
                if (!targetElement) {
                    return
                }
                args = that._createEventArgs(targetElement, event);
                items = that._getContextMenuItems(args);
                if (items) {
                    actionArgs.component.option("items", items);
                    actionArgs.cancel = false;
                    return
                }
            },
            onItemClick: function(params) {
                params.itemData.onItemClick && params.itemData.onItemClick(params)
            },
            cssClass: PIVOTGRID_CLASS,
            target: that.$element()
        })
    },
    _getContextMenuItems: function(e) {
        var that = this,
            items = [],
            texts = that.option("texts");
        if ("row" === e.area || "column" === e.area) {
            var areaFields = e[e.area + "Fields"],
                oppositeAreaFields = e["column" === e.area ? "rowFields" : "columnFields"],
                field = e.cell.path && areaFields[e.cell.path.length - 1],
                dataSource = that.getDataSource();
            if (field && field.allowExpandAll && e.cell.path.length < e[e.area + "Fields"].length) {
                items.push({
                    beginGroup: true,
                    icon: "none",
                    text: texts.expandAll,
                    onItemClick: function() {
                        dataSource.expandAll(field.index)
                    }
                });
                items.push({
                    text: texts.collapseAll,
                    icon: "none",
                    onItemClick: function() {
                        dataSource.collapseAll(field.index)
                    }
                })
            }
            if (e.cell.isLast) {
                var sortingBySummaryItemCount = 0;
                each(oppositeAreaFields, function(index, field) {
                    if (!field.allowSortingBySummary) {
                        return
                    }
                    each(e.dataFields, function(dataIndex, dataField) {
                        if (isDefined(e.cell.dataIndex) && e.cell.dataIndex !== dataIndex) {
                            return
                        }
                        var showDataFieldCaption = !isDefined(e.cell.dataIndex) && e.dataFields.length > 1,
                            textFormat = "column" === e.area ? texts.sortColumnBySummary : texts.sortRowBySummary,
                            checked = pivotGridUtils.findField(e.dataFields, field.sortBySummaryField) === dataIndex && (e.cell.path || []).join("/") === (field.sortBySummaryPath || []).join("/"),
                            text = stringUtils.format(textFormat, showDataFieldCaption ? field.caption + " - " + dataField.caption : field.caption);
                        items.push({
                            beginGroup: 0 === sortingBySummaryItemCount,
                            icon: checked ? "desc" === field.sortOrder ? "sortdowntext" : "sortuptext" : "none",
                            text: text,
                            onItemClick: function() {
                                dataSource.field(field.index, {
                                    sortBySummaryField: dataField.name || dataField.caption || dataField.dataField,
                                    sortBySummaryPath: e.cell.path,
                                    sortOrder: "desc" === field.sortOrder ? "asc" : "desc"
                                });
                                dataSource.load()
                            }
                        });
                        sortingBySummaryItemCount++
                    })
                });
                each(oppositeAreaFields, function(index, field) {
                    if (!field.allowSortingBySummary || !isDefined(field.sortBySummaryField)) {
                        return
                    }
                    items.push({
                        beginGroup: 0 === sortingBySummaryItemCount,
                        icon: "none",
                        text: texts.removeAllSorting,
                        onItemClick: function() {
                            each(oppositeAreaFields, function(index, field) {
                                dataSource.field(field.index, {
                                    sortBySummaryField: void 0,
                                    sortBySummaryPath: void 0,
                                    sortOrder: void 0
                                })
                            });
                            dataSource.load()
                        }
                    });
                    return false
                })
            }
        }
        if (that.option("fieldChooser.enabled")) {
            items.push({
                beginGroup: true,
                icon: "columnchooser",
                text: texts.showFieldChooser,
                onItemClick: function() {
                    that._fieldChooserPopup.show()
                }
            })
        }
        if (that.option("export.enabled")) {
            items.push({
                beginGroup: true,
                icon: "exportxlsx",
                text: texts.exportToExcel,
                onItemClick: function() {
                    that.exportToExcel()
                }
            })
        }
        e.items = items;
        that._trigger("onContextMenuPreparing", e);
        items = e.items;
        if (items && items.length) {
            return items
        }
    },
    _createEventArgs: function(targetElement, dxEvent) {
        var that = this,
            dataSource = that.getDataSource(),
            args = {
                rowFields: dataSource.getAreaFields("row"),
                columnFields: dataSource.getAreaFields("column"),
                dataFields: dataSource.getAreaFields("data"),
                event: dxEvent
            };
        if (clickedOnFieldsArea($(targetElement))) {
            return extend(that._createFieldArgs(targetElement), args)
        } else {
            return extend(that._createCellArgs(targetElement), args)
        }
    },
    _createFieldArgs: function(targetElement) {
        var field = $(targetElement).children().data("field"),
            args = {
                field: field
            };
        return isDefined(field) ? args : {}
    },
    _createCellArgs: function(cellElement) {
        var $cellElement = $(cellElement),
            columnIndex = cellElement.cellIndex,
            rowIndex = cellElement.parentElement.rowIndex,
            $table = $cellElement.closest("table"),
            data = $table.data("data"),
            cell = data && data[rowIndex] && data[rowIndex][columnIndex],
            args = {
                area: $table.data("area"),
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                cellElement: getPublicElement($cellElement),
                cell: cell
            };
        return args
    },
    _handleCellClick: function(e) {
        var that = this,
            args = that._createEventArgs(e.currentTarget, e),
            cell = args.cell;
        if (!cell || !args.area && (args.rowIndex || args.columnIndex)) {
            return
        }
        that._trigger("onCellClick", args);
        cell && !args.cancel && isDefined(cell.expanded) && setTimeout(function() {
            that._dataController[cell.expanded ? "collapseHeaderItem" : "expandHeaderItem"](args.area, cell.path)
        })
    },
    _getNoDataText: function() {
        return this.option("texts.noData")
    },
    _renderNoDataText: gridCoreUtils.renderNoDataText,
    _renderLoadPanel: gridCoreUtils.renderLoadPanel,
    _updateLoading: function(progress) {
        var loadPanelVisible, that = this,
            isLoading = that._dataController.isLoading();
        if (!that._loadPanel) {
            return
        }
        loadPanelVisible = that._loadPanel.option("visible");
        if (!loadPanelVisible) {
            that._startLoadingTime = new Date
        }
        if (isLoading) {
            if (progress) {
                if (new Date - that._startLoadingTime >= 1e3) {
                    that._loadPanel.option("message", Math.floor(100 * progress) + "%")
                }
            } else {
                that._loadPanel.option("message", that.option("loadPanel.text"))
            }
        }
        clearTimeout(that._hideLoadingTimeoutID);
        if (loadPanelVisible && !isLoading) {
            that._hideLoadingTimeoutID = setTimeout(function() {
                that._loadPanel.option("visible", false);
                that.$element().removeClass(OVERFLOW_HIDDEN_CLASS)
            })
        } else {
            that._loadPanel.option("visible", isLoading);
            that.$element().toggleClass(OVERFLOW_HIDDEN_CLASS, !isLoading)
        }
    },
    _renderDescriptionArea: function() {
        var _this = this;
        var $element = this.$element(),
            $descriptionCell = $element.find("." + DESCRIPTION_AREA_CELL_CLASS),
            $toolbarContainer = $(DIV).addClass("dx-pivotgrid-toolbar"),
            fieldPanel = this.option("fieldPanel"),
            $filterHeader = $element.find(".dx-filter-header"),
            $columnHeader = $element.find(".dx-column-header");
        var $targetContainer = void 0;
        if (fieldPanel.visible && fieldPanel.showFilterFields) {
            $targetContainer = $filterHeader
        } else {
            if (fieldPanel.visible && (fieldPanel.showDataFields || fieldPanel.showColumnFields)) {
                $targetContainer = $columnHeader
            } else {
                $targetContainer = $descriptionCell
            }
        }
        $columnHeader.toggleClass(BOTTOM_BORDER_CLASS, !!(fieldPanel.visible && (fieldPanel.showDataFields || fieldPanel.showColumnFields)));
        $filterHeader.toggleClass(BOTTOM_BORDER_CLASS, !!(fieldPanel.visible && fieldPanel.showFilterFields));
        $descriptionCell.toggleClass("dx-pivotgrid-background", fieldPanel.visible && (fieldPanel.showDataFields || fieldPanel.showColumnFields || fieldPanel.showRowFields));
        this.$element().find(".dx-pivotgrid-toolbar").remove();
        $toolbarContainer.prependTo($targetContainer);
        if (this.option("fieldChooser.enabled")) {
            var $buttonElement = $(DIV).appendTo($toolbarContainer).addClass("dx-pivotgrid-field-chooser-button");
            var buttonOptions = {
                icon: "columnchooser",
                hint: this.option("texts.showFieldChooser"),
                onClick: function() {
                    _this.getFieldChooserPopup().show()
                }
            };
            this._createComponent($buttonElement, "dxButton", buttonOptions)
        }
        if (this.option("export.enabled")) {
            var _$buttonElement = $(DIV).appendTo($toolbarContainer).addClass("dx-pivotgrid-export-button");
            var _buttonOptions = {
                icon: "exportxlsx",
                hint: this.option("texts.exportToExcel"),
                onClick: function() {
                    _this.exportToExcel()
                }
            };
            this._createComponent(_$buttonElement, "dxButton", _buttonOptions)
        }
    },
    _detectHasContainerHeight: function() {
        var testElement, that = this,
            element = that.$element();
        if (isDefined(that._hasHeight) || element.is(":hidden")) {
            return
        }
        that._pivotGridContainer.addClass("dx-hidden");
        testElement = $(DIV).height(TEST_HEIGHT);
        element.append(testElement);
        that._hasHeight = element.height() !== TEST_HEIGHT;
        that._pivotGridContainer.removeClass("dx-hidden");
        testElement.remove()
    },
    _renderHeaders: function(rowHeaderContainer, columnHeaderContainer, filterHeaderContainer, dataHeaderContainer) {
        var that = this,
            dataSource = that.getDataSource(),
            FieldsArea = fieldsArea.FieldsArea;
        that._rowFields = that._rowFields || new FieldsArea(that, "row");
        that._rowFields.render(rowHeaderContainer, dataSource.getAreaFields("row"));
        that._columnFields = that._columnFields || new FieldsArea(that, "column");
        that._columnFields.render(columnHeaderContainer, dataSource.getAreaFields("column"));
        that._filterFields = that._filterFields || new FieldsArea(that, "filter");
        that._filterFields.render(filterHeaderContainer, dataSource.getAreaFields("filter"));
        that._dataFields = that._dataFields || new FieldsArea(that, "data");
        that._dataFields.render(dataHeaderContainer, dataSource.getAreaFields("data"));
        that.$element().dxPivotGridFieldChooserBase("instance").renderSortable()
    },
    _createTableElement: function() {
        var that = this;
        var $table = $("<table>").css({
            width: "100%"
        }).toggleClass(BORDERS_CLASS, !!that.option("showBorders")).toggleClass("dx-word-wrap", !!that.option("wordWrapEnabled"));
        eventsEngine.on($table, eventUtils.addNamespace(clickEvent.name, "dxPivotGrid"), "td", that._handleCellClick.bind(that));
        return $table
    },
    _renderDataArea: function(dataAreaElement) {
        var that = this,
            dataArea = that._dataArea || new dataAreaNamespace.DataArea(that);
        that._dataArea = dataArea;
        dataArea.render(dataAreaElement, that._dataController.getCellsInfo());
        return dataArea
    },
    _renderRowsArea: function(rowsAreaElement) {
        var that = this,
            rowsArea = that._rowsArea || new headersArea.VerticalHeadersArea(that);
        that._rowsArea = rowsArea;
        rowsArea.render(rowsAreaElement, that._dataController.getRowsInfo());
        return rowsArea
    },
    _renderColumnsArea: function(columnsAreaElement) {
        var that = this,
            columnsArea = that._columnsArea || new headersArea.HorizontalHeadersArea(that);
        that._columnsArea = columnsArea;
        columnsArea.render(columnsAreaElement, that._dataController.getColumnsInfo());
        return columnsArea
    },
    _initMarkup: function() {
        var that = this;
        that.callBase.apply(this, arguments);
        that.$element().addClass(PIVOTGRID_CLASS)
    },
    _renderContentImpl: function() {
        var columnsAreaElement, rowsAreaElement, dataAreaElement, tableElement, dataArea, rowsArea, columnsArea, rowHeaderContainer, columnHeaderContainer, filterHeaderContainer, dataHeaderContainer, that = this,
            isFirstDrawing = !that._pivotGridContainer;
        tableElement = !isFirstDrawing && that._tableElement();
        if (!tableElement) {
            that.$element().addClass(ROW_LINES_CLASS).addClass(FIELDS_CONTAINER_CLASS);
            that._pivotGridContainer = $(DIV).addClass("dx-pivotgrid-container");
            that._renderFieldChooser();
            that._renderContextMenu();
            columnsAreaElement = $(TD).addClass(COLUMN_AREA_CELL_CLASS);
            rowsAreaElement = $(TD).addClass(ROW_AREA_CELL_CLASS);
            dataAreaElement = $(TD).addClass(DATA_AREA_CELL_CLASS);
            tableElement = that._createTableElement();
            dataHeaderContainer = $(TD).addClass("dx-data-header");
            filterHeaderContainer = $("<td>").attr("colspan", "2").addClass("dx-filter-header");
            columnHeaderContainer = $(TD).addClass("dx-column-header");
            rowHeaderContainer = $(TD).addClass(DESCRIPTION_AREA_CELL_CLASS);
            if (browser.msie) {
                rowHeaderContainer.addClass("dx-ie")
            }
            $(TR).append(filterHeaderContainer).appendTo(tableElement);
            $(TR).append(dataHeaderContainer).append(columnHeaderContainer).appendTo(tableElement);
            $(TR).append(rowHeaderContainer).append(columnsAreaElement).appendTo(tableElement);
            $(TR).addClass(BOTTOM_ROW_CLASS).append(rowsAreaElement).append(dataAreaElement).appendTo(tableElement);
            that._pivotGridContainer.append(tableElement);
            that.$element().append(that._pivotGridContainer);
            if ("tree" === that.option("rowHeaderLayout")) {
                rowsAreaElement.addClass("dx-area-tree-view")
            }
        }
        that.$element().addClass(OVERFLOW_HIDDEN_CLASS);
        that._createComponent(that.$element(), PivotGridFieldChooserBase, {
            dataSource: that.getDataSource(),
            encodeHtml: that.option("encodeHtml"),
            allowFieldDragging: that.option("fieldPanel.allowFieldDragging"),
            headerFilter: that.option("headerFilter"),
            visible: that.option("visible")
        });
        dataArea = that._renderDataArea(dataAreaElement);
        rowsArea = that._renderRowsArea(rowsAreaElement);
        columnsArea = that._renderColumnsArea(columnsAreaElement);
        dataArea.tableElement().prepend(columnsArea.headElement());
        if (isFirstDrawing) {
            that._renderLoadPanel(dataArea.groupElement().parent(), that.$element());
            that._renderDescriptionArea();
            rowsArea.processScroll();
            columnsArea.processScroll()
        } [dataArea, rowsArea, columnsArea].forEach(function(area) {
            unsubscribeScrollEvents(area)
        });
        that._renderHeaders(rowHeaderContainer, columnHeaderContainer, filterHeaderContainer, dataHeaderContainer);
        that._update(isFirstDrawing)
    },
    _update: function(isFirstDrawing) {
        var updateHandler, that = this;
        updateHandler = function() {
            that.updateDimensions().done(function() {
                that._subscribeToEvents(that._columnsArea, that._rowsArea, that._dataArea)
            })
        };
        if (that._needDelayResizing(that._dataArea.getData()) && isFirstDrawing) {
            setTimeout(updateHandler)
        } else {
            updateHandler()
        }
    },
    _fireContentReadyAction: function() {
        if (!this._dataController.isLoading()) {
            this.callBase()
        }
    },
    getScrollPath: function(area) {
        var that = this;
        if ("column" === area) {
            return that._columnsArea.getScrollPath(that._scrollLeft)
        } else {
            return that._rowsArea.getScrollPath(that._scrollTop)
        }
    },
    getDataSource: function() {
        return this._dataController.getDataSource()
    },
    getFieldChooserPopup: function() {
        return this._fieldChooserPopup
    },
    hasScroll: function(area) {
        var that = this;
        return "column" === area ? that._columnsArea.hasScroll() : that._rowsArea.hasScroll()
    },
    _dimensionChanged: function() {
        this.updateDimensions()
    },
    _visibilityChanged: function(visible) {
        if (visible) {
            this.updateDimensions()
        }
    },
    _dispose: function() {
        var that = this;
        clearTimeout(that._hideLoadingTimeoutID);
        that.callBase.apply(that, arguments);
        if (that._dataController) {
            that._dataController.dispose()
        }
    },
    _tableElement: function() {
        return this.$element().find("table").first()
    },
    addWidgetPrefix: function(className) {
        return "dx-pivotgrid-" + className
    },
    resize: function() {
        this.updateDimensions()
    },
    isReady: function() {
        return this.callBase() && !this._dataController.isLoading()
    },
    updateDimensions: function() {
        var groupWidth, groupHeight, dataAreaHeights, rowsAreaHeights, resultHeights, resultWidths, rowsAreaColumnWidths, bordersWidth, hasRowsScroll, hasColumnsScroll, elementWidth, columnsAreaHeight, descriptionCellHeight, columnsAreaRowHeights, rowHeights, columnsAreaRowCount, needSynchronizeFieldPanel, that = this,
            tableElement = that._tableElement(),
            rowsArea = that._rowsArea,
            columnsArea = that._columnsArea,
            dataArea = that._dataArea,
            totalWidth = 0,
            totalHeight = 0,
            rowsAreaWidth = 0,
            scrollBarInfo = getScrollBarInfo(that.option("scrolling.useNative")),
            scrollBarWidth = scrollBarInfo.scrollBarWidth,
            dataAreaCell = tableElement.find("." + DATA_AREA_CELL_CLASS),
            rowAreaCell = tableElement.find("." + ROW_AREA_CELL_CLASS),
            columnAreaCell = tableElement.find("." + COLUMN_AREA_CELL_CLASS),
            descriptionCell = tableElement.find("." + DESCRIPTION_AREA_CELL_CLASS),
            filterHeaderCell = tableElement.find(".dx-filter-header"),
            rowFieldsHeader = that._rowFields,
            d = new Deferred;
        if (!windowUtils.hasWindow()) {
            return
        }
        needSynchronizeFieldPanel = rowFieldsHeader.isVisible() && "tree" !== that.option("rowHeaderLayout"), that._detectHasContainerHeight();
        if (!dataArea.headElement().length) {
            dataArea.tableElement().prepend(columnsArea.headElement())
        }
        if (needSynchronizeFieldPanel) {
            rowsArea.updateColspans(rowFieldsHeader.getColumnsCount());
            rowsArea.tableElement().prepend(rowFieldsHeader.headElement())
        }
        tableElement.addClass(INCOMPRESSIBLE_FIELDS_CLASS);
        dataArea.reset();
        rowsArea.reset();
        columnsArea.reset();
        rowFieldsHeader.reset();
        commonUtils.deferUpdate(function() {
            resultWidths = dataArea.getColumnsWidth();
            rowHeights = rowsArea.getRowsHeight();
            rowsAreaHeights = needSynchronizeFieldPanel ? rowHeights.slice(1) : rowHeights;
            dataAreaHeights = dataArea.getRowsHeight();
            descriptionCellHeight = descriptionCell.outerHeight() + (needSynchronizeFieldPanel ? rowHeights[0] : 0);
            columnsAreaRowCount = that._dataController.getColumnsInfo().length;
            resultHeights = pivotGridUtils.mergeArraysByMaxValue(rowsAreaHeights, dataAreaHeights.slice(columnsAreaRowCount));
            columnsAreaRowHeights = dataAreaHeights.slice(0, columnsAreaRowCount);
            columnsAreaHeight = getArraySum(columnsAreaRowHeights);
            rowsAreaColumnWidths = rowsArea.getColumnsWidth();
            if (that._hasHeight) {
                bordersWidth = getCommonBorderWidth([columnAreaCell, dataAreaCell, tableElement, tableElement.find(".dx-column-header"), filterHeaderCell], "height");
                groupHeight = that.$element().height() - filterHeaderCell.height() - tableElement.find(".dx-data-header").height() - (Math.max(dataArea.headElement().height(), columnAreaCell.height(), descriptionCellHeight) + bordersWidth)
            }
            totalWidth = dataArea.tableElement().width();
            totalHeight = getArraySum(resultHeights);
            if (!totalWidth || !totalHeight) {
                d.resolve();
                return
            }
            rowsAreaWidth = getArraySum(rowsAreaColumnWidths);
            elementWidth = that.$element().width();
            bordersWidth = getCommonBorderWidth([rowAreaCell, dataAreaCell, tableElement], "width");
            groupWidth = elementWidth - rowsAreaWidth - bordersWidth;
            groupWidth = groupWidth > 0 ? groupWidth : totalWidth;
            hasRowsScroll = that._hasHeight && totalHeight - groupHeight >= 1;
            hasColumnsScroll = totalWidth - groupWidth >= 1;
            if (!hasRowsScroll) {
                groupHeight = totalHeight + (hasColumnsScroll ? scrollBarWidth : 0)
            }
            commonUtils.deferRender(function() {
                columnsArea.tableElement().append(dataArea.headElement());
                rowFieldsHeader.tableElement().append(rowsArea.headElement());
                if (!hasColumnsScroll && hasRowsScroll && scrollBarWidth) {
                    adjustSizeArray(resultWidths, scrollBarWidth);
                    totalWidth -= scrollBarWidth
                }
                if (descriptionCellHeight > columnsAreaHeight) {
                    adjustSizeArray(columnsAreaRowHeights, columnsAreaHeight - descriptionCellHeight);
                    columnsArea.setRowsHeight(columnsAreaRowHeights)
                } else {
                    if (rowFieldsHeader.isVisible()) {
                        rowFieldsHeader.groupElement().css("marginTop", columnsAreaHeight - descriptionCellHeight)
                    }
                }
                tableElement.removeClass(INCOMPRESSIBLE_FIELDS_CLASS);
                columnsArea.groupWidth(groupWidth);
                columnsArea.processScrollBarSpacing(hasRowsScroll ? scrollBarWidth : 0);
                columnsArea.setColumnsWidth(resultWidths);
                rowsArea.groupHeight(that._hasHeight ? groupHeight : "auto");
                rowsArea.processScrollBarSpacing(hasColumnsScroll ? scrollBarWidth : 0);
                rowsArea.setColumnsWidth(rowsAreaColumnWidths);
                rowsArea.setRowsHeight(resultHeights);
                dataArea.setColumnsWidth(resultWidths);
                dataArea.setRowsHeight(resultHeights);
                dataArea.groupWidth(groupWidth);
                dataArea.groupHeight(that._hasHeight ? groupHeight : "auto");
                needSynchronizeFieldPanel && rowFieldsHeader.setColumnsWidth(rowsAreaColumnWidths);
                dataAreaCell.toggleClass(BOTTOM_BORDER_CLASS, !hasRowsScroll);
                rowAreaCell.toggleClass(BOTTOM_BORDER_CLASS, !hasRowsScroll);
                if (!that._hasHeight && elementWidth !== that.$element().width()) {
                    var diff = elementWidth - that.$element().width();
                    if (!hasColumnsScroll) {
                        adjustSizeArray(resultWidths, diff);
                        columnsArea.setColumnsWidth(resultWidths);
                        dataArea.setColumnsWidth(resultWidths)
                    }
                    dataArea.groupWidth(groupWidth - diff);
                    columnsArea.groupWidth(groupWidth - diff)
                }
                if ("virtual" === that.option("scrolling.mode") && !that._dataController.isEmpty()) {
                    var virtualContentParams = that._dataController.calculateVirtualContentParams({
                        contentWidth: totalWidth,
                        contentHeight: totalHeight,
                        rowCount: resultHeights.length,
                        columnCount: resultWidths.length,
                        viewportWidth: groupWidth,
                        viewportHeight: that._hasHeight ? groupHeight : $(window).outerHeight()
                    });
                    dataArea.setVirtualContentParams({
                        top: virtualContentParams.contentTop,
                        left: virtualContentParams.contentLeft,
                        width: virtualContentParams.width,
                        height: virtualContentParams.height
                    });
                    rowsArea.setVirtualContentParams({
                        top: virtualContentParams.contentTop,
                        width: rowsAreaWidth,
                        height: virtualContentParams.height
                    });
                    columnsArea.setVirtualContentParams({
                        left: virtualContentParams.contentLeft,
                        width: virtualContentParams.width,
                        height: columnsArea.groupElement().height()
                    })
                }
                var updateScrollableResults = [];
                dataArea.processScroll(scrollBarInfo.scrollBarUseNative, hasColumnsScroll, hasRowsScroll);
                each([columnsArea, rowsArea, dataArea], function(_, area) {
                    updateScrollableResults.push(area && area.updateScrollable())
                });
                that._updateLoading();
                that._renderNoDataText(dataAreaCell);
                when.apply($, updateScrollableResults).done(function() {
                    that._updateScrollPosition(columnsArea, rowsArea, dataArea);
                    d.resolve()
                })
            })
        });
        return d
    },
    applyPartialDataSource: function(area, path, dataSource) {
        this._dataController.applyPartialDataSource(area, path, dataSource)
    }
}).inherit(ExportMixin).include(chartIntegrationMixin);
registerComponent("dxPivotGrid", PivotGrid);
module.exports = PivotGrid;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.summary_display_modes.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.summary_display_modes.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.summary_display_modes.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    inArray = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    isDefined = typeUtils.isDefined,
    pivotGridUtils = __webpack_require__(/*! ./ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    findField = pivotGridUtils.findField,
    foreachTree = pivotGridUtils.foreachTree,
    COLUMN = "column",
    ROW = "row",
    NULL = null,
    calculatePercentValue = function(value, totalValue) {
        var result = value / totalValue;
        if (!isDefined(value) || isNaN(result)) {
            result = NULL
        }
        return result
    },
    _percentOfGrandTotal = function(e, dimension) {
        return calculatePercentValue(e.value(), e.grandTotal(dimension).value())
    },
    percentOfParent = function(e, dimension) {
        var parent = e.parent(dimension),
            parentValue = parent ? parent.value() : e.value();
        return calculatePercentValue(e.value(), parentValue)
    },
    createAbsoluteVariationExp = function(allowCrossGroup) {
        return function(e) {
            var prevCell = e.prev(COLUMN, allowCrossGroup),
                prevValue = prevCell && prevCell.value();
            if (isDefined(prevValue) && isDefined(e.value())) {
                return e.value() - prevValue
            }
            return NULL
        }
    },
    createPercentVariationExp = function(allowCrossGroup) {
        var absoluteExp = createAbsoluteVariationExp(allowCrossGroup);
        return function(e) {
            var absVar = absoluteExp(e),
                prevCell = e.prev(COLUMN, allowCrossGroup),
                prevValue = prevCell && prevCell.value();
            return absVar !== NULL && prevValue ? absVar / prevValue : NULL
        }
    },
    summaryDictionary = {
        percentOfColumnTotal: function(e) {
            return percentOfParent(e, ROW)
        },
        percentOfRowTotal: function(e) {
            return percentOfParent(e, COLUMN)
        },
        percentOfColumnGrandTotal: function(e) {
            return _percentOfGrandTotal(e, ROW)
        },
        percentOfRowGrandTotal: function(e) {
            return _percentOfGrandTotal(e, COLUMN)
        },
        percentOfGrandTotal: function(e) {
            return _percentOfGrandTotal(e)
        }
    },
    getPrevCellCrossGroup = function getPrevCellCrossGroup(cell, direction) {
        if (!cell || !cell.parent(direction)) {
            return
        }
        var prevCell = cell.prev(direction);
        if (!prevCell) {
            prevCell = getPrevCellCrossGroup(cell.parent(direction), direction)
        }
        return prevCell
    },
    createRunningTotalExpr = function(field) {
        if (!field.runningTotal) {
            return
        }
        var direction = field.runningTotal === COLUMN ? ROW : COLUMN;
        return function(e) {
            var prevCell = field.allowCrossGroupCalculation ? getPrevCellCrossGroup(e, direction) : e.prev(direction, false),
                value = e.value(true),
                prevValue = prevCell && prevCell.value(true);
            if (isDefined(prevValue) && isDefined(value)) {
                value = prevValue + value
            } else {
                if (isDefined(prevValue)) {
                    value = prevValue
                }
            }
            return value
        }
    };

function createCache() {
    return {
        fields: {},
        positions: {}
    }
}

function getFieldPos(descriptions, field, cache) {
    var fieldIndex, allFields, fieldParams = {
        index: -1
    };
    if (!typeUtils.isObject(field)) {
        if (cache.fields[field]) {
            field = cache[field]
        } else {
            allFields = descriptions.columns.concat(descriptions.rows).concat(descriptions.values);
            fieldIndex = findField(allFields, field);
            field = cache[field] = allFields[fieldIndex]
        }
    }
    if (field) {
        var area = field.area || "data";
        fieldParams = cache.positions[field.index] = cache.positions[field.index] || {
            area: area,
            index: inArray(field, descriptions["data" === area ? "values" : area + "s"])
        }
    }
    return fieldParams
}

function getPathFieldName(dimension) {
    return dimension === ROW ? "_rowPath" : "_columnPath"
}
var SummaryCell = function(columnPath, rowPath, data, descriptions, fieldIndex, fieldsCache) {
    this._columnPath = columnPath;
    this._rowPath = rowPath;
    this._fieldIndex = fieldIndex;
    this._fieldsCache = fieldsCache || createCache();
    this._data = data;
    this._descriptions = descriptions;
    var cell = data.values && data.values[rowPath[0].index] && data.values[rowPath[0].index][columnPath[0].index];
    if (cell) {
        cell.originalCell = cell.originalCell || cell.slice();
        this._cell = cell
    }
};
SummaryCell.prototype = extend(SummaryCell.prototype, {
    _getPath: function(dimension) {
        return this[getPathFieldName(dimension)]
    },
    _getDimension: function(dimension) {
        dimension = dimension === ROW ? "rows" : "columns";
        return this._descriptions[dimension]
    },
    _createCell: function(config) {
        var that = this;
        return new SummaryCell(config._columnPath || that._columnPath, config._rowPath || that._rowPath, that._data, that._descriptions, that._fieldIndex)
    },
    parent: function(direction) {
        var path = this._getPath(direction).slice(),
            config = {};
        path.shift();
        if (path.length) {
            config[getPathFieldName(direction)] = path;
            return this._createCell(config)
        }
        return NULL
    },
    children: function(direction) {
        var path = this._getPath(direction).slice(),
            item = path[0],
            result = [],
            cellConfig = {};
        if (item.children) {
            for (var i = 0; i < item.children.length; i++) {
                cellConfig[getPathFieldName(direction)] = [item.children[i]].concat(path.slice());
                result.push(this._createCell(cellConfig))
            }
        }
        return result
    },
    grandTotal: function(direction) {
        var config = {},
            rowPath = this._rowPath,
            columnPath = this._columnPath,
            dimensionPath = this._getPath(direction),
            pathFieldName = getPathFieldName(direction);
        if (!direction) {
            config._rowPath = [rowPath[rowPath.length - 1]];
            config._columnPath = [columnPath[columnPath.length - 1]]
        } else {
            config[pathFieldName] = [dimensionPath[dimensionPath.length - 1]]
        }
        return this._createCell(config)
    },
    next: function(direction, allowCrossGroup) {
        var siblings, index, currentPath = this._getPath(direction),
            item = currentPath[0],
            parent = this.parent(direction);
        if (parent) {
            index = inArray(item, currentPath[1].children);
            siblings = parent.children(direction);
            if (siblings[index + 1]) {
                return siblings[index + 1]
            }
        }
        if (allowCrossGroup && parent) {
            do {
                parent = parent.next(direction, allowCrossGroup);
                siblings = parent ? parent.children(direction) : []
            } while (parent && !siblings.length);
            return siblings[0] || NULL
        }
        return NULL
    },
    prev: function(direction, allowCrossGroup) {
        var siblings, index, currentPath = this._getPath(direction),
            item = currentPath[0],
            parent = this.parent(direction);
        if (parent) {
            index = inArray(item, currentPath[1].children);
            siblings = parent.children(direction);
            if (siblings[index - 1]) {
                return siblings[index - 1]
            }
        }
        if (allowCrossGroup && parent) {
            do {
                parent = parent.prev(direction, allowCrossGroup);
                siblings = parent ? parent.children(direction) : []
            } while (parent && !siblings.length);
            return siblings[siblings.length - 1] || NULL
        }
        return NULL
    },
    cell: function() {
        return this._cell
    },
    field: function field(area) {
        var path = this._getPath(area),
            descriptions = this._getDimension(area),
            field = descriptions[path.length - 2];
        return field || NULL
    },
    child: function(direction, fieldValue) {
        var childLevelField, children = this.children(direction);
        for (var i = 0; i < children.length; i++) {
            childLevelField = childLevelField || children[i].field(direction);
            if (children[i].value(childLevelField) === fieldValue) {
                return children[i]
            }
        }
        return NULL
    },
    slice: function(field, value) {
        var childItems, path, currentValue, level, that = this,
            config = {},
            fieldPos = getFieldPos(this._descriptions, field, this._fieldsCache),
            area = fieldPos.area,
            fieldIndex = fieldPos.index,
            sliceCell = NULL,
            newPath = [];
        if (area === ROW || area === COLUMN) {
            path = this._getPath(area).slice();
            level = fieldIndex !== -1 && path.length - 2 - fieldIndex;
            if (path[level]) {
                newPath[path.length - 1] = path[path.length - 1];
                for (var i = level; i >= 0; i--) {
                    if (path[i + 1]) {
                        childItems = path[i + 1].children || [];
                        currentValue = i === level ? value : path[i].value;
                        path[i] = void 0;
                        for (var childIndex = 0; childIndex < childItems.length; childIndex++) {
                            if (childItems[childIndex].value === currentValue) {
                                path[i] = childItems[childIndex];
                                break
                            }
                        }
                    }
                    if (void 0 === path[i]) {
                        return sliceCell
                    }
                }
                config[getPathFieldName(area)] = path;
                sliceCell = that._createCell(config)
            }
        }
        return sliceCell
    },
    value: function(arg1, arg2) {
        var path, level, cell = this._cell,
            fieldIndex = this._fieldIndex,
            fistArgIsBoolean = true === arg1 || false === arg1,
            field = !fistArgIsBoolean ? arg1 : NULL,
            needCalculatedValue = fistArgIsBoolean && arg1 || arg2;
        if (isDefined(field)) {
            var fieldPos = getFieldPos(this._descriptions, field, this._fieldsCache);
            fieldIndex = fieldPos.index;
            if ("data" !== fieldPos.area) {
                path = this._getPath(fieldPos.area);
                level = fieldIndex !== -1 && path.length - 2 - fieldIndex;
                return path[level] && path[level].value
            }
        }
        if (cell && cell.originalCell) {
            return needCalculatedValue ? cell[fieldIndex] : cell.originalCell[fieldIndex]
        }
        return NULL
    }
});

function getExpression(field) {
    var summaryDisplayMode = field.summaryDisplayMode,
        crossGroupCalculation = field.allowCrossGroupCalculation,
        expression = NULL;
    if (typeUtils.isFunction(field.calculateSummaryValue)) {
        expression = field.calculateSummaryValue
    } else {
        if (summaryDisplayMode) {
            if ("absoluteVariation" === summaryDisplayMode) {
                expression = createAbsoluteVariationExp(crossGroupCalculation)
            } else {
                if ("percentVariation" === summaryDisplayMode) {
                    expression = createPercentVariationExp(crossGroupCalculation)
                } else {
                    expression = summaryDictionary[summaryDisplayMode]
                }
            }
            if (expression && !field.format && summaryDisplayMode.indexOf("percent") !== -1) {
                pivotGridUtils.setFieldProperty(field, "format", "percent")
            }
        }
    }
    return expression
}

function processDataCell(data, rowIndex, columnIndex, isRunningTotalCalculation) {
    var values = data.values[rowIndex][columnIndex] = data.values[rowIndex][columnIndex] || [],
        originalCell = values.originalCell;
    if (!originalCell) {
        return
    }
    if (values.allowResetting || !isRunningTotalCalculation) {
        data.values[rowIndex][columnIndex] = originalCell.slice()
    }
    data.values[rowIndex][columnIndex].allowResetting = isRunningTotalCalculation
}
exports.applyDisplaySummaryMode = function(descriptions, data) {
    var expressions = [],
        columnElements = [{
            index: data.grandTotalColumnIndex,
            children: data.columns
        }],
        rowElements = [{
            index: data.grandTotalRowIndex,
            children: data.rows
        }],
        valueFields = descriptions.values,
        fieldsCache = createCache();
    data.values = data.values || [];
    foreachTree(rowElements, function(rowPath) {
        var rowItem = rowPath[0];
        rowItem.isEmpty = [];
        data.values[rowItem.index] = data.values[rowItem.index] || [];
        foreachTree(columnElements, function(columnPath) {
            var expression, expressionArg, cell, field, isEmptyCell, value, columnItem = columnPath[0];
            columnItem.isEmpty = columnItem.isEmpty || [];
            processDataCell(data, rowItem.index, columnItem.index, false);
            for (var i = 0; i < valueFields.length; i++) {
                field = valueFields[i];
                expression = expressions[i] = void 0 === expressions[i] ? getExpression(field) : expressions[i];
                isEmptyCell = false;
                if (expression) {
                    expressionArg = new SummaryCell(columnPath, rowPath, data, descriptions, i, fieldsCache);
                    cell = expressionArg.cell();
                    value = cell[i] = expression(expressionArg);
                    isEmptyCell = null === value || void 0 === value
                }
                if (void 0 === columnItem.isEmpty[i]) {
                    columnItem.isEmpty[i] = true
                }
                if (void 0 === rowItem.isEmpty[i]) {
                    rowItem.isEmpty[i] = true
                }
                if (!isEmptyCell) {
                    rowItem.isEmpty[i] = columnItem.isEmpty[i] = false
                }
            }
        }, false)
    }, false);
    data.isEmptyGrandTotalRow = rowElements[0].isEmpty;
    data.isEmptyGrandTotalColumn = columnElements[0].isEmpty
};
exports.applyRunningTotal = function(descriptions, data) {
    var expressions = [],
        columnElements = [{
            index: data.grandTotalColumnIndex,
            children: data.columns
        }],
        rowElements = [{
            index: data.grandTotalRowIndex,
            children: data.rows
        }],
        valueFields = descriptions.values,
        fieldsCache = createCache();
    data.values = data.values || [];
    foreachTree(rowElements, function(rowPath) {
        var rowItem = rowPath[0];
        data.values[rowItem.index] = data.values[rowItem.index] || [];
        foreachTree(columnElements, function(columnPath) {
            var expression, expressionArg, cell, field, columnItem = columnPath[0];
            processDataCell(data, rowItem.index, columnItem.index, true);
            for (var i = 0; i < valueFields.length; i++) {
                field = valueFields[i];
                expression = expressions[i] = void 0 === expressions[i] ? createRunningTotalExpr(field) : expressions[i];
                if (expression) {
                    expressionArg = new SummaryCell(columnPath, rowPath, data, descriptions, i, fieldsCache);
                    cell = expressionArg.cell();
                    cell[i] = expression(expressionArg)
                }
            }
        }, false)
    }, false)
};
exports.createMockSummaryCell = function(descriptions, fields, indices) {
    var summaryCell = new SummaryCell([], [], {}, descriptions, 0);
    summaryCell.value = function(fieldId) {
        if (isDefined(fieldId)) {
            var index = findField(fields, fieldId),
                field = fields[index];
            if (!indices[index] && field && !isDefined(field.area)) {
                descriptions.values.push(field);
                indices[index] = true
            }
        }
    };
    summaryCell.grandTotal = function() {
        return this
    };
    summaryCell.children = function() {
        return []
    };
    return summaryCell
};


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.pivot_grid.utils.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var typeUtils = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    ajax = __webpack_require__(/*! ../../core/utils/ajax */ "./node_modules/devextreme/core/utils/ajax.js"),
    dataCoreUtils = __webpack_require__(/*! ../../core/utils/data */ "./node_modules/devextreme/core/utils/data.js"),
    iteratorUtils = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    dateLocalization = __webpack_require__(/*! ../../localization/date */ "./node_modules/devextreme/localization/date.js"),
    formatHelper = __webpack_require__(/*! ../../format_helper */ "./node_modules/devextreme/format_helper.js"),
    DataSourceModule = __webpack_require__(/*! ../../data/data_source/data_source */ "./node_modules/devextreme/data/data_source/data_source.js"),
    ArrayStore = __webpack_require__(/*! ../../data/array_store */ "./node_modules/devextreme/data/array_store.js"),
    deferredUtils = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred;
var setFieldProperty = exports.setFieldProperty = function(field, property, value, isInitialization) {
    var initProperties = field._initProperties = field._initProperties || {},
        initValue = isInitialization ? value : field[property];
    if (!initProperties.hasOwnProperty(property) || isInitialization) {
        initProperties[property] = initValue
    }
    field[property] = value
};
exports.sendRequest = function(options) {
    return ajax.sendRequest(options)
};
var foreachTreeAsyncDate = new Date;

function createForeachTreeFunc(isAsync) {
    var foreachTreeFunc = function foreachTreeFunc(items, callback, parentAtFirst, members, index, isChildrenProcessing) {
        members = members || [];
        items = items || [];
        var item, i, deferred, childrenDeferred;
        index = index || 0;

        function createForeachTreeAsyncHandler(deferred, i, isChildrenProcessing) {
            when(foreachTreeFunc(items, callback, parentAtFirst, members, i, isChildrenProcessing)).done(deferred.resolve)
        }
        for (i = index; i < items.length; i++) {
            if (isAsync && i > index && i % 1e4 === 0 && new Date - foreachTreeAsyncDate >= 300) {
                foreachTreeAsyncDate = new Date;
                deferred = new Deferred;
                setTimeout(createForeachTreeAsyncHandler(deferred, i, false), 0);
                return deferred
            }
            item = items[i];
            if (!isChildrenProcessing) {
                members.unshift(item);
                if (parentAtFirst && false === callback(members, i)) {
                    return
                }
                if (item.children) {
                    childrenDeferred = foreachTreeFunc(item.children, callback, parentAtFirst, members);
                    if (isAsync && childrenDeferred) {
                        deferred = new Deferred;
                        childrenDeferred.done(createForeachTreeAsyncHandler(deferred, i, true));
                        return deferred
                    }
                }
            }
            isChildrenProcessing = false;
            if (!parentAtFirst && false === callback(members, i)) {
                return
            }
            members.shift();
            if (items[i] !== item) {
                i--
            }
        }
    };
    return foreachTreeFunc
}
exports.foreachTree = createForeachTreeFunc(false);
exports.foreachTreeAsync = createForeachTreeFunc(true);
exports.findField = function(fields, id) {
    var i, field;
    if (fields && typeUtils.isDefined(id)) {
        for (i = 0; i < fields.length; i++) {
            field = fields[i];
            if (field.name === id || field.caption === id || field.dataField === id || field.index === id) {
                return i
            }
        }
    }
    return -1
};
exports.formatValue = function(value, options) {
    var formatObject = {
        value: value,
        valueText: formatHelper.format(value, options.format) || ""
    };
    return options.customizeText ? options.customizeText.call(options, formatObject) : formatObject.valueText
};
exports.getCompareFunction = function(valueSelector) {
    return function(a, b) {
        var result = 0,
            valueA = valueSelector(a),
            valueB = valueSelector(b),
            aIsDefined = isDefined(valueA),
            bIsDefined = isDefined(valueB);
        if (aIsDefined && bIsDefined) {
            if (valueA > valueB) {
                result = 1
            } else {
                if (valueA < valueB) {
                    result = -1
                }
            }
        }
        if (aIsDefined && !bIsDefined) {
            result = 1
        }
        if (!aIsDefined && bIsDefined) {
            result = -1
        }
        return result
    }
};
exports.createPath = function(items) {
    var i, result = [];
    for (i = items.length - 1; i >= 0; i--) {
        result.push(items[i].key || items[i].value)
    }
    return result
};
exports.foreachDataLevel = function foreachDataLevel(data, callback, index, childrenField) {
    var item, i;
    index = index || 0;
    childrenField = childrenField || "children";
    if (data.length) {
        callback(data, index)
    }
    for (i = 0; i < data.length; i++) {
        item = data[i];
        if (item[childrenField] && item[childrenField].length) {
            foreachDataLevel(item[childrenField], callback, index + 1, childrenField)
        }
    }
};
exports.mergeArraysByMaxValue = function(values1, values2) {
    var i, result = [];
    for (i = 0; i < values1.length; i++) {
        result.push(Math.max(values1[i] || 0, values2[i] || 0))
    }
    return result
};
exports.getExpandedLevel = function(options, axisName) {
    var dimensions = options[axisName],
        expandLevel = 0,
        expandedPaths = ("columns" === axisName ? options.columnExpandedPaths : options.rowExpandedPaths) || [];
    if (options.headerName === axisName) {
        expandLevel = options.path.length
    } else {
        iteratorUtils.each(expandedPaths, function(_, path) {
            expandLevel = Math.max(expandLevel, path.length)
        })
    }
    while (dimensions[expandLevel + 1] && dimensions[expandLevel].expanded) {
        expandLevel++
    }
    return expandLevel
};

function createGroupFields(item) {
    return iteratorUtils.map(["year", "quarter", "month"], function(value, index) {
        return extend({}, item, {
            groupInterval: value,
            groupIndex: index
        })
    })
}

function parseFields(dataSource, fieldsList, path, fieldsDataType) {
    var result = [];
    iteratorUtils.each(fieldsList || [], function(field, value) {
        if (field && 0 === field.indexOf("__")) {
            return
        }
        var items, dataIndex = 1,
            currentPath = path.length ? path + "." + field : field,
            dataType = fieldsDataType[currentPath],
            getter = dataCoreUtils.compileGetter(currentPath);
        while (!typeUtils.isDefined(value) && dataSource[dataIndex]) {
            value = getter(dataSource[dataIndex]);
            dataIndex++
        }
        if (!dataType && typeUtils.isDefined(value)) {
            dataType = typeUtils.type(value)
        }
        items = [{
            dataField: currentPath,
            dataType: dataType,
            groupName: "date" === dataType ? field : void 0,
            groupInterval: void 0,
            displayFolder: path
        }];
        if ("date" === dataType) {
            items = items.concat(createGroupFields(items[0]))
        } else {
            if ("object" === dataType) {
                items = parseFields(dataSource, value, currentPath, fieldsDataType)
            }
        }
        result.push.apply(result, items)
    });
    return result
}
exports.discoverObjectFields = function(items, fields) {
    var fieldsDataType = exports.getFieldsDataType(fields);
    return parseFields(items, items[0], "", fieldsDataType)
};
exports.getFieldsDataType = function(fields) {
    var result = {};
    iteratorUtils.each(fields, function(_, field) {
        result[field.dataField] = result[field.dataField] || field.dataType
    });
    return result
};
var DATE_INTERVAL_FORMATS = {
    month: function(value) {
        return dateLocalization.getMonthNames()[value - 1]
    },
    quarter: function(value) {
        return dateLocalization.format(new Date(2e3, 3 * value - 1), "quarter")
    },
    dayOfWeek: function(value) {
        return dateLocalization.getDayNames()[value]
    }
};
exports.setDefaultFieldValueFormatting = function(field) {
    if ("date" === field.dataType) {
        if (!field.format) {
            setFieldProperty(field, "format", DATE_INTERVAL_FORMATS[field.groupInterval])
        }
    } else {
        if ("number" === field.dataType) {
            var groupInterval = typeUtils.isNumeric(field.groupInterval) && field.groupInterval > 0 && field.groupInterval;
            if (groupInterval && !field.customizeText) {
                setFieldProperty(field, "customizeText", function(formatObject) {
                    var secondValue = formatObject.value + groupInterval,
                        secondValueText = formatHelper.format(secondValue, field.format);
                    return formatObject.valueText && secondValueText ? formatObject.valueText + " - " + secondValueText : ""
                })
            }
        }
    }
};
exports.getFiltersByPath = function(fields, path) {
    var result = [];
    path = path || [];
    for (var i = 0; i < path.length; i++) {
        result.push(extend({}, fields[i], {
            groupIndex: null,
            groupName: null,
            filterType: "include",
            filterValues: [path[i]]
        }))
    }
    return result
};
exports.storeDrillDownMixin = {
    createDrillDownDataSource: function(descriptions, params) {
        function createCustomStoreMethod(methodName) {
            return function(options) {
                var d;
                if (arrayStore) {
                    d = arrayStore[methodName](options)
                } else {
                    d = new Deferred;
                    when(items).done(function(data) {
                        arrayStore = new ArrayStore(data);
                        arrayStore[methodName](options).done(d.resolve).fail(d.reject)
                    }).fail(d.reject)
                }
                return d
            }
        }
        var arrayStore, items = this.getDrillDownItems(descriptions, params),
            dataSource = new DataSourceModule.DataSource({
                load: createCustomStoreMethod("load"),
                totalCount: createCustomStoreMethod("totalCount"),
                key: this.key()
            });
        return dataSource
    }
};
exports.capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
};


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/ui.sortable.js":
/*!**************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/ui.sortable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/ui.sortable.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    eventsEngine = __webpack_require__(/*! ../../events/core/events_engine */ "./node_modules/devextreme/events/core/events_engine.js"),
    isDefined = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isDefined,
    extend = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    each = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js").each,
    eventUtils = __webpack_require__(/*! ../../events/utils */ "./node_modules/devextreme/events/utils.js"),
    addNamespace = eventUtils.addNamespace,
    registerComponent = __webpack_require__(/*! ../../core/component_registrator */ "./node_modules/devextreme/core/component_registrator.js"),
    DOMComponent = __webpack_require__(/*! ../../core/dom_component */ "./node_modules/devextreme/core/dom_component.js"),
    dragEvents = __webpack_require__(/*! ../../events/drag */ "./node_modules/devextreme/events/drag.js"),
    getSwatchContainer = __webpack_require__(/*! ../widget/swatch_container */ "./node_modules/devextreme/ui/widget/swatch_container.js");
var SORTABLE_NAMESPACE = "dxSortable",
    SORTABLE_CLASS = "dx-sortable",
    SCROLL_STEP = 2,
    START_SCROLL_OFFSET = 20,
    SCROLL_TIMEOUT = 10;

function elementHasPoint(element, x, y) {
    var $item = $(element),
        offset = $item.offset();
    if (x >= offset.left && x <= offset.left + $item.outerWidth(true)) {
        if (y >= offset.top && y <= offset.top + $item.outerHeight(true)) {
            return true
        }
    }
}

function checkHorizontalPosition(position, itemOffset, rtl) {
    if (isDefined(itemOffset.posHorizontal)) {
        return rtl ? position > itemOffset.posHorizontal : position < itemOffset.posHorizontal
    } else {
        return true
    }
}

function getIndex($items, $item) {
    var index = -1,
        itemElement = $item.get(0);
    each($items, function(elementIndex, element) {
        var $element = $(element);
        if (!($element.attr("item-group") && $element.attr("item-group") === $items.eq(elementIndex - 1).attr("item-group"))) {
            index++
        }
        if (element === itemElement) {
            return false
        }
    });
    return index === $items.length ? -1 : index
}

function getTargetGroup(e, $groups) {
    var result;
    each($groups, function() {
        if (elementHasPoint(this, e.pageX, e.pageY)) {
            result = $(this)
        }
    });
    return result
}

function getItemsOffset($elements, isVertical, $itemsContainer) {
    var result = [],
        $item = [];
    for (var i = 0; i < $elements.length; i += $item.length) {
        $item = $elements.eq(i);
        if ($item.attr("item-group")) {
            $item = $itemsContainer.find("[item-group='" + $item.attr("item-group") + "']")
        }
        if ($item.is(":visible")) {
            var offset = {
                item: $item,
                index: result.length,
                posHorizontal: isVertical ? void 0 : ($item.last().outerWidth(true) + $item.last().offset().left + $item.offset().left) / 2
            };
            if (isVertical) {
                offset.posVertical = ($item.last().offset().top + $item.offset().top + $item.last().outerHeight(true)) / 2
            } else {
                offset.posVertical = $item.last().outerHeight(true) + $item.last().offset().top
            }
            result.push(offset)
        }
    }
    return result
}

function getScrollWrapper(scrollable) {
    var timeout = null,
        scrollTop = scrollable.scrollTop(),
        $element = scrollable.$element(),
        top = $element.offset().top,
        height = $element.height(),
        delta = 0;

    function onScroll(e) {
        scrollTop = e.scrollOffset.top
    }
    scrollable.on("scroll", onScroll);

    function move() {
        stop();
        scrollable.scrollTo(scrollTop += delta);
        timeout = setTimeout(move, SCROLL_TIMEOUT)
    }

    function stop() {
        clearTimeout(timeout)
    }

    function moveIfNeed(event) {
        if (event.pageY <= top + START_SCROLL_OFFSET) {
            delta = -SCROLL_STEP
        } else {
            if (event.pageY >= top + height - START_SCROLL_OFFSET) {
                delta = SCROLL_STEP
            } else {
                delta = 0;
                stop();
                return
            }
        }
        move()
    }
    return {
        moveIfNeed: moveIfNeed,
        element: function() {
            return $element
        },
        dispose: function() {
            stop();
            scrollable.off("scroll", onScroll)
        }
    }
}
var Sortable = DOMComponent.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            onChanged: null,
            onDragging: null,
            itemRender: null,
            groupSelector: null,
            itemSelector: ".dx-sort-item",
            itemContainerSelector: ".dx-sortable",
            sourceClass: "dx-drag-source",
            dragClass: "dx-drag",
            targetClass: "dx-drag-target",
            direction: "vertical",
            allowDragging: true,
            groupFilter: null,
            useIndicator: false
        })
    },
    _renderItem: function($sourceItem, target) {
        var $item, itemRender = this.option("itemRender");
        if (itemRender) {
            $item = itemRender($sourceItem, target)
        } else {
            $item = $sourceItem.clone();
            $item.css({
                width: $sourceItem.width(),
                height: $sourceItem.height()
            })
        }
        return $item
    },
    _renderIndicator: function($item, isVertical, $targetGroup, isLast) {
        var height = $item.outerHeight(true),
            width = $item.outerWidth(true),
            top = $item.offset().top - $targetGroup.offset().top,
            left = $item.offset().left - $targetGroup.offset().left;
        this._indicator.css({
            position: "absolute",
            top: isLast && isVertical ? top + height : top,
            left: isLast && !isVertical ? left + width : left
        }).toggleClass("dx-position-indicator-horizontal", !isVertical).toggleClass("dx-position-indicator-vertical", !!isVertical).toggleClass("dx-position-indicator-last", !!isLast).height("").width("").appendTo($targetGroup);
        isVertical ? this._indicator.width(width) : this._indicator.height(height)
    },
    _renderDraggable: function($sourceItem) {
        this._$draggable && this._$draggable.remove();
        this._$draggable = this._renderItem($sourceItem, "drag").addClass(this.option("dragClass")).appendTo(getSwatchContainer($sourceItem)).css({
            zIndex: 1e6,
            position: "absolute"
        })
    },
    _detachEventHandlers: function() {
        var dragEventsString = [dragEvents.move, dragEvents.start, dragEvents.end, dragEvents.enter, dragEvents.leave, dragEvents.drop].join(" ");
        eventsEngine.off(this._getEventListener(), addNamespace(dragEventsString, SORTABLE_NAMESPACE))
    },
    _getItemOffset: function(isVertical, itemsOffset, e) {
        for (var i = 0; i < itemsOffset.length; i++) {
            var shouldInsert, sameLine = e.pageY < itemsOffset[i].posVertical;
            if (isVertical) {
                shouldInsert = sameLine
            } else {
                if (sameLine) {
                    shouldInsert = checkHorizontalPosition(e.pageX, itemsOffset[i], this.option("rtlEnabled"));
                    if (!shouldInsert && itemsOffset[i + 1] && itemsOffset[i + 1].posVertical > itemsOffset[i].posVertical) {
                        shouldInsert = true
                    }
                }
            }
            if (shouldInsert) {
                return itemsOffset[i]
            }
        }
    },
    _getEventListener: function() {
        var groupSelector = this.option("groupSelector"),
            element = this.$element();
        return groupSelector ? element.find(groupSelector) : element
    },
    _attachEventHandlers: function() {
        var $sourceItem, sourceIndex, $targetItem, $targetGroup, startPositions, sourceGroup, $groups, that = this,
            itemSelector = that.option("itemSelector"),
            itemContainerSelector = that.option("itemContainerSelector"),
            groupSelector = that.option("groupSelector"),
            sourceClass = that.option("sourceClass"),
            targetClass = that.option("targetClass"),
            onDragging = that.option("onDragging"),
            groupFilter = that.option("groupFilter"),
            element = that.$element(),
            scrollWrapper = null,
            targetIndex = -1;
        var setStartPositions = function() {
            startPositions = [];
            each($sourceItem, function(_, item) {
                startPositions.push($(item).offset())
            })
        };
        var createGroups = function() {
            if (!groupSelector) {
                return element
            } else {
                return groupFilter ? $(groupSelector).filter(groupFilter) : element.find(groupSelector)
            }
        };
        var disposeScrollWrapper = function() {
            scrollWrapper && scrollWrapper.dispose();
            scrollWrapper = null
        };
        var invokeOnDraggingEvent = function() {
            var draggingArgs = {
                sourceGroup: sourceGroup,
                sourceIndex: sourceIndex,
                sourceElement: $sourceItem,
                targetGroup: $targetGroup.attr("group"),
                targetIndex: $targetGroup.find(itemSelector).index($targetItem)
            };
            onDragging && onDragging(draggingArgs);
            if (draggingArgs.cancel) {
                $targetGroup = void 0
            }
        };
        that._detachEventHandlers();
        if (that.option("allowDragging")) {
            var $eventListener = that._getEventListener();
            eventsEngine.on($eventListener, addNamespace(dragEvents.start, SORTABLE_NAMESPACE), itemSelector, function(e) {
                $sourceItem = $(e.currentTarget);
                var $sourceGroup = $sourceItem.closest(groupSelector);
                sourceGroup = $sourceGroup.attr("group");
                sourceIndex = getIndex((groupSelector ? $sourceGroup : element).find(itemSelector), $sourceItem);
                if ($sourceItem.attr("item-group")) {
                    $sourceItem = $sourceGroup.find("[item-group='" + $sourceItem.attr("item-group") + "']")
                }
                that._renderDraggable($sourceItem);
                $targetItem = that._renderItem($sourceItem, "target").addClass(targetClass);
                $sourceItem.addClass(sourceClass);
                setStartPositions();
                $groups = createGroups();
                that._indicator = $("<div>").addClass("dx-position-indicator")
            });
            eventsEngine.on($eventListener, addNamespace(dragEvents.move, SORTABLE_NAMESPACE), function(e) {
                var $item, $itemContainer, $items, $lastItem, isVertical, itemOffset, $prevItem, itemsOffset = [];
                if (!$sourceItem) {
                    return
                }
                targetIndex = -1;
                that._indicator.detach();
                each(that._$draggable, function(index, draggableElement) {
                    $(draggableElement).css({
                        top: startPositions[index].top + e.offset.y,
                        left: startPositions[index].left + e.offset.x
                    })
                });
                $targetGroup && $targetGroup.removeClass(targetClass);
                $targetGroup = getTargetGroup(e, $groups);
                $targetGroup && invokeOnDraggingEvent();
                if ($targetGroup && scrollWrapper && $targetGroup.get(0) !== scrollWrapper.element().get(0)) {
                    disposeScrollWrapper()
                }
                scrollWrapper && scrollWrapper.moveIfNeed(e);
                if (!$targetGroup) {
                    $targetItem.detach();
                    return
                }
                if (!scrollWrapper && $targetGroup.attr("allow-scrolling")) {
                    scrollWrapper = getScrollWrapper($targetGroup.dxScrollable("instance"))
                }
                $targetGroup.addClass(targetClass);
                $itemContainer = $targetGroup.find(itemContainerSelector);
                $items = $itemContainer.find(itemSelector);
                var targetSortable = $targetGroup.closest("." + SORTABLE_CLASS).data("dxSortable"),
                    useIndicator = targetSortable.option("useIndicator");
                isVertical = "vertical" === (targetSortable || that).option("direction");
                itemsOffset = getItemsOffset($items, isVertical, $itemContainer);
                itemOffset = that._getItemOffset(isVertical, itemsOffset, e);
                if (itemOffset) {
                    $item = itemOffset.item;
                    $prevItem = itemsOffset[itemOffset.index - 1] && itemsOffset[itemOffset.index - 1].item;
                    if ($item.hasClass(sourceClass) || $prevItem && $prevItem.hasClass(sourceClass) && $prevItem.is(":visible")) {
                        $targetItem.detach();
                        return
                    }
                    targetIndex = itemOffset.index;
                    if (!useIndicator) {
                        $targetItem.insertBefore($item);
                        return
                    }
                    var isAnotherGroup = $targetGroup.attr("group") !== sourceGroup,
                        isSameIndex = targetIndex === sourceIndex,
                        isNextIndex = targetIndex === sourceIndex + 1;
                    if (isAnotherGroup) {
                        that._renderIndicator($item, isVertical, $targetGroup, that.option("rtlEnabled") && !isVertical);
                        return
                    }
                    if (!isSameIndex && !isNextIndex) {
                        that._renderIndicator($item, isVertical, $targetGroup, that.option("rtlEnabled") && !isVertical)
                    }
                } else {
                    $lastItem = $items.last();
                    if ($lastItem.is(":visible") && $lastItem.hasClass(sourceClass)) {
                        return
                    }
                    if ($itemContainer.length) {
                        targetIndex = itemsOffset.length ? itemsOffset[itemsOffset.length - 1].index + 1 : 0
                    }
                    if (useIndicator) {
                        $items.length && that._renderIndicator($lastItem, isVertical, $targetGroup, !that.option("rtlEnabled") || isVertical)
                    } else {
                        $targetItem.appendTo($itemContainer)
                    }
                }
            });
            eventsEngine.on($eventListener, addNamespace(dragEvents.end, SORTABLE_NAMESPACE), function() {
                disposeScrollWrapper();
                if (!$sourceItem) {
                    return
                }
                var onChanged = that.option("onChanged"),
                    changedArgs = {
                        sourceIndex: sourceIndex,
                        sourceElement: $sourceItem,
                        sourceGroup: sourceGroup,
                        targetIndex: targetIndex,
                        removeSourceElement: true,
                        removeTargetElement: false,
                        removeSourceClass: true
                    };
                if ($targetGroup) {
                    $targetGroup.removeClass(targetClass);
                    changedArgs.targetGroup = $targetGroup.attr("group");
                    if (sourceGroup !== changedArgs.targetGroup || targetIndex > -1) {
                        onChanged && onChanged(changedArgs);
                        changedArgs.removeSourceElement && $sourceItem.remove()
                    }
                }
                that._indicator.detach();
                changedArgs.removeSourceClass && $sourceItem.removeClass(sourceClass);
                $sourceItem = null;
                that._$draggable.remove();
                that._$draggable = null;
                changedArgs.removeTargetElement && $targetItem.remove();
                $targetItem.removeClass(targetClass);
                $targetItem = null
            })
        }
    },
    _init: function() {
        this.callBase();
        this._attachEventHandlers()
    },
    _render: function() {
        this.callBase();
        this.$element().addClass(SORTABLE_CLASS)
    },
    _dispose: function() {
        var that = this;
        that.callBase.apply(that, arguments);
        that._$draggable && that._$draggable.detach();
        that._indicator && that._indicator.detach()
    },
    _optionChanged: function(args) {
        var that = this;
        switch (args.name) {
            case "onDragging":
            case "onChanged":
            case "itemRender":
            case "groupSelector":
            case "itemSelector":
            case "itemContainerSelector":
            case "sourceClass":
            case "targetClass":
            case "dragClass":
            case "allowDragging":
            case "groupFilter":
            case "useIndicator":
                that._attachEventHandlers();
                break;
            case "direction":
                break;
            default:
                that.callBase(args)
        }
    }
});
registerComponent("dxSortable", Sortable);
module.exports = Sortable;


/***/ }),

/***/ "./node_modules/devextreme/ui/pivot_grid/xmla_store/xmla_store.js":
/*!************************************************************************!*\
  !*** ./node_modules/devextreme/ui/pivot_grid/xmla_store/xmla_store.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/pivot_grid/xmla_store/xmla_store.js)
 * Version: 18.2.3
 * Build date: Wed Nov 07 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../../../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    window = __webpack_require__(/*! ../../../core/utils/window */ "./node_modules/devextreme/core/utils/window.js").getWindow(),
    Class = __webpack_require__(/*! ../../../core/class */ "./node_modules/devextreme/core/class.js"),
    stringFormat = __webpack_require__(/*! ../../../core/utils/string */ "./node_modules/devextreme/core/utils/string.js").format,
    errors = __webpack_require__(/*! ../../../data/errors */ "./node_modules/devextreme/data/errors.js").errors,
    noop = __webpack_require__(/*! ../../../core/utils/common */ "./node_modules/devextreme/core/utils/common.js").noop,
    typeUtils = __webpack_require__(/*! ../../../core/utils/type */ "./node_modules/devextreme/core/utils/type.js"),
    iteratorUtils = __webpack_require__(/*! ../../../core/utils/iterator */ "./node_modules/devextreme/core/utils/iterator.js"),
    inArray = __webpack_require__(/*! ../../../core/utils/array */ "./node_modules/devextreme/core/utils/array.js").inArray,
    pivotGridUtils = __webpack_require__(/*! ../ui.pivot_grid.utils */ "./node_modules/devextreme/ui/pivot_grid/ui.pivot_grid.utils.js"),
    deferredUtils = __webpack_require__(/*! ../../../core/utils/deferred */ "./node_modules/devextreme/core/utils/deferred.js"),
    when = deferredUtils.when,
    Deferred = deferredUtils.Deferred,
    getLanguageId = __webpack_require__(/*! ../../../localization/language_codes */ "./node_modules/devextreme/localization/language_codes.js").getLanguageId;
exports.XmlaStore = Class.inherit(function() {
    var discover = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><Discover xmlns="urn:schemas-microsoft-com:xml-analysis"><RequestType>{2}</RequestType><Restrictions><RestrictionList><CATALOG_NAME>{0}</CATALOG_NAME><CUBE_NAME>{1}</CUBE_NAME></RestrictionList></Restrictions><Properties><PropertyList><Catalog>{0}</Catalog>{3}</PropertyList></Properties></Discover></Body></Envelope>',
        execute = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><Execute xmlns="urn:schemas-microsoft-com:xml-analysis"><Command><Statement>{0}</Statement></Command><Properties><PropertyList><Catalog>{1}</Catalog><ShowHiddenCubes>True</ShowHiddenCubes><SspropInitAppName>Microsoft SQL Server Management Studio</SspropInitAppName><Timeout>3600</Timeout>{2}</PropertyList></Properties></Execute></Body></Envelope>',
        mdx = "SELECT {2} FROM {0} {1} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS",
        mdxFilterSelect = "(SELECT {0} FROM {1})",
        mdxWith = "{0} {1} as {2}",
        mdxSlice = "WHERE ({0})",
        mdxNonEmpty = "NonEmpty({0}, {1})",
        mdxAxis = "{0} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME, MEMBER_VALUE ON {1}",
        mdxCrossJoin = "CrossJoin({0})",
        mdxSet = "{{0}}",
        each = iteratorUtils.each,
        MEASURE_DEMENSION_KEY = "DX_MEASURES",
        MD_DIMTYPE_MEASURE = "2";

    function execXMLA(requestOptions, data) {
        var deferred = new Deferred,
            beforeSend = requestOptions.beforeSend,
            ajaxSettings = {
                url: requestOptions.url,
                dataType: "text",
                data: data,
                headers: {
                    "Content-Type": "text/xml"
                },
                xhrFields: {},
                method: "POST"
            };
        if (typeUtils.isFunction(beforeSend)) {
            beforeSend(ajaxSettings)
        }
        pivotGridUtils.sendRequest(ajaxSettings).fail(function() {
            deferred.reject(arguments)
        }).done(function(text) {
            var parser = new window.DOMParser;
            var xml;
            try {
                try {
                    xml = parser.parseFromString(text, "text/xml")
                } catch (e) {
                    xml = void 0
                }
                if (!xml || xml.getElementsByTagName("parsererror").length || 0 === xml.childNodes.length) {
                    throw new errors.Error("E4023", text)
                }
            } catch (e) {
                deferred.reject({
                    statusText: e.message,
                    stack: e.stack,
                    responseText: text
                })
            }
            deferred.resolve(xml)
        });
        return deferred
    }

    function getLocaleIdProperty() {
        var languageId = getLanguageId();
        if (void 0 !== languageId) {
            return stringFormat("<LocaleIdentifier>{0}</LocaleIdentifier>", languageId)
        }
        return ""
    }

    function mdxDescendants(level, levelMember, nextLevel) {
        var memberExpression = levelMember ? levelMember : level;
        return "Descendants({" + memberExpression + "}, " + nextLevel + ", SELF_AND_BEFORE)"
    }

    function getAllMember(dimension) {
        return (dimension.hierarchyName || dimension.dataField) + ".[All]"
    }

    function getAllMembers(field) {
        return field.dataField + ".allMembers"
    }

    function crossJoinElements(elements) {
        var elementsString = elements.join(",");
        return elements.length > 1 ? stringFormat(mdxCrossJoin, elementsString) : elementsString
    }

    function union(elements) {
        var elementsString = elements.join(",");
        return elements.length > 1 ? "Union(" + elementsString + ")" : elementsString
    }

    function generateCrossJoin(path, expandLevel, expandAllCount, expandIndex, slicePath, options, axisName) {
        var dataField, allMember, hierarchyName, arg, prevDimension, prevHierarchyName, isLastDimensionInGroup, isFirstDimensionInGroup, expandAllIndex, field, member, i, crossJoinArgs = [],
            dimensions = options[axisName],
            fields = [];
        for (i = expandIndex; i <= expandLevel; i++) {
            field = dimensions[i];
            dataField = field.dataField;
            prevHierarchyName = dimensions[i - 1] && dimensions[i - 1].hierarchyName;
            hierarchyName = field.hierarchyName;
            isLastDimensionInGroup = !hierarchyName || !dimensions[i + 1] || dimensions[i + 1].hierarchyName !== hierarchyName;
            expandAllIndex = path.length + expandAllCount + expandIndex;
            arg = null;
            fields.push(field);
            if (i < path.length) {
                if (isLastDimensionInGroup) {
                    arg = "(" + dataField + "." + preparePathValue(path[i], dataField) + ")"
                }
            } else {
                if (i <= expandAllIndex) {
                    if (0 === i && 0 === expandAllCount) {
                        allMember = getAllMember(dimensions[expandIndex]);
                        if (!hierarchyName) {
                            arg = getAllMembers(dimensions[expandIndex])
                        } else {
                            arg = allMember + "," + dimensions[expandIndex].dataField
                        }
                    } else {
                        if (hierarchyName) {
                            member = preparePathValue(slicePath[slicePath.length - 1]);
                            if (isLastDimensionInGroup || i === expandAllIndex) {
                                if (prevHierarchyName === hierarchyName) {
                                    if (slicePath.length) {
                                        prevDimension = dimensions[slicePath.length - 1]
                                    }
                                    if (!prevDimension || prevDimension.hierarchyName !== hierarchyName) {
                                        prevDimension = dimensions[i - 1];
                                        member = ""
                                    }
                                    arg = mdxDescendants(prevDimension.dataField, member, dataField)
                                } else {
                                    arg = getAllMembers(field)
                                }
                            }
                        } else {
                            arg = getAllMembers(field)
                        }
                    }
                } else {
                    isFirstDimensionInGroup = !hierarchyName || prevHierarchyName !== hierarchyName;
                    if (isFirstDimensionInGroup) {
                        arg = "(" + getAllMember(field) + ")"
                    }
                }
            }
            if (arg) {
                arg = stringFormat(mdxSet, arg);
                crossJoinArgs.push(arg)
            }
        }
        return crossJoinElements(crossJoinArgs)
    }

    function fillCrossJoins(crossJoins, path, expandLevel, expandIndex, slicePath, options, axisName, cellsString) {
        var dimensionIndex, expandAllCount = -1,
            dimensions = options[axisName];
        do {
            expandAllCount++;
            dimensionIndex = path.length + expandAllCount + expandIndex;
            crossJoins.push(stringFormat(mdxNonEmpty, generateCrossJoin(path, expandLevel, expandAllCount, expandIndex, slicePath, options, axisName), cellsString))
        } while (dimensions[dimensionIndex] && dimensions[dimensionIndex + 1] && dimensions[dimensionIndex].expanded)
    }

    function declare(expression, withArray, name, type) {
        name = name || "[DX_Set_" + withArray.length + "]";
        type = type || "set";
        withArray.push(stringFormat(mdxWith, type, name, expression));
        return name
    }

    function generateAxisMdx(options, axisName, cells, withArray, parseOptions) {
        var dimensions = options[axisName],
            crossJoins = [],
            path = [],
            expandedPaths = [],
            expandIndex = 0,
            expandLevel = 0,
            result = [],
            cellsString = stringFormat(mdxSet, cells.join(","));
        if (dimensions && dimensions.length) {
            if (options.headerName === axisName) {
                path = options.path;
                expandIndex = path.length
            } else {
                expandedPaths = ("columns" === axisName ? options.columnExpandedPaths : options.rowExpandedPaths) || expandedPaths
            }
            expandLevel = pivotGridUtils.getExpandedLevel(options, axisName);
            fillCrossJoins(crossJoins, [], expandLevel, expandIndex, path, options, axisName, cellsString);
            each(expandedPaths, function(_, expandedPath) {
                fillCrossJoins(crossJoins, expandedPath, expandLevel, expandIndex, expandedPath, options, axisName, cellsString)
            });
            for (var i = expandLevel; i >= path.length; i--) {
                if (dimensions[i].hierarchyName) {
                    parseOptions.visibleLevels[dimensions[i].hierarchyName] = parseOptions.visibleLevels[dimensions[i].hierarchyName] || [];
                    parseOptions.visibleLevels[dimensions[i].hierarchyName].push(dimensions[i].dataField)
                }
            }
        }
        if (crossJoins.length) {
            result.push(declare(union(crossJoins), withArray, "[DX_" + axisName + "]"))
        }
        if ("columns" === axisName && cells.length && !options.skipValues) {
            result.push(cellsString)
        }
        return stringFormat(mdxAxis, crossJoinElements(result), axisName)
    }

    function generateAxisFieldsFilter(fields) {
        var filterMembers = [];
        each(fields, function(_, field) {
            var filterStringExpression, dataField = field.dataField,
                filterExpression = [],
                filterValues = field.filterValues || [];
            if (field.hierarchyName && typeUtils.isNumeric(field.groupIndex)) {
                return
            }
            each(filterValues, function(_, filterValue) {
                var filterMdx = dataField + "." + preparePathValue(Array.isArray(filterValue) ? filterValue[filterValue.length - 1] : filterValue, dataField);
                if ("exclude" === field.filterType) {
                    filterExpression.push(filterMdx + ".parent");
                    filterMdx = "Descendants(" + filterMdx + ")"
                }
                filterExpression.push(filterMdx)
            });
            if (filterValues.length) {
                filterStringExpression = stringFormat(mdxSet, filterExpression.join(","));
                if ("exclude" === field.filterType) {
                    filterStringExpression = "Except(" + getAllMembers(field) + "," + filterStringExpression + ")"
                }
                filterMembers.push(filterStringExpression)
            }
        });
        return filterMembers.length ? crossJoinElements(filterMembers) : ""
    }

    function generateFrom(columnsFilter, rowsFilter, filter, cubeName) {
        var from = "[" + cubeName + "]";
        each([columnsFilter, rowsFilter, filter], function(_, filter) {
            if (filter) {
                from = stringFormat(mdxFilterSelect, filter + "on 0", from)
            }
        });
        return from
    }

    function generateMdxCore(axisStrings, withArray, columns, rows, filters, slice, cubeName) {
        var mdxString = "",
            withString = (withArray.length ? "with " + withArray.join(" ") : "") + " ";
        if (axisStrings.length) {
            mdxString = withString + stringFormat(mdx, generateFrom(generateAxisFieldsFilter(columns), generateAxisFieldsFilter(rows), generateAxisFieldsFilter(filters || []), cubeName), slice.length ? stringFormat(mdxSlice, slice.join(",")) : "", axisStrings.join(","))
        }
        return mdxString
    }

    function prepareDataFields(withArray, valueFields) {
        return iteratorUtils.map(valueFields, function(cell) {
            if (typeUtils.isString(cell.expression)) {
                declare(cell.expression, withArray, cell.dataField, "member")
            }
            return cell.dataField
        })
    }

    function generateMDX(options, cubeName, parseOptions) {
        var columns = options.columns || [],
            rows = options.rows || [],
            values = options.values && options.values.length ? options.values : [{
                dataField: "[Measures]"
            }],
            slice = [],
            withArray = [],
            axisStrings = [],
            dataFields = prepareDataFields(withArray, values);
        parseOptions.measureCount = options.skipValues ? 1 : values.length;
        parseOptions.visibleLevels = {};
        if (options.headerName && options.path) {
            each(options.path, function(index, value) {
                var dimension = options[options.headerName][index];
                if (!dimension.hierarchyName || dimension.hierarchyName !== options[options.headerName][index + 1].hierarchyName) {
                    slice.push(dimension.dataField + "." + preparePathValue(value, dimension.dataField))
                }
            })
        }
        if (columns.length || dataFields.length) {
            axisStrings.push(generateAxisMdx(options, "columns", dataFields, withArray, parseOptions))
        }
        if (rows.length) {
            axisStrings.push(generateAxisMdx(options, "rows", dataFields, withArray, parseOptions))
        }
        return generateMdxCore(axisStrings, withArray, columns, rows, options.filters, slice, cubeName)
    }

    function createDrillDownAxisSlice(slice, fields, path) {
        each(path, function(index, value) {
            var field = fields[index];
            if (field.hierarchyName && (fields[index + 1] || {}).hierarchyName === field.hierarchyName) {
                return
            }
            slice.push(field.dataField + "." + preparePathValue(value, field.dataField))
        })
    }

    function generateDrillDownMDX(options, cubeName, params) {
        var coreMDX, columns = options.columns || [],
            rows = options.rows || [],
            values = options.values && options.values.length ? options.values : [{
                dataField: "[Measures]"
            }],
            slice = [],
            withArray = [],
            axisStrings = [],
            dataFields = prepareDataFields(withArray, values),
            maxRowCount = params.maxRowCount,
            customColumns = params.customColumns || [],
            customColumnsString = customColumns.length > 0 ? " return " + customColumns.join(",") : "";
        createDrillDownAxisSlice(slice, columns, params.columnPath || []);
        createDrillDownAxisSlice(slice, rows, params.rowPath || []);
        if (columns.length || columns.length || dataFields.length) {
            axisStrings.push([(dataFields[params.dataIndex] || dataFields[0]) + " on 0"])
        }
        coreMDX = generateMdxCore(axisStrings, withArray, columns, rows, options.filters, slice, cubeName);
        return coreMDX ? "drillthrough" + (maxRowCount > 0 ? " maxrows " + maxRowCount : "") + coreMDX + customColumnsString : coreMDX
    }

    function getNumber(str) {
        return parseInt(str, 10)
    }

    function parseValue(valueText) {
        return typeUtils.isNumeric(valueText) ? parseFloat(valueText) : valueText
    }

    function getFirstChild(node, tagName) {
        return (node.getElementsByTagName(tagName) || [])[0]
    }

    function getFirstChildText(node, childTagName) {
        return getNodeText(getFirstChild(node, childTagName))
    }

    function parseAxes(xml, skipValues) {
        var axes = [];
        each(xml.getElementsByTagName("Axis"), function(_, axisElement) {
            var name = axisElement.getAttribute("name"),
                axis = [],
                index = 0;
            if (0 === name.indexOf("Axis") && typeUtils.isNumeric(getNumber(name.substr(4)))) {
                axes.push(axis);
                each(axisElement.getElementsByTagName("Tuple"), function(_, tupleElement) {
                    var tuple, level, i, tupleMembers = tupleElement.childNodes,
                        levelSum = 0,
                        members = [],
                        membersCount = skipValues ? tupleMembers.length : tupleMembers.length - 1,
                        isAxisWithMeasure = 1 === axes.length;
                    if (isAxisWithMeasure) {
                        membersCount--
                    }
                    axis.push(members);
                    for (i = membersCount; i >= 0; i--) {
                        tuple = tupleMembers[i];
                        level = getNumber(getFirstChildText(tuple, "LNum"));
                        members[i] = {
                            caption: getFirstChildText(tuple, "Caption"),
                            value: parseValue(getFirstChildText(tuple, "MEMBER_VALUE")),
                            level: level,
                            index: index++,
                            hasValue: !levelSum && (!!level || 0 === i),
                            name: getFirstChildText(tuple, "UName"),
                            hierarchyName: tupleMembers[i].getAttribute("Hierarchy"),
                            parentName: getFirstChildText(tuple, "PARENT_UNIQUE_NAME"),
                            levelName: getFirstChildText(tuple, "LName")
                        };
                        levelSum += level
                    }
                })
            }
        });
        while (axes.length < 2) {
            axes.push([
                [{
                    level: 0
                }]
            ])
        }
        return axes
    }

    function getNodeText(node) {
        return node && node && (node.textContent || node.text || node.innerHTML) || ""
    }

    function parseCells(xml, axes, measureCount) {
        var measureIndex, row, cells = [],
            cell = [],
            index = 0,
            cellsOriginal = [],
            cellElements = xml.getElementsByTagName("Cell"),
            errorDictionary = {};
        for (var i = 0; i < cellElements.length; i++) {
            var xmlCell = cellElements[i],
                valueElement = xmlCell.getElementsByTagName("Value")[0],
                errorElements = valueElement && valueElement.getElementsByTagName("Error") || [],
                text = 0 === errorElements.length ? getNodeText(valueElement) : "#N/A",
                value = parseFloat(text),
                isNumeric = text - value + 1 > 0,
                cellOrdinal = getNumber(xmlCell.getAttribute("CellOrdinal"));
            if (errorElements.length) {
                errorDictionary[getNodeText(errorElements[0].getElementsByTagName("ErrorCode")[0])] = getNodeText(errorElements[0].getElementsByTagName("Description")[0])
            }
            cellsOriginal[cellOrdinal] = {
                value: isNumeric ? value : text || null
            }
        }
        each(axes[1], function() {
            row = [];
            cells.push(row);
            each(axes[0], function() {
                measureIndex = index % measureCount;
                if (0 === measureIndex) {
                    cell = [];
                    row.push(cell)
                }
                cell.push(cellsOriginal[index] ? cellsOriginal[index].value : null);
                index++
            })
        });
        Object.keys(errorDictionary).forEach(function(key) {
            errors.log("W4002", errorDictionary[key])
        });
        return cells
    }

    function preparePathValue(pathValue, dataField) {
        if (pathValue) {
            pathValue = typeUtils.isString(pathValue) && pathValue.indexOf("&") !== -1 ? pathValue : "[" + pathValue + "]";
            if (dataField && 0 === pathValue.indexOf(dataField + ".")) {
                pathValue = pathValue.slice(dataField.length + 1, pathValue.length)
            }
        }
        return pathValue
    }

    function getItem(hash, name, member, index) {
        var item = hash[name];
        if (!item) {
            item = {};
            hash[name] = item
        }
        if (!typeUtils.isDefined(item.value) && member) {
            item.text = member.caption;
            item.value = member.value;
            item.key = name ? name : "";
            item.levelName = member.levelName;
            item.hierarchyName = member.hierarchyName;
            item.parentName = member.parentName;
            item.index = index;
            item.level = member.level
        }
        return item
    }

    function getVisibleChildren(item, visibleLevels) {
        var result = [],
            children = item.children && (item.children.length ? item.children : Object.keys(item.children.grandTotalHash || {}).reduce(function(result, name) {
                return result.concat(item.children.grandTotalHash[name].children)
            }, [])),
            firstChild = children && children[0];
        if (firstChild && (visibleLevels[firstChild.hierarchyName] && inArray(firstChild.levelName, visibleLevels[firstChild.hierarchyName]) !== -1 || !visibleLevels[firstChild.hierarchyName] || 0 === firstChild.level)) {
            var newChildren = children.filter(function(child) {
                return child.hierarchyName === firstChild.hierarchyName
            });
            newChildren.grandTotalHash = children.grandTotalHash;
            return newChildren
        } else {
            if (firstChild) {
                for (var i = 0; i < children.length; i++) {
                    if (children[i].hierarchyName === firstChild.hierarchyName) {
                        result.push.apply(result, getVisibleChildren(children[i], visibleLevels))
                    }
                }
            }
        }
        return result
    }

    function processMember(dataIndex, member, parentItem) {
        var currentItem, children = parentItem.children = parentItem.children || [],
            hash = children.hash = children.hash || {},
            grandTotalHash = children.grandTotalHash = children.grandTotalHash || {};
        if (member.parentName) {
            parentItem = getItem(hash, member.parentName);
            children = parentItem.children = parentItem.children || []
        }
        currentItem = getItem(hash, member.name, member, dataIndex);
        if (member.hasValue && !currentItem.added) {
            currentItem.index = dataIndex;
            currentItem.added = true;
            children.push(currentItem)
        }
        if ((!parentItem.value || !parentItem.parentName) && member.parentName) {
            grandTotalHash[member.parentName] = parentItem
        } else {
            if (grandTotalHash[parentItem.name]) {
                delete grandTotalHash[member.parentName]
            }
        }
        return currentItem
    }

    function getGrandTotalIndex(parentItem, visibleLevels) {
        var grandTotalIndex;
        if (1 === parentItem.children.length && "" === parentItem.children[0].parentName) {
            grandTotalIndex = parentItem.children[0].index;
            var grandTotalHash = parentItem.children.grandTotalHash;
            parentItem.children = parentItem.children[0].children || [];
            parentItem.children.grandTotalHash = grandTotalHash;
            parentItem.children = getVisibleChildren(parentItem, visibleLevels)
        } else {
            if (0 === parentItem.children.length) {
                grandTotalIndex = 0
            }
        }
        return grandTotalIndex
    }

    function fillDataSourceAxes(dataSourceAxis, axisTuples, measureCount, visibleLevels) {
        var grandTotalIndex, result = [];
        each(axisTuples, function(tupleIndex, members) {
            var parentItem = {
                    children: result
                },
                dataIndex = typeUtils.isDefined(measureCount) ? Math.floor(tupleIndex / measureCount) : tupleIndex;
            each(members, function(_, member) {
                parentItem = processMember(dataIndex, member, parentItem)
            })
        });
        var parentItem = {
            children: result
        };
        parentItem.children = getVisibleChildren(parentItem, visibleLevels);
        grandTotalIndex = getGrandTotalIndex(parentItem, visibleLevels);
        pivotGridUtils.foreachTree(parentItem.children, function(items) {
            var item = items[0],
                children = getVisibleChildren(item, visibleLevels);
            if (children.length) {
                item.children = children
            } else {
                delete item.children
            }
            delete item.levelName;
            delete item.hierarchyName;
            delete item.added;
            delete item.parentName;
            delete item.level
        }, true);
        each(parentItem.children || [], function(_, e) {
            dataSourceAxis.push(e)
        });
        return grandTotalIndex
    }

    function checkError(xml) {
        var description, error, faultElementNS = xml.getElementsByTagName("soap:Fault"),
            faultElement = xml.getElementsByTagName("Fault"),
            errorElement = $([].slice.call(faultElement.length ? faultElement : faultElementNS)).find("Error");
        if (errorElement.length) {
            description = errorElement.attr("Description");
            error = new errors.Error("E4000", description);
            errors.log("E4000", description);
            return error
        }
        return null
    }

    function parseResult(xml, parseOptions) {
        var axes, dataSource = {
                columns: [],
                rows: []
            },
            measureCount = parseOptions.measureCount;
        axes = parseAxes(xml, parseOptions.skipValues);
        dataSource.grandTotalColumnIndex = fillDataSourceAxes(dataSource.columns, axes[0], measureCount, parseOptions.visibleLevels);
        dataSource.grandTotalRowIndex = fillDataSourceAxes(dataSource.rows, axes[1], void 0, parseOptions.visibleLevels);
        dataSource.values = parseCells(xml, axes, measureCount);
        return dataSource
    }

    function parseDiscoverRowSet(xml, schema, dimensions, translatedDisplayFolders) {
        var result = [],
            isMeasure = "MEASURE" === schema,
            displayFolderField = isMeasure ? "MEASUREGROUP_NAME" : schema + "_DISPLAY_FOLDER";
        each(xml.getElementsByTagName("row"), function(_, row) {
            var hierarchyName = "LEVEL" === schema ? getFirstChildText(row, "HIERARCHY_UNIQUE_NAME") : void 0,
                levelNumber = getFirstChildText(row, "LEVEL_NUMBER"),
                displayFolder = getFirstChildText(row, displayFolderField);
            if (isMeasure) {
                displayFolder = translatedDisplayFolders[displayFolder] || displayFolder
            }
            if (("0" !== levelNumber || "true" !== getFirstChildText(row, schema + "_IS_VISIBLE")) && getFirstChildText(row, "DIMENSION_TYPE") !== MD_DIMTYPE_MEASURE) {
                var dimension = isMeasure ? MEASURE_DEMENSION_KEY : getFirstChildText(row, "DIMENSION_UNIQUE_NAME"),
                    dataField = getFirstChildText(row, schema + "_UNIQUE_NAME");
                result.push({
                    dimension: dimensions.names[dimension] || dimension,
                    groupIndex: levelNumber ? getNumber(levelNumber) - 1 : void 0,
                    dataField: dataField,
                    caption: getFirstChildText(row, schema + "_CAPTION"),
                    hierarchyName: hierarchyName,
                    groupName: hierarchyName,
                    displayFolder: displayFolder,
                    isMeasure: isMeasure,
                    isDefault: !!dimensions.defaultHierarchies[dataField]
                })
            }
        });
        return result
    }

    function parseMeasureGroupDiscoverRowSet(xml) {
        var measureGroups = {};
        each(xml.getElementsByTagName("row"), function(_, row) {
            measureGroups[getFirstChildText(row, "MEASUREGROUP_NAME")] = getFirstChildText(row, "MEASUREGROUP_CAPTION")
        });
        return measureGroups
    }

    function parseDimensionsDiscoverRowSet(xml) {
        var result = {
            names: {},
            defaultHierarchies: {}
        };
        each($(xml).find("row"), function() {
            var $row = $(this),
                type = $row.children("DIMENSION_TYPE").text(),
                dimensionName = type === MD_DIMTYPE_MEASURE ? MEASURE_DEMENSION_KEY : $row.children("DIMENSION_UNIQUE_NAME").text();
            result.names[dimensionName] = $row.children("DIMENSION_CAPTION").text();
            result.defaultHierarchies[$row.children("DEFAULT_HIERARCHY").text()] = true
        });
        return result
    }

    function parseStringWithUnicodeSymbols(str) {
        str = str.replace(/_x(....)_/g, function(whole, group1) {
            return String.fromCharCode(parseInt(group1, 16))
        });
        var stringArray = str.match(/\[.+?\]/gi);
        if (stringArray && stringArray.length) {
            str = stringArray[stringArray.length - 1]
        }
        return str.replace(/\[/gi, "").replace(/\]/gi, "").replace(/\$/gi, "").replace(/\./gi, " ")
    }

    function parseDrillDownRowSet(xml) {
        var rows = xml.getElementsByTagName("row"),
            result = [],
            columnNames = {};
        for (var i = 0; i < rows.length; i++) {
            var children = rows[i].childNodes,
                item = {};
            for (var j = 0; j < children.length; j++) {
                var tagName = children[j].tagName,
                    name = columnNames[tagName] = columnNames[tagName] || parseStringWithUnicodeSymbols(tagName);
                item[name] = getNodeText(children[j])
            }
            result.push(item)
        }
        return result
    }

    function sendQuery(storeOptions, mdxString) {
        mdxString = $("<div>").text(mdxString).html();
        return execXMLA(storeOptions, stringFormat(execute, mdxString, storeOptions.catalog, getLocaleIdProperty()))
    }
    return {
        ctor: function(options) {
            this._options = options
        },
        getFields: function() {
            var options = this._options,
                catalog = options.catalog,
                cube = options.cube,
                localeIdProperty = getLocaleIdProperty(),
                dimensionsRequest = execXMLA(options, stringFormat(discover, catalog, cube, "MDSCHEMA_DIMENSIONS", localeIdProperty)),
                measuresRequest = execXMLA(options, stringFormat(discover, catalog, cube, "MDSCHEMA_MEASURES", localeIdProperty)),
                hierarchiesRequest = execXMLA(options, stringFormat(discover, catalog, cube, "MDSCHEMA_HIERARCHIES", localeIdProperty)),
                levelsRequest = execXMLA(options, stringFormat(discover, catalog, cube, "MDSCHEMA_LEVELS", localeIdProperty)),
                result = new Deferred;
            when(dimensionsRequest, measuresRequest, hierarchiesRequest, levelsRequest).then(function(dimensionsResponse, measuresResponse, hierarchiesResponse, levelsResponse) {
                execXMLA(options, stringFormat(discover, catalog, cube, "MDSCHEMA_MEASUREGROUPS", localeIdProperty)).done(function(measureGroupsResponse) {
                    var dimensions = parseDimensionsDiscoverRowSet(dimensionsResponse),
                        hierarchies = parseDiscoverRowSet(hierarchiesResponse, "HIERARCHY", dimensions),
                        levels = parseDiscoverRowSet(levelsResponse, "LEVEL", dimensions),
                        measureGroups = parseMeasureGroupDiscoverRowSet(measureGroupsResponse),
                        fields = parseDiscoverRowSet(measuresResponse, "MEASURE", dimensions, measureGroups).concat(hierarchies),
                        levelsByHierarchy = {};
                    each(levels, function(_, level) {
                        levelsByHierarchy[level.hierarchyName] = levelsByHierarchy[level.hierarchyName] || [];
                        levelsByHierarchy[level.hierarchyName].push(level)
                    });
                    each(hierarchies, function(_, hierarchy) {
                        if (levelsByHierarchy[hierarchy.dataField] && levelsByHierarchy[hierarchy.dataField].length > 1) {
                            hierarchy.groupName = hierarchy.hierarchyName = hierarchy.dataField;
                            fields.push.apply(fields, levelsByHierarchy[hierarchy.hierarchyName])
                        }
                    });
                    result.resolve(fields)
                }).fail(result.reject)
            }).fail(result.reject);
            return result
        },
        load: function(options) {
            var result = new Deferred,
                storeOptions = this._options,
                parseOptions = {
                    skipValues: options.skipValues
                },
                mdxString = generateMDX(options, storeOptions.cube, parseOptions);
            if (mdxString) {
                when(sendQuery(storeOptions, mdxString)).done(function(executeXml) {
                    var error = checkError(executeXml);
                    if (!error) {
                        result.resolve(parseResult(executeXml, parseOptions))
                    } else {
                        result.reject(error)
                    }
                }).fail(result.reject)
            } else {
                result.resolve({
                    columns: [],
                    rows: [],
                    values: [],
                    grandTotalColumnIndex: 0,
                    grandTotalRowIndex: 0
                })
            }
            return result
        },
        supportSorting: function() {
            return true
        },
        getDrillDownItems: function(options, params) {
            var result = new Deferred,
                storeOptions = this._options,
                mdxString = generateDrillDownMDX(options, storeOptions.cube, params);
            if (mdxString) {
                when(sendQuery(storeOptions, mdxString)).done(function(executeXml) {
                    var error = checkError(executeXml);
                    if (!error) {
                        result.resolve(parseDrillDownRowSet(executeXml))
                    } else {
                        result.reject(error)
                    }
                }).fail(result.reject)
            } else {
                result.resolve([])
            }
            return result
        },
        key: noop,
        filter: noop
    }
}()).include(pivotGridUtils.storeDrillDownMixin);


/***/ })

}]);
//# sourceMappingURL=default~views-administration-administration-module-ngfactory~views-asset-asset-module-ngfactory~view~c8a531bf.js.map