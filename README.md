gmmcal.com.br
=============

[![build](https://travis-ci.org/gmmcal/gmmcal.com.br.svg?branch=master)](https://travis-ci.org/gmmcal/gmmcal.com.br)
[![code climate](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/gpa.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![issue count](https://codeclimate.com/github/gmmcal/gmmcal.com.br/badges/issue_count.svg)](https://codeclimate.com/github/gmmcal/gmmcal.com.br)
[![security](https://hakiri.io/github/gmmcal/gmmcal.com.br/master.svg)](https://hakiri.io/github/gmmcal/gmmcal.com.br/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ac7e69313af848fa9cf0b91badec541a)](https://www.codacy.com/app/gmmcal/gmmcal.com.br)

My personal website code

# Requirements

This app was built using ruby 2.4.2.

# Installing

After cloning this app, run the following commands:

If you use RVM, make sure you have ruby 2.4.2 installed. If so, when in the app folder, run (change .x for the minor version of your ruby. I.E.: 2.4.0)

```
rvm rvmrc create ruby-2.4.2@gmmcal.com.br --ruby-version
rvm use ruby-2.4.2@gmmcal.com.br
bundle install
rake db:create db:migrate db:seeds
```

The go to your browser and load ```localhost:3000```.

# Contributing

Please, check [Contributing](https://github.com/gmmcal/gmmcal.com.br/blob/master/CONTRIBUTING.md)
