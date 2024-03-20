import {get,post} from '@/lib/discord'
import { Guild } from "@/types/guild"

export async function get_guilds() 
{
    let gs = await get('https://discord.com/api/v9/users/@me/guilds')

    let guilds = []

    for (let g of gs)
    {
        let guild = await get_guild(g.id)
        guilds.push(guild)
    }
    return guilds
}

export async function get_guild(gid:string) 
{
    let {id, name, icon, description} = await get('https://discord.com/api/v9/guilds/'+gid)

    let guild:Guild = 
    {
        id:id,
        channels:[],
        name:name,
        icon: icon,
        description:description
    }
    return guild
}