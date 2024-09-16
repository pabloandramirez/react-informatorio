import styles from '../styles/categoryTitle.module.css';
import Profile from './Profile';

type Props = {
    description: string;
    title: string;
}

export default function CategoryTitle({description, title}: Props){
    return(
        <div className={styles.categoryGroup}>
            <Profile/>
            <div className={styles.text}>
                {description ? <h3 className={styles.description}>{description}</h3> : null}
                {title ? <h2 className={styles.title}>{title}</h2> : null}
            </div>
        </div>
    )
}