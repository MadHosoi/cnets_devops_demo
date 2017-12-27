# Concourse SHELL
 fly -t main login -c <concourse_url>
 fly -t main set-team -n cnets --basic-auth-username=<user> --basic-auth-password=<password>
 fly -t main -n cnets login
 fly -t main set-pipeline -p cnets-devops-demo -c main-pipeline.yml -l main-properties.yml
