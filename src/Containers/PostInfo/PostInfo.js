import React, {Component} from 'react';
import axios from 'axios';
import Post from "../../Components/Post/Post";

class PostInfo extends Component {
    state = {
      posts : []
    };
   async componentDidMount() {
      let response = await axios.get('/notes/' + this.props.match.params.id + '.json');
      let arr = [];
      arr.push({...response.data, id : this.props.match.params.id });
      this.setState({posts : arr});
    }
    editPost = (id) => {
      this.props.history.push('/posts/' + id + '/edit');
    };
    postDeleteHandler = async id => {
        await axios.delete(`/notes/${id}.json`);
        let copyPosts = [...this.state.posts];
        let index = copyPosts.findIndex(quote => id === quote.id);
        copyPosts.splice(index,1);
        this.setState({posts : copyPosts});
        this.props.history.push('/');
    };
    render() {
       const info = this.state.posts.map(post => {
          return (
              <Post text={post.text}
                    title={post.title}
                    date={post.dateNow}
                    key={post.id}
                    btnText="Edit"
                    click={() => this.editPost(post.id)}
                    deleteBtnText="Delete"
                    RemoveClick={() => this.postDeleteHandler(post.id)}
              />
          )
       });
        return (
            <div>
                {info}
            </div>
        );
    }
}

export default PostInfo;