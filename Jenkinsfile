pipeline {
     /*
    agent {
       
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
       
    }
     */
    stages {
        stage('Build') { 
            steps {
                echo "building states"
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
