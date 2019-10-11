node {
    def mvnHome
    stage('Preparation') {
        // Get the Maven tool.     
        mvnHome = tool 'Maven'
        sh "'${mvnHome}/bin/mvn' -version"
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        sh "'${mvnHome}/bin/mvn' --settings settings.xml clean package -Pbundle-with-installer -DskipTests"
    }
    stage('Test') {
        sh "'${mvnHome}/bin/mvn' --settings settings.xml test"
    }    
    stage("Deploy"){
        // Deploy to Artifactory
        sh "'${mvnHome}/bin/mvn' --settings settings.xml deploy -Pbundle"
    }
}
