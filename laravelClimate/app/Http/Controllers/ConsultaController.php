<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HistorialConsulta;
use Illuminate\Support\Facades\Validator;

class ConsultaController extends Controller
{
    public function guardarConsulta(Request $request)
    {

        $data = json_decode($request->getContent(), true);
        if (!$data) {
            return response()->json([
                'message' => 'Datos inválidos',
                'status' => 400
            ], 400);
        }
        // Validar datos manualmente usando Validator para manejar errores correctamente
        $validator = Validator::make($request->all(), [
            'country' => 'required|string',
            'city' => 'required|string',
            'budget' => 'required|numeric',
            'currency' => 'required|string',
            'currency_symbol' => 'required|string',
            'climate' => 'required|string',
            'temp' => 'required|string',
            'exchange_rate' => 'required|numeric',
            'converted_budget' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        // Guardar en la base de datos
        $consulta = HistorialConsulta::create($validator->validated());

        if (!$consulta) {
            return response()->json([
                'message' => 'Error al crear la consulta',
                'status' => 500
            ], 500);
        }

        return response()->json([
            'message' => 'Consulta guardada con éxito',
            'data' => $consulta
        ], 201);
    }

    public function obtenerHistorial()
    {
        $historial = HistorialConsulta::latest()->limit(5)->get();

        return response()->json([
            'message' => 'Últimas 5 consultas',
            'data' => $historial
        ], 200);
    }
}
