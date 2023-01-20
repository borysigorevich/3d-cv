import Head from 'next/head'
import { useRef } from 'react'

import {
    useGLTF,
    Environment,
    Float,
    ContactShadows,
    Html,
    Text,
    useScroll,
} from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'

export default function Home() {
    const rotation = useRef(-0.28)

    const macbook = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
    )

    const scrollData = useScroll()
    const { camera } = useThree()

    const cameraRotationY = camera.rotation.y
    const cameraRotationZ = camera.rotation.z

    useFrame(() => {
        console.log(scrollData)

        // if (scrollData.offset < 0.8221778221778222) {
            camera.position.x = scrollData.offset * 2.8 - 3
            camera.position.y = -scrollData.offset * 0.8 + 2
            camera.position.z = -scrollData.offset * 4 + 5

            camera.rotation.y = cameraRotationY + scrollData.offset * 0.45
            camera.rotation.z = cameraRotationZ + scrollData.offset * 0.22
        // }
    })

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <>
                <Environment preset='city' />
                <ambientLight intensity={0.7} />

                {/*<Center>*/}
                {/*<PresentationControls*/}
                {/*    global*/}
                {/*    rotation={[0.13, 0.1, 0]}*/}
                {/*    polar={[-0.4, 0.2]}*/}
                {/*    azimuth={[-1, 0.75]}*/}
                {/*    config={{*/}
                {/*        mass: 2,*/}
                {/*        tension: 200,*/}
                {/*    }}*/}
                {/*>*/}

                <Float
                    rotationIntensity={0.4}
                    // speed={2}
                >
                    <primitive object={macbook.scene} position-y={-1.2}>
                        <Html
                            transform
                            distanceFactor={1.17}
                            position={[-0.02, 1.58, -1.4]}
                            rotation-x={rotation.current}
                            wrapperClass='html'
                            // fullscreen
                        >
                            <iframe
                                className='w-[1024px] h-[670px] border-none rounded-[20px] bg-white'
                                src='https://cv-sepia-nu.vercel.app/'
                            />
                        </Html>
                    </primitive>
                    <Text
                        font='/bangers-v20-latin-regular.woff'
                        fontSize={1}
                        position={[2.7, 1.3, 0]}
                        rotation-y={-1.4}
                        maxWidth={2}
                        textAlign='center'
                    >
                        Boris Kutsenko
                    </Text>
                </Float>

                {/*</Center>*/}

                <ContactShadows
                    position-y={-1.4}
                    opacity={0.4}
                    scale={5}
                    blur={2.4}
                />

                <color args={['#27d3d7']} attach='background' />
            </>
        </>
    )
}
