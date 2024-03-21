import Link from 'next/link';
import styles from './card.module.css'

export default function GuildCard(props: any) {
    let guild = props.guild;

  return (
    <Link href={'/guilds/'+guild.id} style={{textDecoration:'none'}}>
      <div className={styles.card}>
      <img className={styles.image} src={'https://cdn.discordapp.com/icons/'+guild.id+'/'+guild.icon} alt="" />
        <h3 className={styles.header}>{guild.name}</h3>
        <ul className={styles.channels}>
            {guild.channels.map((x:any) => <li>{x.name}</li>)}
        </ul>
        <p className={styles.description}>{guild.description}</p>
      </div>
      </Link>
  );
}