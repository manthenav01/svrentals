#!/bin/bash

# Install Supabase MCP Server for Claude

echo "📦 Installing Supabase MCP Server..."

# Create MCP config directory if it doesn't exist
mkdir -p ~/.config/claude/mcpServers

# Install the MCP server globally
npm install -g @modelcontextprotocol/server-supabase

# Create configuration file
cat > ~/.config/claude/mcpServers/supabase.json << 'EOF'
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-supabase"
  ],
  "env": {
    "SUPABASE_URL": "https://crdbiajuhiezzzvznytl.supabase.co",
    "SUPABASE_SERVICE_KEY": "YOUR_SERVICE_ROLE_KEY_HERE"
  }
}
EOF

echo "✅ Supabase MCP Server installed!"
echo ""
echo "⚠️  IMPORTANT: You need to:"
echo "1. Get your service role key from: https://supabase.com/dashboard/project/crdbiajuhiezzzvznytl/settings/api"
echo "2. Replace 'YOUR_SERVICE_ROLE_KEY_HERE' in ~/.config/claude/mcpServers/supabase.json"
echo "3. Restart Claude Desktop for changes to take effect"
echo ""
echo "📖 Once configured, you'll have access to MCP Supabase commands like:"
echo "   - mcp_supabase_query"
echo "   - mcp_supabase_insert"
echo "   - mcp_supabase_update"
echo "   - mcp_supabase_delete"