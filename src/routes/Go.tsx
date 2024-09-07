import React, {Dispatch, SetStateAction} from 'react';
import {useState, useEffect} from "react";
import { useExpand } from '@vkruglikov/react-telegram-web-app';

import '../App.css';

import CountdownCircle from "../components/CountdownCircle";
import WorkoutService from "../services/WorkoutService";
import CountdownControls from '../components/CountdownControls';
//import WorkoutActivity from '../components/WorkoutActivitiy';
//import WorkoutActivityList from '../components/WorkoutActivitiyList';
import WorkoutSet from '../components/WorkoutSet';
import {Step, WorkoutConfig } from '../types/definitions';
import { useLocation } from 'react-router-dom';
import CountdownHeader from "../components/CountdownHeader";

function Go() {
    const {state} = useLocation();
    const id = state?.id || 0;
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [key, setKey] = useState(0);
    const [repeats, setRepeats] = useState(1);
    const [sets, setSets] = useState(1);
    const [isExpanded, expand] = useExpand();
    const initialWorkout = WorkoutService.fromDefault(id);
    const [workout, setWorkout] = useState(initialWorkout);
    const initialStep = WorkoutService.getStep(initialWorkout)
    const [step, setStep] = useState(initialStep);
    
    const onPause = (state = true) => setIsPlaying(!state);
    
    const onRepeat = () => {
        setRepeats(() => repeats + 1);
        console.log('onRepeat ', key, step);
    }
    
    const onCancel = () => {
        setIsPlaying(false);
        console.log('{Хватит}');
    }

    const onConfigModal = (data: WorkoutConfig) => {
        const newWorkout = WorkoutService.fromConfig(data, id);
        setWorkout(newWorkout);
        setRepeats(repeats + 1);
        setStep(WorkoutService.getStep(newWorkout, key));
        setIsPlaying(true);
        console.log('Сгенерировать тренировку', data, step, repeats);
    }
    
    const onNextStep = () => {
        const nextKey = key + 1;
        setKey(nextKey);
        const activity = WorkoutService.getActivity(workout, nextKey);
        const nextCurrent = WorkoutService.nextCurrent(activity, step?.current);
        setStep(WorkoutService.getStep(workout, nextKey, nextCurrent));
    }

    const onNextSet = () => {
        setSets(() => sets + 1);
        setKey(0);
        setStep(WorkoutService.getStep(workout));
        console.log('onNextSet ', key, step);
    }
    
    useEffect(() => {
        const handleSpacePress = (ev: KeyboardEvent) => ev.key === ' ' ? setIsPlaying(!isPlaying) : null;
        document.addEventListener("keydown", handleSpacePress, {once: false});

        return () => document.removeEventListener("keydown", handleSpacePress);
    }, [isPlaying]);
    
    return (!step ? <WorkoutSet hasNextSet={sets < workout.sets} onCancel={onCancel} onNextSet={onNextSet} /> :
        <div className="App">
            <header className="App-header">
                <section>
                    <div onClick={(event: React.MouseEvent<HTMLElement>) => setIsPlaying(!isPlaying)}>
                        <CountdownHeader step={step} />
                        <CountdownCircle repeatsKey={key + repeats} isPlaying={isPlaying} step={step} sets={sets}
                                         onNextStep={onNextStep}/>
                    </div>
                    <CountdownControls workout={workout} onCancel={onCancel} onPause={onPause} onRepeat={onRepeat} onConfig={onConfigModal}/>
                </section>
            </header>
            {/*{isExpanded && <section className="Go-activity-expanded">*/}
            {/*    <WorkoutActivity exerciseKey={workoutService.getActivity(key).exerciseKey}></WorkoutActivity>*/}
            {/*    <WorkoutActivityList activities={workoutService.getActivities()}></WorkoutActivityList>*/}
            {/*</section>}*/}
            
            {/*<ShowPopupDemo></ShowPopupDemo>*/}
            {/*<ConfigModal/>*/}
            {/*<MyDialog/>*/}
        </div>
    );
}

export default Go;
