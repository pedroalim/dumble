import { useState } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function QuestionMultipleChoice() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="flex flex-col max-h-screen w-2xl">
        <h2 className="font-extrabold p-4">Escolha a alternativa correta:</h2>

        <p className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries?</p>
        <div className="flex flex-col items-center w-full p-4">
          <RadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
            className="w-full flex flex-col gap-3"
          >
            <Label
              htmlFor="option-A"
              className={`border rounded-md p-4 w-full cursor-pointer hover:bg-zinc-900 flex items-center gap-4 ${
                selectedValue === "option-A" ? "border-violet-400" : ""
              }`}
            >
              <RadioGroupItem
                value="option-A"
                id="option-A"
                className="hidden"
              />
              <div className={`
                    border rounded-md w-10 h-10 flex items-center justify-center font-bold 
                    ${selectedValue === "option-A" ? "border-violet-400" : ""}
                  `}>
                A
              </div>
              <span className="flex-1 text-center font-bold">Option One</span>
              <div className="w-10 h-10 flex items-center justify-center font-bold" />
            </Label>

            <Label
              htmlFor="option-B"
              className={`border rounded-md p-4 w-full cursor-pointer hover:bg-zinc-900 flex items-center gap-4 ${
                selectedValue === "option-B" ? "border-violet-400" : ""
              }`}
            >
              <RadioGroupItem
                value="option-B"
                id="option-B"
                className="hidden"
              />
              <div className={`
                    border rounded-md w-10 h-10 flex items-center justify-center font-bold 
                    ${selectedValue === "option-B" ? "border-violet-400" : ""}
                  `}>
                B
              </div>
              <span className="flex-1 text-center font-bold">Option Two</span>
              <div className="w-10 h-10 flex items-center justify-center font-bold" />
            </Label>

            <Label
              htmlFor="option-C"
              className={`border rounded-md p-4 w-full cursor-pointer hover:bg-zinc-900 flex items-center gap-4 ${
                selectedValue === "option-C" ? "border-violet-400" : ""
              }`}
            >
              <RadioGroupItem
                value="option-C"
                id="option-C"
                className="hidden"
              />
              <div className={`
                    border rounded-md w-10 h-10 flex items-center justify-center font-bold 
                    ${selectedValue === "option-C" ? "border-violet-400" : ""}
                  `}>
                C
              </div>
              <span className="flex-1 text-center font-bold">Option Three</span>
              <div className="w-10 h-10 flex items-center justify-center font-bold" />
            </Label>

            <Label
              htmlFor="option-D"
              className={`border rounded-md p-4 w-full cursor-pointer hover:bg-zinc-900 flex items-center gap-4 ${
                selectedValue === "option-D" ? "border-violet-400" : ""
              }`}
            >
              <RadioGroupItem
                value="option-D"
                id="option-D"
                className="hidden"
              />
              <div className={`
                    border rounded-md w-10 h-10 flex items-center justify-center font-bold 
                    ${selectedValue === "option-D" ? "border-violet-400" : ""}
                  `}>
                D
              </div>
              <span className="flex-1 text-center font-bold">Option Four</span>
              <div className="w-10 h-10 flex items-center justify-center font-bold" />
            </Label>
          </RadioGroup>
        </div>
    </div>
  );
}
