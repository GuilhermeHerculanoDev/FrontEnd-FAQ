import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

const verifyAdmin = (): string | boolean | null => {
  const [userUrl, setUserUrl] = useState(false);

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    if (tokenFromCookie) {
      const decoded = jwt.decode(tokenFromCookie);
      if (decoded && typeof decoded === "object" && "admin" in decoded) {
        setUserUrl(decoded.admin as boolean);
      }
    }
  }, []);

  return userUrl;
};

export default verifyAdmin;

