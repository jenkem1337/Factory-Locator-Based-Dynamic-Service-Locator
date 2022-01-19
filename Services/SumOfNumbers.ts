export default class SumOfNumbers{
    
    public getSum(numberArr:Array<number>){
        let sum = 0
        numberArr.forEach(i => {
            sum +=i
        })
        return 'Sayıların toplamı '+ sum
    }
}

