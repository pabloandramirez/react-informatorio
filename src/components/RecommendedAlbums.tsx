import styles from '../styles/recommendedAlbums.module.css';
import CategoryTitle from './CategoryTitle';
import Cover from './Cover';
import NavegationArrows from './NavegationArrows';

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



export default function RecommendedAlbums({audios} : AudiosProps){
    
    return(
        <div className={styles.recommendedSection}>
            <div className={styles.topSection}>
                <CategoryTitle title={'Recommended Podcasts'} description={''}/>
                <NavegationArrows/>
            </div>
            <div className={styles.generalSection}>
                {audios.slice(10,15).map((audio: AudioProps) => {
                    return(
                        <Cover key={audio.id} logo_image={audio.channel.urls.logo_image.original} 
                        title={audio.title} description={audio.description} styleType={'playlist'} 
                        high_mp3={audio.urls.high_mp3} id={audio.id} duration={audio.duration}/>
                    )
                })}
            </div>
        </div>
    )
}