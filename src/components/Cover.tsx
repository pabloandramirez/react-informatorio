import cover from '../styles/cover.module.css';
import moreVertical from '../assets/more-vertical.svg';
import playBtn from '../assets/play-btn.svg';
import { useRef } from 'react';

// type Props = {
//     imageUrl: string;
//     title: string;
//     description: string;
//     styleType: StyleType;
//     fullTitle: string;
//     fullDescription: string;
//     urlMp3: string;
// }

type AudioProps = {
    id: string;
    channel: Channel;
    title: string;
    styleType: StyleType;
    description: string;
    urls: Urls;
}

type Urls = {
    high_mp3 : string;
}

type Channel = {
    urls : UrlsChannel;
}

type UrlsChannel = {
    logo_image : LogoImage;
}

type LogoImage = {
    original: string;
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

export default function Cover({id, channel, title, description, styleType, urls} : AudioProps){
    const coverStyle: string = styleMap[styleType] || cover.song;
    const coverImageContainerStyle: string = styleImageContainerMap[styleType] || cover.imageContainerSong;
    const coverImageStyle: string = styleImageMap[styleType] || cover.imageSong;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const shortTitle = title.slice(0,45)+'...';
    const shortDescription = description && description.slice(0, 50)+'...';

    const handlePlayPause = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (audioRef.current?.paused) {
            audioRef.current?.play();
          } else {
            audioRef.current?.pause();
          }
    }


    return(
        <div key={id} className={coverStyle}>
            <div className={coverImageContainerStyle}>
                {styleType==='playlist'?
                (<><a className={cover.moreVertical} href="#">
                    <img src={moreVertical} alt="more-vertical" />
                </a>
                <a className={cover.playBtn} href='#' onClick={handlePlayPause}>
                    <img src={playBtn} alt="play-btn" />
                    <audio ref={audioRef} src={urls.high_mp3}></audio>
                </a></>):null}
                <img className={coverImageStyle} src={channel.urls.logo_image.original} alt="song-cover" />
            </div>
            <div className={styleType === 'similar' ? cover.textSimilar : cover.text}>
                <h3 title={title} className={styleType==='playlist' ||styleType==='recommended' ? cover.titlePlaylist : cover.titleSong}>{shortTitle}</h3>
                <h3 title={description} className={styleType==='playlist' ||styleType==='recommended' ? cover.artistPlaylist : cover.artistSong}>{shortDescription}</h3>
            </div>
        </div>
    )
}