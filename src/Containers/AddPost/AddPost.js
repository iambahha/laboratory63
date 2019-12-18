import React, {Component} from 'react';
import FormBlock from "../../Components/FormBlock/FormBlock";
import axios from 'axios';
import Spinner from "../../Components/UI/Spinner/Spinner";

class AddPost extends Component {
    state = {
        posts : {
            title : '',
            text : '',
            dateNow : null,
        },
        loading : false
    };
    inputChangeHandler = event => {
      event.persist();
      let stateCopy = {...this.state.posts};
      stateCopy[event.target.name] = event.target.value;
      stateCopy['dateNow'] = Date.now();
      this.setState({posts : stateCopy});
    };
    addPostHandler = async (event) => {
        event.preventDefault();
        this.setState({loading: true});
        await axios.post('/notes.json', this.state.posts);
        this.setState({loading : false});
        this.props.history.push('/');
    };
    render() {
        let form = <FormBlock
            inputValue={this.state.posts.title}
            contentValue={this.state.posts.text}
            submit={this.addPostHandler}
            inputChange={this.inputChangeHandler}
        />;
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default AddPost;