import React from 'react'
import Background from '../components/Background'

const Home = () => {
  return (
    <div className='absolute w-full h-full justify-center items-center'>
        {/* <Background /> */}
        <div className='flex flex-col absolute gap-64 top-5 justify-center items-center text-white'>
            <span className='text-8xl'>
                B-Type
            </span>
            <div className='text-3xl flex flex-col justify-center items-center'>
                <button>New Game</button>
                <button>Settings</button>
                <button>My states</button>
            </div>
        </div>
    </div>
  )
}

export default Home