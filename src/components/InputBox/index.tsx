import { Input } from './style';

import type { InputTypes } from '../../types/LoginTypes';

function InputBox({ type, placeholder }: InputTypes) {
    return (
        <Input>
            <input type={type} placeholder={placeholder} required />
        </Input>
    );
}

export default InputBox