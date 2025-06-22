<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    protected $fillable = [
        'name',
        'description',
        'dosage',
        'manufacturer',
        'expiry_date',
        'price',
        'stock_quantity',
        'category',
        'image_path',
        'is_prescription_required',
        'is_active',
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'is_prescription_required' => 'boolean',
        'is_active' => 'boolean',
    ];
}
