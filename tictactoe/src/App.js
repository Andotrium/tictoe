import { useState } from "react"
import "./App.css"


function Grid({ value = '', handleOnClick }) {
  const [hoverable, sethoverable] = useState(false);


  const properties = {
    height: '30%',
    width: '30%',
    display: 'flex',
    backgroundColor: hoverable ? 'rgba(219, 219, 214, 0.755)' : 'rgba(171, 171, 137, 0.755)',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  }

  return (
    <>
      <div className="grid" onClick={handleOnClick}
        onMouseEnter={() => sethoverable(true)} onMouseLeave={() => sethoverable(false)}
        style={properties}> <div className="mark"><h1>{value} </h1> </div>
      </div>
    </>
  )
}

function Playground({ updater, mark, grid }) {
  return (
    <>
      <div className="background">
        <div className="playground">
          {grid.map((item, index) => {
            return (
              <>
              <Grid value={item.value} handleOnClick={()=>updater(item)} />
              {/* <Winner gridstate={item.value} /> */}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

function Turn({ Player }) {
  return (
    <h1>It's your turn Player:{Player} </h1>
  );
}

function Winner({gridstate}){
  const combinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
  const winner = ""
  // return (
  //   <>
  //   {console.log(gridstate[0].value)}
  //   </>
  // )}
  for (let combination of combinations) {
    const [a, b, c] = combination;
    // combination.forEach(item => gridstate.find())
    if (gridstate[a-1].value && gridstate[a-1].value === gridstate[b-1].value && gridstate[a-1].value === gridstate[c-1].value) {
      const marking = gridstate[a-1].value
      return   (
        <>
        <h1>winner is:{marking}</h1>
        </>

       )
      }
    }
  }


  
  // for(let i=0;i<10;i++){
  //   if (gridstate.id(combinations[i][0]).value()==gridstate.id(combinations[i][1]).value() && gridstate.id(combinations[i][1]).value()==gridstate.id(combinations[i][2]).value()) {
  //     console.log('yes');
  //     break;
  //   }
  // }


export default function MyApp() {
  const [Player, setPlayer] = useState(0)

  const gridArr = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" }
  ]


  const [grid, setGrid] = useState(gridArr)

  const hanldeUpdate = (item) => {
  // console.log(item,'PREESSED ITEM IS')
    const currentGrid = JSON.parse(JSON.stringify(grid))
    const selectedIndex = currentGrid.findIndex(i=>i.id === item?.id)
    currentGrid.splice(selectedIndex,1,{...item,value:!(Player % 2) ? "X" : "O"})
    setGrid(currentGrid)
    setPlayer(Player + 1);
  }

  return (
    <>
      <Turn Player={!(Player % 2) ? "X" : "O"} />
      <Winner gridstate={grid} />
      <Playground updater={hanldeUpdate}
       mark={"X"}
        grid={grid}
      />
    </>
  )
}