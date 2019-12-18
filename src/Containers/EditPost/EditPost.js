import React, {Component} from 'react';
import axios from 'axios';
import FormBlock from "../../Components/FormBlock/FormBlock";
import Spinner from "../../Components/UI/Spinner/Spinner";

class EditPost extends Component {
    state = {
        posts : {
            title : '',
            text : '',
            dateNow : null,
        },
        loading : false
    };
    async componentDidMount() {
        let id = this.props.match.params.id;
        let response = await axios.get('/notes/' + id + '.json');
        this.setState({posts : response.data});
    }

    postEdit = async (event) => {
        let id = this.props.match.params.id;
        event.preventDefault();
        await axios.put('/notes/' + id + '.json', this.state.posts);
        this.props.history.push('/');
    };
    inputChangeHandler = event => {
        event.persist();
        this.setState(prevState => {
            const stateCopy = {...prevState.posts};
            stateCopy[event.target.name] = event.target.value;
            return {posts : stateCopy};
        })
    };
    render() {
        let form = <FormBlock
            inputValue={this.state.posts.title}
            contentValue={this.state.posts.text}
            submit={this.postEdit}
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

export default EditPost;