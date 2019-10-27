# frozen_string_literal: true

class ExperienceListener < BaseListener
  def experience_created
    clear_cache
  end

  def experience_updated
    clear_cache
  end

  def experience_destroyed
    clear_cache
  end

  private

  def clear_cache
    self.class.cache.delete("#{experience.locale}/work_experiences")
  end
end
