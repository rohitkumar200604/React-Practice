import {Button} from "./Button"
import Statement from "./Statement";

export function HelloWorld(){
  return <h1>Hello World</h1>
}

function Main(){
  return <div className="root">
    <HelloWorld></HelloWorld>
    <Button></Button>
    <Statement></Statement>
  </div>
}

export default Main;