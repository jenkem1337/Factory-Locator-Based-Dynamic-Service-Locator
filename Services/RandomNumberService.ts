import Singleton from '../Singleton';
export default class RandomNumberService extends Singleton{
    
    public constructor(){
        super()
    }

    public static getInstance(): RandomNumberService {
        return this.createSingletonInstance(this)
    }

    public getRandomNumber(){
        return 'Rastgele sayı ' + Math.floor(Math.random() * 999999)
    }
}
