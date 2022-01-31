export default abstract class Singleton{
    private static instance : Singleton
 

    public static createSingletonInstance<T>(childClass: new() => T):T{
        if(!Singleton.instance){
            Singleton.instance = new childClass
        }
        else if( !(Singleton.instance instanceof childClass) ){
            Singleton.instance = new childClass
        }
        return <T>Singleton.instance
    }

      
}