pipeline {
    agent any

    environment {
        // Set the NPM token to authenticate with the registry
        NPM_TOKEN = credentials('kilme-npm-access-token')
    }

    stages {
        stage('Change version') {
            steps {
                // Update npm version package
                sh 'npm version 1.0.$BUILD_ID'
            }
        }

        stage('Moved files from src to root') {
            steps {
                sh 'mv ./src/* .'
            }
        }

        stage('Publish') {
            steps {
                // Publish the npm package to the registry
                sh 'echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc'
                sh 'npm publish'
            }
        }
    }
}