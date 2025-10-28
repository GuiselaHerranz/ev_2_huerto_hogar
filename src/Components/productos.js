import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductosDestacados() {
    return (

        <div className='container row mt-5'>

            <div className='row'>
                <div className='col-lg-12 mb-4' >
                    <h1 className='fw-bold text-center text-success'>Productos Destacados</h1>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Img
                            variant="top"
                            src="assets/images/productos/fuji-red.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>Manzana Fuji</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres.
                            </Card.Text>
                            <div className='d-flex justify-content-between align-items-center mt-auto'>
                                <span className='fw-bold text-success fs-5'>$1.200/kg</span>
                                <Button variant="success">Añadir al Carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Img
                            variant="top"
                            src="assets/images/productos/naranjas_900x.webp"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>Naranjas Valencia</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas.
                            </Card.Text>
                            <div className='d-flex justify-content-between align-items-center mt-auto'>
                                <span className='fw-bold text-success fs-5'>$1.000/kg</span>
                                <Button variant="success">Añadir al Carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100 shadow border-0'>
                        <Card.Img
                            variant="top"
                            src="assets/images/productos/zanahorias-18501-31.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>Zanahorias Orgánicas</Card.Title>
                            <Card.Text className='flex-grow-1'>
                                Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra.
                            </Card.Text>
                            <div className='d-flex justify-content-between align-items-center mt-auto'>
                                <span className='fw-bold text-success fs-5'>$900/kg</span>
                                <Button variant="success">Añadir al Carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductosDestacados;