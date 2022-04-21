import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'js - yazik' },
    { id: 2, title: 'Python', body: 'Python - yazik' },
    { id: 3, title: 'C++', body: 'C++ - yazik' }
  ])

  

  const addNewPost = (e) => {
    e.preventDefault()
      setPosts([...posts, {...post, id:Date.now()}])
      setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <PostForm></PostForm>
      <PostList posts={posts} title={'Список постов'} />
    </div>
  );
}

export default App;