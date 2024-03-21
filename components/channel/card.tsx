import Link from 'next/link';
import styles from './card.module.css'

export default function ChannelCard(props: any) {
    let channel = props.channel;

  return (
      <div className={styles.card}>
      <h3 className={styles.header}>{'#'+channel.name}</h3>
        <p className={styles.description}>{channel.topic}</p>
      </div>
  );
}