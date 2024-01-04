import { LeftSec, GradientOverlay, Image, RightSec, FullPage } from './style';
import InputBox from '../../components/InputBox';
import DefaultButton from '../../components/Button';

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
                    <form action="">
                        <h1>Faça login para entrar</h1>
                        <InputBox type="string" placeholder="Nome" />
                        <InputBox type="password" placeholder="Chave de acesso" />

                        <label><input type="checkbox" />Lembrar nos próximos acessos</label>

                        <DefaultButton type="submit" />
                    </form>
                </div>
            </RightSec>
        </FullPage >
    );
}

export default LoginPage;