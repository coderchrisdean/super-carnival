import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import './styles.css';
import Quiz from './components/Quiz'; // make sure the path is correct

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
