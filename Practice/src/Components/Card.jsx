import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank' rel='noopener noreferrer'>
                <div className='relative'>
                    <div className='overflow-hidden rounded-lg h-100 w-87'>
                        <img className='w-full h-full object-cover' src={props.elem.download_url} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] absolute bottom-[2%] left-[2%]'>{props.elem.author}</h1>
                </div>
            </a>
        </div>
    )
}

export default Card