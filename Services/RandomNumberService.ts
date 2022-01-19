export default class RandomNumberService{
    private static instance: RandomNumberService
    
    public constructor(){}

    public static getInstance(): RandomNumberService {
        if(!RandomNumberService.instance){
            RandomNumberService.instance = new RandomNumberService()
        }
        return RandomNumberService.instance
    }

    public getRandomNumber(){
        return 'Rastgele sayı ' + Math.floor(Math.random() * 999999)
    }
}
