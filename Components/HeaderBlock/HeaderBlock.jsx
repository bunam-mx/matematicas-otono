import "./HeaderBlock.css";

function HeaderBlock() {
  return (
    <header className="header">
      <div className="header__container">
        <ul>
          <li><a href="https://www.unam.mx/" target="_blank" rel="noreferrer"><img src="/images/unam.png" alt="Universidad Nacional Autónoma de México" width={60} /></a></li>
          <li><a href="https://www.fciencias.unam.mx/node/5" target="_blank" rel="noreferrer"><img src="/images/fac_ciencias.png" alt="Facultad de Ciencias" width={60} /></a></li>
          <li><a href="http://enp.unam.mx/" target="_blank" rel="noreferrer"><img src="/images/enp.png" alt="Escuela Nacional Preparatoria" width={60} /></a></li>
          <li><a href="https://www.cch.unam.mx/" target="_blank" rel="noreferrer"><img src="/images/cch.png" alt="Colegio de Ciencias y Humanidades" width={60} /></a></li>
          <li><a href="https://www.bunam.unam.mx/" target="_blank" rel="noreferrer"><img src="/images/bunam.png" alt="Bachillerato a distancia B@UNAM" width={90} /></a></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderBlock;
