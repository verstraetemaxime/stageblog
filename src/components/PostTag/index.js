import "./style.css";

const PostTag = ({ tag }) => {
  let tagClassName = "";
  switch (tag.slug) {
    case "html":
      tagClassName = "tag-html";
      break;
    case "css":
      tagClassName = "tag-css";
      break;
    case "javascript":
      tagClassName = "tag-js";
      break;
    case "php":
      tagClassName = "tag-php";
      break;
    case "reactjs":
      tagClassName = "tag-react";
      break;
    case "wordpress":
      tagClassName = "tag-wp";
      break;
    case "sitemanager":
      tagClassName = "tag-sm";
      break;
    default:
      tagClassName = "tag-defautl";
  }

  return <span className={`post-tag ${tagClassName}`}>{tag.name}</span>;
};

export default PostTag;
