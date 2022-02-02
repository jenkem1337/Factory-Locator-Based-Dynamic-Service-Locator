import FactoryLocator from './FactoryLocator';
import SumOfNumbers from "./Services/SumOfNumbers"
import RandomNumberService from './Services/RandomNumberService';
import { ServiceName } from "./ServiceName";
import ArrayPushService from './Services/ArrayPushService';
import { factoryLocator } from './LocatorRegister';
import ABCService from './Services/ABCSingletonService';


FactoryLocator.setLocator(factoryLocator)

let sumOfNumbers        = FactoryLocator.CreateInstance<SumOfNumbers>(ServiceName.SUM_OF_NUMBER)
let randomNumberService = FactoryLocator.CreateInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let randomNumSingleton  = FactoryLocator.CreateSingletonInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let randomNumSingleton2 = FactoryLocator.CreateSingletonInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let arrayPushService    = FactoryLocator.CreateSingletonInstance<ArrayPushService>(ServiceName.ARRAY_PUSH_SERVICE) 
let arrayPushService2   = FactoryLocator.CreateSingletonInstance<ArrayPushService>(ServiceName.ARRAY_PUSH_SERVICE)
let ABC                 = FactoryLocator.CreateSingletonInstance<ABCService>(ServiceName.ABC)

console.log(`return ${arrayPushService === arrayPushService2} becouse of both singleton`) // => return true 



console.log(sumOfNumbers.getSum([1,2,3,4,5,6,7,8,9,55])) // => sum result is 100
console.log(randomNumberService.getRandomNumber()) // => random number is ******
console.log(`return ${randomNumberService === randomNumSingleton} becouse of both arent singleton`) // =>  return false 
console.log(`return ${randomNumSingleton  === randomNumSingleton2} becouse of both singleton` ) // => return true 
console.log(randomNumSingleton.getRandomNumber())
console.log(randomNumSingleton2.getRandomNumber())
                            
arrayPushService2.addSomething(1337)
arrayPushService2.addSomething('afajfsaa')
arrayPushService2.addSomething(34567890)
arrayPushService2.addSomething('Merhaba dünya')


arrayPushService.getAll() /* arrayPushService return like below
                            0 =>    1337
                            1 =>    afajfsaa
                            2 =>    34567890
                            3 =>    Merhaba dünya
                            */
console.log(ABC.getABC())
