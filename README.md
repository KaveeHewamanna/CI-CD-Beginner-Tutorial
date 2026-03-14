# CI/CD Pipeline with Jenkins

This project demonstrates a simple **CI/CD pipeline using Jenkins**.  
It is created for learning purposes and shows how Jenkins can automatically pull source code from GitHub, run build steps, execute tests, and simulate deployment.

## Project Objective

The main purpose of this project is to understand how **Continuous Integration (CI)** and **Continuous Delivery (CD)** work with Jenkins.

This demo helps show:

- How Jenkins connects with a GitHub repository
- How a pipeline is created using a `Jenkinsfile`
- How code is automatically checked out from GitHub
- How build and test stages are executed
- How Jenkins shows success or failure of the pipeline

## What is CI/CD?

### Continuous Integration (CI)
Continuous Integration means automatically integrating code changes into a shared repository and checking whether the code works correctly by running build and test steps.

### Continuous Delivery / Continuous Deployment (CD)
Continuous Delivery means the application is ready to be released after passing all stages.  
Continuous Deployment means changes are automatically deployed without manual intervention.

## What is Jenkins?

Jenkins is an automation tool used to create and run CI/CD pipelines.  
It helps automate tasks such as:

- Pulling code from GitHub
- Building the application
- Running test cases
- Generating results
- Deploying the application

## Tools and Technologies Used

- **Jenkins**
- **GitHub**
- **Git**
- **Java** (required for Jenkins)
- **Maven** (optional, for Java projects)
- **Windows Command Prompt / PowerShell**

## Pipeline Flow

The pipeline flow in this project is:

1. Developer pushes code to GitHub
2. Jenkins accesses the repository
3. Jenkins reads the `Jenkinsfile`
4. Jenkins runs each pipeline stage
5. Build and test results are shown in Jenkins
6. If all stages pass, deployment can continue

## Pipeline Stages

This project includes the following stages:

- **Checkout** – Retrieves source code from GitHub
- **Build** – Builds the application or prepares the project
- **Test** – Runs test cases or test commands
- **Deploy** – Simulates deployment

## Project Structure

```bash
CI-CD-Pipeline/
│
├── Jenkinsfile
├── README.md
└── project files
