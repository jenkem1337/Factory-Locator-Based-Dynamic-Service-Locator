import IFactory from "./Factory/IFactory"
import ISingletonFactory from "./Factory/ISingletonFactory"
import { ServiceName } from "./ServiceName"
import Singleton from "./Singleton"

export default class FactoryLocator {
    
    private services: Map<ServiceName, IFactory<any>> = new Map()
    private singletonServices: Map<ServiceName, ISingletonFactory<any>> = new Map()
    private static LocatorInstance:FactoryLocator
    public constructor(){}

    public static setLocator(locator: FactoryLocator):void{
        this.LocatorInstance = locator
    }

    public static CreateSingletonInstance<G>(serviceName: ServiceName):G{
        if(!this.LocatorInstance.singletonServices.has(serviceName)){
            throw new Error('this singleton service does not exist')
        }
        let instance = <ISingletonFactory<G>> this.LocatorInstance.singletonServices.get(serviceName)
        return instance?.CreateSingletonInstance()
    }
    public static CreateInstance<V>(serviceName: ServiceName):V{
        if(!this.LocatorInstance.services.has(serviceName)){
            throw new Error('this service does not exist')
        }

        let instance =  <IFactory<V>> this.LocatorInstance.services.get(serviceName)
        return instance?.CreateInstance()
    }

    public SaveInstance<B>(serviceName: ServiceName, factoryClass : new() => IFactory<B> ):void{
        this.services.set(serviceName, new factoryClass)
    }

    public SaveSingletonInstance<T extends Singleton>(serviceName:ServiceName, singletonFactoryClass: new() => ISingletonFactory<T>){
        this.singletonServices.set(serviceName, new singletonFactoryClass)
    }
}
