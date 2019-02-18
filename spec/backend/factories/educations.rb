# frozen_string_literal: true

FactoryBot.define do
  factory :education do
    course { Faker::Educator.degree }
    institution { Faker::Educator.university }
    description { Faker::Lorem.paragraphs(5).join("\n\n") }
    start_date { Faker::Date.between(5.years.ago, 2.years.ago) }
    locale { :en }

    trait :invalid do
      course { nil }
    end
  end
end
