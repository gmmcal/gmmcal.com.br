namespace :db do
  task staging: :environment do
    [:about, :education, :skill, :work_experience].each do |model|
      ActiveRecord::Base.connection.execute("TRUNCATE #{model.to_s.tableize} RESTART IDENTITY")
    end
    Cms::Sync.all
  end
end
