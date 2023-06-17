import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ logoutUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    navigate("/");
  }, [navigate, logoutUser]);

  return null;
};

export default LogOut;
