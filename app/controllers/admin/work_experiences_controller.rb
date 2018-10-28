# frozen_string_literal: true

module Admin
  class WorkExperiencesController < AdminController
    before_action :set_work_experience, only: %i[edit update destroy]

    # GET /work_experiences
    def index
      @work_experiences = WorkExperience.all
    end

    # GET /work_experiences/new
    def new
      @work_experience = WorkExperience.new
    end

    # GET /work_experiences/1/edit
    def edit; end

    # POST /work_experiences
    def create
      @work_experience = WorkExperience.new(work_experience_params)

      if @work_experience.save
        redirect_to %i[admin work_experiences],
                    notice: 'Work experience was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /work_experiences/1
    def update
      if @work_experience.update(work_experience_params)
        redirect_to %i[admin work_experiences],
                    notice: 'Work experience was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /work_experiences/1
    def destroy
      @work_experience.destroy
      redirect_to %i[admin work_experiences],
                  notice: 'Work experience was successfully destroyed.'
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_work_experience
      @work_experience = WorkExperience.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def work_experience_params
      params.require(:work_experience).permit(:company_name)
    end
  end
end
