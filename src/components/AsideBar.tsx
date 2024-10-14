import { Dispatch, useState } from 'react';
import PeopleIcon from '/people.svg';
import styles from '../styles/asideBar.module.css';
import Playlist from './PlayList';

type Playlist = {
    imageUrl: string;
    title: string;
    description: string;
}

type ShowHomeProps = {
    setShowHome : Dispatch<React.SetStateAction<boolean>>;
    playLists: Playlist[];
}

export default function AsideBar({setShowHome, playLists} : ShowHomeProps){

    const [isClickedHome, setIsClickedHome] = useState(true);
    const [isClickedPlaylist, setIsClickedPlaylist] = useState(false);

    function handleClickPlaylist(){
        setShowHome(false);
        setIsClickedPlaylist(true);
        setIsClickedHome(false);
    }

    function handleClickHome(){
        setShowHome(true);
        setIsClickedHome(true);
        setIsClickedPlaylist(false);
    }

    return(
        <aside className={styles.asideBar}>
            <button style={{backgroundColor: isClickedHome ? '#1a1a1a' : '#1010'}} 
            className={styles.buttonSidebar} onClick={handleClickHome}><img src={PeopleIcon} 
            alt="people" />Home</button>
            <hr className={styles.breakLine} />
            <button style={{backgroundColor: isClickedPlaylist ? '#1a1a1a' : '#1010'}} 
            className={styles.buttonSidebar} onClick={handleClickPlaylist}><img src={PeopleIcon} 
            alt="people" />New Playlist</button>
            {playLists.map((playList, id) => {
                return(
                    <Playlist key={playList.imageUrl} id={id} logoImage={playList.imageUrl} 
                    title={playList.title} styleType={'quickpick'} description={playList.description}/>
                )
            })}
        </aside>
            
    )
}