import './Hero.scss';


const Hero = ({selectedVideo}) => {

    
    return (
        <div className='hero__video-container'>
            <video controls className='hero__video' poster={selectedVideo.image}>
                {/* added the video link as place holder even though 
                we're not connected to the api yet, wasn't sure what the video format is */}
                <source src={selectedVideo.video} type=""/>
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    );
}

export default Hero