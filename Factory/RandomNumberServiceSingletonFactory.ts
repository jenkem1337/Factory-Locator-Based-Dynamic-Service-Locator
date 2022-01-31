import ISingletonFactory from './ISingletonFactory';
import RandomNumberService from '../Services/RandomNumberService';
export default class RandomNumberSerivceSingletonFactory implements ISingletonFactory<RandomNumberService> {
    
    CreateSingletonInstance():RandomNumberService {
        return RandomNumberService.getInstance()
    }
}
