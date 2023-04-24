import PostTag from "../PostTag";
import "./style.css";

const PostTagList = ({ tags }) => {
  return (
    <>
      <div className="tags-list">
        {tags.map((tag) => (
          <PostTag key={tag.id} tag={tag} />
        ))}
      </div>
    </>
  );
};

export default PostTagList;
