import { get_channels } from "@/services/channel";
import { get_guilds } from "@/services/guild";


import GuildCard from "@/components/guild/card";
import { Guild } from "@/types/guild";

export default function Home(props: any) {
  let guilds = props.guilds;

  return (
    <>
      <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem'}}>
        {guilds.map((x: Guild) => {
          return (
            <div key={x.id}>
              <GuildCard guild={x} />
            </div>
          )
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let guilds = await get_guilds()
  for (let guild of guilds) {
    let cs = await get_channels(guild.id)
    guild.channels = cs;
  }
  return {
    props: { guilds }
  }
}