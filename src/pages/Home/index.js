import BlogList from "../../components/BlogList";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("https://stage.maxv.be/wp-json/wp/v2/posts?_embed");
  console.log(posts);
  return <>{posts && <BlogList posts={posts} />}</>;
};

export default Home;
