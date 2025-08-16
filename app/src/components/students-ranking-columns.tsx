"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export type StudentsRank = {
  id: string
  placing: number
  avatar: string
  name: string
  rank: "bronze" | "silver" | "gold" | "diamond"
  score: number
}

export const columns: ColumnDef<StudentsRank>[] = [
  {
    accessorKey: "placing",
    header: "Colocação",
  },
  {
    accessorKey: "student",
    header: "Estudante",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={row.original.avatar} />
          <AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span>{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "score",
    header: "Pontuação",
  },
]