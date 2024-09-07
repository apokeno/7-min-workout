import React from 'react';

import WorkoutService from "../services/WorkoutService";
import WorkoutActivity from '../components/WorkoutActivitiy';
import TgBackButton from '../components/TgBackButton';

import VideoBox from "../components/VideoBox";

function ExerciseListX() {
    const exercises = WorkoutService.getExercises();

    const listItems = Object.entries(exercises).slice(2).map(([exerciseKey, exercise]) => {
        return (
            <div key={exercise.id} style={{width: 350}}>
                <section>
                    <h3>{exercise.name}</h3>
                    
                    <WorkoutActivity exerciseKey={exerciseKey}></WorkoutActivity>
                                 
                    <span className="font-normal text-sm">{exercise.description}</span>
                    
                    <VideoBox exerciseKey={exerciseKey} />
                </section>
            </div>
        );
    });
    
    return (
        <div className="App">
            <header className="App-header" style={{fontSize: 16, paddingBottom: 30}}>
                <TgBackButton />
                
                <div style={{width: 350}}>
                    <h2>Упражнения</h2>
                    <h4>Несколько практических замечаний:</h4>
                    <div>
                        <ul>
                            <li>
                                Если просто посмотреть на картинку – комплекс кажется очень простым. Но когда начинаешь делать в нужном темпе – да, действительно, нагрузка довольно серьезная.
                            </li>
                            <li>
                                Нагрузку легко менять под ваши нужды и степень подготовки. Упражнения можно делать в более простом или сложном варианте. Т.е. этот комплекс можно использовать почти при любом уровне подготовки.
                            </li>
                            <li>
                                Даже когда вы очень сильно заняты – 7 минут можно найти всегда.
                            </li>
                            <li>
                                Не требует сложных тренажеров – поэтому можно выполнить где угодно. Хоть дома, хоть в командировке.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>{listItems}</div>
                </div>
            </header>
        </div>
        
    );
}

export default ExerciseListX;
