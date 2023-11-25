

const Formulario_multiple_input = () => {
return (
<>
<form className="formulario">
<div className="form-group">
<label>Nombre</label>
<input
type="text"
name="nombre"
className="form-control"
/>
</div>
<div className="form-group">
<label>Apellido</label>
<input
type="text"
name="apellido"
className="form-control"
/>
</div>
<div className="form-group">
<label>Edad</label>
<input
type="text"
name="edad"
className="form-control"
/>
</div>
<div className="form-group">
<label>Email</label>
<input
type="text"
name="email"
className="form-control"
/>
</div>
<button type="submit" className="btn
btn-primary">Enviar</button>
</form>

</>
)
}

export default Formulario_multiple_input