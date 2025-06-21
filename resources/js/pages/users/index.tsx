import AppLayout from "@/layouts/app-layout";
import { formatDate } from "@/lib/utils";
import { BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Pencil, Trash } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "User List",
        href: "/users",
    },
];

type User = {
    id: number;
    name: string;
    email: string;
    created_at: Date;
};

export default function UserList({ users }: { users: User[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User List" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold">User List</h1>
                <p className="text-gray-600">This is the user list page.</p>

                <div className="overflow-x-auto">
                    <table className="border-collapse border border-gray-400 w-full">
                        <thead>
                            <tr>
                                <th className="border border-gray-300">No.</th>
                                <th className="border border-gray-300">Name</th>
                                <th className="border border-gray-300">Email</th>
                                <th className="border border-gray-300">Created At</th>
                                {/* <th className="border border-gray-300">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr className="text-center" key={user.id}>
                                    <td className="border border-gray-300">{index + 1}</td>
                                    <td className="border border-gray-300">{user.name}</td>
                                    <td className="border border-gray-300">{user.email}</td>
                                    <td className="border border-gray-300">{formatDate(user.created_at)}</td>
                                    {/* <td className="border border-gray-300 flex justify-center items-center space-x-2">
                                        <Link prefetch href={"/users/" + user.id} className="flex items-center">
                                            <Pencil size="20" className="text-blue-400 hover:underline cursor-pointer" ></Pencil>
                                        </Link>
                                        <span>|</span>
                                        <Trash size="20" className="text-red-400 hover:underline cursor-pointer"></Trash>
                                    </td> */}
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="text-center p-4">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}