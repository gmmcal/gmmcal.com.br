# frozen_string_literal: true

FactoryBot.define do
  factory :skill do
    name { Faker::Job.key_skill }
    hero { Faker::HowIMetYourMother.catch_phrase }
    value { Faker::Number.between(30, 100) }
    locale { :en }
    contentful_id { Faker::Crypto.md5 }
  end
end
