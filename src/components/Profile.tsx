import profile from '/profile.jpg';
import styles from '../styles/profile.module.css';



export default function Profile(){
    return(
        <a href="#" className={styles.anchord}>
            <img src={profile} alt="profile" className={styles.img} />
        </a>
    )
}