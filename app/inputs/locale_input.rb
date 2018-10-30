class LocaleInput < SimpleForm::Inputs::CollectionSelectInput
  def collection
    I18n.available_locales
  end
end
