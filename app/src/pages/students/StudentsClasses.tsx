import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function StudentsClasses() {
  const [open, setOpen] = useState(false);
  const [classId, setClassId] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    //setOpen(true);
  }, []);

  async function handleJoinClass() {
    if (!classId) {
      toast.error("Por favor, informe o código da turma.");
      return;
    }

    console.log("opa");
    setClassId("")
    setOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold">Home Students</h1>
      <Button variant="outline" onClick={() => setOpen(true)} >
        <Plus className="mr-2 h-4 w-4" />
        Entrar em Turma

      </Button>
      <p className="text-gray-500">Peça ao seu professor, o código da turma. </p>
      <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Entrar em uma Turma</DialogTitle>
              <DialogDescription>
                Informe o código da turma que você deseja entrar.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="classId">Código</Label>
                <Input
                  id="classId"
                  name="classId"
                  placeholder="HIST-1234"
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Fechar</Button>
              </DialogClose>
              <Button onClick={() => handleJoinClass()}>Entrar</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
      <div>
        <div className="mt-4">
          <p className="text-gray-500">Clique na turma para acessar</p>
          <p onClick={() => navigateTo('/students/')}>Turma XXXX</p>
        </div>
      </div>
    </div>
  );
}
