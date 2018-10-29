class AboutPolicy < ApplicationPolicy
  def index?
    true
  end

  def translate?
    return false unless @record.persisted?

    true
  end

  def permitted_attributes
    %i[job_title description cv city country phone_number email locale]
  end
end
