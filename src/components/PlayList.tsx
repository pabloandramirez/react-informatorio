
import cover from '../styles/cover.module.css';
import Heading from './Heading';

type PlaylistProps = {
    id: number;
    logoImage: string;
    title: string;
    styleType: StyleType;
    description: string;
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


export default function Playlist({id, logoImage, title, description, styleType } : PlaylistProps){
    const coverStyle: string = styleMap[styleType] || cover.song;
    const coverImageContainerStyle: string = styleImageContainerMap[styleType] || cover.imageContainerSong;
    const coverImageStyle: string = styleImageMap[styleType] || cover.imageSong;
    const shortTitle = title.slice(0,45)+'...';
    const shortDescription = description && description.slice(0, 50)+'...';

    return(
        <div key={id} className={coverStyle}>
            <div className={coverImageContainerStyle}>
                <img className={coverImageStyle} src={logoImage} alt="song-cover"/> 
            </div>
            <div className={styleType === 'similar' ? cover.textSimilar : cover.text}>
                <Heading as={'h3'} title={title} className={styleType==='playlist' ||styleType==='recommended' ? cover.titlePlaylist : cover.titleSong}>{shortTitle}</Heading>
                <Heading as={'h1'} title={description} className={styleType==='playlist' ||styleType==='recommended' ? cover.artistPlaylist : cover.artistSong}>{shortDescription}</Heading>
            </div>
        </div>
    )
}