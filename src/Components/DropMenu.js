import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

const DropMenu = () => {
    const params = useParams()
    const navigate = useNavigate()
    const chapters = [
        {id:1 , name:"Приветствие" , description: "Как приветствуют друг друга осетины"},
        {id:2 , name:"Осетинские пироги" , description: "Где заказать настоящий осетинский пирог"},
        {id:3 , name:"Æгъдау патруль" , description: "Веди себя правильно"},
        {id:4 , name:"Фамилии" , description: "Осетинские фамилии и их истоиия"},
        {id:5 , name:"Родовые земли" , description: "Родовые земли главных фамилий"},
        {id:6 , name:"История Осетии" , description: "История народов Осетии"},
        {id:7 , name:"Достопримечательности" , description: "Что интересного есть в Осетии"}
    ]

    return (
        <div>
            <Row className="w-auto">
                <Col className=" d-flex flex-column">
                    {chapters.map(chapter => (
                        <Button key={chapter.id} style={{width: '400px'}} type={"button"} className={'d-flex align-items-center justify-content-between ps-3 mt-2'}
                                variant={chapter.id === Number(params.action) ? 'success' : 'light'} onClick={() => navigate(`/${chapter.id}`)}>
                            <div>
                                <h5 className={'text-start'}>{chapter.name}</h5>
                                <p className={`${chapter.id === Number(params.action) ? 'text-white-50': 'text-muted'}`}>{chapter.description}</p>
                            </div>
                            <div><i className={"bi bi-chevron-right"}></i></div>
                        </Button>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default DropMenu;