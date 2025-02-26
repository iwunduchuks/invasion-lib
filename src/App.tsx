import { useEffect, useState } from 'react'
import './App.css'
import { Select } from '../lib/components'

const option = [
  {name: 'One', value: '1'},
  {name: 'Two', value: '2'},
  {name: 'Three', value: '3'},
  {name: 'Four', value: '4'},
  {name: 'Five', value: '5'},
  {name: 'Six', value: '6'},
  {name: 'Seven', value: '7'},
]

function App() {

  const [selected, setSelected] = useState<{
    name: string;
    value: string;
  }>({
    name: '',
    value: ''
  })

  useEffect(() => console.log('Hi',selected), [selected])

  return (
    <Select options={option} placeholder='Select' selected={setSelected}/>
  )
}

export default App
