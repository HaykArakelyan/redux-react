
import { useDispatch, useSelector } from 'react-redux'
import { clear, update } from './reducers'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const textValue = useSelector((state) => state.textValue.textValue)
  const [test, setTest] = useState(textValue)


  // ONLY TO TEST OF THE STATE IS BEING UPDATED
  const checkTextValue = useSelector((state) => state.textValue.textValue)

  return (
    <div>
      <input
        type='text'
        value={test}
        onChange={(e) => setTest(e.target.value)}
      />
      <button onClick={() => dispatch(clear())}>
        CLEAR
      </button>

      <button onClick={() => dispatch(update(test))}>
        UPDATE
      </button>

      <br />
      ====================
      <br />
      {/* ONLY TO TEST OF THE STATE IS BEING UPDATED */}
      {checkTextValue}
      <br />
      ====================
    </div>
  )
}

export default App
