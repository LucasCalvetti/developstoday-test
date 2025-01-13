# Deployment Guide for DevelopsToday App

This document explains how to set up and deploy the application.

## Prerequisites

-   Ensure you have **Node.js** and **npm** installed on your machine.
-   Create a .env file both in /frontend and /backend

### Backend Environment Variables:

These variables are included here for testing purposes. In production, **never share .env files publicly**.

Backend:

```env
NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1/countries
```

Frontend:

```env
API_URL=http://localhost:3000/api
```

---

## Deployment Process

1. **Install Dependencies**

    In the root directory, run the following command to install all dependencies for both the backend and frontend:

    ```bash
    npm run install-all
    ```

2. **Run the Backend**

Open a _new terminal_ and run one of the following commands:

To start the backend in development mode:

```bash
npm run dev:back
```

OPTIONAL:

To build the backend for production:

```bash
npm run build:back
```

To start the backend after building it:

```bash
npm run start:back
```

3. **Run the Frontend**

Open another terminal and run one of the following commands:

To start the frontend in development mode:

```bash
npm run dev:front
```

OPTIONAL:

To build the frontend for production:

```bash
npm run build:front
```

To start the frontend after building it:

```bash
npm run start:front
```

**Notes**
The backend and frontend run independently, so you'll need to run them in separate terminals.
Adjust the ports in the configurations if necessary to avoid conflicts.
