import { useNavigate, Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { ModeToggle } from "@/components/mode-toggle";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff } from "lucide-react"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("option-student");
  const [showPassword, setShowPassword] = useState(false); 

  const navigateTo = useNavigate();

  async function handleLoginUser() {
    console.log(email, password, accountType);
    toast.success("Logado com sucesso!");

    if (accountType === "option-student") {
      navigateTo("/students/classes");
    } else if (accountType === "option-teacher") {
      navigateTo("/teachers/classes");
    }
  }

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <div className="w-full">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <p className="mb-6">Por favor entre com seu email e senha.</p>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword((prev) => !prev)} 
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>

          <div>
            <p className="text-md text-gray-600">Logar Como ?</p>
            <RadioGroup
              value={accountType}
              onValueChange={setAccountType}
              className="mt-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-student" id="option-student" />
                <Label htmlFor="option-student">Aluno</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-teacher" id="option-teacher" />
                <Label htmlFor="option-teacher">Professor</Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full" onClick={handleLoginUser}>
            Login
          </Button>

          <p className="text-center text-sm mt-4">
            Não possui uma conta?{" "}
            <Link to="/createUser" className="text-blue-500 hover:underline">
              Clique aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

