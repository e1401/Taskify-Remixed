

import './App.css';

let name: string
let age: number
let isCool: boolean
let hobbies: string[]
//tuple example
let role: [number, string]
//object example
type Person = {
  name: string,
  age?: number
}

let person: Person = {
  name: 'John',
  // age: 38
}

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {person.name}
    </div>
  );
}

export default App;
