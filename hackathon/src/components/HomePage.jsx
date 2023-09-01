import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <a href="https://64f0d7202e5ef21bfdf1865f--golden-unicorn-cd344f.netlify.app/">
         
        <button>Get OTP</button>
      </a>
      <Link to={"/signUp"}>
        <button>Email</button>
      </Link>
    </>
  );
};

export default HomePage;
