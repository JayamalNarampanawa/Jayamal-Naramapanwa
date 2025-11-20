import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchPosts();
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Please login to create posts');
      return;
    }
    
    try {
      await addDoc(collection(db, 'posts'), {
        ...newPost,
        createdAt: serverTimestamp(),
        author: auth.currentUser.email
      });
      setNewPost({ title: '', content: '' });
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="blog container">
      <h1>Blog</h1>
      
      {isLoggedIn && (
        <div className="create-post">
          <h2>Create New Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              required
            />
            <button type="submit" className="btn-submit">Publish Post</button>
          </form>
        </div>
      )}
      
      <div className="posts-list">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Check back soon!</p>
        ) : (
          posts.map(post => (
            <article key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p className="post-meta">
                By {post.author} • {post.createdAt?.toDate().toLocaleDateString()}
              </p>
              <p className="post-content">{post.content}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
