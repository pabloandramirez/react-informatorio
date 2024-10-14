import logoBusqueda from '/search.svg';
import styles from '../styles/searchbar.module.css';
import TextInput from './TextInput';

export default function SearchBar(){
    return(
        <div className={styles.searchGroup}>
            <img src={logoBusqueda} alt="logo-busqueda" className={styles.searchLogo} />
            <TextInput label='' type="text" placeholder="Buscar" className={styles.searchInput} />
        </div>
    )
}