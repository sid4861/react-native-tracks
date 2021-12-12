import React from "react";
import { Context as AuthContext } from "../contexts/AuthContext";

export default function ResolveAuthScreen() {

    const { tryLocalSignin } = React.createContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
}