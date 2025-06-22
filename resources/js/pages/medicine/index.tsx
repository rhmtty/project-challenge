import AppLayout from "@/layouts/app-layout";
import { formatDate } from "@/lib/utils";
import { BreadcrumbItem } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { Pencil, Trash } from "lucide-react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Medicine List",
        href: "/medicines",
    },
];

type Medicine = {
    id: number;
    name: string;
    description: string;
    dosage: string;
    manufacturer: string;
    expiry_date: Date;
    price: number;
    stock_quantity: number;
    category: string;
    image_path: string | null;
    is_active: boolean;
};

export default function Medicine({ medicines }: { medicines: Medicine[] }) {
    // If you want to render the list of medicines,
    // you can map over the `medicines` array and display each medicine's details
    // For now, we will just display a static row as an example.
    const { data, setData, delete: destroy, processing, reset, errors, clearErrors } = useForm<Required<{ id: number }>>({ id: 0 });

    const deleteMedicine: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('medicine.destroy', data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => console.error(errors),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        clearErrors();
        reset();
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Medicine List" />
            <div className="flex h-full flex-1 flex-col gap-x-4 rounded-xl p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold">Medicine List Page</h1>
                <p className="text-gray-600 mb-5">This is the list page for the Medicine section.</p>
                <div className="mb-4 flex justify-end">
                    <Link href="/medicines/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add Medicine
                    </Link>
                </div>

                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-1.5">No.</th>
                            <th className="border border-gray-300 px-1.5">Name</th>
                            <th className="border border-gray-300 px-1.5">Description</th>
                            <th className="border border-gray-300 px-1.5">Dosage</th>
                            <th className="border border-gray-300 px-1.5">Manufacturer</th>
                            <th className="border border-gray-300 px-1.5">Exp. Date</th>
                            <th className="border border-gray-300 px-1.5">Price</th>
                            <th className="border border-gray-300 px-1.5">Stock Qty</th>
                            <th className="border border-gray-300 px-1.5">Category</th>
                            <th className="border border-gray-300 px-1.5">Image</th>
                            <th className="border border-gray-300 px-1.5">Active</th>
                            {/* <th className="border border-gray-300">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map((medicine, index) => (
                            <tr className="text-center" key={medicine.id}>
                                <td className="border border-gray-300 px-1.5">{index + 1}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.name}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.description}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.dosage}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.manufacturer}</td>
                                <td className="border border-gray-300 px-1.5">{formatDate(medicine.expiry_date)}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.price}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.stock_quantity}</td>
                                <td className="border border-gray-300 px-1.5">{medicine.category}</td>
                                <td className="border border-gray-300 px-1.5">
                                    {medicine.image_path ? (
                                        <img src={medicine.image_path} alt={medicine.name} className="w-16 h-16 object-cover" />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td className="border border-gray-300 px-1.5">
                                    <div className="inline-flex items-center gap-2">
                                        <label htmlFor="switch-component-on" className="text-white text-sm cursor-pointer">Off</label>

                                        <div className="relative inline-block w-11 h-5">
                                            <input onChange={() => null} checked={medicine.is_active} id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-teal-600 cursor-pointer transition-colors duration-300" readOnly />
                                            <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-600 cursor-pointer">
                                            </label>
                                        </div>

                                        <label htmlFor="switch-component-on" className="text-white text-sm cursor-pointer">On</label>
                                    </div>
                                </td>
                                {/* <td className="border border-gray-300 px-1.5">
                                    <div className=" flex justify-center items-center gap-2">
                                        <Link prefetch href={"/medicines/" + medicine.id} className="flex items-center">
                                            <Pencil size="20" className="text-blue-400 hover:underline cursor-pointer" />
                                        </Link>
                                        <span>|</span>
                                        <Trash size="20" className="text-red-400 hover:underline cursor-pointer" />
                                    </div>
                                </td> */}
                            </tr>
                        ))}
                        {medicines.length === 0 && (
                            <tr>
                                <td colSpan={12} className="text-center p-4">
                                    No medicines found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
