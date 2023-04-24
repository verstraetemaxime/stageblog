import { Link } from "react-router-dom";
import BlogPost from "../BlogPost";
import "./style.css";

const BlogList = ({ posts }) => {
  return (
    <article>
      <h2>My journey at FOLD 🚀</h2>
      <div className="blogs-grid">
        {posts &&
          posts.map((post) => (
            <Link
              to={`posts/${post.id}`}
              key={post.id}
              className="post-card__link"
            >
              <BlogPost post={post} />
            </Link>
          ))}
      </div>
    </article>
  );
};

export default BlogList;
