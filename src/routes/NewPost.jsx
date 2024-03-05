import { useState } from 'react';
import { api } from '../axios/config';
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import './NewStyle.scss';

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, SetTitle] = useState();
  const [body, SetBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };
    await api.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className='new-post'>
      <h2>Inserir novo Post:</h2>
     <form onSubmit={(e) => {createPost(e)}}>
      <div className="form-control">
        <label htmlFor='title'>Título:</label>
        <input 
          type='text'
          name='title'
          id='title'
          placeholder='Digite o título'
          onChange={(e) => SetTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor='body'>Conteúdo:</label>
        <textarea 
          name='body'
          id='body'
          placeholder='Digite o Conteúdo'
          onChange={(e) => SetBody(e.target.value)}

        />
      </div>
      <input type='submit' value="Criar Post" className='btn'/>
     </form>
    </div>
  )
};

