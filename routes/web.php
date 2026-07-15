<?php
use App\Http\Controllers\WishController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeddingController;

Route::get('/Laden-Indra/{guest?}', [WeddingController::class, 'index']);



Route::post('/wish', [WishController::class, 'store'])
    ->name('wish.store');
    Route::get('/wishes/load-more', [WishController::class, 'loadMore'])
    ->name('wish.loadMore');