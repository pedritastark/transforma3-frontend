const API_BASE_URL = 'http://localhost:3001/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error en la API');
  }
  return response.json();
};

// --- AUTENTICACIÓN ---
export const authAPI = {
  register: async (userData: {
    email: string;
    password: string;
    user_type: string;
    company_name?: string;
    full_name: string;
    city: string;
    sector?: string;
    phone?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return handleResponse(response);
  }
};

// --- MARKETPLACE ---
export const marketplaceAPI = {
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return handleResponse(response);
  },

  getPosts: async (params: {
    page?: number;
    limit?: number;
    category?: string;
    post_type?: string;
    region?: string;
    search?: string;
  } = {}) => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) queryParams.append(key, value.toString());
    });
    
    const response = await fetch(`${API_BASE_URL}/marketplace/posts?${queryParams}`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  createPost: async (postData: {
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
    const response = await fetch(`${API_BASE_URL}/marketplace/posts`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(postData)
    });
    return handleResponse(response);
  },

  toggleFavorite: async (postId: number, action: 'add' | 'remove') => {
    const response = await fetch(`${API_BASE_URL}/marketplace/favorites`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ post_id: postId, action })
    });
    return handleResponse(response);
  }
};

// --- EMPRESAS ---
export const companiesAPI = {
  getCompanies: async (params: {
    page?: number;
    limit?: number;
    industry?: string;
    region?: string;
    company_type?: string;
    search?: string;
  } = {}) => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) queryParams.append(key, value.toString());
    });
    
    const response = await fetch(`${API_BASE_URL}/companies?${queryParams}`);
    return handleResponse(response);
  }
};

// --- CONSULTORÍA ---
export const consultingAPI = {
  getServices: async () => {
    const response = await fetch(`${API_BASE_URL}/consulting/services`);
    return handleResponse(response);
  },

  createRequest: async (requestData: {
    service_id: number;
    company_name?: string;
    contact_name: string;
    email: string;
    phone?: string;
    message: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/consulting/requests`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(requestData)
    });
    return handleResponse(response);
  }
};

// --- CAMPAÑAS ---
export const campaignsAPI = {
  getCampaigns: async () => {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  createCampaign: async (campaignData: {
    name: string;
    description?: string;
    target_audience?: string;
    budget?: number;
    start_date?: string;
    end_date?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(campaignData)
    });
    return handleResponse(response);
  }
};

// --- NOTICIAS ---
export const newsAPI = {
  getNews: async (params: {
    page?: number;
    limit?: number;
    category?: string;
  } = {}) => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) queryParams.append(key, value.toString());
    });
    
    const response = await fetch(`${API_BASE_URL}/news?${queryParams}`);
    return handleResponse(response);
  }
};

// --- CONFIGURACIÓN ---
export const settingsAPI = {
  getSetting: async (key: string) => {
    const response = await fetch(`${API_BASE_URL}/settings/${key}`);
    return handleResponse(response);
  }
};

// --- PERFIL ---
export const profileAPI = {
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  updateProfile: async (profileData: {
    company_name?: string;
    full_name?: string;
    city?: string;
    sector?: string;
    phone?: string;
    profile_image_url?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData)
    });
    return handleResponse(response);
  }
};
