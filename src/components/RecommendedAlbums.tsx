import { ComponentState } from 'react';
import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import NavegationArrows from './NavegationArrows';

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



export default function RecommendedAlbums({audios, delegated} : AudiosProps){
    
    return(
        <div className={styles.recommendedSection}>
            <div className={styles.topSection}>
                <CategoryTitle title={'Recommended Albums'} description={''}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(0,5).map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logoImage={audio.channel.urls.logo_image.original} 
                        title={audio.title} description={audio.description} styleType={'playlist'} 
                        highMp3={audio.urls.high_mp3} id={audio.id} delegated={delegated} duration={0}/>
                    )
                })}
            </div>
        </div>
    )
}