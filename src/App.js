import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddPost from "./Containers/AddPost/AddPost";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Containers/PostList/PostList";
import PostInfo from "./Containers/PostInfo/PostInfo";
import EditPost from "./Containers/EditPost/EditPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={PostList}/>
            <Route path="/posts/add" component={AddPost}/>
            <Route exact path="/posts/:id/edit" component={EditPost}/>
            <Route path="/posts/:id" component={PostInfo}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
