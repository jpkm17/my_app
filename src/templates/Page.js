import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0',
        background: ''
    }
  }));

const Page = ({ title, Component }) => {
    const classes = useStyles()
    return (
        <>
        <Typography variant='h2'>
            {title}
        </Typography>
            <Component />
            
        </>
    )
}

export default Page