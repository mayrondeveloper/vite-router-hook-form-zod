import {
    Bell, BookmarkIcon, BookOpenIcon,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2, PencilIcon,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Input} from "@/components/ui/input"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import DefaultBlock from "@/components/blocks/default.tsx";

function Anotacoes() {
    return (
        <DefaultBlock>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl text-secondary">Inventário</h1>
            </div>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-secondary">
                        Você não possui livros
                    </h3>
                    <p className="text-sm text-primary-foreground">
                        Você pode adicionar clicando no botão abaixo
                    </p>
                    <Button variant={'link'} className="text-secondary mt-4">Adicionar livro</Button>
                </div>
            </div>
        </DefaultBlock>
    )
}

export default Anotacoes
