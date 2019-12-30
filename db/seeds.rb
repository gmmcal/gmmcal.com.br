# frozen_string_literal: true

puts '== Create/Update default user ================================================='
User.where(
  first_name: 'Gustavo',
  last_name: 'Cunha',
  email: 'email@example.com',
  default_locale: :en
).first_or_create(password: 'password2018')
