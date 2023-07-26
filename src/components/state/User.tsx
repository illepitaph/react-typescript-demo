import React from "react";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogIn = () => {
    setUser({
        name: "Vishwas",
        email: "vishwas@example.com"
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>Username is {user?.name}</div>
    </div>
  );
};
