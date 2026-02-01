import { SidebarMenuButton } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { Iconos } from "../UI/Iconos";
import { cn } from "@/lib/utils";

interface TypeButtonSidebarMenuButtonProps {
  pathname: string;
  children?: React.ReactNode;
  direction: string;
}

export default function ButtonSidebarMenuButton({
  pathname,
  children,
  direction
}: TypeButtonSidebarMenuButtonProps) {
  return (
    <SidebarMenuButton
      onClick={() => redirect(direction)}
      className={cn(
        "py-3 px-4 rounded-lg cursor-pointer  flex items-center gap-3 font-semibold transition-all duration-200",
        pathname?.includes(direction)
          ? "bg-teal-50 text-blue-700 border-l-4 border-blue-600 hover:bg-teal-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-600"
          : "hover:bg-gray-100 hover:text-gray-900 hover:border-l-4 hover:border-gray-400 text-gray-700",
      )}
    >
      {children}
    </SidebarMenuButton>
  );
}
