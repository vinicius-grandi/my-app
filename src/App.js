import './App.css'
import Event from './components/Event'
import Form from './components/Form'

function App() {

    return (
     <div className='App'>
       <h1>Testando Eventos</h1>
       <Event nome='Rato Moribundo'/>
       <Form/>
     </div>
     )
}

export default App;
