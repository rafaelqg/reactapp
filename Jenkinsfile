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
                //sh 'apt-get update' 
                //sh 'apt-get install --assume-yes nodejs'
                sh 'node -v' 
                //sh 'apt-get install --assume-yes npm'
               // sh 'npm install' 
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
            }
        }
         
         stage('Deploy') { 
            steps {
                echo "Deploying..."
            }
        }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
          }
     }
}
