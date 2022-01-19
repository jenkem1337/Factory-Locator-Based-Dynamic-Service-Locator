export default class ArrayPushService{
    private static instance:ArrayPushService
    private arr: Array<any> = [] 
    private constructor(){}
    public static getInstance():ArrayPushService{
        if(!ArrayPushService.instance){
            ArrayPushService.instance = new ArrayPushService
        }
        return ArrayPushService.instance
    }

    public addSomething(something:any){
        this.arr.push(something)
    }
    public getAll(){
        this.arr.forEach(i => console.log(i))
    }
}
