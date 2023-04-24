import "./style.css";
import PostTagList from "../PostTagList";
import useFetch from "../../hooks/useFetch";

const PostDetail = ({ post }) => {
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
      <div className="detail">
        <div className="detail__featuredimg-wrapper">
          <img
            src={featuredImg}
            alt={post.title.rendered}
            className="detail__featuredimg"
          />
        </div>
        {tags && tags.length > 0 ? (
          <PostTagList tags={tags} />
        ) : (
          "No tags found"
        )}{" "}
        <h2
          className="detail__title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h2>
        <div
          className="detail__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    </>
  );
};

export default PostDetail;
