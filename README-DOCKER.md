# UNIMAK Website - Docker Deployment Guide

This guide explains how to deploy the UNIMAK website using Docker.

## Prerequisites

- Docker and Docker Compose installed
- PostgreSQL database (will be created automatically via docker-compose)

## Quick Start

1. **Clone the repository and navigate to the project directory**

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your database password and JWT secret.

3. **Build and start containers**
   ```bash
   docker-compose up -d --build
   ```

4. **Access the website**
   - Website: http://localhost
   - Admin Login: http://localhost/#/admin/login
   - Default password: `admin123` (change this after first login!)

## Configuration

### Environment Variables

Edit `.env` file to configure:

- `DB_PASSWORD`: PostgreSQL database password
- `JWT_SECRET`: Secret key for JWT tokens (change in production!)
- `DEFAULT_ADMIN_PASSWORD`: Initial admin password (only used if no admin exists)

### Ports

- `80`: HTTP (Nginx)
- `443`: HTTPS (if SSL configured)
- `3001`: Backend API (internal)

## Admin Features

### Login
- Navigate to `/admin/login`
- Enter your password
- Default password: `admin123`

### Change Password
1. Login to admin panel
2. Go to "Change Password" section
3. Enter current password
4. Enter new password twice
5. Click "Update Password"

### File Upload
1. Login to admin panel
2. Go to "File Upload" section
3. Click "Choose Files"
4. Select files (JPG, PNG, GIF, MP4, MP3)
5. Files are uploaded and saved to `/uploads` volume

## Database

The database is automatically initialized with:
- `admin` table for storing admin credentials
- Default admin user (if none exists)

**Note**: Database schema will be created automatically on first run.

## Volumes

- `postgres_data`: PostgreSQL data persistence
- `./server/uploads`: Uploaded files directory

## Production Deployment

### SSL/HTTPS Setup

1. Place SSL certificates in `nginx/ssl/` directory:
   - `cert.pem` (certificate)
   - `key.pem` (private key)

2. Update `nginx/nginx.conf` to enable SSL:
   ```nginx
   server {
       listen 443 ssl;
       ssl_certificate /etc/nginx/ssl/cert.pem;
       ssl_certificate_key /etc/nginx/ssl/key.pem;
       # ... rest of config
   }
   ```

### Security Recommendations

1. **Change default passwords**:
   - Database password
   - Admin password
   - JWT secret

2. **Use strong JWT secret**:
   ```bash
   openssl rand -base64 32
   ```

3. **Restrict file uploads**:
   - Already restricted to: JPG, PNG, GIF, MP4, MP3
   - Max file size: 100MB

4. **Firewall rules**:
   - Only expose port 80/443
   - Block direct access to port 3001

## Troubleshooting

### Check logs
```bash
docker-compose logs -f web
docker-compose logs -f db
docker-compose logs -f nginx
```

### Restart services
```bash
docker-compose restart
```

### Reset database
```bash
docker-compose down -v
docker-compose up -d
```

### Access database
```bash
docker-compose exec db psql -U postgres -d unimak
```

## API Endpoints

- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify token
- `POST /api/admin/update-password` - Update password (protected)
- `POST /api/upload/file` - Upload single file (protected)
- `POST /api/upload/files` - Upload multiple files (protected)
- `GET /api/upload/files` - List uploaded files (protected)
- `DELETE /api/upload/file/:filename` - Delete file (protected)

## File Structure

```
.
├── server/           # Backend Express server
│   ├── config/      # Database configuration
│   ├── middleware/  # Auth middleware
│   ├── routes/      # API routes
│   └── uploads/     # Uploaded files (volume)
├── src/             # React frontend
├── nginx/           # Nginx configuration
├── Dockerfile       # Docker build file
└── docker-compose.yml
```

## Support

For issues or questions, please check the logs and ensure all environment variables are set correctly.

