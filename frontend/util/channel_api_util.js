export const getChannels = (serverId) => {
    return $.ajax({
        method: "GET",
        url: `api/servers/${serverId}/channels`
    });
};

export const createChannel = (channel) => {
    return $.ajax({
        method: "POST",
        url: "api/servers/serverId/channels",
        data: { channel }
    });
};

export const getChannel = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/servers/serverId/${channelId}`
    });
};

export const deleteChannel = (channelId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/servers/serverId/${channelId}`
    });
};