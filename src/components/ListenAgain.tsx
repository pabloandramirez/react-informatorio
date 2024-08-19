import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/listenAgain.module.css';
import Cover from "./Cover";

const PLAYLISTS = [
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1lAf-T6zCOygu5SQo_MIvBHuLCr5QN8u1',
        title:'Mirage',
        artist:'Glass Beams'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1W2-jyvgOaKLcdXTW6lfRRq1vXDZGuKP4',
        title:'Mansion',
        artist:'Big Menú, Ca7riel'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1TZACzvYmETpXEaU6qJaep8kpqgzqh748',
        title:'Golden Dreams',
        artist:'Crewrod'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1kB-O9OVrf4t56e5oqAmRgGOyOzQf_GO3',
        title:'Convida',
        artist:'Tiger Mood'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1sG9bXx02fb6u5txHP35qIolt6gUWk7MB',
        title:'¡Falta!',
        artist:'An Espil, Ivan C. Bakmas'
    }
];

export default function ListenAgain(){
    return(
        <div className={styles.listenAgainSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'Pablo Ramirez'} title={'Listen Again'}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {PLAYLISTS.map((playlist) => {
                    return(
                        <Cover key={playlist.imageUrl} imageUrl={playlist.imageUrl} title={playlist.title} 
                        artist={playlist.artist} styleType={'playlist'}/>
                    )
                })}
            </div>
        </div>
    )
}