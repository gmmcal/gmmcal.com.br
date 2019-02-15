Personal Website: [https://www.gmmcal.com.br](https://www.gmmcal.com.br)
=============

[![github tag](https://img.shields.io/github/tag/gmmcal/gmmcal.com.br.svg)](https://github.com/gmmcal/gmmcal.com.br)
[![build state](https://travis-ci.org/gmmcal/gmmcal.com.br.svg?branch=master)](https://travis-ci.org/gmmcal/gmmcal.com.br)
[![security](https://hakiri.io/github/gmmcal/gmmcal.com.br/master.svg)](https://hakiri.io/github/gmmcal/gmmcal.com.br/master)

[![github issues](https://img.shields.io/github/issues/gmmcal/gmmcal.com.br.svg)](https://github.com/gmmcal/gmmcal.com.br/issues)
[![issue count](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/issue_count.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![code review](https://ebertapp.io/github/gmmcal/gmmcal.com.br.svg)](https://ebertapp.io/github/gmmcal/gmmcal.com.br)

[![maintainability score](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/gpa.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![test coverage](https://api.codeclimate.com/v1/badges/b5a87ae608a9e3957042/test_coverage)](https://codeclimate.com/github/gmmcal/gmmcal.com.br/test_coverage)

My personal website code, playground and learning lab.

# Requirements

The latest version of this app was built using Ruby 2.6.1, but it should work on any Ruby >= 2.3. It also requires Postgres >= 9.5, Node >= 10 and Yarn >= 1.9.

I'll not provide instructions on how to install them because this instructions could potentially be out-of-date soon.

# Installing

The instructions below assumes that your computer has [RVM](https://rvm.io) configured.

* If you use `rbenv`, please check it's documentation for **steps 1 and 2** or skip to **step 3**, at your will.
* If you do not use any ruby version manager, **start from step 3**.

After cloning this repository, run the following commands:

1. `rvm rvmrc create ruby-2.6.1@gmmcal.com.br --ruby-version` to create a gemset for this project.
1. `rvm use ruby-2.6.1@gmmcal.com.br` to select the current gemset. Next time you try to use this project, RMV will auto-select for you.
1. `bundle install` to install all ruby gems.
1. `yarn install` to install all javascript packages.

# Database

This application uses Postgres database. All credentials are provided in `config/database.yml` file. By default, it will use your current computer username to access database. You can modify it at your will, but it should not be pushed to this repository.

After database credentials are set, run the following commands to make it ready to work.

1. `rake db:create` to create database.
1. `rake db:migrate` to migrate the database structure to it's latest state.
1. `rake db:seed:all` to add some dummy data to database.

# Running application

To run the application, you can run the following command.

```
foreman start
```

This will start local `rails` and `webpack` servers. By default, `rails` will run on port `3000` and `webpack` will run on port `3035`. Make sure there are nothing else running on those ports.

If everything is fine, go to your browser and load [http://localhost:3000](http://localhost:3000) to view the website.

# Admin

Admin page is accessible via `/admin` path. Development credentials are provided on [seed](db/seeds.rb) script.

# Tests

This application is covered by tests on backend, frontend and end-to-end (browser) tests. All tests are located in `spec` folder.

## Backend

Backend tests are written in Ruby using RSpec. To run the tests, run `rspec` on your terminal.

## Frontend

Frontend tests are written in Javascript using Jest. To run the tests, run `yarn test` and test suite will be running in watch mode. To run the test suite without test mode, you can run `yarn test:once`.

## End-to-end

End-to-end tests are written in Javascript using Cypress. To run the tests, run `yarn cypress` and cypress dashboard will open. To run the test suite without cypress dashboard, run `yarn cypress:ci`. Currently, Cypress only support tests on Chrome, so it is a dependency if you want to run end-to-end tests.

# Supported Devices

This website should run in all major browsers in both mobile and desktop versions. The supported browser list is featured below

## Desktop

* Firefox - Fully supported on latest release and should work on most recent ones either.
* Chrome - Fully supported on latest release and should work on most recent ones either.
* Safari - Fully supported on latest release and should work on most recent ones either.
* Internet Explorer - Partially supported on IE11 and Edge. Some animations might not be present.

## Mobile

* Android - It should work on Chrome mobile in on latest releases. Wasn't tested on Android Browser.
* iOS - Should work on iOS >= 9, but it is fully supported on latest release.
* Windows Phone - Wasn't tested.

# Code of Conduct

This repository has a [Code of Conduct](CODE_OF_CONDUCT.md) and all contributors are required to follow it.

# Contributing

Please, check [Contributing](CONTRIBUTING.md) on ways to contribute to this repository.
