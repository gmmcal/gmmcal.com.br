# frozen_string_literal: true

module Admin
  class SkillsController < AdminController
    before_action :set_skill, only: %i[edit update destroy]

    # GET /admin/skills
    def index
      @skills = Skill.with_locale(locale)
      authorize @skills
    end

    # GET /admin/skills/new
    def new
      @skill = Skill.new
      authorize @skill
    end

    # GET /admin/skills/1/edit
    def edit
      authorize @skill
    end

    # POST /admin/skills
    def create
      @skill = Skill.new(permitted_attributes(Skill))
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
      if @skill.update(permitted_attributes(@skill))
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
  end
end
