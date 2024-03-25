import React from 'react'
import "./styles/arrows.css";

const Arrows = () => {
  return (
    <>
        <div className='arrows flex justify-center items-center'>
            <button className="arrow arrow-left">
                <svg width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" fill='currentColor'>
                    <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z"/>
                </svg>
            </button>

            <button className="arrow-right arrow ">
                <svg width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" fill='currentColor'>
                    <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"/>
                </svg>
            </button>
        </div>
    </>
  )
}

export default Arrows