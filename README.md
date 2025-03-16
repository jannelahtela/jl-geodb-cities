# JL GeoDB Cities App

A React + TypeScript application that allows users to search for cities using the **GeoDB Cities API** and view city details in a **table format**. Clicking on a city name opens a **dialog with additional details**, including **population, region, coordinates, and a link to WikiData**.

## Features
✅ **Search Cities** – Users can search for cities dynamically.  
✅ **Debounced API Calls** – Prevents hitting the rate limit with optimized requests.  
✅ **City List in Table Format** – Displays structured city data in a table using Material-UI.  
✅ **City Details Dialog** – Clicking a city opens a modal with more information.  
✅ **Material-UI Integration** – Uses `@mui/material` for modern UI components.  
✅ **Error Handling & Loading Indicators** – Displays errors and a spinner while fetching data.  

---

## **Tech Stack**
- **Frontend:** React + TypeScript
- **Styling:** Material-UI (`@mui/material`)
- **State Management:** React Hooks
- **API Handling:** Axios (`axios`)
- **Debouncing:** Lodash (`lodash`)
- **Routing:** React Router (`react-router-dom`)
- **Deployment:** Vercel or Netlify

---

## **Installation Guide**
### Clone the Repository
```sh
git clone git@github.com:jannelahtela/jl-geodb-cities.git
cd jl-geodb-cities
```

### Install Dependencies
```sh
npm install
```

### Step 1: Create an `.env.local` File
```sh
REACT_APP_GEODB_API_KEY=your_rapidapi_key_here
```

### Step 2: Start the Development Server

```sh
npm start
```

