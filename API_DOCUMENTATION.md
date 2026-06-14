# Frostora API Documentation

## Base URL
- Development: `http://localhost:8000/api`
- Production: `https://api.frostora.com/api` (update with your domain)

## Authentication
Currently, the API is open for development. Authentication will be added for production.

---

## 🍦 Ice Cream Flavors Endpoints

### Get All Flavors
```
GET /api/flavors/
```

**Response:**
```json
{
  "count": 6,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Belgian Chocolate",
      "description": "Indulge in the deep...",
      "image": "/media/flavors/belgian.jpg",
      "ingredients": "Dark chocolate, Cocoa...",
      "category": "signature",
      "is_featured": true,
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Get Featured Flavors
```
GET /api/flavors/featured/
```

Returns only flavors with `is_featured: true`

### Get Signature Flavors
```
GET /api/flavors/signature/
```

Returns only signature category flavors

### Get Flavor by ID
```
GET /api/flavors/{id}/
```

**Example:**
```
GET /api/flavors/1/
```

**Response:**
```json
{
  "id": 1,
  "name": "Belgian Chocolate",
  "description": "Indulge in the deep, luxurious taste...",
  "image": "/media/flavors/belgian.jpg",
  "ingredients": "Dark chocolate, Cocoa powder, Milk cream",
  "category": "signature",
  "is_featured": true,
  "created_at": "2024-01-01T12:00:00Z"
}
```

### Create Flavor (Admin Only)
```
POST /api/flavors/
```

**Request Body:**
```json
{
  "name": "New Flavor",
  "description": "Description of the flavor",
  "ingredients": "List of ingredients",
  "category": "signature",
  "is_featured": false
}
```

Note: Include multipart/form-data for image upload

### Update Flavor (Admin Only)
```
PUT /api/flavors/{id}/
```

### Partial Update Flavor (Admin Only)
```
PATCH /api/flavors/{id}/
```

### Delete Flavor (Admin Only)
```
DELETE /api/flavors/{id}/
```

---

## 👥 Team Members Endpoints

### Get All Team Members
```
GET /api/team/
```

**Response:**
```json
{
  "count": 4,
  "results": [
    {
      "id": 1,
      "name": "Arjun R",
      "position": "Founder & CEO",
      "image": "/media/team/arjun.jpg",
      "bio": "Visionary leader...",
      "email": "arjun@frostora.com",
      "linkedin_url": "https://linkedin.com/in/arjun",
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Get Team Member by ID
```
GET /api/team/{id}/
```

### Create Team Member (Admin Only)
```
POST /api/team/
```

**Request Body:**
```json
{
  "name": "John Doe",
  "position": "Product Manager",
  "bio": "Bio text here",
  "email": "john@frostora.com",
  "linkedin_url": "https://linkedin.com/in/john"
}
```

### Update/Delete Team Member (Admin Only)
```
PUT /api/team/{id}/
PATCH /api/team/{id}/
DELETE /api/team/{id}/
```

---

## 📧 Contact Messages Endpoints

### Submit Contact Form
```
POST /api/contact/
```

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "subject": "Inquiry about catering",
  "message": "I'm interested in your catering services for an event."
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "subject": "Inquiry about catering",
  "message": "I'm interested...",
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Get All Messages (Admin Only)
```
GET /api/contact/
```

### Get Message by ID (Admin Only)
```
GET /api/contact/{id}/
```

**Note:** Only superusers can view contact messages

---

## 💼 Careers Endpoints

### Get All Active Job Listings
```
GET /api/careers/
```

**Response:**
```json
{
  "count": 6,
  "results": [
    {
      "id": 1,
      "title": "Lead Quality Analyst",
      "position": "Senior Quality Analyst",
      "location": "Bengaluru",
      "job_type": "full_time",
      "description": "Ensure highest standards...",
      "requirements": "3+ years experience...",
      "salary_range": "15,000 - 20,000 per month",
      "is_active": true,
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Get Job Listing by ID
```
GET /api/careers/{id}/
```

### Create Job Listing (Admin Only)
```
POST /api/careers/
```

**Request Body:**
```json
{
  "title": "Marketing Executive",
  "position": "Senior Marketing Executive",
  "location": "Bengaluru",
  "job_type": "full_time",
  "description": "Create marketing campaigns...",
  "requirements": "3+ years in marketing...",
  "salary_range": "12,000 - 15,000 per month",
  "is_active": true
}
```

### Job Types
- `full_time` - Full Time
- `part_time` - Part Time
- `internship` - Internship

---

## 🎉 Events Endpoints

### Get All Events
```
GET /api/events/
```

**Response:**
```json
{
  "count": 3,
  "results": [
    {
      "id": 1,
      "title": "Wedding Special",
      "description": "Make your special day even sweeter...",
      "image": "/media/events/wedding.jpg",
      "features": "Custom flavors, Elegant packaging, Bulk orders",
      "pricing": 15000.00,
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Get Event by ID
```
GET /api/events/{id}/
```

### Create Event (Admin Only)
```
POST /api/events/
```

**Request Body:**
```json
{
  "title": "Birthday Special",
  "description": "Make birthdays special...",
  "features": "Themed packaging, Fun presentation, Home delivery",
  "pricing": 5000.00
}
```

---

## 📝 Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request data",
  "details": {
    "field_name": ["Error message"]
  }
}
```

### 401 Unauthorized
```json
{
  "detail": "Authentication credentials were not provided."
}
```

### 404 Not Found
```json
{
  "detail": "Not found."
}
```

### 500 Internal Server Error
```json
{
  "detail": "Internal server error"
}
```

---

## 🔄 Pagination

All list endpoints support pagination:

```
GET /api/flavors/?page=1&page_size=10
```

**Response includes:**
- `count`: Total number of items
- `next`: URL to next page
- `previous`: URL to previous page
- `results`: Array of items

---

## 🔍 Filtering

### By Category (Flavors)
```
GET /api/flavors/?category=signature
```

Available categories:
- `signature`
- `premium`
- `seasonal`

### By Active Status (Careers)
```
GET /api/careers/?is_active=true
```

---

## 📊 Search

Some endpoints support search:

```
GET /api/flavors/?search=chocolate
```

---

## ⚙️ Admin Panel

Access Django Admin at: `http://localhost:8000/admin`

**Features:**
- Create/Edit/Delete flavors
- Manage team members
- View contact messages
- Manage job listings
- Create events
- User management
- Permission management

---

## 🔐 CORS Headers

When making requests from frontend, the following CORS headers are included:

```
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Accept
```

---

## 💡 Usage Examples

### JavaScript/Fetch

```javascript
// Get all flavors
fetch('http://localhost:8000/api/flavors/')
  .then(res => res.json())
  .then(data => console.log(data))

// Submit contact form
fetch('http://localhost:8000/api/contact/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
    subject: 'Inquiry',
    message: 'Hello!'
  })
})
```

### Axios (Frontend)

```javascript
import axios from 'axios'

// Get featured flavors
axios.get('http://localhost:8000/api/flavors/featured/')
  .then(res => console.log(res.data))

// Submit contact form
axios.post('http://localhost:8000/api/contact/', {
  name: 'John',
  email: 'john@example.com',
  subject: 'Inquiry',
  message: 'Hello!'
})
```

### cURL

```bash
# Get all flavors
curl http://localhost:8000/api/flavors/

# Submit contact message
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Hello!"
  }'
```

---

## 📱 Frontend Integration

The frontend includes a pre-configured API client at `frontend/src/api/client.js`:

```javascript
import { flavorAPI, teamAPI, contactAPI } from '@/api/client'

// Use in components
const flavors = await flavorAPI.getAll()
const featured = await flavorAPI.getFeatured()
```

---

## 🚀 Rate Limiting

Currently not implemented. Add in production using:
- django-ratelimit
- throttling in DRF

---

## 📚 Additional Resources

- [Django REST Framework Docs](https://www.django-rest-framework.org/)
- [Django Docs](https://docs.djangoproject.com/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

**Last Updated: 2024**
