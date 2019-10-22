# frozen_string_literal: true

class AboutListener < BaseListener
  def about_created
    clear_cache
  end

  def about_updated
    clear_cache
  end

  def about_destroyed
    clear_cache
  end

  private

  def clear_cache
    self.class.cache.delete("#{about.locale}/about")
  end
end
