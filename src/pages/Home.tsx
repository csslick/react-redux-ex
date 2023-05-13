import { useSelector, useDispatch } from 'react-redux'
import { RootState, addItem } from '../store'

export default function Home() {
  // store에서 state를 가져오기
  let data = useSelector((state: RootState) => state)
  let pokemon = data.pokemon;
  let isDark = data.darkMode;
  console.log(data)
  const dispatch = useDispatch();

  return (
    <main className={isDark ? 'container dark' : 'container'}>
      <h1>Home</h1>
      <form onSubmit={
        (e:any) => {
          e.preventDefault();
          let name:string = e.currentTarget.name.value;
          let type:[] = e.currentTarget.type.value.split(','); // 배열로 변환
          let id = new Date().getTime();
          // console.log(name, type);
          dispatch(addItem({ id, name, type, desc: '설명은 생략'}))
        }
      }>
        <div className='mb-3'>
          <input className="form-control" type="text" name='name' placeholder='이름' />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name='type' placeholder='타입(복수인 경우 ,로 구분)' />
        </div>
        <button 
          type="submit" 
          className='btn btn-primary mb-4'
        >추가</button>
      </form>
      <div className='item-list'>
        {pokemon.map(poke => (
          <div className="item" key={poke.id}>
            <div className="info">
              <h4>{poke.name}</h4>
              <div className="skills">
                {poke.type.map((type, i) => {
                  return (
                    <span key={i} className="skill-type btn btn-outline-secondary">{type}</span>
                  )
                })}
              </div>
            </div>
            <button className="btn btn-danger">삭제</button>
          </div>
        ))
        }
      </div>
    </main>
  )
}