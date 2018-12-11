# frozen_string_literal: true

module Admin
  class AboutController < AdminController
    before_action :set_about, only: %i[edit update destroy]

    # GET /admin/about
    def index
      @about = model.find_for_locale(locale)
      authorize @about
    end

    # GET /admin/about/1/edit
    def edit
      authorize @about
    end

    # POST /admin/about
    def create
      @about = model.new(permitted_attributes(model))
      authorize @about

      if @about.save
        redirect_to redirect_path,
                    notice: t(:created, scope: %i[helpers], model: human_model)
      else
        render :new
      end
    end

    # PATCH/PUT /admin/about/1
    def update
      authorize @about
      if @about.update(permitted_attributes(@about))
        redirect_to redirect_path,
                    notice: t(:updated, scope: %i[helpers], model: human_model)
      else
        render :edit
      end
    end

    # DELETE /admin/about/1
    def destroy
      @about.destroy
      authorize @about
      redirect_to redirect_path,
                  notice: t(:deleted, scope: %i[helpers], model: human_model)
    end

    private

    def redirect_path
      admin_abouts_path(locale: @about.locale)
    end

    def set_about
      @about = model.find(params[:id])
    end
  end
end
