webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact-us/contact-us.module": [
		163
	],
	"../pages/frequently-asked-questions/frequently-asked-questions.module": [
		161
	],
	"../pages/how-it-works/how-it-works.module": [
		159
	],
	"../pages/order/order.module": [
		154
	],
	"../pages/terms-of-service/terms-of-service.module": [
		166
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 153;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
        ]
    })
], OrderModule);

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, orderProvider, stateProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.stateProvider = stateProvider;
        this.order = new __WEBPACK_IMPORTED_MODULE_4__models_order__["a" /* Order */]();
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        this.stateProvider.get();
    };
    OrderPage.prototype.submitOrder = function () {
        this.orderProvider.post(this.order);
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/order/order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Place An Order</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="form-top-callout">ALL ORDERS $7 FLAT RATE FEE</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="form-bottom-callout">[ANYTHING DELIVERED]</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="avg-wait-time-under">Average delivery time: under 35 minutes</ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="form-container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input [(ngModel)]=\'order.recipientName\'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="order.recipientEmail"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phone" [(ngModel)]="order.recipientPhone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Rexburg Address</ion-label>\n            <ion-input [(ngModel)]="order.recipientAddress"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>From where?</ion-label>\n            <ion-input [(ngModel)]="order.sourceName"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>What would you like?</ion-label>\n            <ion-textarea [(ngModel)]="order.orderDescription"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full (click)="submitOrder()">GET ME THAT</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="form-overlay form-busy" [ngClass]="{\'form-busy\': !(stateProvider.isStoreOpen() | async) || (orderProvider.isSubmitting() | async) }">\n      <div class="message-container" *ngIf="!(stateProvider.isStoreOpen() | async)" [innerHTML]="stateProvider.getStoreClosedMessage() | async"></div>\n      <div class="message-container" *ngIf="(orderProvider.isSubmitting() | async)">Submitting...</div>\n    </div>\n  </div>\n  <ion-grid class="text-center credit-card-text-container">\n    <ion-row>\n      <ion-col>WE ACCEPT ALL MAJOR CREDIT AND DEBIT CARDS</ion-col>\n    </ion-row>\n    <ion-row class="credit-card-icons-container">\n      <ion-col>\n        <i class="fa fa-cc-visa"></i>\n        <i class="fa fa-cc-mastercard"></i>\n        <i class="fa fa-cc-discover"></i>\n        <i class="fa fa-cc-amex"></i>\n        <i class="fa fa-cc-jcb"></i>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>NO CASH PLEASE</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/order/order.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* StateProvider */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(79);
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






var OrderProvider = (function () {
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
        this.http.post(this.config.baseApiOrderUrl + this.config.environment + this.config.orderEndpoint, order, {})
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
                isSubmitting: true
            });
            //todo
        });
    };
    OrderProvider.prototype.isSubmitting = function () {
        return this.orderState.map(function (orderState) { return orderState.isSubmitting; });
    };
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StateProvider = (function () {
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
        this.http.get(this.config.baseApiOrderUrl + this.config.environment + this.config.stateEndpoint, {})
            .toPromise().then(function (result) {
            // todo, clean up api to send it back like this and then i wouldn't have to map it
            _this.storeState.next({
                open: result.json().storeState.storeOpen,
                orderFormOverlayHtml: result.json().storeState.closedMessageHtml
            });
        })
            .catch(function (error) {
            console.error(error);
            //todo
        });
    };
    StateProvider.prototype.isStoreOpen = function () {
        return this.storeState.map(function (storeState) { return storeState.open; });
    };
    StateProvider.prototype.getStoreClosedMessage = function () {
        return this.storeState.map(function (storeState) { return storeState.orderFormOverlayHtml; });
    };
    return StateProvider;
}());
StateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigProvider */]])
], StateProvider);

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksModule", function() { return HowItWorksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_it_works__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowItWorksModule = (function () {
    function HowItWorksModule() {
    }
    return HowItWorksModule;
}());
HowItWorksModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__how_it_works__["a" /* HowItWorksPage */]
        ]
    })
], HowItWorksModule);

//# sourceMappingURL=how-it-works.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowItWorksPage = (function () {
    function HowItWorksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return HowItWorksPage;
}());
HowItWorksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-it-works',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/how-it-works/how-it-works.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>How It Works</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>Imagine getting whatever you want delivered.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>In three clicks a friendly runner is at your door with delicious food or anything else you want.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Magic? You bet.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            FROM ANYWHERE\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">Grocery Store, Fast Food, Office supplies, you name it.</p>\n            <p>Decide what you want. Ask for anything from any store or restaurant in Rexburg. Customize your order. (Ordering is easy as texting a friend, just type what you want.)</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            FAST DELIVERY\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">Delivered to you in under an hour.</p>\n            <p>Delivered to you in under an hour. Your Order is on the way. You can text your runner with questions or changes you may have.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-4 col-12>\n        <ion-card>\n          <ion-card-header>\n            ESTIMATED DELIVERY TIME\n          </ion-card-header>\n          <ion-card-content>\n            <p class="muted">Never miss a delivery.</p>\n            <p>It\'s easy and affordable. Review your receipt at time of delivery, select your tip and confirm. Payment is made cashless for convienence, and done in the Square app via credit or debit card.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/how-it-works/how-it-works.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HowItWorksPage);

//# sourceMappingURL=how-it-works.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentlyAskedQuestionsModule", function() { return FrequentlyAskedQuestionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FrequentlyAskedQuestionsModule = (function () {
    function FrequentlyAskedQuestionsModule() {
    }
    return FrequentlyAskedQuestionsModule;
}());
FrequentlyAskedQuestionsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */]
        ]
    })
], FrequentlyAskedQuestionsModule);

//# sourceMappingURL=frequently-asked-questions.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentlyAskedQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrequentlyAskedQuestionsPage = (function () {
    function FrequentlyAskedQuestionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return FrequentlyAskedQuestionsPage;
}());
FrequentlyAskedQuestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-frequently-asked-questions',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/frequently-asked-questions/frequently-asked-questions.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Frequently Asked Questions</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>If these frequently asked questions don\'t answer your questions you can always contact us.</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Delivery</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Where do you deliver?\n          </ion-card-header>\n          <ion-card-content>\n            <p>We currently deliver to all Rexburg, Idaho addresses.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How much is the delivery fee for orders?\n          </ion-card-header>\n          <ion-card-content>\n            <p>All orders will have a flat rate fee of $7. Tipping the runner is greatly appreciated, but not required.</p>\n            <p>For example, if the cost of your items is $20, your total would be $27 plus any tip amount. It\'s that simple.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What are your delivery hours?\n          </ion-card-header>\n          <ion-card-content>\n            <p>11AM to 11PM Monday - Saturday. We are closed on Sunday.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How quickly do you deliver?\n          </ion-card-header>\n          <ion-card-content>\n            <p>The average delivery time is 35 minutes, but times can vary depending on demand, traffic and restaurant wait times. We always keep you posted on the status of your order, texts from your runner.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I order in advance?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Please reach out for large catering orders. All other deliveries are on-demand, at the time you need it.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I pay?\n          </ion-card-header>\n          <ion-card-content>\n            <p>The system is completely secure. All payments are made through Square and we accept cash and all major credit and debit cards. When your order is delivered, you’ll give the runner a credit or debit card which they will swipe securely via the Square app.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>General</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What is Get Me That Delivery?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Get Me That Delivery is your on demand, personalized delivery assistant. You order, we deliver.. it’s that simple!</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How does it work?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Enter the item(s) you would like from any restaurant or store in Rexburg Idaho. Editing the details of your order is simple and placing your order only takes three taps on your phone, ipad, or computer.</p>\n            <p>After you order, it is assigned to one of our runners, who will deliver your item(s).</p>\n            <p>Payment is secured upon delivery. Once your item(s) are delivered by the runner, you pay for them right though the Square app via credit or debit card. All payment information is secured through Square.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What can I have delivered?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Almost Anything! We deliver food from your favorite restaurants, dry cleaning, prescriptions, clothing, groceries, and more!</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I have controlled substances delivered such as alcohol or tabacco delivered?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Unfortunately we do not deliver these substances.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>My Order</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What is your return policy?\n          </ion-card-header>\n          <ion-card-content>\n            <p>If you have an issue with your order, contact your runner and we will fix the situation ASAP.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I report a problem with my order?\n          </ion-card-header>\n          <ion-card-content>\n            <p>You can contact your runner or you can reach us on our contact us page.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Payment</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            How do I pay for an order?\n          </ion-card-header>\n          <ion-card-content>\n            <p>You will be prompted to pay at time of delivery.  We accept all major credit and debit cards. Your form of payment will be secured through Square.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>Runners</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Who makes the deliveries?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Our trusted runners deliver all orders. All runners are screened and go through a training program before they begin to deliver your orders.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            What do I do if I need to contact my runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Your runner is just a text away! Once your order is received your runner will contact you via text message to verify your order.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Should I tip my runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>At time of payment you will be given a suggested tip based off of distanced traveled and cost of items purchased. You can adjust it to be whatever you want.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Can I become a runner?\n          </ion-card-header>\n          <ion-card-content>\n            <p>Absolutely! We’re always looking for outgoing and friendly people to join our quickly growing delivery team. We work around your schedule. Runners make an average of $8 to $15 an hour. All tips are yours to keep.</p>\n            <p>To be a runner, you must be 18 years or older, have a compatible smart phone with data, own a reliable means of transportation (car \'recommended\', bike, scooter, or motorcycle), and have a clean record.</p>\n            <p>To apply, shoot us a message using our Contact Us form.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/frequently-asked-questions/frequently-asked-questions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FrequentlyAskedQuestionsPage);

//# sourceMappingURL=frequently-asked-questions.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactUsModule = (function () {
    function ContactUsModule() {
    }
    return ContactUsModule;
}());
ContactUsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]
        ]
    })
], ContactUsModule);

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsPage = (function () {
    function ContactUsPage(navCtrl, navParams, contactProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.message = new __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */]();
    }
    ContactUsPage.prototype.sendMessage = function () {
        this.contactProvider.post(this.message);
    };
    return ContactUsPage;
}());
ContactUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact-us',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/contact-us/contact-us.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="text-center">Send us a message and we\'ll get back to you as soon as possible.</div>\n  <div class="form-container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input [(ngModel)]=\'message.name\'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="message.email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phone" [(ngModel)]="message.phone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>How can we help?</ion-label>\n            <ion-textarea [(ngModel)]="message.body"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full (click)="sendMessage()">SEND MESSAGE</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="form-overlay form-busy" [ngClass]="{\'form-busy\': (contactProvider.isSubmitting() | async) }">\n      <div class="message-container" *ngIf="(contactProvider.isSubmitting() | async)">Sending Message...</div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/contact-us/contact-us.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]])
], ContactUsPage);

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(79);
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






var ContactProvider = (function () {
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
        this.http.post(this.config.baseApiOrderUrl + this.config.environment + this.config.contactUsEndpoint, message, {})
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
                isSubmitting: true
            });
            //todo
        });
    };
    ContactProvider.prototype.isSubmitting = function () {
        return this.messageState.map(function (messageState) { return messageState.isSubmitting; });
    };
    return ContactProvider;
}());
ContactProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
], ContactProvider);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServiceModule", function() { return TermsOfServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_of_service__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsOfServiceModule = (function () {
    function TermsOfServiceModule() {
    }
    return TermsOfServiceModule;
}());
TermsOfServiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__terms_of_service__["a" /* TermsOfServicePage */]
        ]
    })
], TermsOfServiceModule);

//# sourceMappingURL=terms-of-service.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = (function () {
    function TermsOfServicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return TermsOfServicePage;
}());
TermsOfServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms-of-service',template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Terms</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="col-12">\n    <div class="row text-center">\n      <div class="col-lg-8 offset-lg-2 col-12">\n        <h1>Privacy Policy & Terms of Service</h1>\n        <p>Welcome to Get Me That Delivery! We are happy you are interested in having food and other items brought to you by our Runners, but first we have some legal items to go over.</p>\n      </div>\n    </div>\n    <p>Privacy Policy.</p>\n    <p>What Personal Information Does Get Me That Delivery Collect?</p>\n    <p>Personal Information You Provide to Us:</p>\n    <p>We receive and store any information you enter on our Service or provide to us in any other way. The types of Personal Information collected may include your name, email address, phone number, birthday, Twitter and/or Facebook usernames, use information regarding your use of our Service, and browser information. We automatically receive your location when you use the Service. The Personal Information you provide is used for such purposes as allowing you to set up a user account and profile that can be used to interact with other users through the Service, improving the content of the service.</p>\n    <p>Information Collected Automatically:</p>\n    <p>When you use the Service, Get Me That Delivery automatically receives and records information on our server logs from your browser or mobile platform, including your location, IP address, cookie information, and the page you requested. We treat this data as non-Personal Information, except where we are required to do otherwise under applicable law. Get Me That Delivery only uses this data in aggregate form. We may provide aggregate information to our partners about how our customers, collectively, use our site, so that our partners may also understand how often people use their services and our Service.</p>\n    <p>How is My Information Shared?</p>\n    <p>Runners: Your “Runners”</p>\n    <p>Runners can see your address, first name, last name, phone number and photo. Individuals reading this information may use it or disclose it to other individuals or entities without our control and without your knowledge. We therefore urge you to think carefully about including any specific information you may deem private.</p>\n    <p>Agents</p>\n    <p>We have other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you. Our agents do not have any right to use Personal Information we share with them beyond what is necessary to assist us, and they provide a comparable level of protection for your Personal Information.</p>\n    <p>Information Shared with Everyone</p>\n    <p>One of the primary reasons people use Get Me That Delivery is to share content with others. Information such as your name and photo, your hometown, your badges, a list of your friends, and Get Me That Delivery requests are shared with the Get Me That Delivery community.</p>\n    <p>Payment</p>\n    <p>We do not collect or store your payment information. Instead, we use Square, Inc. to process all payments for services provided through this Site. Thus, if you are a Customer, you will make payments using Square, Inc.; and if you are a Courier, you will receive your compensation payments through a verified bank account on Square, Inc. The payment information that you provide will be collected and stored by Square, Inc. subject to its privacy policy and terms of use. For more information, visit Squareup.com.</p>\n    <p>What About Cookies and Similar Technologies?</p>\n    <p>Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your browser to enable our systems to recognize your browser and tell us how and when pages in our site are visited and by how many people. Get Me That Delivery cookies do not collect Personal Information, and we do not combine the general information collected through cookies with other Personal Information to tell us who you are or what your email address is.</p>\n    <p>Is Personal Information About Me Secure?</p>\n    <p>Your Get Me That Delivery account Personal Information is protected by a password for your privacy and security. You need to prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately, and limiting access to your computer and browser by signing off after you have finished accessing your account. Get Me That Delivery endeavors to safeguard user information to ensure that user account information is kept private. However, Get Me That Delivery cannot guarantee the security of user account information. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time.</p>\n    <p>What Personal Information Can I Access?</p>\n    <p>Get Me That Delivery allows you to access the following information about you for the purpose of viewing, and in certain situations, updating that information and ensuring that it is accurate and complete. You can access this information on the Get Me That Delivery website (except usage information, which can be accessed in the “History” tab). This list will change as our Service changes.</p>\n    <ul>\n      <li>Password</li>\n      <li>Phone number</li>\n      <li>Email address</li>\n      <li>Other User profile information (for example, home city, photo)</li>\n    </ul>\n    <p>Will There Be Changes To This Privacy Policy?</p>\n    <p>Get Me That Delivery may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used.</p>\n    <p>What If I Have Questions Or Concerns?</p>\n    <p>If you have any questions or concerns regarding privacy using the Service, please send a detailed message to: getmethatdelivery@gmail.com. We will make every effort to resolve your concerns.</p>\n    <p>Terms of Use</p>\n    <p>The terms and conditions stated herein (collectively, the “Agreement”) constitute a legal agreement between you and Get Me That Delivery Inc. By using or receiving any services supplied to you by Get Me That Delivery, whether via its website, www.iceburgdelivery.com, or through any other method, (collectively, the “Service”), and downloading, installing or using any associated software supplied by Get Me That Delivery which purpose is to enable you to use the Service (collectively, the “Software”), you hereby expressly acknowledge and agree to be bound by the terms and conditions of this Agreement, and any future amendments and additions to this Agreement as published from time to time at https://getmethatdelivery.com/#terms-of-service or through the Service.</p>\n    <p>In order to use the Service and the associated Software you must agree to the terms and conditions that are set out below as well as in our Privacy Policy. If you do not agree to the terms and conditions and our Privacy Policy, please stop using the Service and Software immediately.</p>\n    <p>Get Me That Delivery reserves the right to modify the terms and conditions of this Agreement or its policies relating to the Service or Software at any time, effective upon posting of an updated version of this Agreement on the Service or Software. You are responsible for regularly reviewing this Agreement. Continued use of the Service or Software after any such changes shall constitute your consent to such changes.</p>\n    <p>GET ME THAT DEILVERY DOES NOT PROVIDE LOGISTICS OR COURIER SERVICES, AND Get Me That Delivery IS NOT A LOGISTICS CARRIER. IT IS UP TO THE THIRD PARTY COURIER OR LOGISTICS PROVIDER, COURIER OR VEHICLE OPERATOR TO OFFER COURIER SERVICES WHICH MAY BE SCHEDULED THROUGH USE OF THE SOFTWARE OR SERVICE. GET ME THAT DELIVERY OFFERS INFORMATION AND A METHOD TO OBTAIN SUCH THIRD PARTY COURIER SERVICES, BUT DOES NOT AND DOES NOT INTEND TO PROVIDE COURIER SERVICES OR ACT IN ANY WAY AS A COURIER, AND HAS NO RESPONSIBILITY OR LIABILITY FOR ANY COURIER OTHER THAN STATED HEREIN SERVICES PROVIDED TO YOU BY SUCH THIRD PARTIES. GET ME THAT DELIVERY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE SERVICE.</p>\n    <p>Representations and Warranties</p>\n    <p>By using the Software or Services, you expressly represent and warrant that you are legally entitled to enter this Agreement. If you reside in a jurisdiction, which restricts the use of the Services because of age, or restricts the ability to enter into agreements such as this one due to age, you must abide by such age limits and you must not use the Software and Service. Without limiting the foregoing, the Service and Software is not available to children (persons under the age of 18). By using the Software or Services, you represent and warrant that you are at least 18 years old and in some cases at least 21 years old. By using the Software or the Services, you represent and warrant that you have the right, authority and capacity to enter into this Agreement and to abide by the terms and conditions of this Agreement. Your participation in using the Service and/or Software is for your sole, personal use. You may not authorize others to use your user status, and you may not assign or otherwise transfer your user account to any other person or entity. When using the Software or Service you agree to comply with all applicable laws from your home nation, the country, state and city in which you are present while using the Software or Service. You may only access the Services using authorized means. It is your responsibility to check to ensure you download the correct Software for your device. Get Me That Delivery is not liable if you do not have a compatible handset or if you have downloaded the wrong version of the Software for your handset. Get Me That Delivery reserves the right to terminate this Agreement should you be using the Service or Software with an incompatible or unauthorized device.</p>\n    <p>By using the Software or the Services, you agree that:</p>\n    <ul>\n      <li>You will only use the Service or Software for lawful purposes; you will not use the Services for sending or storing any unlawful or illegal material or for fraudulent purposes.</li>\n      <li>You will not use the Service or Software to cause nuisance, annoyance or inconvenience.</li>\n      <li>You will not impair the proper operation of the network.</li>\n      <li>You will not try to harm the Service or Software in any way whatsoever.</li>\n      <li>You will not copy, or distribute the Software or other content without written permission from Get Me That Delivery.</li>\n      <li>You will only use the Software and Service for your own use and will not resell it to a third party.</li>\n      <li>You will keep secure and confidential your account password or any identification we provide you which allows access to the Service.</li>\n      <li>You will provide us with whatever proof of identity we may reasonably request.</li>\n      <li>You will only use an access point or 3G/4G data account (AP) which you are authorized to use.</li>\n    </ul>\n    <p>License Grant & Restrictions</p>\n    <p>Get Me That Delivery hereby grants you a non-exclusive, non-transferable, right to use the Software and Service, solely for your own personal, non-commercial purposes, subject to the terms and conditions of this Agreement. All rights not expressly granted to you are reserved by Get Me That Delivery and its licensors. You shall not: license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Service or the Software in any way; modify or make derivative works based upon the Service or the Software; create Internet “links” to the Service or “frame” or “mirror” any Software on any other server or wireless or Internet-based device; reverse engineer or access the Software in order to build a competitive product or service build a product using similar ideas, features, functions or graphics of the Service or Software, or copy any ideas, features, functions or graphics of the Service or Software, or launch an automated program or script, including, but not limited to, web spiders, web crawlers, web robots, web ants, web indexers, bots, viruses or worms, or any program which may make multiple server requests per second, or unduly burdens or hinders the operation and/or performance of the Service or Software.</p>\n    <p>You may use the Software and Service only for your personal, non-commercial purposes and shall not:</p>\n    <ul>\n      <li>send spam or otherwise duplicative or unsolicited messages in violation of applicable laws;</li>\n      <li>send or store infringing, obscene, threatening, libelous, or otherwise unlawful or tortious material, including material harmful to children or violative of third party privacy rights;</li>\n      <li>send or store material containing software viruses, worms, Trojan horses or other harmful computer code, files, scripts, agents or programs;</li>\n      <li>interfere with or disrupt the integrity or performance of the Software or Service or the data contained therein attempt to gain unauthorized access to the Software or Service or its related systems or networks.</li>\n    </ul>\n    <p>Payment Terms</p>\n    <p>Get Me That Delivery may use a third party payment system to process any payments associated with your use of the Software or Service. As part of the payment process, you agree to be bound by any terms and conditions of such third party payment processors. Get Me That Delivery has no control over the content, sites, or terms and conditions of any third party payment processors. We have selected third party processors that are trusted in the payment processing industry, however, we are not responsible or liable under any cause of action for any security issues that may arise as a result of any third party payment processing sites.</p>\n    <p>Any fees, which Get Me That Delivery may charge you for the Software or Service, are due immediately and are non-refundable. This no refund policy shall apply at all times regardless of your decision to terminate your usage, our decision to terminate your usage, disruption caused to our Software or Service either planned, accidental or intentional, or any reason whatsoever. Get Me That Delivery reserves the right to determine final prevailing pricing. Please note the pricing information published on the website may not reflect the prevailing pricing.</p>\n    <p>Get Me That Delivery, at its sole discretion, can make promotional offers with different features and different rates to any of our customers. These promotional offers, unless made to you, shall have no bearing whatsoever on your offer or contract. Get Me That Delivery may change the fees for our Service or Software as we deem necessary for our business. We encourage you to check back at our website periodically if you are interested about how we charge for the Service of Software.</p>\n    <p>Intellectual Property Ownership</p>\n    <p>Get Me That Delivery alone (and its licensors, where applicable) shall own all right, title and interest, including all related intellectual property rights, in and to the Software and the Service and any suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by you or any other party relating to the Software or the Service. This Agreement is not a sale and does not convey to you any rights of ownership in or related to the Software or the Service, or any intellectual property rights owned by Get Me That Delivery . Get Me That Delivery name, Get Me That Delivery logo, and the product names associated with the Software and Service are trademarks of Get Me That Delivery or third parties, and no right or license is granted to use them. Unless expressly granted in this Agreement, all intellectual property rights are expressly reserved by Get Me That Delivery.</p>\n    <p>Third Party Interactions</p>\n    <p>During use of the Software and Service, you may enter into correspondence with, purchase goods and/or services from, or participate in promotions of third party service providers, advertisers or sponsors showing their goods and/or services through the Software or Service. Any such activity, and any terms, conditions, warranties or representations associated with such activity, is solely between you and the applicable third-party. Get Me That Delivery and its licensors shall have no liability, obligation or responsibility for any such correspondence, purchase, transaction or promotion between you and any such third-party. Get Me That Delivery does not endorse any sites on the Internet that are linked through the Service or Software, and in no event shall Get Me That Delivery or its licensors be responsible for any content, products, services or other materials on or available from such sites or third party providers. Get Me That Delivery provides the Software and Service to you pursuant to the terms and conditions of this Agreement. You recognize, however, that certain third-party providers of goods and/or services may require your agreement to additional or different terms and conditions prior to your use of or access to such goods or services, and Get Me That Delivery disclaims any and all responsibility or liability arising from such agreements between you and the third party providers.</p>\n    <p>Get Me That Delivery may rely on third party advertising and marketing supplied through the Software or Service and other mechanisms to subsidize the Software or Service. By agreeing to these terms and conditions you agree to receive such advertising and marketing. If you do not want to receive such advertising you should notify us in writing. Get Me That Delivery reserves the right to charge you a higher fee for the Services or Software should you choose not to receive these advertising services. This higher fee, if applicable, will be posted on Get Me That Delivery website located at http://www. IceburgDelivery.com. Get Me That Delivery may compile and release information regarding you and your use of the Software or Service on an anonymous basis as part of a customer profile or similar report or analysis you agree that it is your responsibility to take reasonable precautions in all actions and interactions with any third party you interact with through the Service.</p>\n    <p>Indemnification</p>\n    <p>By entering into this Agreement and using the Software or Service, you agree that you shall defend, indemnify and hold Get Me That Delivery, its licensors and each such party’s parent organizations, subsidiaries, affiliates, officers, directors, members, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs) arising out of or in connection with: (a) your violation or breach of any term of this Agreement or any applicable law or regulation, whether or not referenced herein; (b) your violation of any rights of any third party, including providers of courier services arranged via the Service or Software, or (c) your use or misuse of the Software or Service.</p>\n    <p>Disclaimer of Warranties</p>\n    <p>USE OF THE SERVICE AND SOFTWARE IS ENTIRELY AT YOUR OWN RISK.</p>\n    <p>GET ME THAT DEILVERY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, AVAILABILITY, ACCURACY OR COMPLETENESS OF THE SERVICE OR SOFTWARE. GET ME THAT DELIVERY DOES NOT REPRESENT OR WARRANT THAT (A) THE USE OF THE SERVICE OR SOFTWARE WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B) THE SERVICE OR SOFTWARE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) ANY STORED DATA WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (E) ERRORS OR DEFECTS IN THE SERVICE OR SOFTWARE WILL BE CORRECTED, OR (F) THE SERVICE OR THE SERVER(S) THAT MAKE THE SERVICE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE SERVICE AND SOFTWARE IS PROVIDED TO YOU STRICTLY ON AN “AS IS” BASIS. ALL CONDITIONS, REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS, ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BY GET ME THAT DELIVERY. GET ME THAT DELIVERY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE RELIABILITY, SAFETY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF ANY SERVICES, PRODUCTS OR GOODS OBTAINED BY THIRD PARTIES THROUGH THE USE OF THE SERVICE OR SOFTWARE. YOU ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SOFTWARE AND SERVICE, AND ANY THIRD PARTY SERVICES OR PRODUCTS REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>\n    <p>Internet Delays</p>\n    <p>GET ME THAT DELIVERY SERVICE AND SOFTWARE MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS. GET ME THAT DELIVERY IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH PROBLEMS.</p>\n    <p>Limitation of Liability</p>\n    <p>IN NO EVENT SHALL Get Me That Delivery ’s AGGREGATE LIABILITY EXCEED THE AMOUNTS ACTUALLY PAID BY AND/OR DUE FROM YOU IN THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM. IN NO EVENT SHALL GET ME THAT DELIVERY AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING PERSONAL INJURY, LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE). GET ME THAT DELIVERY AND/OR ITS LICENSORS SHALL NOT BE LIABLE FOR ANY LOSS, DAMAGE OR INJURY WHICH MAY BE INCURRED BY YOU, INCLUDING BY NOT LIMITED TO LOSS, DAMAGE OR INJURY ARISING OUT OF, OR IN ANY WAY CONNECTED WITH THE SERVICE OR SOFTWARE, INCLUDING BUT NOT LIMITED TO THE USE OR INABILITY TO USE THE SERVICE OR SOFTWARE, ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY THIRD PARTY SERVICE PROVIDER, ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE WEBSITE OR IS REFERRED BY THE SERVICE OR SOFTWARE, EVEN IF Get Me That Delivery AND/OR ITS LICENSORS HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>\n    <p>GET ME THAT DELIVERY MAY INTRODUCE YOU TO THIRD PARTY COURIERS FOR THE PURPOSES OF PROVIDING COURIER SERVICES. WE WILL NOT ASSESS THE SUITABILITY, LEGALITY OR ABILITY OF ANY THIRD PARTY COURIERS AND YOU EXPRESSLY WAIVE AND RELEASE GET ME THAT DLIVERY FROM ANY AND ALL ANY LIABILITY, CLAIMS OR DAMAGES ARISING FROM OR IN ANY WAY RELATED TO THE THIRD PARTY COURIERS. GET ME THAT DELIVERY WILL NOT BE A PARTY TO DISPUTES, NEGOTIATIONS OF DISPUTES BETWEEN YOU AND SUCH THIRD PARTY PROVIDERS. WE CANNOT AND WILL NOT PLAY ANY ROLE IN MANAGING PAYMENTS BETWEEN YOU AND THE THIRD PARTY PROVIDERS. RESPONSIBILITY FOR THE DECISIONS YOU MAKE REGARDING SERVICES OFFERED VIA THE SOFTWARE OR SERVICE (WITH ALL ITS IMPLICATIONS) RESTS SOLELY WITH YOU. WE WILL NOT ASSESS THE SUITABILITY, LEGALITY OR ABILITY OF ANY SUCH THIRD PARTIES AND YOU EXPRESSLY WAIVE AND RELEASE GET ME THAT DELIVERY FROM ANY AND ALL LIABILITY, CLAIMS, CAUSES OF ACTION, OR DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE OR SERVICE, OR IN ANY WAY RELATED TO THE THIRD PARTIES INTRODUCED TO YOU BY THE SOFTWARE OR SERVICE. YOU EXPRESSLY WAIVE AND RELEASE ANY AND ALL RIGHTS AND BENEFITS UNDER SECTION 1542 OF THE CIVIL CODE (OR ANY ANALOGOUS LAW OF ANY STATE), WHICH READS AS FOLLOWS: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM, MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.”</p>\n    <p>THE QUALITY OF THE COURIER SERVICES SCHEDULED THROUGH THE USE OF THE SERVICE OR SOFTWARE IS ENTIRELY THE RESPONSIBILITY OF THE THIRD PARTY PROVIDER WHO ULTIMATELY PROVIDES SUCH COURIER SERVICES TO YOU. YOU UNDERSTAND, THEREFORE, THAT BY USING THE SOFTWARE AND THE SERVICE, YOUR SHIPMENTS MAY BE EXPOSED TO SITUATIONS THAT ARE POTENTIALLY DANGEROUS, OFFENSIVE, HARMFUL TO MINORS, UNSAFE OR OTHERWISE OBJECTIONABLE, AND THAT YOU USE THE SOFTWARE AND THE SERVICE AT YOUR OWN RISK.</p>\n    <p>Notice</p>\n    <p>Get Me That Delivery may give notice by means of a general notice on the Service, electronic mail to your email address on record in Get Me That Delivery account information, or by written communication sent by first class mail or pre-paid post to your address on record in Get Me That Delivery account information. Such notice shall be deemed to have been given upon the expiration of 48 hours after emailing or posting 12 hours after sending (if sent by email). You may give notice to Get Me That Delivery (such notice shall be deemed given when received by Get Me That Delivery ) at any time by any of the following: letter sent by confirmed facsimile to Get Me That Delivery at the following email or phone number (whichever is appropriate): (307) 655- 6733; Iceburgdelivery@gmail.com addressed to the attention of: Chief Executive Officer.</p>\n    <p>Assignment</p>\n    <p>This Agreement may not be assigned by you without the prior written approval of Get Me That Delivery but may be assigned without your consent by Get Me That Delivery to:</p>\n    <ul>\n      <li>a parent or subsidiary</li>\n      <li>an acquirer of assets</li>\n      <li>a successor by merger</li>\n      <li>Any purported assignment by you in violation of this section shall be void.</li>\n    </ul>\n    <p>General</p>\n    <p>This Agreement shall be governed by law, without regard to the choice or conflicts of law provisions of any jurisdiction, and any disputes, actions, claims or causes of action arising out of or in connection with this Agreement or the Service or Software shall be subject to the exclusive jurisdiction of the state and federal courts. No joint venture, partnership, employment, or agency relationship exists between you, Get Me That Delivery or any third party provider as a result of this Agreement or use of the Service or Software. If any provision of the Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law. The failure of Get Me That Delivery to enforce any right or provision in this Agreement shall not constitute a waiver of such right or provision unless acknowledged and agreed to by Get Me That Delivery in writing. This Agreement, comprises the entire agreement between you and Get Me That Delivery and supersedes all prior or contemporaneous negotiations, discussions or agreements, whether written or oral, between the parties regarding the subject matter contained herein.</p>\n    <p>Your continued use of the Service and Software indicates your acceptance of the above terms and conditions as well as in our Privacy Policy.</p>\n    <p>Thanks for using Get Me That Delivery!</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/pages/terms-of-service/terms-of-service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TermsOfServicePage);

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_order_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_it_works_how_it_works_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_frequently_asked_questions_frequently_asked_questions_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_of_service_terms_of_service_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_order_order__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_config_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_state_state__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/order/order.module#OrderModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/how-it-works/how-it-works.module#HowItWorksModule', name: 'HowItWorksPage', segment: 'how-it-works', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequently-asked-questions/frequently-asked-questions.module#FrequentlyAskedQuestionsModule', name: 'FrequentlyAskedQuestionsPage', segment: 'frequently-asked-questions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-us/contact-us.module#ContactUsModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-of-service/terms-of-service.module#TermsOfServiceModule', name: 'TermsOfServicePage', segment: 'terms-of-service', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_order_order_module__["OrderModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_how_it_works_how_it_works_module__["HowItWorksModule"],
            __WEBPACK_IMPORTED_MODULE_9__pages_frequently_asked_questions_frequently_asked_questions_module__["FrequentlyAskedQuestionsModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us_module__["ContactUsModule"],
            __WEBPACK_IMPORTED_MODULE_11__pages_terms_of_service_terms_of_service_module__["TermsOfServiceModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__["a" /* ContactProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    Order.prototype.clear = function () {
        this.recipientName = null;
        this.recipientEmail = null;
        this.recipientPhone = null;
        this.recipientAddress = null;
        this.sourceName = null;
        this.orderDescription = null;
    };
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_order_order__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_how_it_works_how_it_works__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_frequently_asked_questions_frequently_asked_questions__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_us_contact_us__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terms_of_service_terms_of_service__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Place An Order', component: __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */], name: 'OrderPage' },
            { title: 'How It Works', component: __WEBPACK_IMPORTED_MODULE_5__pages_how_it_works_how_it_works__["a" /* HowItWorksPage */], name: 'HowItWorksPage' },
            { title: 'Frequently Asked Questions', component: __WEBPACK_IMPORTED_MODULE_6__pages_frequently_asked_questions_frequently_asked_questions__["a" /* FrequentlyAskedQuestionsPage */], name: 'FrequentlyAskedQuestionsPage' },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_us_contact_us__["a" /* ContactUsPage */], name: 'ContactUsPage' },
            { title: 'Terms', component: __WEBPACK_IMPORTED_MODULE_8__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */], name: 'TermsOfServicePage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if ((this.platform.is('core') || this.platform.is('mobileweb'))) {
            this.nav.push(page.name); // this seems to be a hack, using to update the url
        }
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ryanwillmore/code/get-me-that-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title class="text-center"><strong>GET ME THAT DELIVERY</strong></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ryanwillmore/code/get-me-that-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
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



var ConfigProvider = (function () {
    function ConfigProvider(http) {
        this.http = http;
        this.feeAmount = 7;
        this.mainPhoneNumber = '425-835-1666';
        this.baseApiOrderUrl = 'https://2vv8rth4gd.execute-api.us-east-2.amazonaws.com';
        this.environment = '/prod';
        this.stateEndpoint = '/state';
        this.orderEndpoint = '/order';
        this.contactUsEndpoint = '/contact-us';
        this.orderSuccessMessage = 'Thanks for your order! A runner will send you a text shortly and coordinate your delivery.';
        this.orderSuccessMessageDuration = 10000;
        this.contactUsSuccessMessage = 'Message sent!';
        this.contactUsSuccessMessageDuration = 5000;
    }
    return ConfigProvider;
}());
ConfigProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ConfigProvider);

//# sourceMappingURL=config.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map