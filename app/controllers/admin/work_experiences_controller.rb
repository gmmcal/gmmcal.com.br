# frozen_string_literal: true

module Admin
  class WorkExperiencesController < CrudController
    # GET /admin/work_experiences
    def index
      @work_experiences = model.with_locale(locale).ordered
      authorize @work_experiences
      @work_experiences = @work_experiences.decorate
    end

    # GET /admin/work_experiences/new
    def new
      @work_experience = model.new
      authorize @work_experience
    end

    # GET /admin/work_experiences/1/edit
    def edit
      authorize @work_experience
    end

    # POST /admin/work_experiences
    def create
      @work_experience = model.new(permitted_attributes(model))
      authorize @work_experience

      if @work_experience.save
        CacheCleanupJob.perform_later(id: @work_experience.id, model: :work_experiences)
        render_success("helpers.created")
      else
        render_failure(:new)
      end
    end

    # PATCH/PUT /admin/work_experiences/1
    def update
      authorize @work_experience
      if @work_experience.update(permitted_attributes(@work_experience))
        CacheCleanupJob.perform_later(id: @work_experience.id, model: :work_experiences)
        render_success("helpers.updated")
      else
        render_failure(:edit)
      end
    end

    # DELETE /admin/work_experiences/1
    def destroy
      @work_experience.destroy
      authorize @work_experience
      CacheCleanupJob.perform_later(id: @work_experience.id, model: :work_experiences)
      render_success("helpers.deleted")
    end

    private

    def redirect_path
      admin_work_experiences_path(locale: @work_experience.locale)
    end
  end
end
