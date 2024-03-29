import React from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Vaccination"
                subTitle="Vaccination Details of Employees"
            />
            <h3>Date of first dose of Vaccine</h3>
                <EmployeeForm />
            
        </>
    )
}