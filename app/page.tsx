"use client";
import TabsForgetPassword from "@/components/Components - Globales/auth/Tabs -  ForgetPassword";
import TabsLogin from "@/components/Components - Globales/auth/Tabs - Login";
import { useAuth } from "@/components/Components - Globales/hooks/useAuth";
import { Tabs } from "@/components/ui/tabs";

export default function Login() {
  const { TabsValue, setTabsValue } = useAuth();
  return (
    <Tabs
      value={TabsValue}
      onValueChange={(value) => {
        setTabsValue(value);
      }}
      className=" w-screen h-screen bg-gray-50"
    >
      <TabsLogin />
      <TabsForgetPassword />
    </Tabs>
  );
}
