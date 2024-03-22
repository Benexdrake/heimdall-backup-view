import {get,post} from '@/lib/discord'
import { Channel } from "@/types/channel"

export async function get_channels(gid: string): Promise<Channel[]> {
    const channels = await get('https://discord.com/api/v9/guilds/' + gid + '/channels')
      .then((y) => y.filter((x: { id: string; name: string; topic: string }) => x.topic) // Keep only channels with a topic
        .map((x:any) => ({
          id: x.id,
          name: x.name,
          topic: x.topic,
        })));
  
    return channels;
  }