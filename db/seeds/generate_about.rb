ichikawa_satsuki = IchikawaSatsuki.order(:id).first
About.create!(
  ichikawa_satsuki: ichikawa_satsuki.id,
  title: "I'm here to capture your moments",
  sub_title: 'Hi! I’m Missio, a wedding photographer currently working and residing in London. I absolutely love shooting weddings because there are so many feelings to capture.',
  body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus.',
  image_url: 'https://res.cloudinary.com/jo-test/image/upload/v1594141502/about2_qm5a4z.jpg'
)
