<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'ok' => true,
        'message' => 'Smart Interview backend is running',
        'docs' => '/api/health',
    ]);
});

