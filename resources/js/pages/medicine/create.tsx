import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Add Medicine",
        href: "/medicines/create",
    },
];

type MedicineForm = {
    name: string;
    description: string;
    dosage: string;
    manufacturer: string;
    exp_date: string;
    price: number;
    stock_quantity: number;
    category: string;
    image: File | null;
    is_active: boolean;
};

export default function AddMedicine() {
    const { data, setData, post, processing, errors } = useForm<Required<MedicineForm>>({
        name: '',
        description: '',
        dosage: '',
        manufacturer: '',
        exp_date: '',
        price: 0,
        stock_quantity: 0,
        category: '',
        image: null,
        is_active: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('medicine.store'), {
            // preserveScroll: true,
            onError: () => console.error(errors),
            onFinish: () => console.log('Form submission finished'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Medicine" />

            <div className="flex h-full flex-1 flex-col gap-x-4 rounded-xl p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold">Add Medicine</h1>
                <p className="text-gray-600 mb-5">Fill in the details of the medicine you want to add.</p>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                            placeholder="Medicine Name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>

                        <Input
                            id="description"
                            className="mt-1 block w-full"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            placeholder="Description"
                            type="textarea"
                        />

                        <InputError className="mt-2" message={errors.description} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="dosage">Dosage</Label>

                        <Input
                            id="dosage"
                            className="mt-1 block w-full"
                            value={data.dosage}
                            onChange={(e) => setData('dosage', e.target.value)}
                            required
                            placeholder="Dosage"
                        />

                        <InputError className="mt-2" message={errors.dosage} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="manufacturer">Manufacturer</Label>

                        <Input
                            id="manufacturer"
                            className="mt-1 block w-full"
                            value={data.manufacturer}
                            onChange={(e) => setData('manufacturer', e.target.value)}
                            required
                            placeholder="Manufacturer"
                        />

                        <InputError className="mt-2" message={errors.manufacturer} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="exp_date">Expiration Date</Label>

                        <Input
                            id="exp_date"
                            type="date"
                            className="mt-1 block w-full"
                            value={data.exp_date}
                            onChange={(e) => setData('exp_date', e.target.value)}
                            required
                        />

                        <InputError className="mt-2" message={errors.exp_date} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price">Price</Label>

                        <Input
                            id="price"
                            type="number"
                            className="mt-1 block w-full"
                            value={data.price}
                            onChange={(e) => setData('price', parseFloat(e.target.value))}
                            required
                            placeholder="Price"
                        />

                        <InputError className="mt-2" message={errors.price} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="stock_quantity">Stock Quantity</Label>

                        <Input
                            id="stock_quantity"
                            type="number"
                            className="mt-1 block w-full"
                            value={data.stock_quantity}
                            onChange={(e) => setData('stock_quantity', parseInt(e.target.value))}
                            required
                            placeholder="Stock Quantity"
                        />

                        <InputError className="mt-2" message={errors.stock_quantity} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>

                        <Input
                            id="category"
                            className="mt-1 block w-full"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            required
                            placeholder="Category"
                        />

                        <InputError className="mt-2" message={errors.category} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="image">Image</Label>

                        <Input
                            id="image"
                            type="file"
                            className="mt-1 block w-full"
                            onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                        />

                        <InputError className="mt-2" message={errors.image} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="active">Active</Label>

                        <div className="inline-flex items-center gap-2">
                            <label htmlFor="switch-component-on" className="text-white text-sm cursor-pointer">Off</label>

                            <div className="relative inline-block w-11 h-5">
                                <input onChange={(e) => setData('is_active', e.target.checked)} checked={data.is_active} id="active" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-teal-600 cursor-pointer transition-colors duration-300" />
                                <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-600 cursor-pointer">
                                </label>
                            </div>

                            <label htmlFor="switch-component-on" className="text-white text-sm cursor-pointer">On</label>
                        </div>

                        {/* <Input
                            id="active"
                            type="checkbox"
                            className="mt-1"
                            checked={data.active}
                            onChange={(e) => setData('active', e.target.checked)}
                        /> */}

                        <InputError className="mt-2" message={errors.is_active} />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing}>Submit</Button>

                        {/* <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in-out"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <span className="ml-2 text-green-600">Medicine added successfully!</span>
                        </Transition> */}
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}