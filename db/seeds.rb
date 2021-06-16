# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Channel.destroy_all
Message.destroy_all

require 'bcrypt'

demo = User.create(
    username: "demo",
    email: "demo@gmail",
    password_digest: BCrypt::Password.create('password'),
    session_token: SecureRandom.base64
)

user1 = User.create(username: "TatteredRug", email: "kimberley@gmail.com", password: "day1")
user2 = User.create(username: "BrokenTable", email: "brokentable@gmail.com", password: "day3")
user3 = User.create(username: "WaterTastesSoGood", email: "waterTastesSogood@gmail.com", password: "day4")
user4 = User.create(username: "ABadMemory", email: "memoriesfade@gmail.com", password: "day4")
user5 = User.create(username: "GrassyAss", email: "rememberwhenyoufell@gmail.com", password: "day5")
user6 = User.create(username: "PinkPalmTree", email: "wherethepalmsat@yahoo.com", password: "day6")


# set the seed instances to a variable

server1 = Server.create(title: "App", author_id: user1.id)
server2 = Server.create(title: "Fun", author_id: user1.id)
server3 = Server.create(title: "HI", author_id: user2.id)
server4 = Server.create(title: "SHHHHH", author_id: demo.id)


channel1 = Channel.create(title: "Class Notes", server_id: server1.id, author_id: user1.id)
channel2 = Channel.create(title: "Spring Break Ideas", server_id: server1.id, author_id: user1.id)
channel3 = Channel.create(title: "RANT", server_id: server2.id, author_id: user2.id)
channel4 = Channel.create(title: "Secret channel, server_id: server4.id", author_id: demo.id)

message1 = Message.create(body: "Did anyone catch what Anna said at the end of class?", channel_id: channel1.id, author_id: user1.id)
message2 = Message.create(body: "Yeah, she told us to review the homework from last night for tomorrow's quiz", channel1.id, author_id: user2.id)
message3 = Message.create(body: "Why is EVERYBODY going to Tulum nowadays? Guess that means we should go to ;-)", channel_id: channel2.id, author_id: user1.id)
message4 = Message.create(body: "Why did this person spill coffee on me this morning....", channel_id: channel3.id, author_id: user2.id)
message5 = Message.create(body: "No way!!! LMAO I hope you brought a change of clothes to work xD", channel_id: channel3.id, author_id: user3.id)
message6 = Message.create(body: "Welcome to the secret hideout channel, you made it!", channel_id: channel4.id, author_id: demo.id)
