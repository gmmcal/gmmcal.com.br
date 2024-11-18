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
        CacheCleanupJob.perform_later(id: @about.id, model: :about)
        render_success("helpers.created")
      else
        render_failure(:new)
      end
    end

    # PATCH/PUT /admin/about/1
    def update
      authorize @about
      if @about.update(permitted_attributes(@about))
        CacheCleanupJob.perform_later(id: @about.id, model: :about)
        render_success("helpers.updated")
      else
        render_failure(:edit)
      end
    end

    # DELETE /admin/about/1
    def destroy
      @about.destroy
      authorize @about
      CacheCleanupJob.perform_later(id: @about.id, model: :about)
      render_success("helpers.deleted")
    end

    private

    def redirect_path
      admin_abouts_path(locale: @about.locale)
    end
  end
end
