# frozen_string_literal: true

FactoryBot.define do
  factory :work_experience do
    company_name { Faker::Company.name }
    position { Faker::Job.title }
    city { Faker::Address.city }
    country { Country.random }
    start_date { Faker::Date.between(from: 5.years.ago, to: 2.years.ago) }
    description { "<p>#{Faker::Lorem.paragraphs(number: 3).join("\n\n")}</p>" }
    locale { :en }

    trait :invalid do
      company_name { nil }
    end
  end
end
