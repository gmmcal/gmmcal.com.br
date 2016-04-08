role :app, "#{fetch(:user)}@#{fetch(:server)}"
role :web, "#{fetch(:user)}@#{fetch(:server)}"
role :db,  "#{fetch(:user)}@#{fetch(:server)}"
set :stage, :production
# Default deploy_to directory is /var/www/my_app
set :deploy_to, "#{fetch(:base_path)}/prod"

set :puma_bind,       "unix://#{shared_path}/sockets/puma.sock"
set :puma_state,      "#{shared_path}/pids/puma.state"
set :puma_pid,        "#{shared_path}/pids/puma.pid"
set :puma_access_log, "#{shared_path}/log/puma.error.log"
set :puma_error_log,  "#{shared_path}/log/puma.access.log"
set :puma_preload_app, true
set :puma_worker_timeout, nil
set :puma_init_active_record, false  # Change to true if using ActiveRecord
