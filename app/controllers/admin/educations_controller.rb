# frozen_string_literal: true

module Admin
  class EducationsController < AdminController
    before_action :set_education, only: %i[edit update destroy]

    # GET /educations
    def index
      @educations = Education.all
    end

    # GET /educations/new
    def new
      @education = Education.new
    end

    # GET /educations/1/edit
    def edit; end

    # POST /educations
    def create
      @education = Education.new(education_params)

      if @education.save
        redirect_to %i[admin educations],
                    notice: 'Education was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /educations/1
    def update
      if @education.update(education_params)
        redirect_to %i[admin educations],
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

    # Use callbacks to share common setup or constraints between actions.
    def set_education
      @education = Education.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def education_params
      params.require(:education).permit(:course)
    end
  end
end
