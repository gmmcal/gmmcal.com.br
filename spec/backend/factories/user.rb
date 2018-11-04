# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password(10, 256) }
    locale { :en }

    trait :invalid do
      first_name { nil }
    end
  end
end
