import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const purpleTheme = createTheme({
    palette: {
        primary: {
            //   main: '#556cd6',
            main: '#262254'
        },
        secondary: {
            // main: '#19857b',
            main: '#543884',
        },
        error: {
            main: red.A400,
        },
    },
});

export default purpleTheme;
