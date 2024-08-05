import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import DefaultBlock from "@/components/blocks/default.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";

function Livros() {
    const [data, setData] = useState([])
    const [livros, setLivros] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(0);

    useEffect(() => {
        if (!currentPage) return;
        const fetchData = async () => {
            await fetch(`${import.meta.env.VITE_BASE_URL_BIBLIONIST}/books?page=${currentPage}&limit=10`)
                .then((res) => res.json())
                .then(data => setLivros(data.books));
        };
        fetchData().catch(console.error);
    }, [currentPage]);

    useEffect(() => {
        setLivros(data?.books)
        setCurrentPage(data?.currentPage)
        setTotalPages(data?.totalPages)
        setTotalItems(data?.totalItems)
        setItemsPerPage(data?.itemsPerPage)
    }, [data])

    return (
        <DefaultBlock>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl text-secondary">Inventário</h1>
            </div>

            <ScrollArea
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm overflow-hidden"
                x-chunk="dashboard-02-chunk-1"
            >
                        {livros?.books?.length > 0 ? (
                                livros.books.map((livro) => (
                                    <figure key={livro?.livro_id} className="shrink-0">
                                        <div className="overflow-hidden rounded-md">
                                            <img
                                                src={livro?.imagem}
                                                alt={`Photo by ${livro?.autor}`}
                                                className="aspect-[3/4] h-fit w-fit object-cover"
                                                width={50}
                                                height={100}
                                            />
                                        </div>
                                    </figure>
                                ))
                            ) :
                            (
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h3 className="text-2xl font-bold tracking-tight text-secondary">
                                        Você não possui livros
                                    </h3>
                                    <p className="text-sm text-primary-foreground">
                                        Você pode adicionar clicando no botão abaixo
                                    </p>
                                    <Button variant={'link'} className="text-secondary mt-4">Adicionar
                                        livro</Button>
                                </div>
                            )}
            </ScrollArea>
        </DefaultBlock>
    )
}

export default Livros
