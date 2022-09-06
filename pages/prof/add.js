import * as React from 'react';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import styled from "../../styles/Home.module.css"
import {addProf} from "../../config/helperProf";



export default function Add() {

    const {register, handleSubmit, resetField} = useForm();
    const addMutation = useMutation(addProf);

    const onSubmit = async (data) => {
        if (data) {
            await addMutation.mutate(data);
            console.log("Data Created Successfully");
            resetField('title');resetField('name');resetField('phone');
        }
    }

    return (
        <>
            <Head>
                <title>Add Prof</title>
            </Head>
            <Container maxWidth="lg" className={styled.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid className={styled.grid}>
                        <Paper elevation={12} sx={{
                            '& .MuiTextField-root': {m: 1, width: '50ch'},
                        }}
                               noValidate
                               autoComplete="off">
                            <Grid>
                                <TextField
                                    id="title"
                                    label="title"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('title')}
                                />
                            </Grid><Grid>
                                <TextField
                                    id="name"
                                    label="name"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('name')}
                                />
                            </Grid><Grid>
                                <TextField
                                    id="phone"
                                    label="phone"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('phone')}
                                />
                            </Grid>
                            <Grid>
                                <Link href="/prof">
                                    <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{m: 1}}>
                                        Back
                                    </Button>
                                </Link>

                                <Button type="submit" variant="contained" endIcon={<SendIcon/>}
                                        sx={{float: "right", m: 1}}>
                                    Send
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </form>
            </Container>
        </>
    );
}