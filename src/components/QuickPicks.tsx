import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/quickPicks.module.css';
import Cover from "./Cover";

type AudiosProps = {
    audios: Array<AudioProps>;
}


type AudioProps = {
    id: string;
    channel: {
        urls : {
            logo_image : {
                original: string;
            };
        };
    };
    title: string;
    description: string;
    urls: {
        high_mp3 : string;
    };
    duration: number;
}

export default function QuickPicks({audios} : AudiosProps){

    return(
        <div className={styles.quickPickSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'START RADIO FROM A SONG'} title={'Quick picks'}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(4,20).sort().map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logo_image={audio.channel.urls.logo_image.original} 
                        title={audio.title} description={audio.description} styleType={'quickpick'} 
                        high_mp3={audio.urls.high_mp3} id={audio.id} duration={audio.duration}/>
                    )
                })}
            </div>
        </div>
    )
}