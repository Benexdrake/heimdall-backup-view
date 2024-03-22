import Link from 'next/link';
import styles from './card.module.css'

export default function GuildCard(props: any) {
    let guild = props.guild;

    
    let channels = guild.channels.map((x:any) => {return '#'+x.name}).join(' ,')

  return (
    <Link href={'/guilds/'+guild.id} style={{textDecoration:'none'}}>

<div className="card">
  <div className="header">{guild.name}</div>
  <img className={styles.image} src={'https://cdn.discordapp.com/icons/'+guild.id+'/'+guild.icon} alt="" />
  <p className={styles.description}>{guild.description}</p>
  <p>
    {channels}
  </p>
</div>
      </Link>
  );
}