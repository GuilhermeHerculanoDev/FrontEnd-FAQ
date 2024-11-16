// src/libs/useUserUrl.ts
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

const useUserUrl = (): string | null => {
  const [userUrl, setUserUrl] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    if (tokenFromCookie) {
      const decoded = jwt.decode(tokenFromCookie);
      if (decoded && typeof decoded === "object" && "sub" in decoded) {
        setUserUrl(decoded.sub as string);
      }
    }
  }, []);

  return userUrl;
};

export default useUserUrl;

