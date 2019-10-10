node {
    def mvnHome
    stage('Preparation') {
        echo 'Hello World'  
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        sh 'mvn clean package'
    }

}
