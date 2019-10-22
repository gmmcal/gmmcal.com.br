# frozen_string_literal: true

class EducationListener < BaseListener
  include Publisher

  def education_created
    clear_cache
  end

  def education_updated
    clear_cache
  end

  def education_destroyed
    clear_cache
  end

  def reorder_education
    educations = Education.where(id: ids)
    educations.each do |education|
      index = ids.index(education.id)
      education.update(order: index)
      publish(:education_updated, education: education)
    end
  end

  private

  def clear_cache
    self.class.cache.delete("#{education.locale}/educations")
  end
end
