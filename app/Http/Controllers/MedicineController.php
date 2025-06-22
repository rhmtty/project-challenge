<?php

namespace App\Http\Controllers;

use App\Models\Medicine;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicineController extends Controller
{
    public function index()
    {
        $medicines = Medicine::all();

        return Inertia::render('medicine/index', [
            'medicines' => $medicines,
        ]);
    }

    public function create()
    {
        return Inertia::render('medicine/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock_quantity' => 'required|integer|min:0',
            'expiry_date' => 'nullable|date|after:today',
            'manufacturer' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $medicine = Medicine::create([
            'name' => $request->name,
            'description' => $request->description,
            'dosage' => $request->dosage,
            'is_prescription_required' => $request->is_prescription_required ?? false,
            'price' => $request->price,
            'stock_quantity' => $request->stock_quantity,
            'expiry_date' => $request->exp_date,
            'manufacturer' => $request->manufacturer,
            'category' => $request->category,
            'is_active' => $request->is_active ?? true,
            'image_path' => $request->file('image') ? $request->file('image')->store('medicines', 'public') : null,
        ]);

        return to_route('medicine.index');
    }

    public function destroy($id): RedirectResponse
    {
        $medicine = Medicine::findOrFail($id);
        $medicine->delete();

        return to_route('medicine.index');
    }
}
