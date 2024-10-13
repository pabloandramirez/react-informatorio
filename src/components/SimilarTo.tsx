import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import NavegationArrows from './NavegationArrows';


type AudiosProps = {
    audios: Array<AudioProps>;
}

type AudioProps = {
    id: string;
    channel: Channel;
    title: string;
    description: string;
    urls: Urls;
    category_id: number;
    duration: number;
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

export default function SimilarTo({audios} : AudiosProps){

    return(
        <div className={styles.recommendedSection}>
            <div className={styles.topSection}>
                <CategoryTitle description={'SIMILAR TO'} title={'Football'} />
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(0,5).map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logo_image={audio.channel.urls.logo_image.original} 
                        title={audio.title} description={audio.description} styleType={'similar'} 
                        high_mp3={audio.urls.high_mp3} id={audio.id} duration={audio.duration}/>
                    )
                })}
            </div>
        </div>
    )
}