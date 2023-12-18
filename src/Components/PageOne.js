import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PageOne = () => {
    return (
        <div className={'col-lg-12 d-flex justify-content-center'}>
            <Carousel>
                <Carousel.Item>
                    <img style={{width: '1200px', height: '500px'}}
                        className="d-block"
                        src={"https://realnoevremya.ru/uploads/news/76/62/af9407458170e7f6.jpg"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Герб Осетии на фоне флага</h3>
                        <p className={'fs-4 bg-secondary bg-opacity-25'}>Цвета Осетинского флага обозначают моральную и духовную чистоту; отвагу, силу и честь; изобилие, благосостояние и процветание.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width: '1200px', height: '500px'}}
                        className="d-block"
                        src={"https://vmeste-rf.tv/upload/resize_cache/iblock/7b1/1040_650_2/lori_0000039468_a6.jpg"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Вид на Бэтмена</h3>
                        <p className={'fs-4 bg-secondary bg-opacity-25'}>p.s. На статую Иссы Плиева</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width: '1200px', height: '500px'}}
                        className="d-block"
                            src={'https://img.magput.ru/pics/large/ccb25221-5d78-4261-810c-896f5a3659cc..jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Горы Северной Осетии</h3>
                        <p className={'fs-4 bg-secondary bg-opacity-25'}>
                            Одна из главных достопримечательностей Осетии - это её горы
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default PageOne;