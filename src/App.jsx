import './styling/App.scss'
import TrackingGrid from './components/TrackingGrid'
import ModalButton from './components/ActivityModalForm'
import StatsOverview from './components/StatsOverview'

const App = () => {

  return (
    <div className="App">
      <section className='menu'>
        <h1>TraGolf</h1>
        <ModalButton />
      </section>
      <section className="tracking-grid">
        <TrackingGrid />
      </section>
      <section className="stats-overview">
        <StatsOverview />
      </section>
    </div>
  )
}

export default App
