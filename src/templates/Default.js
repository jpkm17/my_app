import Container from '@material-ui/core/Container';
import {  makeStyles } from '@material-ui/core/styles';

import Header from "../partials/Header/Header"


const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0',
        background: 'red'
    }
  }));

const Default = ({ children }) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default