# 🌌 Neurallogic - AI-Driven Digital Solutions

![Neurallogic Logo](logo_Neurallogic.png)

Neurallogic is a premium, high-performance SaaS company website built for a modern AI-first world. It combines cutting-edge web technologies with a sophisticated design language to provide a seamless user experience and a robust administrative backend.

## ✨ Features

- **💎 Premium Design**: Implemented with high-fidelity aesthetics, including glassmorphism, smooth gradients, and `framer-motion` animations.
- **📱 Fully Responsive**: Optimized for all devices using Tailwind CSS v4.
- **🚀 Dynamic Content**: Blogs and testimonials are fetched dynamically from a Supabase backend.
- **🔐 Secure Admin Panel**: A dedicated administrative interface for content management (Blogs, Careers, etc.) protected by Supabase Authentication.
- **📨 Contact & Leads**: Integrated contact form for business inquiries.
- **💼 Career Management**: A structured careers page for talent acquisition.
- **📂 Portfolio Showcase**: Highlighting key projects and success stories.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend/Database**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)

## 📂 Project Structure

```text
Neurallogic/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── context/         # React Context for state management
│   ├── pages/           # Page components
│   │   └── admin/       # Protected Administrative pages
│   ├── services/        # API and Supabase configurations
│   ├── utils/           # Helper functions and utilities
│   ├── App.jsx          # Root component & Routing
│   ├── index.css        # Global styles & Tailwind imports
│   └── main.jsx         # Application entry point
├── .env.example         # Example environment variables
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Neurallogic.git
   cd Neurallogic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🛠️ Configuration

The project uses **Tailwind CSS v4** for styling. Core design tokens like colors and spacing are defined in `src/index.css` and the Tailwind configuration.

### Supabase Setup

To enable the dynamic features (Blogs, Admin), ensure you have a Supabase project with the following tables:
- `blogs`: (id, title, content, excerpt, image_url, created_at)
- `careers`: (id, title, department, location, type, description)
- `contact_submissions`: (id, name, email, message, created_at)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by the **Neurallogic** team.
