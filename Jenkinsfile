node {
    def mvnHome
    stage('Preparation') {
        echo 'Hello World'  
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        sh "'mvn' --settings C://Users//subins//.m2//settings.xml clean package -Pbundle -DskipTests"
    }

    stage("Archive") {
        archiveArtifacts artifacts: 'vro/workflows/target/*.zip', fingerprint: true
        archiveArtifacts artifacts: 'vro/workflows/target/*.package', fingerprint: true
        archiveArtifacts artifacts: 'vro/actions/target/*.package', fingerprint: true
    }

}
