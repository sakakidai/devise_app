module Api
  module V1
    module Auth
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        def create
          super
        end
        private
        def sign_up_params
          params.permit(:name, :email, :password)
        end

        def account_update_params
          params.permit(:name, :email)
        end
      end
    end
  end
end

