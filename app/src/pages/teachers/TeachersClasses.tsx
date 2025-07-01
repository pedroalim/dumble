import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function TeachersClasses() {
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState("");
  const [classAcronym, setClassAcronym] = useState("");
  const [classDescription, setClassDescription] = useState("");
  
  useEffect(() => {
    //setOpen(true);
  }, []);

  async function handleAddClass() {
    if (!className || !classAcronym || !classDescription) {
      toast.error("Por favor, informe todos os campos.");
      return;
    }

    setClassName("");
    setClassAcronym("");
    setClassDescription("");
    setOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold">Turmas do Professor</h1>

      <Button variant="outline" onClick={() => setOpen(true)} >
        <Plus className="mr-2 h-4 w-4" />
        Adicionar Turma

      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Turma</DialogTitle>
              <DialogDescription>
                Informe os dados para criar a nova turma.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="className">Nome</Label>
                <Input
                  id="className"
                  name="className"
                  placeholder="História do Brasil"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="classAcronym">Sigla</Label>
                <Input
                  id="classAcronym"
                  name="classAcronym"
                  placeholder="HIST"
                  value={classAcronym}
                  onChange={(e) => setClassAcronym(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="classDescription">Descrição</Label>
                <Textarea
                  id="classDescription"
                  name="classDescription"
                  placeholder="Aula sobre História do Brasil"
                  value={classDescription}
                  onChange={(e) => setClassDescription(e.target.value)}
                />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Fechar</Button>
              </DialogClose>
              <Button onClick={() => handleAddClass()}>Adicionar</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>
  );
}
