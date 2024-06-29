# Issue Tracker Application

This project is an issue tracking application designed to manage and track issues effectively. The application supports features such as pagination, sorting, filtering by status, and displaying the latest issues. It is built using modern web development technologies and follows best practices for scalability and maintainability.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Components](#components)
* [API Endpoints](#api-endpoints)

## Features

* **User Authentication**: Secure login and signup functionality.
* **Issue Management**: Create, view, update, assign and delete issues.
* **Pagination**: Efficiently navigate through large lists of issues.
* **Sorting**: Sort issues by different fields (status, title, createdAt).
* **Filtering**: Filter issues based on status.
* **Responsive Design**: Optimized for both desktop and mobile devices.
* **Loading Skeletons**: Improved user experience with loading placeholders.

## Technologies Used

* **Frontend**:
  * React
  * TypeScript
  * Radix UI (for UI components)
  * React Router (for navigation)
  * React Helmet (for managing document head)
  * Axios (for API calls)
  * CSS Modules / Tailwind CSS (for styling)

* **Backend**:
  * Node.js
  * Express
  * Prisma (ORM for database management)
  * JWT (for authentication)
  * MongoDB (database)

* **Deployment**:
  * Heroku
  * Docker
  * Vercel

## Installation

### Prerequisites

* Node.js (v14 or above)
* npm or yarn
* MongoDB

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/fnuadnan/issue-tracker.git
    cd issue-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=mongodb://user:password@localhost:5432/issue-tracker
    JWT_SECRET=your_jwt_secret
    ```

4. **Run database migrations**:
    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server**:
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

1. **Login/Signup**:
   * Access the application at `http://localhost:3000`.
   * Sign up for a new account or log in with existing credentials.

2. **Managing Issues**:
   * Create new issues using the form on the dashboard.
   * View details of an issue by clicking on it.
   * Update or delete issues as needed.

3. **Pagination and Sorting**:
   * Navigate through pages of issues using the pagination controls.
   * Sort issues by clicking on the column headers.

4. **Filtering**:
   * Filter issues by status using the status filter dropdown.

## Components

### IssueActions.tsx

Handles actions related to issues such as creating and filtering.

### IssueChart.tsx

Displays a chart of issues by status.

### IssueFooter.tsx

Handles the input and submission of new issues.

### IssueStatusBadge.tsx

Displays the status of an issue with a colored badge.

### IssueSummary.tsx

Shows a summary of issues by status.

### IssueTable.tsx

Displays issues in a table with sorting functionality.

### LatestIssues.tsx

Displays the latest issues in a card format.

### LoadingIssuesPage.tsx

Displays loading skeletons while issues are being fetched.

### Pagination.tsx

Handles pagination of issues.

## API Endpoints

### Authentication

* `POST /api/auth/signup`: Sign up a new user.
* `POST /api/auth/login`: Log in an existing user.

### Issues

* `GET /api/issues`: Get all issues with optional pagination and filtering.
* `GET /api/issues/:id`: Get a specific issue by ID.
* `POST /api/issues`: Create a new issue.
* `PUT /api/issues/:id`: Update an existing issue.
* `DELETE /api/issues/:id`: Delete an issue.

### Example Request

```bash
curl -X POST http://localhost:3000/api/issues \
     -H "Authorization: Bearer your_jwt_token" \
     -H "Content-Type: application/json" \
     -d '{
           "title": "Sample Issue",
           "description": "This is a sample issue.",
           "status": "OPEN"
         }'
