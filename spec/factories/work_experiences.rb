# frozen_string_literal: true

FactoryBot.define do
  factory :work_experience do
    company_name { Faker::Company.name }
    position { Faker::Job.title }
    city { Faker::Address.city }
    country { Faker::Address.country }
    start_date { Faker::Date.between(5.years.ago, 2.years.ago) }
    locale :en
    contentful_id { Faker::Crypto.md5 }
  end
end
