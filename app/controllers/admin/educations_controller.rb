# frozen_string_literal: true

module Admin
  class EducationsController < AdminController
    before_action :set_education, only: %i[show edit update destroy]

    # GET /admin/educations
    def index
      @educations = Education.ordered
      authorize @educations
    end

    # GET /admin/educations/1
    def show
      authorize @education
    end

    # GET /admin/educations/new
    def new
      @education = Education.new(locale: I18n.locale)
      authorize @education
    end

    # GET /admin/educations/1/edit
    def edit
      authorize @education
    end

    # POST /admin/educations
    def create
      @education = Education.new(permitted_attributes(Education))
      authorize @education

      if @education.save
        redirect_to [:admin, @education],
                    notice: 'Education was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /admin/educations/1
    def update
      authorize @education
      if @education.update(permitted_attributes(@education))
        redirect_to [:admin, @education],
                    notice: 'Education was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /admin/educations/1
    def destroy
      @education.destroy
      authorize @education
      redirect_to %i[admin educations],
                  notice: 'Education was successfully destroyed.'
    end

    private

    def set_education
      @education = Education.find(params[:id])
    end
  end
end
