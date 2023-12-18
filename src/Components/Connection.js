import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Connection = () => {
    return (
        <div>
            <div className={'col-lg-12 d-flex justify-content-center'} >
                <Carousel fade>
                    <Carousel.Item style={{width: '1800px', height: '500px'}}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/e6/1e/85/e61e85cdd30d5c9d9ade8f086c51c044.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption style={{paddingBottom:'170px'}}>
                            <h3>Directed by</h3>
                            <p className={'fs-2 fw-bold'}>ROBERT B. WEIDE</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{width: '1800px', height: '500px'}}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/6b/ed/4a/6bed4afd3631678e070ba817c00034e5.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{paddingBottom:'170px'}}>
                            <h3>Executive Producer</h3>
                            <p className={'fs-2 fw-bold'}>LARRY DAVID</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{width: '1800px', height: '500px'}}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/47/25/68/47256834afd6b8c77718dc460047acaa.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{paddingBottom:'170px'}}>
                            <h3>Executive Producer</h3>
                            <p className={'fs-2 fw-bold'}>ELDAR GARLIN</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={'d-flex justify-content-center'}>
                <Card className={'m-3 border-success'}>
                    <Card.Header>О нас</Card.Header>
                    <Card.Body>
                        <Card.Title>Команда разработчиков: </Card.Title>
                        <Card.Text>
                            Конченый идиот, самый сексуальный мужик в мире, <br/>
                            горячая чикса, злодей-британец, так себе шутник, <br/>
                            пубертатная язва, какой‑то мужик, говнюки, <br/>
                            недопонятые гении.
                        </Card.Text>
                        <Button variant="success">Go Fu Yourself</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Connection;