import { Dispatch } from 'react';
import PeopleIcon from '../assets/people.svg';
import styles from '../styles/asideBar.module.css';
import Cover from './Cover';

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

    function handleClick(){
        setShowHome(false);
    }

    function handleClickHome(){
        setShowHome(true);
    }

    return(
        <aside className={styles.asideBar}>
            <button className={styles.buttonSidebar} onClick={handleClickHome}><img src={PeopleIcon} alt="people" />Home</button>
            <hr className={styles.breakLine} />
            <button className={styles.buttonSidebar} onClick={handleClick}><img src={PeopleIcon} alt="people" />New Playlist</button>
            {playLists.map((cover) => {
                return(
                    <Cover key={cover.imageUrl} imageUrl={cover.imageUrl} title={cover.title} 
                        artist={cover.description} styleType={'quickpick'}/>
                )
            })}
        </aside>
            
    )
}