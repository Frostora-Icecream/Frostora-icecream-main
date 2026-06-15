# Quick Start Guide - Frostora Ice Cream Website

## Prerequisites
- Python 3.10+
- Node.js 16+
- npm or yarn

## ⚡ Quick Start

### 1. Backend Setup (Terminal 1)
```bash
# Navigate to backend
cd backend

# Create local env file from the template
cp .env.example .env

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start server
python manage.py runserver
```
Server: http://localhost:8000
Admin: http://localhost:8000/admin

### 2. Frontend Setup (Terminal 2)
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```
Frontend: http://localhost:5173

## 📌 Default Credentials
After running `createsuperuser`, you can log in to the admin panel.

## 🔐 Environment Variables
Keep secrets in `backend/.env` and leave `backend/.env.example` as the committed template.

## 🎨 Customization

### Add Images to Assets
1. Place your images in `frontend/src/assets/`
2. Update the image paths in components as needed

### Add Flavors via Admin
1. Go to http://localhost:8000/admin
2. Navigate to Ice Cream Flavors
3. Click "Add Ice Cream Flavor"
4. Fill in details and upload image
5. Click Save

### Add Team Members via Admin
1. Go to http://localhost:8000/admin
2. Navigate to Team Members
3. Add team member details and photo
4. Save

## 📱 Testing the Contact Form
- Visit http://localhost:5173/contact
- Fill out the form and submit
- Check admin panel to see submitted messages

## 🔗 API Testing
Use tools like Postman or curl:

```bash
# Get all flavors
curl http://localhost:8000/api/flavors/

# Get featured flavors
curl http://localhost:8000/api/flavors/featured/

# Submit contact message
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "I love your ice cream!"
  }'
```

## ❌ Troubleshooting

### Port Already in Use
Backend (change port):
```bash
python manage.py runserver 8001
```

Frontend: Vite will automatically use next available port

### CORS Issues
Ensure `CORS_ALLOWED_ORIGINS` in `backend/frostora_project/settings.py` includes frontend URL

### Module Not Found
Make sure you've run `pip install -r requirements.txt` and `npm install`

### Database Issues
Reset database:
```bash
rm db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

## 📦 Building for Production

### Backend
```bash
# Use Gunicorn
gunicorn frostora_project.wsgi:application
```

### Frontend
```bash
npm run build
# Output in dist/ folder
```

## 🚀 Next Steps
1. Add your custom images to assets folder
2. Populate flavors via admin panel
3. Add team members
4. Customize content in pages
5. Deploy both backend and frontend

For more details, see SETUP.md
