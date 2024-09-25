import ListenAgain from "./ListenAgain";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";
import styles from '../styles/home.module.css';
import useFetchData from "./hooks/useFetchData";
import { ComponentState } from "react";

const API_URL = 'https://api.audioboom.com/audio_clips';
const API_URL_CHANNEL = 'https://api.audioboom.com/categories/295';

type HomeProps = ComponentState;

export default function Home({...delegated}: HomeProps){
    const { audios, isLoaded, error } = useFetchData(API_URL);
    const { audios: audiosChannel } = useFetchData(API_URL_CHANNEL);

    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.home}>
                <ListenAgain audios={audios} delegated={delegated} />
                <QuickPicks audios={audios} delegated={delegated}  />
                <RecommendedAlbums audios={audios} delegated={delegated} />
                <SimilarTo audios={audiosChannel} delegated={delegated}  />
            </div>
          )
    )
}