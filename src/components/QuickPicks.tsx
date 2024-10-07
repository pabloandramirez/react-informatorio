import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/quickPicks.module.css';
import Cover from "./Cover";
import { ComponentState } from "react";

type AudiosProps = {
    audios: Array<AudioProps>;
    delegated: ComponentState;
}


type AudioProps = {
    id: string;
    channel: Channel;
    title: string;
    description: string;
    urls: Urls;
}

type Urls = {
    high_mp3 : string;
}

type Channel = {
    urls : UrlsChannel;
}

type UrlsChannel = {
    logo_image : LogoImage;
}

type LogoImage = {
    original: string;
}

export default function QuickPicks({audios, delegated} : AudiosProps){

    return(
        <div className={styles.quickPickSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'START RADIO FROM A SONG'} title={'Quick picks'}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(4,20).sort().map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logoImage={audio.channel.urls.logo_image.original} 
                        title={audio.title} description={audio.description} styleType={'quickpick'} 
                        highMp3={audio.urls.high_mp3} id={audio.id} delegated={delegated} duration={0}/>
                    )
                })}
            </div>
        </div>
    )
}