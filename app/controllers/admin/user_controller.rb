# frozen_string_literal: true

module Admin
  class UserController < CrudController
    # GET /admin/users/1/edit
    def edit
      authorize @user
    end

    # PATCH/PUT /admin/users/1
    def update
      authorize @user
      if @user.update(permitted_attributes(@user))
        bypass_sign_in(@user)
        redirect_to %i[edit admin user],
                    notice: 'User was successfully updated.'
      else
        render :edit
      end
    end

    private

    def set_model
      @user = current_user
    end
  end
end
