import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <div className="overlay">
                    <div className="contenedorModal">
                        {children}
                        <div>
                            <button className="closeModal" onClick={() => cambiarEstado(false)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;