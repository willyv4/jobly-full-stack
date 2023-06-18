import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ logoutUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    return navigate("/");
  }, [navigate, logoutUser]);
};

export default LogOut;
