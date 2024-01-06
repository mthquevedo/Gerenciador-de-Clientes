import React from 'react';
import { Select } from './style';

interface InputDashProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const FormSelectDash = React.forwardRef<HTMLSelectElement, InputDashProps>((props, ref) => {
    return (
        <Select {...props} ref={ref}>
            <option value="1">Nome</option>
            <option value="2">Telefone</option>
            <option value="3">E-mail</option>
        </Select >
    );
})


export default FormSelectDash