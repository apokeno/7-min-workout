import React from "react";
import { CiSettings } from "react-icons/ci";
import {Workout, WorkoutConfig} from "../types/definitions";
import WorkoutConfigForm from "./WorkoutConfigForm";

export default function WorkoutConfigModal({ workout, onConfig, onPause }: { workout: Workout, onConfig: (data: WorkoutConfig) => void, onPause: (state: boolean) => void }) {
  const [showModal, setShowModal] = React.useState(false);
  
  const workoutConfigForm = {
    duration: workout.defaultDuration,
    rest: workout.defaultRest,
    sets: workout.sets,
    shuffle: false,
  } as WorkoutConfig;
  
  const show = (state: boolean) => {
    setShowModal(state);
    onPause(true);
  }
  
  return (
    <>
      <CiSettings size={35} title={'Настроить'} onClick={() => show(true)}/>
      {/*<button*/}
      {/*  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
      {/*  type="button"*/}
      {/*  onClick={() => setShowModal(true)}*/}
      {/*>*/}
      {/*  Open small modal*/}
      {/*</button>*/}
      
      {showModal ? (
        <>
          <div
            className="justify-start top-1.5 items-top flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mr-8 mx-auto max-w-sm text-black/80">{/*ma-5 mr-8*/}
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Быстрая настройка
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => show(false)}
                  >
                    <span className="bg-transparent text-black opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <WorkoutConfigForm workoutConfig={workoutConfigForm} onCancel={() => show(false)} onSubmit={(data: WorkoutConfig) => {
                   setShowModal(false);
                   
                   return onConfig(data);
                 }}></WorkoutConfigForm>
                  
                  
                  {/*<p className="my-4 text-blueGray-500 text-lg leading-relaxed">*/}
                  {/*  */}
                  {/*  <input className="enabled:hover:border-gray-400 disabled:opacity-75" />*/}
                  
                  {/*  <input className="required:border-red-500" />*/}
                  
                  {/*  I always felt like I could do anything. That’s the main*/}
                  {/*  thing people are controlled by! Thoughts- their perception*/}
                  {/*  of themselves! They're slowed down by their perception of*/}
                  {/*  themselves. If you're taught you can’t do anything, you*/}
                  {/*  won’t do anything. I was taught I could do everything.*/}
                  {/*</p>*/}
                </div>
                {/*footer*/}
                {/*<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">*/}
                {/*  */}
                {/*  */}
                {/*  <button*/}
                {/*    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                {/*    type="button"*/}
                {/*    onClick={() => setShowModal(false)}*/}
                {/*  >*/}
                {/*    Close*/}
                {/*  </button>*/}
                {/*  <button*/}
                {/*    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                {/*    type="button"*/}
                {/*    onClick={() => setShowModal(false)}*/}
                {/*  >*/}
                {/*    Save Changes*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          {/*<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>*/}
        </>
      ) : null}
    </>
  );
}
