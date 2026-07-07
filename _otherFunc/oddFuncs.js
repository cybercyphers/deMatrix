import crypto from 'crypto';
import axios from 'axios';


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

      return { data : decrypted };
      
}catch(err){ failed(err)}

}





const tiktokStalk =async(user) =>{
    console.log(`\x1b[35m NOTE : no information is generated at times if that user account is private for privacy reasons...\x1b[0m`);
       if(!user){
          return logErr("The username is required to get an accurate information about that users tiktok account legally...") 

       };
    
    const request = await axios.get(`https://panel-cyphers.nett.to/cyphers/tiktokStalk?user=${ user }`);
    const response = request.data;
      return  { data :response };
}



const apk = async(name) =>{
  if(!name){
   return logErr(`The apk name to fetch is required...`);
} 
    const request = await fetch(`https://panel-cyphers.nett.to/cyphers/apk?name=${name}`);
     const response = await request.json();
   
    return  { data : response };
};




const github = async(Url, typeOfInfo)=>{
   if(!Url){
    return logErr("The github url to get the information about was nt given");      
}
    if(typeOfInfo !== 'zip' || typeOfInfo !== 'json'){
   return logErr('The type of info can only   "json" or "zip"')
}
    const info = await fetch(`https://panel-cyphers.nett.to/cyphers/github?url=${ Url}&type=${typeOfInfo}`)
    
    const response = await info.json();
    
    return  { data : response };
    
}




const programming = async() =>{
  const request = await fetch("https://panel-cyphers.nett.to/cyphers/programming",);
    
    const response = await request.json();
    return  { data : response.data };

}



export {
        failed,
    logErr,
    encrypt,
    decrypt,
tiktokStalk,
    apk,
    github,
        programming
};
