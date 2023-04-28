import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import "./App.css"
import Banner from './components/banner/banner'
import Form from "./components/form/form"
import Time from "./components/time/Time"
import Footer from "./components/footer/footer"
import { usersInitial, timesInitial} from './data/data'


function App() {
  const [users, setUsers] = useState<any>(usersInitial)
  const [times, setTimes] = useState<any>(timesInitial)

  function deleteUser(id: string){
    setUsers(users.filter((user: any) => user.id !== id))
  }

  function addUser(card: object) {
    //debugger
    setUsers([...users, card])
  }

  function setcollorPrimary(collor: string, nome:string) {
    console.log("setcollorPrimary", collor, nome)
    setTimes(times.map((time:any) => {
      if (time.nome == nome){
        time.corPrimaria = collor
      }
      return time
    }))
  }

  function setcollorSecundary(collor: string, nome:string) {
    console.log("setcollorSecundary", collor, nome)
    setTimes(times.map((time: any) => {
      if (time.nome == nome){
        time.corSecundaria = collor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Form
        fn={(card:object)=> addUser(card)}
        times={times.map((time: any)=> time.nome)}
      />
      {times.map((time:any )=>
        <Time
          key={time.nome}
          time={time.nome}
          avatar={users.filter((item: { time: string }) => item.time === time.nome )}
          collorPrimary={time.corPrimaria}
          collorSecondary={time.corSecundaria}
          deletar={deleteUser}
          setCorPrimary={setcollorPrimary}
          setCorSecondary={setcollorSecundary}
        />)
      }
      <Footer/>
    </div>
  )
}

export default App
