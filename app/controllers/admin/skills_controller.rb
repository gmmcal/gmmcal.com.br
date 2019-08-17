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
        redirect_to redirect_path,
                    notice: t(:created, scope: %i[helpers], model: human_model)
      else
        render :new
      end
    end

    # PATCH/PUT /admin/skills/1
    def update
      authorize @skill
      if @skill.update(permitted_attributes(@skill))
        redirect_to redirect_path,
                    notice: t(:updated, scope: %i[helpers], model: human_model)
      else
        render :edit
      end
    end

    # DELETE /admin/skills/1
    def destroy
      @skill.destroy
      authorize @skill
      redirect_to redirect_path,
                  notice: t(:deleted, scope: %i[helpers], model: human_model)
    end

    private

    def redirect_path
      admin_skills_path(locale: @skill.locale)
    end
  end
end
