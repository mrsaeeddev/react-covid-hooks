import React,{useEffect} from 'react'
import { useAll } from 'react-covid-hooks'

const App = () => {
  const allStats = useAll();
  return (
    <div>
      react-covid-hooks
    </div>
  )
}
export default App