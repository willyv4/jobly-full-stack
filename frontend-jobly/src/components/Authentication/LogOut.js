import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LogOut = ({ setAuthorized, setCurrUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    function logout() {
      setCurrUser(null);
      setAuthorized({ token: null, username: null });

      return navigate("/");
    }

    logout();
  });
};

export default LogOut;
