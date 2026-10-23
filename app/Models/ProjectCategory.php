<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProjectCategory extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'is_active',
        ];

    protected $casts = [
         'is_active' => 'boolean'
    ];

    /**
     * Get all projects belonging to this category.
     */
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class, 'project_category_id');
    }
}