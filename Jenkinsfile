pipeline {
     /*
     agent {  
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }  
    }
    */
    agent any
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'apt-get update' 
                sh 'apt install nodejs'
                sh 'npm install' 
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
            }
        }
    }
}
