import React from 'react';
import { Input } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const InputBox = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Input {...props} ref={ref} />
    );
})

export default InputBox