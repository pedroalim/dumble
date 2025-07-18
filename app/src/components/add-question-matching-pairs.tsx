import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

export default function AddQuestionMatchingPairs() {
    const [title, setTitle] = useState("");
    const [pairs, setPairs] = useState([
        { left: "", right: "" },
        { left: "", right: "" },
        { left: "", right: "" },
        { left: "", right: "" },
    ]);

    const navigateTo = useNavigate();

    const handlePairChange = (index: number, side: 'left' | 'right', value: string) => {
        const newPairs = [...pairs];
        newPairs[index][side] = value;
        setPairs(newPairs);
    };

    const handleCreateAndStop = () => {
        console.log("Criar e Parar", { title, pairs });
        setPairs([
            { left: "", right: "" },
            { left: "", right: "" },
            { left: "", right: "" },
            { left: "", right: "" }
        ]);
        setTitle('');
        navigateTo('/teachers/ED-1234/')
    };

    const handleCreateAndContinue = () => {
        console.log("Criar e Continuar", { title, pairs });
        setPairs([
            { left: "", right: "" },
            { left: "", right: "" },
            { left: "", right: "" },
            { left: "", right: "" }
        ]);
        setTitle('');
    };

  return (
    <div className="mt-4">
        <Label className="mt-4 mb-2" >Titulo:</Label>
        <Input
            id="title"
            type={"text"} 
            placeholder="Informe o Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <div className="mt-4">
        <Label className="mt-4 mb-2" >Forme os pares (esquerda &lt;-&gt; direita)</Label>

            <div className="flex flex-col gap-4 mt-4">
                {pairs.map((pair, index) => (
                    <div key={index} className="flex gap-4">
                    <Input
                        type="text"
                        placeholder={`Par ${index + 1} - Esquerda`}
                        value={pair.left}
                        onChange={(e) => handlePairChange(index, 'left', e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder={`Par ${index + 1} - Direita`}
                        value={pair.right}
                        onChange={(e) => handlePairChange(index, 'right', e.target.value)}
                    />
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-4 flex justify-between">
            <Button onClick={() => handleCreateAndStop()} variant={"outline"}>Criar e Parar</Button>
            <Button onClick={() => handleCreateAndContinue()}>Criar e Continuar</Button>
        </div>
    </div>
  );
}