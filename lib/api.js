// lib/api.js - Final Version for Robustness

const WP_BASE = process.env.NEXT_PUBLIC_WP_URL || "https://mattakalappu.com";

// Helper function to handle API response errors and log detail
async function handleResponse(res) {
    if (!res.ok) {
        // IMPORTANT: Log the full error status and URL for Vercel logs
        const text = await res.text();
        console.error(
            `[API ERROR] Status ${res.status} for URL: ${res.url}. Response text preview: ${text.substring(0, 150)}...`
        );
        // Throw a specific error to halt the build/revalidation
        throw new Error(`API Fetch Failed with status: ${res.status}`);
    }
    
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return res.json();
    } else {
        // This is a safety fallback, but it's often a sign of API issue
        return {}; 
    }
}

// ----------------------------------------------------

export async function fetchPosts() {
    // 🎯 FIX: Added '_embed' to include featured media and other related data
    // Also keeping 'per_page=999' to fetch all posts
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?_embed&per_page=6`);
    
    let data = {};
    try {
        data = await handleResponse(res);
    } catch (error) {
        throw error;
    }
    
    if (!Array.isArray(data)) {
        console.warn(`[API WARNING] fetchPosts() received non-array data. Returning empty array. Received:`, data);
        return [];
    }
    
    return data;
}

// 🔥 Function to fetch 50 posts
export async function fetchMorePosts() {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?_embed&per_page=50`);

    let data = {};
    try {
        data = await handleResponse(res);
    } catch (error) {
        throw error;
    }

    if (!Array.isArray(data)) {
        console.warn(`[API WARNING] fetchMorePosts() received non-array data. Returning empty array. Received:`, data);
        return [];
    }

    return data;
}

// Example of how fetchPostById might look in api.js
export async function fetchPostById(id) {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts/${id}`); 
    return await handleResponse(res); 
}


// 💡 NEW/UPDATED FUNCTION: Fetch all slugs for getStaticPaths
export async function fetchPostSlugs() {
    // Fetch only the 'slug' field, reducing payload size significantly
    // per_page=100 ensures we get enough paths for static generation
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?per_page=100&fields=slug`);
    
    let data = {};
    try {
        data = await handleResponse(res);
    } catch (error) {
        // Log the error but return gracefully during path generation
        console.error("Failed to fetch slugs:", error);
        return [];
    }

    if (!Array.isArray(data)) {
        return [];
    }

    // Map the array of objects to an array of slug strings
    return data.map(post => post.slug);
}


// 💡 UPDATED FUNCTION: Fetch a single post by slug (using WP_BASE correctly and including _embed)
export async function fetchPostBySlug(slug) {
  const res = await fetch(
    // Using WP_BASE (your main variable) and including _embed for media
    `${WP_BASE}/wp-json/wp/v2/posts?slug=${slug}&_embed` 
  );

  if (!res.ok) {
    throw new Error(`API Fetch Failed with status: ${res.status}`);
  }

  const data = await res.json();
  return data[0];
}