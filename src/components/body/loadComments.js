import React from 'react'
import dateFormat from 'dateformat'
const LoadComments = (props) => {
    return (
        props.comments.map(comments => {

            return (
                <div key={comments.id}>
                    <h5>{comments.author}</h5>
                    <p>{comments.comment}</p>
                    <p>{comments.rating}</p>
                    <p> {dateFormat(comments.date, 'dddd, mmmm dS, yyyy, h:mm:ss')} </p>
                </div>

            )

        })
    )
}


export default LoadComments;