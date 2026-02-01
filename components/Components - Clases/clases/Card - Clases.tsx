"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { redirect } from "next/navigation";

export default function CardClases() {
  return (
    <Card className="group relative overflow-hidden shadow-lg p-0 hover:shadow-2xl transition-all duration-500  cursor-pointer">
      <div className="relative h-52 overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif"
          alt="Clase TIC"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute top-3 right-3">
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ✓ Presencial
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-xl leading-tight">
            Tecnología de la Información y Comunicación I
          </h3>
          <p className="text-gray-200 text-xs mt-1">Ciclo 2026-I</p>
        </div>
      </div>

      <CardContent className="px-4 space-y-2">
        <p className="text-gray-600 text-sm leading-relaxed">
          Domina las herramientas digitales esenciales y aprende a aplicar
          tecnologías de información en contextos profesionales.
        </p>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">
              Progreso del curso
            </span>
            <span className="text-sm font-bold text-blue-600">
              68% completado
            </span>
          </div>
          <Progress value={68} />
          <p className="text-xs text-gray-500">8 de 12 módulos completados</p>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0">
        <Button
          onClick={() => redirect("/clases/2")}
          className="cursor-pointer w-full bg-linear-to-r  from-blue-600 via-blue-700 to-purple-700 text-white py-5 px-6 rounded-md font-bold hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-none group-hover:scale-102 transform"
        >
          <span>Ir al Aula</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
