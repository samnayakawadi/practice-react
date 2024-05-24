import Reducer from "./UseReducer"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import GlobalContextProvider from "./context/GlobalContextProvider"
import UseContext from "./UseContext"
import UseCallback from "./useCallback/UseCallback"
import UseMemo from "./useMemo/UseMemo"
import UseSelector from "./UseSelector"
import Routing from "./routing/Routing"

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

      <UseSelector />

      <Routing />
    </div>
  )
}

export default App