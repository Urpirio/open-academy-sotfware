import { Iconos } from "@/components/Components - Globales/UI/Iconos";
import { Button } from "@/components/ui/button";

export default function SectionHeroClase() {
  return (
    <section>
      <div className="flex gap-4 items-end relative bg-black">
        <img
          className="w-full h-50 object-cover mask-b-from-5"
          src="https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif"
          alt=""
        />
        <div className="absolute text-white p-5 h-full w-full flex flex-col justify-end gap-4">
          <div className=" grow cursor-pointer">
            <Button variant="ghost">
              <Iconos.ArrowBack />
              Volver
            </Button>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              VIRTUAL-DESARROLLO SOSTENIBLE Y GESTIÓN DE
              RIESGOS-VIERNES-NOCTURNO
            </h3>
            <p className="text-white font-black">202601-18489</p>
          </div>
        </div>
      </div>
    </section>
  );
}
