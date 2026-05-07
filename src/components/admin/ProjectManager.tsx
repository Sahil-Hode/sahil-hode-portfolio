'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/hooks/usePortfolio';

export default function ProjectManager() {
  const { data, updateData } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    type: 'Full Stack',
    desc: '',
    tech: '',
    github: '',
    live: '',
    featured: false
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const project = {
      ...newProject,
      id: (data.projects.length + 1).toString().padStart(2, '0'),
      tech: newProject.tech.split(',').map(t => t.trim())
    };
    updateData({
      ...data,
      projects: [project, ...data.projects]
    });
    setNewProject({ title: '', category: '', type: 'Full Stack', desc: '', tech: '', github: '', live: '', featured: false });
  };

  const handleDelete = (id: string) => {
    updateData({
      ...data,
      projects: data.projects.filter(p => p.id !== id)
    });
  };

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h3 className="text-2xl font-bold text-white">Project Showcase</h3>
        <p className="text-gray-400">Add, edit, or remove projects from your portfolio</p>
      </div>

      {/* Add New Project */}
      <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
        <h4 className="text-[#A3FF12] font-bold mb-6">Add New Project</h4>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Title</label>
            <input
              type="text"
              required
              value={newProject.title}
              onChange={e => setNewProject({...newProject, title: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
              placeholder="Project Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
            <input
              type="text"
              required
              value={newProject.category}
              onChange={e => setNewProject({...newProject, category: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
              placeholder="e.g. AI · SAAS"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Type</label>
            <select
              value={newProject.type}
              onChange={e => setNewProject({...newProject, type: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors appearance-none"
            >
              <option value="AI Projects">AI Projects</option>
              <option value="Full Stack">Full Stack</option>
              <option value="SaaS">SaaS</option>
              <option value="Web App">Web App</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Tech Stack (Comma separated)</label>
            <input
              type="text"
              required
              value={newProject.tech}
              onChange={e => setNewProject({...newProject, tech: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
              placeholder="React, Next.js, Node.js"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
            <textarea
              required
              value={newProject.desc}
              onChange={e => setNewProject({...newProject, desc: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors resize-none"
              placeholder="Project details..."
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">GitHub Link</label>
            <input
              type="text"
              value={newProject.github}
              onChange={e => setNewProject({...newProject, github: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
              placeholder="https://github.com/..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Live Demo Link</label>
            <input
              type="text"
              value={newProject.live}
              onChange={e => setNewProject({...newProject, live: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
              placeholder="https://..."
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={newProject.featured}
              onChange={e => setNewProject({...newProject, featured: e.target.checked})}
              className="w-5 h-5 accent-[#A3FF12]"
            />
            <label htmlFor="featured" className="text-sm font-bold text-gray-400">Mark as Featured Project</label>
          </div>
          <div className="md:col-span-2 pt-4">
            <button type="submit" className="bg-[#A3FF12] text-black font-bold px-8 py-3 rounded-xl hover:bg-[#8edb10] transition-colors w-full md:w-auto">
              Add Project to Portfolio
            </button>
          </div>
        </form>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-4">
        <h4 className="text-white font-bold text-lg mb-4">Current Projects ({data.projects.length})</h4>
        <AnimatePresence>
          {data.projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#A3FF12]/30 transition-all"
            >
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-[#A3FF12]/10 rounded-xl flex items-center justify-center text-[#A3FF12] font-bold">
                  {project.id}
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg flex items-center gap-3">
                    {project.title}
                    {project.featured && <span className="text-[10px] bg-[#A3FF12] text-black px-2 py-0.5 rounded uppercase">Featured</span>}
                  </h5>
                  <p className="text-gray-500 text-sm">{project.category} &bull; {project.type}</p>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex-1 md:flex-none px-4 py-2 bg-red-500/10 text-red-500 rounded-lg text-sm font-bold hover:bg-red-500/20 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
