# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
User.delete_all

User.create!(
  username: 'guest',
  password: 'password'
)

Bench.create!(
  description: 'An okay bench',
  lat: 37.779013,
  lng: -122.470532
)

Bench.create!(
  description: 'A bench on the beach',
  lat: 37.763014,
  lng: -122.511579
)
