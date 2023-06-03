import './styling/App.scss'
import ActivityForm from './components/ActivityForm'
import TrackingGrid from './components/TrackingGrid'

function App() {

  return (
    <div className="App">
      <section className='menu'>
        <h1>TraGolf</h1>
        <ActivityForm />
      </section>
      <section className="tracking-grid">
        <TrackingGrid />
      </section>
    </div>
  )
}

export default App
