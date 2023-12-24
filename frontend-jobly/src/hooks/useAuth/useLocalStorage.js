import { useEffect, useState } from "react";
import JoblyApi from "../../API/api";

const useLocalStorage = () => {
	const joblyVal = localStorage.getItem("jobly-token") || null;
	const usernameVal = localStorage.getItem("username") || null;

	const [item, setItem] = useState({ token: joblyVal, username: usernameVal });

	JoblyApi.token = item.token;

	useEffect(() => {
		function setKeyInLocalStorage() {
			if (item.token === null) {
				localStorage.removeItem("jobly-token");
				localStorage.removeItem("username");
			} else {
				localStorage.setItem("jobly-token", item.token);
				localStorage.setItem("username", item.username);
			}
		}

		setKeyInLocalStorage();
	}, [item]);

	return [item, setItem];
};

export default useLocalStorage;
