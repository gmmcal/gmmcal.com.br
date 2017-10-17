module ApplicationHelper
  def ldate(dt, hash = {})
    dt ? l(dt, hash) : t(:current, scope: [:template])
  end

  def categories(porfolios)
    porfolios.pluck(:categories).flatten.uniq
  end

  def categories_as_class(porfolio)
    porfolio.categories.map(&:parameterize).join(' ')
  end
end
