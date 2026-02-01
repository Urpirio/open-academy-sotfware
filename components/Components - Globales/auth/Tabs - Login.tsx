import { TabsContent } from "@/components/ui/tabs";
import { Iconos } from "@/components/Components - Globales/UI/Iconos";
import InputLabel from "@/components/Components - Globales/UI/InputLabel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useLogin } from "../hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";

export default function TabsLogin() {
  const {
    inputlogin,
    setinputlogin,
    handle_post,
    loading_post,
  } = useLogin();
  return (
    <TabsContent
      value="Login"
      className="flex flex-col items-center justify-center gap-2"
    >
      <Card className="bg-white shadow-2xl backdrop-blur-xs border-teal-500/40 w-1/5 rounded-4xl px-5 py-10">
        <CardHeader className="flex flex-col items-center justify-center ">
          <div className="p-5 bg-teal-500/50  rounded-2xl">
            <Iconos.LightningBolt className="text-white" />
          </div>
          <h3 className="text-black font-black text-xl">Welcome back</h3>
          <p className="text-black text-center text-sm font-light">
            Enter your credentials to access your workspace
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <InputLabel
            disabled={loading_post}
            Value={inputlogin?.email}
            onChangeValue={(value) => {
              setinputlogin({ ...inputlogin, email: value });
            }}
            placeholder="example@email.com"
            label="Email addres"
          />
          <InputLabel
            disabled={loading_post}
            Value={inputlogin?.password}
            onChangeValue={(value) => {
              setinputlogin({ ...inputlogin, password: value });
            }}
            Type="password"
            placeholder="Enter your password"
            label="Password"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <div className=" flex  gap-2  text-xs items-center text-black">
              <Checkbox color="#219ebc" />
              Remember me
            </div>
            <TabsList>
              <TabsTrigger
                value="ForgetPassword"
                className="text-xs text-black hover:underline cursor-pointer"
              >
                Forgot Password?
              </TabsTrigger>
            </TabsList>
          </div>
          <Button
            disabled={loading_post}
            onClick={handle_post}
            className="w-full hover:bg-teal-800 bg-teal-800 font-bold rounded-2xl p-5"
          >
            {loading_post ? <Spinner /> : <span>Sign In</span>}
          </Button>
        </CardFooter>
      </Card>
      <div className="text-black/20 text-sm font-semibold">
        By <span>UrpirioDev</span>
      </div>
    </TabsContent>
  );
}
