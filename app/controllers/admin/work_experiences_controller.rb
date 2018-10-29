# frozen_string_literal: true

module Admin
  class WorkExperiencesController < AdminController
    before_action :set_work_experience, only: %i[show edit update destroy]

    # GET /admin/work_experiences
    def index
      @work_experiences = WorkExperience.ordered
      authorize @work_experiences
    end

    # GET /admin/work_experiences/1
    def show
      authorize @work_experience
    end

    # GET /admin/work_experiences/new
    def new
      @work_experience = WorkExperience.new(locale: I18n.locale)
      authorize @work_experience
    end

    # GET /admin/work_experiences/1/edit
    def edit
      authorize @work_experience
    end

    # POST /admin/work_experiences
    def create
      @work_experience = WorkExperience.new(work_experience_params)
      authorize @work_experience

      if @work_experience.save
        redirect_to [:admin, @work_experience],
                    notice: 'Work experience was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /admin/work_experiences/1
    def update
      authorize @work_experience
      if @work_experience.update(work_experience_params)
        redirect_to [:admin, @work_experience],
                    notice: 'Work experience was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /admin/work_experiences/1
    def destroy
      @work_experience.destroy
      authorize @work_experience
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
