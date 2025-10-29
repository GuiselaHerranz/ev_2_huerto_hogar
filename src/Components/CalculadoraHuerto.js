import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function CalculadoraHuerto() {
    // Cantidades
    const [Manzana, setManzana] = useState(0);
    const [Naranja, setNaranja] = useState(0);
    const [Zanahoria, setZanahoria] = useState(0);

    // Tipo de envío
    const [envio, setEnvio] = useState("");

    //Tipo de servicio
    const [servicio, setServicio] = useState("");

    // Precio según servicio
    const precioServicio =
        servicio === "Canasta Familiar" ? 25000 : servicio === "Venta de Insumos" ? 16000 : servicio === "Taller para principiantes" ? 5000 : 0;

    // Precios base
    const precioMan = 1200;
    const precioNar = 1000;
    const precioZan = 900;

    // Calcular subtotal
    const subtotal =
        Manzana * precioMan +
        Naranja * precioNar +
        Zanahoria * precioZan +
        precioServicio;

    // Costos de envío
    const costoEnvio =
        envio === "express" ? 4000 : envio === "Regiones" ? 2000 : envio === "Metropolitana" ? 1500 : 0;


    // Total final
    const total = subtotal + costoEnvio;

    return (
        <div className="row mt-4 justify-content-center gap-4">

            <div className="col-lg-5 h-100 p-4 shadow border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' }}>
                <h4 className="text-center py-3">📝 Calculadora de Compra</h4>

                <div className="form-group mt-3">
                    <label>🍎 Manzana (kg)</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ej: 3"
                        value={Manzana}
                        onChange={(e) => setManzana(Number(e.target.value))}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>🍊 Naranja (kg)</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ej: 1"
                        value={Naranja}
                        onChange={(e) => setNaranja(Number(e.target.value))}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>🥕 Zanahoria (kg)</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ej: 3"
                        value={Zanahoria}
                        onChange={(e) => setZanahoria(Number(e.target.value))}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>🤝 Tipo de servicio</label>
                    <select
                        className="form-select"
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Canasta Familiar">Canasta Básica Familiar - $25.000</option>
                        <option value="Venta de Insumos">Venta de Insumos - $16.000</option>
                        <option value="Taller para principiantes">Taller para principiantes - $5.000</option>
                    </select>
                </div>



                <div className="form-group mt-3">
                    <label>🚚 Tipo de Envío</label>
                    <select
                        className="form-select"
                        value={envio}
                        onChange={(e) => setEnvio(e.target.value)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="express">Express - $4.000</option>
                        <option value="Metropolitana">Metropolitana - $1.500</option>
                        <option value="Regiones">Regiones - $2.000</option>
                    </select>
                </div>
            </div>


            <div className="col-lg-6 h-100 p-4 shadow border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' }}>
                <h4 className="text-center py-3">📦 Resumen</h4>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Concepto</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Manzana (${precioMan.toLocaleString()} c/u)</td>
                            <td>${(Manzana * precioMan).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Naranja (${precioNar.toLocaleString()} c/u)</td>
                            <td>${(Naranja * precioNar).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Zanahoria (${precioZan.toLocaleString()} c/u)</td>
                            <td>${(Zanahoria * precioZan).toLocaleString()}</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Servicio</td>
                            <td>${precioServicio.toLocaleString()}</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Subtotal</td>
                            <td>${subtotal.toLocaleString()}</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Envío</td>
                            <td>${costoEnvio.toLocaleString()}</td>
                        </tr>
                        <tr style={{ fontSize: "20px", fontWeight: "bold" }}>
                            <td colSpan={2}>Total a pagar</td>
                            <td>${total.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default CalculadoraHuerto;




=======
>>>>>>> 93aafc57a54478f6c54bcc13baa1d02689aab520
