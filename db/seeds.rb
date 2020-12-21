# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'bcrypt'

demo = User.create(
    username: "demo",
    email: "demo@gmail",
    password_digest: BCrypt::Password.create('password'),
    session_token: SecureRandom.base64
)

User.create(username: "TatteredRug", email: "kimberley@gmail.com", password: "day1")
User.create(username: "BrokenTable", email: "brokentable@gmail.com", password: "day3")
User.create(username: "WaterTastesSoGood", email: "waterTastesSogood#gmail.com", password: "day4")
User.create(username: "ABadMemory", email: "memoriesfade@gmail.com", password: "day4")
User.create(username: "GrassyAss", email: "rememberwhenyoufell@gmail.com", password: "day5")
User.create(username: "PinkPalmTree", email: "wherethepalmsat@yahoo.com", password: "day6")

Channel.create(id: 1, title: "whaexitts up", server_id: 16, author_id: 13)
Channel.create(id: 2, title: "New Channel", server_id: 16, author_id: 13)
Channel.create(id: 3, title: "Even better", server_id: 16, author_id: 13)
Channel.create(id: 4, title: "Too Many bugs!", server_id: 16, author_id: 13)
Channel.create(id: 5, title: "Right away!", server_id: 16, author_id: 13)
Channel.create(id: 6, title: "Fullstack is BRREAKING ME!", server_id: 22, author_id: 13)
Channel.create(id: 7, title: "Where are my channels!!!!!!!", server_id: 21, author_id: 13)

Server.create(id: 16, title: "Hey dudes", author_id: 13)
Server.create(id: 20, title: "Where are yall!", author_id: 13)
Server.create(id: 21, title: "Howdy", author_id: 13)
Server.create(id: 22, title: "Demon Slayer", author_id: 13)
Server.create(id: 23, title: "Sports Things", author_id: 13)
Server.create(id: 24, title: "Fashion Time", author_id: 13)
Server.create(id: 26, title: "How's it going?", author_id: 13)
Server.create(id: 27, title: "App Academy", author_id: 13)
Server.create(id: 28, title: "WTF", author_id: 13)
Server.create(id: 29, title: "CSS & HTML Tips", author_id: 13)
Server.create(id: 30, title: "Python", author_id: 13)
Server.create(id: 35, title: "Graduation Day", author_id: 13)