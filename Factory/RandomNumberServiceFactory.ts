import IFactory from '../IFactory';
import RandomNumberService from '../Services/RandomNumberService';
export default class RandomNumberSerivceFactory implements IFactory<RandomNumberService>{
    public CreateInstance(): RandomNumberService {
        return new RandomNumberService
    }
}
