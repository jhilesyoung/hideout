# json.extract! @channel, :id, :title, :server_id, :author_id
json.partial! 'api/servers/server/channels/channel', channel: @channel

# json.partial! 'api/servers/server', server: @server