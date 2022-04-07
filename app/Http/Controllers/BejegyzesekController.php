<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bejegyzesek;

class BejegyzesekController extends Controller
{
    public function index(Request $request)
    {
        return Bejegyzesek::query()
            ->when($request->expand, function ($query, $child) {
                $query->with($child);
            })
            ->paginate(100)->withQueryString();
    }
    public function store(Request $request)
    {
        $request->validate([
            'tevekenyseg_id' => 'required',
            'osztaly_id' => 'required',
        ]);
        Bejegyzesek::create($request->all());
    }
}
