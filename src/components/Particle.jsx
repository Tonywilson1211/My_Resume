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
                        onClick: { enable: true, mode: "attract" },
                        onHover: {
                            enable: true,
                            mode: "attract",
                        }
                    },
                    modes: {
                    attract: { distance: 500 }
                    }
                },
                particles: {
                    number: {
                        value: 25,
                        density: {
                            enable: true,
                            value_area: 500
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: true,
                        speed: 1,
                        straight: true
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0.1,
                            color: "##ffbb55"
                        },
                    },
                    opacity: {
                        value: 0.4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
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