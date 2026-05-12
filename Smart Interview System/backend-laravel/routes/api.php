<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ApiController::class, 'root']);
Route::get('/health', [ApiController::class, 'health']);

Route::get('/users', [ApiController::class, 'users']);
Route::get('/users/{id}', [ApiController::class, 'userById']);

Route::get('/interviews', [ApiController::class, 'interviews']);
Route::get('/interviews/{id}', [ApiController::class, 'interviewById']);

Route::get('/analytics/overview', [ApiController::class, 'analyticsOverview']);

Route::options('/contact-sales', function () {
	return response('', 204)->withHeaders([
		'Access-Control-Allow-Origin' => '*',
		'Access-Control-Allow-Methods' => 'POST, OPTIONS',
		'Access-Control-Allow-Headers' => 'Content-Type, Accept',
	]);
});

Route::post('/contact-sales', [ApiController::class, 'contactSales']);

