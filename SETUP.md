# Frostora Ice Cream - Full Stack Web Application

A premium ice cream brand website built with a modern tech stack featuring Django REST Framework backend and React + Vite frontend.

## 🚀 Tech Stack

### Backend
- **Framework**: Django 4.2.0 + Django REST Framework
- **Database**: SQLite (Development)
- **Image Processing**: Pillow
- **CORS**: django-cors-headers

### Frontend
- **UI Framework**: React 18.2.0
- **Build Tool**: Vite 4.3.0
- **Styling**: Tailwind CSS 3.3.0
- **Routing**: React Router 6.11.0
- **HTTP Client**: Axios 1.3.0

## 📂 Project Structure

```
Frostora-icecream-main/
├── backend/                    # Django Backend
│   ├── frostora_project/       # Project Settings
│   │   ├── settings.py         # Django Settings
│   │   ├── urls.py             # Main URL Configuration
│   │   └── wsgi.py             # WSGI Application
│   ├── frostora_app/           # Django App
│   │   ├── models.py           # Database Models
│   │   ├── views.py            # API ViewSets
│   │   ├── serializers.py      # DRF Serializers
│   │   ├── urls.py             # App URLs
│   │   └── admin.py            # Admin Configuration
│   ├── manage.py               # Django Management Script
│   └── requirements.txt         # Python Dependencies
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── components/         # Reusable Components
│   │   │   ├── Header.jsx      # Navigation Header
│   │   │   └── Footer.jsx      # Footer Component
│   │   ├── pages/              # Page Components
│   │   │   ├── HomePage.jsx
│   │   │   ├── FlavorsPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── CareersPage.jsx
│   │   ├── assets/             # Image Assets
│   │   ├── App.jsx             # Root Component
│   │   ├── main.jsx            # Entry Point
│   │   └── index.css           # Global Styles
│   ├── package.json            # Node Dependencies
│   ├── vite.config.js          # Vite Configuration
│   ├── tailwind.config.js      # Tailwind Configuration
│   └── index.html              # HTML Entry Point
└── README.md                   # Documentation
```

## 🎯 Features

### Homepage
- ✨ Hero section with premium imagery
- 🍦 Feature cards highlighting product benefits
- 📊 Signature flavors showcase
- 💒 Wedding & Events section
- 🎁 Call-to-action sections

### Additional Pages
- **Flavors**: Browse all ice cream flavors with filters
- **About**: Company story, values, and team members
- **Contact**: Contact form and location information
- **Careers**: Job listings and recruitment information

### Backend API
- RESTful API endpoints for all models
- Admin panel for content management
- Image upload support
- CORS enabled for frontend integration

## 🔧 Setup Instructions

### Backend Setup

1. **Create Python Virtual Environment**
```bash
cd backend
cp .env.example .env
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install Dependencies**
```bash
pip install -r requirements.txt
```

3. **Run Migrations**
```bash
python manage.py makemigrations
python manage.py migrate
```

4. **Create Superuser**
```bash
python manage.py createsuperuser
```

5. **Run Development Server**
```bash
python manage.py runserver
```

Backend will be available at: `http://localhost:8000`
Admin panel: `http://localhost:8000/admin`

### Frontend Setup

1. **Install Node Dependencies**
```bash
cd frontend
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

3. **Build for Production**
```bash
npm run build
```

## 🎨 Tailwind CSS Setup

Tailwind CSS is already configured with custom color variables:
- **Navy**: `#0F1F3B` (Primary)
- **Gold**: `#D4A574` (Accent)
- **Cream**: `#F5F1E8` (Background)
- **Light Cream**: `#FAF8F3` (Light Background)

## 📊 API Endpoints

### Ice Cream Flavors
- `GET /api/flavors/` - List all flavors
- `GET /api/flavors/featured/` - Get featured flavors
- `GET /api/flavors/signature/` - Get signature flavors
- `POST /api/flavors/` - Create new flavor (Admin)
- `GET/PUT/DELETE /api/flavors/{id}/` - Flavor details & management

### Team Members
- `GET /api/team/` - List team members
- `GET /api/team/{id}/` - Team member details

### Contact Messages
- `GET /api/contact/` - List messages (Admin only)
- `POST /api/contact/` - Submit contact form

### Careers
- `GET /api/careers/` - List active job listings
- `GET /api/careers/{id}/` - Job listing details

### Events
- `GET /api/events/` - List events
- `GET /api/events/{id}/` - Event details

## 🖼️ Assets

Place image assets in `frontend/src/assets/`:
- `logo.png` - Brand logo
- `hero-icecream.png` - Hero section image
- `belgian-chocolate.png` - Flavor image
- `classic-vanilla.png` - Flavor image
- `pista-royale.png` - Flavor image
- `butterscotch.png` - Flavor image
- `strawberry.png` - Flavor image
- `black-currant.png` - Flavor image
- `wedding-event.png` - Events image
- Team member images (4 images)

## 🔐 Security Notes

This is a development setup. For production:
1. Change `DEBUG = False` in settings.py
2. Set appropriate `ALLOWED_HOSTS`
3. Use `backend/.env` for sensitive data and keep `backend/.env.example` committed as a placeholder template
4. Configure proper database (PostgreSQL recommended)
5. Set up HTTPS
6. Use proper authentication mechanisms

## 📝 Database Models

### IceCreamFlavor
- name, description, image, ingredients
- category (signature/premium/seasonal)
- is_featured, timestamps

### TeamMember
- name, position, image, bio, email
- linkedin_url, timestamp

### ContactMessage
- name, email, phone, subject, message
- is_read status, timestamp

### Career
- title, position, location
- job_type, description, requirements
- salary_range, is_active flag, timestamp

### Event
- title, description, image
- features, pricing, timestamp

## 🚀 Deployment

### Backend (Django)
- Can be deployed to Heroku, Railway, Render, or any VPS
- Use Gunicorn as WSGI server
- Configure PostgreSQL for production

### Frontend (React)
- Can be deployed to Vercel, Netlify, or any static hosting
- Build with `npm run build`
- Serve `dist/` folder

## 📚 Documentation

See individual files for more details:
- Backend API documentation: See viewsets in `frostora_app/views.py`
- Frontend component documentation: Check JSX files for props and usage

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

This project is proprietary to Frostora Ice Cream.

## 📞 Support

For issues or questions:
- Email: hello@frostora.com
- Contact form: Available on the website

---

**Made with ❤️ for Frostora Premium Ice Cream**
