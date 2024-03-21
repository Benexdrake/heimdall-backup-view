import ChannelCard from "@/components/channel/card";
import { get_channels } from "@/services/channel";
import { get_guild } from "@/services/guild";
import { Channel } from "@/types/channel";

export default function Guild(props: any) {
    let guild = props.guild;

  return (
    <>
      <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem'}}>
        {guild.channels.map((x:Channel) => {
            return (
                <ChannelCard channel={x}/>
            )
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(ctx:any) {
    const id = ctx.params.id
    let guild = await get_guild(id)
    guild.channels = await get_channels(id)

  return {
    props: {guild}
  }
}