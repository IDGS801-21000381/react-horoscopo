import { useState } from 'react';
import Fecha from './components/Fecha';
import Horoscopo from './components/Horoscopo';
import './App.css';

const App = () => {
  const [signo, setSigno] = useState('');
  const [imagenSigno, setImagenSigno] = useState('');
  const [frase, setFrase] = useState('');
  const [caballeroZodiaco, setCaballeroZodiaco] = useState('');
  const [imagenCaballero, setImagenCaballero] = useState('');

  const calcularHoroscopo = (fechaNacimiento) => {
    if (!fechaNacimiento) return;

    // Extraer el mes y día de la fecha de nacimiento
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);

    // Lógica para calcular el signo según la fecha de nacimiento
    let signoCalculado = '';

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      signoCalculado = 'Aries';
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      signoCalculado = 'Tauro';
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      signoCalculado = 'Géminis';
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      signoCalculado = 'Cáncer';
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      signoCalculado = 'Leo';
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      signoCalculado = 'Virgo';
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      signoCalculado = 'Libra';
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      signoCalculado = 'Escorpio';
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      signoCalculado = 'Sagitario';
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      signoCalculado = 'Capricornio';
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      signoCalculado = 'Acuario';
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      signoCalculado = 'Piscis';
    }

    // Datos de ejemplo para los signos y caballeros
    const horoscopos = {
      Aries: {
        imagen: 'https://www.shutterstock.com/image-illustration/golden-aries-zodiac-sign-against-260nw-2266994517.jpg',
        frase: 'Hoy tendrás un excelente día, cuídate de la lluvia.',
        caballero: 'Caballero de Aries',
        imagenCaballero: 'https://i.pinimg.com/550x/2e/36/32/2e3632cdda3a29d90ed5ae92403cc2f9.jpg'
      },
      Tauro: {
        imagen: 'https://t3.ftcdn.net/jpg/05/61/37/48/360_F_561374839_QfNWln5Z3Bk8R1X5zQxk9kvJKopun8XE.jpg',
        frase: 'Hoy es un buen día para tomar decisiones importantes.',
        caballero: 'Caballero de Tauro',
        imagenCaballero: 'https://i.pinimg.com/236x/31/73/ff/3173ff702e5e9cd1afa426dbc33129da.jpg'
      },
      Géminis: {
        imagen: 'https://www.shutterstock.com/image-illustration/gemini-horoscope-sign-colourful-abstract-260nw-2241113091.jpg',
        frase: 'El día estará lleno de sorpresas, ¡prepárate!',
        caballero: 'Caballero de Géminis',
        imagenCaballero: 'https://mvsnoticias.com/u/fotografias/m/2024/1/29/f638x638-595384_653551_4616.png'
      },
      Cáncer: {
        imagen: 'https://img.freepik.com/fotos-premium/signo-horoscopo-cancer-colorida-ilustracion-abstracta-icono-astrologia-zodiaco_510654-602.jpg',
        frase: 'Las emociones guiarán tu camino hoy.',
        caballero: 'Caballero de Cáncer',
        imagenCaballero: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz_X211f2-QRTW-l-BJuoqWOoMju5R4Pdty6CoGWBwdMqr1o5tsFZk09BVd-gNKx4k7odkWM_d-hszTjOKnSRkoc3e_4MIK2V5Z5OJ72g1ldLxp0UbIbbn_72xxLEhbXzc78n-G5tAU-U/w1200-h630-p-k-no-nu/Mascara+de+Muerte-Cancer+9.jpg'
      },
      Leo: {
        imagen: 'https://img.freepik.com/fotos-premium/signos-zodiacales-astrologicos-leo-horoscopo-leo_597582-541.jpg',
        frase: 'Brillarás con luz propia, confía en ti.',
        caballero: 'Caballero de Leo',
        imagenCaballero: 'https://static.wikia.nocookie.net/factvsfiction/images/b/b7/Leo.Aiolia.full.780962.jpg/revision/latest?cb=20160624194929'
      },
      Virgo: {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeBsqJzSrmuphZu0_7UfgpQmt6_R9_tPIPA&s',
        frase: 'La organización será clave en tu día.',
        caballero: 'Caballero de Virgo',
        imagenCaballero: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWeW75dTiYW3oiL_JApBAsVLKzdd4Y-J8j_IKNii3Mi8YFbNsw3QQlE2v5OPlV1341BtmImqtRRanIuztVBn3UL6PbevxmDG8bfW3AvtxTTnBm5_k1CPUdjlwGM-H98RZhfHsyuh0jd3E/s400/Shaka-Virgo+30.jpg'
      },
      Libra: {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvnU2-loZ3xhBlAc3Z1xQzT2tItLIGITxNw&s',
        frase: 'Hoy busca el equilibrio en todo lo que hagas.',
        caballero: 'Caballero de Libra',
        imagenCaballero: 'https://sm.ign.com/t/ign_latam/screenshot/default/dohko-libra_jfnj.1280.jpg'
      },
      Escorpio: {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWADTYzMiEtKS8j3R5TFTURzMIwXwQqLwSw&s',
        frase: 'Las pasiones intensas marcarán tu día.',
        caballero: 'Caballero de Escorpio',
        imagenCaballero: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNh3DcVCaVma1u1y2ahiA9uz9ED94vZVDYNw&s'
      },
      Sagitario: {
        imagen: 'https://img.freepik.com/fotos-premium/signo-zodiaco-sagitario-signo-horoscopo-sagitario_924879-922.jpg',
        frase: 'La aventura te espera a la vuelta de la esquina.',
        caballero: 'Caballero de Sagitario',
        imagenCaballero: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJjwa4a7EyI4s7NHsDf_v1lQX7pyv64qbS47joPtlCpPblGtlg74DTgbj2ez2iogNLfE&usqp=CAU'
      },
      Capricornio: {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcn9LuxLlkQD1rUWU0qUfYw92cOAEa9KnNg&s',
        frase: 'La perseverancia será tu mejor aliada hoy.',
        caballero: 'Caballero de Capricornio',
        imagenCaballero: 'https://i.pinimg.com/originals/a9/06/21/a90621718f5426232b33fa6fb9e93854.jpg'
      },
      Acuario: {
        imagen: 'https://img.freepik.com/fotos-premium/signo-zodiaco-acuario-signo-horoscopo-acuario_924879-920.jpg',
        frase: 'Las ideas innovadoras fluirán con facilidad.',
        caballero: 'Caballero de Acuario',
        imagenCaballero: 'https://i.pinimg.com/550x/b6/0b/a4/b60ba4ab45d6675e47d60f3d8493d4da.jpg'
      },
      Piscis: {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfIav1xuhvnzYhm8idMldz54TsHkrPyFMLw&s',
        frase: 'La intuición será tu guía en este día.',
        caballero: 'Caballero de Piscis',
        imagenCaballero: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApxHH-3xrEP6bTAJDDfl5jUtNDbavY2wSeA&s'
      }
    };

    const horoscopo = horoscopos[signoCalculado] || {};

    setSigno(signoCalculado);
    setImagenSigno(horoscopo.imagen || '');
    setFrase(horoscopo.frase || '');
    setCaballeroZodiaco(horoscopo.caballero || '');
    setImagenCaballero(horoscopo.imagenCaballero || '');
  };

  return (
    <div className="app-container">
      <h1 className="titulo-principal">Horóscopo</h1>
      <div className="cards-container">
        <Fecha onFechaSeleccionada={calcularHoroscopo} />
        {signo && (
          <Horoscopo
            signo={signo}
            imagenSigno={imagenSigno}
            frase={frase}
            caballeroZodiaco={caballeroZodiaco}
            imagenCaballero={imagenCaballero}
          />
        )}
      </div>
      <p className="footer-text">IDGS1002 Juarez Alvizo</p>
    </div>
  );
};

export default App;
