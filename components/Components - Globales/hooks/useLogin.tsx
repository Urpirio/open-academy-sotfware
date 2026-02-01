import { useState } from "react";
import { useFetch } from "./useFetch";
import { toast } from "sonner";
import { redirect } from "next/navigation";

interface TypeinputLogin {
  email?: string;
  password?: string;
}

export const useLogin = () => {
  const [inputlogin, setinputlogin] = useState<TypeinputLogin>();
  const [loading_post, setloading_post] = useState<boolean>(false);
  const { Fetch } = useFetch();
  const handle_post = async () => {
    setloading_post(true);
    try {
      const respuesta = await Fetch({
        fetchProps: {
          method: "POST",
          body: JSON.stringify(inputlogin),
        },
        path: "/auth/login",
      });
      const data = await respuesta.json();
      if (respuesta.status >= 200 && respuesta.status < 300) {
        setloading_post(false);
        toast("Has iniciado sesion correctamente.", {
          style: {
            background: "#00000080",
            
            border: "1px solid #00000080",
            color: "white",
          },
          className: "bg-black ",
        });
        redirect('/panel-control')
      } else {
        setloading_post(false);
        console.log(data);
      }
    } catch (err) {
      setloading_post(false);
      console.log(err);
    }
  };
  return {
    inputlogin,
    setinputlogin,
    handle_post,
    loading_post,
    setloading_post,
  };
};
