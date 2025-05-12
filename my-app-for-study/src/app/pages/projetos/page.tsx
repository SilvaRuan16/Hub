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

      <div className="text-black w-full h-full flex flex-col justify-center items-center p-3">
        {showMessage && (<AlertMessage/>)}
        <div className="text-black bg-gray-100 p-3 m-3 min-w-[70%] max-w-[70%] min-h-[70%] flex flex-wrap justify-evenly mx-auto my-auto shadow-sm rounded-lg gap-x-6">
          <div className="w-[300px] h-[200px] bg-gray-400 p-2 ml-2 rounded-lg shadow-sm flex flex-col"></div>
          <div className="w-[300px] h-[200px] bg-gray-400 p-2 ml-2 rounded-lg shadow-sm flex flex-col"></div>
          <div className="w-[300px] h-[200px] bg-gray-400 p-2 ml-2 rounded-lg shadow-sm flex flex-col"></div>
          <div className="w-[300px] h-[200px] bg-gray-400 p-2 ml-2 rounded-lg shadow-sm flex flex-col"></div>
          <div className="w-[300px] h-[200px] bg-gray-400 p-2 ml-2 rounded-lg shadow-sm flex flex-col"></div>
          
        </div>
      </div>

    </Container>
  )
}