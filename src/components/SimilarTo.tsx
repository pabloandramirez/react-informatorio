import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import NavegationArrows from './NavegationArrows';

const SIMILAR_TO = [
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1lOByptkFa7tgLz6whdIb10J9hyslJltU',
        artist:'Pappo',
        suscribers:'1.5M suscribers'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1baaS0gOO0p0kSy5DcUctsLqDKRZ1R2df',
        artist:'Sumo',
        suscribers:'1.5M suscribers'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1YlKPgtR6oa72Pi4KSyGnDmJHGX8oGO5i',
        artist:'Los Ratones Paranoicos',
        suscribers:'1.5M'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1h5j_rj_56sXI8QynNS2WAgO49e0I7Tlt',
        artist:'Catupecu Machu',
        suscribers:'1.5M'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1SnhnU45_gRLz82zv9MZiekvGoSQGqNc1',
        artist:'Los Piojos',
        suscribers:'1.5M'
    }
];

export default function SimilarTo(){
    return(
        <div className={styles.recommendedSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'SIMILAR TO'} title={'Divididos'} />
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {SIMILAR_TO.map((artist) => {
                    return(
                        <Cover key={artist.imageUrl} imageUrl={artist.imageUrl} title={artist.artist} 
                        artist={artist.suscribers} styleType={'similar'}/>
                    )
                })}
            </div>
        </div>
    )
}