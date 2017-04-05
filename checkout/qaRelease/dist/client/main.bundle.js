webpackJsonp([6],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClient = (function () {
    function HttpClient(authHttp) {
        this.authHttp = authHttp;
    }
    HttpClient.prototype.get = function (url, options) {
        return this.authHttp.get(url, options);
    };
    HttpClient.prototype.post = function (url, data, options) {
        return this.authHttp.post(url, data, options);
    };
    HttpClient = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object])
    ], HttpClient);
    return HttpClient;
    var _a;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/http.client.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_client__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        //console.log(JSON.stringify({ username: username, password: password }));
        return this.httpClient.post('/api/login', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            //console.log('Token'+token);
            if (token) {
                // set token property
                _this.token = token;
                // localStorage.setItem('id_token', token);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        // clear this token from user machine from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_client__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_client__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/auth.service.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../step-builder/step-builder.module": [
		728,
		0
	],
	"../task-builder/task-builder.module": [
		729,
		2
	],
	"../taskSearch/taskSearch.module": [
		730,
		3
	],
	"./home/home.module": [
		727,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 251;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/auth.guard.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, route, authenticationService) {
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.model = {};
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(424),
            styles: [__webpack_require__(416)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/login.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(409);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppConfig = (function () {
    function AppConfig() {
        this.config = {
            name: 'Compro',
            title: 'SIMS Builder Dashboard',
            version: '3.2.0',
            /**
             * Whether to print and alert some log information
             */
            debug: true,
            /**
             * In-app constants
             */
            settings: {
                colors: {
                    'white': '#fff',
                    'black': '#000',
                    'gray-light': '#999',
                    'gray-lighter': '#eee',
                    'gray': '#666',
                    'gray-dark': '#343434',
                    'gray-darker': '#222',
                    'gray-semi-light': '#777',
                    'gray-semi-lighter': '#ddd',
                    'brand-primary': '#5d8fc2',
                    'brand-success': '#64bd63',
                    'brand-warning': '#f0b518',
                    'brand-danger': '#dd5826',
                    'brand-info': '#5dc4bf'
                },
                screens: {
                    'xs-max': 543,
                    'sm-min': 544,
                    'sm-max': 767,
                    'md-min': 768,
                    'md-max': 991,
                    'lg-min': 992,
                    'lg-max': 1199,
                    'xl-min': 1200
                },
                navCollapseTimeout: 2500
            },
            /**
             * Application state. May be changed when using.
             * Synced to Local Storage
             */
            state: {
                /**
                 * whether navigation is static (prevent automatic collapsing)
                 */
                'nav-static': false
            }
        };
        this._resizeCallbacks = [];
        this._screenSizeCallbacks = {
            xs: { enter: [], exit: [] },
            sm: { enter: [], exit: [] },
            md: { enter: [], exit: [] },
            lg: { enter: [], exit: [] },
            xl: { enter: [], exit: [] }
        };
        this._initResizeEvent();
        this._initOnScreenSizeCallbacks();
    }
    AppConfig.prototype.isScreen = function (size) {
        var screenPx = window.innerWidth;
        return (screenPx >= this.config.settings.screens[size + '-min'] || size === 'xs')
            && (screenPx <= this.config.settings.screens[size + '-max'] || size === 'xl');
    };
    AppConfig.prototype.getScreenSize = function () {
        var screenPx = window.innerWidth;
        if (screenPx <= this.config.settings.screens['xs-max']) {
            return 'xs';
        }
        if ((screenPx >= this.config.settings.screens['sm-min'])
            && (screenPx <= this.config.settings.screens['sm-max'])) {
            return 'sm';
        }
        if ((screenPx >= this.config.settings.screens['md-min'])
            && (screenPx <= this.config.settings.screens['md-max'])) {
            return 'md';
        }
        if ((screenPx >= this.config.settings.screens['lg-min'])
            && (screenPx <= this.config.settings.screens['lg-max'])) {
            return 'lg';
        }
        if (screenPx >= this.config.settings.screens['xl-min']) {
            return 'xl';
        }
    };
    AppConfig.prototype.onScreenSize = function (size, fn, /* Boolean= */ onEnter) {
        onEnter = typeof onEnter !== 'undefined' ? onEnter : true;
        if (typeof size === 'object') {
            for (var i = 0; i < size.length; i++) {
                this._screenSizeCallbacks[size[i]][onEnter ? 'enter' : 'exit'].push(fn);
            }
        }
        else {
            this._screenSizeCallbacks[size][onEnter ? 'enter' : 'exit'].push(fn);
        }
    };
    AppConfig.prototype.changeColor = function (color, ratio, darker) {
        var pad = function (num, totalChars) {
            var padVal = '0';
            num = num + '';
            while (num.length < totalChars) {
                num = padVal + num;
            }
            return num;
        };
        // Trim trailing/leading whitespace
        color = color.replace(/^\s*|\s*$/, '');
        // Expand three-digit hex
        color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3');
        // Calculate ratio
        var difference = Math.round(ratio * 256) * (darker ? -1 : 1), 
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$', 'i')), alpha = !!rgb && rgb[4] !== null ? rgb[4] : null, 
        // Convert hex to decimal
        decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
            return parseInt(arguments[1], 16) + ',' +
                parseInt(arguments[2], 16) + ',' +
                parseInt(arguments[3], 16);
        }).split(/,/);
        // Return RGB(A)
        return !!rgb ?
            'rgb' + (alpha !== null ? 'a' : '') + '(' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) +
                (alpha !== null ? ', ' + alpha : '') +
                ')' :
            // Return hex
            [
                '#',
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)
            ].join('');
    };
    AppConfig.prototype.lightenColor = function (color, ratio) {
        return this.changeColor(color, ratio, false);
    };
    AppConfig.prototype.darkenColor = function (color, ratio) {
        return this.changeColor(color, ratio, true);
    };
    AppConfig.prototype.max = function (array) {
        return Math.max.apply(null, array);
    };
    AppConfig.prototype.min = function (array) {
        return Math.min.apply(null, array);
    };
    AppConfig.prototype._initResizeEvent = function () {
        var resizeTimeout;
        jQuery(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                jQuery(window).trigger('sn:resize');
            }, 100);
        });
    };
    AppConfig.prototype._initOnScreenSizeCallbacks = function () {
        var _this = this;
        var resizeTimeout, prevSize = this.getScreenSize();
        jQuery(window).resize(function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                var size = _this.getScreenSize();
                if (size !== prevSize) {
                    // run exit callbacks first
                    _this._screenSizeCallbacks[prevSize].exit.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    // run enter callbacks then
                    _this._screenSizeCallbacks[size].enter.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    console.log('screen changed. new: ' + size + ', old: ' + prevSize);
                }
                prevSize = size;
            }, 100);
        });
    };
    AppConfig.prototype.getConfig = function () {
        return this.config;
    };
    AppConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppConfig);
    return AppConfig;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/app.config.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(166)))

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_client__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewService = (function () {
    function PreviewService(http) {
        this.http = http;
    }
    PreviewService.prototype.launchStepPreviewWindow = function (taskId, stepId, templateId) {
        var _this = this;
        var previewparams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        previewparams.set('taskId', taskId);
        previewparams.set('stepNo', stepId);
        this.http.get("/api/skill/xmlgeneration/" + templateId + "/" + taskId + "/" + stepId)
            .subscribe(function (res) {
            _this.res = res["_body"];
            if (_this.res == "success") {
                _this.http.get("/api/taskPreview", { search: previewparams })
                    .subscribe(function (res) {
                    _this.data = res.json();
                    if (_this.data["Url"]) {
                        _this.previewWindow = window.open(_this.data["Url"], '_blank', 'location=yes,scrollbars=yes,status=yes');
                        return true;
                    }
                    else {
                        return _this.data["Error"];
                    }
                });
            }
        });
    };
    PreviewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_client__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_client__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], PreviewService);
    return PreviewService;
    var _a;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/preview.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskDataService = (function () {
    function TaskDataService(http) {
        this.http = http;
        this.data = undefined;
        this.taskId = undefined;
    }
    TaskDataService.prototype.getTaskData = function (taskId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('TaskId', taskId);
        if (this.data && this.taskId == taskId) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get("/api/fetchTaskData", { search: params })
                .map(this.extractData.bind(this))
                .catch(this.handleError);
        }
    };
    TaskDataService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.Error) {
            return body.Error;
        }
        else {
            // body = this.mapTaskData(body);
            this.data = body;
            this.taskId = body.id;
            return body || {};
        }
    };
    TaskDataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    TaskDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_client__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_client__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], TaskDataService);
    return TaskDataService;
    var _a;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/taskData.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__(252);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/app-routing.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(423),
            styles: [__webpack_require__(415)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/app.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_preview_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_client__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_taskData_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_module__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_15__auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_http_client__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_12__services_taskData_service__["a" /* TaskDataService */], __WEBPACK_IMPORTED_MODULE_10__services_preview_service__["a" /* PreviewService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        noTokenScheme: true,
        noJwtError: true,
        tokenGetter: (function () { return JSON.parse(localStorage.getItem('currentUser')) && JSON.parse(localStorage.getItem('currentUser')).token; })
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/auth.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Sim_Builder_Pack_Deploy/checkout/develop/client/environment.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, ".login-page {\n  background-color: lightgray; }\n\n.page-footer {\n  margin-bottom: 25px;\n  font-size: 10px;\n  color: lightgray;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.widget-login-container {\n  padding-top: 10%;\n  padding-bottom: 20px;\n  min-height: 700px; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: normal; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: normal;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 10px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 10px;\n  border: none;\n  background-color: lightgrey; }\n  .login-form .form-control:focus {\n    background-color: lightgray; }\n\n.lab {\n  text-align: right;\n  padding-right: 30px;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  color: black; }\n\n.form-group .inp {\n  padding: 2px;\n  background-color: white; }\n\n.form-group .inp:focus {\n  background-color: white; }\n\n.loginText {\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px; }\n\n.sectionlogin {\n  border-bottom-right-radius: 4%;\n  border-top-right-radius: 4%;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  background: #ffffff;\n  border-color: #cccccc;\n  color: black; }\n\n.forgetPassRow {\n  padding-top: 15px; }\n\n.loginBackground {\n  background: -webkit-radial-gradient(center ellipse, rgba(4, 13, 17, 0.8) 0%, rgba(4, 13, 17, 0.88) 44%, rgba(4, 13, 17, 0.97) 100%);\n  background: radial-gradient(ellipse at center, rgba(4, 13, 17, 0.8) 0%, rgba(4, 13, 17, 0.88) 44%, rgba(4, 13, 17, 0.97) 100%);\n  width: 100%;\n  height: 100%; }\n\n.lineSep {\n  color: black;\n  background-color: black;\n  height: 1px; }\n\n.fgtPass {\n  color: #1d3167;\n  font-weight: 400; }\n\n.infoSection {\n  border-bottom-left-radius: 4%;\n  border-top-left-radius: 4%;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  background: #dddddd;\n  border-color: #cccccc; }\n\n.Section {\n  padding: 0; }\n\n.InfoHead {\n  color: #008b7f;\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px; }\n\n.InfoBody {\n  text-align: center;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<div class=\"container loginBackground\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-6 col-md-6 col-xs-10 offset-xl-3 offset-md-3 offset-xs-1\">\r\n        <div class=\"row\">\r\n        <div class=\"col-xl-6 Section widget-login  infoSection\">\r\n            <section class=\"widget-login  infoSection\">\r\n              <header>\r\n                <p class=\"InfoHead\">SIMS Builder</p>\r\n              </header>\r\n              <div class=\"widget-body\">\r\n                <p class=\"InfoBody\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                  et dolore magna aliqua.\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \r\n                \r\n                </p>                    \r\n              </div>\r\n          </section>\r\n        </div>\r\n        <div class=\"col-xl-6 Section\">\r\n          <section class=\" widget-login sectionlogin\">\r\n            <header>\r\n              <p class=\"loginText\">Login</p>\r\n              <hr class=\"lineSep\">\r\n            </header>\r\n            <div class=\"widget-body\">\r\n              <form class=\"login-form mt-lg\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\"  enctype=\"application/x-www-form-urlencoded\">\r\n                <div class=\"form-group row m-t-1\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <label class=\"col-md-5 lab\" for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control col-md-6\" id=\"pswd\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                </div>\r\n                <div class=\"form-group row m-t-1\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label class=\"col-md-5 lab\" for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control col-md-6\" id=\"pswd\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n                <div class=\"row m-t-1 forgetPassRow\">\r\n                    <div class=\"col-md-12\">\r\n                        <a class=\"mr-n-lg float-xs-left fgtPass\" href=\"#\">Forgot Password?</a>\r\n                      <div class=\"abc-checkbox widget-login-info float-xs-right\">\r\n                        <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                        <label for=\"checkbox1\">Stay Sign In </label>\r\n                      </div>\r\n                  </div>\r\n                </div>  \r\n                <div class=\"clearfix\">\r\n                  <div class=\"btn-toolbar float-xs-right m-t-1\">\r\n                    <button class=\"btn btn-primary btn-sm\">Login Now!</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-1\">\r\n                  <div class=\"col-md-6 push-md-6\">\r\n                    <div class=\"clearfix\">\r\n                      \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </section>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class=\"page-footer\">\r\n    <div class=\"site-info\">\r\n      Copyright © 2016 comprotechnologies.com. <a href=\"http://www.comprotechnologies.com\" title=\"Terms of Use\">Terms of Use</a> and <a href=\"http://www.comprotechnologies.com\" title=\"Terms of Use\">Privacy Policy</a>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ })

},[724]);
//# sourceMappingURL=main.bundle.js.map