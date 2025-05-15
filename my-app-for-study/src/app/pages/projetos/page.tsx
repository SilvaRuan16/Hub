"use client"

import AlertMessage from "@/app/components/alertMessage";
import AppBar from "@/app/components/appbar"
import Button from "@/app/components/button"
import Container from "@/app/components/container"
import { style } from "@/app/config/styleButtons/style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Projetos() {

  const router = useRouter()
  const usePathName = usePathname()
  const [showMessage, setShowMessage] = useState(false)

  const handleNavigation = (target: string) => {
    if (usePathName === target) {
      setShowMessage(true)
    }
    router.push(target)
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showMessage])

  return (
    <Container>
      <AppBar
        title={"Ruan <developer/>"}
        buttonArea={{
          buttons: (
            <>
              <Button className={style} value={"Inicio"} onClick={() => handleNavigation("/")}></Button>
              <Button className={style} value={"Sobre Mim"} onClick={() => handleNavigation("/pages/sobreMim")}></Button>
              <Button className={style} value={"Projetos"} onClick={() => handleNavigation("/pages/projetos")}></Button>
              <Button className={style} value={"Curriculo"} onClick={() => handleNavigation("/pages/curriculo")}></Button>
            </>
          )
        }}
      />
      <div className="text-black w-full h-full sm:h-[90%] flex flex-col items-center pt-3">
        {showMessage && (<AlertMessage />)}
        <div className="h-[150px] w-full mb-3 p-3 text-justify text-xl">
          Aqui estão todos os meus projetos em desenvolvimento, incluindo pessoais, acadêmicos e ideias em estágio inicial. Alguns deles têm potencial para investimento e foco em crescimento.
          Abaixo, serão exibidos alguns cards com informações resumidas de cada projeto. Ao clicar em um card, você poderá visualizar detalhes adicionais, como descrição completa, funcionalidades e outras informações relevantes.
          Sempre que possível, será disponibilizado o link para o repositório no GitHub. Caso um projeto não possua um link, é provável que o repositório seja privado devido à intenção de investimento e ao foco em atrair clientes e usuários.
        </div>
        <div className="w-full h-full sm:h-[80%] bg-gray-200 rounded-md shadow-md flex flex-col sm:flex-row">
          <div className="bg-white sm:w-full p-3 m-3 rounded-md shadow-md max-h-[650px] overflow-y-auto">
            <div className="flex flex-wrap justify-center gap-5">
              {/* Card 1 */}
              <div className="w-[300px] h-[400px] bg-blue-100 rounded-md shadow-md p-4 flex flex-col justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold mb-2">Bíblia & Harpa - offline</h3>
                  <p className="text-sm text-gray-700">Aplicativo mobile para acessar livros sagrados da bíblia, também está sendo implementado como funcionalidade principal a harpa.</p>
                  <p className="pt-2">Status: Em desenvolvimento</p>
                  <p>Github: Privado</p>
                </div>
                <button className="p-3 border-2 rounded-md shadow-md border-gray-800">Detalhes</button>
              </div>
              <div className="w-[300px] h-[400px] bg-blue-100 rounded-md shadow-md p-4 flex flex-col justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold mb-2">Bíblia & Harpa - site</h3>
                  <p className="text-sm text-gray-700">Aplicação web para download do app Bíblia & Harpa - offline</p>
                  <p className="pt-2">Status: Finalizado</p>
                  <p>Github: <a className="text-black underline hover:text-blue-950" href="https://github.com/SilvaRuan16/host-bible-site">Acessar Repositório</a></p>
                  <p>Hospedagem: <a className="text-black underline hover:text-blue-950" href="https://host-bible-site.vercel.app/">Acessar Site</a></p>
                </div>
                <button className="p-3 border-2 rounded-md shadow-md border-gray-800">Detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}