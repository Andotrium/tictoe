import { useState } from "react"
import "./App.css"

var a=0;
function Playground(){
  return(
    <>
    <div className="background">
    <div className="playground">
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
    </div>
    </div>
    </>
  )
}

function Grid(){
  const[hoverable,sethoverable]=useState(false);
  const properties={
    height: '30%',
    width: '30%',
    backgroundColor: hoverable ? 'rgba(219, 219, 214, 0.755)':'rgba(171, 171, 137, 0.755)',
    borderRadius: '15px'}
  return(
    <>
    <div className="grid" onClick={()=>{
      a++;
      console.log(a);
      
    }}
     onMouseEnter={()=>sethoverable(true)} onMouseLeave={()=>sethoverable(false)}
    style={properties}>
    </div>
    </>
  )
}
// function Turn(props){
//   const {text} = props
//   return(
//     <div>   
//     {console.log(1)}
//     {text}
//     </div>
//   )
// }

export default function MyApp(){

  return(
    <>
    <h1>It's your turn Player:{a%2==0?1:2}</h1>
    <Playground />
    </>
  )
}