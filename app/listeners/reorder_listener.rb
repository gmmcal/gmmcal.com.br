# frozen_string_literal: true

class ReorderListener < BaseListener
  include Publisher

  def reorder_education
    educations = Education.where(id: ids)
    reorder(educations, :education_updated)
  end

  def reorder_work_experience
    experiences = WorkExperience.where(id: ids)
    reorder(experiences, :experience_updated)
  end

  private

  def reorder(objects, event)
    objects.each do |object|
      index = ids.index(object.id)
      object.update(order: index)
      publish(event, payload_from(object))
    end
  end

  def payload_from(object)
    { hash_key(object) => object }
  end

  def hash_key(object)
    return :education if object.is_a?(Education)
    return :experience if object.is_a?(WorkExperience)

    nil
  end
end
