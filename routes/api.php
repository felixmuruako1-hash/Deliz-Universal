
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectCategoryController;

Route::apiResource('project-categories', ProjectCategoryController::class);