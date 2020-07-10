class Contacts::Mailer < ApplicationMailer
  def send_contact(contact)
    @contact = contact

    mail(
      subject: '[ichikawasatsuki.com] お問い合わせが届いています。',
      return_path: '写真家 市川五月' <no-reply@ichikawasatsuki.com>',
      to: ENV['DEFAULT_MAIL_ADRESS']
    )
  end
end
