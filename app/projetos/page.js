'use client'

import { useState, useEffect } from 'react'

export default function Projetos() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/github-projects')
        if (!response.ok) {
          throw new Error('Falha ao carregar projetos')
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-blue-600 text-xl">Carregando projetos do GitHub...</div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl">Erro: {error}</div>
        <p className="text-gray-600 mt-4">Verifque o erro! Pode ser seu username.</p>
      </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Projetos Desenvolvidos</h1>
      
      {projects.length === 0 ? (
        <div className="text-center text-gray-600">
          Não há projetos.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pastel-green-200"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black-600 mb-2">
                  {project.name}
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description || 'Sem descrição disponível'}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  {project.language && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      {project.language}
                    </span>
                  )}
                  
                  <div className="flex space-x-3 text-sm text-gray-500">
                    <span>⭐ {project.stars}</span>
                  </div>
                </div>
                
                <a 
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition-colors font-medium"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}