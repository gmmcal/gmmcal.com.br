# frozen_string_literal: true

module Admin
  class EducationsController < AdminController
    before_action :set_education, only: %i[show edit update destroy]

    # GET /educations
    def index
      @educations = Education.all
    end

    # GET /educations/1
    def show; end

    # GET /educations/new
    def new
      @education = Education.new(locale: I18n.locale)
    end

    # GET /educations/1/edit
    def edit; end

    # POST /educations
    def create
      @education = Education.new(education_params)

      if @education.save
        redirect_to [:admin, @education],
                    notice: 'Education was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /educations/1
    def update
      if @education.update(education_params)
        redirect_to [:admin, @education],
                    notice: 'Education was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /educations/1
    def destroy
      @education.destroy
      redirect_to %i[admin educations],
                  notice: 'Education was successfully destroyed.'
    end

    private

    def set_education
      @education = Education.find(params[:id])
    end

    def education_params
      params.require(:education).permit(allowed_fields)
    end

    def allowed_fields
      %i[course institution description start_date locale]
    end
  end
end
