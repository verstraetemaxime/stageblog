import BlogPost from "../BlogPost";
import "./style.css";

const BlogList = ({ posts }) => {
  return (
    <article>
      <h2>My journey at FOLD 🚀</h2>
      <div className="blogs-grid">
        {posts && posts.map((post) => <BlogPost key={post.id} post={post} />)}
      </div>
    </article>
  );
};

export default BlogList;
