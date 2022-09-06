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
import {addUser} from "../../config/helperUser";



export default function Add() {

    const {register, handleSubmit, resetField} = useForm();
    const addMutation = useMutation(addUser);

    const onSubmit = async (data) => {
        if (data) {
            await addMutation.mutate(data);
            console.log("Data Created Successfully");
            resetField('title');resetField('description');resetField('category');resetField('author');resetField('reviews');
        }
    }

    return (
        <>
            <Head>
                <title>Add User</title>
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
                                    id="description"
                                    label="description"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('description')}
                                />
                            </Grid><Grid>
                                <TextField
                                    id="category"
                                    label="category"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('category')}
                                />
                            </Grid><Grid>
                                <TextField
                                    id="author"
                                    label="author"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('author')}
                                />
                            </Grid><Grid>
                                <TextField
                                    id="reviews"
                                    label="reviews"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                    {...register('reviews')}
                                />
                            </Grid>
                            <Grid>
                                <Link href="/user">
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