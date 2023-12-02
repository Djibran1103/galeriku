import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="sidebar">
        <div className="h-screen flex flex-col justify-center bg-[#F9D86C]">
          {/* <div
            href="/"
            className="flex items-center h-20 justify-center ps-2.5 gap-1.5 mb-9 mt-6 ml-8"
          >
            <img
              className="h-20 sm:h-10 scale-150"
              src="./images/Logo-TrashIn.png"
              alt="Logo"
            />
            <span className="whitespace-nowrap font-black scale-0.5 mr-10 mt-2">
              <img src="./images/rashIn.png" alt="" />
            </span>
          </div> */}
          <LoginForm onLoginSuccess={handleLoginSuccess} />
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

export default Login;
