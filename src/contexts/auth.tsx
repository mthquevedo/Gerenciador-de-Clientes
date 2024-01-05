import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
    nameUser: string;
    passwordUser: string;
}

interface AuthContextProps {
    user: User | null;
    signed: boolean;
    login: (nameUser: string, passwordUser: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedKey = localStorage.getItem("key");

        if (storedName && storedKey) {
            const storedUsers = JSON.parse(storedKey) as User[];

            if (Array.isArray(storedUsers)) {
                const storedUser = storedUsers.find((storedUser: User) => storedUser.nameUser === JSON.parse(storedName).nameUser);

                if (storedUser) setUser(storedUser);
            }
        }
    }, []);

    const login = (nameUser: string, passwordUser: string) => {
        const storedData = localStorage.getItem("key");
        const usersStorage = storedData ? JSON.parse(storedData) as User[] : [];

        if (Array.isArray(usersStorage)) {
            const existingUser = usersStorage.find((storedUser: User) => storedUser.nameUser === nameUser);

            if (!existingUser) {
                const newUser: User = { nameUser, passwordUser };
                const updatedUsers = [...usersStorage, newUser];
                localStorage.setItem("key", JSON.stringify(updatedUsers));
                localStorage.setItem("name", JSON.stringify({ nameUser }));
                setUser(newUser);
            }
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("name");
        localStorage.removeItem("key");
    };

    return (
        <AuthContext.Provider value={{ user, signed: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
