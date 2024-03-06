class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

def create
  @user = User.create(user_params)
  if @user.save
    login!(@user)
    render :show
  else
    if @user.errors[:email].present?
      render json: { errors: ['Email is already taken'] }, status: :unprocessable_entity
    elsif @user.errors[:password].present?
      render json: { errors: ['Password is too short'] }, status: :unprocessable_entity
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end
end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
