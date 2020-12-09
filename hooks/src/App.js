import React, {useState, useEffect} from 'react'


function App() {
  const [tarefas, setTarefas] = useState([
    "N'oubliez pas de payer la facture d'électricité",
    "Étudier la physique"
  ])
  const [nome, setNome] = useState("John5")

  const [input, setInput] = useState('')

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas')
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

    //return () => {} //like comp will unmount functionality

  }, [])

  useEffect(()=>{
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
  }, [tarefas])

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div >
      <h3>Liste de choses à faire</h3>
      <h3>{nome}</h3>
      <ul>
        {tarefas.map(tarefa=>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Ajouter</button>
        
    </div>
  );
}

export default App;
