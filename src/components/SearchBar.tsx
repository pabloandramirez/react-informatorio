import logoBusqueda from '../assets/search.svg';
import styles from '../styles/searchbar.module.css';

export default function SearchBar(){
    return(
        <div className={styles.searchGroup}>
            <img src={logoBusqueda} alt="logo-busqueda" className={styles.searchLogo} />
            <input type="text" placeholder="Buscar" className={styles.searchInput} />
        </div>
    )
}