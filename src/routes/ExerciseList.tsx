import React from 'react';
import { useNavigate } from 'react-router-dom'

import WorkoutService from "../services/WorkoutService";
import TgBackButton from '../components/TgBackButton';

function ExerciseList() {
    const navigate = useNavigate();
    const workouts = WorkoutService.getListDefault();
    
    return (
        <div className="App">
            <header className="App-header" style={{paddingBottom: 30, width: 360}}>
                <div style={{fontSize: 18, fontWeight: 160, maxWidth: 400, lineHeight: 1.2}}>
                    <div className='p-1 flex'>
                        <TgBackButton />
                        <div className='text-4xl'>Тренировки</div>
                    </div>
                </div>
                
            <div className="w-full text-sm font-medium border-gray-600">
                <ul role="list" className="divide-y divide-gray-100">
                    {workouts.map((workout) => (
                        <li key={workout.id} className="flex justify-between gap-x-6 py-5" onClick={() => navigate("/", { state: { id: workout.id }})}>
                            <div className="flex min-w-0 gap-x-4 text-left">
                                {/*<img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />*/}
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6">{workout.name}</p>
                                    <p className="mt-1 text-xs leading-5 line-clamp-2">{workout?.description}</p>
                                </div>
                            </div>
                            <div className="shrink-0 flex flex-col items-end">
                                <p className="text-sm leading-6 text-gray-600">{workout.totalExercises || 1 + " x " + workout.sets }</p>
                                {/*{person.lastSeen ? (*/}
                                {/*    <p className="mt-1 text-xs leading-5 text-gray-500">*/}
                                {/*        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>*/}
                                {/*    </p>*/}
                                {/*) : (*/}
                                {/*    <div className="mt-1 flex items-center gap-x-1.5">*/}
                                {/*        <div className="flex-none rounded-full bg-emerald-500/20 p-1">*/}
                                {/*            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />*/}
                                {/*        </div>*/}
                                {/*        <p className="text-xs leading-5 text-gray-500">Online</p>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            </header>
            {/*<div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">*/}
            {/*    <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">*/}
            {/*        Profile*/}
            {/*    </a>*/}
            {/*    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">*/}
            {/*        Settings*/}
            {/*    </a>*/}
            {/*    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">*/}
            {/*        Messages*/}
            {/*    </a>*/}
            {/*    <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">*/}
            {/*        Download*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
        
    );
}

export default ExerciseList;


//const people = [
//    {
//        name: 'Leslie Alexander',
//        email: 'leslie.alexander@example.com',
//        role: 'Co-Founder / CEO',
//        imageUrl:
//            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: '3h ago',
//        lastSeenDateTime: '2023-01-23T13:23Z',
//    },
//    {
//        name: 'Michael Foster',
//        email: 'michael.foster@example.com',
//        role: 'Co-Founder / CTO',
//        imageUrl:
//            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: '3h ago',
//        lastSeenDateTime: '2023-01-23T13:23Z',
//    },
//    {
//        name: 'Dries Vincent',
//        email: 'dries.vincent@example.com',
//        role: 'Business Relations',
//        imageUrl:
//            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: null,
//    },
//    {
//        name: 'Lindsay Walton',
//        email: 'lindsay.walton@example.com',
//        role: 'Front-end Developer',
//        imageUrl:
//            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: '3h ago',
//        lastSeenDateTime: '2023-01-23T13:23Z',
//    },
//    {
//        name: 'Courtney Henry',
//        email: 'courtney.henry@example.com',
//        role: 'Designer',
//        imageUrl:
//            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: '3h ago',
//        lastSeenDateTime: '2023-01-23T13:23Z',
//    },
//    {
//        name: 'Tom Cook',
//        email: 'tom.cook@example.com',
//        role: 'Director of Product',
//        imageUrl:
//            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//        lastSeen: null,
//    },
//]

//export default function Example() {
//    return (
//        <ul role="list" className="divide-y divide-gray-100">
//            {people.map((person) => (
//                <li key={person.email} className="flex justify-between gap-x-6 py-5">
//                    <div className="flex min-w-0 gap-x-4">
//                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
//                        <div className="min-w-0 flex-auto">
//                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
//                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
//                        </div>
//                    </div>
//                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//                        <p className="text-sm leading-6 text-gray-900">{person.role}</p>
//                        {person.lastSeen ? (
//                            <p className="mt-1 text-xs leading-5 text-gray-500">
//                                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//                            </p>
//                        ) : (
//                            <div className="mt-1 flex items-center gap-x-1.5">
//                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                                </div>
//                                <p className="text-xs leading-5 text-gray-500">Online</p>
//                            </div>
//                        )}
//                    </div>
//                </li>
//            ))}
//        </ul>
//    )
//}