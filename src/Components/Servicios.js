import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Servicios() {
    return (
        <div className='container row mt-5'>

            <div className='row'>
                <div className='col-lg-12 mb-4'>
                    <h1 className='fw-bold text-center text-success'>Nuestros Servicios</h1>
                    <p className='text-center text-muted'>🌿 Soluciones completas para tu alimentación saludable y huerto en casa</p>
                </div>
            </div>

            <div className='row justify-content-center mt-2'>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Body className='d-flex flex-column text-center p-4'>
                            <div className='mb-3' style={{ fontSize: '3rem', color: '#28a745' }}>🧺</div>
                            <Card.Title>Canasta Familiar</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Recibe en tu hogar una canasta completa con frutas y verduras frescas, 
                                seleccionadas especialmente para cubrir las necesidades nutricionales 
                                de tu familia. Productos de temporada, orgánicos y de la más alta calidad.
                            </Card.Text>
                            <Button variant="success" className='mt-3'>Solicitar Canasta</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Body className='d-flex flex-column text-center p-4'>
                            <div className='mb-3' style={{ fontSize: '3rem', color: '#28a745' }}>🧑‍🌾</div>
                            <Card.Title>Kit Huerto en Casa</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Todo lo que necesitas para comenzar tu propio huerto en casa. 
                                Incluye semillas seleccionadas, sustrato orgánico, herramientas básicas 
                                y guía de cultivo. Ideal para espacios pequeños y principiantes.
                            </Card.Text>
                            <Button variant="success" className='mt-3'>Comprar Kit</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Body className='d-flex flex-column text-center p-4'>
                            <div className='mb-3' style={{ fontSize: '3rem', color: '#28a745' }}>🌱</div>
                            <Card.Title>Taller para Principiantes</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Aprende desde cero cómo crear y mantener tu propio huerto en casa. 
                                Técnicas básicas de siembra, riego, cuidado de plantas y cosecha. 
                                Sesiones prácticas presenciales y virtuales para toda la familia.
                            </Card.Text>
                            <Button variant="success" className='mt-3'>Inscribirse al Taller</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Servicios;