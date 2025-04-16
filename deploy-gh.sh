# Create this as deploy-gh.sh in your project root
#!/bin/bash

# Build with production settings
NODE_ENV=production npm run build

# Ensure GitHub Pages special files exist
touch out/.nojekyll
echo "risshi.is-a.dev" > out/CNAME

# # Deploy to GitHub Pages
# gh-pages -d out -b master -r https://github.com/codeRisshi25/codeRisshi25.github.io.git

