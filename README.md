gmmcal.com.br
=============

[![build](https://travis-ci.org/gmmcal/gmmcal.com.br.svg?branch=master)](https://travis-ci.org/gmmcal/gmmcal.com.br)
[![code climate](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/gpa.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![issue count](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/issue_count.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![security](https://hakiri.io/github/gmmcal/gmmcal.com.br/master.svg)](https://hakiri.io/github/gmmcal/gmmcal.com.br/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/286000d0699b4b6fa5563c5d91e6c551)](https://www.codacy.com/app/gmmcal/gmmcal.com.br?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gmmcal/gmmcal.com.br&amp;utm_campaign=Badge_Grade)

My personal website code

# Requirements

This app was built using ruby 2.5.1, but it should work on any ruby >= 2.3.

# Installing

After cloning this app, run the following commands:

If you use RVM, make sure you have ruby 2.5.1 installed. If so, when in the app folder, run

```
rvm rvmrc create ruby-2.5.1@gmmcal.com.br --ruby-version
rvm use ruby-2.5.1@gmmcal.com.br
bundle install
cp config/secrets-example.yml config/secrets.yml
```

The go to your browser and load ```localhost:3000```.

# Contributing

Please, check [Contributing](https://github.com/gmmcal/gmmcal.com.br/blob/master/CONTRIBUTING.md)
