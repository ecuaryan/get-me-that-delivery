webpackJsonp([0],{

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/become-runner/become-runner.module": [
		242
	],
	"../pages/contact-us/contact-us.module": [
		246
	],
	"../pages/frequently-asked-questions/frequently-asked-questions.module": [
		249
	],
	"../pages/how-it-works/how-it-works.module": [
		251
	],
	"../pages/order/order.module": [
		253
	],
	"../pages/pricing/pricing.module": [
		264
	],
	"../pages/runner-info/runner-info.module": [
		262
	],
	"../pages/terms-of-service/terms-of-service.module": [
		266
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecomeRunnerModule", function() { return BecomeRunnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__become_runner__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BecomeRunnerModule = /** @class */ (function () {
    function BecomeRunnerModule() {
    }
    BecomeRunnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__become_runner__["a" /* BecomeRunnerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__become_runner__["a" /* BecomeRunnerPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__become_runner__["a" /* BecomeRunnerPage */]
            ]
        })
    ], BecomeRunnerModule);
    return BecomeRunnerModule;
}());

//# sourceMappingURL=become-runner.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BecomeRunnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_runner_application__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_become_runner_become_runner__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BecomeRunnerPage = /** @class */ (function () {
    function BecomeRunnerPage(navCtrl, navParams, becomeRunnerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.becomeRunnerProvider = becomeRunnerProvider;
        this.runnerApplication = new __WEBPACK_IMPORTED_MODULE_2__models_runner_application__["a" /* RunnerApplication */]();
    }
    BecomeRunnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-become-runner',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/become-runner/become-runner.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Become A Runner</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="form-container">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-lg-6 col-12>\n          <h2>What\'s awesome about being a runner?</h2>\n          <p>You can have the flexibility of setting your own schedule and still do whatever you want (homework, hang with friends, study, etc.) while waiting for delivery requests.</p>\n          <h2>About You:</h2>\n          <p>We’re looking for people who have great customer service skills, an awesome attitude, and the ability to work independently. You should be a strong communicator, understand how to multi-task and work well under pressure. Must have a Smart Phone and your own car.</p>\n          <h2>How does it work?</h2>\n          <p>You set your own schedule and we give you hours based on your availability. You will receive requests to run deliveries (grocery, food, etc. from local stores and restaurants).</p>\n          <h2>Compensation:</h2>\n          <p>\n            <span>You keep all of your tips. You will make a minimum of $8.00/hour*. The average runner makes between $8.00 to $15.00 an hour.</span>\n            <small>*calculated on a 35 min. average delivery time, not for the time that you\'re waiting for orders; this rate does include your tips</small>\n          </p>\n          <h2>Have what it takes?</h2>\n          <p>Please submit an application. We will be reviewing applicants and are excited to add more great people to our team!</p>\n          <h2>What we expect:</h2>\n          <p>During your specified availbility times we expect you to be very responsive to new delivery requests.  We also expect you to own your own mistakes and we\'ll be as supportive as possible.</p>\n          <h2>Questions?</h2>\n          <p>Send us any questions you may have through our <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span> page.</p>\n        </ion-col>\n        <ion-col col-lg-6 col-12>\n          <ion-item text-wrap>\n            <ion-label floating>Full Name</ion-label>\n            <ion-input [(ngModel)]=\'runnerApplication.name\'></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="runnerApplication.email"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phone" [(ngModel)]="runnerApplication.phone"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>What is your availability? How many hours a week would you like to work?</ion-label>\n            <ion-input [(ngModel)]="runnerApplication.availability"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>How long do you plan to be in the Rexburg area?</ion-label>\n            <ion-input [(ngModel)]="runnerApplication.duration"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>Why are you interested in becoming a runner?</ion-label>\n            <ion-textarea [(ngModel)]="runnerApplication.reason"></ion-textarea>\n          </ion-item>\n          <br>\n          <button ion-button full (click)="becomeRunnerProvider.post(this.runnerApplication)">SUBMIT APPLICATION</button>\n          <div class="form-overlay form-busy" [ngClass]="{\'form-busy\': (becomeRunnerProvider.isSubmitting() | async) }">\n            <div class="message-container" *ngIf="(becomeRunnerProvider.isSubmitting() | async)">Submitting Application...</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/become-runner/become-runner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_become_runner_become_runner__["a" /* BecomeRunnerProvider */]])
    ], BecomeRunnerPage);
    return BecomeRunnerPage;
}());

//# sourceMappingURL=become-runner.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BecomeRunnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BecomeRunnerProvider = /** @class */ (function () {
    function BecomeRunnerProvider(http, toastController, config) {
        this.http = http;
        this.toastController = toastController;
        this.config = config;
        this.runnerApplicationState = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]({
            isSubmitting: false
        });
    }
    BecomeRunnerProvider.prototype.post = function (runnerApplication) {
        var _this = this;
        this.runnerApplicationState.next({
            isSubmitting: true
        });
        this.http.post(this.config.baseApiOrderUrl + this.config.stage + this.config.becomeRunnerEndpoint, runnerApplication, {})
            .toPromise().then(function (result) {
            _this.runnerApplicationState.next({
                isSubmitting: false
            });
            runnerApplication.clear();
            _this.toastController.create({
                message: _this.config.becomeRunnerSuccessMessage,
                duration: _this.config.becomeRunnerSuccessMessageDuration
            }).present();
        }).catch(function (error) {
            console.error(error);
            _this.runnerApplicationState.next({
                isSubmitting: false
            });
            _this.toastController.create({
                message: 'An error occurred. Please try again.',
                duration: 5000
            }).present();
        });
    };
    BecomeRunnerProvider.prototype.isSubmitting = function () {
        return this.runnerApplicationState.map(function (messageState) { return messageState.isSubmitting; });
    };
    BecomeRunnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
    ], BecomeRunnerProvider);
    return BecomeRunnerProvider;
}());

//# sourceMappingURL=become-runner.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]
            ]
        })
    ], ContactUsModule);
    return ContactUsModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams, contactProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.message = new __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */]();
    }
    ContactUsPage.prototype.sendMessage = function () {
        this.contactProvider.post(this.message);
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/contact-us/contact-us.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="text-center">Send us a message and we\'ll get back to you as soon as possible.</div>\n  <div class="form-container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item text-wrap>\n            <ion-label floating>Name</ion-label>\n            <ion-input [(ngModel)]=\'message.name\'></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="message.email"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phone" [(ngModel)]="message.phone"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>How can we help?</ion-label>\n            <ion-textarea [(ngModel)]="message.body"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full (click)="sendMessage()">SEND MESSAGE</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="form-overlay form-busy" [ngClass]="{\'form-busy\': (contactProvider.isSubmitting() | async) }">\n      <div class="message-container" *ngIf="(contactProvider.isSubmitting() | async)">Sending Message...</div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/contact-us/contact-us.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactProvider = /** @class */ (function () {
    function ContactProvider(http, toastController, config) {
        this.http = http;
        this.toastController = toastController;
        this.config = config;
        this.messageState = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]({
            isSubmitting: false
        });
    }
    ContactProvider.prototype.post = function (message) {
        var _this = this;
        this.messageState.next({
            isSubmitting: true
        });
        this.http.post(this.config.baseApiOrderUrl + this.config.stage + this.config.contactUsEndpoint, message, {})
            .toPromise().then(function (result) {
            _this.messageState.next({
                isSubmitting: false
            });
            message.clear();
            _this.toastController.create({
                message: _this.config.contactUsSuccessMessage,
                duration: _this.config.contactUsSuccessMessageDuration
            }).present();
        }).catch(function (error) {
            console.error(error);
            _this.messageState.next({
                isSubmitting: false
            });
            _this.toastController.create({
                message: 'An error occurred. Please try again.',
                duration: 5000
            }).present();
        });
    };
    ContactProvider.prototype.isSubmitting = function () {
        return this.messageState.map(function (messageState) { return messageState.isSubmitting; });
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentlyAskedQuestionsModule", function() { return FrequentlyAskedQuestionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FrequentlyAskedQuestionsModule = /** @class */ (function () {
    function FrequentlyAskedQuestionsModule() {
    }
    FrequentlyAskedQuestionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */]
            ]
        })
    ], FrequentlyAskedQuestionsModule);
    return FrequentlyAskedQuestionsModule;
}());

//# sourceMappingURL=frequently-asked-questions.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentlyAskedQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrequentlyAskedQuestionsPage = /** @class */ (function () {
    function FrequentlyAskedQuestionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FrequentlyAskedQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frequently-asked-questions',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/frequently-asked-questions/frequently-asked-questions.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Frequently Asked Questions</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>If these frequently asked questions don\'t answer your questions you can always <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span>.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Delivery</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Where do you deliver?\n          </ion-card-header>\n          <ion-card-content>\n            <p>We currently deliver to all Rexburg, Idaho addresses.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How much is the delivery fee for orders?\n          </ion-card-header>\n          <ion-card-content>\n            <p>All orders will have a flat rate fee of $7. Tipping the runner is greatly appreciated, but not required.</p>\n            <p>For example, if the cost of your items is $20, your total would be $27 plus any tip amount. It\'s that simple.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What are your delivery hours?\n          </ion-card-header>\n          <ion-card-content>\n            <p>We deliver whenever runners are available.  The order page will let you know if we are open for on demand deliveries or not. If you would like to schedule a delivery, please use our <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span> form. We are closed on Sunday.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How quickly do you deliver?\n          </ion-card-header>\n          <ion-card-content>\n            <p>The average delivery time is 35 minutes, but times can vary depending on demand, traffic and restaurant wait times. We always keep you posted on the status of your order, texts from your runner.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I order in advance?\n          </ion-card-header>\n          <ion-card-content>\n            <p>YES! Please use our <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span> page if you would like to order something in advance.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I pay?\n          </ion-card-header>\n          <ion-card-content>\n            <p>All payments are made through Square, a secure 3rd party, and we accept all major credit and debit cards. When your order is delivered, you’ll give the runner a credit or debit card which they will swipe securely via the Square app. Also, upon request, we can email you a link so you can make a payment online.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>General</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What is Get Me That Delivery?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Get Me That Delivery is your on demand, personalized delivery assistant. You order, we deliver.. it’s that simple! We can also accpet orders in advance, just use our <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span> form!</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How does it work?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Enter the item(s) you would like from any restaurant or store in Rexburg Idaho. Editing the details of your order is simple and placing your order only takes three taps on your phone, ipad, or computer.</p>\n            <p>After you order, it is assigned to one of our runners, who will deliver your item(s).</p>\n            <p>Payment is secured upon delivery. Once your item(s) are delivered by the runner, you pay for them right though the Square app via credit or debit card. All payment information is secured through Square.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What can I have delivered?\n          </ion-card-header>\n          <ion-card-content>\n            <p>We deliver food from your favorite restaurants, dry cleaning, clothing, groceries, and more!  If you are wondering if we will deliver something go ahead and ask.  We do not deliver controlled substances such as prescriptions, cigarettes, or alcohol. We reserve the right to refuse or decline a delivery. Items must be able to fit in the runner\'s vehicle.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I have controlled substances delivered such as alcohol or tabacco delivered?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Unfortunately we do not deliver these substances.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>My Order</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What is your return policy?\n          </ion-card-header>\n          <ion-card-content>\n            <p>If you have an issue with your order, contact your runner and we will fix the situation ASAP.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I report a problem with my order?\n          </ion-card-header>\n          <ion-card-content>\n            <p>You can contact your runner or you can reach us on our <span class="link" (click)="navCtrl.push(\'ContactUsPage\')">contact us</span> form.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Payment</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I pay for an order?\n          </ion-card-header>\n          <ion-card-content>\n            <p>You will be prompted to pay at time of delivery.  We accept all major credit and debit cards. Your form of payment will be secured through Square. Also, upon request, we can email you a link so you can make a payment online.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Runners</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Who makes the deliveries?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Our trusted runners deliver all orders. All runners are screened and go through a training program before they begin to deliver your orders.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What do I do if I need to contact my runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Your runner is just a text away! Once your order is received your runner will contact you via text message to verify your order.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Should I tip my runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>At time of payment you will be given a suggested tip based off of distanced traveled and cost of items purchased. You can adjust it to be whatever you want.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I become a runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Absolutely! We’re always looking for outgoing and friendly people to join our quickly growing delivery team. We work around your schedule. Runners make an average of $8 to $15 an hour. All tips are yours to keep.</p>\n            <p>To be a runner, you must be 18 years or older, have a compatible smart phone with data, own a reliable means of transportation (car \'recommended\', bike, scooter, or motorcycle), and have a clean record.</p>\n            <p>To apply, shoot us a message using our <span class="link" (click)="navCtrl.push(\'BecomeRunnerPage\')">Become a Runner</span> form.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/frequently-asked-questions/frequently-asked-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FrequentlyAskedQuestionsPage);
    return FrequentlyAskedQuestionsPage;
}());

//# sourceMappingURL=frequently-asked-questions.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksModule", function() { return HowItWorksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_it_works__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowItWorksModule = /** @class */ (function () {
    function HowItWorksModule() {
    }
    HowItWorksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */]
            ]
        })
    ], HowItWorksModule);
    return HowItWorksModule;
}());

//# sourceMappingURL=how-it-works.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowItWorksPage = /** @class */ (function () {
    function HowItWorksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HowItWorksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-how-it-works',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/how-it-works/how-it-works.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>How It Works</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>Imagine getting whatever you want delivered.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Fill out the order form and a friendly runner is at your door with delicious food or anything else you want.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Magic? You bet.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            FROM ANYWHERE\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">Grocery Store, Fast Food, Office supplies, you name it.</p>\n            <p>Decide what you want. Ask for anything from any store or restaurant in Rexburg. Customize your order. (Ordering is easy as texting a friend, just type what you want.)</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            FAST DELIVERY\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">Delivered to you in under an hour.</p>\n            <p>Delivered to you in under an hour. Your Order is on the way. You can text your runner with questions or changes you may have.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            EASY PAYMENT\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">We accept all major credit cards.</p>\n            <p>It\'s easy and affordable. Review your receipt at time of delivery, select your tip and confirm. Payment is made cashless for convienence, and done in the Square app via credit or debit card. Also, upon request, we can email you a link so you can make a payment online.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/how-it-works/how-it-works.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HowItWorksPage);
    return HowItWorksPage;
}());

//# sourceMappingURL=how-it-works.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_keep_html_pipe__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
            ]
        })
    ], OrderModule);
    return OrderModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, orderProvider, stateProvider, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.stateProvider = stateProvider;
        this.auth = auth;
        this.order = new __WEBPACK_IMPORTED_MODULE_4__models_order__["a" /* Order */]();
        this.auth.user.subscribe(function (user) { return _this.user = user; });
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        this.stateProvider.get();
    };
    OrderPage.prototype.submitOrder = function () {
        this.orderProvider.post(this.order);
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/order/order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Place An Order\n      <span *ngIf="auth.canViewCheckinButton(user)">\n        <i *ngIf="!user.availableToRun" class="float-right fa fa-ban"></i>\n        <i *ngIf="user.availableToRun" class="float-right fa fa-truck"></i>\n      </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="text-align-center">\n        <div>\n          <span>We make</span>\n          <span class="highlighted">on demand</span>\n          <span>and</span>\n          <span class="highlighted">scheduled</span>\n          <span>deliveries in the Rexburg, Idaho area</span>\n        </div>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="form-top-callout">\n        <div class="main">\n          <span class="delivery-fee">$7</span>\n          <span>FLAT RATE FEE</span>\n        </div>\n        <div class="disclaimer">single location, within city limits, ordered items total under $25</div>\n        <div class="pseudo-link-container">\n          <span class="pseudo-link" (click)="navCtrl.push(\'PricingPage\')">Learn More</span>\n          <span>about our Pricing</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="form-bottom-callout">[ANYTHING DELIVERED]</div>\n        <div class="pseudo-link-container">\n          <span class="disclaimer pseudo-link" (click)="navCtrl.push(\'FrequentlyAskedQuestionsPage\')">some exclusions apply</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="avg-wait-time-under">Average delivery: 35 minutes</div>\n        <div class="avg-wait-time-under"></div>\n        <div class="disclaimer">for small orders, larger orders can take slightly longer</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n        <div class="one-two-three-container">\n          <div>\n            <span class="highlighted">1</span> Fill out the form\n          </div>\n          <div>\n            <span class="highlighted">2</span> Wait for confirmation text\n          </div>\n          <div>\n            <span class="highlighted">3</span> Accept delivery and enjoy\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="form-container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item text-wrap>\n            <ion-label floating>Name</ion-label>\n            <ion-input [(ngModel)]=\'order.recipientName\'></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item text-wrap>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="order.recipientEmail"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item text-wrap>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phone" [(ngModel)]="order.recipientPhone"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-item text-wrap>\n            <ion-label floating>Street Address & Apt. #</ion-label>\n            <ion-input [(ngModel)]="order.recipientAddress"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item text-wrap>\n            <ion-label floating>City, State Zip</ion-label>\n            <ion-input value="Rexburg, ID 83440" disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item text-wrap>\n            <ion-label floating>Apartment Complex Name</ion-label>\n            <ion-input [(ngModel)]="order.recipientAddressExtra"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>From where?</ion-label>\n            <ion-input [(ngModel)]="order.sourceName"></ion-input>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-label floating>What would you like? (please be very specific and detailed)</ion-label>\n            <ion-textarea [(ngModel)]="order.orderDescription"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full (click)="submitOrder()">GET ME THAT</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="form-overlay form-busy" [ngClass]="{\'form-busy\': !(stateProvider.isStoreOpen() | async) || (orderProvider.isSubmitting() | async) }">\n      <div class="message-container" *ngIf="!(stateProvider.isStoreOpen() | async)" [innerHTML]="stateProvider.getStoreClosedMessage() | async | keepHtml"></div>\n      <div class="message-container" *ngIf="(orderProvider.isSubmitting() | async)">Submitting...</div>\n    </div>\n  </div>\n  <ion-grid class="text-center credit-card-text-container">\n    <ion-row>\n      <ion-col>WE ACCEPT ALL MAJOR CREDIT AND DEBIT CARDS UPON DELIVERY</ion-col>\n    </ion-row>\n    <ion-row class="credit-card-icons-container">\n      <ion-col>\n        <i class="fa fa-cc-visa"></i>\n        <i class="fa fa-cc-mastercard"></i>\n        <i class="fa fa-cc-discover"></i>\n        <i class="fa fa-cc-amex"></i>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>NO CASH PLEASE</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Having something delivered to somebody else?</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>We can email you a link so you can make a payment online.</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/order/order.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderProvider = /** @class */ (function () {
    function OrderProvider(http, toastController, config) {
        this.http = http;
        this.toastController = toastController;
        this.config = config;
        this.orderState = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]({
            isSubmitting: false
        });
    }
    OrderProvider.prototype.post = function (order) {
        var _this = this;
        this.orderState.next({
            isSubmitting: true
        });
        this.http.post(this.config.baseApiOrderUrl + this.config.stage + this.config.orderEndpoint, order, {})
            .toPromise().then(function (result) {
            _this.orderState.next({
                isSubmitting: false
            });
            order.clear();
            _this.toastController.create({
                message: _this.config.orderSuccessMessage,
                duration: _this.config.orderSuccessMessageDuration
            }).present();
        }).catch(function (error) {
            console.error(error);
            _this.orderState.next({
                isSubmitting: false
            });
            _this.toastController.create({
                message: 'An error occurred. Please try again.',
                duration: 5000
            }).present();
        });
    };
    OrderProvider.prototype.isSubmitting = function () {
        return this.orderState.map(function (orderState) { return orderState.isSubmitting; });
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
    ], OrderProvider);
    return OrderProvider;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerInfoModule", function() { return RunnerInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runner_info__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RunnerInfoModule = /** @class */ (function () {
    function RunnerInfoModule() {
    }
    RunnerInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__runner_info__["a" /* RunnerInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__runner_info__["a" /* RunnerInfoPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__runner_info__["a" /* RunnerInfoPage */]
            ]
        })
    ], RunnerInfoModule);
    return RunnerInfoModule;
}());

//# sourceMappingURL=runner-info.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunnerInfoPage = /** @class */ (function () {
    function RunnerInfoPage(navCtrl, navParams, stateProvider, config, http, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stateProvider = stateProvider;
        this.config = config;
        this.http = http;
        this.auth = auth;
        this.auth.user.subscribe(function (user) {
            if (!auth.canViewRunnerInfoPage(user)) {
                navCtrl.setRoot('OrderPage');
            }
        });
        //not sure why this is being hit twice ..... sucky for now.... oh well
        this.http.get(this.config.baseFirestoreFunctionsUrl + this.config.getRunnerInfoEndpoint, {})
            .toPromise().then(function (availableRunnersResponse) {
            _this.runnerInfo = availableRunnersResponse.json();
        })
            .catch(function (error) {
            console.error(error);
        });
    }
    RunnerInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RunnerInfoPage');
    };
    RunnerInfoPage.prototype.getRunnerImgUrl = function (url, size) {
        var pieces = url.split("/");
        if (pieces[pieces.length - 2] == "mo") {
            pieces.splice(pieces.length - 2, 1);
        }
        pieces.splice(pieces.length - 1, 0, 's' + size);
        return pieces.join("/");
    };
    RunnerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-runner-info',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/runner-info/runner-info.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Runner Info</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngFor="let runner of runnerInfo">\n    <ion-card-header>\n      <img [src]="getRunnerImgUrl(runner.photoURL, 100)">\n        {{runner.displayName}}\n    </ion-card-header>\n    <ion-card-content>\n      <p>Accepting Orders: \n        <span [ngClass]="{ \'accepting-orders\':runner.availableToRun,\n        \'not-accepting-orders\':!runner.availableToRun }">{{runner.availableToRun ? "YES": "NO"}}</span>\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/runner-info/runner-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], RunnerInfoPage);
    return RunnerInfoPage;
}());

//# sourceMappingURL=runner-info.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricing__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pricing__["a" /* PricingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pricing__["a" /* PricingPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__pricing__["a" /* PricingPage */]
            ]
        })
    ], PricingModule);
    return PricingModule;
}());

//# sourceMappingURL=pricing.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingPage = /** @class */ (function () {
    function PricingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pricing',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/pricing/pricing.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pricing</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>With our pricing we aim to:</div>\n        <ol class="price-aim-list">\n          <li>provide an <strong>on demand delivery service</strong> at an <strong>affordable price</strong></li>\n          <li>charge enough to <strong>pay the runners</strong> for their <strong>time & resources</strong></li>\n          <li>make enough to <strong>run our platform</strong> and grow our business</li>\n        </ol>\n        <div class="tip-note">Note: We suggest a tip, 100% of which is paid to the Runner (minimum of $2).</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-grid class="pricing-grid">\n          <ion-row class="header-divider">\n            <ion-col>\n              <strong>What we charge in addition to your order total:</strong>\n            </ion-col>\n            <ion-col>\n              <strong>What you get:</strong>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>$7</ion-col>\n            <ion-col>items from a single location whose total is less than $25 delivered to an address within Rexburg city limits</ion-col>\n          </ion-row>\n          <ion-row class="divider">\n            <ion-col class="example">\n              <div>Example: McDonald\'s - 1 Big Mac, a large fry, and a large Dr. Pepper</div>\n              <div>Total: <strong>$7</strong> + tip</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>+ $3</ion-col>\n            <ion-col>add another location</ion-col>\n          </ion-row>\n          <ion-row class="divider">\n            <ion-col class="example">\n              <div>Example: McDonald\'s - 1 Big Mac, a large fry, and a large Dr. Pepper</div>\n              <div>\n                <strong>Walmart - a gallon of 2% milk, 1 large bag of M&M\'s</strong>\n              </div>\n              <div>Total: $7 <strong>+ $3</strong> = $10 + tip</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>+ $3</ion-col>\n            <ion-col>allows order to grow by $15 increments (additonal $3 at $25, $40, $55, etc.)</ion-col>\n          </ion-row>\n          <ion-row class="divider">\n            <ion-col class="example">\n              <div>Example: Walmart - 2 gallons of 2% milk, 2 large bags of M&M\'s, 15 yogurts, and 5 digiorno pizzas <strong>(assuming these cost more than $25 and less than $40)</strong></div>\n              <div>Total: $7 <strong>+ $3</strong> = $10 + tip</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>+ $1.50/mile from closest location</ion-col>\n            <ion-col>allows for deliveries outside of Rexburg city limits</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="example">\n              <div>Example: McDonald\'s - 1 Big Mac, a large fry, and a large Dr. Pepper delivered 5 miles from the closest McDonald\'s</div>\n              <div>Total: $7 <strong>+ $1.50 x 5 miles</strong> = $14.50 + tip</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/pricing/pricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PricingPage);
    return PricingPage;
}());

//# sourceMappingURL=pricing.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServiceModule", function() { return TermsOfServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_of_service__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsOfServiceModule = /** @class */ (function () {
    function TermsOfServiceModule() {
    }
    TermsOfServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */]
            ]
        })
    ], TermsOfServiceModule);
    return TermsOfServiceModule;
}());

//# sourceMappingURL=terms-of-service.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsOfServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-of-service',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Terms</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="col-12">\n    <div class="row text-center">\n      <div class="col-lg-8 offset-lg-2 col-12">\n        <h1>Privacy Policy & Terms of Service</h1>\n        <p>Welcome to Get Me That Delivery! We are happy you are interested in having food and other items brought to you by our Runners, but first we have some legal items to go over.</p>\n      </div>\n    </div>\n    <p>Privacy Policy.</p>\n    <p>What Personal Information Does Get Me That Delivery Collect?</p>\n    <p>Personal Information You Provide to Us:</p>\n    <p>We receive and store any information you enter on our Service or provide to us in any other way. The types of Personal Information collected may include your name, email address, phone number, birthday, Twitter and/or Facebook usernames, use information regarding your use of our Service, and browser information. We automatically receive your location when you use the Service. The Personal Information you provide is used for such purposes as allowing you to set up a user account and profile that can be used to interact with other users through the Service, improving the content of the service.</p>\n    <p>Information Collected Automatically:</p>\n    <p>When you use the Service, Get Me That Delivery automatically receives and records information on our server logs from your browser or mobile platform, including your location, IP address, cookie information, and the page you requested. We treat this data as non-Personal Information, except where we are required to do otherwise under applicable law. Get Me That Delivery only uses this data in aggregate form. We may provide aggregate information to our partners about how our customers, collectively, use our site, so that our partners may also understand how often people use their services and our Service.</p>\n    <p>How is My Information Shared?</p>\n    <p>Runners: Your “Runners”</p>\n    <p>Runners can see your address, first name, last name, phone number and photo. Individuals reading this information may use it or disclose it to other individuals or entities without our control and without your knowledge. We therefore urge you to think carefully about including any specific information you may deem private.</p>\n    <p>Agents</p>\n    <p>We have other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you. Our agents do not have any right to use Personal Information we share with them beyond what is necessary to assist us, and they provide a comparable level of protection for your Personal Information.</p>\n    <p>Information Shared with Everyone</p>\n    <p>One of the primary reasons people use Get Me That Delivery is to share content with others. Information such as your name and photo, your hometown, your badges, a list of your friends, and Get Me That Delivery requests are shared with the Get Me That Delivery community.</p>\n    <p>Payment</p>\n    <p>We do not collect or store your payment information. Instead, we use Square, Inc. to process all payments for services provided through this Site. Thus, if you are a Customer, you will make payments using Square, Inc.; and if you are a Courier, you will receive your compensation payments through a verified bank account on Square, Inc. The payment information that you provide will be collected and stored by Square, Inc. subject to its privacy policy and terms of use. For more information, visit Squareup.com.</p>\n    <p>What About Cookies and Similar Technologies?</p>\n    <p>Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your browser to enable our systems to recognize your browser and tell us how and when pages in our site are visited and by how many people. Get Me That Delivery cookies do not collect Personal Information, and we do not combine the general information collected through cookies with other Personal Information to tell us who you are or what your email address is.</p>\n    <p>Is Personal Information About Me Secure?</p>\n    <p>Your Get Me That Delivery account Personal Information is protected by a password for your privacy and security. You need to prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately, and limiting access to your computer and browser by signing off after you have finished accessing your account. Get Me That Delivery endeavors to safeguard user information to ensure that user account information is kept private. However, Get Me That Delivery cannot guarantee the security of user account information. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time.</p>\n    <p>What Personal Information Can I Access?</p>\n    <p>Get Me That Delivery allows you to access the following information about you for the purpose of viewing, and in certain situations, updating that information and ensuring that it is accurate and complete. You can access this information on the Get Me That Delivery website (except usage information, which can be accessed in the “History” tab). This list will change as our Service changes.</p>\n    <ul>\n      <li>Password</li>\n      <li>Phone number</li>\n      <li>Email address</li>\n      <li>Other User profile information (for example, home city, photo)</li>\n    </ul>\n    <p>Will There Be Changes To This Privacy Policy?</p>\n    <p>Get Me That Delivery may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used.</p>\n    <p>What If I Have Questions Or Concerns?</p>\n    <p>If you have any questions or concerns regarding privacy using the Service, please send a detailed message to: getmethatdelivery@gmail.com. We will make every effort to resolve your concerns.</p>\n    <p>Terms of Use</p>\n    <p>The terms and conditions stated herein (collectively, the “Agreement”) constitute a legal agreement between you and Get Me That Delivery Inc. By using or receiving any services supplied to you by Get Me That Delivery, whether via its website, www.iceburgdelivery.com, or through any other method, (collectively, the “Service”), and downloading, installing or using any associated software supplied by Get Me That Delivery which purpose is to enable you to use the Service (collectively, the “Software”), you hereby expressly acknowledge and agree to be bound by the terms and conditions of this Agreement, and any future amendments and additions to this Agreement as published from time to time at https://getmethatdelivery.com/#terms-of-service or through the Service.</p>\n    <p>In order to use the Service and the associated Software you must agree to the terms and conditions that are set out below as well as in our Privacy Policy. If you do not agree to the terms and conditions and our Privacy Policy, please stop using the Service and Software immediately.</p>\n    <p>Get Me That Delivery reserves the right to modify the terms and conditions of this Agreement or its policies relating to the Service or Software at any time, effective upon posting of an updated version of this Agreement on the Service or Software. You are responsible for regularly reviewing this Agreement. Continued use of the Service or Software after any such changes shall constitute your consent to such changes.</p>\n    <p>GET ME THAT DEILVERY DOES NOT PROVIDE LOGISTICS OR COURIER SERVICES, AND Get Me That Delivery IS NOT A LOGISTICS CARRIER. IT IS UP TO THE THIRD PARTY COURIER OR LOGISTICS PROVIDER, COURIER OR VEHICLE OPERATOR TO OFFER COURIER SERVICES WHICH MAY BE SCHEDULED THROUGH USE OF THE SOFTWARE OR SERVICE. GET ME THAT DELIVERY OFFERS INFORMATION AND A METHOD TO OBTAIN SUCH THIRD PARTY COURIER SERVICES, BUT DOES NOT AND DOES NOT INTEND TO PROVIDE COURIER SERVICES OR ACT IN ANY WAY AS A COURIER, AND HAS NO RESPONSIBILITY OR LIABILITY FOR ANY COURIER OTHER THAN STATED HEREIN SERVICES PROVIDED TO YOU BY SUCH THIRD PARTIES. GET ME THAT DELIVERY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE SERVICE.</p>\n    <p>Representations and Warranties</p>\n    <p>By using the Software or Services, you expressly represent and warrant that you are legally entitled to enter this Agreement. If you reside in a jurisdiction, which restricts the use of the Services because of age, or restricts the ability to enter into agreements such as this one due to age, you must abide by such age limits and you must not use the Software and Service. Without limiting the foregoing, the Service and Software is not available to children (persons under the age of 18). By using the Software or Services, you represent and warrant that you are at least 18 years old and in some cases at least 21 years old. By using the Software or the Services, you represent and warrant that you have the right, authority and capacity to enter into this Agreement and to abide by the terms and conditions of this Agreement. Your participation in using the Service and/or Software is for your sole, personal use. You may not authorize others to use your user status, and you may not assign or otherwise transfer your user account to any other person or entity. When using the Software or Service you agree to comply with all applicable laws from your home nation, the country, state and city in which you are present while using the Software or Service. You may only access the Services using authorized means. It is your responsibility to check to ensure you download the correct Software for your device. Get Me That Delivery is not liable if you do not have a compatible handset or if you have downloaded the wrong version of the Software for your handset. Get Me That Delivery reserves the right to terminate this Agreement should you be using the Service or Software with an incompatible or unauthorized device.</p>\n    <p>By using the Software or the Services, you agree that:</p>\n    <ul>\n      <li>You will only use the Service or Software for lawful purposes; you will not use the Services for sending or storing any unlawful or illegal material or for fraudulent purposes.</li>\n      <li>You will not use the Service or Software to cause nuisance, annoyance or inconvenience.</li>\n      <li>You will not impair the proper operation of the network.</li>\n      <li>You will not try to harm the Service or Software in any way whatsoever.</li>\n      <li>You will not copy, or distribute the Software or other content without written permission from Get Me That Delivery.</li>\n      <li>You will only use the Software and Service for your own use and will not resell it to a third party.</li>\n      <li>You will keep secure and confidential your account password or any identification we provide you which allows access to the Service.</li>\n      <li>You will provide us with whatever proof of identity we may reasonably request.</li>\n      <li>You will only use an access point or 3G/4G data account (AP) which you are authorized to use.</li>\n    </ul>\n    <p>License Grant & Restrictions</p>\n    <p>Get Me That Delivery hereby grants you a non-exclusive, non-transferable, right to use the Software and Service, solely for your own personal, non-commercial purposes, subject to the terms and conditions of this Agreement. All rights not expressly granted to you are reserved by Get Me That Delivery and its licensors. You shall not: license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Service or the Software in any way; modify or make derivative works based upon the Service or the Software; create Internet “links” to the Service or “frame” or “mirror” any Software on any other server or wireless or Internet-based device; reverse engineer or access the Software in order to build a competitive product or service build a product using similar ideas, features, functions or graphics of the Service or Software, or copy any ideas, features, functions or graphics of the Service or Software, or launch an automated program or script, including, but not limited to, web spiders, web crawlers, web robots, web ants, web indexers, bots, viruses or worms, or any program which may make multiple server requests per second, or unduly burdens or hinders the operation and/or performance of the Service or Software.</p>\n    <p>You may use the Software and Service only for your personal, non-commercial purposes and shall not:</p>\n    <ul>\n      <li>send spam or otherwise duplicative or unsolicited messages in violation of applicable laws;</li>\n      <li>send or store infringing, obscene, threatening, libelous, or otherwise unlawful or tortious material, including material harmful to children or violative of third party privacy rights;</li>\n      <li>send or store material containing software viruses, worms, Trojan horses or other harmful computer code, files, scripts, agents or programs;</li>\n      <li>interfere with or disrupt the integrity or performance of the Software or Service or the data contained therein attempt to gain unauthorized access to the Software or Service or its related systems or networks.</li>\n    </ul>\n    <p>Payment Terms</p>\n    <p>Get Me That Delivery may use a third party payment system to process any payments associated with your use of the Software or Service. As part of the payment process, you agree to be bound by any terms and conditions of such third party payment processors. Get Me That Delivery has no control over the content, sites, or terms and conditions of any third party payment processors. We have selected third party processors that are trusted in the payment processing industry, however, we are not responsible or liable under any cause of action for any security issues that may arise as a result of any third party payment processing sites.</p>\n    <p>Any fees, which Get Me That Delivery may charge you for the Software or Service, are due immediately and are non-refundable. This no refund policy shall apply at all times regardless of your decision to terminate your usage, our decision to terminate your usage, disruption caused to our Software or Service either planned, accidental or intentional, or any reason whatsoever. Get Me That Delivery reserves the right to determine final prevailing pricing. Please note the pricing information published on the website may not reflect the prevailing pricing.</p>\n    <p>Get Me That Delivery, at its sole discretion, can make promotional offers with different features and different rates to any of our customers. These promotional offers, unless made to you, shall have no bearing whatsoever on your offer or contract. Get Me That Delivery may change the fees for our Service or Software as we deem necessary for our business. We encourage you to check back at our website periodically if you are interested about how we charge for the Service of Software.</p>\n    <p>Intellectual Property Ownership</p>\n    <p>Get Me That Delivery alone (and its licensors, where applicable) shall own all right, title and interest, including all related intellectual property rights, in and to the Software and the Service and any suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by you or any other party relating to the Software or the Service. This Agreement is not a sale and does not convey to you any rights of ownership in or related to the Software or the Service, or any intellectual property rights owned by Get Me That Delivery . Get Me That Delivery name, Get Me That Delivery logo, and the product names associated with the Software and Service are trademarks of Get Me That Delivery or third parties, and no right or license is granted to use them. Unless expressly granted in this Agreement, all intellectual property rights are expressly reserved by Get Me That Delivery.</p>\n    <p>Third Party Interactions</p>\n    <p>During use of the Software and Service, you may enter into correspondence with, purchase goods and/or services from, or participate in promotions of third party service providers, advertisers or sponsors showing their goods and/or services through the Software or Service. Any such activity, and any terms, conditions, warranties or representations associated with such activity, is solely between you and the applicable third-party. Get Me That Delivery and its licensors shall have no liability, obligation or responsibility for any such correspondence, purchase, transaction or promotion between you and any such third-party. Get Me That Delivery does not endorse any sites on the Internet that are linked through the Service or Software, and in no event shall Get Me That Delivery or its licensors be responsible for any content, products, services or other materials on or available from such sites or third party providers. Get Me That Delivery provides the Software and Service to you pursuant to the terms and conditions of this Agreement. You recognize, however, that certain third-party providers of goods and/or services may require your agreement to additional or different terms and conditions prior to your use of or access to such goods or services, and Get Me That Delivery disclaims any and all responsibility or liability arising from such agreements between you and the third party providers.</p>\n    <p>Get Me That Delivery may rely on third party advertising and marketing supplied through the Software or Service and other mechanisms to subsidize the Software or Service. By agreeing to these terms and conditions you agree to receive such advertising and marketing. If you do not want to receive such advertising you should notify us in writing. Get Me That Delivery reserves the right to charge you a higher fee for the Services or Software should you choose not to receive these advertising services. This higher fee, if applicable, will be posted on Get Me That Delivery website located at http://www. IceburgDelivery.com. Get Me That Delivery may compile and release information regarding you and your use of the Software or Service on an anonymous basis as part of a customer profile or similar report or analysis you agree that it is your responsibility to take reasonable precautions in all actions and interactions with any third party you interact with through the Service.</p>\n    <p>Indemnification</p>\n    <p>By entering into this Agreement and using the Software or Service, you agree that you shall defend, indemnify and hold Get Me That Delivery, its licensors and each such party’s parent organizations, subsidiaries, affiliates, officers, directors, members, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs) arising out of or in connection with: (a) your violation or breach of any term of this Agreement or any applicable law or regulation, whether or not referenced herein; (b) your violation of any rights of any third party, including providers of courier services arranged via the Service or Software, or (c) your use or misuse of the Software or Service.</p>\n    <p>Disclaimer of Warranties</p>\n    <p>USE OF THE SERVICE AND SOFTWARE IS ENTIRELY AT YOUR OWN RISK.</p>\n    <p>GET ME THAT DEILVERY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, AVAILABILITY, ACCURACY OR COMPLETENESS OF THE SERVICE OR SOFTWARE. GET ME THAT DELIVERY DOES NOT REPRESENT OR WARRANT THAT (A) THE USE OF THE SERVICE OR SOFTWARE WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B) THE SERVICE OR SOFTWARE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) ANY STORED DATA WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (E) ERRORS OR DEFECTS IN THE SERVICE OR SOFTWARE WILL BE CORRECTED, OR (F) THE SERVICE OR THE SERVER(S) THAT MAKE THE SERVICE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE SERVICE AND SOFTWARE IS PROVIDED TO YOU STRICTLY ON AN “AS IS” BASIS. ALL CONDITIONS, REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS, ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BY GET ME THAT DELIVERY. GET ME THAT DELIVERY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE RELIABILITY, SAFETY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF ANY SERVICES, PRODUCTS OR GOODS OBTAINED BY THIRD PARTIES THROUGH THE USE OF THE SERVICE OR SOFTWARE. YOU ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SOFTWARE AND SERVICE, AND ANY THIRD PARTY SERVICES OR PRODUCTS REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>\n    <p>Internet Delays</p>\n    <p>GET ME THAT DELIVERY SERVICE AND SOFTWARE MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS. GET ME THAT DELIVERY IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH PROBLEMS.</p>\n    <p>Limitation of Liability</p>\n    <p>IN NO EVENT SHALL Get Me That Delivery ’s AGGREGATE LIABILITY EXCEED THE AMOUNTS ACTUALLY PAID BY AND/OR DUE FROM YOU IN THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM. IN NO EVENT SHALL GET ME THAT DELIVERY AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING PERSONAL INJURY, LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE). GET ME THAT DELIVERY AND/OR ITS LICENSORS SHALL NOT BE LIABLE FOR ANY LOSS, DAMAGE OR INJURY WHICH MAY BE INCURRED BY YOU, INCLUDING BY NOT LIMITED TO LOSS, DAMAGE OR INJURY ARISING OUT OF, OR IN ANY WAY CONNECTED WITH THE SERVICE OR SOFTWARE, INCLUDING BUT NOT LIMITED TO THE USE OR INABILITY TO USE THE SERVICE OR SOFTWARE, ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY THIRD PARTY SERVICE PROVIDER, ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE WEBSITE OR IS REFERRED BY THE SERVICE OR SOFTWARE, EVEN IF Get Me That Delivery AND/OR ITS LICENSORS HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>\n    <p>GET ME THAT DELIVERY MAY INTRODUCE YOU TO THIRD PARTY COURIERS FOR THE PURPOSES OF PROVIDING COURIER SERVICES. WE WILL NOT ASSESS THE SUITABILITY, LEGALITY OR ABILITY OF ANY THIRD PARTY COURIERS AND YOU EXPRESSLY WAIVE AND RELEASE GET ME THAT DLIVERY FROM ANY AND ALL ANY LIABILITY, CLAIMS OR DAMAGES ARISING FROM OR IN ANY WAY RELATED TO THE THIRD PARTY COURIERS. GET ME THAT DELIVERY WILL NOT BE A PARTY TO DISPUTES, NEGOTIATIONS OF DISPUTES BETWEEN YOU AND SUCH THIRD PARTY PROVIDERS. WE CANNOT AND WILL NOT PLAY ANY ROLE IN MANAGING PAYMENTS BETWEEN YOU AND THE THIRD PARTY PROVIDERS. RESPONSIBILITY FOR THE DECISIONS YOU MAKE REGARDING SERVICES OFFERED VIA THE SOFTWARE OR SERVICE (WITH ALL ITS IMPLICATIONS) RESTS SOLELY WITH YOU. WE WILL NOT ASSESS THE SUITABILITY, LEGALITY OR ABILITY OF ANY SUCH THIRD PARTIES AND YOU EXPRESSLY WAIVE AND RELEASE GET ME THAT DELIVERY FROM ANY AND ALL LIABILITY, CLAIMS, CAUSES OF ACTION, OR DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE OR SERVICE, OR IN ANY WAY RELATED TO THE THIRD PARTIES INTRODUCED TO YOU BY THE SOFTWARE OR SERVICE. YOU EXPRESSLY WAIVE AND RELEASE ANY AND ALL RIGHTS AND BENEFITS UNDER SECTION 1542 OF THE CIVIL CODE (OR ANY ANALOGOUS LAW OF ANY STATE), WHICH READS AS FOLLOWS: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM, MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.”</p>\n    <p>THE QUALITY OF THE COURIER SERVICES SCHEDULED THROUGH THE USE OF THE SERVICE OR SOFTWARE IS ENTIRELY THE RESPONSIBILITY OF THE THIRD PARTY PROVIDER WHO ULTIMATELY PROVIDES SUCH COURIER SERVICES TO YOU. YOU UNDERSTAND, THEREFORE, THAT BY USING THE SOFTWARE AND THE SERVICE, YOUR SHIPMENTS MAY BE EXPOSED TO SITUATIONS THAT ARE POTENTIALLY DANGEROUS, OFFENSIVE, HARMFUL TO MINORS, UNSAFE OR OTHERWISE OBJECTIONABLE, AND THAT YOU USE THE SOFTWARE AND THE SERVICE AT YOUR OWN RISK.</p>\n    <p>Notice</p>\n    <p>Get Me That Delivery may give notice by means of a general notice on the Service, electronic mail to your email address on record in Get Me That Delivery account information, or by written communication sent by first class mail or pre-paid post to your address on record in Get Me That Delivery account information. Such notice shall be deemed to have been given upon the expiration of 48 hours after emailing or posting 12 hours after sending (if sent by email). You may give notice to Get Me That Delivery (such notice shall be deemed given when received by Get Me That Delivery ) at any time by any of the following: letter sent by confirmed facsimile to Get Me That Delivery at the following email or phone number (whichever is appropriate): (307) 655- 6733; Iceburgdelivery@gmail.com addressed to the attention of: Chief Executive Officer.</p>\n    <p>Assignment</p>\n    <p>This Agreement may not be assigned by you without the prior written approval of Get Me That Delivery but may be assigned without your consent by Get Me That Delivery to:</p>\n    <ul>\n      <li>a parent or subsidiary</li>\n      <li>an acquirer of assets</li>\n      <li>a successor by merger</li>\n      <li>Any purported assignment by you in violation of this section shall be void.</li>\n    </ul>\n    <p>General</p>\n    <p>This Agreement shall be governed by law, without regard to the choice or conflicts of law provisions of any jurisdiction, and any disputes, actions, claims or causes of action arising out of or in connection with this Agreement or the Service or Software shall be subject to the exclusive jurisdiction of the state and federal courts. No joint venture, partnership, employment, or agency relationship exists between you, Get Me That Delivery or any third party provider as a result of this Agreement or use of the Service or Software. If any provision of the Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law. The failure of Get Me That Delivery to enforce any right or provision in this Agreement shall not constitute a waiver of such right or provision unless acknowledged and agreed to by Get Me That Delivery in writing. This Agreement, comprises the entire agreement between you and Get Me That Delivery and supersedes all prior or contemporaneous negotiations, discussions or agreements, whether written or oral, between the parties regarding the subject matter contained herein.</p>\n    <p>Your continued use of the Service and Software indicates your acceptance of the above terms and conditions as well as in our Privacy Policy.</p>\n    <p>Thanks for using Get Me That Delivery!</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/terms-of-service/terms-of-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_order_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pricing_pricing_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_how_it_works_how_it_works_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_frequently_asked_questions_frequently_asked_questions_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_us_contact_us_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_become_runner_become_runner_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_runner_info_runner_info_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terms_of_service_terms_of_service_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_order_order__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_config_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_state_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_contact_contact__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_become_runner_become_runner__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environment__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_firestore__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/become-runner/become-runner.module#BecomeRunnerModule', name: 'BecomeRunnerPage', segment: 'become-runner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/frequently-asked-questions/frequently-asked-questions.module#FrequentlyAskedQuestionsModule', name: 'FrequentlyAskedQuestionsPage', segment: 'frequently-asked-questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/how-it-works/how-it-works.module#HowItWorksModule', name: 'HowItWorksPage', segment: 'how-it-works', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/runner-info/runner-info.module#RunnerInfoModule', name: 'RunnerInfoPage', segment: 'runner-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pricing/pricing.module#PricingModule', name: 'PricingPage', segment: 'pricing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-of-service/terms-of-service.module#TermsOfServiceModule', name: 'TermsOfServicePage', segment: 'terms-of-service', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_order_order_module__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_pricing_pricing_module__["PricingModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_how_it_works_how_it_works_module__["HowItWorksModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_frequently_asked_questions_frequently_asked_questions_module__["FrequentlyAskedQuestionsModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_us_contact_us_module__["ContactUsModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_become_runner_become_runner_module__["BecomeRunnerModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_runner_info_runner_info_module__["RunnerInfoModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_terms_of_service_terms_of_service_module__["TermsOfServiceModule"],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_21__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_order_order__["a" /* OrderProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_state_state__["a" /* StateProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_contact_contact__["a" /* ContactProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_become_runner_become_runner__["a" /* BecomeRunnerProvider */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_firestore__["AngularFirestore"],
                __WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerApplication; });
var RunnerApplication = /** @class */ (function () {
    function RunnerApplication() {
    }
    RunnerApplication.prototype.clear = function () {
        this.name = null;
        this.email = null;
        this.phone = null;
        this.availability = null;
        this.duration = null;
        this.reason = null;
    };
    return RunnerApplication;
}());

//# sourceMappingURL=runner-application.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.clear = function () {
        this.name = null;
        this.email = null;
        this.phone = null;
        this.body = null;
    };
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.clear = function () {
        this.recipientName = null;
        this.recipientEmail = null;
        this.recipientPhone = null;
        this.recipientAddress = null;
        this.recipientAddressExtra = null;
        this.sourceName = null;
        this.orderDescription = null;
    };
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'keepHtml', pure: false }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());

//# sourceMappingURL=keep-html.pipe.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_order_order__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pricing_pricing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_how_it_works_how_it_works__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_frequently_asked_questions_frequently_asked_questions__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_become_runner_become_runner__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_of_service_terms_of_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_runner_info_runner_info__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */];
        this.isBrowser = false;
        this.initializeApp();
        this.pages = [
            { title: 'Place An Order', component: __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */], name: 'OrderPage', requiresLogin: false },
            { title: 'Pricing', component: __WEBPACK_IMPORTED_MODULE_5__pages_pricing_pricing__["a" /* PricingPage */], name: 'PricingPage', requiresLogin: false },
            { title: 'How It Works', component: __WEBPACK_IMPORTED_MODULE_6__pages_how_it_works_how_it_works__["a" /* HowItWorksPage */], name: 'HowItWorksPage', requiresLogin: false },
            { title: 'Become A Runner', component: __WEBPACK_IMPORTED_MODULE_9__pages_become_runner_become_runner__["a" /* BecomeRunnerPage */], name: 'BecomeRunnerPage', requiresLogin: false },
            { title: 'Frequently Asked Questions', component: __WEBPACK_IMPORTED_MODULE_7__pages_frequently_asked_questions_frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */], name: 'FrequentlyAskedQuestionsPage', requiresLogin: false },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__["a" /* ContactUsPage */], name: 'ContactUsPage', requiresLogin: false },
            { title: 'Terms', component: __WEBPACK_IMPORTED_MODULE_10__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */], name: 'TermsOfServicePage', requiresLogin: false },
            { title: 'Runner Info', component: __WEBPACK_IMPORTED_MODULE_11__pages_runner_info_runner_info__["a" /* RunnerInfoPage */], name: 'RunnerInfoPage', requiresLogin: true }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.auth.user.subscribe(function (user) { return _this.user = user; });
            _this.isBrowser = document && document.URL.startsWith('http');
        });
    };
    MyApp.prototype.openPage = function (page) {
        if ((this.platform.is('core') || this.platform.is('mobile'))) {
            this.nav.push(page.name); // this seems to be a hack, using to update the url
        }
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.login = function () {
        this.auth.googleLogin();
    };
    MyApp.prototype.logout = function () {
        this.auth.signOut();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title class="text-center"><strong>GET ME THAT DELIVERY</strong></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <div *ngFor="let p of pages">\n        <button menuClose ion-item *ngIf="(isBrowser && p.requiresLogin && auth.canViewRunnerInfoPage(user)) || p.requiresLogin == false" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </div>\n      <div *ngIf="isBrowser">\n        <button ion-item menuClose\n            (click)="auth.toggleCheckinCheckout(user)"\n            *ngIf="auth.canViewCheckinButton(user)">\n          Accept Orders\n          <span class="order-toggle">\n            <i *ngIf="!user.availableToRun" class="fa fa-toggle-off float-right"></i>\n            <i *ngIf="user.availableToRun" class="fa fa-toggle-on float-right"></i>\n          </span>\n        </button>\n        <button ion-item *ngIf="auth && auth.user | async as user; else showLogin" (click)="logout()">\n          {{ user.displayName }} | Logout\n        </button>\n        <ng-template #showLogin>\n          <button ion-item (click)="login()">\n            Login With Google\n          </button>\n        </ng-template>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDC71XMqEZ5I78kecHur3jdv_ZiFWicQyY",
    authDomain: "get-me-that-delivery.firebaseapp.com",
    databaseURL: "https://get-me-that-delivery.firebaseio.com",
    projectId: "get-me-that-delivery",
    storageBucket: "get-me-that-delivery.appspot.com",
    messagingSenderId: "77228720494"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigProvider = /** @class */ (function () {
    function ConfigProvider(http) {
        this.http = http;
        this.feeAmount = 7;
        this.mainPhoneNumber = '208-425-2599';
        this.baseApiOrderUrl = 'https://2vv8rth4gd.execute-api.us-east-2.amazonaws.com';
        this.stage = '/prod'; // dev
        this.baseFirestoreFunctionsUrl = 'https://us-central1-get-me-that-delivery.cloudfunctions.net';
        this.stateEndpoint = '/state';
        this.orderEndpoint = '/order';
        this.contactUsEndpoint = '/contact-us';
        this.becomeRunnerEndpoint = '/become-runner';
        this.getAvailableRunnersEndpoint = '/getAvailableRunners';
        this.getRunnerInfoEndpoint = '/getRunnerInfo';
        this.orderSuccessMessage = 'Thanks for your order! A runner will send you a text shortly and coordinate your delivery.';
        this.orderSuccessMessageDuration = 10000;
        this.contactUsSuccessMessage = 'Message sent!';
        this.contactUsSuccessMessageDuration = 5000;
        this.becomeRunnerSuccessMessage = 'Application sent! Please allow a few days for us to get back to you. Thanks for your interest!';
        this.becomeRunnerSuccessMessageDuration = 7000;
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StateProvider = /** @class */ (function () {
    function StateProvider(http, config) {
        this.http = http;
        this.config = config;
        this.storeState = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]({
            open: true,
            orderFormOverlayHtml: ''
        });
    }
    StateProvider.prototype.get = function () {
        var _this = this;
        this.http.get(this.config.baseApiOrderUrl + this.config.stage + this.config.stateEndpoint, {})
            .toPromise().then(function (result) {
            // todo, clean up api to send it back like this and then i wouldn't have to map it
            var awsResult = result.json();
            if (awsResult.storeState.storeOpen) {
                _this.http.get(_this.config.baseFirestoreFunctionsUrl + _this.config.getAvailableRunnersEndpoint, {})
                    .toPromise().then(function (availableRunnersResponse) {
                    var availableRunners = availableRunnersResponse.json();
                    _this.storeState.next({
                        open: awsResult.storeState.storeOpen && availableRunners.length,
                        orderFormOverlayHtml: result.json().storeState.closedMessageHtml
                    });
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
            else {
                _this.storeState.next({
                    open: false,
                    orderFormOverlayHtml: result.json().storeState.closedMessageHtml
                });
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    StateProvider.prototype.isStoreOpen = function () {
        return this.storeState.map(function (storeState) { return storeState.open; });
    };
    StateProvider.prototype.getStoreClosedMessage = function () {
        return this.storeState.map(function (storeState) { return storeState.orderFormOverlayHtml; });
    };
    StateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigProvider */]])
    ], StateProvider);
    return StateProvider;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_state_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, state) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.state = state;
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs__["of"])(null);
            }
        });
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.toggleCheckinCheckout = function (user) {
        this.updateUserData({
            uid: user.uid,
            availableToRun: !user.availableToRun
        });
        this.state.get();
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            // maybe will need to change if add other providers?
            var user = {
                uid: credential.user.uid,
                email: credential.user.email,
                displayName: credential.user.displayName,
                photoURL: credential.user.photoURL,
                phone: credential.user.phoneNumber
            };
            _this.updateUserData(user);
        });
    };
    AuthService.prototype.updateUserData = function (user, merge) {
        if (merge === void 0) { merge = true; }
        var userRef = this.afs.doc("users/" + user.uid);
        return userRef.set(user, { merge: merge });
    };
    AuthService.prototype.canViewCheckinButton = function (user) {
        if (!user)
            return false;
        var allowed = ['runner'];
        return this.checkAuthorization(user, allowed);
    };
    AuthService.prototype.canViewRunnerInfoPage = function (user) {
        if (!user)
            return false;
        var allowed = ['runner'];
        return this.checkAuthorization(user, allowed);
    };
    // determines if user has matching role
    AuthService.prototype.checkAuthorization = function (user, allowedRoles) {
        if (!user)
            return false;
        for (var _i = 0, allowedRoles_1 = allowedRoles; _i < allowedRoles_1.length; _i++) {
            var role = allowedRoles_1[_i];
            if (user[role]) {
                return true;
            }
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1__providers_state_state__["a" /* StateProvider */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map