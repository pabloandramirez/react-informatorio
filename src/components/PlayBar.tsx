import styles from '../styles/playbar.module.css';
import skipPrevious from '../assets/skip_previuos.svg';
import playArrow from '../assets/play_arrow.svg';
import skipNext from '../assets/skip_next.svg';
import repeatSong from '../assets/repeat-song.svg';
import volumeUp from '../assets/volume-up.svg';
import arrowDropDown from '../assets/arrow-drop-down.svg';
import pauseBtn from '../assets/pause-btn.svg';
import logo from '../assets/youtube-music.svg';
import { useContext } from 'react';
import { PlayAudioContext } from './contexts/AudioContext';


export default function PlayBar(){

    const audioContext = useContext(PlayAudioContext);

    const handlClickPlay = (e: React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault();
        audioContext?.setIsPlaying(!audioContext?.isPlaying);
        audioContext?.activeAudio?.paused ? audioContext?.activeAudio?.play() : audioContext?.activeAudio?.pause() ;
    }

    const currentAudioInfo = audioContext?.audioInfo;
    const image_logo = currentAudioInfo?.logo_image;
    const title = currentAudioInfo?.title;
    const description = currentAudioInfo?.description;
    const duration = currentAudioInfo?.duration ?? 0;
    
    const minutes = currentAudioInfo?.duration ? parseInt((currentAudioInfo?.duration/60).toFixed(0)) : 0;
    const seconds = Math.trunc(duration % 60) < 10 
    ? '0' + Math.trunc(duration % 60) 
    : Math.trunc(duration % 60) + '';

    const shortTitle = title && title.slice(0, 20)+'...';
    const shortDescription = description && description.slice(0, 30)+'...';

    return(
        <footer className={styles.playBar}>
            <div className={styles.reproductionBtns}>
                <a href="#">
                    <img src={skipPrevious} alt="skip_previous" />
                </a>
                <a href="#" onClick={handlClickPlay}>
                    {audioContext?.isPlaying?<img src={pauseBtn} alt="pause_arrow" />:<img src={playArrow} alt="play_arrow" />}
                </a>
                <a href="#">
                    <img src={skipNext} alt="skip_next" />
                </a>
                <p className={styles.reproductionTime}>0:00 / {minutes}:{seconds}</p>
            </div>
            <div className={styles.songPlaying}>
                <img className={styles.songCover} src={image_logo?image_logo:logo} alt="song_image" />
                <div className={styles.songContainer}>
                    <p className={styles.songTitle}>{shortTitle?shortTitle:'Title'}</p>
                    <div className={styles.songInfo}>
                        <p>{shortDescription?shortDescription:'Description'}</p>
                    </div>
                </div>
            </div>
            <div className={styles.playOptions}>
                <a href="#">
                    <img src={repeatSong} alt="repeat_song" />
                </a>
                <a href="#">
                    <img src={volumeUp} alt="volume_up" />
                </a>
                <a href="#">
                    <img src={arrowDropDown} alt="arrow_drop_down" />
                </a>
            </div>
        </footer>
    )
}