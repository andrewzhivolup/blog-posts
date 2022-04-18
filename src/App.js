import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css"

function App() {

const [posts, setPosts] = useState([
  {id:1, title: 'JS', body: 'js - yazik'},
  {id:2, title: 'JSx', body: 'js - yazik'},
  {id:3, title: 'JSc', body: 'js - yazik'}
])

  return (
    <div className="App">
      <PostList posts = {posts} title = {'Список постов'}/>
    </div>
  );
}

export default App;