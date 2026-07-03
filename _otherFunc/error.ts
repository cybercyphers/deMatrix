function failed(err):string{
        try{
    const errStack:any = err.stack || err.message; 
    const isObj:string = typeof errStack === "object" ? JSON.stringify(errStack) : String(errStack);

    console.error(`\x1b[1;31m${isObj}\x1b[0m`);
     return isObj;
        }catch(err){}
}



module.exports = failed;
