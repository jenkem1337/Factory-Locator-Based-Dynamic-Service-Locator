import Singleton from '../Singleton';
export default class ArrayPushService extends Singleton{
    private arr: Array<any> = [] 
    public constructor(){
        super()
    }
    public static getInstance():ArrayPushService{
        return this.createSingletonInstance(this)
    }

    public addSomething(something:any){
        this.arr.push(something)
    }
    public getAll(){
        this.arr.forEach(i => console.log(i))
    }
}
