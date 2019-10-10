node {
    def mvnHome
    stage('Preparation') {
        // Get the Maven tool.     
        mvnHome = tool 'Maven'
        sh "'${mvnHome}//bin//mvn' -version"
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        echo 'Hello World'
    }

}
