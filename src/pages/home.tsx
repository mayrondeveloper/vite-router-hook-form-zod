import brain from '../assets/brain.png'
import {Button} from "@/components/ui/button.tsx";

function Home() {
    return (
        <div className={'bg-primary h-screen gap-1 flex flex-col justify-center items-center align-center'}>
            <div>
                <a href="https://grancursosonline.com.br" target="_blank">
                    <img src={brain} className="logo" width={160} alt="Gran logo"/>
                </a>
            </div>
            <h1 className="scroll-m-20 text-2xl text-primary-foreground font-extrabold tracking-tight lg:text-4xl">
                BiblioTech
            </h1>
            <div className={'mt-4 flex gap-5'}>
                <Button variant={'default'}>Cadastre-se</Button>
                <Button variant={'secondary'}>Entrar</Button>
            </div>
        </div>
    )
}

export default Home
