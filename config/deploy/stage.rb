role :app, "#{fetch(:user)}@#{fetch(:server)}"
role :web, "#{fetch(:user)}@#{fetch(:server)}"
role :db,  "#{fetch(:user)}@#{fetch(:server)}"
set :stage, :stage
set :rvm_ruby_version, "#{fetch(:ruby_version)}@stage.#{fetch(:ruby_gemset)}"
# Default deploy_to directory is /var/www/my_app
set :deploy_to, "#{fetch(:base_path)}/stage"