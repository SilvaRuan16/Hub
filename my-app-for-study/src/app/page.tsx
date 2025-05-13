"use client"

import { useRouter, usePathname } from "next/navigation";
import AppBar from "./components/appbar";
import Button from "./components/button";
import Container from "./components/container";
import { style } from "./config/styleButtons/style";
import { useEffect, useState } from "react";
import AlertMessage from "./components/alertMessage";
import "./globals.css"

export default function Home() {

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
      <div className="text-black w-full h-full flex flex-col items-center p-3">
        {showMessage && (<AlertMessage />)}
        <div className="w-full max-w-[800px] h-[100px] bg-gradient-to-r from-blue-100 to-blue-200 mt-[10%] rounded-md flex justify-center items-center shadow-md">
          <div className="text-[40px] sm:text-[50px] font-bold text-[#1a202c] whitespace-nowrap overflow-hidden border-[#1a202c] w-fit">
            <span>Bem Vindo</span>
          </div>
        </div>
        <div className="bg-blue-50 w-full sm:w-[80%] md:w-[60%] h-auto mt-[50px] sm:mt-[100px] p-3 sm:p-6 shadow-md rounded-md text-base sm:text-lg md:text-xl text-justify">
          <p>Este espaço foi criado para reunir tudo o que representa minha trajetória profissional e criativa. Aqui, você encontrará um pouco sobre quem eu sou, meus valores, experiências e o que me inspira a continuar evoluindo. Além disso, este site serve como um hub central para explorar meus projetos, acompanhar minhas iniciativas e acessar meu currículo de forma clara e organizada.</p>
          <br />
          <p>Seja você um recrutador, parceiro, colaborador ou alguém curioso sobre o que faço, sinta-se à vontade para navegar, conhecer mais sobre meu trabalho e entrar em contato. Esta é a minha vitrine digital — simples, direta e feita com dedicação.</p>
        </div>
      </div>
    </Container>
  )
}