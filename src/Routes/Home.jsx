/* eslint-disable react/prop-types */
import Card from '../Components/Card'
import { useCharStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {theme, chars} = useCharStates();

  return (
    <main className="home" >
      <h1>Home</h1>
      {chars.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </main>
  )
}

export default Home