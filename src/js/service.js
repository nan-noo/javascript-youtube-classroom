import { fetchSearchResult } from './API.js';
import intersectionObserver from './states/intersectionObserver.js';
import pageToken from './states/pageToken.js';
import videoInfos from './states/videoInfos.js';
import {
  renderVideoLoader,
  renderVideoSearchResult,
} from './viewControllers/searchModal.js';
import $ from './utils/DOM.js';

function createVideoInfo(videoDataset) {
  const { videoId, title, channelId, channelTitle, publishTime } = videoDataset;

  return {
    id: { videoId },
    snippet: { title, channelId, channelTitle, publishTime },
    isWatched: false,
  };
}

async function searchVideo(keyword) {
  renderVideoLoader();
  const { nextPageToken, items } = await fetchSearchResult(keyword);
  pageToken.set(nextPageToken);
  renderVideoSearchResult(items, videoInfos.get());

  return items;
}

function saveVideo($video) {
  const videoInfo = createVideoInfo($video.dataset);

  videoInfos.add(videoInfo);
}

function initInfiniteScroll() {
  const $lastVideo = $('#video-search-result .js-video:last-child');

  intersectionObserver.disconnect();
  intersectionObserver.observe($lastVideo);
}

export { saveVideo, searchVideo, initInfiniteScroll };