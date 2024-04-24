import "./FooterBlock.css";

function FooterBlock() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="lg:w-1/6 mb-6">
          <p className="mt-7 mb-4">Desarrollado por:</p>
          <p>
            <a
              href="https://bunam.unam.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/bunam_mooc.svg"
                alt="B@UNAM & MOOC"
                width={100}
              />
            </a>
          </p>
        </div>
        <div className="lg:w-2/3">
          <h6 className="text-xl">Aviso</h6>
          <p>
            Coordinación de Universidad Abierta y Educación Digital de la UNAM.
            ©Todos los derechos reservados 2024. Hecho en México. Este sitio
            puede ser reproducido con fines no lucrativos, siempre y cuando no
            se mutile, se cite la fuente completa y su dirección electrónica, de
            otra forma, se requiere permiso previo por escrito de la
            Institución.
          </p>
          <p>
            Al navegar en este sitio, encontrará contenidos diseñados por
            académicos de la UNAM, denominados Recursos Educativos Abiertos
            (REA), disponibles para todo el público en forma gratuita. Los
            contenidos de cada REA son responsabilidad exclusiva de sus autores
            y no tienen impedimento en materia de propiedad intelectual;
            asimismo, no contienen información que por su naturaleza pueda
            considerarse confidencial y reservada.
          </p>
          <p>
            Los REA podrán ser utilizarlos sin fines de lucro, citando
            invariablemente la fuente y sin alterar la obra, respetando los
            términos institucionales de uso y los derechos de propiedad
            intelectual de terceros.
          </p>
        </div>
        <div className="lg:w-1/6"></div>
      </div>
    </footer>
  );
}

export default FooterBlock;
