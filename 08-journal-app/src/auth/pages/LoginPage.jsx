import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} >


      <Grid item className="box-shadow" xs={3} sx={{ width: { sm: 450 } , backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

      <form>
        <Grid container >
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Entrar</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent={'end'}>

            <Link component={RouterLink} color={'inherit'} to="/auth/register" >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </Grid>
    </Grid >
  )
}
