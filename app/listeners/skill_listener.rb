# frozen_string_literal: true

class SkillListener < BaseListener
  def skill_created
    clear_cache
  end

  def skill_updated
    clear_cache
  end

  def skill_destroyed
    clear_cache
  end

  private

  def clear_cache
    self.class.cache.delete("#{skill.locale}/skills")
  end
end
