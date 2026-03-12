"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { getDoctors } from "@/services/doctor.services";
import { useQuery } from "@tanstack/react-query";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { IDoctor, DoctorsResponse } from "@/types/doctor.types";

const DoctorsTable = () => {
  const { data: doctorDataResponse, isLoading } = useQuery<DoctorsResponse>({
    queryKey: ["doctor"],
    queryFn: getDoctors,
  });

  const doctors: IDoctor[] = doctorDataResponse?.data ?? [];

  const doctorColumns: ColumnDef<IDoctor>[] = [
    {
      accessorKey: "name",
      header: "Doctor",
      cell: ({ row }) => {
        const doctor = row.original;

        return (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={doctor.profilePhoto} />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>

            <div>
              <p className="font-medium">{doctor.name}</p>
              <p className="text-sm text-muted-foreground">
                {doctor.qualification}
              </p>
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "specialties",
      header: "Specialties",
      cell: ({ row }) => {
        const specialties = row.original.specialties;

        return (
          <div className="flex gap-2 flex-wrap">
            {specialties?.map((sp) => (
              <Badge key={sp.id} variant="secondary">
                {sp.specialty?.title}
              </Badge>
            ))}
          </div>
        );
      },
    },

    {
      accessorKey: "experience",
      header: "Experience",
      cell: ({ row }) => (
        <span className="font-medium">{row.original.experience} Years</span>
      ),
    },

    {
      accessorKey: "appointmentFee",
      header: "Fee",
      cell: ({ row }) => (
        <span className="font-semibold text-emerald-600">
          ৳ {row.original.appointmentFee}
        </span>
      ),
    },

    {
      accessorKey: "currentWorkingPlace",
      header: "Hospital",
    },
  ];

  const table = useReactTable<IDoctor>({
    data: doctors,
    columns: doctorColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <p className="text-center py-10 text-muted-foreground">
        Loading doctors...
      </p>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50 transition">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={doctorColumns.length}
                className="text-center py-10 text-muted-foreground"
              >
                No doctors found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorsTable;
