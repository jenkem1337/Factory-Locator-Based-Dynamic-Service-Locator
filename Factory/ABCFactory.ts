import ABCService from '../Services/ABCSingletonService';
import ISingletonFactory from './ISingletonFactory';
export default class ABCServiceSingletonFactory implements ISingletonFactory<ABCService>{
    CreateSingletonInstance(): ABCService {
        return ABCService.getInstance()
    }

}