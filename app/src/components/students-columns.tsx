"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export type Students = {
  id: string
  avatar: string
  name: string
  email: string
  enrollmentDate: string
}

export const columns: ColumnDef<Students>[] = [
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.original.email}</span>,
  },
  {
    accessorKey: "enrollmentDate",
    header: "Data que Entrou",
    cell: ({ row }) => <span>{row.original.enrollmentDate}</span>,
  },
]