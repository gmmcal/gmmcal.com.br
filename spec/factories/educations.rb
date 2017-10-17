FactoryGirl.define do
  factory :education do
    course { Faker::Lorem.word }
    institution { Faker::Lorem.word }
    start_date { Faker::Date.between(5.years.ago, 2.years.ago) }
    locale :en
    contentful_id { Faker::Crypto.md5 }
  end
end
