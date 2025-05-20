import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const onLogouthanlder = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div className="absolute top-2  right-2">
      <button onClick={onLogouthanlder}>Logout</button>
    </div>
  );
};

export default Navbar;
