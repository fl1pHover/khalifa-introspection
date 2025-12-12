import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useSession } from "@/lib/auth-client";

interface UserContextType {
  userId: string | null;
  setUserId: (id: string) => void;
}

const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const [userId, setUserId] = useState<string | null>(null);

  // Session-ээс автомат set хийх
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
