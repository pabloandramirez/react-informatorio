import styles from '../styles/playbar.module.css';
import skipPrevious from '/skip_previuos.svg';
import playArrow from '/play_arrow.svg';
import skipNext from '/skip_next.svg';
import closePlayBar from '/close-playbar.svg';
import pauseBtn from '/pause-btn.svg';
import logo from '/youtube-music.svg';
import { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { PlayAudioContext } from './contexts/AudioContext';
import { PlayBarShowContext } from './contexts/PlayBarContext';


export default function PlayBar(){
    const audioContext = useContext(PlayAudioContext);
    const playBarContext = useContext(PlayBarShowContext);
    const minutosRef = useRef<HTMLParagraphElement | null>(null);
    const segundosRef = useRef<HTMLParagraphElement | null>(null);
    const rangeRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (audioContext?.activeAudio) {
          const updateProgress = () => {
            if(audioContext.activeAudio){
            const currentAudioTime = audioContext.activeAudio.currentTime;
            audioContext.setCurrentTime((currentAudioTime / duration) * 100);
            if(minutesConverter(currentAudioTime)===minutesConverter(duration)
              && secondsConverter(currentAudioTime) === secondsConverter(duration)){
                audioContext.setIsPlaying(false);
            }
            if(minutosRef.current && segundosRef.current && rangeRef.current){
                minutosRef.current.innerText = minutesConverter(currentAudioTime);
                segundosRef.current.innerText = secondsConverter(currentAudioTime);
                const value = (currentAudioTime / duration) * 100;
                rangeRef.current.style.background = `linear-gradient(to right, #ff0000 ${value}%, #ddd ${value}%)`;
            }
          }};
    
          const handleLoadedMetadata = () => {
            if (audioContext.activeAudio) {
              const duration = audioContext.activeAudio.duration;
              audioContext.setDuration(duration); 
            }
          };
          audioContext.activeAudio.addEventListener('timeupdate', updateProgress);
      
          audioContext.activeAudio.addEventListener('loadedmetadata', handleLoadedMetadata);
      
          return () => {
            if (audioContext.activeAudio) {
              audioContext.activeAudio.removeEventListener('timeupdate', updateProgress);
              audioContext.activeAudio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
          };
        }
      }, [audioContext?.activeAudio, audioContext?.isPlaying, audioContext?.duration, audioContext]);


    const handlClickPlay = (e: React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault();
        audioContext?.setIsPlaying(!audioContext?.isPlaying);
        audioContext?.activeAudio?.paused ? audioContext?.activeAudio?.play() : 
        audioContext?.activeAudio?.pause() ;
    }

    // const value = 

    const handleAudioBar = (e: ChangeEvent<HTMLInputElement>) => {

        const newTime = (Number(e.target.value) / 100) * duration; 
        if (audioContext?.activeAudio) {
            audioContext.activeAudio.currentTime = newTime; 
        }
        audioContext?.setCurrentTime(newTime);
    
    }

    const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        playBarContext?.setShowPlaybar(false);
        audioContext?.activeAudio?.pause();
    }

    function minutesConverter(minutes: number){
        const correctMinutes = parseInt(Math.trunc(minutes / 60).toFixed(0))+'';
        return correctMinutes;
    }

    function secondsConverter(minutes: number){
        const correctSeconds = Math.trunc(minutes % 60) < 10 
        ? '0' + Math.trunc(minutes % 60) 
        : Math.trunc(minutes % 60) + '';
        return correctSeconds;
    }

    const currentAudioInfo = audioContext?.audioInfo;
    const image_logo = currentAudioInfo?.logo_image;
    const title = currentAudioInfo?.title;
    const description = currentAudioInfo?.description;
    const duration = currentAudioInfo?.duration ?? 0;
    
    const minutes = currentAudioInfo?.duration ? minutesConverter(currentAudioInfo?.duration) : '00';
    const seconds = currentAudioInfo?.duration ? secondsConverter(currentAudioInfo?.duration) : '00';

    const shortTitle = title && title.slice(0, 20)+'...';
    const shortDescription = description && description.slice(0, 30)+'...';

    return(
        <footer className={styles.playBar}>
            <input ref={rangeRef} type="range" className={styles.reproductionSlide} min="0" max="100" id="slider" 
            value={audioContext?.currentTime} onChange={(event) => {handleAudioBar(event);}} />
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
                <div className={styles.reproductionTime}><p ref={minutosRef}>00</p>:<p ref={segundosRef}>00</p> 
                / {minutes}:{seconds}</div>
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
                <a href="#" onClick={handleCloseClick}>
                    <img src={closePlayBar} alt="close_playbar" />
                </a>
            </div>
        </footer>
    )
}