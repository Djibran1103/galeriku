import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside className="flex flex-row h-screen">
      <div className="flex-1 bg-[#F9D86C] flex items-center justify-center">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
      <div className="flex-6">
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
