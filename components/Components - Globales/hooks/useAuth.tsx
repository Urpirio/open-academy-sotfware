import { useState } from "react";

export const useAuth = () => {
  const [TabsValue, setTabsValue] = useState<string>("Login");
  return {
    TabsValue,
    setTabsValue,
  };
};
