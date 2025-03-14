<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistorialConsulta extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'city',
        'budget',
        'currency',
        'currency_symbol',
        'exchange_rate',
        'climate',
        'temp',
        'converted_budget'
    ];
}
