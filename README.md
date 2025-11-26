# Lumina - Modern E-commerce Store

Welcome to Lumina, a sleek and modern e-commerce platform built with a cutting-edge tech stack. This project serves as a demonstration of a highly performant, aesthetically pleasing, and feature-rich online store.

## ✨ Key Features

- **Modern & Responsive Design:** A beautiful and intuitive interface that looks great on all devices, built with Tailwind CSS and ShadCN UI.
- **Dynamic Product Catalog:** Browse products by category, filter by price, and search for specific items.
- **AI-Powered Personalization:**
    - **Personalized Recommendations:** An AI-powered "You Might Also Like" section suggests products based on user browsing habits.
    - **Enhanced Descriptions:** Product descriptions are automatically enriched with summaries from customer reviews using Genkit.
- **Product Details & Quick View:** View comprehensive product details on dedicated pages or use the "Quick View" modal for a faster look.
- **Interactive UI:** Smooth animations, carousels, and a seamless user experience.
- **Light & Dark Mode:** Easily toggle between light and dark themes.
- **Admin Dashboard:** A simple table-based dashboard to view and manage products.
- **Ready for Deployment:** Streamlined deployment process using Vercel.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **AI / Generative:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🛠️ Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nonamep-p/Store.git
   cd Store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a new file named `.env` in the root of your project.
   - The AI features require a Google Gemini API key. Add your key to the `.env` file:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

### Running the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). A deployment script (`deploy.sh`) is included to streamline the process.

### Before you deploy:
- Ensure you have the [Vercel CLI](https://vercel.com/docs/cli) installed: `npm install -g vercel`.
- Log in to your Vercel account: `vercel login`.
- Make sure your local Git repository is connected to your remote GitHub repository.

### Running the Deployment Script

1. **Make the script executable (one-time setup):**
   ```bash
   chmod +x deploy.sh
   ```

2. **Run the script:**
   This script will automatically commit your latest changes, push them to your `main` branch, and start the Vercel deployment process.
   ```bash
   ./deploy.sh
   ```

Follow the prompts from the Vercel CLI to complete the deployment.
