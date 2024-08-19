import Header from './components/Header'
import './App.css'
import ListenAgain from './components/ListenAgain'
import QuickPicks from './components/QuickPicks'
import RecommendedAlbums from './components/RecommendedAlbums'
import SimilarTo from './components/SimilarTo'
import PlayBar from './components/PlayBar'

function App() {

  return (
    <>
      <Header/>
      <ListenAgain/>
      <QuickPicks/>
      <RecommendedAlbums/>
      <SimilarTo/>
      <PlayBar/>
    </>
  )
}

export default App
