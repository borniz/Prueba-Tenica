<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConsultaController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
Route::post('/save-query', [ConsultaController::class, 'guardarConsulta']);
Route::get('/get-history', [ConsultaController::class, 'obtenerHistorial']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/user', function (Request $request) {
    return response()->json(['user' => $request->user()]);
})->middleware('auth:sanctum');
