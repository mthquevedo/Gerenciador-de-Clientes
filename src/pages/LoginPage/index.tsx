import React from 'react';
import { LeftSec, GradientOverlay, Image, RightSec, FullPage } from './style';
import LoginForm from '../../components/LoginForm';

function LoginPage() {

    return (
        <FullPage>
            <LeftSec>
                <Image src="/assets/Work.jpg" alt="Dois homens trabalhando juntos em seus computadores" />
                <GradientOverlay />
                <h1>Bem vindo ao<br></br>Gerenciador de Clientes</h1>
                <p>Desenvolvido por Matheus Quevedo</p>
            </LeftSec>
            <RightSec>
                <img src="/assets/Logo-Ploomes-Brand-Horizontal@2x.png" alt="Logo da empresa Ploomes" />
                <div>
                    <LoginForm />
                </div>
            </RightSec>
        </FullPage>
    );
}

export default LoginPage;