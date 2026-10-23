
<?php

use Illuminate\Support\Facades\Route;

$pages = [
    'about-us',
    'our-work',
    'projects',
    'impact',
    'gallery',
    'blog',
];

Route::get('/', function () {
    return view('welcome', ['activePath' => 'home']);
})->name('home');

foreach ($pages as $page) {
    Route::get("/{$page}", function () use ($page) {
        return view('welcome', ['activePath' => $page]);
    })->name($page);
}
