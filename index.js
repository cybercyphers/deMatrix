require("ts-node").register();

const axios = require('axios')
const { exec } = require("child_process");
const failed = require("./_otherFunc/error.js");



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
}


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


getEncryptionKeys()


process.on("unhandledRejection",(r)=>{
   console.log(`\n\x1b[1;31mUnhandled Rejection => ${r}\n\x1b[0m`);
});


process.on("uncaughtException",(e)=>{
  console.log(`\x1b[31mUncaught Exception => ${e}\x1b[0m`);
});



 module.exports = uncensoredAi;
module.exports.gpt3 = gpt3;
