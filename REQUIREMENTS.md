# Frostora Project Requirements

This project has two dependency sets:

- Backend: Python packages installed with `pip`
- Frontend: Node.js packages installed with `npm`

## Backend Requirements

Install from:

```bash
pip install -r backend/requirements.txt
```

Required packages:

```txt
Django==4.2.0
djangorestframework==3.14.0
django-cors-headers==4.0.0
Pillow==10.0.0
python-dotenv==1.0.0
gunicorn==20.1.0
```

## Frontend Requirements

Install from:

```bash
cd frontend
npm install
```

Required runtime packages:

```txt
react ^18.2.0
react-dom ^18.2.0
react-router-dom ^6.11.0
axios ^1.3.0
```

Required development packages:

```txt
@types/react ^18.0.0
@types/react-dom ^18.0.0
@vitejs/plugin-react ^4.0.0
vite ^4.3.0
tailwindcss ^3.3.0
postcss ^8.4.0
autoprefixer ^10.4.0
```

## Notes

- Backend dependency file: [backend/requirements.txt](/workspaces/Frostora-icecream-main/backend/requirements.txt)
- Frontend dependency file: [frontend/package.json](/workspaces/Frostora-icecream-main/frontend/package.json)
- If you want, we can also add a dedicated `frontend/requirements.txt` style reference file, but `package.json` remains the actual install source for the frontend.
