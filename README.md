Personal Website: [https://www.gustavocunha.dev](https://www.gustavocunha.dev)
=============

[![github tag](https://img.shields.io/github/tag/gmmcal/gmmcal.com.br.svg)](https://github.com/gmmcal/gmmcal.com.br/releases)
![repo size](https://img.shields.io/github/repo-size/gmmcal/gmmcal.com.br.svg)
[![license](https://img.shields.io/github/license/gmmcal/gmmcal.com.br.svg)](LICENSE)

[![Build Status](https://travis-ci.com/gmmcal/gmmcal.com.br.svg?branch=master)](https://travis-ci.com/gmmcal/gmmcal.com.br)
[![security](https://hakiri.io/github/gmmcal/gmmcal.com.br/master.svg)](https://hakiri.io/github/gmmcal/gmmcal.com.br/master)

My personal website code, playground and learning lab.

# Features
![Ruby](https://img.shields.io/badge/Ruby-v2.6.5-green.svg?logo=Ruby)
![Node](https://img.shields.io/badge/Node-v12.0.0-green.svg?logo=Node.js)
![Postgres](https://img.shields.io/badge/Postgres-v11.4-green.svg?logo=Postgresql)

![Rails](https://img.shields.io/badge/Rails-v6.0.0-green.svg?logo=Rails)
![Vue](https://img.shields.io/badge/VueJS-v2.6.10-green.svg?logo=Vue.js)

![Bundler](https://img.shields.io/badge/Bundler-v1.17.2-green.svg?logo=Bundler)
![NPM](https://img.shields.io/badge/NPM-v6.9.0-green.svg?logo=NPM)
![Yarn](https://img.shields.io/badge/Yarn-v1.17.3-green.svg?logo=Yarn)
![Webpack](https://img.shields.io/badge/Webpack-v4.39.1-green.svg?logo=Webpack)

This website is a result of years of constant learning. The template was purchased at [ThemeForest](https://themeforest.net/item/flato-responsive-resume-personal-portfolio-temp/6486867) in 2014 and customized by me, with help from [Mac Giovanni](https://github.com/maclevison) and [Carlyson Oliveira](https://github.com/carlyson).

Currently, it features a full-stack custom CMS backend built on top of [Ruby on Rails](https://rubyonrails.org/) and a frontend powered by [Vue.js](https://vuejs.org/) with a print friendly feature. It is deployed on [Heroku](https://www.heroku.com/). Backend tests are written in [RSpec](http://rspec.info/), frontend tests are written in [Jest](https://jestjs.io/) and end-to-end tests are written in [Cypress](https://www.cypress.io/).

All [testing](./spec/)/deployment pipelines are managed by a [Travis](https://travis-ci.com/gmmcal/gmmcal.com.br) [script](./.travis.yml) and works automatically (pull request application deployment is managed by Heroku). Code is reviewed by [Ebert](https://ebertapp.io/github/gmmcal/gmmcal.com.br), maintainability is managed by [Code Climate](https://codeclimate.com/github/gmmcal/gmmcal.com.br) and code security is managed by [Hakiri](https://hakiri.io/github/gmmcal/gmmcal.com.br/).

# Development
[![github issues](https://img.shields.io/github/issues/gmmcal/gmmcal.com.br.svg)](https://github.com/gmmcal/gmmcal.com.br/issues)
[![codeclimate issue count](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/issue_count.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![SourceLevel](https://app.sourcelevel.io/github/gmmcal/gmmcal.com.br.svg)](https://app.sourcelevel.io/github/gmmcal/gmmcal.com.br)

## Requirements

The latest version of this app was built to be used with Ruby 2.6.x, but it should work on any Ruby >= 2.5. It also requires Postgres 11.0, Node 12.0 and Yarn 1.15.

I'll not provide instructions on how to install them because this instructions could potentially be out-of-date soon.

## Installing

The instructions below assumes that your computer has [RVM](https://rvm.io) configured.

* If you use `rbenv`, please check it's documentation for **steps 1 and 2** or skip to **step 3**, at your will.
* If you do not use any ruby version manager, **start from step 3**.

After cloning this repository, run the following commands:

1. `rvm rvmrc create ruby-2.6.5@gmmcal.com.br --ruby-version` to create a gemset for this project.
1. `rvm use ruby-2.6.5@gmmcal.com.br` to select the current gemset. Next time you try to use this project, RMV will auto-select for you.
1. `bundle install` to install all ruby gems.
1. `yarn install` to install all javascript packages.
1. `cp env.example .env` to configure foreman startup.

## Database

This application uses Postgres database. All credentials are provided in `config/database.yml` file. By default, it will use your current computer username to access database. You can modify it at your will, but it should not be pushed to this repository.

After database credentials are set, run the following commands to make it ready to work.

1. `rake db:create` to create database.
1. `rake db:migrate` to migrate the database structure to it's latest state.
1. `rake db:seed:all` to add some dummy data to database.

## Running application

To run the application, you can run the following command.

```
rails server
```

This will start local `rails` and `webpack` servers. By default, `rails` will run on port `3000` and `webpack` will run on port `3035`. Make sure there are nothing else running on those ports.

If everything is fine, go to your browser and load [http://localhost:3000](http://localhost:3000) to view the website.

You can also use [Foreman](https://github.com/ddollar/foreman), [Overmind](https://github.com/DarthSim/overmind) or any other process starter that is [Procfile](Procfile) based.

### Admin

Admin page is accessible via `/admin` path. Development credentials are provided on [seed](db/seeds.rb) script.

## Tests
[![CodeClimate Maintainability](https://api.codeclimate.com/v1/badges/b5a87ae608a9e3957042/maintainability)](https://codeclimate.com/github/gmmcal/gmmcal.com.br/maintainability)
[![CodeClimate Test Coverage](https://api.codeclimate.com/v1/badges/b5a87ae608a9e3957042/test_coverage)](https://codeclimate.com/github/gmmcal/gmmcal.com.br/test_coverage)

This application is covered by tests on backend, frontend and end-to-end (browser) tests. All tests are located in `spec` folder.

### Backend
![Rspec](https://img.shields.io/badge/Rspec-v4.0.0.beta2-green.svg?logo=Rspec)

Backend tests are written in Ruby using RSpec. To run the tests, run `rspec` on your terminal.

### Frontend
![Jest](https://img.shields.io/badge/Jest-v24.9.0-green.svg?logo=Jest)

Frontend tests are written in Javascript using Jest. To run the tests, run `yarn test` and test suite will be running in watch mode. To run the test suite without test mode, you can run `yarn test:once`.

### End-to-end
![Cypress](https://img.shields.io/badge/Cypress-v3.4.1-green.svg?logo=Cypress)

End-to-end tests are written in Javascript using Cypress. To run the tests, run `yarn cypress` and cypress dashboard will open. To run the test suite without cypress dashboard, run `yarn cypress:ci`. Currently, Cypress only support tests on Chrome, so it is a dependency if you want to run end-to-end tests.

## Docker (experimental)

This application can be executed from a Docker container if you do not want to install all dependencies on your computer. To do so, follow the steps, after having Docker and Docker Compose properly installed in your computer.

1. On your terminal, `make docker/up`, to boot the container. If you are running this for the first time, it will take some time to install all dependencies.
1. After the first time you run, database will be empty. If you want to have some data, run `make docker/migrate docker/seed`.
1. Open your browser and visit [http://localhost:3001](http://localhost:3001).
1. To stop the container, just run `make docker/down` at anytime.

To run the tests, there are a few commands:

1. `make docker/tests/backend` to run the backend tests.
1. `make docker/tests/frontend` to run the frontend tests. At this moment, jest watch mode is not supported by current container.
1. End-to-end tests are not supported by current container.

If you change `Gemfile` or `package.json` to add or remove a dependency, you will need to rebuild the docker image. To do that, run `make docker/build`.

# Supported Devices

This website should run in all major browsers in both mobile and desktop versions. The supported browser list is featured below

### Desktop

* Firefox - Fully supported on latest release and should work on most recent ones either.
* Chrome - Fully supported on latest release and should work on most recent ones either.
* Safari - Fully supported on latest release and should work on most recent ones either.
* Internet Explorer - Partially supported on IE11 and Edge. Some animations might not be present.

### Mobile

* Android - It should work on Chrome mobile in on latest releases. Wasn't tested on Android Browser.
* iOS - Should work on iOS >= 9, but it is fully supported on latest release.
* Windows Phone - Wasn't tested.

# Changelog

The CHANGELOG is maintained on [Github releases page](https://github.com/gmmcal/gmmcal.com.br/releases).

# Code of Conduct

This repository has a [Code of Conduct](CODE_OF_CONDUCT.md) and all contributors are required to follow it.

# Contributing

Please, check [Contributing](CONTRIBUTING.md) on ways to contribute to this repository.
