import React from 'react';
import Moment from "react-moment";
import './Post.css'

const format = {
    sameDay : 'HH:mm:ss'
};

const Post = (props) => {
    return (
        <div className="card text-center mb-3">
            <div className="card-header">
                Post
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <button onClick={props.click} type="button" className="btn btn-outline-primary mr-1">{props.btnText}</button>
                {props.deleteBtnText ? <button onClick={props.RemoveClick} type="button" className="btn btn-outline-primary">{props.deleteBtnText}</button> : null}
            </div>
            <div className="card-footer text-muted date-time">
                <Moment calendar={format}>
                    {props.date}
                </Moment>
            </div>
        </div>
    );
};

export default Post;