# Imagify

An AI text-to-image web app. Users type a prompt, and the app generates an image from it through an image-generation API.

**Live demo:** https://imagify-zs.vercel.app/

<!-- Add 2 screenshots here (prompt screen, generated image). Example:
![Prompt screen](./screenshots/prompt.png)
-->

## Features

- Generate images from text prompts
- Image generation through an external image-generation API
- Backend with Node.js and Express.js connected to MongoDB
- Clean user interface built with React and Tailwind CSS

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- AI: external image-generation API

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/zaidkamran327/Imagify.git
   cd Imagify
   ```

2. Install dependencies

   Run `npm install` inside each folder that has a `package.json` (for example the frontend and the backend folders).

3. Create `.env` files

   Use the same variable names your code reads. You will need:

   - your MongoDB connection string
   - your API key for the image-generation service

   Never commit `.env` files to GitHub.

4. Start the backend and the frontend

   ```bash
   npm start
   ```

   Run this in the backend folder. For the frontend, use `npm run dev` or `npm start`, depending on your `package.json` scripts.

## Author

**Zaid Kamran**: BBIT student at UET Lahore, full stack web developer.

- GitHub: https://github.com/zaidkamran327/
- LinkedIn: https://www.linkedin.com/in/zaid-kamran/
