node {
    def mvnHome
    stage('Preparation') {
        // Get the Maven tool.     
        mvnHome = tool 'Maven'
        echo ${mvnHome}
        echo 'Hello World'
        //sh "'${mvnHome}//bin//mvn' -version"
    }
    stage ('SCM') {
        checkout scm
    }
    stage('Build') {
        sh "'${mvnHome}/bin/mvn' clean package -Pbundle -DskipTests"
    }
    stage('Test') {
        sh "'${mvnHome}/bin/mvn' test"
    }    
    stage("Deploy"){
        // Deploy to Artifactory
        sh "'${mvnHome}/bin/mvn' deploy"
    }

    stage("Archive") {
        archiveArtifacts artifacts: 'vro/workflows/target/*.zip', fingerprint: true
        archiveArtifacts artifacts: 'vro/workflows/target/*.package', fingerprint: true
        archiveArtifacts artifacts: 'vro/actions/target/*.package', fingerprint: true
    }

}
