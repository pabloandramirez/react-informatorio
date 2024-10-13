import cover from '../styles/cover.module.css';
import moreVertical from '../assets/more-vertical.svg';
import playBtn from '../assets/play-btn.svg';
import { useContext, useRef} from 'react';
import React from 'react';
import Heading from './Heading';
import { PlayAudioContext } from './contexts/AudioContext';


type AudioProps = {
    id: string;
    logo_image: string;
    title: string;
    styleType: StyleType;
    description: string;
    high_mp3: string;
    duration: number;
}

type StyleType = 'playlist' | 'recommended' | 'similar' | 'quickpick';


const styleMap: { [key in StyleType]?: string } = {
    playlist: cover.playlist,
    recommended: cover.playlist,
    similar: cover.playlist,
    quickpick: cover.quickpick
};

const styleImageContainerMap: { [key in StyleType]?: string } = {
    playlist: cover.imageContainerPlaylist,
    recommended: cover.imageContainerPlaylist,
    similar: cover.imageContainerPlaylist,
    quickpick: cover.imageContainerPlaylist
};

const styleImageMap: { [key in StyleType]?: string } = {
    playlist: cover.imagePlaylist,
    recommended: cover.imageRecommended,
    similar: cover.imageSimilar,
    quickpick: cover.imageSong,
};

export default function Cover({id, logo_image, title, description, styleType, high_mp3, duration} : AudioProps){
    const coverStyle: string = styleMap[styleType] || cover.song;
    const coverImageContainerStyle: string = styleImageContainerMap[styleType] || cover.imageContainerSong;
    const coverImageStyle: string = styleImageMap[styleType] || cover.imageSong;
    const shortTitle = title.slice(0,45)+'...';
    const shortDescription = description && description.slice(0, 50)+'...';
    const audioContext = useContext(PlayAudioContext);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayPause = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        audioContext?.setAudioInfo({id, logo_image, title, description, high_mp3, duration });

        const currentAudio = audioRef.current;

        if (audioContext?.activeAudio && audioContext?.activeAudio !== currentAudio) {
            audioContext?.activeAudio.pause();
            audioContext.activeAudio.currentTime = 0; 
            audioContext?.setIsPlaying(true);
        }

        if (currentAudio?.paused) {
            currentAudio.play();
            audioContext?.setIsPlaying(true);
            audioContext?.setActiveAudio(currentAudio);
        } else {
            currentAudio?.pause();
            audioContext?.setIsPlaying(false);
        }
    };

    return(
        <div key={id} className={coverStyle}>
            <div style={{border:'none'}} className={coverImageContainerStyle}>
                {styleType==='playlist'?
                (<><a className={cover.moreVertical} href="#">
                    <img src={moreVertical} alt="more-vertical" />
                </a>
                <a className={cover.playBtn} href='#' onClick={handlePlayPause}>
                    <img src={playBtn} alt="play-btn" />
                    <audio ref={audioRef} src={high_mp3}/>
                </a></>):null}
                <a href='#' onClick={handlePlayPause}>
                    <img className={coverImageStyle} src={logo_image} alt="song-cover"/>
                    <audio ref={audioRef} src={high_mp3}/>
                </a>
            </div>
            <div className={styleType === 'similar' ? cover.textSimilar : cover.text}>
                <Heading title={title} className={styleType==='playlist' ||styleType==='recommended' ? cover.titlePlaylist : cover.titleSong} as={'h3'}>{shortTitle}</Heading>
                <Heading title={description} className={styleType==='playlist' ||styleType==='recommended' ? cover.artistPlaylist : cover.artistSong} as={'h3'}>{shortDescription}</Heading>
            </div>
        </div>
    )
}