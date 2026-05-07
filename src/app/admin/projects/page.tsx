'use client';

import React, { useState, useEffect } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { HiOutlinePlus, HiOutlineTrash, HiOutlinePencil, HiOutlineSave, HiOutlineCloudUpload, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { Project } from '@/types/portfolio';

export default function ProjectManager() {
  const { data, refresh } = usePortfolio();
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data?.projects) setProjects([...data.projects].sort((a, b) => a.order - b.order));
  }, [data]);

  const handleAdd = () => {
    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Project',
      category: 'Web App',
      type: 'Full Stack',
      desc: 'Project description goes here...',
      thumbnail: 'https://via.placeholder.com/600x400',
      tech: ['react', 'nextjs'],
      featured: false,
      github: '#',
      live: '#',
      order: projects.length + 1
    };
    setProjects([...projects, newProject]);
    setEditingId(newProject.id);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure?')) return;
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleUpdate = (id: string, updates: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/cms/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projects),
      });
      if (res.ok) {
        await refresh();
        alert('Projects synchronized with GitHub!');
      }
    } catch (error) {
      alert('Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleThumbnailUpload = async (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'projects');

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) handleUpdate(id, { thumbnail: data.url });
    } catch (error) {
      alert('Upload failed');
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Manage <span className="text-[#A3FF12]">Projects</span></h1>
          <p className="text-gray-400">Add, edit, or remove projects from your portfolio.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={handleAdd} className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
            <HiOutlinePlus /> Add New
          </button>
          <button onClick={handleSave} disabled={saving} className="bg-[#A3FF12] text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_5px_15px_rgba(163,255,18,0.2)]">
            {saving ? 'Syncing...' : <><HiOutlineSave /> Save All</>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className={`bg-[#111] rounded-[32px] border ${editingId === project.id ? 'border-[#A3FF12]' : 'border-white/5'} overflow-hidden transition-all`}>
            <div className="p-8 space-y-6">
              <div className="flex gap-6">
                <div className="w-32 h-20 rounded-xl overflow-hidden bg-white/5 flex-shrink-0 relative group">
                  <img src={project.thumbnail} className="w-full h-full object-cover" />
                  <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                    <HiOutlineCloudUpload size={24} />
                    <input type="file" className="hidden" onChange={(e) => handleThumbnailUpload(project.id, e)} />
                  </label>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <input 
                      value={project.title} 
                      onChange={(e) => handleUpdate(project.id, { title: e.target.value })}
                      className="bg-transparent font-black text-xl outline-none focus:text-[#A3FF12] transition-colors w-full"
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleUpdate(project.id, { featured: !project.featured })}
                        className={`p-2 rounded-lg transition-colors ${project.featured ? 'text-[#A3FF12] bg-[#A3FF12]/10' : 'text-gray-600 hover:text-white bg-white/5'}`}
                      >
                        {project.featured ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                      </button>
                      <button onClick={() => handleDelete(project.id)} className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </div>
                  <input 
                    value={project.category} 
                    onChange={(e) => handleUpdate(project.id, { category: e.target.value })}
                    className="bg-transparent text-xs font-black uppercase tracking-widest text-[#A3FF12] outline-none block w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Project Type</label>
                  <input 
                    value={project.type} 
                    onChange={(e) => handleUpdate(project.id, { type: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#A3FF12]/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tech Stack (Comma Separated)</label>
                  <input 
                    value={project.tech.join(', ')} 
                    onChange={(e) => handleUpdate(project.id, { tech: e.target.value.split(',').map(s => s.trim()) })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#A3FF12]/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Description</label>
                <textarea 
                  value={project.desc} 
                  onChange={(e) => handleUpdate(project.id, { desc: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#A3FF12]/30 h-20 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Live URL</label>
                  <input 
                    value={project.live} 
                    onChange={(e) => handleUpdate(project.id, { live: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#A3FF12]/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">GitHub Repo</label>
                  <input 
                    value={project.github} 
                    onChange={(e) => handleUpdate(project.id, { github: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#A3FF12]/30"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
