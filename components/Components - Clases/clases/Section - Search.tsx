import { Iconos } from "@/components/Components - Globales/UI/Iconos";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SectionSearch() {
  return (
    <section>
      {/* <div className="flex items-center gap-2 py-5 px-5">
        <h1 className="text-4xl">Buscar Clases</h1>
        <p></p>
      </div> */}
      <div className="flex items-center gap-2 py-5 px-5">
        <InputGroup>
          <InputGroupAddon>
            <Iconos.Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="buscador" />
        </InputGroup>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Periodo</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent></DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">filtro</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent></DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
