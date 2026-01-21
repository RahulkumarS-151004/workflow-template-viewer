# Workflow Template Viewer

## Overview

The **Workflow Template Viewer** is a lightweight, frontend-only React application built as part of the **AI Marketplace module** at Incubrix.
It allows content creators to browse, search, and filter pre-built automation workflow templates using a clean and intuitive UI.

This application uses **static JSON data** and does not include any backend or API integration, making it easily extendable for future enhancements.

---

## Features Implemented

### ✅ Workflow Catalog

* Displays workflow templates in a **card-based grid layout**
* Each card shows:

  * Icon
  * Template name
  * Short description
  * Primary action button

### ✅ Template Detail Modal

* Clicking on a workflow opens a **modal view**
* Modal displays complete workflow information:

  * Description
  * Goal
  * Supported platforms
  * Step-by-step workflow
  * Estimated time and cost

### ✅ Search Functionality

* Search workflows by **template name**
* Case-insensitive and real-time filtering

### ✅ Filters

* **Filter by Goal** (Growth, Repurpose, Engagement, Planning)
* **Filter by Platform** (YouTube, Instagram, LinkedIn, Twitter, etc.)
* Filters can be combined with search
* “All” option resets individual filters

### ✅ Responsive Design

* Optimized for **desktop, tablet, and mobile**
* Grid and filters adjust gracefully across screen sizes

### ✅ Clean & Modern UI

* Card-based layout with hover effects
* Gradient primary buttons
* Dark-themed interface suitable for AI/SaaS products
* Consistent spacing and alignment between filters and cards

---

## Tech Stack

* **React (Vite)**
* **JavaScript (ES6+)**
* **CSS (custom, no UI library)**
* **Static JSON data**

---

## Project Structure

```
src/
├── components/
│   ├── TemplateCard.jsx
│   └── TemplateModal.jsx
├── pages/
│   └── TemplateList.jsx
├── data/
│   └── workflowTemplates.json
├── App.jsx
├── main.jsx
└── index.css
```

---

## How It Works

* Workflow data is loaded from a local JSON file
* Filters and search are implemented using React state
* The displayed templates are derived from filtered data
* No backend or API calls are used

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## Current Scope

* Frontend-only implementation
* Static data rendering
* No authentication or persistence

---


