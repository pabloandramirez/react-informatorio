import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import useFetchData from './hooks/useFetchData';
import NavegationArrows from './NavegationArrows';

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



export default function RecommendedAlbums(){

    const { audios, isLoaded, error } = useFetchData(API_URL);
    
    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.recommendedSection}>
                <div className={styles.topSection}>
                    <CategoryTitle title={'Recommended Albums'} description={''}/>
                    <NavegationArrows/>
                </div>
                <div className={styles.generalSection}>
                    {audios.slice(0,5).map((audio: AudioProps) => {
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