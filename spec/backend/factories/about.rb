# frozen_string_literal: true

FactoryBot.define do
  factory :about do
    job_title { Faker::Job.title }
    description { Faker::Lorem.paragraphs(5).join("\n\n") }
    cv { Faker::Internet.url }
    city { Faker::Address.city }
    country { Faker::Address.country }
    phone_number { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    locale { :en }
    contentful_id { Faker::Crypto.md5 }

    trait :invalid do
      job_title { nil }
    end
  end
end
