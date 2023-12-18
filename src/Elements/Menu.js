import React from "react";
import NavBar from "../Components/NavBar";
import Greetings from "../Components/MenuDropdawns/Greetings";
import {useParams} from "react-router-dom";
import SerNames from "../Components/MenuDropdawns/SerNames";

const Menu = () => {
    const params = useParams()
    return (
        <div>
            <NavBar />
            {Number(params.action) === 1 ? <Greetings /> :
                Number(params.action) === 4 && <SerNames />}

        </div>
    );
};

export default Menu;