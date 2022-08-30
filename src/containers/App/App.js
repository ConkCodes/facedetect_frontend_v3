import React from 'react';
import './App.css';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import Particles from 'react-tsparticles';
import Header from '../../components/Header/Header.js';
import SignIn from '../SignIn/SignIn.js';
import SignUp from '../SignUp/SignUp.js';
import Home from '../Home/Home.js';
import Footer from '../../components/Footer/Footer.js';

const particleOptions = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            route: "home"
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        let content;
        if(this.state.route === "signIn") {
            content = <SignIn onRouteChange={this.onRouteChange}/>;
        } else if(this.state.route === "signUp") {
            content = <SignUp onRouteChange={this.onRouteChange}/>;
        } else if(this.state.route === "home") {
            content = <Home/>;
        }
        return(
            <div className="app">
                <ParticlesBackground />
                <Header 
                    route={this.state.route} 
                    onRouteChange={this.onRouteChange}
                />
                {content}
                <Footer/>
            </div>
        );
    }

}

export default App;
