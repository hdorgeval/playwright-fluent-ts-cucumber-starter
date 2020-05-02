import { StoryWithProps, Request, stringifyRequest } from 'playwright-fluent';
import { World } from 'cucumber';
const urlsToBeIgnored: string[] = ['/fonts/', '/assets/', '/cdn/'];

function shouldKeepRecordedRequest(request: Request): boolean {
  const url = request && request.url();
  const mustBeIgnored = urlsToBeIgnored.some((urlToBeIgnored) => url.includes(urlToBeIgnored));
  return !mustBeIgnored;
}

export const reportRecordedRequests: StoryWithProps<World> = async (p, world) => {
  const recordedRequests = p.getRecordedRequestsTo('/');
  const fileteredRequests = recordedRequests.filter(shouldKeepRecordedRequest).slice(-10);

  if (fileteredRequests.length === 0) {
    return;
  }

  await world.attach('Last 10 Requests');
  for (let index = 0; index < fileteredRequests.length; index++) {
    const request = fileteredRequests[index];
    const stringifiedRequest = await stringifyRequest(request);
    await world.attach(stringifiedRequest, 'application/json');
    await world.attach('-------------------------------------------------------');
  }
};
