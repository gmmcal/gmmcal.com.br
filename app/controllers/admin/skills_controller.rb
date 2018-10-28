# frozen_string_literal: true

module Admin
  class SkillsController < AdminController
    before_action :set_skill, only: %i[edit update destroy]

    # GET /skills
    def index
      @skills = Skill.all
    end

    # GET /skills/new
    def new
      @skill = Skill.new
    end

    # GET /skills/1/edit
    def edit; end

    # POST /skills
    def create
      @skill = Skill.new(skill_params)

      if @skill.save
        redirect_to %i[admin skills],
                    notice: 'Skill was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /skills/1
    def update
      if @skill.update(skill_params)
        redirect_to %i[admin skills],
                    notice: 'Skill was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /skills/1
    def destroy
      @skill.destroy
      redirect_to %i[admin skills],
                  notice: 'Skill was successfully destroyed.'
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_skill
      @skill = Skill.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def skill_params
      params.require(:skill).permit(:name)
    end
  end
end
