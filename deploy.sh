#!/bin/bash

# This script automates the deployment process to Vercel.
# Make sure you have the Vercel CLI installed (`npm install -g vercel`)
# and are logged in (`vercel login`).

# Exit immediately if a command exits with a non-zero status.
set -e

# 1. Add all changes to git
echo "Git: Staging all changes..."
git add .

# 2. Commit the changes
# If there are no changes to commit, this might show a message but won't stop the script.
echo "Git: Committing changes..."
git commit -m "chore: prepare for deployment" || echo "No new changes to commit."

# 3. Push to the main branch on GitHub
echo "Git: Pushing to GitHub..."
git push origin main

# 4. Deploy to Vercel
echo "Vercel: Starting deployment..."
vercel --prod

echo "✅ Deployment script finished."
