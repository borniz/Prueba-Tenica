<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('historial_consultas', function (Blueprint $table) {
            $table->id();
            $table->string('country');
            $table->string('city');
            $table->decimal('budget', 10, 2);
            $table->string('currency');
            $table->string('currency_symbol');
            $table->string('climate');
            $table->string('temp');
            $table->decimal('exchange_rate', 10, 4);
            $table->decimal('converted_budget', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historial_consultas');
    }
};
