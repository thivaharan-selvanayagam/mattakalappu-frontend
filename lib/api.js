const WP_BASE = process.env.NEXT_PUBLIC_WP_URL || "https://mattakalappu.com";

export async function fetchPosts() {
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts`);
  return await res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts/${id}`);
  return await res.json();
}
