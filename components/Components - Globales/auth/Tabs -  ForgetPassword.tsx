import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Iconos } from "../UI/Iconos";
import { useForgetPassword } from "../hooks/useForgetPassword";
import InputLabel from "../UI/InputLabel";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function TabsForgetPassword() {
  const { inputforgetpassword, setinputforgetpassword } = useForgetPassword();
  return (
    <TabsContent
      value="ForgetPassword"
      className="flex flex-col items-center justify-center gap-2"
    >
      <Card className="bg-white shadow-2xl backdrop-blur-xs border-teal-500/40 w-1/5 rounded-4xl px-5 py-10">
        <CardHeader className="flex flex-col items-center justify-center ">
          <div className="p-5 bg-teal-500/50  rounded-2xl">
            <Iconos.LockReset className="text-white text-3xl" />
          </div>
          <h3  className="text-black font-black text-xl">Recover Password </h3>
          <p className="text-black text-center text-sm font-light">
            Enter your email address and{" we'll"} send you instructions to
            reset your account.
          </p>
        </CardHeader>
        <CardContent>
          <InputLabel
            Value={inputforgetpassword?.email}
            onChangeValue={(value) => {
              setinputforgetpassword({ ...inputforgetpassword, email: value });
            }}
            placeholder="example@email.com"
            label="Email addres"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full bg-teal-800 font-bold rounded-2xl p-5">
            Send instructions
          </Button>
          <TabsList>
            <TabsTrigger
              value="Login"
              className="text-sm text-black hover:text-black hover:underline cursor-pointer flex items-center gap-2 hover:bg-gray-500/20 px-2 py-2 rounded-md transition-all duration-300"
            >
              <Iconos.ArrowBack />
              Back
            </TabsTrigger>
          </TabsList>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
