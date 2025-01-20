import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';

export function SimpleCard({ job_title, area, salario, descripcion }) {
    return (
        <Card className="mt-6 w-96 relative">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {job_title}
                </Typography>
                <Typography>
                    {descripcion}
                </Typography>
                <Typography>
                    <strong>Area:</strong> {area}
                </Typography>
                <Typography>
                    <strong>Salario:</strong> {salario} <strong>USD/hr</strong>
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="bg-backgroundP absolute bottom-4 right-4">Aplicar</Button>
            </CardFooter>
        </Card>
    );
}

SimpleCard.propTypes = {
    job_title: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    salario: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};