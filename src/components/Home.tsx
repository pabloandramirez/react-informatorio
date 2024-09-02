import ListenAgain from "./ListenAgain";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";
import styles from '../styles/home.module.css';

export default function Home(){
    return(
        <div className={styles.home}>
            <ListenAgain />
            <QuickPicks />
            <RecommendedAlbums />
            <SimilarTo />
        </div>
    )
}