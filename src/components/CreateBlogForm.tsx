import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlog } from '../services/api';
// IMPORTS FROM SHADCN
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CreateBlogForm = ({ onClose }: { onClose: () => void }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ title: '', description: '', content: '', category: '' });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      date: new Date().toISOString(),
      category: formData.category.split(',').map(tag => tag.trim().toUpperCase()),
      coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop',
    });
  };

  return (
    <Card className="mb-6 shadow-md border-slate-200">
      <CardHeader className="pb-3">
        <CardTitle>Create New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g. The Future of Audit" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Categories</Label>
            <Input id="category" placeholder="e.g. TAX, AUDIT" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <Input id="desc" placeholder="Brief summary..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Write your full article here..." className="min-h-[100px]" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={mutation.isPending} className="flex-1">
              {mutation.isPending ? 'Publishing...' : 'Publish Article'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlogForm;