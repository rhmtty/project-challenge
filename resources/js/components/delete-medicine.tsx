import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from "@inertiajs/react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import { FormEventHandler } from "react";
import InputError from "./input-error";

export default function DeleteMedicine() {
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
        <div>
            {/* <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"> */}

            <Dialog>
                <DialogTrigger asChild>
                    <Trash size="20" className="text-red-400 hover:underline cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Are you sure you want to delete this medicine?</DialogTitle>
                    <DialogDescription>
                        Once deleted, this medicine and all of its resources will be permanently removed. Please confirm your action.
                    </DialogDescription>
                    <form className="space-y-6" onSubmit={deleteMedicine}>
                        <div className="grid gap-2">
                            <Label htmlFor="id" className="sr-only">
                                Medicine ID
                            </Label>
                            <Input
                                id="id"
                                type="number"
                                name="id"
                                value={data.id}
                                onChange={(e) => setData('id', parseInt(e.target.value))}
                                placeholder="Medicine ID"
                                autoComplete="off"
                            />
                            <InputError message={errors.id} />
                        </div>

                        <Button type="submit" variant="destructive" disabled={processing}>
                            {processing ? 'Deleting...' : 'Delete Medicine'}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
            {/* </div> */}
        </div>
    );
}