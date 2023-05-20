import { useEffect, useState } from "react";
import Header from "./header";


function Task() {
    const [pending, setPending] = useState([]);
    const [error, setError] = useState("");
}

const fetchPending = async () => {
    try {
        setError("");
        setIsLoading(true);
        const response = await AxiosInstance.get("./task", {
            params: { completed: false },
        })
        setPending(response.data.data);
        setIsLoading(false);
    } catch (err) {
        console.log(err);
    }
}