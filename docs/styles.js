(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --primary: #71638f;\n  --info: #0b090e;\n  --success: #579863;\n  --warning: #d4882b;\n  --danger: #f44336;\n  --background: #241b2f;\n  --foreground: #D3D2E0;\n  --light_accent: #82A8A8;\n  --dark_accent: #6170B6;\n  --default: #999999;\n}\n.ui-card {\n  background: var(--foreground);\n  border-radius: 1rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: var(--info);\n}\n.ui-card .title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ui-card .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ui-button.light_accent, .ui-button.dark_accent, .ui-button.danger, .ui-button.warning, .ui-button.success, .ui-button {\n  background: var(--default);\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--fore-color);\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.ui-button.light_accent::before, .ui-button.dark_accent::before, .ui-button.danger::before, .ui-button.warning::before, .ui-button.success::before, .ui-button::before {\n  content: \"\";\n  left: 0;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  transition: all var(--transition);\n  width: 100%;\n}\n.ui-button:hover::before {\n  background: rgba(0, 0, 0, 0.05);\n}\n.ui-button:active:before {\n  background: rgba(0, 0, 0, 0.1);\n}\n.ui-button:disabled {\n  background: var(--default) !important;\n  cursor: not-allowed;\n}\n.ui-button.success {\n  background: var(--success);\n}\n.ui-button.warning {\n  background: var(--warning);\n}\n.ui-button.danger {\n  background: var(--danger);\n}\n.ui-button.dark_accent {\n  background: var(--dark_accent);\n  color: #FFF;\n}\n.ui-button.light_accent {\n  background: var(--light_accent);\n  color: #FFF;\n}\n.ui-input {\n  background: transparent;\n  border-radius: 0.25rem;\n  border: solid 1px var(--primary);\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n  text-decoration: none;\n}\nbody, html {\n  height: 100vh;\n  width: 100vw;\n  padding: 0;\n  margin: 0;\n  background: var(--background);\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/theme/_variables.scss","webpack://src/theme/card.scss","webpack://src/theme/button.scss","webpack://src/theme/input.scss"],"names":[],"mappings":"AAAA,8EAAA;ACWA;EACI,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EACA,qBAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;ADTJ;AEZA;EACI,6BAAA;EACA,mBAAA;EACA,+GAAA;EACA,kBAAA;AFeJ;AEbI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AFeR;AEZI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AFcR;AG9BA;EACI,0BAAA;EACA,YAAA;EACA,qBAAA;EACA,wBAAA;EACA,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;UAAA,iBAAA;AHiCJ;AG/BI;EACI,WAAA;EACA,OAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,iCAAA;EACA,WAAA;AHiCR;AG9BI;EACI,+BAAA;AHgCR;AG7BI;EACI,8BAAA;AH+BR;AG5BI;EACI,qCAAA;EACA,mBAAA;AH8BR;AGtBA;EAEI,0BAAA;AHwBJ;AGrBA;EAEI,0BAAA;AHuBJ;AGpBA;EAEI,yBAAA;AHsBJ;AGnBA;EAEI,8BAAA;EACA,WAAA;AHqBJ;AGlBA;EAEI,+BAAA;EACA,WAAA;AHoBJ;AInFA;EACI,uBAAA;EACA,sBAAA;EACA,gCAAA;AJsFJ;AArFA;EACI,sBAAA;EACA,kCAAA;EACA,qBAAA;AAwFJ;AArFA;EACI,aAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,6BAAA;AAwFJ","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import './theme/variables';\n@import './theme/index';\n\n* {\n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n    text-decoration: none;\n}\n\nbody, html {\n    height: 100vh;\n    width: 100vw;\n    padding: 0;\n    margin: 0;\n    background: var(--background);\n}","$primary: #71638f;\r\n$info: #0b090e;\r\n$success: #579863;\r\n$warning: #d4882b;\r\n$danger: #f44336;\r\n$background: #241b2f;\r\n$foreground: #D3D2E0;\r\n$light_accent: #82A8A8;\r\n$dark_accent: #6170B6;\r\n$default: #999999;\r\n\r\n:root{\r\n    --primary: #{$primary};\r\n    --info: #{$info};\r\n    --success: #{$success};\r\n    --warning: #{$warning};\r\n    --danger: #{$danger};\r\n    --background: #{$background};\r\n    --foreground: #{$foreground};\r\n    --light_accent: #{$light_accent};\r\n    --dark_accent: #{$dark_accent};\r\n    --default: #{$default};\r\n}","%card {\r\n    background: var(--foreground);\r\n    border-radius: 1rem;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n    color: var(--info);\r\n\r\n    .title {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n}\r\n\r\n.ui-card {\r\n    @extend %card;\r\n}","%button {\r\n    background: var(--default);\r\n    border: none;\r\n    border-radius: .5rem;\r\n    color: var(--fore-color);\r\n    display: inline-block;\r\n    padding: 0.5rem 1rem;\r\n    position: relative;\r\n    overflow: hidden;\r\n    user-select: none;\r\n\r\n    &::before {\r\n        content: \"\";\r\n        left: 0;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        transition: all var(--transition);\r\n        width: 100%;\r\n    }\r\n\r\n    &:hover::before {\r\n        background: rgba(0,0,0, 0.05);\r\n    }\r\n\r\n    &:active:before {\r\n        background: rgba(0,0,0, 0.1);\r\n    }\r\n    \r\n    &:disabled {\r\n        background: var(--default) !important;\r\n        cursor: not-allowed;\r\n    }\r\n}\r\n\r\n.ui-button {\r\n    @extend %button;\r\n}\r\n\r\n.ui-button.success {\r\n    @extend %button;\r\n    background: var(--success);\r\n}\r\n\r\n.ui-button.warning {\r\n    @extend %button;\r\n    background: var(--warning);\r\n}\r\n\r\n.ui-button.danger {\r\n    @extend %button;\r\n    background: var(--danger);\r\n}\r\n\r\n.ui-button.dark_accent {\r\n    @extend %button;\r\n    background: var(--dark_accent);\r\n    color: #FFF;\r\n}\r\n\r\n.ui-button.light_accent {\r\n    @extend %button;\r\n    background: var(--light_accent);\r\n    color: #FFF;\r\n}\r\n\r\n\r\n\r\n","%input {\r\n    background: transparent;\r\n    border-radius: .25rem;\r\n    border: solid 1px var(--primary);\r\n}\r\n\r\n.ui-input {\r\n    @extend %input\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Projects\Angular\santex-minesweeper\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map