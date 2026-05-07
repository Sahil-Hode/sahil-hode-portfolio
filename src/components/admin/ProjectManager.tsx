'use client';

import React, { useState, useEffect } from 'react';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { Project } from '@/types/portfolio';
import { HiOutlineSave, HiOutlineTrash, HiOutlinePlus, HiOutlineCheckCircle } from 'react-icons/hi';

export default function ProjectManager() {
  const { data, loading, refresh } = usePortfolio();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (data?.projects) setProjects(data.projects);
  }, [data]);

  if (loading || !data) return <div className="animate-pulse h-64 bg-white/5 rounded-3xl" />;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/cms/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projects),
      });
      if (res.ok) {
        await refresh();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      alert('Save failed');
    } finally {
      setIsSaving(false);
    }
  };

  const addProject = () => {
    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Project',
      category: 'Web App',
      type: 'Full Stack',
      desc: 'Project description...',
      thumbnail: '',
      tech: [],
      featured: false,
      github: '',
      live: '',
      order: projects.length + 1
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-bold">Project Management</h3>
          <p className="text-gray-400">Edit your featured work and project details</p>
        </div>
        <button onClick={addProject} className="bg-white/5 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
          <HiOutlinePlus /> Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#111] p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex justify-between items-start">
              <input 
                value={project.title}
                onChange={(e) => updateProject(project.id, { title: e.target.value })}
                className="bg-transparent text-xl font-bold outline-none focus:text-[#A3FF12] w-full"
              />
              <button onClick={() => removeProject(project.id)} className="text-red-500 p-2 hover:bg-red-500/10 rounded-lg">
                <HiOutlineTrash />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                placeholder="Category"
                value={project.category}
                onChange={(e) => updateProject(project.id, { category: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
              <input 
                placeholder="Tech (comma separated)"
                value={project.tech.join(', ')}
                onChange={(e) => updateProject(project.id, { tech: e.target.value.split(',').map(s => s.trim()) })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <textarea 
              placeholder="Description"
              value={project.desc}
              onChange={(e) => updateProject(project.id, { desc: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none h-24 resize-none"
            />
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#A3FF12] text-black font-black px-10 py-4 rounded-2xl shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          {isSaving ? 'Syncing...' : <><HiOutlineSave /> Save All Projects</>}
        </button>
      </div>
    </div>
  );
}
