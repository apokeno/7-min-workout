import React from 'react'
import styled from 'styled-components'
import { FaRedo } from 'react-icons/fa';

const QuickStepsDiv = styled.div`
  display: flex;
  width: 100%;
`

const QuickSteps = () => {
  return (
    <QuickStepsDiv className="mx-40">
      <div className="flex-grow flex flex-col items-center">
        <div className="m-3 border-4 border-blueGrey text-3xl rounded-full w-32 h-32 flex justify-center items-center">
          30
        </div>
        second exercises
      </div>
      <div className="flex-grow flex flex-col items-center">
        <div className="m-3 border-4 border-blueGrey text-3xl rounded-full w-32 h-32 flex justify-center items-center">
            10
        </div>
          second break
      </div>
      <div className="flex-grow flex flex-col items-center">
        <div className="m-3 border-4 border-blueGrey text-3xl rounded-full w-32 h-32 flex justify-center items-center">
          <FaRedo />
        </div>
        repeat!
      </div>
    </QuickStepsDiv>
  )
}

export default QuickSteps