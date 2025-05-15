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

      <div className="text-black w-full h-full flex flex-col justify-center items-center pt-3">
        {showMessage && (<AlertMessage />)}
        <div className="w-full h-full bg-gray-200 rounded-md shadow-md flex flex-col sm:flex-row">
          {/* Sidebar */}
          <div className="bg-white sm:w-[20%] p-3 m-3 rounded-md shadow-md flex flex-col">
            <div className="p-3 m-3 rounded-md flex flex-col">
              <Button className={"bg-green-500 m-1 p-3 rounded-md shadow-md text-white"} value={"Adicionar"} onClick={() => { }}></Button>
              <Button className={"bg-yellow-500 m-1 p-3 rounded-md shadow-md text-white"} value={"Atualizar"} onClick={() => { }}></Button>
              <Button className={"bg-red-500 m-1 p-3 rounded-md shadow-md text-white"} value={"Excluir"} onClick={() => { }}></Button>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-center text-lg sm:text-xl">Status</p>
              <ul className="p-3 mt-1">
                <li className="p-3 flex flex-row justify-between text-sm sm:text-base">Finalizado <div className="w-2.5 h-2.5 rounded-md bg-green-500"></div></li>
                <li className="p-3 flex flex-row justify-between text-sm sm:text-base">Em andamento <div className="w-2.5 h-2.5 rounded-md bg-yellow-500"></div></li>
                <li className="p-3 flex flex-row justify-between text-sm sm:text-base">Em planejamento <div className="w-2.5 h-2.5 rounded-md bg-blue-500"></div></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white sm:w-full p-3 m-3 rounded-md shadow-md">
            {/* Conteúdo principal pode ser adicionado aqui */}
          </div>
        </div>
      </div>

    </Container>
  )
}