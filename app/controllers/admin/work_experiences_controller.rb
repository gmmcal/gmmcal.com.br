# frozen_string_literal: true

module Admin
  class WorkExperiencesController < AdminController
    before_action :set_work_experience, only: %i[edit update destroy]

    # GET /admin/work_experiences
    def index
      @work_experiences = WorkExperience.with_locale(locale).ordered
      authorize @work_experiences
    end

    # GET /admin/work_experiences/new
    def new
      @work_experience = WorkExperience.new
      authorize @work_experience
    end

    # GET /admin/work_experiences/1/edit
    def edit
      authorize @work_experience
    end

    # POST /admin/work_experiences
    def create
      @work_experience = WorkExperience.new(permitted_attributes(WorkExperience))
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
      if @work_experience.update(permitted_attributes(@work_experience))
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
  end
end
