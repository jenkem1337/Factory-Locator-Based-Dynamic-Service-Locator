import Singleton from '../Singleton';
export default interface ISingletonFactory<F extends Singleton>{
    CreateSingletonInstance(): F
}
