# frozen_string_literal: true

FactoryBot.define do
  factory :about do
    job_title { Faker::Job.title }
    description { "<p>#{Faker::Lorem.paragraphs(number: 5).join("\n\n")}</p>" }
    city { Faker::Address.city }
    country { Country.random }
    phone_number { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    locale { :en }

    trait :invalid do
      job_title { nil }
    end
  end
end
