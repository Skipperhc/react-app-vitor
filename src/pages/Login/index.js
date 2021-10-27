import React, { useState } from 'react';
import useStyles from './style.js'
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import logoBanco from '../../assets/gftLogo.svg'
import { AccountCircle, LockRounded, Visibility, VisibilityOff } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import * as yup from 'yup';
import { Formik, useFormik, ErrorMessage } from 'formik';

const Login = () => {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(true);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box className={classes.container} >
            <Formik
                initialValues={{ usuario: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.usuario) {
                        errors.usuario = 'Usuário é obrigatório';
                    } else if (values.usuario.length <= 1) {
                        errors.usuario = 'Usuário deve ter ao menos 2 caracteres';
                    } else if (!/^[\w]+$/i.test(values.usuario)) {
                        errors.usuario = 'Não são permitidos caracteres especiais';
                    }

                    if (!values.password) {
                        errors.password = 'Senha é obrigatória';
                    } else if (values.password.length <= 6) {
                        errors.password = 'Senha deve ter ao menos 6 caracteres';
                    } else if (!/^[\d]+$/i.test(values.password)) {
                        errors.password = 'São permitidos apenas números';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Box className={classes.cardLogin}>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Box className={classes.boxLogo}>
                                <img className={classes.logo} src={logoBanco} alt="Logo" />
                            </Box>
                            <Box className={classes.input}>
                                <FormControl>
                                    <TextField
                                        required
                                        name="usuario"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.usuario}
                                        error={(errors.usuario && touched.usuario)}
                                        label="Usuário"
                                        s={{ margin: 20 }}
                                        InputProps={{
                                            startAdornment: <AccountCircle sx={{ color: 'action.active', mr: 1.5, my: 0.5 }} />,
                                        }}
                                    />
                                    {(errors.usuario && touched.usuario) ? <p className={classes.msgErro}>{errors.usuario}</p> : null}
                                </FormControl>
                            </Box>
                            <Box className={classes.boxPassword}>
                                <FormControl variant="outlined">
                                    <InputLabel required htmlFor="outlined-adornment-password">Senha</InputLabel>
                                    <OutlinedInput
                                        name="password"
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        error={(errors.password && touched.password)}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        startAdornment={
                                            <LockRounded sx={{ color: 'action.active', mr: 1.5, my: 0.5 }} />
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Senha*"
                                    />
                                </FormControl>
                                {(errors.password && touched.password) ? <p className={classes.msgErro}>{errors.password}</p> : null}
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar do usuário" />
                            </Box>
                            <Box className={classes.input}>
                                <Button type="submit" variant="contained" disabled={(isSubmitting && !errors)}>Login</Button>
                                <Button variant="text">Esqueci minha senha</Button>
                            </Box>
                        </form>
                    </Box >
                )}
            </Formik>
        </Box>
    );
}

export default Login;