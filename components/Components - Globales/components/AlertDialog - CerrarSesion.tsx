import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogCerrarSesion() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-600 cursor-pointer">
        Cerrar sesion
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Ya te vas?</AlertDialogTitle>
          <AlertDialogDescription>
            Si cierras sesión ahora, tendrás que volver a introducir tus
            credenciales la próxima vez que quieras acceder. ¿Estás seguro de
            que deseas salir?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button>Cerrar sesion</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
