import { Routes, Route } from 'react-router-dom'
import ComponentsView from '@/pages/ComponentsView'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </div>
      } />
      <Route path="/dev/components" element={<ComponentsView />} />
    </Routes>
  )
}

export default App
