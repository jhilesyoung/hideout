export const getServers = () => {
    return $.ajax({
        method: "GET",
        url: "/api/servers",
    })
}

export const createServer = (server) => {
    return $.ajax({
        method: "POST",
        url: "/api/servers",
        data: { server }
    });
};

export const getServer = (serverId) => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${serverId}`
    })
}

export const updateServer = (server) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/servers/${server.id}`,
        data: { server }
    });
};

export const deleteServer = (serverId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/servers/${serverId}`,
    });
};