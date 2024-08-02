import AddTodo from "./components/AddTodo";
import Title from "./components/Title";

function App() {
  return (
    <center class='todo-container'>
      <Title />
      <AddTodo />
      
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            Breakfast
          </div>
          <div class="col-4">
            4/6/2002
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>

      </div>
    </center>
  );
}

export default App;
