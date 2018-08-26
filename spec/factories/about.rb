# frozen_string_literal: true

FactoryBot.define do
  factory :about do
    job_title { Faker::Job.title }
    description { Faker::Lorem.paragraph }
    cv { Faker::Internet.url }
    locale :en
    contentful_id { Faker::Crypto.md5 }
  end
end
