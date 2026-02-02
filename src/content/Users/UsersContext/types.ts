import { Dispatch, SetStateAction } from "react";

export interface USER {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "EMPLOYEE" | "GUEST";
}

export interface UserContextType {
  userData: USER | null;
  setUserData: Dispatch<SetStateAction<USER | null>>;
}
