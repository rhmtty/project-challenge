<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(); // Retrieve all users from the database

        // Logic to retrieve and return a list of users
        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }

    public function show($id)
    {
        $user = User::findOrFail($id); // Find user by ID or fail

        // Logic to retrieve and return a specific user
        return Inertia::render('users/edit', [
            'user' => $user,
        ]);
    }
}
