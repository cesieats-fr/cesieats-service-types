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
                sh 'mv -f ./src/account ./'
                sh 'mv -f ./src/delivery ./'
                sh 'mv -f ./src/file ./'
                sh 'mv -f ./src/identity ./'
                sh 'mv -f ./src/index.ts ./'
                sh 'mv -f ./src/item ./'
                sh 'mv -f ./src/notification ./'
                sh 'mv -f ./src/order ./'
                sh 'mv -f ./src/qrcode ./'
                sh 'mv -f ./src/restaurant ./'
                sh 'mv -f ./src/sponsor ./'
                sh 'mv -f ./src/stats ./'
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