import React, { useState } from 'react'

export default function Home() {
  const [date, setDate] = useState(new Date())
  const [avaliacoes, setAvaliacoes] = useState([])
  const [disciplina, setDisciplina] = useState("")
  const [datahora, setDatahora] = useState("")
  const [descritivo, setDescritivo] = useState("")


  function HandleForm(event){
    event.preventDefault()
    setAvaliacoes((prevstate)=>({
      ...prevstate,
      [event.target.name]:event.target.value
    }))
    console.log(avaliacoes)
  }
  
  return (

      <div className='bg-red-200 flex-col px-4 py-4 flex items-center justify-center w-auto'>
        <div>
          <h1 className='text-3xl'>Calendário de Provas</h1>
        </div>
        <div className='mt-4 w-full h-200 border rounded'>
            <div className='flex items-stretch justify-between w-1/2 bg-blue-200'>           
              <form onSubmit={HandleForm} className='bg-green-200 w-full justify-center'>
                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Disciplina</label>
                  <input onChange={(e)=>setDisciplina(e.target.value)} type="text" id="disciplina" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Programação Web" required=""/>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data e Hora</label>
                  <input onChange={(e)=>setData(e.target.value)} type="datetime-local" id="datahora" className="bg-gray-50 borderf border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descritivo (Opcional)</label>
                  <textarea onChange={(e)=>setDescritivo(e.target.value)}type="text" id="descritivo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Conteúdo - Hibernate e CSS" required=""/>
                </div>
       
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agendar</button>
              </form>
              <div className='bg-red-200 w-1/2'>
                
              </div>
            </div>
         
          </div>
      </div>

  )
}
