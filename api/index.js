export default function handler(req, res) {
  const tunnelUrl = process.env.YT_TUNNEL_URL || 'http://localhost:8080';
  
  // Redirect to the current tunnel URL
  res.writeHead(302, {
    Location: tunnelUrl
  });
  res.end();
}
