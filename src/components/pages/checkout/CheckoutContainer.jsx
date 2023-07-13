import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { db } from "../../../firebaseConfig";
import {collection, addDoc, updateDoc, doc} from 'firebase/firestore'
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useState } from "react";



const CheckoutContainer = () => {
    
    const {cart, getTotalPrice, cleanCart} = useContext(CartContext);
    let[comprobante, setComprobante]=useState(null);
    let totalPrice = getTotalPrice();
  





    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            telefono: ''
        },
        onSubmit: (data) => {
            let order = {
                buyer: data,
                items: cart,
                total: totalPrice
            }
            let orderCollection = collection(db, 'orders')
            addDoc(orderCollection, order ).then(res => setComprobante(res.id))
            cart.forEach( (product)=> {
                updateDoc( doc(db, 'products', product.id), {stock: product.stock - product.quantity})
            })
            cleanCart();
            
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('Este campo es obligatorio'),
            apellido: Yup.string().required('Este campo es obligatorio') ,
            email: Yup.string().required('Este campo es obligatorio').email(),
            telefono: Yup.number('Debe ser un numero de telefono valido').required('Este campo es obligatorio')
        }),
        validateOnChange: false,
    })
 
 
 
 
    return (
        comprobante != null ? <h1>Tu comprobante es {comprobante}</h1> :
        <div style={{padding:'40px'}}>
            <form onSubmit={handleSubmit}>
                <TextField label='Nombre' variant="outlined" name="nombre" onChange={handleChange}   error={errors.nombre ? true : false} helperText = {errors.nombre}/>

                <TextField label='Apellido' variant="outlined" name="apellido" onChange={handleChange} error={errors.apellido ? true : false} helperText = {errors.apellido}/>

                <TextField label='Email' variant="outlined" name="email" onChange={handleChange}     error={errors.email ? true : false} helperText = {errors.email}/>

                <TextField label='Telefono' variant="outlined" name="telefono" onChange={handleChange} error={errors.telefono ? true : false} helperText = {errors.telefono}/>

                <Button type = 'submit' variant="contained" >
                    Comprar
                </Button>
            </form>
 

        </div>
    )
}

export default CheckoutContainer