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

      if @about.save
        publish(:about_created, about: @about)
        render_success("helpers.created")
      else
        render_failure(:new)
      end
    end

    # PATCH/PUT /admin/about/1
    def update
      authorize @about
      if @about.update(permitted_attributes(@about))
        publish(:about_updated, about: @about)
        render_success("helpers.updated")
      else
        render_failure(:edit)
      end
    end

    # DELETE /admin/about/1
    def destroy
      @about.destroy
      authorize @about
      publish(:about_destroyed, about: @about)
      render_success("helpers.deleted")
    end

    private

    def redirect_path
      admin_abouts_path(locale: @about.locale)
    end
  end
end
