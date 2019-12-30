web: bin/rails server -p $PORT -e $RAILS_ENV -b 0.0.0.0
webpack: bin/webpack-dev-server
release: bundle exec rake db:migrate db:seed:all db:cache:clear
