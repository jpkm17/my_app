import { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core"
import axios from "axios"
import Grid from '@material-ui/core/Grid'

import CustomerCard from "../../components/CustomerCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2)
    }
}));

const Customers = () => {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])

    console.log(customers)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((response) => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then((response) => {

                const newCustomersState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomersState)
            })
    }

    return (
        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} md={4}>
                        <CustomerCard
                            id={item.id}
                            name={item.first_name}
                            lastName={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                            onRemoveCustomer={handleRemoveCustomer}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Customers