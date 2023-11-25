
/*
import {useState} from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [error, setError]= useState(false)
    //Establecemos el error como un estado false, si llegase a ser true, quiere decir que hay un error. 
    
    const validarInput = (e) => {
        //alert('evento form')
        //Prevenimos el comportamiento por defecto. 
        e.preventDefault()
        // Validación de input-->
        if (nombre === '') {
            //alert('Debes agregar tu nombre')
            setError(true)
            return
        }

        //El returno debeajo del setError(true) es para evitar que el código siga ejecutandose. 
       
        //Eliminamos el mensaje de error cuando el estado de setError sea falso.
        setError(false)

    }
    
    return (
        <>
        <form onSubmit={validarInput}>
            {error ? <p className= "error">Debes ingresar tú nombre</p>: null}
        
            <h3>{nombre}</h3>
        <div className="form-group">
        <input className="form-control" name="Nombre"onChange={(e) => setNombre(e.target.value)}/>
        <button className="btn btn-dark mt-3" type="submit">Enviar</button>
        </div>
        </form>
        
        </>
    )
}
export default Formulario
/*

/*

Esta línea significa: {error ? <p className= "error">Debes ingresar tú nombre</p>: null} --> validando 
mediante operador ternario que, en caso de que error sea true, e imprima un párrafo con el texto
“Debes ingresar tu nombre”, y que en caso contrario no muestre nada con la instrucción
null.


*/