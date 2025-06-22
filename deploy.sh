#!/bin/bash

# Exit on any error
set -e

echo "🛠️ Building Vite project..."
bun run build

echo "🚀 Switching to deployment branch..."
git checkout deployment || git checkout -b deployment

echo "🧹 Cleaning old files in deployment branch..."
git rm -rf . > /dev/null 2>&1 || echo "Nothing to delete"

echo "📦 Copying dist output..."
cp -r dist/* .

# Just in case node_modules accidentally exists, remove it
rm -rf node_modules

echo "🛡️ Updating .gitignore to ignore node_modules"
echo "node_modules/" >> .gitignore
git add .gitignore

echo "📤 Committing and pushing..."
git add .
git commit -m "Deploy $(date)" || echo "No changes to commit"
git push origin deployment

echo "✅ Deployed to: https://your-username.github.io/"
git checkout main