
module Api
  class AboutController < ApplicationApiController
    before_action :setup_about
    def show
      contents = {
        title: @about.title,
        sub_title: @about.sub_title,
        body: @about.body,
        image_url: @about.image_url,
        cv_title: "Happy Customers"
      }
      render json: contents, status: :ok
    end

    def update
      new_about = About.create!(
        ichikawa_satsuki: owner,
        title: about_params[:title],
        sub_title: about_params[:sub_title],
        body: about_params[:body],
        image_url: 'https://res.cloudinary.com/jo-test/image/upload/v1594141502/about2_qm5a4z.jpg'
      )
      contents = {
        title: new_about.title,
        sub_title: new_about.sub_title,
        body: new_about.body,
        image_url: 'https://res.cloudinary.com/jo-test/image/upload/v1594141502/about2_qm5a4z.jpg',
        cv_title: about_params[:cv_title]
      }
      render json: contents, status: :ok
    end

    private

    def setup_about
      @about = About.order(:id).last
    end

    def about_params
      params.require(:about).permit(:title, :sub_title, :body, :cv_title)
    end
  end
end
