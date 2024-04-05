pipeline {
    agent any

    environment {
        // Set the NPM token to authenticate with the registry
        NPM_TOKEN = credentials('kilme-npm-access-token')
    }

    stages {
        stage('Build') {
            steps {
                // Install dependencies and build the npm package
                sh 'npm install'
                sh 'npm run build'
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