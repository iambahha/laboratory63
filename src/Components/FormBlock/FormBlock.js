import React from 'react';
const FormBlock = ({inputChange,inputValue,contentValue,submit}) => {
    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input value={inputValue} name="title" onChange={inputChange} type="text" className="form-control"  aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Post</label>
                <textarea value={contentValue} onChange={inputChange} className="form-control" name="text"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default FormBlock;