import axios from "axios";

const headers = {
    Authorization: `Bot ${process.env.TOKEN}`
  };

export async function get(url:string) 
{
    return await axios.get(url, {headers}).then(x => {return x.data})
}

export async function post(url:string) 
{
    return await axios.post(url, {headers}).then(x => {return x.data})
}