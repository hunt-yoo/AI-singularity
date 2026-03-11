# Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   `npm run dev`
 
## Deployment

This repository is configured with a **GitHub Actions workflow** for automatic deployment to **GitHub Pages**.

1. Go to your repository settings on GitHub.
2. Navigate to **Pages** > **Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. Whenever you push to the `main` or `master` branch, the action will automatically build and deploy your application.
