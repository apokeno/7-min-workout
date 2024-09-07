import React from 'react';
import {ReactSVG} from 'react-svg';

import WorkoutService from "../services/WorkoutService";
import PlayService from "../services/PlayService";

const WorkoutActivity = ({exerciseKey}: { exerciseKey: string }) => {
    const src = PlayService.imageSrc(exerciseKey, WorkoutService.getExercise(exerciseKey)?.image);

    return (!src ? null :
        <section>
            {/*350px*/}
            <span style={{height: '100%'}}>
              <ReactSVG
                  src={src}
                  beforeInjection={svg => {
                      svg.setAttribute('style', 'width: 200px')
                  }}
              />
             </span>
        </section>
    );
}

export default WorkoutActivity;
