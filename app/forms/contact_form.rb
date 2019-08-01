class ContactForm
  include Virtus.model
  include ActiveModel::Model

  def initialize(attributes = {}, *args)
    self.extend(Virtus.model)

    attribute_set.merge(self.class.attribute_set)
    attributes.keys.each do |name|
      attribute(name) unless attribute_set[name]
    end

    super
  end

  validates :name, presence: true
  validates :email, presence: true
  validates :date, presence: true
  validates :shooting_items, presence: true
  validates :place, presence: true
  validates :message, presence: true
  validates :privacy_policy, presence: true

  def save
    return false if invalid?

    send_contact
    true
  rescue StandardError
    false
  end

  def self.shooting_items
    {
      wedding: display_item(:wedding),
      family: display_item(:family),
      maternity: display_item(:maternity),
      new_born: display_item(:new_born),
      profile: display_item(:profile),
      business: display_item(:business),
      event: display_item(:event),
      etc: display_item(:etc)
    }
  end

  private

  def send_contact
    ::Contacts::Mailer.send_contact(self).deliver
  end

  def self.display_item(txt)
    I18n.t("views.common.shooting_items.#{txt}")
  end
end
