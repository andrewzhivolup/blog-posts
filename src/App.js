import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
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
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: '15px 0' }}></hr>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По заголовку' },
            { value: 'body', name: 'По описанию' }
          ]}
        ></MySelect>
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title={'Список постов'} />
        : <h1 style={{ textAlign: "Center" }} >Посты не найдены</h1>
      }
    </div>
  );
}

export default App;