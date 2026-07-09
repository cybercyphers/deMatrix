import crypto from 'crypto';
import axios from 'axios';
import qrcode from 'qrcode';

function failed(err){
        try{
    const errStack = err.message || err;
    const isObj = typeof errStack === "object" ? JSON.stringify(errStack) : String(errStack);

    console.error(`\x1b[1;31m${isObj}\x1b[0m`);
     return isObj;
        }catch(e){}
}



function logErr(error){  
  throw new Error(`\x1b[31m${error}\x1b[0m`);  
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




  function toBinary(data) {
    return [...Buffer.from(data)]
        .map(byte => byte.toString(2).padStart(8, "0"))
        .join("");
}

export function cipher128(data) {
    const patterns =   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/¥!@#$%^&*()[]{}<>?|:;,.=_-`'\"\\§±×÷€£¥¢©®™°µ¶¿¡αβγδεζηθικλμνξοπρστυφχψω";

    let binary = toBinary(data);
    let encoded = "";
  
    while (binary.length % 7 !== 0) {
        binary += "0";
    }
    for (let i = 0; i < binary.length; i += 7) {
        const chunk = binary.slice(i, i + 7);
      
        const index = parseInt(chunk, 2);
        encoded += patterns[index];
    }
    while (encoded.length % 8 !== 0) {
        encoded += "=";
    }

    return encoded;
}






export function cypher128Encode(data) {
    const alphabet =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/¥!@#$%^&*()[]{}<>?|:;,.=_-`'\"\\§±×÷€£¥¢©®™°µ¶¿¡αβγδεζηθικλμνξοπρστυφχψω";

    let binary = toBinary(data);
    let encoded = "";

    while (binary.length % 7 !== 0) {
        binary += "0";
    }

    for (let i = 0; i < binary.length; i += 7) {
        const chunk = binary.slice(i, i + 7);
        const index = parseInt(chunk, 2);
        encoded += alphabet[index];
    }

    return encoded;
}

export function cipher128Decode(data) {
    const alphabet =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/¥!@#$%^&*()[]{}<>?|:;,.=_-`'\"\\§±×÷€£¥¢©®™°µ¶¿¡αβγδεζηθικλμνξοπρστυφχψω";
    let binary = "";
    for (const char of data) {
        const index = alphabet.indexOf(char);

        if (index === -1) {
            throw new Error(`Invalid character: ${char}`);
        }
        binary += index.toString(2).padStart(7, "0");
    }
    const bytes = [];
    for (let i = 0; i + 8 <= binary.length; i += 8) {
        bytes.push(parseInt(binary.slice(i, i + 8), 2));
    }
    return Buffer.from(bytes).toString();
};






const programming = async() =>{
  const request = await fetch("https://panel-cyphers.nett.to/cyphers/programming",);
    
    const response = await request.json();
    return  { data : response.data };

};




const formatCN = (num) => {
    return new Intl.NumberFormat('en', { notation: 'compact' }).format(num);
};




export async function getqr(text, options = {}) {
    const {
        size = 200,
        color = '#000000',
        bgColor = '#FFFFFF',
        margin = 10
    } = options;
    
    /*const encoded = encodeURIComponent(text);
    const info = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}&margin=${margin}`, {
        responseType: 'arraybuffer'
    });
    
    const data = info.data;*/
    
    // Display QR in console
    const terminalQR = await qrcode.toString(text, {  small : true });
    return terminalQR
}






const md5 = (value)=>{
  if(!value){
   return logErr("The value to convert to md5 hash was not given...");
}
    const md5Hashed = crypto.createHash("md5").update(value).digest("hex");
      
    console.log({ data : md5Hashed });
  return { md5Hashed };
}




const base64 = (data)=>{
  if(!data){
      logErr("The value to convert to base64 was not given...")     
  };

    const _64 = crypto.createHash("SHA512").update(data).digest("base64");
     return _64;
    
};




const uuid =() =>{
    const uid = crypto.randomUUID();
     return uid;
}







export {
        failed,
    logErr,
    encrypt,
    decrypt,
tiktokStalk,
    apk,
    github,
     programming,
    formatCN,
    base64,
    uuid
};
