import { create } from 'zustand';

export const useItemStore = create((set) => ({
  items: [],
  getItems: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      const items = data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.body,
        duration: `${Math.floor(Math.random() * 120) + 60} min`, 
        backdrop: `https://picsum.photos/seed/${post.id}/400/200` 
      }));
      set({ items });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
}));




