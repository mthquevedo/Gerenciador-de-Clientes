import { Button } from './style';

import type { ButtonTypes } from '../../types/LoginTypes';

function DefaultButton({ type }: ButtonTypes) {
    return (
        <Button>
            <input type={type} />
        </Button>
    );
}

export default DefaultButton