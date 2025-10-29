import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nosotros() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12 text-center mb-5'>
                    <h1 className='fw-bold text-success'>Sobre Nosotros</h1>
                </div>
            </div>

            <div className='row justify-content-center'>
                
                <div className='col-lg-6 col-md-6 mb-4'>
                    <div className='h-100 p-4 shadow border-0' style={{ backgroundColor: '#daffc6ff', borderRadius: '15px' }}>
                        <h3 className='text-success mb-4'>🍋 Nuestra Misión</h3>
                        <p className='mb-4'>
                            En HuertoHogar, llevamos más de 6 años acercando la frescura y calidad del campo 
                            chileno directamente a tu puerta. Operamos en 9 puntos estratégicos a lo largo del país, 
                            garantizando productos siempre frescos y naturales.
                        </p>
                        
                        <h5 className='fw-bold mb-3 text-dark'>Lo que nos hace diferentes</h5>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center mb-2'>
                                <p className='text-success me-2 mb-0'>🍓</p>
                                <p className='mb-0'>Productos directamente del campo</p>
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <p className='text-success me-2 mb-0'>🍉</p>
                                <p className='mb-0'>Apoyo a agricultores locales</p>
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <p className='text-success me-2 mb-0'>🍑</p>
                                <p className='mb-0'>Frescura garantizada</p>
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <p className='text-success me-2 mb-0'>🫐</p>
                                <p className='mb-0'>Envíos a todo Chile</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 mb-4'>
                    <div className='h-100 p-4 shadow border-0' style={{ backgroundColor: '#daffc6ff', borderRadius: '15px' }}>
                        <h3 className='text-success mb-4' hrs='asset/images/logo/icono navegador.png'> 🍋 Nuestras Ubicaciones</h3>
                        <p className='mb-3'>Estamos presentes en 7 ciudades principales:</p>
                        
                        <div className='row mb-4'>
                            <div className='col-6'>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🫑 Santiago</p>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🍅 Puerto Montt</p>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🥕 Villarica</p>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🥑 Nacimiento</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🥬 Viña del Mar</p>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🌽 Valparaíso</p>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <p className='mb-0'>🥦 Concepción</p>
                                </div>
                            </div>
                        </div>

                        {/* Experiencia */}
                        <div className='text-center p-3 mt-auto' style={{ backgroundColor: 'white', borderRadius: '10px', border: '2px solid #28a745' }}>
                            <div className='fw-bold text-success fs-5'>6+ años de experiencia</div>
                            <p className='text-muted mb-0'>Sirviendo a familias chilenas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;