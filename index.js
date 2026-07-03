const axios = require('axios')
const { exec } = require("child_process");
const {
 failed,
 logErr
} = require("./_otherFunc/oddFuncs.js");



console.log("\n\x1b[1;4;35mThank you for using me\n\x1b[0m")

const route = "https://panel-cyphers.nett.to/cyphers"

async function uncensoredAi(prompt){
    const request = await fetch(`${route}/veniceUncensored?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
     console.log(response)

}

async function gpt3(prompt){
  const request =await fetch(`${route}/gpt3?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
     console.log(response)
};



async function bibleAi(prompt){
    try{
  if(!prompt){  
   logErr("The prompt is required...");
      return;
  };
    
    const request = await axios.get(`${route}/bibleAi?prompt=${encodeURIComponent(prompt)}`);
    
    const response = request.data;
        
     console.log({ response : response.data} )

    }catch(e){
   failed(e)
}
};


async function getEncryptionKeys(){
    try{
       
 const request = await fetch(`${route}/getEncryptionCredentials`);
        const response = await request.json();
        const finalInfo = { Key : response.data.key+"\n",
            Iv : response.data.iv+"\n",
                          I_Info : response.data.Important_Info }
         console.log(finalInfo)
    }catch(err){ failed(err) }
}


bibleAi("What is a bible")




process.on("unhandledRejection",(r)=>{
   console.log(`\n\x1b[1;31mUnhandled Rejection => ${r}\n\x1b[0m`);
});


process.on("uncaughtException",(e)=>{
  console.log(`\x1b[31mUncaught Exception => ${e}\x1b[0m`);
});



 module.exports = uncensoredAi;
 module.exports.gpt3 =  gpt3;
 module.exports.bibleAi = bibleAi;
 module.exports.getEncryptionKeys = getEncryptionKeys;
                 
