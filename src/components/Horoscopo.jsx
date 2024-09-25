import './Horoscopo.css';

const Horoscopo = ({ signo, imagenSigno, frase, caballeroZodiaco, imagenCaballero }) => {
  return (
    <div className="horoscopo-container card">
      <div className="signo-container">
        <h2>Tu signo es: {signo}</h2>
        <img src={imagenSigno} alt={signo} className="signo-imagen" />
        <p className="horoscopo-frase">{frase}</p>
      </div>
      <div className="caballero-container">
        <h3>Caballero del Zodiaco: {caballeroZodiaco}</h3>
        <img src={imagenCaballero} alt={caballeroZodiaco} className="caballero-imagen" />
      </div>
    </div>
  );
};

export default Horoscopo;
