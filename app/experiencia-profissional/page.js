export default function ExperienciaProfissional() {
  const experiencias = [
    {
      empresa: "Exécito Brasileiro - 7°Dsup",
      cargo: "Soldado-Recruta",
      periodo: "março (2024) - janeiro (2025)",
      descricao: "Atuei na área de Relações Públicas e Comunicação Social, com experiência em atendimento ao público interno e externo, controle das redes sociais e gestão da comunicação da unidade.",
      tecnologias: ["Relaçoes Públicas", "Fotografia", "Canva", "Disciplina", "Trabalho em Equipe", "Resiliência"]
    },

    {
      empresa: "NavigoConsultoria",
      cargo: "Estagiário de TI",
      periodo: "setembro-outubro",
      descricao: "Atuei como suporte técnico(N1), fazendo manuteçao preventiva e corretiva, além disso tive um breve treino de SAP.",
      tecnologias: ["Sap Business One", "Excel" , "Hadware" ,"Software", "Suporte N1"]
    },
    {
      empresa: "OtisElevadores ",
      cargo: "Aprendiz Administrativo",
      periodo: "ATUAL",
      descricao: "Atuo na área administrativa, realizando atividades de apoio em processos internos e organização de documentos.",
      tecnologias: ["Pacote Office", "Organização de Documentos", "Apoio Administrativo"]
    }
  ]
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Experiência Profissional</h1>
      
      <div className="space-y-8">
        {experiencias.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600">{exp.cargo}</h2>
                <h3 className="text-xl text-gray-700">{exp.empresa}</h3>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 border border-blue-200">
                {exp.periodo}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{exp.descricao}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tecnologias.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}