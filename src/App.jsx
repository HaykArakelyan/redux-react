
import { useDispatch, useSelector } from 'react-redux'
import { clear, update, toUpperCase } from './reducers/textValueReducer'
import { useState } from 'react'
import './index.css'

function App() {
  const dispatch = useDispatch()
  const textValue = useSelector((state) => state.textValue.textValue)
  const [test, setTest] = useState(textValue)


  // ONLY TO TEST OF THE STATE IS BEING UPDATED
  const checkTextValue = useSelector((state) => state.textValue.textValue)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
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

      <button onClick={() => dispatch(toUpperCase())}>
        UPPER CASE
      </button>

      {/* ONLY TO TEST OF THE STATE IS BEING UPDATED */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <span>
          ====================
        </span>
        {checkTextValue}
        <span>
          ====================
        </span>
      </div>
    </div>
  )
}

export default App
