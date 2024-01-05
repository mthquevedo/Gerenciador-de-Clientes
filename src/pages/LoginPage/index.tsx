import React, { useState } from 'react';
import { LeftSec, GradientOverlay, Image, RightSec, FullPage, Label } from './style';
import InputBox from '../../components/InputBox';
import DefaultButton from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface LoginForm {
    nameUser: string;
    passwordUser: string;
    radio: boolean;
}

function LoginPage() {
    const { register, handleSubmit } = useForm<LoginForm>()

    //const navigate = useNavigate();

    const verifySubmit = (data: LoginForm) => {
        //console.log('Nome digitado:', data.nameUser);
        //console.log('Senha digitada:', data.passwordUser);

        if (data.radio) {
            console.log("Sucesso");
        } else {
            console.log("Checkbox não marcado");
        }

        //navigate('/dashboard');
    };

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
                    <form action="" id="userData" onSubmit={handleSubmit(verifySubmit)}>
                        <h1>Faça login para entrar</h1>
                        <InputBox {...register('nameUser', { required: true })} placeholder="Nome" />
                        <InputBox {...register('passwordUser', { required: true })} type="password" placeholder="Chave de acesso" />

                        <Label>Lembrar nos próximos acessos
                            <input type="checkbox"  {...register('radio')} />
                            <span></span>
                        </Label>
                        <div>
                            <DefaultButton type="submit" value="Entrar" />
                        </div>
                    </form>
                </div>
            </RightSec>
        </FullPage>
    );
}

export default LoginPage;