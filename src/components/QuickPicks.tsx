import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/quickPicks.module.css';
import Cover from "./Cover";

const SONGS = [
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
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1BMQWdNjAmtebpKZCEYUGgdTkZAT15cvs',
        title:'Stumblin´in',
        artist:'Cyril'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1LriuUThbp40Ffcn03eAwWPvrpeXCEq8s',
        title:'TAKE IT OFF',
        artist:'Fisher, Aag'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1n7Ay5Gg3C9HsedAyY3TonYSKjcmD-DCA',
        title:'Killing In The Name',
        artist:'Rage Against The Machine'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/18urL7hlQXfCWmf5BJoCa4sQk6-IgTyFJ',
        title:'Redbone',
        artist:'Childish Gambino'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1-iWbazCFHOTvvI79RsEhJv6jVnXgO2H6',
        title:'Players',
        artist:'Coi Leray'
    },
    {
        imageUrl:'https://lh3.googleusercontent.com/d/1ZEbHYFoyBE7haR42GG5KDtS1Qhr9YVIr',
        title:'I Want You 2(Stay)',
        artist:'Illenium, MashBit'
    },
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

export default function QuickPicks(){
    return(
        <div className={styles.quickPickSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'START RADIO FROM A SONG'} title={'Quick picks'}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {SONGS.map((song) => {
                    return(
                        <Cover key={song.imageUrl} imageUrl={song.imageUrl} title={song.title} 
                        artist={song.artist} styleType={'quickpick'}/>
                    )
                })}
            </div>
        </div>
    )
}