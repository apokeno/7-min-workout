import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { CiSettings, CiRepeat, CiViewList, CiDumbbell } from 'react-icons/ci';

import '../App.css';
import WorkoutConfigModal from './WorkoutConfigModal';
import {Workout} from "../types/definitions";

function CountdownControls({ workout, onCancel, onPause, onRepeat, onConfig }: { workout: Workout, onConfig: any, onCancel: any, onPause: any, onRepeat: any }) {
    const navigate = useNavigate();

    return (
        <section>
            <div className="button-wrapper" style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
                {/*<CiSettings size={35} title={'Настроить'} onClick={onConfig}/>*/}
                
                <WorkoutConfigModal workout={workout} onConfig={onConfig} onPause={onPause}/>
                
                {/*<MyModal />*/}

                <CiDumbbell size={50} title={'Упражнения'} onClick={() => navigate("/exercises")}/>
                            
                <CiViewList size={50} title={'Тренировки'} onClick={() => navigate("/list")}/>
                
                <CiRepeat size={35} title={'Повторить'} onClick={onRepeat}/>
            </div>
        </section>
    );
}

export default CountdownControls;
