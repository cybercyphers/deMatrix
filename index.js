const axios = require('axios');
const crypto  = require('crypto');
const  {
 failed,
 logErr,
 encrypt,
    decrypt,
    tiktokStalk,
    apk,
    github,
 programming,
    getqr,
    formatCN,
    base64,
    uuid,
    cipher64,
    cipher64Decode
} = require("./_otherFunc/oddFuncs.js");


const route = "https://panel-cyphers.nett.to/cyphers"


async function uncensoredAi(prompt){
    const request = await fetch(`${route}/veniceUncensored?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
  
      return { data : response.data } 

}

async function gpt3(prompt){
    try{
    if(!prompt){
        
  return logErr("The question body or prompt is required...");
}
    
  const request =await fetch(`${route}/gpt3?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
      return  { data : response.data };
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


async function lyrics(song){
    if(!song){
        return logErr("The name of the song to get the lyrics is required")
    }
   const request = await fetch(`https://panel-cyphers.nett.to/cyphers/lyrics?name=${encodeURIComponent(song)}`);
    const response = await request.json();
      return { data : response.data };
    
};



const facts = async()=>{
    const request = await fetch("https://panel-cyphers.nett.to/cyphers/facts");
    const response = await request.json();
       return { data : response.data };
};



const iplookup = async(ip) =>{
    if(!ip){
        logErr("The ip to lookup is required.")
    };
      var addr = await fetch(`https://ipwho.is/${ip}`);
    const request = await addr.json();
      return request;
};







const hexToUtf = (hex) =>{
  if(!hex){
  logErr("Hex value not found..")
}
return       Buffer.from(hex,"hex").toString("utf8"); 
};





 class Ai{
  #web = `https://panel-cyphers.nett.to/cyphers`;
   
     
     //cypherAi from me fully loaded working and active 
    cypherAi  = {
       question :  async(prompt) =>{
           try{
           
         const request = await fetch(`${this.#web}/cypherAi?q=${prompt}`);
           const response = await request.json();
          return { response : response.data };
           }catch(err){
      logErr("Failed to get response");
}

  }
 }
    
     //gpt3 route from my server all set to use in class 
    gpt3 = {
       question : async(prompt) =>{
           try{
          const request = await fetch(`${this.#web}/gpt3?prompt=${prompt}`);
           const response = await request.json();
         return { response:response.data  };
           }catch(err){ logErr("Failed to get response")}
       }
       
  }
     //copilot route from my server...
     
     copilot  = {
         question : async(prompt)=>{
             try{
                  if(!prompt){ return logErr("The prompt was not given for copilot to respond...")}
                 const request = await fetch(`${this.#web}/cyphers/copilot?prompt${encodeURIComponent(prompt)}`)
                   const response = await request.json();
                       return { response : response.data };
             }catch(err){
                 return logErr("request failed with status code: ",500)
             }
             
         }
         
     }
     
     
     //Qwen ai 
     qwen ={
          question: async(prompt)=>{
              try{
              if(!prompt){

                  return logErr("The prompt was not given to get a response from qwen ai...")
              };
               const request = await fetch(`${this.#web}/qwen?prompt=${encodeURIComponent(prompt)}`);
                  
              const response = await request.json();
                   return { response : response.data };
              }catch(err){ logErr("The request failed...")}
              
          }
     }
     
     
     
               
}

const Ais = new Ai();
Ais.qwen.question("hello nigga").then(d=>console.log(d))



var dematrix = {
uncensoredAi,
    gpt3,
    bibleAi,
    getEncryptionCredentials,
    encrypt,
    decrypt,
    lyrics ,
    tiktokStalk,
    apk,
    github,
   programming,
    base64,
    uuid,
    iplookup
};



module.exports = {
        default : dematrix,
    formatCN,
    getqr,
    cipher64,
    cipher64Decode,
    Ai
}






/*process.on("unhandledRejection",(r)=>{
   console.log(`\n\x1b[1;31mUnhandled Rejection => ${r}\n\x1b[0m`);
});


process.on("uncaughtException",(e)=>{
  console.log(`\x1b[31mUncaught Exception => ${e}\x1b[0m`);
});*/
