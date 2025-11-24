namespace :migrate do
  task description: :environment do
    About.all.each do |about|
      about.description = Kramdown::Document.new(about.legacy_description).to_html
      about.save
    end
    Education.all.each do |education|
      education.description = Kramdown::Document.new(education.legacy_description).to_html
      education.save
    end
    WorkExperience.all.each do |experience|
      experience.description = Kramdown::Document.new(experience.legacy_description).to_html
      experience.save
    end
  end
end
