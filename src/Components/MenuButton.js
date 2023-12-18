import React from 'react';
import {Button} from "react-bootstrap";

const MenuButton = ({id, name, description}) => {
    return (
        <Button key={id} type={"button"} className={'d-flex align-items-center justify-content-between p-3 mt-3'} variant={'light'}>
            <div>
                <h5 className={'text-start'}>{name}</h5>
                <p className={'p-0 m-0 text-muted'}>{description}</p>
            </div>
            <div><i className={"bi bi-chevron-right"}></i></div>
        </Button>
    );
};

export default MenuButton;