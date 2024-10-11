import styles from '../styles/categoryTitle.module.css';
import Heading from './Heading';
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
                {title ? <Heading as='h2' className={styles.title}>{title}</Heading> : null}
            </div>
        </div>
    )
}