class Contacts::Mailer < ApplicationMailer
  def send_contact(contact)
    @contact = contact

    mail(
      subject: '[ichikawasatsuki.com] お問い合わせが届いています。',
      return_path: '市川五月 Official Site <no-reply@ichikawasatsuki.com>',
      to: ENV['MAIL_ADRESS']
    )
  end
end
