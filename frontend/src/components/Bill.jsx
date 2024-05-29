import React from 'react'
import "../styles/Bill.css"

const Bill = ({bill, onDelete}) => {
    const formattedDate = new Date(bill.created_at).toLocaleDateString("en-US");

    return(
        <div className='bill-container'>
            <p className='bill-title'>{bill.title}</p>
            <p className='bill-content'>{bill.content}</p>
            <p className='bill-date'>{formattedDate}</p>
            <button 
                className='delete-button' 
                onClick={() => onDelete(bill.id)} 
            >
                Delete
            </button>
        </div>
    );
}

export default Bill;