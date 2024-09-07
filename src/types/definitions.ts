export type Exercise = {
    id: number;
    name: string;
    description: string,
    image: string,
    videoPath: string,
    duration: number;
    active: 'work' | 'rest' | 'warmup';
};

export type Activity = {
    id?: number;
    exerciseKey: string;
    name?: string;
    duration?: number;
};

export type Workout = {
    id: number;
    name: string;
    description?: string;
    sets: number,
    defaultRest: number,
    defaultDuration: number,
    activities: Activity[];
    totalExercises?: number;
};

export type Activities = Activity[];

export type Step = { name: string, duration: number, current: number, total: number, nextName: string, exerciseKey: string };

export type ActivityTimer = {
    repeatsKey: number,
    isPlaying: boolean,
    step: Step,
    timeRemaining?: number,
    onNextStep: () => void,
    sets: number,
}

export type WorkoutConfig = {
    duration: number;
    shuffle: boolean;
    rest: number;
    sets: number;
}