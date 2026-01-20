# Workflow Template Viewer

## Overview

The **Workflow Template Viewer** is a lightweight, standalone React application built as part of the **AI Marketplace module**.
The application allows users to browse a catalog of pre-built workflow templates designed for content creators and view detailed information about each workflow.

This project focuses purely on **frontend implementation using static data**, with no backend services, APIs, or database integration.

---

## Features Implemented

* Standalone React application set up using **Vite**
* Static workflow template data loaded from a **JSON file**
* Card-based grid layout to display available workflow templates
* Reusable workflow card component to present basic template information
* Detail modal that opens on template selection
* Modal displays complete workflow details including:

  * Description
  * Workflow steps
  * Estimated time
  * Estimated cost
* State management for handling template selection and modal open/close behavior
* Clean and modular project structure for easy extensibility

---

## Tech Stack

* **React (JavaScript)**
* **Vite** for project setup and development
* **CSS** for basic layout and styling
* **Static JSON** for workflow template data

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

1. Workflow templates are defined in a static JSON file.
2. The main template list page loads and displays all templates in a grid format.
3. Each workflow is represented as a clickable card.
4. Clicking a card opens a modal showing detailed workflow information.
5. The modal can be closed using the close button or by clicking outside the modal.

---

## Scope

### In Scope

* Frontend UI for browsing workflow templates
* Static data rendering
* Modal-based detail view

### Out of Scope

* Backend services
* APIs or database integration
* Workflow execution logic
* Authentication or user management

---

## Current Status

The core functionality for viewing workflow templates using static data has been successfully implemented.
---

