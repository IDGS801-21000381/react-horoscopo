import './Horoscopo.css';

const Fecha = ({ onFechaSeleccionada }) => {
  const manejarCambioFecha = (e) => {
    const fechaSeleccionada = e.target.value;
    onFechaSeleccionada(fechaSeleccionada);  // Llamamos a la función con la fecha seleccionada
  };

  return (
    <div className="fecha-container card">
      <h3>Descubre tu horóscopo</h3>
      <input 
        type="date" 
        onChange={manejarCambioFecha}  // Llamamos a la función cuando cambia la fecha
        className="fecha-input" 
      />
      <button className="btn btn-danger">Ver Horóscopo</button>
    </div>
  );
};

export default Fecha;
