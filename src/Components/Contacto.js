import React, { useState } from "react";

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!nombre || !email || !mensaje) {
            setError("Por favor completa todos los campos.");
            return;
        }

        // Reiniciar error y mostrar mensaje de éxito
        setError("");
        setEnviado(true);

        // Limpiar formulario después de enviar
        setNombre("");
        setEmail("");
        setMensaje("");
    };

    return (
        <div className="row mt-5">
            <div className="col-lg-6 offset-lg-3 h-100 p-4 shadow border-0" style={{ backgroundColor: '#f9fcf4ff', borderRadius: '15px' }}>
                <h4 className="text-center mb-4">📬 Contáctanos</h4>

                {enviado ? (
                    <div className="alert alert-success text-center" role="alert">
                        ¡Gracias por contactarnos! 🌿
                        <br />
                        Te responderemos pronto.
                    </div>
                ) : (
                    <form onSubmit={manejarEnvio}>
                        {error && (
                            <div className="alert alert-danger text-center" role="alert">
                                {error}
                            </div>
                        )}

                        <div className="form-group mb-3">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Mensaje</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Enviar mensaje 🌱
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contacto;