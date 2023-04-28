import { Children, ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserContextData {
  users: User[];
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({children}: UserProviderProps) {
  const [users, setUsers] = useState(() => {
    const usersReturned = api.get('users').then(response => response.data);

    if(usersReturned) return usersReturned;

    return [];
  });

  return (
    <UserContext.Provider value={{users}}>
      {children}
    </UserContext.Provider>
  );
}