# frozen_string_literal: true

FactoryBot.define do
  factory :skill do
    name { Faker::Job.key_skill }
    value { Faker::Number.between(30, 100) }
    locale { :en }

    trait :invalid do
      name { nil }
    end
  end
end
