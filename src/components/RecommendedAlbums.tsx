import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import NavegationArrows from './NavegationArrows';

const RECOMMENDED_ALBUMS = [
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1wpYiJdlHUZt9gWiSByGHEw9tf0yUSrdt',
        title:'Bend and Breake',
        artist:'Keane'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1IveJggWWoN-MZxyZBCNDETpymHOiLwmc',
        title:'Tight',
        artist:'Kaskade, Madge'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1cqjNjzF4LMf8KpWblBqwK0wYbJG0PNnc',
        title:'Drifting',
        artist:'Tiesto, Poppy Baskcomb'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1x1WBU8Ly9ZfaQS7QFLZcnkNt99wmBABC',
        title:'dashtar',
        artist:'Knock2'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1xKvi4DZWN4wzAenV-n7MXbCMZ1rxLWbY',
        title:'Show Me',
        artist:'MPH'
    }
];

export default function RecommendedAlbums(){
    return(
        <div className={styles.recommendedSection}>
            <div className={styles.topSection}>
                <CategoryTitle title={'Recommended Albums'} description={''}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {RECOMMENDED_ALBUMS.map((album) => {
                    return(
                        <Cover key={album.imageUrl} imageUrl={album.imageUrl} title={album.title} 
                        artist={album.artist} styleType={'recommended'}/>
                    )
                })}
            </div>
        </div>
    )
}