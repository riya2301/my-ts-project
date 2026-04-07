"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const IphoneObservable_1 = require("./observable/IphoneObservable");
const EmailNotificatiom_1 = require("./observers/EmailNotificatiom");
const mobileNotification_1 = require("./observers/mobileNotification");
class Store {
    init() {
        let iphoneObservable = new IphoneObservable_1.IphoneObservable();
        let emailNotification = new EmailNotificatiom_1.EmailNotification("test@test.com", iphoneObservable);
        let mobileNotification = new mobileNotification_1.MobileNotification("1234567890", iphoneObservable);
        iphoneObservable.addObserver(emailNotification);
        iphoneObservable.addObserver(mobileNotification);
        return iphoneObservable;
    }
}
exports.Store = Store;
exports.default = new Store();
