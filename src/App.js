import PostList from './components/post/PostList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const getPosts = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/postsfdgd'
      );
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.log('error:', err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => {
    //     console.log(res.data);
    //     setPosts(res.data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     console.log('error:', err.message);
    //     setError(err.message);
    //     setLoading(false);
    //   });

    getPosts();
  }, []);

  if (loading === true) {
    return <div>loading...</div>;
  }

  if (error !== '') {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
