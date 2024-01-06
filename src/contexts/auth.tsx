import { createContext, ReactNode, useState } from "react";

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
    const [user, setUser] = useState<User | null>(() => {
        const storedName = localStorage.getItem("name");
        const storedKey = localStorage.getItem("key");

        if (storedName && storedKey) {
            return { nameUser: storedName, passwordUser: storedKey };
        }

        return null;
    });

    const login = (nameUser: string, passwordUser: string) => {
        localStorage.setItem("name", nameUser);
        localStorage.setItem("key", passwordUser);
        setUser({ nameUser, passwordUser });
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
