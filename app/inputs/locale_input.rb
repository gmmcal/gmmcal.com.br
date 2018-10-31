# frozen_string_literal: true

class LocaleInput < SimpleForm::Inputs::CollectionSelectInput
  def collection
    I18n.available_locales
  end
end
