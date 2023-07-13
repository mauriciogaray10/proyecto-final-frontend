import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'


const CheckoutContainer = () => {
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            telefono: ''
        },
        onSubmit: (datos) => {
            console.log(datos)
            //conectarme a la api
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
        <div style={{padding:'40px'}}>
            <form onSubmit={handleSubmit}>
                <TextField label='Nombre' variant="outlined" name="nombre" onChange={handleChange}   error={errors.nombre ? true : false} helperText = {errors.nombre}/>

                <TextField label='Apellido' variant="outlined" name="apellido" onChange={handleChange} error={errors.apellido ? true : false} helperText = {errors.apellido}/>

                <TextField label='Email' variant="outlined" name="email" onChange={handleChange}     error={errors.email ? true : false} helperText = {errors.email}/>

                <TextField label='Telefono' variant="outlined" name="telefono" onChange={handleChange} error={errors.telefono ? true : false} helperText = {errors.telefono}/>

                <Button type = 'submit' variant="contained" >
                    Enviar
                </Button>
            </form>
 

        </div>
    )
}

export default CheckoutContainer