import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';
import { ThemeProvider} from '@mui/styles'
import { createTheme } from '@mui/material'
const App = () => {
    const classes = useStyles();
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" sx={{ flexDirection: 'row' }}>
                <Typography className={classes.heading} variant="h2" align="center" > Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>

            </Grow>

            </Container>
            </ThemeProvider>

    )
}
export default App;