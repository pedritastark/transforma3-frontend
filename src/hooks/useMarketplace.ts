import { useState, useEffect } from 'react';
import { marketplaceAPI } from '../services/api';

export interface MarketplacePost {
  id: number;
  title: string;
  description: string;
  category_id?: number;
  subcategory_id?: number;
  post_type: 'oferta' | 'demanda';
  price?: number;
  quantity?: number;
  unit?: string;
  location: string;
  region: string;
  images?: string[];
  is_premium: boolean;
  is_active: boolean;
  expires_at?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  company_name?: string;
  full_name?: string;
  city?: string;
  sector?: string;
  category_name?: string;
  subcategory_name?: string;
  is_favorited: boolean;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  parent_id?: number;
  is_active: boolean;
  created_at: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
  created_at: string;
}

export const useMarketplace = () => {
  const [posts, setPosts] = useState<MarketplacePost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (params: {
    page?: number;
    limit?: number;
    category?: string;
    post_type?: string;
    region?: string;
    search?: string;
  } = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await marketplaceAPI.getPosts(params);
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await marketplaceAPI.getCategories();
      setCategories(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleFavorite = async (postId: number, isFavorited: boolean) => {
    try {
      const action = isFavorited ? 'remove' : 'add';
      await marketplaceAPI.toggleFavorite(postId, action);
      
      // Update local state
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { ...post, is_favorited: !isFavorited }
            : post
        )
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  const createPost = async (postData: {
    title: string;
    description: string;
    category_id?: number;
    subcategory_id?: number;
    post_type: string;
    price?: number;
    quantity?: number;
    unit?: string;
    location: string;
    region: string;
    images?: string[];
  }) => {
    try {
      const newPost = await marketplaceAPI.createPost(postData);
      setPosts(prevPosts => [newPost, ...prevPosts]);
      return newPost;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    // Solo hacer fetch si no hay datos y no hay error
    if (categories.length === 0 && !error) {
      fetchCategories();
    }
    if (posts.length === 0 && !error) {
      fetchPosts();
    }
  }, []);

  return {
    posts,
    categories,
    loading,
    error,
    fetchPosts,
    fetchCategories,
    toggleFavorite,
    createPost,
  };
};
