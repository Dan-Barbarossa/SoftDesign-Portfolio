import React from 'react'
import ReactSwitch from 'react-switch'

const PasswordGenerator = () => {
  return (
    <div className='pt-8 text-white font-bold'>
      <div className= 'flex flex-col items-center'>
        <div className='bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded'>

        
      <div>
      <label>Password Length: </label>
      <input 
      className = 'w-12 bg-purple-700 pl-2'
      type='number'
      />
      </div>
      <div>
        <label>Include Uppercase: </label>
        <ReactSwitch 
        height = {20}
        width = {40}
        handleDiameter={18}
        />
      </div>

      <div>
        <label>Include Numbers: </label>
        <ReactSwitch 
        height = {20}
        width = {40}
        handleDiameter={18}
        />
      </div>

        <div>
        <label>Include Special Characters: </label>
        <ReactSwitch 
        height = {20}
        width = {40}
        handleDiameter={18}
        />
      </div>

      <button> Generate Password </button>
    </div>
    </div>
    </div>
  )
}

export default PasswordGenerator