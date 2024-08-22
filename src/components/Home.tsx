import Header from "./Header";
import ListenAgain from "./ListenAgain";
import PlayBar from "./PlayBar";
import QuickPicks from "./QuickPicks";
import RecommendedAlbums from "./RecommendedAlbums";
import SimilarTo from "./SimilarTo";

export default function Home(){
    return(
        <>
        <Header />
        <ListenAgain />
        <QuickPicks />
        <RecommendedAlbums />
        <SimilarTo />
        <PlayBar /></>
    )
}