# Company Website Demo

A modern, responsive company website built with React.js and TailwindCSS. This is a demo website for showcasing to clients.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and visually appealing design using TailwindCSS
- **Multiple Pages**: Home, Products, Contact, and Admin pages
- **React Router**: Client-side routing for seamless navigation
- **Mobile Menu**: Hamburger menu for mobile devices

## Pages

1. **Home Page** (`/`)
   - Hero section with tagline
   - About Us section
   - Mission statement
   - Company values
   - Company activities showcase

2. **Products Page** (`/products`)
   - Grid layout of products
   - Product cards with image, name, description, and price
   - Responsive grid (1 column on mobile, up to 4 columns on desktop)

3. **Contact Page** (`/contact`)
   - Contact form (name, email, message)
   - Company contact information
   - Map placeholder

4. **Admin Page** (`/admin`)
   - Content management interface
   - Placeholder inputs for editing text and images
   - No authentication required (demo only)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx       # Navigation component with mobile menu
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Products.jsx     # Products page
│   ├── Contact.jsx      # Contact page
│   └── Admin.jsx        # Admin page
├── App.jsx              # Main app component with routing
├── main.jsx             # React entry point
└── index.css            # TailwindCSS imports
```

## Customization

All placeholder content is marked with `TODO` comments in the code. Replace:
- Company name and logo
- Text content (taglines, descriptions, etc.)
- Placeholder images
- Contact information
- Product data

## Technologies Used

- React 18
- React Router DOM 6
- TailwindCSS 3
- Vite

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a GitHub repository** (if you haven't already)

2. **Update the base path** in `vite.config.js`:
   - If your repository is named `website`, the base path is already set to `/website/`
   - If your repository has a different name, update line 9 in `vite.config.js`:
     ```js
     base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
     ```
   - For user/organization pages (username.github.io), set base to `'/'`

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

5. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - After pushing, go to the **Actions** tab to see the deployment progress
   - Once complete, your site will be available at:
     `https://your-username.github.io/your-repo-name/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
# Then upload the contents of the 'dist' folder to your GitHub Pages branch
```

## Notes

- This is a demo website with no backend integration
- Forms do not submit data (they only show alerts)
- No authentication is implemented
- All images are placeholders
- Replace all TODO comments with actual content before production use
- The site uses HashRouter for GitHub Pages compatibility (URLs will have `#` in them)

