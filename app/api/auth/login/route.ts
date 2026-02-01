import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const cookieStorage = await cookies();
  const body = await req.json();
  try {
    const respuesta = await fetch(
      "https://backend-open-academy-production.up.railway.app/api/auth/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      },
    );
    const data: { access_token: string } = await respuesta.json();
    if (respuesta.status >= 200 && respuesta.status < 300) {
      cookieStorage.set("TOKEN", data.access_token);
      return new Response(
        JSON.stringify({
          status: respuesta.status,
          token: data.access_token,
        }),
      );
    } else {
      return new Response(
        JSON.stringify({
          status: respuesta.status,
        }),
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({
        status: 500,
      }),
    );
  }
};
