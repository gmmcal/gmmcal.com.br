# frozen_string_literal: true

module Admin
  class WorkExperiencesController < AdminController
    before_action :set_work_experience, only: %i[show edit update destroy]

    # GET /work_experiences
    def index
      @work_experiences = WorkExperience.ordered
    end

    # GET /work_experiences/1
    def show; end

    # GET /work_experiences/new
    def new
      @work_experience = WorkExperience.new(locale: I18n.locale)
    end

    # GET /work_experiences/1/edit
    def edit; end

    # POST /work_experiences
    def create
      @work_experience = WorkExperience.new(work_experience_params)

      if @work_experience.save
        redirect_to [:admin, @work_experience],
                    notice: 'Work experience was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /work_experiences/1
    def update
      if @work_experience.update(work_experience_params)
        redirect_to [:admin, @work_experience],
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

    def set_work_experience
      @work_experience = WorkExperience.find(params[:id])
    end

    def work_experience_params
      params.require(:work_experience).permit(allowed_fields)
    end

    def allowed_fields
      %i[company_name position city country start_date description locale]
    end
  end
end
