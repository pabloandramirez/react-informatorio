import ListenAgain from "./ListenAgain";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";
import styles from '../styles/home.module.css';
import useFetchData from "./hooks/useFetchData";
import React, { ComponentState } from "react";
import { AudioProvider } from "./hooks/useAudio";

const API_URL = 'https://api.audioboom.com/audio_clips';

type HomeProps = ComponentState;

export default function Home({...delegated}: HomeProps){
    const { audios, isLoaded, error } = useFetchData(API_URL);

    return(
        isLoaded ? (
            <p>{error}</p>
          ) : (
            <div className={styles.home}>
                <AudioProvider>
                    <ListenAgain audios={audios} delegated={delegated} />
                    <QuickPicks audios={audios} delegated={delegated}  />
                    <RecommendedAlbums audios={audios} delegated={delegated} />
                    <SimilarTo audios={audios} delegated={delegated}  />
                </AudioProvider>
            </div>
          )
    )
}