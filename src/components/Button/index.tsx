import { Button } from './style';

import type { ButtonTypes } from '../../types/LoginTypes';

function DefaultButton({ type, value }: ButtonTypes) {
    return (
        <Button>
            <input type={type} value={value} />
        </Button>
    );
}

export default DefaultButton