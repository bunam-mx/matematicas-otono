import "./HeroBlock.css";

function HeroBlock() {
  return (
    <section className="hero">
      <article className="hero__content">
        <h1>Matemáticas en otoño</h1>
        <p className="text-3xl mt-4 mb-10">7 y 8 de noviembre 2024</p>
        <h2>
          I Encuentro de profesores de Bachillerato y Facultad de Ciencias
        </h2>
      </article>
      <article className="hero__content">
        <div>
          <h3>
            <span>Historia de la ciencia y la tecnología</span><span>en la enseñanza de las
            matemáticas</span>
          </h3>
          <h4>
            Amoxcalli
            <br />
            Facultad de Ciencias, UNAM
          </h4>
        </div>
        <div>
          <p><a href="mailto:integrandofc@ciencias.unam.mx">
            mailto:integrandofc@ciencias.unam.mx
          </a></p>
          <p><img src="images/integrando.png" alt="INTEGRANDO FC" width={160} /></p>
        </div>
      </article>
    </section>
  );
}

export default HeroBlock;
