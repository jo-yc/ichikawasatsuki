
module Api
  class ContactController < ApplicationApiController
    def create
      @contact = ContactForm.new(contact_params)
      if @contact.save
        render json: { message: I18n.t('views.common.sent_a_message') }, status: :ok
      else
        render json: { errors: @contact.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def contact_params
      params.require(:contact).permit(:name, :email, :date, :place, :message, :privacy_policy, shooting_types: [])
    end
  end
end
