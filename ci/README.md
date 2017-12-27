# Concourse SHELL
 fly -t main login -c <concourse_url>
 fly -t main set-team -n cnets --basic-auth-username=<user> --basic-auth-password=<password>
 fly -t main -n cnets login
 fly -t main set-pipeline -p cnets-devops-demo -c main-pipeline.yml -l main-properties.yml
 fly -t main unpause-pipeline -p cnets-devops-demo

 # main-properties.yml schema

 frontend-cf-api: <cf-url>
 frontend-cf-username: <cf-username@cf-org>
 frontend-cf-password: <cf-password>
 frontend-cf-org: <cf-org>
 frontend-cf-space: <cf-space>

 backend-cf-api: <cf-url>
 backend-cf-username: <cf-username@cf-org>
 backend-cf-password: <cf-password>
 backend-cf-org: <cf-org>
 backend-cf-space: <cf-space>

 cnets-chat-github-uri: <git-url>
 cnets-chat-github-branch: <git-branch>

 slack-url: <slack-url>

 cnets-backend-url: <backned-url>