node {
    def mvnHome
    stage('Preparation') {
        echo 'Hello World'  
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        mvn clean package -Pbundle -DskipTests
    }

    stage("Archive") {
        archiveArtifacts artifacts: 'vro/workflows/target/*.zip', fingerprint: true
        archiveArtifacts artifacts: 'vro/workflows/target/*.package', fingerprint: true
        archiveArtifacts artifacts: 'vro/actions/target/*.package', fingerprint: true
    }

}
