import { useParams, Link } from "react-router-dom";
import useBlogPosts from "../../hook/useBlogPosts";

function ViewPostPage() {
  const { id } = useParams();
  const { blogPosts, isLoading, isError } = useBlogPosts();
  
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (isLoading) {
    return (
      <div>
        <Link to="/">← Back to Posts</Link>
        <div>Loading ...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Link to="/">← Back to Posts</Link>
        <div>Request failed</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <Link to="/">← Back to Posts</Link>
        <div>Post not found</div>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>By {post.author} • {post.createdAt}</p>
      <p>{post.content}</p>
      <Link to={`/post/edit/${post.id}`}>
        <button>Edit Post</button>
      </Link>
    </div>
  );
}

export default ViewPostPage;
