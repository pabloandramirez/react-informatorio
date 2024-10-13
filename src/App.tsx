import { ComponentState, useContext, useState } from 'react';
import stylesApp from './App.module.css';
import AsideBar from './components/AsideBar';
import Header from './components/Header';
import Home from './components/Home';
import PlayBar from './components/PlayBar';
import CreatePlayList from './components/CreatePlayList';
import { PlayAudioContext, PlayAudioProvider } from './components/contexts/AudioContext';

function App() {

  type Playlist = ComponentState;

  const [showHome, setShowHome] = useState(true);
  const [playLists, setPlayLists] = useState<Array<Playlist>>([]);

  const currentAudioContext = useContext(PlayAudioContext);
  // const currentAudioInfo = currentAudioContext?.audioInfo;
  // console.log(currentAudioInfo);
  // const image_logo = currentAudioInfo?.logo_image;
  // const title = currentAudioInfo?.title;
  // const description = currentAudioInfo?.description;
  // const duration = currentAudioInfo?.duration ?? 0;
  
  // const minutes = currentAudioInfo?.duration ? parseInt((currentAudioInfo?.duration/60).toFixed(0)) : 0;
  // const seconds = Math.trunc(duration % 60) < 10 
  // ? '0' + Math.trunc(duration % 60) 
  // : Math.trunc(duration % 60) + '';

  return (
    <>
      <Header />
      <PlayAudioProvider>
        <div className={stylesApp.mainContent}>
          <AsideBar playLists={playLists} setShowHome={setShowHome}/>
          {showHome ? <Home /> : <CreatePlayList playLists={playLists} setPlayLists={setPlayLists}/>}
        </div>
        <PlayBar />
       </PlayAudioProvider>
    </>
  )
}

export default App
