import SideBarPanelControl from "@/components/Components - Globales/components/SideBar - PanelControl";
import "../style/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Components - Globales/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SidebarProvider>
          <SideBarPanelControl />
          <main className="w-full">
           
            {children}
          </main>
        </SidebarProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
