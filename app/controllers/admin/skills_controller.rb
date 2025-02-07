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

      if @skill.save
        CacheCleanupJob.perform_later(id: @skill.id, model: :skills)
        render_success("helpers.created")
      else
        render_failure(:new)
      end
    end

    # PATCH/PUT /admin/skills/1
    def update
      authorize @skill
      if @skill.update(permitted_attributes(@skill))
        CacheCleanupJob.perform_later(id: @skill.id, model: :skills)
        render_success("helpers.updated")
      else
        render_failure(:edit)
      end
    end

    # DELETE /admin/skills/1
    def destroy
      @skill.destroy
      authorize @skill
      CacheCleanupJob.perform_later(id: @skill.id, model: :skills)
      render_success("helpers.deleted")
    end

    private

    def redirect_path
      admin_skills_path(locale: @skill.locale)
    end
  end
end
