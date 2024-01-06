import React from 'react';
import { InputSearch } from './style';

interface InputDashProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const FormImputDash = React.forwardRef<HTMLInputElement, InputDashProps>((props, ref) => {
    return (
        <InputSearch {...props} ref={ref} placeholder="Pesquisar" />
    );
})

export default FormImputDash