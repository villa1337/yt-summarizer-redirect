export default function handler(req, res) {
  const tunnelUrl = process.env.YT_TUNNEL_URL || 'http://localhost:8080';
  
  // Simple redirect to the Pi's YT summarizer
  res.redirect(302, tunnelUrl);
}
