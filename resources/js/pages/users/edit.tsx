// import InputError from "@/components/input-error";
// import AppLayout from "@/layouts/app-layout";
// import { BreadcrumbItem, SharedData } from "@/types";
// import { Input, Button, Transition } from "@headlessui/react";
// import { Head, Link, usePage } from "@inertiajs/react";
// import { Label } from "@radix-ui/react-dropdown-menu";

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: "Edit User",
//         href: "/users/edit",
//     },
// ];

// type UserForm = {
//     id: number;
//     name: string;
//     email: string;
//     created_at: Date;
// };

// export default function EditUser({ user }: { user: UserForm }) {
//     const {auth} = usePage<SharedData>().props;

//     const { data, setData, put, errors, processing, recentlySuccessful, status } = useForm<Required<UserForm>({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//     })

//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Edit User" />

//             <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
//                 <h1 className="text-2xl font-bold">Edit User</h1>
//                 <p className="text-gray-600">This is the edit user page.</p>
//                 {/* Add your form or content here */}

//                 <form onSubmit={submit} className="space-y-6">
//                     <div className="grid gap-2">
//                         <Label htmlFor="name">Name</Label>

//                         <Input
//                             id="name"
//                             className="mt-1 block w-full"
//                             value={user.name}
//                             onChange={(e) => setData('name', e.target.value)}
//                             required
//                             autoComplete="name"
//                             placeholder="Full name"
//                         />

//                         <InputError className="mt-2" message={errors.name} />
//                     </div>

//                     <div className="grid gap-2">
//                         <Label htmlFor="email">Email address</Label>

//                         <Input
//                             id="email"
//                             type="email"
//                             className="mt-1 block w-full"
//                             value={user.email}
//                             onChange={(e) => setData('email', e.target.value)}
//                             required
//                             autoComplete="username"
//                             placeholder="Email address"
//                         />

//                         <InputError className="mt-2" message={errors.email} />
//                     </div>

//                     {mustVerifyEmail && auth.user.email_verified_at === null && (
//                         <div>
//                             <p className="-mt-4 text-sm text-muted-foreground">
//                                 Your email address is unverified.{' '}
//                                 <Link
//                                     href={route('verification.send')}
//                                     method="post"
//                                     as="button"
//                                     className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
//                                 >
//                                     Click here to resend the verification email.
//                                 </Link>
//                             </p>

//                             {status === 'verification-link-sent' && (
//                                 <div className="mt-2 text-sm font-medium text-green-600">
//                                     A new verification link has been sent to your email address.
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     <div className="flex items-center gap-4">
//                         <Button disabled={processing}>Save</Button>

//                         <Transition
//                             show={recentlySuccessful}
//                             enter="transition ease-in-out"
//                             enterFrom="opacity-0"
//                             leave="transition ease-in-out"
//                             leaveTo="opacity-0"
//                         >
//                             <p className="text-sm text-neutral-600">Saved</p>
//                         </Transition>
//                     </div>
//                 </form>
//             </div>
//         </AppLayout>
//     );
// }