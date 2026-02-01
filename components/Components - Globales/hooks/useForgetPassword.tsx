import { useState } from "react";

interface TypeinputForgetPassword {
  email?: string;
}
export const useForgetPassword = () => {
  const [inputforgetpassword, setinputforgetpassword] =
    useState<TypeinputForgetPassword>();

  const handle_post = () => {};

  return {
    handle_post,
    inputforgetpassword,
    setinputforgetpassword,
  };
};
