import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'

function App() {
  return (
    <div>
      <h1>LeanCraft</h1>
      <Canvas>
        <Sky />
      </Canvas>
    </div>
  )
}

export default App
