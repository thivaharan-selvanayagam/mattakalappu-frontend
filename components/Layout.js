export default function Layout({ children }) {
return (
<div style={{ maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
<header>
<h2>Mattakalappu</h2>
</header>
<main>{children}</main>
<footer style={{ marginTop: 40 }}>© Mattakalappu</footer>
</div>
);
}