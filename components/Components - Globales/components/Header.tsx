"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  const pathname = usePathname();
  if (pathname == "/") return;
  return (
    <header className="border-b py-2 px-5 flex items-center justify-between sticky top-0 bg-white z-10 shadow-sm">
      <div className="grow">
        {/* <InputGroup className="">
          <InputGroupInput placeholder="Buscador" className="" />
          <InputGroupAddon>
            <Iconos.Search />
          </InputGroupAddon>
        </InputGroup> */}
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-end gap-3 grow">
        <div className="text-right hidden sm:block">
          <h4 className="text-sm font-semibold text-gray-900">
            Urpirio Junior
          </h4>
          <p className="text-xs text-gray-500">Rol</p>
        </div>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          UP
        </div>
      </div>
    </header>
  );
}
