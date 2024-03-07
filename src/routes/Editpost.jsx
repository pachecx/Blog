import React from 'react';
import { api } from '../axios/config';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStyle.scss';

export const EditPost  = () => {

  const navigate = useNavigate();

  const [ title, setTitle] = useState();
  const [ body, setBody] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await api.get(`/posts/${id}`);

      const data = response.data

      setTitle(data.title);
      setBody(data.body)
    } catch (error) {
      console.log(error)
    }
  };

  const EditPost = async () => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await api.put(`/posts/${id}`, { 
      body: post,
    });

    navigate("/");
  };
  
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className='new-post'>
      <h2>Editando: {title}</h2>
     <form onSubmit={(e) => {EditPost(e)}}>
      <div className="form-control">
        <label htmlFor='title'>Título:</label>
        <input 
          type='text'
          name='title'
          id='title'
          placeholder='Digite o título'
          onChange={(e) => setTitle(e.target.value)}
          value={title || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor='body'>Conteúdo:</label>
        <textarea 
          name='body'
          id='body'
          placeholder='Digite o Conteúdo'
          onChange={(e) => setBody(e.target.value)}
          value={body || ""}
        />
      </div>
      <input type='submit' value="Editar Post" className='btn'/>
     </form>
    </div>
  )
}

