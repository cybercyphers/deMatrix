import crypto from 'crypto';

function failed(err){
        try{
    const errStack = err.message || err;
    const isObj = typeof errStack === "object" ? JSON.stringify(errStack) : String(errStack);

    console.error(`\x1b[1;31m${isObj}\x1b[0m`);
     return isObj;
        }catch(e){}
}



function logErr(error){  
  console.log(`\x1b[31m${error}\x1b[0m`);  
};


    
    
const encrypt =(KEY,IV,DATA) =>{
    try{
  if(!KEY){
   return logErr("The Key was not given, call 'getEncryptionCredentials function' to get your new credentials for encryption.")
};
    if(!IV){
   return logErr("The Iv was not given, call 'getEncryptionCredentials function' to get your new credentials for encryption.")
};
   if(!DATA){
   return logErr("The body to ecrypt was not given...");
};
    
     
        const bufferKey = Buffer.from(KEY,"hex");
        
        const bufferIv = Buffer.from(IV,"hex");
        
    const cipher = crypto.createCipheriv("aes-256-cbc",bufferKey,bufferIv);
    
    let encrypted = cipher.update(DATA,"uft8","hex");
    
    encrypted += cipher.final("hex");
    
    return `\x1b[38mThe encrypted value is\x1b[0m $$ \x1b[1;32m${encrypted}\x1b[0m`;
    }catch(err){ failed(err)}
}


function decrypt(KEY,IV,DATA){
  try{
      
      if(!KEY){
   return logErr("The Key was not given, call 'getEncryptionCredentials function' to get your new credentials for encryption.")
};
    if(!IV){
   return logErr("The Iv was not given, call 'getEncryptionCredentials function' to get your new credentials for encryption.")
};
   if(!DATA){
   return logErr("The body to decrypt was not given...");
};
      
      const bufferKey = Buffer.from(KEY,"hex");
        
        const bufferIv = Buffer.from(IV,"hex");
      
      const decipher = crypto.createDecipheriv("aes-256-cbc",bufferKey,bufferIv);
      
  let decrypted = decipher.update(DATA,"hex","utf8");
      decrypted += decipher.final("utf8");

      
      return `\n\x1b[38mThe decrypted value is\x1b[0m $$ \x1b[1;32m${decrypted}\x1b[0m`;
}catch(err){ failed(err)}

}



export { 
    failed,
    logErr,
    encrypt,
    decrypt
}
