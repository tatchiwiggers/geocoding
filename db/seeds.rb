# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'cleaning DB...'
Flat.destroy_all
puts 'Done cleaning DB...'


flat = Flat.create!(name: "Bom prato", address: "R. 25 de Março, 166, Centro Histórico de São Paulo")
puts "Flat Bom Prato created"
puts '-----------------------------'

flat = Flat.create!(name: "Popular", address: "440 Matias Aires, Sao Paulo")
puts "Flat Popular created"
puts '-----------------------------'


flat = Flat.create!(name: "Comedoria Sesc Pinheiros", address: "170 Copernico, Belo Horizonte")
puts "Restaurant Comedoria Sesc Pinheiros created"
puts '-----------------------------'
