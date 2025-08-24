import { useNavigate } from "react-router-dom";
import useBlogPosts from "../../hook/useBlogPosts";

function HomePage() {
  const navigate = useNavigate();

  const { blogPosts, isLoading, isError } = useBlogPosts();

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>
      <div className="board">
        {isLoading && <h1>Loading ....</h1>}
        {isError && <h1>Request failed</h1>}

        {blogPosts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
                <button className="edit-button">Edit post</button>
              </div>

              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
