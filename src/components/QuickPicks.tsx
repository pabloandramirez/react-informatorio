import CategoryTitle from "./CategoryTitle";
import NavegationArrows from "./NavegationArrows";
import styles from '../styles/quickPicks.module.css';
import Cover from "./Cover";
import useFetchData from "./hooks/useFetchData";

const API_URL = 'https://api.audioboom.com/audio_clips?page=20';

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

export default function QuickPicks(){

    const { audios, isLoaded, error } = useFetchData(API_URL);

    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.quickPickSection}>
                <div className={styles.topSection}>
                    <CategoryTitle description={'START RADIO FROM A SONG'} title={'Quick picks'}/>
                    <NavegationArrows/>
                </div>
                <div className={styles.generalSection}>
                    {audios.slice(4,20).sort().map((audio: AudioProps) => {
                        return(
                            <Cover key={audio.id} channel={audio.channel} title={audio.title}
                            description={audio.description} styleType={'quickpick'} urls={audio.urls} id={audio.id}/>
                        )
                    })}
                </div>
            </div>
          )
    )
}