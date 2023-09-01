import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          width: "80vh",
          height: "50vh",
          margin: "auto",
          marginTop: "10",
          borderRadius: "10px",
          textAlign: "center",
          padding: "10px",
          boxShadow: "0 0 10px 0px #000000",
          marginTop: "10",
          marginBottom: "10",
        }}
      >
        <h1>Login With</h1>
        <h3 style={{ marginBottom: "70px" }}>Choose any one option</h3>
        <a href="https://64f0d7202e5ef21bfdf1865f--golden-unicorn-cd344f.netlify.app/">
          <button>Phone</button>
        </a>
        <Link to={"/signUp"}>
          <button>Email</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
