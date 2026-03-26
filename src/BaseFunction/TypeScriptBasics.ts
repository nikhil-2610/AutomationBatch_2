class TypeScriptBasics {
    text! : string;
    greet():void{
        console.log(`${this.text}`);
    }
}

let t1 = new TypeScriptBasics();
t1.text = "Hello world";
t1.greet();