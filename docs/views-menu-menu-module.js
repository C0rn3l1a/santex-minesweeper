(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-menu-menu-module"],{

/***/ "/of2":
/*!***************************************************!*\
  !*** ./src/app/views/menu/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_kit_directives_card_card_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui-kit/directives/card/card.directive */ "6psq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["menu-main"]], decls: 10, vars: 0, consts: [["ui-card", "", 1, "menu-card"], [1, "title"], [1, "content"], ["routerLink", "/game", 1, "option"], ["routerLink", "/load", 1, "option"], ["routerLink", "/history", 1, "option"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Minesweeper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Load Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_kit_directives_card_card_directive__WEBPACK_IMPORTED_MODULE_1__["CardDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #71638f;\n  --info: #0b090e;\n  --success: #579863;\n  --warning: #d4882b;\n  --danger: #f44336;\n  --background: #241b2f;\n  --foreground: #D3D2E0;\n  --light_accent: #82A8A8;\n  --dark_accent: #6170B6;\n  --default: #999999;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 32rem;\n  max-height: 15rem;\n  height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2rem;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.option[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--primary);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  min-width: 7rem;\n  transition: all 200ms ease-in-out;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background: rgba(113, 99, 143, 0.1);\n}\n\n.option[_ngcontent-%COMP%]:active {\n  background: var(--primary);\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL21lbnUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFZSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWUo7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQVFBLGlDQUFBO0FBS0o7O0FBWkk7RUFDSSxtQ0FBQTtBQWNSOztBQVpJO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FBY1IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tZW51L21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjNzE2MzhmO1xyXG4kaW5mbzogIzBiMDkwZTtcclxuJHN1Y2Nlc3M6ICM1Nzk4NjM7XHJcbiR3YXJuaW5nOiAjZDQ4ODJiO1xyXG4kZGFuZ2VyOiAjZjQ0MzM2O1xyXG4kYmFja2dyb3VuZDogIzI0MWIyZjtcclxuJGZvcmVncm91bmQ6ICNEM0QyRTA7XHJcbiRsaWdodF9hY2NlbnQ6ICM4MkE4QTg7XHJcbiRkYXJrX2FjY2VudDogIzYxNzBCNjtcclxuJGRlZmF1bHQ6ICM5OTk5OTk7XHJcblxyXG46cm9vdHtcclxuICAgIC0tcHJpbWFyeTogI3skcHJpbWFyeX07XHJcbiAgICAtLWluZm86ICN7JGluZm99O1xyXG4gICAgLS1zdWNjZXNzOiAjeyRzdWNjZXNzfTtcclxuICAgIC0td2FybmluZzogI3skd2FybmluZ307XHJcbiAgICAtLWRhbmdlcjogI3skZGFuZ2VyfTtcclxuICAgIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XHJcbiAgICAtLWZvcmVncm91bmQ6ICN7JGZvcmVncm91bmR9O1xyXG4gICAgLS1saWdodF9hY2NlbnQ6ICN7JGxpZ2h0X2FjY2VudH07XHJcbiAgICAtLWRhcmtfYWNjZW50OiAjeyRkYXJrX2FjY2VudH07XHJcbiAgICAtLWRlZmF1bHQ6ICN7JGRlZmF1bHR9O1xyXG59IiwiOnJvb3Qge1xuICAtLXByaW1hcnk6ICM3MTYzOGY7XG4gIC0taW5mbzogIzBiMDkwZTtcbiAgLS1zdWNjZXNzOiAjNTc5ODYzO1xuICAtLXdhcm5pbmc6ICNkNDg4MmI7XG4gIC0tZGFuZ2VyOiAjZjQ0MzM2O1xuICAtLWJhY2tncm91bmQ6ICMyNDFiMmY7XG4gIC0tZm9yZWdyb3VuZDogI0QzRDJFMDtcbiAgLS1saWdodF9hY2NlbnQ6ICM4MkE4QTg7XG4gIC0tZGFya19hY2NlbnQ6ICM2MTcwQjY7XG4gIC0tZGVmYXVsdDogIzk5OTk5OTtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1lbnUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMycmVtO1xuICBtYXgtaGVpZ2h0OiAxNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTEzLCA5OSwgMTQzLCAwLjEpO1xufVxuLm9wdGlvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNGRkY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "S9Sp":
/*!***************************************************!*\
  !*** ./src/app/views/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "/of2");





const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] }
];
class MenuRoutingModule {
}
MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UI0D":
/*!*******************************************!*\
  !*** ./src/app/views/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "/of2");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-routing.module */ "S9Sp");
/* harmony import */ var src_app_ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui-kit/ui-kit.module */ "MH+I");






class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuRoutingModule"],
            src_app_ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__["UiKitModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuRoutingModule"],
        src_app_ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__["UiKitModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuRoutingModule"],
                    src_app_ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__["UiKitModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-menu-menu-module.js.map