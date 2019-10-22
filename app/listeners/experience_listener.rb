# frozen_string_literal: true

class ExperienceListener < BaseListener
  include Publisher

  def experience_created
    clear_cache
  end

  def experience_updated
    clear_cache
  end

  def experience_destroyed
    clear_cache
  end

  def reorder_work_experience
    experiences = WorkExperience.where(id: ids)
    experiences.each do |experience|
      index = ids.index(experience.id)
      experience.update(order: index)
      publish(:experience_updated, experience: experience)
    end
  end

  private

  def clear_cache
    self.class.cache.delete("#{experience.locale}/work_experiences")
  end
end
