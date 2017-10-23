FactoryBot.define do
  factory :skill do
    name { Faker::Job.key_skill }
    hero { Faker::HowIMetYourMother.catch_phrase }
    locale :en
    contentful_id { Faker::Crypto.md5 }
  end
end
