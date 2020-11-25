import * as ChannelAPiUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const getChannels = (serverId) => dispatch => {
    return ChannelAPiUtil.getChannels(serverId)
        .then((channels) => dispatch({
            type: RECEIVE_CHANNELS,
            channels
        }));
};

export const getChannel = (channelId) => dispatch => {
    return ChannelAPiUtil.getChannel(channelId)
        .then((channel) => dispatch({
            type: RECEIVE_CHANNEL,
            channel
        }));
};

export const createChannel = (channel) => dispatch =>{
    return ChannelApiUtil.createChannel(channel)
        .then((channel) => dispatch({
            type: RECEIVE_CHANNEL,
            channel
        }))
}

export const deleteChannel = (channelId) => dispatch =>  {
    return ChannelApiUtil.deleteChannel(channelId)
        .then(() => dispatch({
            type: REMOVE_CHANNEL,
            channel
        }));
};