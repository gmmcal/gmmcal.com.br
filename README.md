gmmcal.com.br
=============

[![build](https://travis-ci.org/gmmcal/gmmcal.com.br.svg?branch=master)](https://travis-ci.org/gmmcal/gmmcal.com.br)
[![code climate](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/gpa.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![issue count](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/issue_count.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![security](https://hakiri.io/github/gmmcal/gmmcal.com.br/master.svg)](https://hakiri.io/github/gmmcal/gmmcal.com.br/master)
[![codacy](https://api.codacy.com/project/badge/Grade/c850292baefe4606b80f9efe5804551a)](https://www.codacy.com/app/gmmcal/gmmcal-com-br)

My personal website code

# Requirements

This app was built using ruby 2.4.x.

# Installing

After cloning this app, run the following commands:

If you use RVM, make sure you have ruby 2.4.x installed. If so, when in the app folder, run (change .x for the minor version of your ruby. I.E.: 2.4.0)

```
rvm rvmrc create ruby-2.4.x@gmmcal.com.br --ruby-version
rvm use ruby-2.4.x@gmmcal.com.br
bundle install
cp config/secrets-example.yml config/secrets.yml
```

The go to your browser and load ```localhost:3000```.

# Contributing

Please, check [Contributing](https://github.com/gmmcal/gmmcal.com.br/blob/master/CONTRIBUTING.md)
