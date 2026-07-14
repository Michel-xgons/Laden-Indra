<?php

namespace App\Http\Controllers;

use App\Models\Wish;
use Illuminate\Http\Request;

class WishController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'attendance' => 'required|in:hadir,tidak_hadir',
            'message' => 'required|max:1000',
        ]);

        $wish = Wish::create([
            'name' => $request->name,
            'attendance' => $request->attendance,
            'message' => $request->message,
        ]);

        // Jika request berasal dari AJAX
        if ($request->ajax()) {

            return response()->json([
                'success' => true,
                'wish' => [
                    'name' => $wish->name,
                    'attendance' => $wish->attendance,
                    'message' => $wish->message,
                    'time' => $wish->created_at->diffForHumans(),
                ]
            ]);

        }

        // Fallback jika bukan AJAX
        return redirect()->back()->with('success', 'Ucapan berhasil dikirim.');
    }

    public function loadMore(Request $request)
    {
        $offset = (int) $request->offset;

        $wishes = Wish::latest()
            ->skip($offset)
            ->take(5)
            ->get();

        $remaining = Wish::count() > ($offset + $wishes->count());

        return response()->json([
            'wishes' => $wishes->map(function ($wish) {
                return [
                    'name' => $wish->name,
                    'attendance' => $wish->attendance,
                    'message' => $wish->message,
                    'time' => $wish->created_at->diffForHumans(),
                ];
            }),
            'hasMore' => $remaining,
        ]);
    }
}