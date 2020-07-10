class CreateAbouts < ActiveRecord::Migration[6.0]
  def change
    create_table :abouts do |t|
      t.references :ichikawa_satsuki, index: true
      t.string :title
      t.text :sub_title
      t.text :body
      t.text :image_url

      t.timestamps
    end
  end
end
