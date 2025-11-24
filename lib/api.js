// api.js - Final Version for Robustness

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

// Example of how fetchPostById might look in api.js (ensure this is present)
export async function fetchPostById(id) {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts/${id}`); 
    return await handleResponse(res); // assuming handleResponse is still there
}

