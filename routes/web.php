<?php

use App\Http\Controllers\MedicineController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('user.index');
        Route::get('/{id}', [UserController::class, 'show'])->name('user.show');
        Route::put('/{id}', [UserController::class, 'update'])->name('user.update');
    });

    Route::prefix('medicines')->group(function () {
        Route::get('/', [MedicineController::class, 'index'])->name('medicine.index');
        Route::get('/create', [MedicineController::class, 'create'])->name('medicine.create');
        Route::post('/', [MedicineController::class, 'store'])->name('medicine.store');
        Route::get('/{id}', [MedicineController::class, 'show'])->name('medicine.show');
        Route::put('/{id}', [MedicineController::class, 'update'])->name('medicine.update');
        Route::delete('/{id}', [MedicineController::class, 'destroy'])->name('medicine.destroy');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
