import { get_channels } from "@/services/channel";
import { get_guilds} from "@/services/guild";
import { Guild } from "@/types/guild";


export default function Home(props:any) {
  let guilds = props.guilds;

  return (
    <>
      <div>
        {guilds.map((x:Guild) => {
          return (
            <div key={x.id}>
          <h1>{x.name}</h1>
          <img src={'https://cdn.discordapp.com/icons/'+x.id+'/'+x.icon} alt="" />
          asdadssd
        </div>
      )
      })}
      </div>
    </>
  );
}

export async function getServerSideProps()
{
  let guilds = await get_guilds()
  for (let guild of guilds)
  {
    let cs = await get_channels(guild.id)
    guild.channels = cs;
  }
    return {
        props: {guilds}
    }
}