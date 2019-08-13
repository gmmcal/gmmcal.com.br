# frozen_string_literal: true

FactoryBot.define do
  factory :education do
    course { Faker::Educator.degree }
    institution { Faker::Educator.university }
    description { Faker::Lorem.paragraphs(number: 5).join("\n\n") }
    start_date { Faker::Date.between(from: 5.years.ago, to: 2.years.ago) }
    locale { :en }

    trait :invalid do
      course { nil }
    end

    trait :finished do
      end_date { Faker::Date.between(from: 2.years.ago, to: 1.year.ago) }
    end
  end
end
