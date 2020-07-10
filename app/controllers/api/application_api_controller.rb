module Api
  class ApplicationApiController < ::ActionController::API
    protected

    def owner
      @owner ||= IchikawaSatsuki.order(:id).first
    end
  end
end
