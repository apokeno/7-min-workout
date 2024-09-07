import {Activity, Exercise, Step, Workout, WorkoutConfig} from "../types/definitions";
import workouts from '../data/workouts.json'
import exercises from '../data/exercises.json'

export default class WorkoutService {
    static readonly rest = 'rest';
    private static workouts: Workout[] = workouts;
    private static exercises= exercises as unknown as { [key:string] : Exercise };

//    private readonly workout: Workout;
//    private readonly totalExercises: number = 0;

//    private step: Step | null;

//    public current = 0;
    
//    private constructor(workout: Workout) {
//        this.workout = WorkoutService.prepareWorkout(workout);
////        this.step = this.mapStep(0);
//        
//        return this;
//    }
    
    private static prepareWorkout(rawWorkout: Workout, randomize = false) {
        let rawActivities = [ ...rawWorkout.activities];
        const totalExercises = rawActivities.filter((item) => item.exerciseKey !== 'rest').length;
        
        const restExercise = WorkoutService.getExercise('rest');
        const prepareRestActivity: Activity = {
            ...restExercise,
            "exerciseKey": WorkoutService.rest,
            "name": "На старт!",
            "duration": 7,
        };
// lastRestActivity =
//        {
//            "id": 10,
//            "exerciseKey": "rest",
//            "name": "Следующий круг",
//            "duration": 7
//        }
        const defaultRestActivity: Activity = {
            ...restExercise,
            "exerciseKey": WorkoutService.rest,
            "duration": rawWorkout.defaultRest,
        };
        const workout: Workout = { ...rawWorkout, activities: [prepareRestActivity], totalExercises };

        if (randomize) {
            rawActivities = WorkoutService.shuffle(rawActivities)
        }
        
//        console.log('Shuffle', randomize, rawActivities);
        
        rawActivities.forEach((activity, index) => {
            const duration = activity.duration || (activity.exerciseKey === WorkoutService.rest ? workout.defaultRest : workout.defaultDuration);
            workout.activities.push({...activity, duration, id: activity.id || index, name: (activity.name || WorkoutService.getExercise(activity.exerciseKey)?.name)});
            if (rawActivities[index + 1] && activity.exerciseKey !== WorkoutService.rest && rawActivities[index + 1]?.exerciseKey !== WorkoutService.rest) {
                workout.activities.push(defaultRestActivity);
            }
        });
//        console.log('workout', workout.activities);
        
        return workout;
    }
    
    private static shuffle = (array: Activity[]): Activity[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        
        return [ ...array];
    }
    
    static fromDefault = (index: number = 0): Workout => WorkoutService.prepareWorkout(WorkoutService.getDefault(index));
    
    static fromConfig = (config: WorkoutConfig, index: number = 0): Workout => WorkoutService.prepareWorkout({
        ...WorkoutService.getDefault(index),
        defaultDuration: config.duration,
        defaultRest: config.rest,
        sets: config.sets,
    } as Workout, config.shuffle);
    
    static getListDefault = (): Workout[] => WorkoutService.workouts;
    
    static getExercises = (): { [key:string] : Exercise } => WorkoutService.exercises;
    
    static getDefault = (index: number = 0): Workout => WorkoutService.workouts[index] || null;
    
    static getExercise = (key: string): Exercise => WorkoutService.exercises[key] || null;
    
    static totalExercises = (workout: Workout) => workout.activities.filter((item) => item.exerciseKey !== WorkoutService.rest).length;
    
//    getWorkout = (): Workout => this.workout;
//    getActivities = (): Activity[] => this.workout.activities;
    static getActivity = (workout: Workout, index: number): Activity => workout.activities[index];
//    getExercise = (index: number): Exercise => WorkoutService.getExercise(this.workout.activities[index].exerciseKey);

    static getStep(workout: Workout, index: number = 0, current: number = 0): Step | null {
        if (index >= workout.activities.length) {
            return null;
        }
        
        const activity: Activity = workout.activities[index];
        if (!activity) {
            return null;
        }
//        console.log('activity', workout.activities);
        
        return {
            current,
            name: activity.name,
            duration: activity.duration,
            total: workout.totalExercises,
            nextName: workout.activities[index + 1]?.name || null,
            exerciseKey: activity.exerciseKey !== WorkoutService.rest ? activity.exerciseKey : workout.activities[index + 1]?.exerciseKey,
        } as Step;
    }
    
    static nextCurrent = (nextActivity: Activity, lastCurrent = 0) => nextActivity?.exerciseKey !== WorkoutService.rest ? lastCurrent  + 1 : lastCurrent;
}
