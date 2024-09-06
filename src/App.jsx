import Todolist from "./components/todolist"


function App() {

  return (
    <div>
      <div className="flex justify-between bg-green-500  text-red-500 items-center">
        <h1 className="text-5xl">NAVBAR</h1>
        <div className="flex gap-3">
          <button className="btn btn-active">Home</button>
          <button className="btn btn-active">About</button>
          <button className="btn btn-active">Login</button>
        </div>
      </div>
      <Todolist />
    </div>


  )
}

export default App
