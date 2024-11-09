# CandidateSearch

## Description

The **CandidateSearch** application is a web-based candidate search tool designed to help employers find potential hires by browsing through GitHub profiles. This application connects to the GitHub API, allowing users to review candidate profiles, save promising candidates, and revisit saved profiles later.

### Motivation

The goal of this project was to streamline the candidate search process, providing an easy-to-use tool for employers to quickly browse, evaluate, and save profiles of developers on GitHub. By utilizing GitHub as a data source, the application offers a real-time, accurate overview of candidates based on their public profile information.

### What Problem Does It Solve?

CandidateSearch simplifies the hiring process for employers who want to hire developers by:
- Displaying GitHub profile information in an organized and accessible manner.
- Allowing users to save profiles of potential candidates for later review.
- Ensuring saved profiles persist between sessions.

### What Did You Learn?

This project provided hands-on experience with:
- Integrating third-party APIs (GitHub API) and managing asynchronous data fetching.
- Working with TypeScript for type-safe development in React.
- Implementing routing, conditional rendering, and local storage for data persistence.
- Deploying a complete application to a hosting service (Render).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation

Follow these steps to set up the development environment:

1. Install dependencies:
   ```bash
   npm install

2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CandidateSearch

3. Set up your environment variables:
  - Create a .env file in the root directory.
  - Add your GitHub token to the .env file as VITE_GITHUB_TOKEN=your_token_here.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application should now be running on http://localhost:5173.

## Usage
### Candidate Search Page

1. Browse Candidates: When the application loads, it displays the first candidate's profile information, including name, username, location, avatar, email, GitHub profile link, and company.

2. Save Candidates: Click the "+" button to save the candidate to the list of potential hires, and automatically load the next candidate's profile.
3. Skip Candidates: Click the "-" button to skip a candidate without saving, loading the next candidate in the sequence.
4. No More Candidates: When there are no more candidates to review, a message will indicate that all candidates have been viewed.

### Saved Candidates Page
1. View Saved Candidates: Access the list of saved candidates, with each profile displaying name, username, location, avatar, email, GitHub profile link, and company.
2. Persistent Data: Saved candidates will remain available even after reloading the page, as they are stored in local storage.
3. Delete Saved Candidates: Remove a candidate from the saved list by clicking the “Remove” button next to their profile.

### Screenshots

## Credits
- GitHub API: GitHub REST API for retrieving user data.
- Deployment: Application hosted on Render - CandidateSearch Deployment
- Project Repository: GitHub Repo

## License
This project is licensed under the MIT License. For more information, refer to the LICENSE file in the repository.

## Features
- Real-Time Candidate Search: Pulls live data from GitHub, offering an up-to-date view of candidates.
- Persistent Saved Candidates: Utilizes local storage to keep saved candidates across sessions.
- Responsive UI: Optimized for both desktop and mobile viewing.
- Interactive Navigation: User-friendly navigation for switching between candidate search and saved candidates.