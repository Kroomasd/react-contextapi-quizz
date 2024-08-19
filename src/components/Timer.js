import React, { useEffect } from 'react'
import { useQuiz } from '../contexts/QuizContext';

const Timer = () => {
    const { dispatch, remainingSeconds useQuiz();
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className='timer'>
           {minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}
        </div>
    )
}

export default Timer
