import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/listenAgain.module.css';
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

export default function ListenAgain( {audios} : AudiosProps){

    return(
        <div className={styles.listenAgainSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'Pablo Ramirez'} title={'Listen Again'}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(0,10).map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logo_image={audio.channel.urls.logo_image.original} title={audio.title}
                        description={audio.description} styleType={'playlist'} high_mp3={audio.urls.high_mp3} id={audio.id} duration={audio.duration}/>
                    )
                })}
            </div>
        </div>
    )
}
