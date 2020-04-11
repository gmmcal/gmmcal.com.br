# frozen_string_literal: true

class WebsiteController < ApplicationController
  before_action :set_locale
  before_action :set_data, except: :worker
  before_action :set_flag_links, except: %i[worker cv]
  before_action :set_menu_links, except: %i[worker cv]

  private

  def fetch_from_cache(model)
    result = Rails.cache.fetch("#{I18n.locale}/#{model}") do
      retrieve_data(model)
    end
    instance_variable_set("@#{model}", result)
  end

  def retrieve_data(model)
    data = model.classify.constantize.find_for_locale(I18n.locale).decorate
    return data.to_a if data.is_a?(ActiveRecord::Relation)

    data
  end

  def set_data
    fetch_from_cache('about')
  end

  def set_flag_links
    @flags = flags.map do |flag|
      {
        link: home_path(flag),
        label: flag,
        css_class: ['flag', flag.downcase].join(' ')
      }
    end
  end

  def set_menu_links
    @links = menus.map do |page|
      {
        link: home_path(I18n.locale, anchor: page),
        label: page.to_s
      }
    end
    gon.push(menu_links: @links)
  end

  def flags
    %i[pt-BR en].delete_if { |lang| lang == I18n.locale }
  end

  def menus
    %i[home about experience skills education contact]
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
