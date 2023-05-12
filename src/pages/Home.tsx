import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Home() {
  // store에서 state를 가져오기
  let data = useSelector((state: RootState) => state)
  let pokemon = data.pokemon;
  let isDark = data.darkMode;
  console.log(data)

  return (
    <main className={isDark ? 'container dark' : 'container'}>
      <h1>Home</h1>
      <div className='item-list'>
        {pokemon.map(poke => (
          <div className="item" key={poke.id}>
            <h4>{poke.name}</h4>
            <img src={poke.imgUrl} alt={poke.name} />
          </div>
        ))
        }
      </div>
    </main>
  )
}