import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className='h-screen'>
                <Canvas
                    camera={{
                        fov: 45,
                        near: 1,
                        far: 200,
                        position: [-3, 2, 5],
                    }}
                >
                    <ScrollControls
                        // damping={0.1}
                        pages={6}
                    >
                        <Component {...pageProps} />
                    </ScrollControls>
                    {/*<OrbitControls makeDefault />*/}
                </Canvas>
            </div>
        </>
    )
}
