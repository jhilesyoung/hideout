 @channels.each do |channel|
     json.set! channel.id do 
        json.extract! channel, :id, :title, :server_id, :author_id
   end
 end

# @channels.each do |channel|
#     json.set! channel.id do 
#        json.partial! "api/channels/channel", channel: channel
#   end
# end