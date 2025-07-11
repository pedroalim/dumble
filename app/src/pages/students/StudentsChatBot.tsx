import CurrentClass from "@/components/current-class";
import StudentsNavigation from "@/components/students-navigation";
import { useParams } from "react-router";

import * as React from "react"
import { ArrowUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";

export default function StudentsChatBot() {
  const { classCode } = useParams<{ classCode: string }>();

  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length


  return (
    <div>
      <CurrentClass acronym={`ED`} code={`${classCode}`} title={`Estrutura de Dados`} userType="student"/>
      <div className="flex items-center justify-center">
        <Card className="w-2xl mt-24 h-full">
          <CardHeader className="flex flex-row items-center">
            <div className="flex items-center gap-4">
              <Avatar className="border">
                <AvatarImage src="/avatars/01.png" alt="Image" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm leading-none font-medium">DumbleAI</p>
                <p className="text-muted-foreground text-xs">m@example.com</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (inputLength === 0) return
                setMessages([
                  ...messages,
                  {
                    role: "user",
                    content: input,
                  },
                ])
                setInput("")
              }}
              className="relative w-full"
            >
              <Input
                id="message"
                placeholder="Pergunte alguma coisa"
                className="flex-1 pr-10"
                autoComplete="off"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute top-1/2 right-2 size-6 -translate-y-1/2 rounded-full"
                disabled={inputLength === 0}
              >
                <ArrowUpIcon className="size-3.5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
      <StudentsNavigation activePage="chatBot" />
    </div>
  )
}
