<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BejegyzesekController;
use App\Http\Controllers\TevekenysegController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/bejegyzesek', [BejegyzesekController::class,'index']);
Route::get('/tevekenysegek', [TevekenysegController::class,'index']);
Route::get('/user', [UserController::class,'index']);
Route::post('/bejegyzesek', [BejegyzesekController::class,'store']);
Route::get('/', function () {
    return view('tevekenyseg');
});