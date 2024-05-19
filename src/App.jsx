import Reducer from "./UseReducer"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import GlobalContextProvider from "./context/GlobalContextProvider"
import UseContext from "./UseContext"
import UseCallback from "./useCallback/UseCallback"
import UseMemo from "./useMemo/UseMemo"

const App = () => {

  return (
    <div>
      <Reducer />
      <UseEffect />
      <UseRef />

      <GlobalContextProvider>
        <UseContext />
      </GlobalContextProvider>

      <UseCallback />
      <UseMemo />
    </div>
  )
}

export default App