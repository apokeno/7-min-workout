import {CiCircleCheck, CiRepeat} from 'react-icons/ci';

const WorkoutSet = ({ hasNextSet, onNextSet, onCancel }: { hasNextSet: boolean, onNextSet: () => void, onCancel: () => void }) => {
//        if (sets < workoutService.getWorkout().sets) {
//            return (
//                <div className="App">
//                    <header className="App-header">
//                        <div className="flex flex-col justify-center items-center">
//                            <div className="mb-6 text-5xl">Следующий круг!</div>
//                            <div className="mb-3 text-xl">Так держать!</div>
//                            <div style={{padding: 50, display: "flex", justifyContent: "space-between"}}>
//                                <CiRepeat size={50} title={'Повторить'} onClick={onNextSet}/>
//                                
//                                <CiCircleCheck size={50} title={'Завершить'} onClick={onCancel}/>
//                            </div>
//                        </div>
//                    </header>
//                </div>
//            ); 
//        }
        
    return (
        <div className="App">
            <header className="App-header">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-6 text-4xl">{hasNextSet ? 'Следующий круг!' : 'Тренировка завершена!'}</div>
                    <div className="mb-3 text-xl">{hasNextSet ? 'Так держать!' : 'Хорошая работа! Не забудь выпить воды'}</div>
                    <div className="p-3 text-xl flex justify-evenly w-full">
                        <CiRepeat size={50} title={'Повторить'} onClick={onNextSet}/>
                        <CiCircleCheck size={50} title={'Завершить'} onClick={onCancel}/>
                    </div>
                </div>
            </header>
            
            
        </div>
    );
};
export default WorkoutSet;
