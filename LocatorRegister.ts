import FactoryLocator from "./FactoryLocator"
import { ServiceName } from "./ServiceName"
import ArrayPushServiceSingletonFactory from './Factory/ArrayPushServiceSingletonFactory';
import RandomNumberSerivceFactory from "./Factory/RandomNumberServiceFactory";
import SumOfNumberFactory from "./Factory/SumOfNumberFactory";
import RandomNumberSerivceSingletonFactory from './Factory/RandomNumberServiceSingletonFactory';
import ABCServiceSingletonFactory from "./Factory/ABCFactory";

export let factoryLocator = new FactoryLocator()
factoryLocator.SaveInstance(ServiceName.RANDOM_NUMBER_SERVICE, RandomNumberSerivceFactory)
factoryLocator.SaveInstance(ServiceName.SUM_OF_NUMBER, SumOfNumberFactory)
factoryLocator.SaveSingletonInstance(ServiceName.ARRAY_PUSH_SERVICE, ArrayPushServiceSingletonFactory)
factoryLocator.SaveSingletonInstance(ServiceName.RANDOM_NUMBER_SERVICE, RandomNumberSerivceSingletonFactory)
factoryLocator.SaveSingletonInstance(ServiceName.ABC, ABCServiceSingletonFactory)

