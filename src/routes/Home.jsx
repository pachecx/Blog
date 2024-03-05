import { useState, useEffect } from 'react';
import { api } from '../axios/config';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomeStyle.scss';

export const Home = () => {
  const [posts, Setpost] = useState([]);

  const getPost = async ()=>{
    console.log('teste')

    try {
      const response = await api.get("/posts");

      const data = response.data;
      console.log(data);
      Setpost(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPost();
  }, []);

  return (
    <div className='home'>
      <h1>Últimos posts</h1>
      {posts.length === 0 ? <p>Carregando....</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

//Criar estrutura RAFCE