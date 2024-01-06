import { useEffect, useState } from 'react';
import { HeaderStyle, AccountData } from './style';
import api from '../../api';

interface SelfData {
    Id: number;
    AccountId: number;
    AccountOwner: boolean;
    Name: string;
    Email: string;
    UserKey: string;
    AvatarUrl: string;
}

function Header() {
    const [user, setUser] = useState<SelfData>();

    useEffect(() => {
        api
            .get("/Self")
            .then((response) => setUser(response.data.value as SelfData))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        console.log(user?.Name)
    }, []);

    return (
        <HeaderStyle>
            <img src="./assets/Logo-Ploomes-Brand-Horizontal@2x.png" alt="" />

            <nav>
                <a href="#">Clientes</a>
                <a href="#">Documentos</a>
                <a href="#">Relatórios</a>
                <a href="#">Vendedores</a>
            </nav>

            <AccountData>
                <img src="" alt="" />
                <p>Perfil: {user?.Name}</p>
                <p>Conta: Batcaverna</p>
                <hr />
                <button>Sair</button>
            </AccountData>
        </HeaderStyle>
    );
}

export default Header;
