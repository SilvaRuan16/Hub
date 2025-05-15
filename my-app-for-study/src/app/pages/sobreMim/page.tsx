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
        <div className="h-[400px] mt-2.5">
          <h1 className="text-center text-3xl p-10 sm:text-[40px]">Contatos</h1>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5527988045322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-100 hover:bg-green-200 rounded-md shadow-md p-4 w-[280px] transition"
            >
              <span className="font-bold">WhatsApp:</span>
              <span className="truncate">+55 (27) 98804-5322</span>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/ruan_.silva_.16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-pink-100 hover:bg-pink-200 rounded-md shadow-md p-4 w-[260px] transition"
            >
              <span className="font-bold">Instagram:</span>
              <span className="truncate">@ruan_.silva_.16</span>
            </a>
            {/* Discord */}
            <div className="flex items-center gap-3 bg-indigo-100 rounded-md shadow-md p-4 w-[170px]">
              <span className="font-bold">Discord:</span>
              <span className="truncate">ruan._.9</span>
            </div>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ruangsoares16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 rounded-md shadow-md p-4 w-[230px] transition"
            >
              <span className="font-bold">LinkedIn:</span>
              <span className="truncate">ruangsoares16</span>
            </a>
            {/* E-mail */}
            <a
              href="ruan.gustavo.soares16@gmail.com"
              className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md p-4 w-[350px] transition"
            >
              <span className="font-bold">Email:</span>
              <span className="truncate">ruan.gustavo.soares16@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="h-[2100px] mt-[20px] sm:mt-0 sm:h-[900px] flex flex-col justify-center bg-blue-100 rounded-md shadow-md">
          <div className="flex flex-col justify-center items-center text-3xl sm:text-[40px] p-1.5 transform translate-y-[-40px]">
            Sobre Mim
            <br />
            <hr className="text-gray-500 border-[1.75px] w-[15%]" />
          </div>
          <div className="flex flex-col items-center sm:flex-row justify-evenly mt-2">
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">
              <h1 className="text-2xl text-center p-3">Resumo</h1>
              Tenho estudado há 3 anos na área de tecnologia, buscando me especializar e encontrar novas formas de contribuir a cada dia.<br /><br />
              Sou formado no curso de TADS pelo Senai, onde pude resolver problemas e desafios propostos em sala de aula, sempre com foco no desenvolvimento acadêmico e prático.<br /><br />
              Atualmente, estou cursando Sistemas de Informação pela Unisales, estando no 3º período, e sigo ampliando meus conhecimentos e experiências.<br /><br />
              Busco contribuir em trabalhos em grupo, sou proativo e pontual, sempre tomando a iniciativa e me preparando para a resolução de problemas e desafios futuros.<br /><br />
              Além disso, estou cursando Inglês pela Wizard, visando meu desenvolvimento pessoal e profissional.
            </div>
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">
              <h1 className="text-2xl text-center p-3">Contribuições</h1>
              Atualmente, estou desenvolvendo aplicações nas quais acredito ter grande potencial futuro. Esses projetos, sejam simples ou complexos, contribuem significativamente para o meu desenvolvimento pessoal e profissional. Estou sempre em busca de melhorias e novos aprendizados nessa jornada.
            </div>
            <div className="p-3 w-[90%] sm:w-[500px] h-[600px] bg-white rounded-md shadow-md text-justify mt-10 sm:mt-0">
              <h1 className="text-2xl text-center p-3">Planos Futuros</h1>
              Meus planos para o futuro profissional incluem aplicar meus conhecimentos no ambiente de trabalho e, futuramente, empreender na área de tecnologia, comercializando sites e aplicativos desenvolvidos durante minha trajetória.
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}