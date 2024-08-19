import styles from '../styles/playbar.module.css';
import skipPrevious from '../assets/skip_previuos.svg';
import playArrow from '../assets/play_arrow.svg';
import skipNext from '../assets/skip_next.svg';
import separator from '../assets/separator.svg';
import repeatSong from '../assets/repeat-song.svg';
import volumeUp from '../assets/volume-up.svg';
import arrowDropDown from '../assets/arrow-drop-down.svg';

const SONG_PLAYING = {
    imageUrl:'',
    artist:'',
    song:'',
    reproductions:'',
    likes:''
}

export default function PlayBar(){
    return(
        <footer className={styles.playBar}>
            <div className={styles.reproductionBtns}>
                <a href="#">
                    <img src={skipPrevious} alt="skip_previous" />
                </a>
                <a href="#">
                    <img src={playArrow} alt="play_arrow" />
                </a>
                <a href="#">
                    <img src={skipNext} alt="skip_next" />
                </a>
                <p className={styles.reproductionTime}>1:24 / 2:50</p>
            </div>
            <div className={styles.songPlaying}>
                <img src={SONG_PLAYING.imageUrl} alt="song_image" />
                <div className={styles.songContainer}>
                    <p className={styles.songTitle}>Listen Again</p>
                    <div className={styles.songInfo}>
                        <p>{SONG_PLAYING.artist}</p> - <p>{SONG_PLAYING.artist}</p>
                        <img src={separator} alt="separator" />
                        <p>{SONG_PLAYING.reproductions} reproductions</p>
                        <img src={separator} alt="separator" />
                        <p>{SONG_PLAYING.likes} likes</p>
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