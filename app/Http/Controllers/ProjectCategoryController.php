<?php

namespace App\Http\Controllers;

use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class ProjectCategoryController extends Controller
{
    // Get all project categories
    public function index()
    {
        $categories = ProjectCategory::latest()->get();

        return response()->json([
            'success' => true,
            'categories' => $categories
        ]);
    }

    // Create a new project category
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:project_categories,slug',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $category = ProjectCategory::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Project category created successfully',
            'category' => $category
        ], 201);
    }

    // Get one project category
    public function show(ProjectCategory $projectCategory)
    {
        return response()->json([
            'success' => true,
            'category' => $projectCategory
        ]);
    }

    // Update a project category
    public function update(Request $request, ProjectCategory $projectCategory)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|max:255|unique:project_categories,slug,' . $projectCategory->id,
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $projectCategory->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Project category updated successfully',
            'category' => $projectCategory
        ]);
    }

    // Delete a project category
    public function destroy(ProjectCategory $projectCategory)
    {
        $projectCategory->delete();

        return response()->json([
            'success' => true,
            'message' => 'Project category deleted successfully'
        ]);
    }
}