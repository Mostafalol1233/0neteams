#!/bin/bash

# Clean build script for production deployment
echo "🧹 Cleaning previous build..."
rm -rf dist/

echo "📝 Preparing clean HTML file..."
cp client/index.production.html client/index.html

echo "🔨 Building project..."
npm run build

echo "✅ Clean build completed!"
echo "📁 Files ready in dist/public/"

# Show build info
echo "📊 Build size:"
du -sh dist/public/*

echo "🚀 Ready for deployment to Vercel!"