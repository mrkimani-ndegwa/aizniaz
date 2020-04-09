import React from 'react';
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
            mixBlendMode: 'darken',
            boxSizing: "border-box",
            border: '15px solid white',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }


        return (
            <div style={style}>
                <Logo />
            </div>
        )
    }
}
