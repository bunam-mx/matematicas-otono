import { useContext, useState } from "react";
import { SemblanzaContext } from "../../../Context";
import Modal from "./Modal";
function November7th() {
  const context = useContext(SemblanzaContext);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  return (
    <>
      <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
      </Modal>
      <article className="schedule__item">
        <header>
          <h3>7 de noviembre 2024</h3>
        </header>
        <table>
          <tbody>
            <tr>
              <td>08:00 - 09:00</td>
              <td colSpan="5">
                <h4>Registro</h4>
              </td>
            </tr>
            <tr>
              <td>09:00 - 09:40</td>
              <td colSpan="5">
                <div>
                  <h4>Inauguración</h4>
                  <ul>
                    <li>Dr. Víctor Manuel Velázquez Aguilar</li>
                    <li>Dr. Manuel Jesús Falconi Magaña</li>
                  </ul>
                </div>
                <div>
                  <h4>Conferencia inaugural</h4>
                  <ul>
                    <li className="text-modal" onClick={() => {
                      context.setSemblanza({ foto: 'alberto_verjovsky.jpeg', semblanza: '<h5>Dr. Santiago Alberto Verjovsky Solá</h5><p>Es sin duda uno de los matemáticos más prominentes que hemos tenido, no sólo en México sino en América Latina, y ha tenido una influencia profunda en la matemática mundial. Hizo el doctorado en el Instituto de Matemática Pura e Aplicada de Brasil. En 2021 le fue otorgado el <strong>Premio Nacional de Ciencias.</strong></p>' });
                      cambiarEstadoModal(!estadoModal);
                    }}>Dr. Santiago Alberto Verjovsky Solá</li>
                  </ul>
                </div>
                <div>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Dr. Víctor Manuel Velázquez Aguilar</li>
                    <li>Dr. Manuel J. Falconi Magaña</li>
                    <li>Biol. María Dolores Valle Martínez</li>
                    <li>Dra. Guadalupe Vadillo</li>
                    <li>Dr. Benjamín Barajas Sánchez</li>
                  </ul>
                </div>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr>
              <td>09:45 - 10:45</td>
              <td colSpan="5">
                <h4>Lectura e interpretación &quot;moderna&quot; de un texto &quot;clásico&quot;</h4>
                <h5>Conferencia magistral</h5>
                <p className="text-modal" onClick={() => {
                  context.setSemblanza({ foto: 'carlos_alvarez.png', semblanza: '<h5>Dr. Carlos Álvarez Jiménez</h5><p>Doctorado en Francia en Filosofía de la Ciencia. Sus áreas de mayor interés son la historia y la filosofía de la geometría, del álgebra, del análisis matemático y la teoría de conjuntos. Ha publicado diversos artículos y libros de investigación sobre estos temas, como,  los orígenes del álgebra y la ciencia  en los siglos XVII y XVIII.</p>' });
                  cambiarEstadoModal(!estadoModal);
                }}>Dr. Carlos Álvarez Jiménez</p>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr className="sn-border-b">
              <td>11:00 - 12:00</td>
              <td colSpan="4">
                <h4>La historia de las matemáticas, una pieza fundamental para su enseñanza</h4>
                <h5>Mesa redonda</h5>
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'rafael_martinez.png', semblanza: "<h5>M. en C. Javier Martín Zariñán Sánchez</h5><p>Obtuvo el Master in Philosophy por The Open University, Inglaterra.</p><p>Es profesor de tiempo completo en la Facultad de Ciencias, unam, ha realizado estancias en Italia, Francia y España. Sus áreas de interés son la historia de las matemáticas, la filosofía y las relaciones entre las ciencias y las artes, desde la antigüedad hasta el Renacimiento.</p>" });
                    cambiarEstadoModal(!estadoModal);
                  }}>M. en C. José Rafael Martínez Enríquez</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'javier.jpg', semblanza: "<h5>M. en C. Javier Martín Zariñán Sánchez</h5><p>Estudió física y matemáticas en la Escuela Superior de Física y Matemáticas del Instituto Politécnico Nacional. Maestría en Ingeniería de Software en el Departamento de Ingeniería Eléctrica y en Ciencias en Investigación Educativa por el  CINVETSAV.  Es  Docente en  la academia de matemáticas en el Instituto de Educación Media Superior (IEMS).</p>" });
                    cambiarEstadoModal(!estadoModal);
                  }}>M. en C. Javier Martín Zariñán Sánchez</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="w-border-t">12:00 - 12:30</td>
              <td colSpan="4">
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'socorro_rivera.jpg', semblanza: "<h5>Dra. María del Socorro Rivera Casales</h5><p>Está trabajando la creación de la metodología Schamac@h que recupera la numeración maya y la adapta al sistema decimal.</p>" });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dra. María del Socorro Rivera Casales</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'carmen_martinez.jpg', semblanza: "<h5>Dra. Carmen Martínez Adame</h5><p>Estudió matemáticas en la Facultad de Ciencias de la UNAM y el doctorado en King's College de la Universidad de Londres. Actualmente es profesora de la Facultad de Ciencias. Desde 2021 es coordinadora del posgrado en filosofía de la ciencia y a partir de 2022 es coordinadora de la Comisión de Equidad y Género de la Sociedad Matemática Mexicana.</p>" });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dra. Carmen Martínez Adame</li>
                </ul>
                <p className="schedule__item__moderator">
                  Modera: Mat. Julio César Guevara Bravo
                </p>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
              <td className="w-border-t" rowSpan="4">
                <h4>Taller de Geogebra</h4>
                <ul>
                  <li></li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'campos_nava.jpg', semblanza: '<h5>Dr. Marcos Campos Nava</h5><p>Ingeniero Mecánico por el Instituto Tecnológico de Pachuca, Maestro en Ciencias en Matemáticas y su Didáctica por la Universidad Autónoma del Estado de Hidalgo y Doctor en Ciencias en Física Educativa por el Instituto Politécnico Nacional, México. Actualmente es miembro del Sistema Nacional de Investigadores (SNI) nivel I y es profesor con perfil deseable del Programa para el Desarrollo Profesional Docente (PRODEP) otorgado por la Secretaría de Educación Pública. Desde 2011 a la fecha está adscrito al Área Académica de Matemáticas y Física de la Universidad Autónoma del Estado de Hidalgo (UAEH), impartiendo clases en la Licenciatura en Física y Tecnología Avanzada y en la Maestría en Ciencias en Matemáticas y su Didáctica.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Marcos Campos Nava</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'Agustin-Torres-Rodriguez.png', semblanza: '<h5>Dr. Agustín Torres Rodríguez</h5><p>Estudió el doctorado en Ciencias de la Educación en la Universidad Autónoma del estado de Hidalgo.</p><p>Ha dado diversos cursos sobre la didáctica de las matemáticas a nivel licenciatura y posgrado.</p><p>Ha participado y liderado diversos proyectos de investigación sobre la enseñanza y el aprendizaje de las matemáticas.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Agustín Torres</li>
                </ul>
                <p className="schedule__item__venue">Aula 5 Amoxcalli</p>
              </td>
            </tr>
            <tr>
              <td>12:30 - 13:00</td>
              <td colSpan="4">
                <h4>Receso</h4>
              </td>
            </tr>
            <tr>
              <td>13:00 - 13:30</td>
              <td colSpan="2">
                <h4>La modelización en el estudio de la razón de cambio promedio e instantáneo</h4>
                <p>Fátima Sandra Rubiales Sánchez </p>
                <p onClick={() => console.log(context.semblanza)}>Carlos Oropeza Legorreta</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td colSpan="2">
                <h4>Diplomado de didáctica de matemáticas en el bachillerato</h4>
                <p>Salvador Moreno Guzmán</p>
                <p>Ramón Rodríguez Jiménez</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
            </tr>
            <tr>
              <td>13:30 - 14:00</td>
              <td colSpan="2">
                <h4>Diseño de estrategias matemáticas con la biología y el arte a partir de herramientas IAG</h4>
                <p>Osmán Villanueva García</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td colSpan="2">
                <h4>¿Cuántas distintas maneras de definir y construir las cónicas existen?</h4>
                <p>Jorge Alonso Santos Mellado</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
            </tr>
            <tr>
              <td>14:00 - 16:00</td>
              <td colSpan="5">
                <h4>Comida</h4>
              </td>
            </tr>
            <tr>
              <td>16:00 - 17:00</td>
              <td colSpan="5">
                <h4>IA generativa para la enseñanza de las matemáticas</h4>
                <h5>Conferencia Magistral</h5>
                <p className="text-modal" onClick={() => {
                  context.setSemblanza({ foto: 'nelly_rigaud.jpg', semblanza: '<h5>Dra. Nelly Rigaud Téllez</h5><p>Estudió Ingeniería Mecánica Eléctrica, la maestría en Ingeniería y el doctorado en Ingeniería de Sistemas. Actualmente es profesora en Ingeniería industrial en la FES Aragón.</p><p>Autora de 5 libros de apoyo a la docencia, y en los últimos cinco años, ha publicado 35 artículos de difusión y divulgación científica.</p>' });
                  cambiarEstadoModal(!estadoModal);
                }}>Dra. Nelly Rigaud Téllez</p>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr>
              <td>17:00 - 17:30</td>
              <td>
                <h4>Funciones exponenciales</h4>
                <p>Rosa Nayeli López Pacheco</p>
                <p> Loreto Cruz Hernández</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>Análisis de algunos parámetros y características de las cónicas haciendo uso del software libre GeoGebra</h4>
                <p>Luis Miguel Torres Sánchez</p>
                <p>Carlos Oropeza Ugalde</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>La razón áurea aplicada al dibujo y su contenido matemático: teoría y práctica</h4>
                <p>Claudia Mercedes Rodríguez</p>
                <p>Osorio Salvador Espinosa Cruz</p>
                <p className="schedule__item__venue">Leonila Vazquez</p>
              </td>
              <td rowSpan="4" className="w-border-r">
                <h4>Taller de Geogebra</h4>
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'campos_nava.jpg', semblanza: '<h5>Dr. Marcos Campos Nava</h5><p>Ingeniero Mecánico por el Instituto Tecnológico de Pachuca, Maestro en Ciencias en Matemáticas y su Didáctica por la Universidad Autónoma del Estado de Hidalgo y Doctor en Ciencias en Física Educativa por el Instituto Politécnico Nacional, México. Actualmente es miembro del Sistema Nacional de Investigadores (SNI) nivel I y es profesor con perfil deseable del Programa para el Desarrollo Profesional Docente (PRODEP) otorgado por la Secretaría de Educación Pública. Desde 2011 a la fecha está adscrito al Área Académica de Matemáticas y Física de la Universidad Autónoma del Estado de Hidalgo (UAEH), impartiendo clases en la Licenciatura en Física y Tecnología Avanzada y en la Maestría en Ciencias en Matemáticas y su Didáctica.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Marcos Campos Nava</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'Agustin-Torres-Rodriguez.png', semblanza: '<h5>Dr. Agustín Torres Rodríguez</h5><p>Estudió el doctorado en Ciencias de la Educación en la Universidad Autónoma del estado de Hidalgo.</p><p>Ha dado diversos cursos sobre la didáctica de las matemáticas a nivel licenciatura y posgrado.</p><p>Ha participado y liderado diversos proyectos de investigación sobre la enseñanza y el aprendizaje de las matemáticas.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Agustín Torres</li>
                </ul>
                <p className="schedule__item__venue">Aula 5 Amoxcalli</p>
              </td>
              <td rowSpan="4">
                <h4>Taller Generación de secuencias de aprendizaje basado en problemas con ChatGPT</h4>
                <ul>
                  <li>Dr. Leonardo Ignacio Martónez Sandoval</li>
                </ul>
                <p className="schedule__item__venue">Aula 6 Amoxcalli</p>
              </td>
            </tr>
            <tr>
              <td>17:30 - 18:00</td>
              <td>
                <h4>NEPOHUALTZINTZIN: Historia de la matemática mexicana</h4>
                <p>Carlos Carrillo Suárez</p>
                <p>Sara Rocío Ruiz Galicia</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>Videos matemáticos de alta calidad: La recta y sus propiedades</h4>
                <p>Mari Carmen González-Videgaray</p>
                <p>Rubén Romero-Ruiz</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>Uso del conocimiento geométrico en el contexto de la mecánica vectorial</h4>
                <p>Esther Sarai García González</p>
                <p className="schedule__item__venue">Leonila Vazquez</p>
              </td>
            </tr>
            <tr>
              <td>18:00 - 18:30</td>
              <td>
                <h4>La Torre Reforma</h4>
                <p>Alejandro Carlos Portales Rioseco</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>El Pensamiento Matemático como recurso sociocognitivo en la Nueva Escuela Mexicana: Una experiencia docente con las progresiones</h4>
                <p>José Manuel Coronel Cuevas</p>
                <p>Eva Damián Ayala</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>El uso de Kahoot y Genially como herramientas para enseñar Matemáticas III en el CCH</h4>
                <p>Yenisel Reyes Tenorio</p>
                <p className="schedule__item__venue">Leonila Vazquez</p>
              </td>
            </tr>
            <tr>
              <td>18:30 - 19:00</td>
              <td>
                <h4>Propuesta de secuencias didácticas utilizando aula invertida, para la asignatura matemáticas IV, de la Escuela Nacional Preparatoria</h4>
                <p>Patricia Ortega Espinosa</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>La Nueva Escuela Mexicana. ¿Qué tan nueva es?</h4>
                <p>Mario Delgadillo Torres</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>Un viaje al paraíso de Herón de Alejandría</h4>
                <p>Aarón Aparicio Hernández</p>
                <p className="schedule__item__venue">Leonila Vazquez</p>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default November7th;
