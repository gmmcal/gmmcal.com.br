web: bin/rails server -p $PORT -e $RAILS_ENV -b 0.0.0.0
release: bundle exec rake db:migrate db:seed:all db:cache:clear
