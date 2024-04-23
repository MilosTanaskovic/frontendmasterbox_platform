import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className=" flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
