# 🍦 Frostora Ice Cream - Premium Brand Website

A premium ice cream brand website with a modern full-stack architecture. Built with **Django + Django REST Framework** backend and **React + Vite** frontend.

## 🚀 Tech Stack

- **Backend**: Django 4.2 + Django REST Framework
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Database**: SQLite (development)
- **API**: RESTful API with complete CRUD operations
- **Styling**: Tailwind CSS with custom Frostora theme

## 📦 Features

✨ **Homepage**
- Premium hero section with call-to-action
- Feature cards highlighting brand values
- Signature flavors showcase
- Wedding & Events promotion
- Responsive design

🍦 **Flavors Page**
- Browse all ice cream flavors
- Filter by category (Signature, Premium, Seasonal)
- Detailed flavor information
- Image gallery

👥 **About Page**
- Company story and mission
- Core values showcase
- Team member profiles

📞 **Contact Page**
- Contact form with validation
- Location information
- Contact details

💼 **Careers Page**
- Job listings
- Application information
- Team member profiles

## 🎨 Design Features

- Premium navy and gold color scheme
- Responsive mobile-first design
- Smooth animations and transitions
- Professional typography
- High-quality imagery support

## 📂 Project Structure

```
Frostora-icecream-main/
├── backend/                 # Django Backend
│   ├── frostora_project/   # Django Project Settings
│   ├── frostora_app/       # Main Django App
│   └── manage.py
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI Components
│   │   ├── pages/         # Page Components
│   │   └── assets/        # Image Assets
│   ├── vite.config.js
│   └── package.json
├── SETUP.md               # Detailed Setup Guide
├── QUICKSTART.md          # Quick Start Guide
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 16+
- npm or yarn

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend: `http://localhost:8000`  
Admin: `http://localhost:8000/admin`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## 📡 API Endpoints

- `GET /api/flavors/` - All flavors
- `GET /api/flavors/featured/` - Featured flavors
- `GET /api/flavors/signature/` - Signature flavors
- `GET /api/team/` - Team members
- `POST /api/contact/` - Submit contact form
- `GET /api/careers/` - Job listings
- `GET /api/events/` - Events

## 🎯 Pages

1. **Homepage** (`/`) - Main landing page
2. **Flavors** (`/flavors`) - Browse all flavors with filters
3. **About** (`/about`) - Company story and team
4. **Contact** (`/contact`) - Contact form and location
5. **Careers** (`/careers`) - Job listings

## 📸 Assets

Place images in `frontend/src/assets/`:
- Logo and branding images
- Product/flavor images
- Team member photos
- Event/promotional images

## 🔧 Configuration

### Tailwind Colors
- Primary Navy: `#0F1F3B`
- Accent Gold: `#D4A574`
- Cream Background: `#F5F1E8`
- Light Cream: `#FAF8F3`

### CORS Settings
Default CORS allowed origins:
- `http://localhost:5173` (Frontend dev)
- `http://localhost:3000` (Alternative)

## 📝 Database Models

- **IceCreamFlavor** - Flavor details with images and ingredients
- **TeamMember** - Team profiles with contact info
- **ContactMessage** - Contact form submissions
- **Career** - Job listings
- **Event** - Event/promotion details

## 🔐 Admin Panel

Access Django admin at `http://localhost:8000/admin`

Add content through the admin:
- Ice Cream Flavors
- Team Members
- Manage Contact Messages
- Job Listings
- Events

## 📚 Documentation

- **SETUP.md** - Detailed setup and deployment instructions
- **QUICKSTART.md** - Quick reference guide
- **API Documentation** - See views.py for endpoint details

## 🚀 Deployment

### Backend
- Recommended: Heroku, Railway, or Render
- Use PostgreSQL for production
- Configure environment variables

### Frontend
- Recommended: Vercel, Netlify, or AWS S3
- Build: `npm run build`
- Deploy `dist/` folder

## 📝 Development

### Running Tests
```bash
# Backend
python manage.py test

# Frontend
npm run test  # (if testing library configured)
```

### Build Production
```bash
# Backend
gunicorn frostora_project.wsgi:application

# Frontend
npm run build
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Submit a pull request

## 📄 License

Proprietary to Frostora Ice Cream

## 📞 Contact

- Email: hello@frostora.com
- Website: [In Development]

---

**Crafting Memories, One Scoop at a Time** 🍦✨
