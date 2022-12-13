pipeline {
     /*
     agent {  
        docker {
            image 'node' 
            args '-p 3000:3000' 
        }  
    }
    */
    agent any
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install' 
                
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
                sh "npm test"
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
               sh 'npm start'
          }
     }
}
