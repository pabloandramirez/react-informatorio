import { ComponentState, useState } from 'react';
import stylesApp from './App.module.css';
import AsideBar from './components/AsideBar';
import Header from './components/Header';
import Home from './components/Home';
import PlayBar from './components/PlayBar';
import CreatePlayList from './components/CreatePlayList';
import { AudioProvider } from './components/hooks/useAudio';

function App() {

  type Playlist = ComponentState;

  const [showHome, setShowHome] = useState(true);
  const [playLists, setPlayLists] = useState<Array<Playlist>>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLength, setAudioLength] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageLogo, setImageLogo] = useState('');
  const minutes = parseInt((audioLength/60).toFixed(0));
  const seconds = Math.trunc(audioLength%60);

  return (
    <>
      <Header />
      <AudioProvider>
        <div className={stylesApp.mainContent}>
          <AsideBar playLists={playLists} setShowHome={setShowHome}/>
          {showHome ? <Home setIsPlaying={setIsPlaying} setAudioLength={setAudioLength} setTitle={setTitle} 
          setDescription={setDescription} setImageLogo={setImageLogo}/> : <CreatePlayList playLists={playLists} setPlayLists={setPlayLists}/>}
        </div>
        <PlayBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioMinutes={minutes} audioSeconds={seconds}
        title={title} description={description} imageLogo={imageLogo} />
       </AudioProvider>
    </>
  )
}

export default App
