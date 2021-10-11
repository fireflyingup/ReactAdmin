import Fetch from "./Fetch";

export const reqLogin = (obj) => Fetch("/login", { ...obj }, "POST");
