"use client";

import { useEffect, useState } from "react";
import {
  type ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const fetchPosts = async (): Promise<BlogPost[]> => {
  const token = localStorage.getItem("token"); // Adjust based on your auth mechanism
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function BlogPostTable() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const posts = await fetchPosts();
        setData(posts);
      } catch (err) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const columns: ColumnDef<BlogPost>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "content",
      header: "Content",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (info) => new Date(info.getValue() as string).toLocaleDateString(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Link href={`/view-post/${row.original.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="hover:bg-blue-500 hover:text-white"
            >
              View
            </Button>
          </Link>
          <Link href={`/edit-post/${row.original.id}`}>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </Link>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => console.log("Delete", row.original.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog Posts</h2>
      <div className="flex justify-end mb-4">
        <Link href="/create-post">
          <Button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            + Create Post
          </Button>
        </Link>
      </div>
      <Card className="p-4 shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="rounded-lg overflow-hidden shadow-lg">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-gray-100">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="py-3 px-4 text-gray-700 uppercase"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row, idx) => (
                <TableRow
                  key={row.id}
                  className={`border-b ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-200 transition-all`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
