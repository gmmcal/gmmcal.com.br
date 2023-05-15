# frozen_string_literal: true

module Admin
  class EducationsController < CrudController
    # GET /admin/educations
    def index
      @educations = model.with_locale(locale).ordered
      authorize @educations
      @educations = @educations.decorate
    end

    # GET /admin/educations/new
    def new
      @education = model.new
      authorize @education
    end

    # GET /admin/educations/1/edit
    def edit
      authorize @education
    end

    # POST /admin/educations
    def create
      @education = model.new(permitted_attributes(model))
      authorize @education

      if @education.save
        publish(:education_created, education: @education)
        render_success('helpers.created')
      else
        render_failure(:new)
      end
    end

    # PATCH/PUT /admin/educations/1
    def update
      authorize @education
      if @education.update(permitted_attributes(@education))
        publish(:education_updated, education: @education)
        render_success('helpers.updated')
      else
        render_failure(:edit)
      end
    end

    # DELETE /admin/educations/1
    def destroy
      @education.destroy
      authorize @education
      publish(:education_destroyed, education: @education)
      render_success('helpers.deleted')
    end

    private

    def redirect_path
      admin_educations_path(locale: @education.locale)
    end
  end
end
