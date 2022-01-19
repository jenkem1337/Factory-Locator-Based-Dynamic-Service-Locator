import FactoryLocator from './FactoryLocator';
import SumOfNumbers from "./Services/SumOfNumbers"
import RandomNumberService from './Services/RandomNumberService';
import { ServiceName } from "./ServiceName";
import ArrayPushService from './Services/ArrayPushService';
import { factoryLocator } from './LocatorRegister';


FactoryLocator.setLocator(factoryLocator)

let sumOfNumbers        = FactoryLocator.CreateInstance<SumOfNumbers>(ServiceName.SUM_OF_NUMBER)
let randomNumberService = FactoryLocator.CreateInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let randomNumSingleton  = FactoryLocator.CreateSingletonInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let randomNumSingleton2 = FactoryLocator.CreateSingletonInstance<RandomNumberService>(ServiceName.RANDOM_NUMBER_SERVICE)
let arrayPushService    = FactoryLocator.CreateSingletonInstance<ArrayPushService>(ServiceName.ARRAY_PUSH_SERVICE) 

console.log(sumOfNumbers.getSum([1,2,3,4,5,6,7,8,9,55])) // => sum result is 100
console.log(randomNumberService.getRandomNumber()) // => random number is ******
console.log(`return ${randomNumberService === randomNumSingleton} becouse of both arent singleton`) // =>  return false 
console.log(`return ${randomNumSingleton  === randomNumSingleton2} becouse of both singleton` ) // => return true 


arrayPushService.addSomething(1337)
arrayPushService.addSomething('afajfsaa')
arrayPushService.addSomething(34567890)
arrayPushService.addSomething('Merhaba dünya')

let arrayPushService2 = FactoryLocator.CreateSingletonInstance<ArrayPushService>(ServiceName.ARRAY_PUSH_SERVICE)
console.log(`return ${arrayPushService === arrayPushService2} becouse of both singleton`) // => return true 

arrayPushService2.getAll() /* arrayPushService2 return like below
                            0 =>    1337
                            1 =>    afajfsaa
                            2 =>    34567890
                            3 =>    Merhaba dünya
                            */