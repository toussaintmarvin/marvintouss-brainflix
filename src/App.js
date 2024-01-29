//import state
import { useState } from 'react';

//import data
import Video from './data/video-details.json'

//import components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';
import HeroContent from './components/HeroContent/HeroContent';

//import styling
import './App.scss';

function App() {

  //create a state hook
  const [currentVideoId, setVideoId] = useState(Video[0].id);
  // find the details of selected video from the data array
  // id is being set in VideoList component 
  let selectedVideo = Video.find(e => e.id === currentVideoId)

  return (
  <>
    <Header /> 
    <Hero 
      // pass selected video's detailed data
      //Hero component displays the selected video
      selectedVideo = {selectedVideo}
    />
    {/* container for desktop breakpoint layout purposes*/}
    <section className='container'>
      
      <section className='container__left'>
        <HeroContent 
          // HeroContent displays the selected video's content
          //pass selected video's detailed data
          selectedVideo = {selectedVideo}
        />
        <CommentSection 
          //pass selected video's detailed data
          selectedVideo = {selectedVideo}
        />
      </section>

      <VideoList
        setVideoId = {setVideoId}
        //pass only selected video's Id 
        //since we already have the required data in this component
        selectedVideoId = {selectedVideo.id}
      />

    </section>
  </>  
  );
}

export default App;
