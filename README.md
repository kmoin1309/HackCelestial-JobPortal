

# **SkillConnect - Job and Internship Platform**

**Team:** Hackmasters  
**Hackathon:** HackCelestial 1.0 (Team ID: HC27)

## **Project Overview**

SkillConnect is an AI-powered platform designed to connect technical students with tailored job and internship opportunities. It provides a seamless experience for both applicants and recruiters, enabling personalized job matching and streamlined communication.

## **Key Features**

### For Applicants:
- **AI-driven Job Matching:** Find jobs and internships based on your skills, career goals, and preferences.
- **Profile Management:** Easily update your profile to stand out and receive tailored job alerts.
- **Job Application Dashboard:** Track your applications and receive updates in one place.

### For Recruiters:
- **Job Postings:** Create detailed job postings and find the best candidates.
- **AI Filtering:** Advanced algorithms help streamline the hiring process by filtering relevant candidates.
- **Direct Communication:** Integrated chat system for recruiter-initiated communication with applicants.

## **Technical Stack**

### **Frontend:**
- React.js for the user interface and dynamic job postings.
  
### **Backend:**
- Node.js, Socket.io, and Express.js for building the API and managing server-side logic.

### **AI & Machine Learning:**
- **Google Vertex AI** for job matching and candidate screening.
- **TensorFlow** for enhanced job-applicant filtering.
  
### **Database:**
- **PostgreSQL** for secure data storage.
- **Prisma** ORM for managing database interactions.
- **NeonDB** for serverless and scalable database services.

### **Deployment & Infrastructure:**
- **AWS Lambda** for serverless backend functions.
- **Docker** for consistent deployment across environments.
- **BigQuery** for advanced data analytics.

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SkillConnect.git
   ```
2. Navigate into the project directory:
   ```bash
   cd SkillConnect
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the `.env` file with the necessary environment variables:
   ```bash
   touch .env
   ```
   - Add your database URL, API keys (e.g., Google Vertex AI, AWS Lambda), and other credentials.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` to access the platform.

## **Usage**

### Recruiters:
1. Sign up and create job postings.
2. Use AI filtering to view relevant candidates.
3. Initiate communication with applicants via the integrated chat.

### Applicants:
1. Sign up and create a profile.
2. View jobs and apply with your tailored resume.
3. Track your applications and receive job alerts.

## **Contributing**
We welcome contributions to improve the platform! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a Pull Request.

## **License**
This project is licensed under the MIT License.
