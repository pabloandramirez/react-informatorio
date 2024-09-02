import cover from '../styles/cover.module.css';
import moreVertical from '../assets/more-vertical.svg';
import playBtn from '../assets/play-btn.svg';

type Props = {
    imageUrl: string;
    title: string;
    artist: string;
    styleType: StyleType;
}

type StyleType = 'playlist' | 'recommended' | 'similar' | 'quickpick';


const styleMap: { [key in StyleType]?: string } = {
    playlist: cover.playlist,
    recommended: cover.playlist,
    similar: cover.playlist,
    quickpick: cover.quickpick
};

const styleImageContainerMap: { [key in StyleType]?: string } = {
    playlist: cover.imageContainerPlaylist,
    recommended: cover.imageContainerPlaylist,
    similar: cover.imageContainerPlaylist,
    quickpick: cover.imageContainerPlaylist
};

const styleImageMap: { [key in StyleType]?: string } = {
    playlist: cover.imagePlaylist,
    recommended: cover.imageRecommended,
    similar: cover.imageSimilar,
    quickpick: cover.imageSong,
};

export default function Cover({imageUrl, title, artist, styleType} : Props){
    const coverStyle: string = styleMap[styleType] || cover.song;
    const coverImageContainerStyle: string = styleImageContainerMap[styleType] || cover.imageContainerSong;
    const coverImageStyle: string = styleImageMap[styleType] || cover.imageSong;
    return(
        <div className={coverStyle}>
            <div className={coverImageContainerStyle}>
                {styleType==='playlist'?
                (<><a className={cover.moreVertical} href="#">
                    <img src={moreVertical} alt="more-vertical" />
                </a>
                <a className={cover.playBtn} href="#">
                    <img src={playBtn} alt="play-btn" />
                </a></>):null}
                <img className={coverImageStyle} src={imageUrl} alt="song-cover" />
            </div>
            <div className={styleType === 'similar' ? cover.textSimilar : cover.text}>
                <h3 className={styleType==='playlist' ||styleType==='recommended' ? cover.titlePlaylist : cover.titleSong}>{title}</h3>
                <h3 className={styleType==='playlist' ||styleType==='recommended' ? cover.artistPlaylist : cover.artistSong}>{artist}</h3>
            </div>
        </div>
    )
}