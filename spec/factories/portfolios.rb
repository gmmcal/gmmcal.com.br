FactoryBot.define do
  factory :portfolio do
    title { Faker::Lorem.word }
    caption { Faker::Lorem.word }
    thumbnail { Faker::Internet.url }
    image { Faker::Internet.url }
    categories { [Faker::Lorem.word] }
    locale :en
    contentful_id { Faker::Crypto.md5 }
  end
end
