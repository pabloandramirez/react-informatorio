import ListenAgain from "./ListenAgain";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";

export default function Home(){
    return(
        <div>
            <ListenAgain />
            <QuickPicks />
            <RecommendedAlbums />
            <SimilarTo />
        </div>
    )
}