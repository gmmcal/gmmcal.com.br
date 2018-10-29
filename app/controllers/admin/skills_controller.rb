# frozen_string_literal: true

module Admin
  class SkillsController < AdminController
    before_action :set_skill, only: %i[show edit update destroy]

    # GET /admin/skills
    def index
      @skills = Skill.all
      authorize @skills
    end

    # GET /admin/skills/1
    def show
      authorize @skill
    end

    # GET /admin/skills/new
    def new
      @skill = Skill.new(locale: I18n.locale)
      authorize @skill
    end

    # GET /admin/skills/1/edit
    def edit
      authorize @skill
    end

    # POST /admin/skills
    def create
      @skill = Skill.new(skill_params)
      authorize @skill

      if @skill.save
        redirect_to [:admin, @skill],
                    notice: 'Skill was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /admin/skills/1
    def update
      authorize @skill
      if @skill.update(skill_params)
        redirect_to [:admin, @skill],
                    notice: 'Skill was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /admin/skills/1
    def destroy
      @skill.destroy
      authorize @skill
      redirect_to %i[admin skills],
                  notice: 'Skill was successfully destroyed.'
    end

    private

    def set_skill
      @skill = Skill.find(params[:id])
    end

    def skill_params
      params.require(:skill).permit(allowed_fields)
    end

    def allowed_fields
      %i[name value locale]
    end
  end
end
