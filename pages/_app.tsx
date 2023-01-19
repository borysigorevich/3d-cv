import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'

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
                    <Component {...pageProps} />

                    {/*<OrbitControls makeDefault />*/}
                </Canvas>
            </div>
        </>
    )
}
