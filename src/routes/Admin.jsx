import React from 'react';
import { api } from '../axios/config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminStyle.scss';

export const Admin = () => {

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
  };

  const deletePost = async(id) => {
    await api.delete(`/posts/${id}`)

    const filteredPosts = posts.filter((post) => post.id !== id)
    
    Setpost(filteredPosts)
  };


  useEffect(()=>{
    getPost();
  }, []);

  return (
    <div>
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className='btn edit-btn' to={`/edit/${post.id}`}>Editar</Link>
              <button className='btn delete-btn' onClick={() => deletePost(post.id)}>Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}