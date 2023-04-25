import { Link } from "react-router-dom";
import "./style.css";
import BlogPost from "../BlogPost";

const RelatedPosts = ({ posts, idPostDetail }) => {
  const postsWithoutDetailPost = posts.filter(
    (post) => post.id !== idPostDetail
  );

  return (
    <article className="related-posts">
      <h2>Related posts</h2>
      <div className="related-posts__wrapper">
        {posts &&
          postsWithoutDetailPost.slice(0, 3).map((post) => (
            <Link
              to={`../posts/${post.id}`}
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

export default RelatedPosts;
