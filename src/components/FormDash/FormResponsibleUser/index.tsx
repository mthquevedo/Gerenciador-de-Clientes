import React, { forwardRef, useEffect, useState } from 'react';
import api from '../../../api';
import { Select } from './style';

interface InputDashProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

interface ResponsibleData {
    Id: number;
    Name: string;
}

const FormResponsibleUser = forwardRef<HTMLSelectElement, InputDashProps>((props, ref) => {
    const [responsibles, setResponsibles] = useState<ResponsibleData[]>([]);

    useEffect(() => {
        api
            .get("/Users?$select=Name,%20Id")
            .then((response) => setResponsibles(response.data.value))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <Select {...props} ref={ref}>
            <option key="1" value="1">Todos</option>
            {responsibles?.map(responsible => (
                <option key={responsible.Id} value={responsible.Id}>{responsible.Name}</option>
            ))}
        </Select>
    );
});

export default FormResponsibleUser;
