import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'js - yazik' },
    { id: 2, title: 'Python', body: 'Python - yazik' },
    { id: 3, title: 'C++', body: 'C++ - yazik' }
  ])
  const [filter, setFilter] = useState({sort:'', query:''})


  const sortedPosts = useMemo(() => {
    console.log('wsda')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} ></PostFilter>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
      </div>
  );
}

export default App;