import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nosotros() {
    return (

        <div className='container row mt-5' style={{backgroundColor: '#f6f645ff'}}>

            <div className='row'>
                <div className='col-lg-12 text-center mb-4'>
                    <h1>Sobre Nosotros</h1>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-6 mb-4'>
                    <div className='h-100 p-4' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <h3 className='text-success mb-3'>Nuestra Misión</h3>
                        <p className='flex-grow-1'>
                            En HuertoHogar, llevamos más de 6 años acercando la frescura y calidad del campo 
                            chileno directamente a tu puerta. Operamos en 9 puntos estratégicos a lo largo del país, 
                            garantizando productos siempre frescos y naturales.
                        </p>
                        <div className='mt-4'>
                            <h5 className='fw-bold mb-3'>Lo que nos hace diferentes</h5>
                            <ul className='list-unstyled'>
                                <li className='mb-2'>✅ Productos directamente del campo</li>
                                <li className='mb-2'>✅ Apoyo a agricultores locales</li>
                                <li className='mb-2'>✅ Frescura garantizada</li>
                                <li className='mb-2'>✅ Envíos a todo Chile</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 mb-4'>
                    <div className='h-100 p-4' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <h3 className='text-success mb-3'>Nuestras Ubicaciones</h3>
                        <p className='mb-3'>Estamos presentes en 7 ciudades principales:</p>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Santiago</span>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Puerto Montt</span>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Villarica</span>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Nacimiento</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Viña del Mar</span>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Valparaíso</span>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <span className='text-success me-2'>📍</span>
                                    <span>Concepción</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 p-3 text-center' style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                            <div className='fw-bold text-success'>6+ años de experiencia</div>
                            <small className='text-muted'>Sirviendo a familias chilenas</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;