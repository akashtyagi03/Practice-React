import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center  content-center justify-around p-2 bg-orange-500'>
        <h1 className='font-bold text-2xl'>Pomodoro</h1>
        <ul className='flex gap-7 items-center'>
            <li className='text-xl cursor-pointer'>Setting</li>
            <li className='text-xl cursor-pointer'>About</li>
            <button className='text-xl border-1 rounded-2xl p-2 bg-amber-50 cursor-pointer'>Sign in</button>
        </ul>
    </div>
  )
}

export default Header
