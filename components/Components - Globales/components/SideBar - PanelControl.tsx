"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { redirect, usePathname } from "next/navigation";
import AlertDialogCerrarSesion from "./AlertDialog - CerrarSesion";
import { Iconos } from "../UI/Iconos";
import { cn } from "@/lib/utils";
import ButtonSidebarMenuButton from "../UI/Button - SidebarMenuButton";

export default function SideBarPanelControl() {
  const pathname = usePathname();
  if (pathname == "/") return;

  return (
    <Sidebar className="bg-white border-r border-gray-200 shadow-sm">
      {/* Header */}
      <SidebarHeader className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-8 px-6 border-b border-blue-800">
        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">OA</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Open-Academy</h1>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="bg-white py-4">
        <SidebarMenu className="px-3 space-y-1">
          <ButtonSidebarMenuButton direction="/inicio" pathname={pathname}>
            <Iconos.Dashboard className="size-5" />
            <span>Inicio</span>
          </ButtonSidebarMenuButton>

          <ButtonSidebarMenuButton direction="/clases" pathname={pathname}>
            <Iconos.LibraryBig className="size-5 group-hover:scale-110 transition-transform" />
            <span>Mis Clases</span>
          </ButtonSidebarMenuButton>

          <ButtonSidebarMenuButton direction="/cursos" pathname={pathname}>
            <Iconos.Compass className="size-5 group-hover:scale-110 transition-transform" />
            <span>Cursos Disponibles</span>
          </ButtonSidebarMenuButton>

          {/* Separador */}
          <div className="my-3 mx-2 border-t border-gray-200"></div>

          <ButtonSidebarMenuButton direction="/configuracion" pathname={pathname}>
            <Iconos.Settings3Fill className="size-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>Configuración</span>
          </ButtonSidebarMenuButton>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="py-4 px-3 border-t border-gray-200 bg-gray-50/50">
        <AlertDialogCerrarSesion />
      </SidebarFooter>
    </Sidebar>
  );
}
