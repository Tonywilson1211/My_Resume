import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react'


function Particle () {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
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
                        onClick: { enable: true, mode: "repulse" },
                        onHover: {
                            enable: true,
                            mode: "attract",
                        }
                    },
                    modes: {
                    attract: { distance: 150 }
                    }
                },
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 100
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "in",
                        random: false,
                        speed: 0.5,
                        straight: true
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                        },
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            sync: true
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                },
                retina_detect: true
            }}
        />
    );
}


export default Particle