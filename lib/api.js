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
    let data = {};
    try {
        const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?per_page=20`);
        data = await handleResponse(res);
    } catch (error) {
        // Re-throw the error after handleResponse logs the detail, or return []
        throw error;
    }
    
    // 🎯 CRITICAL FIX: Ensure an array is returned to prevent the .map() crash/empty render
    if (!Array.isArray(data)) {
        console.warn(`[API WARNING] fetchPosts() received non-array data. Returning empty array. Received:`, data);
        return [];
    }
    
    return data;
}

export async function fetchPostById(id) {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts/${id}`); 
    return await handleResponse(res);
}
