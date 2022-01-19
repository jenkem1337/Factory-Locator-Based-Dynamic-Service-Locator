import IFactory from "./IFactory"
import ISingletonFactory from "./ISingletonFactory"
import { ServiceName } from "./ServiceName"

export default class FactoryLocator {
    
    private services: Map<ServiceName, IFactory<any>> = new Map()
    private singletonServices: Map<ServiceName, ISingletonFactory<any>> = new Map()
    private static LocatorInstance:FactoryLocator
    public constructor(){}

    public static setLocator(locator: FactoryLocator):void{
        this.LocatorInstance = locator
    }

    public static CreateSingletonInstance<G>(serviceName: ServiceName):G{
        let instance = <ISingletonFactory<G>> this.LocatorInstance.singletonServices.get(serviceName)
        return instance?.CreateSingletonInstance()
    }
    public static CreateInstance<V>(serviceName: ServiceName):V{
        let concreate =  <IFactory<V>> this.LocatorInstance.services.get(serviceName)
        return concreate?.CreateInstance()
    }

    public SaveInstance<B>(serviceName: ServiceName, factoryClass : new() => IFactory<B> ):void{
        this.services.set(serviceName, new factoryClass)
    }

    public SaveSingletonInstance<T>(serviceName:ServiceName, singletonFactoryClass: new() => ISingletonFactory<T>){
        this.singletonServices.set(serviceName, new singletonFactoryClass)
    }


}
