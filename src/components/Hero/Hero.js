import './Hero.scss';


const Hero = ({selectedVideo}) => {

    if(!selectedVideo ) {
        return <h2>Video Not Found</h2>
    }
    return (
        
        <div className='hero__video-container'>
            <video controls className='hero__video' poster={selectedVideo.image}>
            <source src={`${selectedVideo.video}?api_key=9bd6ead6-03ac-4347-852d-ca77aaf28bd9`} type=""/>
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    );
}

export default Hero