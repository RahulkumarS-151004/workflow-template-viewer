# Workflow Template Viewer – AI Marketplace

## Overview

The **Workflow Template Viewer** is a frontend module developed as part of the **AI Marketplace** initiative. It provides a clean and intuitive interface for browsing pre-built automation workflows designed for content creators. The application is currently powered by static JSON data and is structured to support seamless future integration with backend agent execution services.

---

## Key Features Implemented

### Workflow Catalog View
- Displays workflow templates in a responsive, card-based grid layout.
- Each card presents high-level workflow information for quick scanning.

### Search Functionality
- Allows users to search workflows by template name.
- Case-insensitive and responsive to real-time input.

### Filtering Capabilities
- Filter workflows by goal (e.g., Growth, Engagement, Repurpose).
- Filter workflows by supported platforms (e.g., YouTube, Instagram, LinkedIn).
- Supports combined search and filter conditions.

### Workflow Detail Modal
- Clickable cards open a modal displaying full workflow details.
- Modal includes description, steps, estimated time, cost, and required agents.
- Scrollable content area with fixed modal structure for improved usability.

### Required Agents Section
- Displays agents required to execute each workflow.
- Agent cards are UI-ready and currently marked as **“coming soon.”**
- Designed for future backend-driven agent execution integration.

### UI & UX Enhancements
- Applied provided color scheme and aligned UI with frontend design standards.
- Improved visual hierarchy and consistency across components.
- Responsive design optimized for both desktop and mobile screens.

### Edge Case Handling
- Graceful handling of empty or invalid data sets.
- Safe rendering for missing or undefined fields.
- User-friendly **“No workflows found”** state for zero results.

---

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** CSS (custom, responsive)
- **Data Source:** Static JSON
- **Architecture:** Component-based, data-driven UI

---

## Project Structure

```

src/
├── components/
│   ├── TemplateCard.jsx
│   ├── TemplateModal.jsx
|   ├── RequiredAgents.jsx
│   ├── AgentCard.jsx
├── pages/
│   └── TemplateList.jsx
├── data/
│   └── workflowTemplates.json
├── App.jsx
└── main.jsx

````

---

## How It Works

- Workflow templates are loaded from a local static JSON file and normalized to ensure safe rendering.
- Search functionality allows users to find workflows by template name using case-insensitive matching.
- Filters enable users to browse workflows by goal and supported platforms, with support for combined filter conditions.
- The displayed workflow list is dynamically derived from the filtered and searched data using React state.
- Selecting a workflow opens a detailed modal showing complete workflow information, including steps, estimated time, cost, and required agents.
- The modal uses a fixed layout with a scrollable content area to improve readability and user experience.
- Required agents are displayed as UI-ready cards, designed for future backend-driven agent execution.
- Edge cases such as empty datasets, no matching results, and missing fields are handled gracefully with fallback UI states.
- The UI is fully responsive and aligned with the provided frontend color scheme and design standards.
- The application is structured to allow seamless future integration with backend APIs without changing core UI logic.

---

## Getting Started

### Install Dependencies
```bash
npm install
````

### Run the Application

```bash
npm run dev
```

The app will be available at:
```
http://localhost:5173
```

