# Docker commands
DOCKER_COMMAND=docker-compose

docker/up:
	$(DOCKER_COMMAND) up -d

docker/down:
	$(DOCKER_COMMAND) down

docker/build:
	$(DOCKER_COMMAND) up -d --build

docker/create:
	$(DOCKER_COMMAND) run web rake db:create

docker/bundle:
	$(DOCKER_COMMAND) run web bundle install

docker/yarn:
	$(DOCKER_COMMAND) run web yarn install

docker/migrate: docker/bundle docker/yarn docker/create
	$(DOCKER_COMMAND) run web rake db:migrate

docker/seed: docker/migrate
	$(DOCKER_COMMAND) run web rake db:seed:all

docker/tests/db: docker/migrate
	$(DOCKER_COMMAND) run web rake db:test:prepare

docker/tests/backend: docker/tests/db
	$(DOCKER_COMMAND) run -e RAILS_ENV=test web bundle exec rspec

docker/tests/frontend: docker/yarn
	$(DOCKER_COMMAND) run -e NODE_ENV=test web yarn test

docker/tests/e2e: docker/migrate docker/seed
	$(DOCKER_COMMAND) run web yarn cypress:ci
