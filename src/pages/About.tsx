import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function About() {
  // store에서 state를 가져오기
  let data = useSelector((state: RootState) => state)
  let pokemon = data.pokemon;
  let isDark = data.darkMode;
  console.log(data)

  return (
    <main className={isDark ? 'container dark' : 'container'}>
      <h1>About</h1>
    </main>
  )
}
