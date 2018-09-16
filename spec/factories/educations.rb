# frozen_string_literal: true

FactoryBot.define do
  factory :education do
    course { Faker::Educator.course }
    institution { Faker::Educator.university }
    description { Faker::Lorem.paragraphs(5).join("\n\n") }
    start_date { Faker::Date.between(5.years.ago, 2.years.ago) }
    locale { :en }
    contentful_id { Faker::Crypto.md5 }
  end
end
