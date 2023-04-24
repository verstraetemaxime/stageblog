import { Link } from "react-router-dom";
import "./style.css";
import useFetch from "../../hooks/useFetch";
import PostTagList from "../PostTagList";

const BlogPost = ({ post }) => {
  const postTags = post.tags.length > 0 ? post.tags : [-1];

  const {
    data: tags,
    isPending,
    error,
  } = useFetch(
    `https://maxv.be/stageblog/wp-json/wp/v2/tags?include=${postTags.join()}`
  );

  const featuredImg = post._embedded["wp:featuredmedia"]
    ? post._embedded["wp:featuredmedia"][0].source_url
    : "";

  return (
    <>
      <Link to={`posts/${post.id}`} className="post-card__link">
        <section className="post-card">
          <div className="post-card__img-wrapper">
            <img
              src={featuredImg}
              alt={post.title.rendered}
              className="post-card__img"
            />
          </div>
          <div className="post-card__content">
            {tags && tags.length > 0 ? (
              <PostTagList tags={tags} />
            ) : (
              "No tags found"
            )}
            <h3
              className="post-card__title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h3>
            <div
              className="post-card__description"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <div className="post-card__btn-wrapper">
              <span to={`posts/${post.id}`} className="post-card__btn"></span>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default BlogPost;