import { YOUTUBE } from '../constants.js';

export async function getVideosByKeyword(searchKeyword, pageToken) {
  const query = {
    part: 'snippet',
    q: searchKeyword,
    type: 'video',
    maxResults: YOUTUBE.MAX_RESULT_COUNT,
    videoDefinition: 'high',
  };
  let response;

  try {
    response = await (
      await fetch(
        `https://stoic-poitras-9ccddb.netlify.app/.netlify/functions/youtube/search?${parseQuery(query)}${pageToken ? `&pageToken=${pageToken}` : ''
        }`
      )
    ).json();
  } catch (err) {
    alert(new Error(err));
    return;
  }

  const { nextPageToken } = response;
  const videos = response.items.map(({ id, snippet }) => ({
    videoId: id.videoId,
    title: snippet.title,
    channelTitle: snippet.channelTitle,
    publishedAt: snippet.publishedAt,
    thumbnailUrl: snippet.thumbnails.medium.url,
  }));
  return {
    nextPageToken,
    videos,
  };
}

function parseQuery(query) {
  return Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&');
}