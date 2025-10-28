import React, { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);
    return (
    <div className="row mt-4">
      <div className="col-lg-6 offset-lg-3">
        <h4 className="text-center py-3">📬 Contáctanos</h4>
        {enviado ? (
          <div className="alert alert-success" role="alert">
            ¡Gracias por contactarnos, {nombre}! Te responderemos pronto.
            </div>
        ) : (
        <form
          onSubmit={(e) => {enviado(true); e.preventDefault();}}
        >
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
                className="form-control"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
          </div>
            <div className="form-group mt-3">

            <label>Email</label>
            <input
              type="email"
                className="form-control"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Mensaje</label>
            <textarea
              className="form-control"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
            Enviar
            </button>
        </form>
        )}
      </div>
    </div>
  );
}
export default Contacto;
