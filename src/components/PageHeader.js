import React from 'react'
import { Paper,  Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#0000'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        flexDirection:'row',
        marginBottom:theme.spacing(2)
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.5'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}