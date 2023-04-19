# frozen_string_literal: true

module Admin
  class AboutController < CrudController
    # GET /admin/about
    def index
      @about = model.find_for_locale(locale).decorate
      authorize @about
    end

    # GET /admin/about/1/edit
    def edit
      authorize @about
    end

    # POST /admin/about
    def create
      @about = model.new(permitted_attributes(model))
      authorize @about

      return unless @about.save

      publish(:about_created, about: @about)
    end

    # PATCH/PUT /admin/about/1
    def update
      authorize @about
      return unless @about.update(permitted_attributes(@about))

      publish(:about_updated, about: @about)
    end

    # DELETE /admin/about/1
    def destroy
      @about.destroy
      authorize @about
      publish(:about_destroyed, about: @about)
    end
  end
end
