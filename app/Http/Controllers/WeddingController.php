<?php

namespace App\Http\Controllers;

use App\Models\Wish;

class WeddingController extends Controller
{
    public function index($guest = null)
    {
        $wishes = Wish::latest()->take(5)->get();

        $totalWish = Wish::count();

        $totalHadir = Wish::where('attendance', 'hadir')->count();

        $totalTidakHadir = Wish::where('attendance', 'tidak_hadir')->count();

        return view('wedding.index', compact(
            'guest',
            'wishes',
            'totalWish',
            'totalHadir',
            'totalTidakHadir'
        ));
    }
}