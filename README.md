# Rick and Morty Character Explorer

Welcome to the **Rick and Morty Character Explorer**! This single-page application is built with **React**, **Vite**, **TypeScript**, and **CSS-in-JS** styling. The app fetches data from the [Rick and Morty API](https://rickandmortyapi.com/) and provides an interface to view, filter, and explore character details.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Development Decisions](#development-decisions)

---

## Features

- **Character Listing**: Displays a paginated list of characters with name and image.
- **Filter by Name**: Input field to filter characters by name.
- **Sorting**: Sort characters alphabetically by name in ascending or descending order.
- **Detailed View**: Click on a character to view detailed information.
- **Responsive UI**: Mobile-first design for accessibility on all devices.

## Tech Stack

- **React** with **Vite** for a fast, reactive UI.
- **TypeScript** for type safety.
- **Feature-Sliced Design (FSD)** for a scalable and maintainable architecture.
- **CSS-in-JS** with **Emotion** for component-based styling.

## Architecture

This project follows the **Feature-Sliced Design (FSD)** methodology, structuring the codebase around business logic and core features rather than technical concerns. This setup improves scalability, maintainability, and modularity.

### Key Architectural Choices

1. **Feature-Sliced Design (FSD)**: Organizes files by feature domains, reducing dependencies and encouraging reusability.
2. **CSS-in-JS** with **Emotion**: Provides scoped, modular styles with support for theme-based responsive styling.
3. **API Module**: Centralizes API calls and simplifies data fetching.
4. **TypeScript**: Enhances code readability and safety.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/rick-and-morty-app.git
   cd rick-and-morty-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit `http://localhost:5173` to view the app.

### Scripts

- **`npm run dev`** - Run the app in development mode.
- **`npm run build`** - Build the app for production.
- **`npm run preview`** - Preview the production build.

## Folder Structure

Following the **Feature-Sliced Design (FSD)** principles, the folder structure is organized as follows:

```plaintext
src/
├── app/                      # App configuration (routing, entry points)
│   ├── App.tsx               # Main App component and routes
│   └── index.tsx             # Entry point
├── shared/                   # Shared resources (API, styles)
│   ├── api/                  # API services (e.g., rickAndMortyAPI.ts)
│   ├── ui/                   # Reusable UI components (e.g., Button, Input)
│   └── styles/               # Global styles and theme configuration
├── entities/Character/       # Character entity (types, model)
│   ├── model/                # State and model logic for characters
│   └── ui/                   # Character UI components (e.g., CharacterCard)
├── features/                 # Specific features like sorting and filtering
├── pages/                    # Application pages (ListingPage, DetailPage)
└── widgets/                  # UI widgets like Filter controls and navigation
```

### Key Components

- **`ListingPage`**: Displays a list of characters with sorting and filtering options.
- **`DetailPage`**: Shows detailed character information on a separate page.
- **`CharacterCard`**: Displays a single character with a name, image, and link to details.
- **`rickAndMortyAPI`**: Contains API functions to interact with the Rick and Morty API.

## Deployment

This app is deployed on **[Vercel](https://vercel.com)** for live access. You can visit the live app here:

- **[Live Application URL](https://your-live-url.vercel.app/)**

---

## Development Decisions

- **Feature-Sliced Design (FSD)**: The FSD architecture makes the codebase modular and ready to scale with additional features.
- **CSS-in-JS**: Using Emotion for component styling allows us to build a modular, responsive UI without relying on external CSS libraries.
- **TypeScript**: Type safety and improved readability help catch errors early and improve developer experience.
- **Performance**: Optimized component re-renders using local state management and minimal dependencies in `useEffect` hooks.

## Potential Improvements

- **Pagination**: Add pagination for improved data handling on the listing page.
- **Error Handling**: Show user-friendly error messages for network issues or empty search results.
- **Testing**: Integrate Jest and React Testing Library for unit and integration testing.

---

Thank you for exploring this project! Please feel free to reach out with any questions or feedback.
