import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PostDetail from "../../components/PostDetail";

const Detail = () => {
  const { id } = useParams();
  const {
    data: post,
    isPending,
    error,
  } = useFetch(`https://maxv.be/stageblog/wp-json/wp/v2/posts/${id}?_embed`);

  return <>{post && <PostDetail post={post} />}</>;
};

export default Detail;
