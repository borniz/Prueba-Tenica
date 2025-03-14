<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConsultaController;

Route::post('/save-query', [ConsultaController::class, 'guardarConsulta']);
Route::get('/get-history', [ConsultaController::class, 'obtenerHistorial']);
