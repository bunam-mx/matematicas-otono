import { useContext, useState } from "react";
import { SemblanzaContext } from "../../../Context";
import Modal from "./Modal";
function November8th() {
  const context = useContext(SemblanzaContext);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  return (
    <>
      <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
      </Modal>
      <article className="schedule__item">
        <header>
          <h3>8 de noviembre 2024</h3>
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
              <td>09:00 - 10:00</td>
              <td colSpan="5">
                <h4>Sobre la Nueva Escuela Mexicana</h4>
                <h5>Conferencia magistral</h5>
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'alejandro_javier_diaz.png', semblanza: '<h5>Dr. Alejandro Javier Diaz-Barriga Casales</h5><p>Estudió la licenciatura, maestría y doctorado en matemáticas en la Facultad de Ciencias de la UNAM.<p> <p>Es investigador en el Instituto de Matemáticas desde 1970. </p><p>Sus áreas de estudio son:</p><ul><li>Teoría de números algebraicos.</li><li>Teoría de grupos.</li><li>Enseñanza de las matemáticas.</li></ul><p>Ha trabajado en la Universidad Autónoma de Querétaro implementando la maestría en Docencia de las Matemáticas donde a dirigido varias tesis.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Alejandro Díaz Barriga</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'andres_flores.jpg', semblanza: '<h5>Mat. Alejandro Javier Diaz-Barriga Casales</h5><p>Matemático por la Facultad de Ciencias de la UNAM. Actualmente se desempeña como coordinador del recurso sociocognitivo de Pensamiento Matemático en la Coordinación Sectorial de Fortalecimiento Académico de la SEMS. Es el responsable del rediseño curricular de los planes y programas de estudio de Pensamiento Matemático en  Educación Media Superior.' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Mat. Andrés Flores Marín</li>
                </ul>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr>
              <td>10:00 - 11:30</td>
              <td colSpan="5">
                <h4>IA generativa en la  enseñanza y aprendizaje de las matemáticas</h4>
                <h5>Mesa redonda</h5>
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'alfonso_ochoa.jpg', semblanza: '<h5>Dr. Alfonso Ochoa Hofmann</h5><p>Es Licenciado en Derecho y en Ciencias de la Comunicación por la UNAM, Maestro en Derecho por la UNAM y Maestro en Derecho Global por la Universidad de Génova (Italia) y  Maestro en Teoría Jurídica por la Universidad de Girona (España). Es profesor definitivo en las Asignaturas de Filosofía del Derecho en la Facultad de Derecho y de Derecho en la Escuela Nacional Preparatoria.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Alfonso Ochoa Hofmann</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'ismael_everardo.jpg', semblanza: '<h5>Dr. Ismael Everardo Bárcenas Patiño</h5><p>Everardo Bárcenas es profesor en la Facultad de Ingeniería de la UNAM, donde también coordina el Laboratorio de Inteligencia Artificial Microsoft. Tiene un doctorado en Ciencias de la Computación por la Universidad de Grenoble y sus intereses de investigación incluyen el razonamiento automatizado, verificación formal y representación del conocimiento.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Ismael Everardo Bárcenas Patiño</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'veronica_esther.png', semblanza: '<h5>Dra. Verónica Esther Arriola Ríos</h5><p>Obtuvo las licenciaturas en Física y Ciencias de la Computación en la Faculta de Ciencias de la UNAM.  Estudió la Maestría en Ciencia e Ingeniería de la Computación, también en la UNAM, en el área de Graficación y Ambientes Virtuales.</p><p>Su trabajo de investigación se enfoca al área de aprendizaje de conceptos, utilizando escenarios con objetos deformables volumétricos (esponjas, plastilina, pan).  Para ello utiliza sistemas donde se combina información adquirida a través de diversas modalidades sensoriales: visión, tacto, audio y propriocepción.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dra. Verónica Esther Arriola Ríos</li>
                </ul>
                <p className="schedule__item__moderator">Modera: Dra. Guadalupe Vadillo</p>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr>
              <td>11:30 - 12:00</td>
              <td colSpan="5">
                <h4>Receso</h4>
              </td>
            </tr>
            <tr>
              <td>12:00 - 12:30</td>
              <td colSpan="2">
                <h4>Historia de la ciencia y la tecnología en la enseñanza de las matemáticas</h4>
                <p>María Guadalupe Venteño Jaramillo</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td colSpan="2">
                <h4>El aprendizaje de la ecuación cuadrática a través de un problema contextualizado con el uso de la inteligencia artificial generativa</h4>
                <p>Giselle Ochoa Hofmann</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td rowSpan="4">
                <h4>IA Generativa<br />para el desarrollo<br />de recursos<br />educativos</h4>
                <ul>
                  <li>Mtro. Omar Terrazas Razo</li>
                </ul>
                <p className="schedule__item__venue">Aula 6 Amoxcalli</p>
              </td>
            </tr>
            <tr>
              <td>12:30 - 13:00</td>
              <td colSpan="2">
                <h4>La matemática en sociedades antiguas: el caso del trinomio cuadrado perfecto y ángulo de inclinación</h4>
                <p>Leticia Aguilar Pascual</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td colSpan="2" rowSpan="2">
                <h4>La nueva escuela mexicana en el bachillerato</h4>
                <p className="text-modal" onClick={() => {
                  context.setSemblanza({ foto: 'sam.jpg', semblanza: '<h5>Silvia Aguilar Martínez</h5><p>Maestra en Alta Dirección de Gobierno y Políticas Públicas por el Instituto Universitario de Investigación Ortega y Gasset México, Especialista en Mercadotecnia y Licenciada en Economía por la UNAM. Actualmente, docente en la Facultad de Economía de la UNAM y en la Escuela Superior de Economía del IPN. Estuve a cargo en la Coordinación Sectorial de Fortalecimiento Académico en la Subsecretaría de Educación Médica Superior de la implementación del Marco Curricular Común de la EMS y la oferta de formación para el personal docente y directivo, entre otros temas.</p>' });
                  cambiarEstadoModal(!estadoModal);
                }}>Silvia Aguilar Martínez</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
            </tr>
            <tr>
              <td>13:00 - 13:30</td>
              <td colSpan="2">
                <h4>Implementación de la tecnología para el aprendizaje de las funciones trigonométricas en el contexto de la NEM a nivel bachillerato</h4>
                <p>Juan Adolfo Álvarez Martínez</p>
                <p>Lorena Mendoza Guzmán</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
            </tr>
            <tr>
              <td>13:30 - 14:00</td>
              <td colSpan="2">
                <h4>Dos maneras de obtener el hipervolumen de una bola euclidiana de dimensión n</h4>
                <p>Gabriel Gutiérrez García</p>
                <p>Antonio Gutiérrez Santillán</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td colSpan="2">
                <h4>Pensamiento Matemático 1, experiencias en la aplicación</h4>
                <p>Elson Sánchez Pastenes</p>
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
              <td>16:00 - 17:30</td>
              <td colSpan="5">
                <h4>Nueva Escuela Mexicana ¿qué esperamos en el bachillerato?</h4>
                <h5>Mesa redonda</h5>
                <ul>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'javier_lezama.jpg', semblanza: '<h5>Dr. Javier Lezama Andalón</h5><p>Realizó sus estudios de doctorado en Matemática Educativa en el Cinvestav del IPN.</p><p>Fue uno de los responsables del diseño y luego por 11 años, responsable del desarrollo del Programa de Matemática Educativa PROME, primer posgrado en Matemática Educativa en México y en América Latina en la modalidad en distancia "en línea" en el CICATA del IPN.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Javier Lezama Andalón</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'jose_lorenzo.jpeg', semblanza: '<h5>Dr. José Lorenzo Sánchez Alavez</h5><p>Doctor en Ciencias por el Centro de Investigación y Estudios Avanzados del I.P.N, con la especialidad en Matemática Educativa.Su trabajo de investigación ha girado en torno al papel de los recursos, y en particular de la tecnología digital, en el desarrollo del pensamiento matemático.</p><p>Actualmente es docente en el programa de Maestría en Matemática Educativa de la Universidad Popular Autónoma de Puebla y Director del Centro de Estudio de Bachillerato 4/1 “Mtro. Moisés Sáenz Garza” de la Ciudad de México.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. José Lorenzo Sánchez Alavez</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'zaira_molina.jpg', semblanza: '<h5>Dra. Zaira Molina Xeronimo</h5><p>Doctora en Educación por el Centro de Estudios Superiores en Educación CESE.</p><p>Certificada en Competencias Docentes en Educación Media Superior, avalada por el Comité Académico de Certificación de la Asociación Nacional de Universidades e Instituciones de Educación Superior ANUIES. Y cuenta con 2 especialidades para la enseñanza de la Matemática en el nivel medio superior.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dra. Zaira Molina Xeronimo</li>
                  <li className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'nadia_gil.png', semblanza: '<h5>Dra.Nadia Gil Ruiz</h5><p>Doctora en Ciencias en la especialidad de matemática educativa por el Centro de Investigación y Estudios avanzados del IPN (Cinvestav). Experta Universitaria en Administración de la Educación por la Universidad a Distancia de España. Posdoctorante  en Gobernanza y Políticas Públicas  de la Cátedra Iberoamericana de Educación por la Organización de Estados Iberoamericanos y la Universidad de Alcalá de Henares en España.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dra.Nadia Gil Ruiz</li>
                </ul>
                <p className="schedule__item__moderator">Modera: Dra. Adriana Gomez Reyes y Dra. Leticia Sánchez López</p>
                <p className="schedule__item__venue">Auditorio Carlos Graef</p>
              </td>
            </tr>
            <tr>
              <td>17:30 - 18:00</td>
              <td>
                <h4>¿Y qué hay de las grandes sumas y el proceso de inducción?</h4>
                <p>Claudia Mercedes Rodríguez Osorio</p>
                <p>Salvador Espinosa Cruz</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>Enfoque semiótico en la enseñanza-aprendizaje de las matemáticas apoyado con tecnologías</h4>
                <p>Antonio García Flores</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>Incorporación de herramientas digitales e inteligencia artificial en la práctica docente como innovación educativa</h4>
                <p>Claudia Rodríguez Correa</p>
                <p>José Luis Calderón Durán</p>
                <p className="schedule__item__venue">Leonila Vázquez</p>
              </td>
              <td colSpan="2" rowSpan="4">
                <h4>Siguiendo los pasos del prodigio matemático Srinivasa Ramanujan (1887-1920)</h4>
                <p>Wenceslao Santiago Germán</p>
                <p className="text-modal" onClick={() => {
                    context.setSemblanza({ foto: 'leonardo_mar.jfif', semblanza: '<h5>Dr. Leonardo Martínez Sandoval</h5><p>Estudió el doctorado en Matemáticas conjuntamente en la UNAM (IM-Juriquilla) y la Université de Montpellier (Francia). Después, hizo un postdoc en Ben Gurion University (Israel), y otro en Sorbonne Université (Francia). Actualmente es Profesor de Tiempo Completo en la Facultad de Ciencias de la UNAM, donde realiza actividades de investigación y docencia.</p>' });
                    cambiarEstadoModal(!estadoModal);
                  }}>Dr. Leonardo Martínez Sandoval</p>
              </td>
            </tr>
            <tr>
              <td>18:00 - 18:30</td>
              <td>
                <h4>Uso de la tecnología en la enseñanza de las matemáticas en el bachillerato</h4>
                <p>Blanca Cecilia Cruz Salcedo</p>
                <p>Sandra Diego Ortiz</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>Mejoras en la enseñanza de las tres leyes de Newton en el nuevo Bachillerato a Distancia</h4>
                <p>Carlos Adrián Sarmiento Gutiérrez</p>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>

                <p className="schedule__item__venue">Leonila Vázquez</p>
              </td>
            </tr>
            <tr>
              <td>18:30 - 19:00</td>
              <td>
                <h4>Estrategias didácticas basadas en la ciencia cognitiva para la enseñanza de las matemáticas</h4>
                <p>María Guadalupe Venteño Jaramillo</p>
                <p className="schedule__item__venue">Sotero Prieto 1</p>
              </td>
              <td>
                <h4>Ponencia</h4>
                <p className="schedule__item__venue">Sotero Prieto 3</p>
              </td>
              <td>
                <h4>Ponencia</h4>
                <p className="schedule__item__venue">Leonila Vázquez</p>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default November8th;
