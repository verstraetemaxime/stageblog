import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogList from "../../components/BlogList";
import useFetch from "../../hooks/useFetch";
import "./style.css";

const Home = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("https://stage.maxv.be/wp-json/wp/v2/posts?_embed");
  console.log(posts);
  return (
    <>
      {isPending && (
        <article className="loading-blogs-home__wrapper">
          <h2>My journey at FOLD 🚀</h2>
          <Skeleton
            height={480}
            count={6}
            borderRadius={6}
            inline={true}
            enableAnimation={false}
          />
        </article>
      )}
      {posts && <BlogList posts={posts} />}
    </>
  );
};

export default Home;
