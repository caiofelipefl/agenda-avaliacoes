import React, { useEffect, useState } from 'react'
import { prisma, PrismaClient } from '@prisma/client'
import Router from 'next/router'

export default function Home({ avaliacoes }) {

  const [exames, setAvaliacoes] = useState(avaliacoes)
  const [disciplina, setDisciplina] = useState("")
  const [datahora, setDatahora] = useState("")
  const [descritivo, setDescritivo] = useState("")
  const [alterarButton, setAlterarButton] = useState(false)
  const [idAvaliacao, setIdAvaliacao] = useState('')

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { disciplina, datahora, descritivo };
      await fetch('/api/criar-avaliacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setDisciplina('')
      setDatahora('')
      setDescritivo('')
      await Router.push('/')
    } catch (error) {
      console.error(error);
    }
  };

  const setFormToUpdate = ({ id, disciplina, datahora, descritivo }) => {
    setAlterarButton(true)
    setDisciplina(disciplina)
    setDatahora(datahora)
    setDescritivo(descritivo)
    setIdAvaliacao(id)
    console.log(idAvaliacao)
  }

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const body = { disciplina, datahora, descritivo };
      await fetch(`/api/${idAvaliacao}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setDisciplina('')
      setDatahora('')
      setDescritivo('')
      setIdAvaliacao(0)
      setAlterarButton(false)
      await Router.push('/')
    } catch (error) {
      console.error(error);
    }
  }

  
  useEffect(()=>{
  }, [])
  return (
      
      <div className='flex-col ml-48 px-4 py-4 flex items-center justify-center w-9/12'>
        <div>
          <h1 className='dark: text-green-900 text-3xl font-bold'>Calendário de Provas</h1>
        </div>
        <div className='mt-4 w-full h-200 border border-emerald-500 rounded-2xl py-6 px-6'>
            <div className='flex items-stretch justify-between w-1/2'>           
              <form onSubmit={submitData} className='w-full justify-center'>
                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Disciplina</label>
                  <input value={disciplina} onChange={(e)=>setDisciplina(e.target.value)} type="text" id="disciplina" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-green-400 dark:placeholder-gray-400 dark:text-green-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Programação Web" required=""/>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Data e Hora</label>
                  <input value={datahora} onChange={(e)=>setDatahora(e.target.value)} type="text" id="datahora" className="bg-gray-50 borderf border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400 dark:placeholder-gray-400 dark:text-green-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Descritivo (Opcional)</label>
                  <textarea value={descritivo} onChange={(e)=>setDescritivo(e.target.value)}type="text" id="descritivo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-green-400 dark:placeholder-gray-400 dark:text-green-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Conteúdo - Hibernate e CSS" required=""/>
                </div>
       
                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-40 px-9 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agendar</button>
                { !!alterarButton ? <button onClick={updateData} type="button" className="mt-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-40 px-9 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Alterar Agendamento</button> : '' }
              </form>
              <div className='w-1/2'>
              <table className="w-full ml-14 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-green-700">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Disciplina
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Data e Hora 
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Descritivo
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                {avaliacoes.map(avaliacao => 
                    <tr key={avaliacao.id} className="bg-white border-b dark:bg-green-100 dark:border-black">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-800  whitespace-nowrap dark:text-gray-800 ">
                        { avaliacao.disciplina }
                      </th>
                      <td className="py-4 px-6 text-gray-800">
                        { avaliacao.datahora }
                      </td>
                      <td className="py-4 px-6 text-gray-800">
                        { avaliacao.descritivo }
                      </td>
                      <td className="py-3 px-6 text-gray-800">
                        <button onClick={() => setFormToUpdate({ id: avaliacao.id, disciplina: avaliacao.disciplina, datahora: avaliacao.datahora, descritivo: avaliacao.descritivo })}>Alterar</button>
                      </td>
                    </tr>
                  )}
                </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>

  )
}

export const getServerSideProps = async () => {
  const prismaCliente = new PrismaClient()
  const avaliacoes = await prismaCliente.agenda.findMany()

  console.log(avaliacoes)
  return {
    props: {
      avaliacoes
    }
  }
}



