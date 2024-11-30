import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic :id parameter

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Viewing blog post with ID: {id}</p>
      {/* Additional logic for fetching and displaying the blog post can go here */}
    </div>
  );
};

export default BlogPost;