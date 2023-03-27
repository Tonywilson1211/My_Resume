import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react'


function Particle () {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        }
                    },
                    modes: {
                    repulse: { distance: 75 }
                    }
                },
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: false,
                            value_area: 100
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 10,
                        straight: false
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 0.1,
                            sync: true
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 1,
                            sync: true
                        }
                    },
                },
                retina_detect: true
            }}
        />
    );
}


export default Particle