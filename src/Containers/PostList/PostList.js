import React, {Component} from 'react';
import axios from 'axios';
import Post from "../../Components/Post/Post";
import Spinner from "../../Components/UI/Spinner/Spinner";

class PostList extends Component {
    state = {
        posts: [],
        loading: true
    };
    _getAllPosts = async () => {
        let response = await axios.get('/notes.json');
        if (response.data) {
            let posts = Object.keys(response.data).map(key => {
                return {...response.data[key], id: key}
            });
            this.setState({posts,loading : false});
        } else {
            this.setState({loading : false});
        }
    };

    componentDidMount() {
        this._getAllPosts();
    }
    getMoreInfo = id => {
      this.props.history.push('/posts/' + id);
    };

    render() {
       let posts = this.state.posts.map(post => {
            return (
                <Post btnText="Read More" click={() => this.getMoreInfo(post.id)} date={post.dateNow} key={post.id} title={post.title}/>
            )
        });
        if(this.state.loading){
            posts = <Spinner/>;
        }
        return (
            <div className="container mt-3">
                {posts}
            </div>
        );
    }
}

export default PostList;