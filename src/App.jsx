import React from 'react';
import { Container } from 'semantic-ui-react'
const Bg = require("../public/assets/img/bg.jpg");


import Logo from "./components/Logo";

export default class App extends React.Component {
    render() {
        const style = {
            backgroundImage: `url(${Bg})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            position: 'absolute',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            border: '5px solid white',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }

        return (
            <Container style={style}>
                <Logo />
            </Container>
        )
    }
}
