import cover from '../styles/cover.module.css';
import moreVertical from '../assets/more-vertical.svg';
import playBtn from '../assets/play-btn.svg';
import { ComponentState, useRef} from 'react';
import React from 'react';
import { useAudio } from './hooks/useAudio';


type AudioProps = {
    id: string;
    logoImage: string;
    title: string;
    styleType: StyleType;
    description: string;
    highMp3: string;
    delegated?: ComponentState;
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

export default function Cover({id, logoImage, title, description, styleType, highMp3, delegated, duration} : AudioProps){
    const {setAudioLength, setTitle, setDescription, setImageLogo, setIsPlaying} = delegated;
    const coverStyle: string = styleMap[styleType] || cover.song;
    const coverImageContainerStyle: string = styleImageContainerMap[styleType] || cover.imageContainerSong;
    const coverImageStyle: string = styleImageMap[styleType] || cover.imageSong;
    const shortTitle = title.slice(0,45)+'...';
    const shortDescription = description && description.slice(0, 50)+'...';

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { activeAudio, setActiveAudio } = useAudio();

    const handlePlayPause = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setAudioLength(duration);
        setTitle(title);
        setDescription(description);
        setImageLogo(logoImage);

        const currentAudio = audioRef.current;

        if (activeAudio && activeAudio !== currentAudio) {
            activeAudio.pause();
            activeAudio.currentTime = 0; 
            setIsPlaying(true);
        }

        if (currentAudio?.paused) {
            currentAudio.play();
            setIsPlaying(true);
            setActiveAudio(currentAudio);
        } else {
            currentAudio?.pause();
            setIsPlaying(false);
            setActiveAudio(null);
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
                    <audio ref={audioRef} src={highMp3}/>
                </a></>):null}
                <a href='#' onClick={handlePlayPause}>
                    <img className={coverImageStyle} src={logoImage} alt="song-cover"/>
                    <audio ref={audioRef} src={highMp3}/>
                </a>
            </div>
            <div className={styleType === 'similar' ? cover.textSimilar : cover.text}>
                <h3 title={title} className={styleType==='playlist' ||styleType==='recommended' ? cover.titlePlaylist : cover.titleSong}>{shortTitle}</h3>
                <h3 title={description} className={styleType==='playlist' ||styleType==='recommended' ? cover.artistPlaylist : cover.artistSong}>{shortDescription}</h3>
            </div>
        </div>
    )
}