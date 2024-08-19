import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import styles from '../styles/header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.leftGroup}>
                <Logo/>
                <SearchBar/>
            </div>
            <Profile/>
        </header>
    )
}