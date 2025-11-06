import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Opa,tudo bem? Me chamo <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Levi</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Navegue pelo meu portfolio e conheça-me melhor!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projetos"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1"
              >
                Ver Projetos
              </Link>
              <Link
                href="/sobre"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              >
                Sobre Mim
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">

            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl transform -rotate-6 opacity-60"></div>

              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-2xl overflow-hidden">
                  <Image
                    src="/eu.jpg"
                    alt="Foto de perfil"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}