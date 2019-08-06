class GalleryController < ApplicationController
  def index; end

  def show
    @category = params[:id]
  end
end
