import { useEffect, useState } from 'react';
import { BiExit } from "react-icons/bi";
import api from '../../api';
import useAuth from "../../hooks/useAuth";
import { AccountData, HeaderStyle, ProfileSec } from './style';

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
    const [account, setAccount] = useState<SelfData>();
    const imageProfile = user?.AvatarUrl;
    const { logout } = useAuth();

    useEffect(() => {
        api
            .get("/Self")
            .then((response) => setUser(response.data.value[0]))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api
            .get("/Account")
            .then((response) => setAccount(response.data.value[0]))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const exit = () => {
        const res = logout();
    }

    return (
        <HeaderStyle>
            <img src="./assets/Logo-Ploomes-Brand-Horizontal@2x.png" alt="" />

            <nav>
                <a href="#"><span>CLIENTES</span></a>
                <a href="#">DOCUMENTOS</a>
                <a href="#">RELATÓRIOS</a>
                <a href="#">VENDEDORES</a>
            </nav>

            <AccountData>
                <img src={imageProfile} alt="Foto de Perfil" />
                <ProfileSec>
                    <p><span>Perfil:</span> {user?.Name}</p>
                    <p><span>Conta:</span> {account?.Name}</p>
                </ProfileSec>
                <hr />
                <button type='submit' onClick={exit}>
                    <p>Sair</p>
                    <BiExit size='1.2em' />
                </button>
            </AccountData>
        </HeaderStyle>
    );
}

export default Header;
