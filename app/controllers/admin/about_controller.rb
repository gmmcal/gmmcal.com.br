# frozen_string_literal: true

module Admin
  class AboutController < AdminController
    before_action :set_about, only: %i[edit update destroy]

    # GET /abouts
    def index
      @abouts = About.all
    end

    # GET /abouts/new
    def new
      @about = About.new
    end

    # GET /abouts/1/edit
    def edit; end

    # POST /abouts
    def create
      @about = About.new(about_params)

      if @about.save
        redirect_to %i[admin abouts],
                    notice: 'About was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /abouts/1
    def update
      if @about.update(about_params)
        redirect_to %i[admin abouts],
                    notice: 'About was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /abouts/1
    def destroy
      @about.destroy
      redirect_to %i[admin abouts],
                  notice: 'About was successfully destroyed.'
    end

    private

    def set_about
      @about = About.find(params[:id])
    end

    def about_params
      params.require(:about).permit(allowed_fields)
    end

    def allowed_fields
      %i[job_title description cv city country phone_number email locale contentful_id]
    end
  end
end
