// api.js

const WP_BASE = process.env.NEXT_PUBLIC_WP_URL || "https://mattakalappu.com";
// Note: NEXT_PUBLIC_WP_URL needs to be set in Vercel environment variables 
// if you are using a different URL than the default.

// Helper function to handle API response errors
async function handleResponse(res) {
    if (!res.ok) {
        // If the response is not OK (e.g., 404, 500), throw an error
        const text = await res.text(); // Read the response body as text (might be HTML or error message)
        
        // Throw a specific error that can be caught by Next.js data fetching functions
        throw new Error(`API Fetch Failed: Status ${res.status} for ${res.url}. Response text: ${text.substring(0, 100)}...`);
    }
    
    // Check if the content type is JSON before parsing
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return res.json();
    } else {
        // Handle cases where a successful request might return empty or non-JSON data
        return {}; 
    }
}

// ----------------------------------------------------

export async function fetchPosts() {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts`);
    return await handleResponse(res);
}

export async function fetchPostById(id) {
    // FIX 1: Change WP_URL to WP_BASE
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts/${id}`); 
    return await handleResponse(res);
}
