export default function Sobre() {
  const tecnologias = [
    'React', 'Next.js', 'Tailwind CSS', 'GitHub API', 'Components React'
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Sobre</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tecnologias Utilizadas / Modulos </h2>
        <div className="flex flex-wrap gap-3">
          {tecnologias.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Um pouco sobre Mim</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Me chamo Levi Vitor , tenho 19  anos. Estou cursando Sistemas para Internet na Universidade Catolica de Pernambuco, atualmente estou no 3°Periodo.
            Apesar do curso escolhido , sou um ex-militar do exercito brasileiro, o que está muito longe de TI 😂. Porém, muito novo sempre fui um aventureiro na area de TI, por isso a escolha do curso!
          </li>
          <br />
          <li>SEGUIDOR DE JESUS CRISTO, ELE VIVE !</li>
        </ul>
      </div>
    </div>
  )
}