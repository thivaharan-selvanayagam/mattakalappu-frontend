const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/wp-json/wp/v2/posts`);
  return await res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${API_URL}/wp-json/wp/v2/posts/${id}`);
  return await res.json();
}
