"use client";

import { AuthProvider } from "@/contexts/authContext";
import { UserProvider } from "@/contexts/user/userContext";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};
