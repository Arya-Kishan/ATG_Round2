import { useState } from 'react'
import './App.css'
import List from './components/List'
import Detail from './components/Detail'

function App() {

  const [detail, setDetail] = useState(null)

  return (
    <div className='w-full h-dvh flex flex-col md:flex-row'>
      <List detail={detail} setDetail={setDetail} />
      <Detail detail={detail} />
    </div>
  )
}

export default App
