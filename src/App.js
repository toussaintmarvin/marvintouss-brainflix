//import state
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//import components
import Header from './components/Header/Header'
import VideoPlayer from './pages/VideoPlayer';
import VideoUpload from './pages/VideoUpload';

//import styling
import './App.scss';
import NotFound from './pages/NotFound';

function App() {

  
  return (
  <>
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<VideoPlayer />}></Route>
        <Route path="/video/:videoId" element={<VideoPlayer />}></Route>
        <Route path="/upload" element={<VideoUpload />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </>  
  );
}

export default App;