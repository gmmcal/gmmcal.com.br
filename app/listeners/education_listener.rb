# frozen_string_literal: true

class EducationListener < BaseListener
  def education_created
    clear_cache
  end

  def education_updated
    clear_cache
  end

  def education_destroyed
    clear_cache
  end

  private

  def clear_cache
    self.class.cache.delete("#{education.locale}/educations")
  end
end
