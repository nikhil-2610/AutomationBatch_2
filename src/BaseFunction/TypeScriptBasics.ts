class TypeScriptBasics {
    name! : string;
    greet():void{
        console.log(`Hello world! ${this.name}`);
    }
}

let t1 = new TypeScriptBasics();
t1.name = "Nikhil";
t1.greet();