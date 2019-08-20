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

docker/migrate: docker/create
	$(DOCKER_COMMAND) run web rake db:migrate

docker/seed:
	$(DOCKER_COMMAND) run web rake db:seed:all

docker/tests/db: docker/migrate
	$(DOCKER_COMMAND) run web rake db:test:prepare

docker/tests/backend: docker/tests/db
	$(DOCKER_COMMAND) run -e RAILS_ENV=test web rspec

docker/tests/frontend:
	$(DOCKER_COMMAND) run -e NODE_ENV=test web yarn test
