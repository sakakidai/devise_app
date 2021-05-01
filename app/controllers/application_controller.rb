class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # テスト用トークンが一致しなくても例外が発生しない
  protect_from_forgery
end
