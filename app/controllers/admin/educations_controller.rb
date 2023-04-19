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

      return unless @education.save

      publish(:education_created, education: @education)
    end

    # PATCH/PUT /admin/educations/1
    def update
      authorize @education
      return unless @education.update(permitted_attributes(@education))

      publish(:education_updated, education: @education)
    end

    # DELETE /admin/educations/1
    def destroy
      @education.destroy
      authorize @education
      publish(:education_destroyed, education: @education)
    end
  end
end
