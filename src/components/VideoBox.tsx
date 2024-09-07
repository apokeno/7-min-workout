import React from 'react';
import ReactPlayer from 'react-player';

//import '../App.css';
import WorkoutService from "../services/WorkoutService";
import PlayService from "../services/PlayService";

const VideoBox = ({exerciseKey}: { exerciseKey: string }) => {
    const url = PlayService.videoUrl(exerciseKey, WorkoutService.getExercise(exerciseKey)?.videoPath);
    const playerConfig = { youtube: { playerVars: {autoplay: 1, controls: 0, disablekb: false, showinfo: 0} } };
    
    return !url ? null : (
        <div className="aspect-ratio-box">
            <div className="aspect-ratio-box-inside">
                <ReactPlayer url={url} width='100%' height='100%' loop={true} playing={true} light={true} muted={true} config={playerConfig}/>
            </div>
        </div>
    );
}

export default VideoBox;
