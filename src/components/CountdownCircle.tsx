import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {ActivityTimer, Step} from "../types/definitions";
import WorkoutActivity from './WorkoutActivitiy';

const renderTime = ({remainingTime, step, sets}: { remainingTime: number, step: Step, sets: number }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const format = (val: number) => (val).toLocaleString('en-us', {minimumIntegerDigits: 2});

    return <div style={{fontSize: 18, fontWeight: 160, maxWidth: 326, minWidth: 206}}>
        {/*<div style={{fontSize: 36, padding: '0 14px'}}>{step.name}</div>*/}
        {/*<div>Дальше {step.nextName}</div>*/}
        {/*<div style={{backgroundColor: 'purple'}}>*/}
            <div>
            
            <WorkoutActivity exerciseKey={step.exerciseKey}></WorkoutActivity>
        </div>
        <div style={{fontSize: 80, lineHeight: 1, textAlign: "start" }}>{format(minutes)}:{format(seconds)}</div>
        <div>{step.current} из {step.total} {sets > 2 ? `Сет ${sets}` : ''}</div>
    </div>;
}

const CountdownCircle = ({repeatsKey, isPlaying, step, timeRemaining, onNextStep, sets}: ActivityTimer) => {
    return <CountdownCircleTimer
        key={repeatsKey}
        isPlaying={isPlaying}
        duration={step.duration}
        initialRemainingTime={timeRemaining}
        colors={["#F1A43C", "#F1A43C", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        rotation={'counterclockwise'}
        strokeWidth={7}
        size={360}
        onComplete={() => {
            // do your stuff here
            onNextStep();

//            return {shouldRepeat: false, delay: 1} // repeat animation in 1.5 seconds
        }}
    >
        {({remainingTime}: { remainingTime: number }) => renderTime({remainingTime, step, sets})}
    </CountdownCircleTimer>;
}

export default CountdownCircle;
