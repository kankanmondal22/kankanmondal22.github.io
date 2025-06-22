#!/bin/bash

# Exit on error
set -e

echo "🛠️ Building your Vite project..."
npm run build

echo "🚀 Switching to deployment branch..."
git checkout deployment || git checkout -b deployment

echo "🧹 Cleaning old files..."
git rm -rf . > /dev/null 2>&1 || echo "Nothing to delete"

echo "📦 Copying build output..."
cp -r dist/* .

echo "📤 Committing and pushing..."
git add .
git commit -m "Deploy $(date)" || echo "No changes to commit"
git push origin deployment

echo "✅ Done! Your site should be live at: https://your-username.github.io/"
git checkout main