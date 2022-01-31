import Singleton from '../Singleton';
export default class ABCService extends Singleton{
    public static getInstance(){
        return this.createSingletonInstance(this)
    }
    public getABC(): string{
        return 'abc'
    }
}