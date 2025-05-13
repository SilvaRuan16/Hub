"use client"

import AlertMessage from "@/app/components/alertMessage";
import AppBar from "@/app/components/appbar"
import Button from "@/app/components/button"
import Container from "@/app/components/container"
import { style } from "@/app/config/styleButtons/style";
import Image from "next/image";
import background from "../../images/foto.jpg";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SobreMim() {

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

      <div className="text-black w-full h-full p-3">
        {showMessage && (<AlertMessage />)}
        <div className="h-full flex flex-col sm:flex-row justify-center items-center">
          <Image src={background} alt="Background image" className="w-[300px] rounded-md shadow-md sm:w-[500px]" />
          <div className="p-5 text-xl text-center sm:text-start">
            <p className="p-2">Ruan Gustavo Soares da Silva</p>
            <p className="p-2">19 anos</p>
            <hr />
            <p className="p-2">Cursando Sistema de Informação pela Unisales</p>
            <p className="p-2">Cursando Inglês pela Wizard</p>
          </div>
        </div>
        <div className="h-[2100px] mt-[20px] sm:mt-0 sm:h-[900px] flex flex-col justify-center bg-blue-100 rounded-md shadow-md">
          <div className="flex flex-col justify-center items-center text-[30px] sm:text-[40px] p-1.5 transform translate-y-[-40px]">
            Sobre Mim
            <br />
            <hr className="text-gray-500 border-[1.75px] w-[15%]" />
          </div>
          <div className="flex flex-col items-center sm:flex-row justify-evenly mt-2">
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore facilis, dolore ullam sequi porro commodi sed veritatis distinctio cum! Dignissimos nesciunt, fuga odio hic facere dolore accusantium eaque possimus!</div>
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore facilis, dolore ullam sequi porro commodi sed veritatis distinctio cum! Dignissimos nesciunt, fuga odio hic facere dolore accusantium eaque possimus!</div>
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium inventore facilis, dolore ullam sequi porro commodi sed veritatis distinctio cum! Dignissimos nesciunt, fuga odio hic facere dolore accusantium eaque possimus!</div>
          </div>
        </div>
      </div>
    </Container>
  )
}