import React from 'react';
import { api } from '../axios/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostStyle.scss';

export const Post = () => {
  const { id } = useParams({});
  const [post, SetPost] = useState({});

  const getPost = async () => {
    try {
      const response = await api.get(`/posts/${id}`);

      const data = response.data

      SetPost(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.title}</p>
        </div>
      )}
    </div>
  );
};
