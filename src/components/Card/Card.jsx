import React from 'react'

const Card = (props) => {
    return (
        <div className="w-full lg:max-w-full lg:flex">
            <img className='h-48 lg:h-auto lg:w-80 w-full md:h-full sm:h-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' src={props.img} alt={props.img} />
            <div className="shadow-xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                {
                    props.isPremium 
                    ? <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-yellow-500 rounded-full">PREMIUM</span>
                    : <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-green-500 rounded-full">FREE</span>
                }
                <div className="mt-4 text-gray-900 font-bold text-4xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
