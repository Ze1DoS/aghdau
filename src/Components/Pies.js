import React from 'react';
import {Card, Container, Row} from "react-bootstrap";

const Pies = () => {
    const chirita = [
        {id:1, name: 'Уалибах', description: 'пирог круглой формы с осетинским сыром', img: 'https://lafoy.ru/photo_l/osetinskie-pirogi-recepty-poshagovo-foto-1368-55149.jpg'},
        {id:2, name: 'Фыдджын', description: 'пирог с рубленым мясом (например говядиной)', img: 'https://intheglass.ru/assets/cache/images/news/2020/11/745x-oset_big.b9b.jpg'},
        {id:3, name: 'Картофджын', description: 'пирог с картофелем и сыром', img: 'https://yummybook.ru/cloud/images/recipe/item/4225/image_middle_531459b3ac0940c12_04948697.jpg'},
        {id:4, name: 'Цахараджын', description: 'пирог со свекольной ботвой и сыром', img: 'https://south-ossetia.info/wp-content/uploads/2018/10/28ef538bb588fbcfc57996e44540ca75.jpg'},
        {id:5, name: 'Насджын', description: 'пироги с измельчённой тыквой', img: 'https://osetinskie-pirogi-tsar.ru/images/ospirog/os_pir_big13.jpg'},
        {id:6, name: 'Артадзыхон', description: 'пирог треугольной формы с сыром', img: 'https://south-ossetia.info/wp-content/uploads/2015/07/%D0%BA%D1%83%D1%85%D0%BD%D1%8F.jpg'},
        {id:7, name: 'Балджын', description: 'пирог с вишнёвой начинкой.', img: 'https://img.povar.ru/main/de/be/a8/df/osetinskii_pirog_s_vishnei-211689.jpg'},
        {id:8, name:'Давонджын ', description: 'пироги с листьями черемши и осетинским сыром', img: 'https://oldbakery.ru/upload_files/d343d3b3b07a5ae9e64faa27f51dd501.jpg'},
        {id:9, name:'Кабускаджын ', description: 'пироги с измельчённой капустой и сыром', img: 'https://sirdamuka.ru/upload/iblock/105/10594ff0dc995271bee166fbbfa19452.jpg'},
        {id:10, name:'Кадурджын ', description: 'пирог с фасолью', img: 'https://assa.su/netcat_cache/thumb/03edfdc53a3da9f1208c4b9ee1b689ca_400x300x0.jpg'},
        {id:11, name:'Кадындзджын ', description: 'пирог с осетинским сыром и зелёным луком', img: 'https://pirog52.ru/storage/productpictures/3105_syr_zelenyi_luk.jpg'}
    ]
    return (
        <Container className={'container-fluid'}>
                <Row xs={12} md={3} lg={4} className={'d-flex justify-content-center'}>
                    {chirita.map(chiri => (
                        <Card key={chiri.id} className={'border-success mx-3 mt-4'}>
                            <Card.Img className={'mt-3 border border-success'} variant="top" src={chiri.img} />
                            <Card.Body>
                                <Card.Title>{chiri.name}</Card.Title>
                                <Card.Text>
                                    {chiri.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
        </Container>
    );
};

export default Pies;