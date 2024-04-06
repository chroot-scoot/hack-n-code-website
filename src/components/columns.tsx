'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //DropdownMenuLabel,
  //DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Letter = {
  date: string;
  name: string;
  status: 'read' | 'unread';
  email: string;
};

export const columns: ColumnDef<Letter>[] = [
  {
    accessorKey: 'name',
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => {
      const name: string = row.getValue('name');
      const formattedName = name.trim();

      return <div className="text-right font-medium">{formattedName}</div>;
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div className="text-right">
          {' '}
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const email: string = row.getValue('email');
      const formattedemail = email.trim();

      return <div className="text-right font-medium">{formattedemail}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const name: string = row.getValue('status');
      const formattedName = name.trim();

      return <div className="text-right font-medium">{formattedName}</div>;
    },
  },
  {
    accessorKey: 'date',
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => {
      const date: string = row.getValue('date');
      const dateObject = new Date(date);
      const formattedDate = dateObject.toLocaleDateString();

      return <div className="text-right font-medium">{formattedDate}</div>;
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Friend</DropdownMenuItem>
            <DropdownMenuItem>Delete Mail</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
