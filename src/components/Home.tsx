import ListenAgain from "./ListenAgain";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";
import styles from '../styles/home.module.css';
import useFetchData from "./hooks/useFetchData";

const API_URL = 'https://api.audioboom.com/audio_clips';
const API_URL_CHANNEL = 'https://api.audioboom.com/categories/295';

export default function Home(){
    const { audios, isLoaded, error } = useFetchData(API_URL);
    const { audios: audiosChannel } = useFetchData(API_URL_CHANNEL);

    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.home}>
                <ListenAgain audios={audios} />
                <QuickPicks audios={audios}   />
                <RecommendedAlbums audios={audios}  />
                <SimilarTo audios={audiosChannel}  />
            </div>
          )
    )
}