import axios from 'axios';
import fetch from  'node-fetch';

console.log("\n\x1b[1;32mThank you for using me\n\x1b[0m")
const route = "https://panel-cyphers.nett.to/cyphers"

async function uncensoredAi(prompt){
    const request = await fetch(`${route}/veniceUncensored?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
     console.log(response)

}
export default uncensoredAi;
