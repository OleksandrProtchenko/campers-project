# TravelTrucks

A web application for browsing and viewing campers with filtering, pagination, a detailed camper page, reviews, and a booking form.

## Description

TravelTrucks is a Next.js + TypeScript app where users can:

- Go from the home page to the camper catalog.
- Filter campers by location, body type, engine type, and transmission.
- Load more camper cards with a Load More button.
- Open a specific camper page in a new browser tab.
- View the gallery, technical details, and reviews with a 5-star rating.
- Submit a booking form and receive a success notification.

## Key Features

- Home page with a CTA button (View Now)
- Camper catalog with backend filtering via query parameters
- Load More pagination (4 cards per request)
- Camper details page
- Image gallery built with Swiper
- Reviews section with 5-star visualization
- Booking form submission to API endpoint
- Success/error notifications
- Loader for async states
- SEO metadata for pages

## Routes

- / - home page
- /catalog - camper catalog
- /catalog/[camperId] - camper details page

## Tech Stack

- Next.js (App Router)
- TypeScript
- TanStack Query (useInfiniteQuery)
- Axios
- Swiper
- React Icons
- React Hot Toast
- CSS Modules

## Project Structure

Main directories:

- app - routes and layout
- components - UI components
- api - backend request layer
- utils - helpers and normalization functions
- public - static assets

## Installation and Run

### Requirements

- Node.js 18+ (latest LTS recommended)

### Steps

1. Clone the repository.
2. Create your local environment file based on `.env.example`:

```bash
cp .env.example .env
```

3. Install dependencies:

```bash
npm install
```

4. Run in development mode:

```bash
npm run dev
```

5. Open in browser:

```text
http://localhost:3000
```

## Available Scripts

- npm run dev - run development server
- npm run build - build production bundle
- npm run start - run production server
- npm run lint - run linter

## Repository

GitHub: https://github.com/OleksandrProtchenko/campers-project

## Live Demo

Vercel: https://campers-project-psi.vercel.app/

## Author

Name: Oleksandr Protchenko
Contact: alexfullstackdev92@gmail.com
