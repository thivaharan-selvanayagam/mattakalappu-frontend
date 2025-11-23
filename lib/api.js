import axios from 'axios';


const WP_BASE = process.env.NEXT_PUBLIC_WP_URL || 'https://mattakalappu.com';


export async function fetchPosts() {
const res = await axios.get(`${WP_BASE}/wp-json/wp/v2/posts?per_page=20`);
return res.data;
}


export async function fetchPostById(id) {
const res = await axios.get(`${WP_BASE}/wp-json/wp/v2/posts/${id}`);
return res.data;
}


export async function fetchPages() {
const res = await axios.get(`${WP_BASE}/wp-json/wp/v2/pages?per_page=20`);
return res.data;
}