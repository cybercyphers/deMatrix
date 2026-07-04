import axios from 'axios';
import crypto from 'crypto';
import  {
 failed,
 logErr,
 encrypt,
    decrypt 
} from "./_otherFunc/oddFuncs.js";



console.log("\n\x1b[1;4;35mThank you for using me\n\x1b[0m");

const route = "https://panel-cyphers.nett.to/cyphers"

async function uncensoredAi(prompt){
    const request = await fetch(`${route}/veniceUncensored?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
  
    return response;

}

async function gpt3(prompt){
    try{
    if(!prompt){
        
  return logErr("The question body  is required...");
}
    
  const request =await fetch(`${route}/gpt3?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
      return response;
    } catch(e){
  failed(e)
}
};



async function bibleAi(prompt){
    try{
  if(!prompt){  
   logErr("The prompt is required...");
      return;
  };
    
    const request = await axios.get(`${route}/bibleAi?prompt=${encodeURIComponent(prompt)}`);
    
    const response = request.data;
        
     return { response : response.data};

    }catch(e){
   failed(e)
}
};


async function getEncryptionCredentials(){
    try{
       
 const request = await fetch(`${route}/getEncryptionCredentials`);
        const response = await request.json();
        const finalInfo = { Key : response.data.key+"\n",
            Iv : response.data.iv+"\n",
                          I_Info : response.data.Important_Info }
        return finalInfo;
    }catch(err){ failed(err) }
};









process.on("unhandledRejection",(r)=>{
   console.log(`\n\x1b[1;31mUnhandled Rejection => ${r}\n\x1b[0m`);
});


process.on("uncaughtException",(e)=>{
  console.log(`\x1b[31mUncaught Exception => ${e}\x1b[0m`);
});



var dematrix = {
uncensoredAi,
    gpt3,
    bibleAi,
    getEncryptionCredentials,
    encrypt,
    decrypt
};

export default dematrix;
