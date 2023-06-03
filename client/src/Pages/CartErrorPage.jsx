import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CartErrorPage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , flexDirection:"column" }}>
            <h1>Your Cart is Empty</h1>
            <Button  style={{justifyContent:"center"}}>
                <Link to={"/"}>

                    Continue Shopping
                </Link>
            </Button>
        </div>
    )
}

export default CartErrorPage