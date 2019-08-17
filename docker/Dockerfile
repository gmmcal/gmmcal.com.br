# APT Packages
# nodejs - needed to run yarn
# yarn - needed to run Webpack, to install/compile javascript/images/css files.

# Use latest ruby version
FROM ruby:2.6.3

# Define environment variables
ENV APP_HOME /gustavocunha.dev
ENV PORT 3001
ENV DATABASE_HOST db

# Add node package urls
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install required packages.
# Refer to top of this file for explanation of why those packages are required
RUN apt-get update -qq && apt-get install -y nodejs yarn

# make sure that all dependencies were installed
RUN node -v
RUN npm -v
RUN yarn -v

# create project path
RUN mkdir /$APP_HOME
WORKDIR /$APP_HOME

# add dependencies files
ADD Gemfile $APP_HOME
ADD Gemfile.lock $APP_HOME
ADD package.json $APP_HOME
ADD yarn.lock $APP_HOME

# install dependencies
RUN bundle install
RUN yarn install
RUN gem install foreman --no-document --norc

# Add a script to be executed every time the container starts.
ADD docker/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# ready to rock!
