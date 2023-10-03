import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>I Am Home Component</p>
      <Link to="/about">About</Link> <br />
      <Link to="/contact">Contact</Link>
    </>
  );
};
export default Home;
