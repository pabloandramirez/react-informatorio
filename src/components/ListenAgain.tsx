import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/listenAgain.module.css';
import Cover from "./Cover";
import useFetchData from "./hooks/useFetchData";

const API_URL = 'https://api.audioboom.com/audio_clips';

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

export default function ListenAgain(){

    const { audios, isLoaded, error } = useFetchData(API_URL);

    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.listenAgainSection}>
                <div className={styles.topSection}>
                    <CategoryTitle description={'Pablo Ramirez'} title={'Listen Again'}/>
                    <NavegationArrows/>
                </div>
                <div className={styles.generalSection}>
                    {audios.slice(0,10).map((audio: AudioProps) => {
                        return(
                            <Cover key={audio.id} channel={audio.channel} title={audio.title}
                            description={audio.description} styleType={'playlist'} urls={audio.urls} id={audio.id}/>
                        )
                    })}
                </div>
            </div>
          )
    )
}
