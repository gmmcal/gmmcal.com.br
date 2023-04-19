# frozen_string_literal: true

module Admin
  class SkillsController < CrudController
    # GET /admin/skills
    def index
      @skills = model.with_locale(locale)
      authorize @skills
      @skills = @skills.decorate
    end

    # GET /admin/skills/new
    def new
      @skill = model.new
      authorize @skill
    end

    # GET /admin/skills/1/edit
    def edit
      authorize @skill
    end

    # POST /admin/skills
    def create
      @skill = model.new(permitted_attributes(model))
      authorize @skill

      return unless @skill.save

      publish(:skill_created, skill: @skill)
    end

    # PATCH/PUT /admin/skills/1
    def update
      authorize @skill
      return unless @skill.update(permitted_attributes(@skill))

      publish(:skill_updated, skill: @skill)
    end

    # DELETE /admin/skills/1
    def destroy
      @skill.destroy
      authorize @skill
      publish(:skill_destroyed, skill: @skill)
    end
  end
end
