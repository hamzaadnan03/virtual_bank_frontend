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
    <div>
      <button onClick={onLogouthanlder}>Logout</button>
    </div>
  );
};

export default Navbar;
