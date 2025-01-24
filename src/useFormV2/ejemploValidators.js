import { Link, Button, Grid, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import { useState } from "react";

const initialForm = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [
    (value) => value.length > 2,
    "El nombre debe tener al menos 3 caracteres",
  ],
  email: [(value) => value.includes("@"), "Formato de correo inválido"],
  password: [
    (value) => value.length > 5,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(initialForm, formValidations);

  const onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormSubmitted(true);
    onResetForm();
  };

  return (
    <AuthLayout title="Register">
      { !isFormValid && formSubmitted && <Typography variant="h6" sx={{ mb: 2 }} color="red">Corrija el formulario</Typography>}
      <form onSubmit={onSubmitRegister}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre..."
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted }
              helperText={ formSubmitted ? displayNameValid : ""}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted }
              helperText={ formSubmitted ? emailValid : ""}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={ !!passwordValid && formSubmitted }
              helperText={ formSubmitted ? passwordValid : ""}
            />
          </Grid>

          <Grid spacing={2} container sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth type="submit">
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent={"end"}>
            <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color={"inherit"} to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
