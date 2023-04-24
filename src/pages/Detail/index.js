import "./style.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PostDetail from "../../components/PostDetail";
import RelatedPosts from "../../components/RelatedPosts";
import Skeleton from "react-loading-skeleton";

const Detail = () => {
  const { id } = useParams();

  const {
    data: post,
    isPending,
    error,
  } = useFetch(`https://stage.maxv.be/wp-json/wp/v2/posts/${id}?_embed`);

  const postTags = post && post.tags.length > 0 ? post.tags : [-1];
  const {
    data: tags,
    isPendingTags,
    errorTags,
  } = useFetch(
    `https://stage.maxv.be/wp-json/wp/v2/tags?include=${postTags.join()}`
  );

  const {
    data: posts,
    isPendingPosts,
    errorPosts,
  } = useFetch(
    `https://stage.maxv.be/wp-json/wp/v2/posts?tags=${postTags.join()}&_embed`
  );

  return (
    <>
      {isPending && (
        <>
          <Skeleton borderRadius={12} height={200} />
          <Skeleton width={300} style={{ marginTop: "0.75rem" }} />
          <Skeleton
            height={"2rem"}
            width={200}
            style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}
          />
          <Skeleton count={6} width={"70%"} />
        </>
      )}
      {post && (
        <div className="page-detail">
          <PostDetail post={post} tags={tags} />
          {posts && (
            <RelatedPosts posts={posts} idPostDetail={post.id} tags={tags} />
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
