[hideout](https://hideout-aa.herokuapp.com/) - A cloned web application of the chat platform [Discord](https://discord.com/)

Hideout is my version of the popular chat application, Discord. Through hideout, users will be able to create their own identity and chat to one another in real-time.

![splashGif](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/ezgif-2-5afdc5e3621d.gif)


## Technologies Used

* Ruby
* Javascript
* Rails
* ActionCable

# Features 

## Front-end Styling for Splash & User-Auth
![splash](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readMeSplash.png)

The splash page for hideout, users can choose to login to their user home page to use the application.

![auth](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readMeAuth.png)

The user authorization page to sign or create an account. Users individual usernames will represent their identity in the chat application.

## Server
![server](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readMeServer.png)

Users will have access to a scrollable bar of created servers that they have access to or can create themselves using the the '+' icon. The '+' icon will create a modal that they can type a server name into and submit.

## Channel
![channel](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readMeChannel.png)

Each server will grant permission to the list of channels that house each collection of messages from users. They can create a title and create channels with a unique title to add to or create discussions.

## Live-chat
![chat](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readMeChat.png)

Each channel will display the collection of messages from users registered on hideout. The hideout icon, calendar date, and corresponding message will be displayed after submission.

# Challenges
![websocket](https://raw.githubusercontent.com/jhilesyoung/hideout/main/app/assets/images/readMe/readmeChallenges.png)

The websockets were the biggest obstacle and took the most time to complete in order to finish my project. I started out initially with code that resembles the above functions with a 'speak' and 'load' function within my channel folder. The 'speak' function is connected the message submit field and the 'load' is tied to each channel that references its corressponding server id and channel id in the URL. 

Figuring out how to create the message and send it to the front-end while making sure the necessary parameters were met in the back-end was super TIME CONSUMING! But we made it, so I'm happy. Each message instance needed to have a channel and author id or it would create server errors, so I passed the corresponding information through a message variable and added key-pairs to pass it through.

For the load function, I needed to figure out a way to load the collection of messages pertaining to each channel so I mapped the response after using SQL to match the channel id to each message.

