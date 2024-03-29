import axios from 'axios';
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

export default function Answer({ e, data }) {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const answer = useRef();
    const postAnswers = (questionID) => {
        if (answer.current.value) {
            try {
                axios.post(`${REACT_APP_API_URL}/api/productactions/postanswers/${questionID}`, { answer: answer.current.value })
                    .then((res) => {
                        if (res.data.status === 1 || res.status === 200 || res.status === 201) {
                            alert("Answered Success!")
                        }
                        else {
                            alert("Something went wrong.")
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } catch (error) {
                console.log(error)
            }
        }
        else {
            alert('Answer field cant be empty.')
        }
    }

    const convertToDate = (microsecond) => {
        const timestamp = microsecond;
        const date = new Date(timestamp / 100000);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        return formattedDate
    };
    return (
        <div className=' mt-1'><hr />
            <div className='ml-6 mt-1 mb-3'>
                <NavLink to={`/product/${data?._id}`}><p className='font-medium'>Comment from: {data?.title.slice(0, 40)}...</p></NavLink>
            </div>
            <div className='ml-6 p-3'>
                <div className='flex gap-2 items-center'>
                    <div className='font-bold'>
                        <p><span className='text-gray-400 font-medium'>
                            Name:
                        </span>
                            <span> {e.name}</span></p>
                    </div>
                    <div>
                        <p className='text-xs'>. {convertToDate(e.date)}</p>
                    </div>
                </div>
                <div className='ml-2'>
                    <p><span className='text-gray-400 font-medium'>Question:</span> <span className='text-gray-700 font-semibold'>{e.question}</span></p>
                </div>
                {
                    !e.answer.length > 0 ? <div className="md:w-1/3 ml-7 mt-2 mb-4 text-white">
                        <div className="mb-2">
                            <input ref={answer}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Answer"
                            />
                        </div>
                        <button
                            className="block w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={() => { postAnswers(e._id) }}
                        >Answer</button>
                    </div> :
                        <div className='md:w-1/3 ml-7 mb-4 text-gyra-600'>
                            <p>Answer: {e.answer.map(e => e)}</p>
                        </div>
                }
            </div>
        </div>
    )
}
