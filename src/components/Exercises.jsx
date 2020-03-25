import React from 'react'
import Layout from '../components/Layout'
import { exercises } from '../exercises'
import { FaRunning } from 'react-icons/fa';

import ReturnButton from '../components/shared/ReturnButton'

const Exercises = () => {
  return (
    <Layout>
      <ReturnButton text="Back" />
      <div className="flex flex-col">
        <div className="w-full">
          <div className="mt-32 mb-12 text-left flex flex-col">
            <span className="text-5xl">Exercises</span>
            <span className="">All you need is enough space to lay down, a chair and a clear wall space.</span>
            <span className="">Below is each excercise in order.</span>
          </div>
          {exercises.map((exercise, index) => {
            return (
            <div className={`h-64 flex py-2 my-6 border-blueGrey ${index === (exercises.length - 1) ? '' : 'border-b'}`}>
              <div className="w-1/3 flex justify-center items-center">
                <span><FaRunning className="my-5" style={{fontSize: "200px"}} /></span>
              </div>
              <div className="w-2/3 text-left">
                <div className="text-yellow text-xl">{exercise.title}</div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Exercises