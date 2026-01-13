export default function handler(req, res) {
  const tunnelUrl = process.env.YT_TUNNEL_URL || 'http://localhost:8080';
  
  // Return HTML page with button instead of automatic redirect
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>YT Summarizer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { 
          font-family: Arial, sans-serif; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          margin: 0; 
          background: #f5f5f5;
        }
        .container { text-align: center; }
        .btn { 
          background: #0070f3; 
          color: white; 
          padding: 12px 24px; 
          border: none; 
          border-radius: 6px; 
          font-size: 16px; 
          cursor: pointer; 
          text-decoration: none;
          display: inline-block;
        }
        .btn:hover { background: #0051cc; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>YouTube Summarizer</h2>
        <p>Click to access the YT Summarizer</p>
        <a href="${tunnelUrl}" class="btn">Go to YT Summarizer</a>
      </div>
    </body>
    </html>
  `);
}
