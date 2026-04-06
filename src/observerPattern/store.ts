import { IphoneObservable } from "./observable/IphoneObservable";
import { EmailNotification } from "./observers/EmailNotificatiom";
import { MobileNotification } from "./observers/mobileNotification";
import { IStockObserver } from "./observers/stockObserver";

export class Store {
  
  init(): IphoneObservable {
    let iphoneObservable = new IphoneObservable();
    let emailNotification = new EmailNotification("test@test.com", iphoneObservable);
    let mobileNotification = new MobileNotification("1234567890", iphoneObservable);
    iphoneObservable.addObserver(emailNotification);
    iphoneObservable.addObserver(mobileNotification);
    return iphoneObservable;
  }
}

export default new Store();