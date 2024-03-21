import styles from './card.module.css'

export default function GuildCard(props: any) {
    let guild = props.guild;

  return (
    <div className={styles.card}>
      <img className={styles.card_image} src={'https://cdn.discordapp.com/icons/'+guild.id+'/'+guild.icon} alt="" />
        <h3>{guild.name}</h3>
        <ul>
            {guild.channels.map((x:any) => <li>{x.name}</li>)}
        </ul>
    </div>
  );
}