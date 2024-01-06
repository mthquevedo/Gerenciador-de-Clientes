import InputBox from '../../components/InputBox';
import DefaultButton from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";

interface LoginProps {
    nameUser: string;
    passwordUser: string;
    radio: boolean;
}

function LoginForm() {

    const { register, handleSubmit } = useForm<LoginProps>()
    const { login } = useAuth();

    const navigate = useNavigate();

    const verifySubmit = (data: LoginProps) => {

        const res = login(data.nameUser, data.passwordUser)

        navigate('/dashboard');
    };
    return (
        <form action="" id="userData" onSubmit={handleSubmit(verifySubmit)}>
            <h1>Faça login para entrar</h1>
            <InputBox {...register('nameUser', { required: true })} placeholder="Nome" />
            <InputBox {...register('passwordUser', { required: true })} type="password" placeholder="Chave de acesso" />

            <div>
                <DefaultButton type="submit" value="Entrar" />
            </div>
        </form>
    );
}

export default LoginForm;