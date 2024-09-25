import styles from '../styles/playbar.module.css';
import skipPrevious from '../assets/skip_previuos.svg';
import playArrow from '../assets/play_arrow.svg';
import skipNext from '../assets/skip_next.svg';
import repeatSong from '../assets/repeat-song.svg';
import volumeUp from '../assets/volume-up.svg';
import arrowDropDown from '../assets/arrow-drop-down.svg';
import pauseBtn from '../assets/pause-btn.svg';
import { useAudio } from './hooks/useAudio';
import logo from '../assets/youtube-music.svg';


type ReprodProps = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    audioMinutes: number;
    audioSeconds: number;
    title: string;
    description: string;
    imageLogo: string;
}

export default function PlayBar( {isPlaying, setIsPlaying, audioMinutes, audioSeconds, title, 
    description, imageLogo }: ReprodProps){

    const { activeAudio } = useAudio();

    const handlClickPlay = (e: React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault();
        setIsPlaying(!isPlaying);

        if (activeAudio?.paused) {
            activeAudio.play();
            setIsPlaying(true);
        } else {
            activeAudio?.pause();
            setIsPlaying(false);
        }
    }

    const shortTitle = title && title.slice(0,20)+'...';
    const shortDescription = description && description.slice(0, 30)+'...';

    return(
        <footer className={styles.playBar}>
            <div className={styles.reproductionBtns}>
                <a href="#">
                    <img src={skipPrevious} alt="skip_previous" />
                </a>
                <a href="#" onClick={handlClickPlay}>
                    {isPlaying?<img src={pauseBtn} alt="pause_arrow" />:<img src={playArrow} alt="play_arrow" />}
                </a>
                <a href="#">
                    <img src={skipNext} alt="skip_next" />
                </a>
                <p className={styles.reproductionTime}>0:00 / {audioMinutes}:{audioSeconds}</p>
            </div>
            <div className={styles.songPlaying}>
                <img className={styles.songCover} src={imageLogo?imageLogo:logo} alt="song_image" />
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