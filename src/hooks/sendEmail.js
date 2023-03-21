import { useState } from "react";

const useEmail = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const sendRequest = (data) =>{};
    return {sendRequest, isError, isLoading};
};
export default useEmail;