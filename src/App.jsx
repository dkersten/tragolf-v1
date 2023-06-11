import './styling/App.scss'
import ActivityForm from './components/ActivityForm'
import TrackingGrid from './components/TrackingGrid'
import ModalButton from './components/ActivityModalForm'

function App() {

  return (
    <div className="App">
      <section className='menu'>
        <h1>TraGolf</h1>
        {/* <ActivityForm /> */}
        <ModalButton />
      </section>
      <section className="tracking-grid">
        <TrackingGrid />
      </section>
    </div>
  )
}

export default App
