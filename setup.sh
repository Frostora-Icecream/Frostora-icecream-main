#!/bin/bash

# Frostora Ice Cream - Quick Deploy Script

echo "🍦 Frostora Ice Cream - Setup Script"
echo "===================================="

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed"
    exit 1
fi

# Check Node
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

echo "✓ Python and Node.js installed"
echo ""

# Backend Setup
echo "📦 Setting up Backend..."
cd backend

# Create virtual environment
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "✓ Virtual environment created"
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt > /dev/null 2>&1
echo "✓ Dependencies installed"

# Run migrations
python manage.py migrate > /dev/null 2>&1
echo "✓ Database migrations applied"

# Populate sample data
echo "📊 Populating sample data..."
python populate_sample_data.py

cd ..
echo ""

# Frontend Setup
echo "⚛️  Setting up Frontend..."
cd frontend

if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
    echo "✓ Dependencies installed"
fi

cd ..
echo ""

echo "✅ Setup Complete!"
echo ""
echo "To start the application:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  python manage.py runserver"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:8000"
echo "Admin: http://localhost:8000/admin"
