"use client"

import AlertMessage from "@/app/components/alertMessage";
import AppBar from "@/app/components/appbar"
import Button from "@/app/components/button"
import Container from "@/app/components/container"
import { style } from "@/app/config/styleButtons/style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../globals.css";

export default function Curriculo() {

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

      <div className="text-black w-full h-full flex flex-col p-3">
        {showMessage && (<AlertMessage />)}
        Curriculo
      </div>
    </Container>
  )
}