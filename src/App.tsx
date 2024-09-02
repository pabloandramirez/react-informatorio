import { useState } from 'react';
import stylesApp from './App.module.css';
import AsideBar from './components/AsideBar';
import Header from './components/Header';
import Home from './components/Home';
import PlayBar from './components/PlayBar';
import CreatePlayList from './components/CreatePlayList';

function App() {

  type Playlist = {
    imageUrl: string;
    title: string;
    description: string;
  }

  const [showHome, setShowHome] = useState(true);
  const [playLists, setPlayLists] = useState<Array<Playlist>>([]);

  return (
    <>
      <Header />
      <div className={stylesApp.mainContent}>
        <AsideBar playLists={playLists} setShowHome={setShowHome}/>
        {showHome ? <Home/> : <CreatePlayList playLists={playLists} setPlayLists={setPlayLists}/>}
      </div>
      <PlayBar />
    </>
  )
}

export default App
