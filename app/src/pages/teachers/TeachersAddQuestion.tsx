import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import AddQuestionMultipleChoice from "@/components/add-question-multiple-choice"
import AddQuestionFillInTheBlack from "@/components/add-question-fill-in-the-blank"
import AddQuestionMatchingPairs from "@/components/add-question-matching-pairs"

export default function TeachersAddQuestion() {
  const [questionType, setQuestionType] = React.useState<string | null>(null)

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
        <Label>Informe o tipo de Questão</Label>
        <Select onValueChange={(value) => setQuestionType(value)}>
            <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Selecione o tipo de questão" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>Tipos de Questão</SelectLabel>
                <SelectItem value="multiple-choice">Múltipla Escolha</SelectItem>
                <SelectItem value="fill-in-the-blank">Preencha a Lacuna</SelectItem>
                <SelectItem value="matching-pairs">Pares Correspondentes</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
            {questionType === 'multiple-choice' ? (
                <AddQuestionMultipleChoice />
            )
            : questionType === 'fill-in-the-blank' ? (
                <AddQuestionFillInTheBlack />
            )
            : questionType === 'matching-pairs' ? (
                <AddQuestionMatchingPairs />
            ) : null}
    </div>
  )
}