import logo from '/youtube-music.svg';
import styles from '../styles/logo.module.css';

export default function Logo(){
    return(
        <>
            <img src={logo} alt="ytmusic" className={styles.logo} />
        </>
    )
}