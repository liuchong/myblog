webpackJsonp([221374088121123],{

/***/ 86:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(1);
	const gatsby_link_1 = __webpack_require__(46);
	function index({ data }) {
	    return React.createElement("div", null, React.createElement("div", null, React.createElement("h1", null, "Welcome to ", data.site.siteMetadata.siteName, " !"), React.createElement("div", null, React.createElement("p", null, "This is a gatsby starter, hosted on github:", ' ', React.createElement("a", { href: "https://github.com/liuchong/gatsby-starter-blog-typescript/" }, "liuchong/gatsby-starter-blog-typescript"), "."), React.createElement("blockquote", null, React.createElement("p", null, "Gatsby is a blazing-fast static site generator for React.")))), React.createElement("div", null, React.createElement(gatsby_link_1.default, { to: "/posts/" }, "Read")));
	}
	exports.default = index;
	exports.query = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-70f258402afff899b05b.js.map