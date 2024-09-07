import { WorkoutConfig } from "../types/definitions";

export default function WorkoutConfigModal({ workoutConfig, onCancel, onSubmit }: { workoutConfig: WorkoutConfig, onCancel: any, onSubmit: any }) {
    const step = 1;
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        console.log('[FORM DATA]', Object.fromEntries(formData.entries()));
        
        onSubmit(Object.fromEntries(formData.entries()));
    };


//function search(formData: any) {
//    const query = formData.get("query");
//    alert(`You searched for '${query}'`);
//}

    console.log('OLOLO', workoutConfig);
    
    return (
    <form onSubmit={handleSubmit}>
        <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    {/*<h2 className="text-base font-semibold leading-7 text-gray-900">Быстрая настройка тренировки</h2>*/}
                    {/*<p className="mt-1 text-sm leading-6 text-gray-600">*/}
                    {/*    Выбранные значения будут действовать только в этой тренировке, для постоянного изменения воспользуйтесь Конструктором тренировок*/}
                    {/*</p>*/}

                    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-6">
                        {/*<div className="col-span-full space-y-10">*/}
                        {/*    <legend className="text-sm font-semibold leading-4 text-gray-900">Продолжительность по умолчанию</legend>*/}
{/*</div>*/}
                                            <div className="col-span-2">
                                                <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Упражнение
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="duration"
                                                        id="duration"
                                                        step={step}
                                                        autoComplete="duration"
                                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={workoutConfig.duration}
                                                    />
                                                </div>
                                            </div>
                    
                                            <div className="col-span-2">
                                                <label htmlFor="restDuration" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Отдых
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="rest"
                                                        id="rest"
                                                        autoComplete="rest"
                                                        step={step}
                                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={workoutConfig.rest}
                                                    />
                                                </div>
                                            </div>
                    
                                            <div className="col-span-2">
                                                <label htmlFor="sets" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Повторы
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="sets"
                                                        id="sets"
                                                        autoComplete="sets"
                                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={workoutConfig.sets}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="col-span-full">
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-left-1.5">
                                                        <input
                                                            id="shuffle"
                                                            name="shuffle"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            defaultChecked={workoutConfig.shuffle}
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-3 px-2">
                                                        <label htmlFor="shuffle" className="font-medium text-gray-900">
                                                            Перемешать в случайном порядке.
                                                        </label>
                                                        {/*<p className="text-gray-500">Будут идти в случайном порядке.</p>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                    {/*<div className="mt-10 space-y-10">*/}
                    {/*    <fieldset>*/}
                    {/*        */}{/*{/*<legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>*/}
                    {/*        <div className="mt-6 space-y-6">*/}
                    {/*            <div className="relative flex gap-x-3">*/}
                    {/*                <div className="flex h-6 items-center">*/}
                    {/*                    <input*/}
                    {/*                        id="randomize"*/}
                    {/*                        name="randomize"*/}
                    {/*                        type="checkbox"*/}
                    {/*                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="text-sm leading-6">*/}
                    {/*                    <label htmlFor="randomize" className="font-medium text-gray-900">*/}
                    {/*                        Перемешать*/}
                    {/*                    </label>*/}
                    {/*                    <p className="text-gray-500">Будут идти в случайном порядке.</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </fieldset>*/}
                    {/*</div>      */}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900 bg-inherit px-6"
                        onClick={() => onCancel()}>
                    Отмена
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Начать
                </button>
            </div>
        </form>
    )
}
