import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { handleDarkMode } from '../store';

export default function Navbar() {
  // store에서 state를 가져오기
  let data = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  return (
    <nav className='navbar'>
      <ul>
        <li className='nav-item'><Link to='/'>Home</Link></li>
        <li className='nav-item'><Link to='about'>About</Link></li>
      </ul>
      <button 
        onClick={() => {
          dispatch(handleDarkMode())
        }}
        className='btn btn-dark'>Dark mode
      </button>
    </nav>
  )
}
