import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUniverseImageOfTheDay } from '../api/services/NasaServices'

function App() {
  const [data, setData] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUniverseImageOfTheDay()
        console.log(response)
        setData(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* NASA Image Section */}
      {data && (
        <div className="nasa-section">
          <h2>{data.title} / {data.date}</h2>
          <img src={data.hdurl} alt={data.title} className="nasa-image" />
          <p>{data.explanation}</p>
        </div>
      )}
    </>
  )
}

export default App
