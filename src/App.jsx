
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  return (
    <>

      <h3>React Core Concepts 2</h3>

      <Users />
      
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>

    </>
  )
}

export default App
