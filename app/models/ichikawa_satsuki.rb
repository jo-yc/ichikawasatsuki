class IchikawaSatsuki < ApplicationRecord
  has_many :abouts, dependent: :destroy
end
