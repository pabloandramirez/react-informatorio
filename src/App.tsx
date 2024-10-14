import { ComponentState, useContext, useState } from 'react';
import stylesApp from './App.module.css';
import AsideBar from './components/AsideBar';
import Header from './components/Header';
import Home from './components/Home';
import PlayBar from './components/PlayBar';
import CreatePlayList from './components/CreatePlayList';
import { PlayAudioProvider } from './components/contexts/AudioContext';
import { PlayBarShowContext } from './components/contexts/PlayBarContext';

function App() {

  type Playlist = ComponentState;

  const [showHome, setShowHome] = useState(true);
  const [playLists, setPlayLists] = useState<Array<Playlist>>([]);
  const playBarContext = useContext(PlayBarShowContext);
  

  return (
    <>
      <Header />
      <PlayAudioProvider>
          <div className={stylesApp.mainContent}>
            <AsideBar playLists={playLists} setShowHome={setShowHome}/>
            {showHome ? <Home/> : <CreatePlayList playLists={playLists} setPlayLists={setPlayLists}/>}
          </div>
          {playBarContext?.showPlayBar&&<PlayBar/>}
      </PlayAudioProvider>
    </>
  )
}

export default App
