import { useNavigate } from "react-router-dom";
import SignForm from "../components/signin/SignForm";

const SignIn = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="sidebar">
        <div className="h-screen flex flex-col justify-center bg-[#F9D86C]">
          <SignForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
      <div className="content" style={{ flex: 6 }}>
        <img
          className="object-cover w-full h-full"
          src="./src/assets/bg-login.jpg"
          alt="tps image"
        />
      </div>
    </aside>
  );
};

export default SignIn;
