import ISingletonFactory from "../ISingletonFactory";
import ArrayPushService from "../Services/ArrayPushService";

export default class ArrayPushServiceSingletonFactory implements ISingletonFactory<ArrayPushService>{
    CreateSingletonInstance(): ArrayPushService {
        return ArrayPushService.getInstance()
    }
}
