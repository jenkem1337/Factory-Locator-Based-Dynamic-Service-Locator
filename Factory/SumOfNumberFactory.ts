import IFactory from "../IFactory";
import SumOfNumbers from "../Services/SumOfNumbers";

export default class SumOfNumberFactory implements IFactory<SumOfNumbers>{
    CreateInstance(): SumOfNumbers {
        return new SumOfNumbers()
    }
    
}
