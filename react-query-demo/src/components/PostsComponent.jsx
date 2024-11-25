import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
queryClient.prefetchQuery('posts', fetchPosts);

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const { data, isLoading, isError } = useQuery('posts', fetchPosts, {
    staleTime: 5000,  // 5 seconds before data is considered stale
    cacheTime: 10000, // 10 seconds before cache is garbage-collected
  });  

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;