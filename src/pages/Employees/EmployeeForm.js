import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";


const dosetwoItems = [
    { id: 'Yes', title: 'Yes' },
    { id: 'No', title: 'No' }
]

const initialFValues = {
    firstDose: '',
    dateOne:new Date(),
    dosetwo: 'No',
    secondDose: ' ',
    dateTwo: new Date(),
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstDose' in fieldValues)
            temp.firstDose = fieldValues.firstDose.length != 0 ? "" : "This field is required."
        if ('secondDose' in fieldValues)
            temp.secondDose= fieldValues.secondDose.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item>
                <Controls.Select
                        name="firstDose"
                        label="Name of Vaccination"
                        value={values.firstDose}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.firstDose}
                    />
                     <Controls.DatePicker
                        name="dateOne"
                        label="Date of Vaccination"
                        value={values.dateOne}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="dosetwo"
                        label="Did you get the Second Dose?"
                        value={values.dosetwo}
                        onChange={handleInputChange}
                        items={dosetwoItems}
                    />
                    <h3>Date of Second Dose of Vaccine</h3>
                    <Controls.Select
                        name="secondDose"
                        label="Name of Vaccination"
                        value={values.secondDose}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.secondDose}
                    />
                     <Controls.DatePicker
                        name="dateTwo"
                        label="Date of Vaccination"
                        value={values.dateTwo}
                        onChange={handleInputChange}
                    />
                   
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Confirm" />
                      
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}