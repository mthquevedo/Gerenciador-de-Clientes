import React from 'react';
import { Button } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> { }

const DefaultButton = React.forwardRef<HTMLInputElement, ButtonProps>((props, ref) => {
    return (
        <Button {...props} ref={ref} />
    );
})

export default DefaultButton