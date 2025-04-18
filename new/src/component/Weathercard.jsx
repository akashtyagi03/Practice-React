import React from 'react'

const Weathercard = ({ city, temprature, condition }) => {
    return (
        <div className='border-1 h-20 w-100 flex place-content-around rounded-xl p-3'>
            <div>
                <label className='font-bold text-xl'>City</label>
                <div>{city}</div>
            </div>
            <div>
                <label className='font-bold text-xl'>Temprature </label>
                <div> {temprature}</div>
            </div>
            <div>
                <label className='font-bold text-xl'>Condition</label>
                <div> {condition}</div>
            </div>
        </div>
    )
}

export default Weathercard
