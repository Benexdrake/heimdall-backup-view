import {get,post} from '@/lib/discord'
import { Channel } from "@/types/channel"

export async function get_channels(gid:string) : Promise<Channel[]>
{
    let channels = await get('https://discord.com/api/v9/guilds/'+gid+'/channels').then(y => y.map((x: { id: string; name: string; topic: string }) => {
    let topic:string = ''
    if(x.topic)
    {
        topic = x.topic
    }    
    
    let channel:Channel = 
        {
            id:x.id,
            name:x.name,
            topic:topic
        }
        return channel
    }))
    return channels
}