pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git url: 'https://github.com/your-username/my-web-project.git', credentialsId: 'your-credentials-id'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Check if index.html exists
                sh 'test -f index.html'
                // Check if script.js exists
                sh 'test -f script.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Optionally, run some JavaScript tests here
                // If you had unit tests using a tool like Jest, run them here
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // For example, you could deploy to a server or static site service
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
