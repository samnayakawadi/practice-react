import Reducer from "./UseReducer"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import GlobalContextProvider from "./context/GlobalContextProvider"
import UseContext from "./UseContext"

const App = () => {

  return (
    <div>
      <Reducer />
      <UseEffect />
      <UseRef />

      <GlobalContextProvider>
        <UseContext />
      </GlobalContextProvider>

    </div>
  )
}

export default App