class DataGeneric {
    constructor(data) {
        this.data = data;
    }
    
    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataGeneric = new DataGeneric("Ganesha Rahman Gibran dengan nim : 2211104058");
dataGeneric.PrintData();
console.log("=== Code Execution Successful ===");