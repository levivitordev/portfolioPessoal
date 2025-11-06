export default function ExperienciaAcademica() {
  const formacoes = [
    {
      instituicao: "PortoDigital",
      curso: "Residência de Software Kick Off 2024.2",
      periodo: "Agosto - Dezembro (2024)",
      descricao: "Junto com meu Squad fizemos um prototipo no Figma. Entre 52 soluções inovadoras, ficamos entre as 10 melhores e fomos para o demoday, com um projeto focado em tecnologia que impulsiona a cultura, desenvolvido especialmente para o icônico Cinema São Luiz, aqui de Recife."
    },
    {
      instituicao: "NTTdata",
      curso: "Residência de Software RiseUp 2025.1",
      periodo: "março - junho (2025)",
      descricao: "Realizei um projeto em grupo de Análise de dados com Databricks, SQL e Python."
    },
    {
      instituicao: "Accenture",
      curso: "Residência de Software GrowUp 2025.2",
      periodo: "AINDA EM ANDAMENTO",
      descricao: "Atualmente estamos trabalhando com Agentes de IA. Estamos criando o agente com a tecnologia AutoGen."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Experiência Acadêmica</h1>
      
      <div className="space-y-6">
        {formacoes.map((formacao, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow border border-blue-100"
          >
            <h2 className="text-2xl font-semibold text-blue-600">{formacao.curso}</h2>
            <h3 className="text-xl text-gray-700 mb-2">{formacao.instituicao}</h3>
            <p className="text-blue-500 font-medium mb-3">{formacao.periodo}</p>
            <p className="text-gray-600">{formacao.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}