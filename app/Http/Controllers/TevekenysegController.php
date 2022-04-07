<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tevekenyseg;

class TevekenysegController extends Controller
{
    public function index()
    {
        return Tevekenyseg::query()
            ->paginate(100)->withQueryString();
    }
}
