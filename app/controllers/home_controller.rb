class HomeController < ApplicationController
  layout 'home'
  def index
    @posts = Post.all
  end

end
