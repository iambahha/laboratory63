import React from 'react';
import Moment from "react-moment";

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
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button onClick={props.click} type="button" className="btn btn-secondary mr-1">{props.btnText}</button>
                {props.deleteBtnText ? <button onClick={props.RemoveClick} type="button" className="btn btn-secondary">{props.deleteBtnText}</button> : null}
            </div>
            <div className="card-footer text-muted">
                <Moment calendar={format}>
                    {props.date}
                </Moment>
            </div>
        </div>
    );
};

export default Post;