import axios from 'axios';
import fetch from  'node-fetch';

const route = "https://panel-cyphers.nett.to/cyphers"

async function uncensoredAi(prompt){
    const request = await fetch(`${route}/veniceUncensored?prompt=${encodeURIComponent(prompt)}`);
    const response = await request.json();
     console.log(response)

}
export default uncensoredAi;
