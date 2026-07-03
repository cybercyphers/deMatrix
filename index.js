const axios = require('axios')
const { exec } = require("child_process");




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



 module.exports = uncensoredAi;

module.exports.gpt3 = gpt3;
