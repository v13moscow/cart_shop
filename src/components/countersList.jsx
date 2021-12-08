import React,{useState} from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name:'Ненужная вещь'},
    {id: 1, value: 4, name:'Ложка'},
    {id: 2, value: 0, name:'Вилка'},
    {id: 3, value: 0, name:'Тарелка'},
    {id: 4, value: 0, name:'Набор минималиста'}
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelet = (id) => {
    const newCounter = counters.filter(count => count.id !== id)
    setCounters(newCounter)
  }
  const handleReset = () => {
    setCounters(initialState)
    console.log( 'handleReset');
  }
  const handleIncrement = (id) => { 
    let clickIncrement = counters.map(item => {
      if (item.id !== id) {
        return item  // здесь массив не измененных объектов
      }else{
        item.value = item.value +1
        return item  // здесь массив  измененного объекта
      }
    })
    setCounters(clickIncrement)
  }
  const handleDecrement = (id) => {
    let clickDecrement = counters.map(item => {
      if (item.id !== id) {
        return item  
      }else{
        item.value = item.value -1
        return item
      }
    })
    setCounters(clickDecrement)
  }
  return(
    <>
      {counters.map(counter =>
      <Counter 
        key={counter.id}
        {...counter}
        onDelete={handleDelet}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />)}
      <button 
        className="btn btn-primary btn-sm m-2" 
        onClick={handleReset}
      >Сброс</button>
    </>
  )
}
export default CountersList