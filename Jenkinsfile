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
        sh "'${mvnHome}/bin/mvn' --settings settings.xml clean package -Pbundle -DskipTests"
    }
    stage('Test') {
        sh "'${mvnHome}/bin/mvn' --settings settings.xml test"
    }    
    stage("Deploy"){
        // Deploy to Artifactory
        sh "'${mvnHome}/bin/mvn' --settings settings.xml deploy"
    }

    stage("Archive") {
        archiveArtifacts artifacts: 'vro/workflows/target/*.zip', fingerprint: true
        archiveArtifacts artifacts: 'vro/workflows/target/*.package', fingerprint: true
        archiveArtifacts artifacts: 'vro/actions/target/*.package', fingerprint: true
    }
}
