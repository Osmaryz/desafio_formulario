
import './App.css'
import Formulario_multiple_input from './componentes/formulario_multiples_inputs';
//import Formulario from './componentes/formulario'--> Ejercicio de validación de formulario con onChange() y onSubmit()
//import Contador from './componentes/contador'; --> Ejercicio contador

function App() {
  return (
  <>
  <Formulario_multiple_input/>
  </>
  );
  }
  export default App;






/*
Ejercicio de validación de formulario con onChange() y onSubmit().

function App() {
  return (
    <>
    <h1>Ejercicio formulario</h1>
   <Formulario/>
    </>
  );
}

export default App*/








/*
Ejercicio Contador
function App() {
  
  return (
    <>
      <h1>Contador</h1>
      <Contador />
    </>
  );
}

export default App



A. Importamos useState al inicio del componente.
B. Definir un nombre de variable que representará el estado que queremos guardar. 
C. Definifr un nombre de una función que cambiará el estado.
D  Un valor inicial para el estado, el cual puede puede ser un valor de tipo number, string, array, object, boolean.

*/