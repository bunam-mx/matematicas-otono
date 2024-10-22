import "./Modal.css";
import { useContext } from "react";
import { SemblanzaContext } from "../../../Context";
// eslint-disable-next-line react/prop-types
const Modal = ({ estado, cambiarEstado }) => {
    const context = useContext(SemblanzaContext);

    return (
        <>
            {estado &&
                <div className="overlay">
                    <div className="contenedorModal">
                        <div>
                            <div className="fotoSemblanza">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/semblanzas/${context.semblanza.foto}`}
                                    alt="foto"
                                    width={100}
                                />
                            </div>
                            <div className="textSemblanza" dangerouslySetInnerHTML={
                                { __html: context.semblanza.semblanza }
                            } />
                            <div className="closeSemblanza">
                                <button className="closeModal" onClick={() => cambiarEstado(false)}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;